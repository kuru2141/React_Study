import "./App.css";
// import Button from "./components/Button";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Main from "./components/Main";

// function App() {
//   const buttonProps = {
//     text: "메일",
//     color: "red",
//     a: 1,
//     b: 2,
//     c: 3,
//   };

//   return (
//     <>
//       {/* <h1>안녕 리액트!</h1> */}
//       {/* <Header />
//       <Main />
//       <Footer /> */}

//       <Button {...buttonProps} />
//       <Button text={"카페"} />
//       <Button text={"블로그"}>
//         <div>자식 요소</div>
//         <Header />
//       </Button>
//     </>
//   );
// }

// export default App;

// !! 리렌더링이 발생하는 상황 !!
// 1. 자신이 관리하는 state 값 변경
// 2. 자신이 제공받는 props 값 변경
// 3. 부모 컨포넌트가 리렌더링

// import Bulb from "./components/Bulb";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <>
//       <Bulb />
//       <Counter />
//     </>
//   );
// }

// export default App;

import Register from "./components/Register";
import HookExam from "./components/HookExam";

function App() {
  return (
    <>
      <HookExam />
      {/* <Register /> */}
    </>
  );
}

export default App;
