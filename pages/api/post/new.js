import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
  let session = await getServerSession(요청, 응답, authOptions);

  if (session) {
    요청.body.author = session.user.email;
  }

  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json(`제목을 작성하시오`);
    } else if (요청.body.content == "") {
      return 응답.status(500).json(`글내용을 작성하시오`);
    }
    try {
      let db = (await connectDB).db("forum");
      let result = db.collection("post").insertOne(요청.body);
      if (result) 응답.status(200).redirect("/list");
    } catch (error) {
      응답.status(500).json(error);
    }
  }
}
