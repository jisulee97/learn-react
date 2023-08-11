function GoToButton({ direction, label }) {
  // props ? { direction(dir), label }
  // direction : down vs up
  // label(string)

  let className = '';
  // 문 or 식 모두 가능
  if (direction === 'down') {
    className = 'scrollDown';
  } else {
    className = 'scrollUp';
  }

  return (
    <button
      type="button"
      // 식만 사용 가능
      className={className}
      aria-label={label}
      title={label}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}

export default GoToButton;
