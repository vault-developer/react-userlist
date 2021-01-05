export interface IUserWithoutId {
  firstName: string
  lastName: string
  age: number
}

export interface IUser extends IUserWithoutId {
  id: string
}

export interface IUsersById {
  [key: string]: IUserWithoutId
}

export interface IUsersState {
  byId: IUsersById,
  selectedIds: string[],
  allIds: string[],
  page: number,
  pageSize: number
}
