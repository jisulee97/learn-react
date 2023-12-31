function Switcher() {
  // 순수해야 하는 영역 (React Render Process)

  // 순수하지 않은 코드
  // 리액트 렌더링 단계에 문제를 일으킬 가능성이 있는 코드
  // 사이드 이펙트 코드

  // DOM 스크립트(DOM 요소 접근/조작)
  // Switcher 컴포넌트를 구성하는 button 요소에 class를 설정하고 싶다.
  // document.querySelector('button').classList.add('switcher');

  // 쓰기.읽기.수정.삭제(CRUD)
  // fetch API
  // fetch('https://random-data-api.com/api/v2/users?size=2')
  //     .then(response => response.json())
  //     .then(data => {
  //       document.querySelector('button').classList.add('switcher');
  //       console.log(data);
  //     })
  //     .catch(error => console.error(error));

  function fetchRandomUsers() {
    //이 안에 있는 코드가 Side Effects
    fetch('https://random-data-api.com/api/v2/users?size=2')
      .then((response) => response.json())
      .then((data) => {
        document.querySelector('button').classList.add('switcher');
        console.log(data);
      })
      .catch((error) => console.error(error));
  }

  // 타이머 조작
  // setTimeout(() => {
  //   fetchRandomUsers();
  // }, 3000);

  // 이벤트 리스너(핸들러)
  const handleClick = () => {
    // 이벤트 리스너(함수)는 리액트 렌더링 단계에 영향을 미치지 않음
    // 리액트 컴포넌트의 순수함을 유지하지 않아도 되는 영역
    fetchRandomUsers(); // 이벤트 리스너로 불순한 함수를 실행하는 것은 괜찮다
  };

  return <button type="button" onClick={handleClick}></button>;
}

<Switcher />;

export default Switcher;

// 사용한 적이 없다 =/= 순수하지 않다 =/= 사이드이펙트 ?

// 순수하지 않은 함수가 실행된적 없으면, 사이드 이펙트가 아님
// 이벤트 리스너는 렌더링에 영향주지 않음
// 이벤트가 발생했을때 실행
// 그러므로 불순해도 됨
