import axios from "axios";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  console.log("USER");
  if (req.method === "POST") {
    try {
      // const {token} = req.body

      var config = {
        method: "post",
        url: "http://13.215.196.173:3000/api/v1/admin/buy/transactions",
        headers: {
          Authorization: `Bearer ${session.user.name} `,
        },
      };
      await axios(config).then(function (response) {
       
        res.status(200).json({ data: response.data.data });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
