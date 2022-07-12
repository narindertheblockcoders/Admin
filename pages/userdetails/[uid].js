import React from "react";
import UserDetails from "../../Component/UserDetails";
import { getSession } from "next-auth/react";
import axios from "axios";
const index = (props) => {
  return <UserDetails props={props} />;
};

export default index;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { params } = await context;
  console.log(context);
  console.log(params);
  const id = await params.uid;

  let data = {
    userId: id,
  };

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  var config = {
    method: "post",
    url: "http://13.215.196.173:3000/api/v1/admin/getuserdetail",
    headers: {
      Authorization: `Bearer ${session?.user.name} `,
    },
    data: data,
  };
  let response = await axios(config).then(function (response) {
    console.log(JSON.stringify(response.data));
    return { data: response.data.data };
  });

  return {
    props: {
      response,
    },
  };
}
