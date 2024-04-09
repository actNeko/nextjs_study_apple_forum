import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json(`제목을 작성하시오`);
    } else if (요청.body.content == "") {
      return 응답.status(500).json(`글내용을 작성하시오`);
    }
    try {
      let userpost = { title: 요청.body.title, content: 요청.body.content };
      const db = (await connectDB).db("forum");
      let result = await db
        .collection("post")
        .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: userpost });
      if (result) 응답.status(200).redirect("/list");
    } catch (error) {
      응답.status(500).json(error);
    }
  }
}
