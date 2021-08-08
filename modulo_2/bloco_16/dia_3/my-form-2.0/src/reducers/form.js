import {
  CHANGE_NAME,
  CHANGE_EMAIL,
  CHANGE_CPF,
  CHANGE_ADDRESS,
  CHANGE_CITY,
  CHANGE_STATE,
  CHANGE_HOUSE,
  CHANGE_APARTMENT,
  CHANGE_SUMMARY,
  CHANGE_ROLE,
  CHANGE_DESCRIPTION,
  CLEAR_FORM,
} from '../actions/index';

const INITIAL_STATE = {
  name: '',
  email: '',
  CPF: '',
  address: '',
  city: '',
  state: '',
  house: '',
  apartment: '',
  summary: '',
  hole: '',
  description: '',
  clear: '',
};

export default function form(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.name };
    case CHANGE_EMAIL:
      return { ...state, email: action.email };
    case CHANGE_CPF:
      return { ...state, CPF: action.cpf };
    case CHANGE_ADDRESS:
      return { ...state, address: action.address };
    case CHANGE_CITY:
      return { ...state, city: action.city };
    case CHANGE_STATE:
      return { ...state, state: action.state };
    case CHANGE_HOUSE:
      return { ...state, house: action.house, apartment: '' };
      case CHANGE_APARTMENT:
        return { ...state, apartment: action.apartment, house: '' };
    case CHANGE_SUMMARY:
      return { ...state, summary: action.summary };
    case CHANGE_ROLE:
      return { ...state, hole: action.role };
    case CHANGE_DESCRIPTION:
      return { ...state, description: action.description };
      case CLEAR_FORM:
        return { ...state = INITIAL_STATE };
    default:
      return state;
  }
}
