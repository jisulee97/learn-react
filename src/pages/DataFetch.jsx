// // 상태는 스냅샷 같이 작동한다.
// // 상태란? 시간의 흐름에 따라 변하는 데이터를 말한다.
// // 스냅샷은 흐르는 상태의 특정 시점에서의 데이터 조각을 말한다.
// // 스냅샷은 현재 실행된 함수 몸체 안에서 변경이 불가능하다.
// // 렌더 트리거(요청)를 수행하는 상태 업데이트 함수에 전달한 nextState는 다음 렌더링 시점에 반영된다.
// // 그렇다면? 현재 시점에서 변경될 상태에 접근할 수는 없는가?
// // 아니다. 사이드 이펙트로 처리가 가능하다.
// // 1. 이벤트 핸들러
// // 2. useEffect 훅

import { useEffect, useState } from 'react';

// // 리액트: LearnStateAndEffects 컴포넌트를 다시 실행한다.
// // 리액트 렌더 트리거 효윤님이 요청했으니까.
// function LearnStateAndEffects() {
//   const [count, setCount] = useState(0);

//   // 이펙트 사용 (동기화)
//   // 상태의 변경이 발생하면 이펙트에 설정된 콜백 함수가실행된다.
//   // 즉 다음 상태(nextState)에 접근 가능하다.
//   useEffect(
//     /* 1단계: 이펙트 콜백 함수 */
//     () => {
//       // DOM 커밋 이후에 실행
//       // 이펙트 콜백 함수
//       console.log('count in effect', count); // nextState
//     },
//     /* 2단계: 이펙트 콜백 함수를 실행시키는 조건(배열 포함된 항목) */
//     // 종속성 배열이 없는 경우, (컴포넌트 렌더링 될 때마다) 이펙트 함수가 항상 실행
//     // undefined
//     // 종속성 배열이 빈 경우, 컴포넌트 최초 렌더링 시 1회 실행
//     // [],
//     // 종속성 배열에 의존하는 상태를 설정하면
//     // 리액트는 종속된 상태의 변경을 감지(이전 → 이후)
//     // 상태가 변경되었다면 이펙트 콜백 함수를 실행한다.
//     [count]
//   );

//   const handleClick = () => {
//     setCount(count + 10); // count (snapshot) = 0
//     console.log('count in event handler', count); // 10???, 0!!!
//   };

//   /* -------------------------------------------------------------------------- */

//   const [isShow, setIsShow] = useState(true);

//   // current state snapshot

//   useEffect(() => {
//     console.log(isShow); // next state snapshot
//   }, [isShow]);

//   const handleToggle = () => {
//     setIsShow(!isShow);
//     console.log('isShow = ', isShow); // current state snapshot
//   };

//   /* -------------------------------------------------------------------------- */

//   // 상태 (스냅샷)
//   const [studyMessage, setStudyMessage] = useState('리액트에 대해서 알아봐요');

//   // 이벤트 핸들러
//   const handleChangeMessage = () => {
//     //# 1) 상태 업데이트 함수 (실행되면 렌더 트리거)
//     // 리액트!!!! 나(효윤) 화면의 메시지가 바뀌길 원해!! 바꿔줘!!
//     setStudyMessage('효윤님 화이팅!!! 😄');
//   };

//   //# 2) 컴포넌트 렌더링 (함수 컴포넌트 다시 실행)
//   // DOM 커밋: 상태가 다음 상태로 변경되어 렌더링 되면 리액트가 실제 DOM 변경 이력을 반영

//   //# 3) 이펙트 (DOM 커밋 이후에 실행)
//   // 이펙트 실행 조건(배열로 설정)
//   useEffect(
//     /* callback - when??? */
//     () => {
//       console.log(studyMessage);
//     },
//     // 실행 조건
//     // 배열에 포함된 상태가 변경되면 이펙트 함수가 콜백된다.
//     [studyMessage] // 관심사는 얘 뿐!
//   );

