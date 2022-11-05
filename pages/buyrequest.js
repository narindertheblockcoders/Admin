import React from 'react'
import BuyRequest from '../Component/BuyRequest'
import { getSession } from 'next-auth/react'


const buyrequest = () => {
  return (
    <div>
        <BuyRequest/>
    </div>
  )
}

export default buyrequest

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