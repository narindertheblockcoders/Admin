import axios from "axios";

export default async function handler(req, res) {
  console.log("USER")
  if (req.method === "POST") {
    try {
        const {token} = req.body

        var config = {
            method: "post",
            url:  "http://13.215.196.173:3000/api/v1/admin/users",
            headers: {
              Authorization: `Bearer ${token} `,
            },
          };
          await axios(config).then(function (response) {
            console.log(JSON.stringify(response.data));
            res.status(200).json({ data: response.data.data });
          });
   
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: err });
    }
  }
}
