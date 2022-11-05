import React, { useState, useEffect } from 'react'
import Logo from '../../public/logo.svg'
import { Collapse } from 'react-bootstrap'
import Link from 'next/link';
import { useRouter} from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import axios from 'axios'

const Navbar = () => {
  const {data:session} = useSession();
  const [open,setOpen]= useState(false);
  const [name, setName] = useState(null);

    // async function getUserData (){
    //   let data = await axios.post("/api/admin")
    //   console.log(data.data.data)
    //   setName(data.data.data)
    // }

    // useEffect (()=>{
    //   if(session){
    //     getUserData()
    //   }
    // },[])

 

  function logoutHandler () {
   signOut();
  }
  
return (
<header>

<nav className="navbar navbar-expand-lg top-nav navbar-light bg-light">
  <div className="container-fluid">
    <Link href="/">
    <a className="navbar-brand" href="#">  
    <img src={Logo.src}/>
    </a>
    </Link>
    <button 
      onClick={() => setOpen(!open)}
       className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded={open} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Collapse   in={open}>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:"flex-end"}}>
      <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: "auto !important"}}>

        { session ?   <li className="nav-item">
        <Link href={'/dashboard'}>
          <a className="nav-link active" aria-current="page" href="#">DASHBOARD</a>
          </Link>
        </li>:null}
        { session ?   <li className="nav-item">
        <Link href={'/stakings'}>
          <a className="nav-link active" aria-current="page" href="#">STAKINGS</a>
          </Link>
        </li>:null}
        { session ?   <li className="nav-item">
        <Link href={'/users'}>
          <a className="nav-link active" aria-current="page" href="#">USERS</a>
          </Link>
        </li>:null}
        { session ?   <li className="nav-item">
        <Link href={'/buyrequest'}>
          <a className="nav-link active" aria-current="page" href="#">BUY REQUEST</a>
        </Link>
        </li>:null}
        { session ?   <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SETTING</a>
        </li>:null}
        { session ?   <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">WELCOME  {name?.firstName} </a>
        </li>:null}
      
        { session ?  <li className="nav-item">
          <Link href={'/'}>
          <button id='nav-btns' onClick={logoutHandler} className="btn btn-outline-success border-btn" style={{marginRight:"10px"}} type="submit">Logout</button>
          </Link>
        </li>:null}
            {!session ?
            <li className="nav-item">
              <Link href={'/'}>
          <button   className="btn btn-outline-success border-btn" type="submit">LOGIN / SIGNUP</button>
          </Link>
        </li>:null}
      </ul>    
    </div>
    </Collapse>
  </div>
</nav>
</header>
  )
}

export default Navbar