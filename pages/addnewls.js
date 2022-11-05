import React from "react";
import AddNewLs from "../Component/AddNewLs";
import { getSession } from "next-auth/react";

const admin = () => {
  return (
    <div>
      <AddNewLs />
    </div>
  );
};

export default admin;

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
