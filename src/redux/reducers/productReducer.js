import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER,
  SEARCH_TEXT,
  FILTER_CATEGORY
} from '../actions/productActions';

const initialState = {
  fetch: [],
  items: [],
  loading: false,
  error: null,
  text: "",
  checkedProduct: [],
};

export default function productReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetch: action.payload.products,
        items: action.payload.products
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        fetch: []
      };
    case SEARCH_TEXT: 
      return{
        ...state,
        text: action.payload,
        items: state.fetch.filter((item) => item.name.toLowerCase().search(action.payload.toLowerCase()) !== -1)
      };
    case FILTER: 
      return {
        ...state,
        items: state.fetch.filter(el => state.checkedProduct.find(el2 => el.name === el2))    
      };
    case FILTER_CATEGORY: 
      return {
        ...state,
        checkedProduct: action.payload
      } 
    default:
      return state;
  }
}

