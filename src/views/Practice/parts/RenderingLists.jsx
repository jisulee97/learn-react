import { reactLibrary } from './data';

function RenderingLists({ statusMessage, renderList }) {
  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
        <ul className="renderList">
          {statusMessage.map((message) => {
            return <li key={message}>{message}</li>;
          })}
        </ul>
      </dd>
      <dd>
        <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
        {/* 외부에서 props 전달된 함수를 실행한 결과를 활용 */}
        <ul className="renderList">{renderList({ reverse: true })}</ul>

        {/* 일반적으로 리액트 사용자가 사용하는 방식 */}
        {/* <ul className="renderList">
          {statusMessage.toReversed().map((message) => (
            <li key={message}>{message}</li>
          ))}
        </ul> */}
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        <dl className="reactLibrary">
          {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
          {/* reactLibrary 객체를 순환해서 리스트 렌더링 */}
          {/* <pre>{JSON.stringify(reactLibrary, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(Object.entries(reactLibrary), null, 2)}</pre> */}
          {Object.entries(reactLibrary).map(([key, value]) => {
            return (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            );
          })}
        </dl>
      </dd>
    </>
  );
}

export default RenderingLists;

// # 리스트 렌더링 요약

// 1. 배열 순환 리스트 렌더링
// 2. 배열 역순으로 정렬한 다음 리스트 렌더링 (원본 배열을 변경하면 안됨, 배열 복사 또는 새로운 배열 반환 메서드)
// 3. 객체 순환 리스트 렌더링 (객체 → 배열 객체로 변경 → map 메서드로 순환)
// 4. `<dl>` 내부에 `<div>`를 사용하는 것이 적절한 지 고민한 후 적절하지 않으면 `<></>`를 사용
// 5. `<></>`의 경우 리스트 렌더링 시 `key` prop을 설정할 수 없음. 그러므로 `<React.Fragment key={} />` 활용해야 함
