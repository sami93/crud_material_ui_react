import { ADD_USER } from '../actions/actionTypes'
import { IAction } from '../../interfaces/action.interface'
import { IUsers } from '../../interfaces/user.interace'


const initialState: IUsers = {
    users: [{
        name: "sami",
        job: "engineer"
    }]

  }

const addUserMethod = (state: IUsers, action: IAction) => {
  return {
    ...state,
    users: [...state.users, action.payload]
    // [chatsMessages]: action.payload.chat ? [...state[chatsMessages], action.payload.chat] : [...state[chatsMessages]]
  }
}


const reducer = (state: IUsers = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_USER:
      return addUserMethod(state, action)

    default:
      return state
  }
}

export default reducer
