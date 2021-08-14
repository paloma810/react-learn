import React from 'react';
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


function App() {

  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanakol", age: 4},
    { name: "Noname"}
  ]

  return (
    <React.Fragment>
      <h1>Hello! React!</h1>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I am clicked!")}}/>
      <User name={"Taro"} age={10} />
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
  return <div>Hi, I am {props.name}. {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
