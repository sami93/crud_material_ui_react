import * as actionTypes from './actionTypes'
import { IUser } from '../../interfaces/user.interace'

export const addUserAction = (user: IUser) => {
  return {
    type: actionTypes.ADD_USER,
    payload: user
  }
}

