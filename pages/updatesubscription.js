import React from 'react'
import { getSession } from 'next-auth/react'
import UpdateSubscription from '../Component/UpdateSubscription'
const dashboard = () => {
  return (
    <div>
        <UpdateSubscription/>
    </div>
  )
}

export default dashboard

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