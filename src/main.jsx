//# React 모듈을 불러오기

import * as React from "react";

// console.log(`React.version: ${React.version}`);

//# ReactDOM 모듈을 불러오기

import * as ReactDOM from "react-dom";

// console.log(`ReactDOM.version: ${ReactDOM.version}`);

//# React 요소 작성 (React API)

// React 요소 작성 (React API)
const appElement = React.createElement(
  /* type */
  "div",
  /* props {} */
  {
    className: "App",
    id: "reactAppElement",
    "data-type": "React.ReactElement",
  },
  /* ...children -> [child, child, child, ...] */
  React.createElement(
    "h1",
    {
      title: "React is Awesome!",
    },
    "React는",
    React.createElement("b", null, "어썸(awesome)"),
    "해~"
  )
);
console.log(appElement);

//# React 요소 작성 (With JSX)
//@ JSX 는 비표준문법이기 때문에 브라우저가 해석할 수 없다(React 안에서만 해석 가능)
//@ 도구 없이는 웹에서는 개발이 불가능하다!

const appElementJSX = (
  <div className="App" id="reactAppElement" data-type="React.ReactElement">
    <h1 title="React is Awesome!">
      React는 <b>어썸(awesome)</b>해~
    </h1>
  </div>
);

console.log(appElementJSX);

//# App 함수 컴포넌트 만들기

//# ReactDOM.createRoot() 를 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
//# ReactDOMRoot.render() 메서드로 App을 화면에 표시 (렌더링)
