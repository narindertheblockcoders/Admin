import React from 'react'
import AddNew from '../Component/AddNew'
import {getSession} from 'next-auth/react'


const admin = () => {
  return (
    <div>
        <AddNew/>
    </div>
  )
}

export default admin;

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      }
    }
  }
  return {
    props:{
      session
    }
  }
}