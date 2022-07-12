import React from 'react'
import Stakings from '../Component/Stakings'
import { getSession } from 'next-auth/react'

const admin = () => {
  return (
    <div>
        <Stakings/>
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