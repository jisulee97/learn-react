//# 리프팅 전

// import debounce from '@/utils/debounce';
// import { useState } from 'react';

// function LiftingStateUp() {
//   return (
//     <div className="PassingProps">
//       <Parent />
//     </div>
//   );
// }

// export default LiftingStateUp;

// /* -------------------------------------------------------------------------- */

// export function Parent() {
//   const [color, setColor] = useState('#999');
//   const handleChangeBgColor = (newColor) => setColor(newColor);

//   return (
//     <div className="Parent">
//       <Child color={color} onChangeColor={handleChangeBgColor} />
//     </div>
//   );
// }

// export function Child({ color, onChangeColor }) {
//   return (
//     <div className="Child flex items-center justify-center gap-8">
//       <p className="text-4xl font-extralight uppercase" style={{ color }}>
//         Child
//       </p>
//       <input
//         type="color"
//         aria-label="글자 색상 변경"
//         defaultValue={color}
//         onChange={debounce((e) => onChangeColor(e.target.value), 500)}
//       />
//     </div>
//   );
// }

//# 리프팅 후

import debounce from '@/utils/debounce';
import { useState } from 'react';

function LiftingStateUp() {
  const [color, setColor] = useState('#999');
  const handleChangeBgColor = (newColor) => setColor(newColor);

  return (
    <div className="PassingProps">
      <Parent color={color} onChangeColor={handleChangeBgColor} />
      <OtherParent color={color} />
    </div>
  );
}

export default LiftingStateUp;

/* -------------------------------------------------------------------------- */

function OtherParent({ color }) {
  // 나도 데이터 필요해!
  // 단락의 배경색을 바꾸고 싶거든!
  return (
    <div
      className="Parent flex justify-center items-center bg-slate-200 p-4"
      style={{
        backgroundColor: color,
      }}
    >
      <p className="">Change Background Color</p>
    </div>
  );
}

export function Parent({ color, onChangeColor }) {
  return (
    <div className="Parent">
      <Child color={color} onChangeColor={onChangeColor} />
    </div>
  );
}

export function Child({ color, onChangeColor }) {
  return (
    <div className="Child flex items-center justify-center gap-8">
      <p className="text-4xl font-extralight uppercase" style={{ color }}>
        Child
      </p>
      <input
        type="color"
        aria-label="글자 색상 변경"
        defaultValue={color}
        onChange={debounce((e) => onChangeColor(e.target.value), 500)}
      />
    </div>
  );
}