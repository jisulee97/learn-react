import GoToButton from './GoToButton';
import { getNode } from '@/utils/getNode';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton
        direction="down"
        label="스크롤 다운"
        onClick={() => {
          // side effect 영역
          // React 랜더링 과정과 상관 없이 여기는 어떤 코드든 작성 가능하다!
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({ top: 900, behavior: 'smooth' });
        }}
      />

      <GoToButton
        direction="up"
        label="스크롤 업"
        onClick={() => {
          console.log('go to up');
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

export default Controller;

//# 이벤트 핸들링 요약
// 1. 리액트 컴포넌트에 이벤트 연결하기 (onclick ❌, onClick ✅)
// 2. 모든 props를 예측해서 컴포넌트에 적용하기란 쉽지 않다. (그래서 restProps를 활용)
// 3. 이벤트 핸들러(리스너) 로직 구성 (DOM 스크립팅 -> 사이드 이펙트, 불순 함수 허용)
// 4. 사이드 이펙트란 ? React 랜더링과 관련 없는 것(부수적인 것)을 말한다.
