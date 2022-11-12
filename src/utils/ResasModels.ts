export type ErrorResponse = 400 | 404;

export type ResasResponse =  ErrorResponse | {
  statusCode?: string,
  message: string | null,
  description?: string
};

export type PrefectureData = {
  prefCode: number,
  prefName: string
};

export type PrefecturesResponse = ResasResponse & {
  result?: PrefectureData[]
};

export type TotalPopulationData = {
  year: number,
  value: number
}
export type PartialPopulationData = {
  year: number,
  value: number,
  rate: number
}

export type PopulationReponse = ResasResponse & {
  result?: {
    boundaryYear: number,
    data: [{
      label: '総人口',
      data: TotalPopulationData[]
    }, {
      label: '年少人口',
      data: PartialPopulationData[]
    }, {
      label: '生産年齢人口',
      data: PartialPopulationData[]
    }, {
      label: '老年人口',
      data: PartialPopulationData[]
    }, 
    ]
  }
}