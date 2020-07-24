import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import * as serviceWorker from './serviceWorker'
// Import Redux packages
import usersReducer from './store/reducers/users'
import { Router } from 'react-router-dom'
import { history } from './utils/history'

declare global {
  // eslint-disable-next-line @typescript-eslint/interface-name-prefix
  interface Window {
    [key: string]: any
  }
}
// Debugging Redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// Combine all Reducers
// const rootReducer = combineReducers({
//  users: usersReducer,
// })

// Create Store
const store = createStore(usersReducer, composeEnhancers(applyMiddleware(thunk)))

// Redux
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
