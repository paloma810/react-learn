
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions'

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

// reducerを基にstoreを作る。storeがアプリの全コンポーネントで使用できるような仕込みを行う。
// storeを作るための関数：createStore from Redux package
// 作成したstoreを全コンポーネントに渡すもの：Provider from react-redux

// connect関数を使用して、stateやactionとコンポーネントの関連付けを作って、ビューのイベントで状態を遷移して、遷移後の状態を画面に描画する
//

class App extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    // この働きはreduxでは、reducerが担う
    //this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("plus 1")
    // reduxでは、actioncreaterで処理の名称を確保して、そのアクションクリエータからreducer内で適切な状態変化を呼ぶことで同じことをしている。。
    //this.setState({count : this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log("minus 1")
    //this.setState({count : this.state.count - 1})
  }

  render () {
    // propsで状態やactionを渡すので
    const props = this.props
    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>count_up</button>
        <button onClick={props.decrement}>count_down</button>
      </React.Fragment>
    )
  }
}

// stateの情報からコンポーネントに必要な情報を取り出してcomponent内のpropsにマッピングする関数
// 引数には状態のトップレベルを示すstateを与える
const mapStateToProps = state => ({ value: state.count.value })

// あるアクションが発生したときにreducerにtypeに応じた状態遷移を行わせるもの
// incrementをキーにincrement関数をkeyにもつdispatch関数（decrement版も）を定義
//const mapDispatchToProps = dispatch => ({
//  increment: () => dispatch(increment()),
//  decrement: () => dispatch(decrement())
//})

// 以下のようにかんたんにも書ける
const mapDispatchToProps = ({ increment, decrement })


// stateやactionをcomponentに関連付ける
export default connect(mapStateToProps, mapDispatchToProps)(App)

