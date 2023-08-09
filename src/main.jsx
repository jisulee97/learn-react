// //# React 모듈을 불러오기

// import * as React from "react";

// // console.log(`React.version: ${React.version}`);

// //# ReactDOM 모듈을 불러오기

// import * as ReactDOM from "react-dom";

// // console.log(`ReactDOM.version: ${ReactDOM.version}`);

// //# React 요소 작성 (React API)

// /* React 요소란? --------------------------------------------------------------- */

// //# React 요소 작성 (React API)

// const visualBoldElement = React.createElement("b", null, "어썸(awesome)");

// const headlineElement = React.createElement(
//   "h1",
//   {
//     title: "React is Awesome!",
//   },
//   "React는",
//   visualBoldElement,
//   "해~"
// );

// const domAbbrElement = React.createElement(
//   "abbr",
//   { title: "Document Object Model" },
//   "DOM"
// );

// const uiAbbrElement = React.createElement(
//   "abbr",
//   { title: "User Interface" },
//   "UI"
// );

// const descriptionForReactElement = React.createElement(
//   "p",
//   {},
//   "React는 가상 ",
//   domAbbrElement,
//   "을 사용하는 ",
//   uiAbbrElement,
//   "라이브러리입니다."
// );

// const appElement = React.createElement(
//   /* type */
//   "div",
//   /* props {} */
//   {
//     className: "App",
//     id: "reactAppElement",
//     "data-type": "React.ReactElement",
//   },
//   /* ...children -> [child, child, child, ...] */
//   headlineElement,
//   descriptionForReactElement
// );

// // appElement(rootElement) tree
// console.log(appElement);

// //# React 요소 작성 (With JSX)
// //@ JSX 는 비표준문법이기 때문에 브라우저가 해석할 수 없다(React 안에서만 해석 가능)
// //@ 도구 없이는 웹에서는 개발이 불가능하다!

// const appElementJSX = (
//   <div className="App" id="reactAppElement" data-type="React.ReactElement">
//     <h1 title="React is Awesome!">
//       React는 <b>어썸(awesome)</b>해~
//     </h1>
//     <p>
//       React는 가상 DOM을 사용하는 <abbr title="User interface">UI</abbr>
//       라이브러리 입니다.
//     </p>
//   </div>
// );

// console.log(appElementJSX);

// /* React 요소를 재사용하기 위한 함수 작성 --------------------------------------------- */

// {
//   // const domAbbrElement = React.createElement(
//   //   'abbr',
//   //   { title: 'Document Object Model'},
//   //   'DOM'
//   // );

//   // const uiAbbrElement = React.createElement(
//   //   'abbr',
//   //   { title: 'User Interface'},
//   //   'UI'
//   // );

//   // - [ ] React 요소를 반환하는 함수 만들기
//   //   1. 함수 작성 createAbbrElement()
//   function createAbbrElement(props, ...children) {
//     return React.createElement("abbr", props, ...children);
//   }

//   const domAbbrElement = createAbbrElement(
//     {
//       title: "Document Object Model",
//     },
//     "D",
//     "O",
//     "M"
//   );

//   console.log(domAbbrElement);

//   const uiAbbrElement = createAbbrElement(
//     {
//       title: "User Interface",
//     },
//     "UI"
//   );
//   console.log(uiAbbrElement);

//   // - [ ] 인수를 전달해 재사용 가능하도록 구현
//   //   2. createAbbrElement({ props: { title: '...' } }, '...');
// }

// /* React 요소 vs. 컴포넌트 -------------------------------------------------------- */

// //@ 리액트에서 우리가 행해야할 규칙

// //@ JSX만 사용하세요.
// //@ 컴포넌트 이름은 첫글자가 항상 대문자로
// //@ 그래야 JSX 구문에서 사용 가능하니까

// // createAbbrElement 함수 만들기 (일반 JavaScript에서는 이렇게 활용)
// function createAbbrElement(title, children) {
//   return <abbr title={title}>{children}</abbr>;
// }

// // 아래 JSX 코드는 React 요소를 생성한다.
// // 그런데 웹 브라우저는 아래 코드가 해석이 안되요.
// // <abbr title="Document Object Model">DOM</abbr>

// // const dom_AbbrElement = createAbbrElement(
// //   'Document Object Model',
// //   'DOM'
// // );

