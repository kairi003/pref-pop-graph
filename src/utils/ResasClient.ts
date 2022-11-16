import axios from 'axios';
import {PrefecturesResponse, PrefectureData, PopulationReponse, TotalPopulationData} from 'utils/ResasModels';

const baseURL = process.env.REACT_APP_RESAS_ENDPOINT || ''
const apiKey = process.env.REACT_APP_RESAS_API_KEY || '';

const client = axios.create({
  baseURL: baseURL,
  headers: {'X-API-KEY': apiKey}
});

let prefecturesCache: PrefectureData[] | undefined;
const getPrefectures = async (): Promise<PrefectureData[]> => {
  if (prefecturesCache) return prefecturesCache;
  const response = await client.get<PrefecturesResponse>('/api/v1/prefectures');
  const data = response.data;
  if (typeof data === 'number') throw new Error(data.toString());
  if (!data.result) throw new Error(data.statusCode);
  const prefsData = prefecturesCache = data.result;
  return prefsData;
}

const populationCache = new Map<number, TotalPopulationData[]>();
const getPopulation = async (prefCode: number) => {
  if (populationCache.has(prefCode)) return populationCache.get(prefCode)!;
  const params = {prefCode, cityCode: '-'};
  const response = await client.get<PopulationReponse>('/api/v1/population/composition/perYear', {params});
  const data = response.data;
  if (typeof data === 'number') throw new Error(data.toString());
  if (!data.result) throw new Error(data.statusCode);
  const totalData = data.result.data[0].data;
  populationCache.set(prefCode, totalData);
  return totalData;
}

export default client;
export {getPrefectures, getPopulation};
