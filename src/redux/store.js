import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import  strContains  from '../../src/utils/strContains';

export const getFilteredCards = ({cards, searchString}, columnId) => cards
  .filter(card => card.columnId === columnId 
  && strContains(card.title, searchString));

export const getAllColumns = state => state.columns;

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN': 
      return {...state, columns: [...state.columns, { ...action.playload, id: shortid() }]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, { ...action.playload, id: shortid() }]};
    case 'UPDATE_SEARCHSTRING': 
      return {...state, searchString: action.playload}
    default: 
      return state;
  };
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;