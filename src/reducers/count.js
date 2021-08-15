import { INCREMENT, DECREMENT } from '../actions'

// countの初期値を定義
const initialState = { value: 0 }

// reducerは関数として定義（引数を2つもつ state, action）
// actionのタイプはaction.typeで拾える(今回はINCREMENTとDECREMENT）
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: 
      return { value: state.value + 1 }
    case DECREMENT: 
      return { value: state.value - 1 }
    default:
      return state
  }
}
