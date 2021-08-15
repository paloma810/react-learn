// reducerを結合するための関数（通常複数のreducerを使う↓の引数に列挙するだけでいい）
// countというreducerをimportする

import { compileReducers } from 'redux';
import count from './count'

export default combineReducers({ count })


