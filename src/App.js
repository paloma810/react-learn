import React from 'react';

// JSXはHTMLタグライク中たちでわかりやすく表現できる言語の一つ？

// HTMLタグのlabelは input タグの ラベルとして作用する（inputのid属性とlabelのforが連動するイメージ)
// 例えば、チェックボックスのlabelを定義することで、文字をクリックすることでチェック可能となる

// JSXはそのままでは実行できない --> トランスパイリングによって、Javascriptの形式に変換され実行可能となる
// babelがトランスパイリングしてくれている
// REPL で確認できる cf) https://babeljs.io/repl/

// webpackが、複数の.jsファイルをbundleしてくれる cf)https://webpack.js.org/

// 2. functionnal component, 1. class componentの2種類のコンポーネントがある
//    1. class App extends Component { render () { return {} } } ※ Componentをimportする必要がある
//    2. const App = () => {}

function App() {
  return (
    <React.Fragment>
      <h1>Hello! React!</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    </React.Fragment>
  );
}

export default App;
