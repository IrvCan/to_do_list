export interface StoreModel {
  id: number,
  title: string,
  completed: boolean,
}

export interface ListModel {
  id: number,
  title: string,
  completed: boolean,

  description?: string,
  date?: Date,
  timeStart?: number,
  timeFinish?: number,
}
