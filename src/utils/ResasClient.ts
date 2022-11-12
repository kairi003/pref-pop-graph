import axios from 'axios'
import {PrefecturesResponse, PopulationReponse, TotalPopulationData} from 'utils/ResasModels'

const baseURL = process.env.REACT_APP_RESAS_ENDPOINT || ''
const apiKey = process.env.REACT_APP_RESAS_API_KEY || '';

const client = axios.create({
  baseURL: baseURL,
  headers: {'X-API-KEY': apiKey}
});

const getPrefectures = async () => {
  const response = await axios.get<PrefecturesResponse>('/api/v1/prefectures');
  const data = response.data;
  if (typeof data === 'number') throw new Error(data.toString());
  if (!data.result) throw new Error(data.statusCode);
  const prefsData = data.result;
  return prefsData;
}

const populationMemo = new Map<number, TotalPopulationData[]>();
const getPopulation = async (prefCode: number) => {
  if (populationMemo.has(prefCode)) return populationMemo.get(prefCode)!;
  const params = {prefCode, cityCode: '-'};
  const response = await axios.get<PopulationReponse>('/api/v1/population/composition/perYear', {params});
  const data = response.data;
  if (typeof data === 'number') throw new Error(data.toString());
  if (!data.result) throw new Error(data.statusCode);
  const totalData = data.result.data[0].data;
  populationMemo.set(prefCode, totalData);
  return totalData;
}

export default client;
export {getPrefectures, getPopulation};
