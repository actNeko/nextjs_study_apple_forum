"use client";

import { useEffect, useState } from "react";

export default function Comment(props) {
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  console.log("data :", data);
  useEffect(() => {
    fetch("/api/comment/list?id=" + props.postNumber)
      .then((r) => r.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/api/comment/list?id=" + props.postNumber).then(async (result) => {
  //     const res = await result.json();
  //     console.log("res :", res);
  //     setData(res);
  //   });
  // }, []);

  return (
    <>
      <hr></hr>
      {data.length > 0
        ? data.map((a, i) => <p key={i}>{a.content}</p>)
        : "댓글이 없습니다"}
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props.postNumber }),
          }).then(() => {
            // 댓글이 성공적으로 전송된 후에 댓글 목록을 다시 가져와서 업데이트합니다.
            fetch("/api/comment/list?id=" + props.postNumber).then(
              async (result) => {
                const res = await result.json();
                setData(res);
              }
            );
          });
        }}
      >
        댓글전송
      </button>
    </>
  );
}
