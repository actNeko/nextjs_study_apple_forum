"use client";

import { useRouter } from "next/navigation";

export default function DetailLink({ postId }) {
  let router = useRouter();
  return (
    <button
      onClick={() => {
        router.push(`/edit/${postId}`);
      }}
      className="list-btn"
    >
      수정
    </button>
  );
}
