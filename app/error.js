"use client";

export default function Error({ error, reset }) {
  return (
    <>
      <h4>에러에용</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        돌아가기
      </button>
    </>
  );
}
