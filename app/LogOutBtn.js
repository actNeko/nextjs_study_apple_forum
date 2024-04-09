"use client";
import { signOut } from "next-auth/react";

export default function LogOutBtn({ userName }) {
  return (
    <button
      onClick={() => {
        signOut();
      }}
    >
      {userName}님, 로그아웃
    </button>
  );
}
