import React from "react";
import CreatePayOrder from "../Component/CreatePayOrder";
import { getSession } from "next-auth/react";

const lifestylesubs = () => {
  return (
    <div>
      <CreatePayOrder />
    </div>
  );
};

export default lifestylesubs;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
