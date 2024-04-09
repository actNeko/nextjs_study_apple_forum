"use client";

import Link from "next/link";

export default function Listitem(props) {
  return (
    <div>
      {props.result.map((post, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${props.result[i]._id}`}>
            <h4>{post.title}</h4>
          </Link>
          <Link href={"/edit/" + props.result[i]._id} className="list-btn">
            수정
          </Link>
          <span
            onClick={(e) => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: props.result[i]._id,
              })
                .then(async (r) => {
                  if (r.status == 200) {
                    e.target.parentElement.style.overflow = "hidden";
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = "none";
                    }, 1000);
                    const Msg = await r.json();
                    alert(Msg);
                  } else {
                    const Msg = await r.json();
                    alert(Msg);
                    //서버가 에러코드전송시 실행할코드
                  }
                })
                .catch((e) => {
                  alert("ERROR :", e);
                });
            }}
          >
            🗑️
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
