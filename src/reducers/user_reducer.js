import { SET_USER_TYPE, CREATE_USERNAME } from '../action/index';

export default function (state= {
  userType: '',
  username: ''
}, action) {
  switch(action.type){
    case SET_USER_TYPE:
      return {...state, userType: action.payload}
    case CREATE_USERNAME:
      return {...state, username: action.payload}
    default:
      return state;
  }
}