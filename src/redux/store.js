import {createStore,applyMiddleware} from 'redux'
import thunk from 'react-redux'
import {composeWihtDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
// 内部会第一次调用reducer得到初始状态值
export default createStore(reducers,composeWihtDevTools(applyMiddleware(thunk)))