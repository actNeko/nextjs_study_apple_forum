import Link from "next/link";
import "./globals.css";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { cookies } from "next/headers";
import DarkMode from "./DarkMode";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app", //홈피 검색과 관련된 정보
};

export default async function RootLayout({ children }) {
  let session = await getServerSession(authOptions);
  let res = cookies().get("mode");
  // const [mode, setMode] = useState("light");

  return (
    <html>
      <body
        className={res != undefined && res.value == "dark" ? "dark-mode" : ""}
      >
        <div className="navbar">
          <Link href="/" className="logo">
            Appleforum
          </Link>
          <Link href="/Register">회원가입</Link>
          <Link href="/list">List</Link>
          <Link href="/write">Write</Link>
          {session ? (
            <span>
              <LogOutBtn userName={session.user.name} />
            </span>
          ) : (
            <LoginBtn />
          )}
          <DarkMode />
        </div>
        {children}
      </body>
    </html>
  );
}
