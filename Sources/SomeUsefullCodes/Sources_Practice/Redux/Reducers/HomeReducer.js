import * as Actions from '../Actions/HomeActions';

const initialState = {
  Data: [],
  Process: false,
  Success: false,
  Error: null,
};

export default function HomeReducer(State = initialState, action) {
  switch (action.type) {
    case Actions.Data_Process:
      return {...State, Process: true};
    case Actions.Data_Success:
      return {...State, Process: false, Success: true, Data: action.payload};
    case Actions.Data_Fail:
      return {...State, Process: false, Error: action.payload};

    default:
      return State;
  }
}
