
// Frt React, { Component } from 'react';
import PropTypes from 'prop-types';

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

// propsはcomponentの属性のこと props.name, props.age など、あるデータについてさんしょうできるもののこと
// 配列や関数などなんでも指定可能。 以下例、仮引数の変数名は "props" である必要はなさそう

// { return <.../> } を埋め込むこともできる : コレクションに対してループ処理も可能（以下例）
// リスト処理をする場合には、key propが必要 --> mapしたばあいにはindexを流用するのが一般的
// default props ： propsのデフォルト値を設定

// prop typesで型チェック （パッケージ) 違反するとブラウザのコンソールにWarningとして表示される
// 属性を必須にすることもできる --> ~.isRequired とする ※ default値が設定されているとエラーにならない

// 内部の状態 State ： 変更可能な値（mutable）, Componentは immutableな値
// Propsは親のComponentから値を渡されたのに対して、Componentの内部でのみ使用される.
// Class Componentでのみ使用できる
// this.stateでアクセス可能 > 最初は null 
// { key: val }の形式でstateに代入することで、this.state.keyでアクセス可能
// stateを変更するときには、this.setStateを用いる。
//   状態を変える+関連するDOMを変更したい --> setStateをするとrender()をコールバックで呼び出してくれる（this.state = だとむり）

// class components には コンストラクタを使用可能

// Redux 新しい用語が出てくる。コンペイションという習慣も学ぶ
// yarn add redux react-redux でインストール
// actionを作成（action ... アプリの中で何が起きたかを示すデータのこと）javascriptのオブジェクトのこと,その中でtypeというキーとその値を持つことが特徴、またtypeはユニークである必要がある
// $ mkdir src/actions; touch src/actions/index.js
// actionを返す関数：action creater

// redux基本機能の一つreducer （actionが発生したときに組み込まれているtypeによってどのように状態を遷移するかを定義したもの)
// ↑の状態はstateという名称で扱う
// mkdir src/reducers; touch src/reducers/index.js

function App() {
  return (
    <Counter></Counter>
  );
}

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("plus 1")
    this.setState({count : this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log("minus 1")
    this.setState({count : this.state.count - 1})
  }

  render () {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>count_up</button>
        <button onClick={this.handleMinusButton}>count_down</button>
      </React.Fragment>
    )
  }
}

export default App;
