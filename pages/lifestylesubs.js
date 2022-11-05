import React from "react";
import LsSubscription from "../Component/LsSubscription";
import { getSession } from "next-auth/react";

const lifestylesubs = () => {
  return (
    <div>
      <LsSubscription />
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
