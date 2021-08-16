// このindex.jsはすべてのredcuerを結合する働きを持つ
// reducerを結合するための関数（通常複数のreducerを使う↓の引数に列挙するだけでいい）
// countというreducerをimportする

import { combineReducers } from 'redux';
import count from './count'

export default combineReducers({ count })
