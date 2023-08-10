function DefinitionList() {
  return (
    <dl className="descriptionList">
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* displaying data */}

          {/* 1-1. statusMessage 배열의 원소 중 하나의 값을 화면에 표시합니다. */}
          {/* { statusMessage } */}
          {/* { statusMessage[0] } */}
          {/* { statusMessage[1] } */}
          {/* { statusMessage[2] } */}
          {/* { statusMessage[3] } */}
          {/* { statusMessage[4] } undefined */}

          {/* [🚨 오류] 객체 타입은 React의 자식 타입으로 적절하지 않습니다. */}
          {/* { reactLibrary } */}

          {/* 1-2. 랜덤 숫자 인덱스의 원소 값 표시 도전! */}

          {/* JSX는 JavaScript 표현식(Expression) 그러므로 항상 결과 값을 반환 */}
          {/* JSX 안에서는 문을 사용할 수 없다. (❌ if, for, while, switch ..) */}
          {/* {statusMessage[Math.floor(Math.random() * statusMessage.length)]} */}
          {/* 유틸리티 함수를 사용하면 클린 코드 작성 가능 */}
          {statusMessage[getRandom(statusMessage.length - 1)]}
        </span>
      </dd>
      <dt>조건부 렌더링(conditional rendering)</dt>
      <dd>
        <p>이미지 타입(image type)에 따라 렌더링 여부를 결정합니다.</p>
        <div className="conditionalRendering">
          {/* imageType 값이 'vite'인 경우 Vite 이미지를, 'react'인 경우 React 이미지를 화면에 표시합니다. */}
          {/* 조건문으로 렌더링 */}
          <strong>imageComponent if 조건문으로 조건 처리</strong>
          {imageComponent}

          {/* 조건식으로 렌더링 (함수 실행, 3항 연산식(ternary), 논리곱/합 연산자, null 병합 연산자, 옵셔널 체이닝) */}
          <strong>3항 연산식으로 조건 처리</strong>
          {imageType === 'vite' ? (
            <img src={viteImagePath} alt="비트" />
          ) : (
            <img src={reactImagePath} alt="리액트" />
          )}

          {/* src/assets 동적 자원 호출 시 */}
          {/* <img src={reactImagePath} alt="리액트" />
            <img src={viteImagePath} alt="비트" /> */}

          {/* public 정적 자원 호출 시 */}
          {/* <img src="/react.avif" alt="리액트" /> */}
          {/* <img src="/vite.svg" alt="비트" /> */}

          <img
            src={imageType === 'react' ? '/react.avif' : '/vite.svg'}
            alt={imageType === 'react' ? '리액트' : '비트'}
          />

          {/* imageType이 'vite'인 경우 'Vite', 'react'인 경우 'React' 텍스트를 화면에 표시합니다. */}
        </div>
      </dd>
      <dd style={{ marginTop: 12 }}>
        <p>spinner 또는 vite 이미지가 랜덤으로 화면에 렌더링 되도록 합니다.</p>
        <div className="conditionalRendering">
          <img className="spinner" src="/spinner.svg" alt="로딩 중..." />
          <img src="/vite.svg" alt="Vite" style={{ height: 42 }} />
        </div>
      </dd>
      <dt>조건부 표시(conditional display)</dt>
      <dd>
        <p>
          표시(display) 여부에 따라 이미지가 화면에서 감춰지거나 표시됩니다.
        </p>
        {/* isShowReactImage 상태 값에 따라 이미지가 화면에 표시되거나 표시되지 않도록 설정합니다. */}
        <picture>
          <source type="image/avif" srcSet="/react.avif" />
          <source type="image/webp" srcSet="/react.webp" />
          <img src="/react.png" alt="React" height={42} />
        </picture>
      </dd>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
        <ul className="renderList">{renderList()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
        <ul className="renderList">{renderList({ reverse: true })}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        <dl className="reactLibrary">
          {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
        </dl>
      </dd>
    </dl>
  );
}

export default DefinitionList;