// // console.log(dom_AbbrElement);

// // const ui_AbbrElement = createAbbrElement(
// //   'User Interface',
// //   'UI'
// // );

// // console.log(ui_AbbrElement);

// // Abbr 함수 컴포넌트 만들기 (React용)
// function Abbr(props /* { title, children } */) {
//   return (
//     <div>
//       <span>
//         <em>
//           <abbr title={props.title}>{props.children}</abbr>
//         </em>
//       </span>
//     </div>
//   );
// }

// // console.log(React.createElement(Abbr)); // <Abbr />

// // App 함수 컴포넌트 만들기
// const App = (props) => {
//   return (
//     <div className="App">
//       <Abbr title="Document Object Model">DOM</Abbr>
//       <Abbr title="User Interface">UI</Abbr>
//     </div>
//   );
// };

// // normal function
// console.log(createAbbrElement("Document Object Model", "DOM"));

// // JSX (대문자로 시작하는 함수)
// console.log(<App />);

// /* React 요소 트리를 DOM에 렌더링하려면? ---------------------------------------------- */

// // ReactDOM.createRoot() 를 사용해서 DOM 요소를 ReactDOMRoot 객체로 생성
// // ReactDOMRoot.render() 메서드로 App을 화면에 표시(렌더링)

// //# reactDom 으로 dom 구성하기

// import ReactDOM from "react-dom/client";

// const reactDomRoot = ReactDOM.createRoot(document.getElementById("root"));

// reactDomRoot.render(
//   <div>
//     <h1>React</h1>
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab animi,
//       labore facilis obcaecati ullam placeat molestiae. Enim, consectetur
//       laudantium.
//     </p>
//     <ul>
//       <li>list item A</li>
//       <li>list item B</li>
//       <li>list item C</li>
//     </ul>
//   </div>
// );

//# JSX 가 하는 일은 React 요소 생성 -> 마크업 생성
//@ JSX → 컴파일러(변환기) → React 요소 → ReactDOM → 실제 DOM 요소 생성 → 구조 작성

// import { createRoot } from "react-dom/client";
//@ 앞에 경로를 안 쓰는 것은 node_modeles 안에서 불러오는 것이다

//# React 함수 컴포넌트의 조건
//@ - 함수 이름은 첫글자가 대문자!
//@ - JSX 를 반환!

// App 함수 컴포넌트를 작성합니다.

// function App() {
//   // JSX 값 반환
//   return (
//     <div className="App">
//       {/* JSX 주석 */}
//       {/* <Heading>React</Heading> */}
//       <h1>React</h1>
//       {/* <Description>...</Description> */}
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ab
//         animi, labore facilis obcaecati ullam placeat molestiae. Enim,
//         consectetur laudantium.
//       </p>
//       {/* <RenderingProcessList /> */}
//       <ul>
//         <li>list item A</li>
//         <li>list item B</li>
//         <li>list item C</li>
//       </ul>
//     </div>
//   );
// }

// createRoot = create + Root(React DOM Root)
// ReactDOMRoot 객체를 생성하는 함수

// createRoot
// create + Root (React DOM Root)
// ReactDOMRoot 객체를 생성하는 함수

// createRoot(document.getElementById("root"))
//   // ReactDOMRoot 객체는 render() 메서드를 사용해
//   // React 요소를 실제 DOM 요소에 렌더링 한다.
//   .render(
//     // App 컴포넌트를 렌더링할 수 있도록 JSX 구문을 추가합니다.
//     <App />
//     // <App></App>
//   );

//# 랜더링 함수로 쪼개기

// function App() {
//   return (
//     <div className="App">
//       {/* <Heading>React</Heading> */}
//       <h1>리액트</h1>
//       {/* <Description>...</Description> */}
//       <p>리액트는 프론트엔드 개발 분야 No.1 UI 라이브러리입니다.</p>
//       {/* <RenderingProcessList /> */}
//       <ol>
//         <li>렌더 트리거</li>
//         <li>컴포넌트 렌더링</li>
//         <li>DOM 커밋</li>
//       </ol>
//     </div>
//   );
// }

import { StrictMode } from "react";
//@ React로 개발할 때 개발자가 실수 할 수 있는 문제를 알려줄거니까 <StrictMode>로 <App />을 감싸라!
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(<App />);
