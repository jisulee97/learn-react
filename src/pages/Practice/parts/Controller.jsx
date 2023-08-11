import GoToButton from './GoToButton';
import { getNode } from '@/utils/getNode';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton
        direction="down"
        label="스크롤 다운"
        onClick={() => {
          // side effect
          const practiceElement = getNode('.Practice');
          console.log(practiceElement);
        }}
      />

      <GoToButton
        direction="up"
        label="스크롤 업"
        onClick={() => {
          console.log('go to up');
        }}
      />
    </div>
  );
}

export default Controller;

//# 이벤트 핸들링 요약
// 1. 리액트 컴포넌트에 이벤트 연결하기 (onclick ❌, onClick ✅)
// 2. 모든 props를 예측해서 컴포넌트에 적용하기란 쉽지 않다. (그래서 restProps를 활용)
// 3. 이벤트 핸들러(리스너) 로직 구성 (DOM 스크립팅 -> 사이드 이펙트)
