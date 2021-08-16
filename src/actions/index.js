export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
// 上のconstは後ほどreducerでも用いるためexportしておいて後ほどimportする

// 以下はaction create（actionを返す関数）
export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
