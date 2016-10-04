import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// Defines keys in 'state' object below:

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});
