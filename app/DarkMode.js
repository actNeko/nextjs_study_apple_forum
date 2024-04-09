"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DarkMode() {
  let router = useRouter();
  const [icon, setIcon] = useState("☀️");

  useEffect(() => {
    let modeCookie = ("; " + document.cookie)
      .split(`; mode=`)
      .pop()
      .split(";")[0];
    if (modeCookie == "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
    }
  }, []);
  console.log("cookie~~~", document.cookie);
  return (
    <span
      onClick={() => {
        let modeCookie = ("; " + document.cookie)
          .split(`; mode=`)
          .pop()
          .split(";")[0];
        if (modeCookie == "light") {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          router.refresh();
          setIcon("🌙");
        } else {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          router.refresh();
          setIcon("☀️");
        }
      }}
    >
      {icon}
    </span>
  );
}
