import {
    GET_SHIPS,
    GET_SHIPS_SUCCESS,
    GET_SHIPS_FAILURE
} from '../actions/types';

const initialState = {
  loading:false,
  error:false,
  ships:[],
};

export default (state = initialState,action) => {
 switch (action.type) {
     case GET_SHIPS:
     return {...state,loading:true};    
     case GET_SHIPS_SUCCESS:
     return {ships:action.payload,loading:false,error:false}
     case GET_SHIPS_FAILURE:
     return {...state,loading:false,error:true}        
     default:
     return state;
 }
};