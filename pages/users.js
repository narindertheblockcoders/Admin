import React from 'react'
import Users from '../Component/Users'
import { getSession } from 'next-auth/react'

const admin = () => {
  return (
    <div>
        <Users/>
    </div>
  )
}

export default admin

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