//   // 3단계 : 클린업이 중요한 이유
//   useEffect(() => {
//     console.log('초기 랜더링 또는 리-랜더링 될 떄마다 실행');
//   }, [studyMessage, count]); // 조건이 없기 때문에 항상 실행!/ [](빈배열) 추가 시 한번만 실행되고 [] 안에 있는 것들에만 반응

//   return (
//     <div className="m-10 flex flex-col gap-2 items-start">
//       <h2 className={`text-indigo-600 font-suit text-2xl`}>
//         상태 및 이펙트 학습하기 ({count})
//       </h2>
//       {/* DOM 커밋: 상태가 다음 상태로 변경되어 렌더링 되면 리액트가 실제 DOM 변경 이력을 반영 */}
//       <p>{studyMessage}</p>
//       <button type="button" onClick={handleChangeMessage}>
//         메시지 변경 요청(trigger)
//       </button>

//       <button type="button" onClick={handleToggle}>
//         {isShow ? '감춤' : '표시'}
//       </button>
//       {isShow && (
//         <button type="button" onClick={handleClick}>
//           +10
//         </button>
//       )}
//     </div>
//   );
// }

// export default LearnStateAndEffects;

//# 리액트 랜더링에 관련 없이 외적으로 처리되는 일(side effect)

// 서버에 데이터 가져오기 요청
// 대기 시간... (사용자에게 어떤 저보를 제공할 것인가?)
// 서버에서 응답 (성공 or 실패)
// 성공한 경우 : 배열(객체) 리스트 랜더링 -> 화면에 표시
// 실패한 경우 : 오류 메시지를 화면에 출력

// 컴포넌트 상태(최소한의 갯수로 관리가 요구)
// 1. data : 데이터 가져오기
// 2. status : 진행 상황 'pending' | 'loading' | 'success' | 'error'
// 2-1. isLoading : 대기 시간 상태
// 2-2. isSuccess : 데이터 가져오기 성공한 상태, 데이터 가져오기 실패한 상태
// 2-3. isError : 데이터 가져오기 실패한 상태

function LearnStateAndEffects() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('pending');

  // side effect
  // server request (endpoint)
  useEffect(() => {
    // 상태 변경
    // 대기 → 로딩 중...
    setStatus('loading'); // 상태 업데이트 일괄(batch) 처리

    // Promise API
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      // 성공
      .then((response) => response.json())
      .then((responseData) => {
        // 상태 업데이트 일괄(batch) 처리
        setData(responseData);
        setStatus('success');
      })
      // 실패
      .catch((error) => {
        // 상태 업데이트 일괄(batch) 처리
        setStatus('error');
        setError(error);
      });
  }, []);

  // 데이터 가져오는 중(로딩)일 때 표시할 화면
  if (status === 'loading') {
    return (
      <div
        role="alert"
        className="flex h-[calc(100vh_-_70px)] w-auto justify-center items-center"
      >
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXM1MHd1cmZid2plZmF4OW9xbGxyZm5tdXZ2Y2E1czRwZGZ6dDIwaCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oEjI6SIIHBdRxXI40/200.gif"
          className="h-20"
          alt="데이터 가져오는 중입니다."
        />
      </div>
    );
  }

  // 데이터 가져오기 실패한 경우 표시할 화면
  if (status === 'error') {
    return (
      <div
        role="alert"
        className="flex flex-col text-red-100 bg-red-900 h-[calc(100vh_-_70px)] w-auto justify-center items-center"
      >
        <p>{error.toString()}</p>
        <p className="text-xs">알 수 없는 오류가 발생했습니다.</p>
      </div>
    );
  }

  // 데이터 가져오기 성공했을 때 표시할 화면
  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className="text-indigo-600 font-suit text-2xl">
        상태 및 이펙트 학습하기
      </h2>

      {data && (
        <ul>
          {data?.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LearnStateAndEffects;
