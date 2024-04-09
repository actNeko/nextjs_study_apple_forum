export default async function Register() {
  return (
    <div className="p-20">
      <form method="POST" action="/api/auth/signup">
        <input name="name" placeholder="닉네임을 입력하세요" />
        <input name="email" placeholder="메일 주소를 입력하세요" />
        <input
          name="password"
          placeholder="비밀번호를 입력하세요"
          type="password"
        />
        <button type="submit">가입요청</button>
      </form>
    </div>
  );
}
