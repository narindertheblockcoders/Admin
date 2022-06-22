import React, { useState, useEffect } from 'react'
import Logo from '../../public/logo.svg'
import { Collapse, Dropdown } from 'react-bootstrap'
import Link from 'next/link';
import { useRouter} from 'next/router';
import axios from 'axios';

const Navbar = () => {
  const router = useRouter();  
  const [open,setOpen]= useState(false);
  const [token,setToken] = useState(null);
  const [name, setName] = useState(null);

  // async function getUserData(tokenPath){

  //   let data=  await  axios.post("api/userProfile",{token:tokenPath})
  //   console.log(data.data.data)
  //   setName(data.data.data)
  // }
  useEffect (()=>{
    const tokenPath = localStorage.getItem ('token')
    console.log (tokenPath)
    if(tokenPath != undefined){
      setToken(tokenPath)
  // getUserData(tokenPath)
    }
    // setToken (false)
    else if( undefined!= tokenPath){
      setToken(tokenPath)
    }
  },[])
  
  useEffect(()=>{
const name = JSON.parse(localStorage.getItem('profile'))
console.log(name,'my name')
setName(name);
  },[])

  function logoutHandler () {
    // window.location.reload();
    // window.localStorage.clear();
    window.location.href = "/"
    
    window.localStorage.clear();
    window.localStorage.removeItem("token", "query");
    // router.push('/login');
    window.location.reload;
  }
  
return (
<header>

<nav className="navbar navbar-expand-lg top-nav navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">  <img src={Logo.src}/></a>
    <button 
      onClick={() => setOpen(!open)}
       className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"   aria-expanded={open} aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Collapse   in={open}>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:"flex-end"}}>
      <ul className="navbar-nav mb-2 mb-lg-0" style={{marginLeft: "auto !important"}}>

        { token !==null ?   <li className="nav-item">
        <Link href={'/dashboard'}>
          <a className="nav-link active" aria-current="page" href="#">DASHBOARD</a>
          </Link>
        </li>:null}
        { token !==null ?   <li className="nav-item">
        <Link href={'/stakings'}>
          <a className="nav-link active" aria-current="page" href="#">STAKINGS</a>
          </Link>
        </li>:null}
        { token !==null ?   <li className="nav-item">
        <Link href={'/users'}>
          <a className="nav-link active" aria-current="page" href="#">USERS</a>
          </Link>
        </li>:null}
        { token !==null ?   <li className="nav-item">
        <Link href={'/buyrequest'}>
          <a className="nav-link active" aria-current="page" href="#">BUY REQUEST</a>
        </Link>
        </li>:null}
        { token !==null ?   <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">SETTING</a>
        </li>:null}
        { token !==null ?   <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">WELCOME  {name?.firstName} </a>
        </li>:null}
      
        { token !==null ?  <li className="nav-item">
          <Link href={'/'}>
          <button onClick={logoutHandler} className="btn btn-outline-success border-btn" style={{marginRight:"10px"}} type="submit">Logout</button>
          </Link>
        </li>:null}
            {token == null ?
            <li className="nav-item">
              <Link href={'/'}>
          <button  className="btn btn-outline-success border-btn" type="submit">LOGIN / SIGNUP</button>
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