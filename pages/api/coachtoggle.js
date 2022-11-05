import axios from "axios";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log("USER");
  if (req.method === "POST") {
    try {
      const { data } = req.body;
      console.log(data);
      var config = {
        method: "post",
        url: "http://13.215.196.173:3000/api/v1/admin/coachToggle",
        headers: {
          Authorization: `Bearer ${session.user.name} `,
        },
        data: req.body,
      };
      let response = await axios(config);
      res.status(200).json({ data: response.data.data });
    } catch (err) {
      console.log(err);
      res.status(err.response.status).json(err.response.data);
    }
  }
}
