import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  // console.log(request.nextUrl); //유저가 요청중인 URL 출력해줌
  // console.log(request.cookies); //유저가 보낸 쿠키 출력해줌 .get(자료이름)써야함 map형 자료라서
  // console.log(request.headers); //유저의 headers 정보 출력해줌 .get(자료이름)써야함 map형 자료라서
  // NextResponse.next(); //통과
  // NextResponse.redirect(); //다른페이지 이동
  // NextResponse.rewrite(); //다른페이지 이동 (주소창은 냅둠) - 네이버카페같은 느낌
  // request.cookies.get('쿠키이름')  //출력
  // request.cookies.has('쿠키이름')  //존재확인
  // request.cookies.delete('쿠키이름')  //삭제
  // if (request.nextUrl.pathname == "/list") {
  //   console.log(new Date().toLocaleString());
  //   console.log(request.headers.get("sec-ch-ua-platform")); //os정보출력
  //   return NextResponse.next();
  // }
  // // JWT방식일때 로그인 확인법
  // if (request.nextUrl.pathname.startsWith("/write")) {
  //   const session = await getToken({ req: request });
  //   console.log("세션", session);
  //   if (session == null) {
  //     return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  //   }
  // }
  // Session 방식일때 로그인 불가
}
