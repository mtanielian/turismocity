import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import sliderReducer from '../reducers/sliderReducer'
import formFlightReducer from '../reducers/formFlightReducer'
import handleGlobalErrorReducer from '../reducers/handleGlobalErrorReducer'

const reducers = combineReducers({
  sliderImage: sliderReducer,
  formFlight: formFlightReducer,
  handleGlobalError: handleGlobalErrorReducer
})

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  ) 
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/*
Example of how to save state to local storage persisting state

function saveToLocalStorage(state: RootState) {
  const serializedState = JSON.stringify(state)
  localStorage.setItem('state', serializedState)
}

function loadFromLocalStorage() {
  const serializedState = localStorage.getItem('state')
  if (serializedState === null) return undefined
  return JSON.parse(serializedState)
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const presistedState = loadFromLocalStorage();
const store = createStore(
    reducer,
    presistedState,
    composeEnhancers(applyMiddleware(thunk)),
 );
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;

*/