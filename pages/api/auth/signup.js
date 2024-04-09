import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.name == "") {
      return 응답.status(500).json(`닉네임을 입력하세요`);
    } else if (요청.body.email == "") {
      return 응답.status(500).json(`이메일을 입력하세요`);
    } else if (요청.body.password == "") {
      return 응답.status(500).json(`비밀번호를 입력하세요`);
    }
    try {
      let hash = await bcrypt.hash(요청.body.password, 10);
      요청.body.password = hash;
      let db = (await connectDB).db("forum");
      let result = db.collection("user_cred").insertOne(요청.body);
      if (result) 응답.status(200).json("가입성공").redirect("/");
    } catch (error) {
      응답.status(500).json(error);
    }
  }
}