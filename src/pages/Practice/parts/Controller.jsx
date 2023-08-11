// import React from "react";

// => JSX 트랜스폼(변환) 엔진이 업그레이드 됐기
// 때문에 정상 작동하여 import 가 필요 없다!
import GoToButton from './GoToButton';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
      <GoToButton direction="down" label="스크롤 다운" />
      <GoToButton direction="up" label="스크롤 업" />
    </div>
  );
}

export default Controller;
