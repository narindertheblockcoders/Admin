import React from 'react'
import Script from 'next/script'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
        <footer class="footer-head py-3 " id='footer-set' style={{display:"flex", justifyContent:"center"}}>
  
    <p class="text-center text-muted">© 2022 HealthiWealthi™. All rights reserved | <a href="#" class="systeme-show-popup-3443593" style={{textDecoration:"none", color:"#D32286", fontWeight:"600"}}>Contact us </a>
    <Script id="form-script-tag-3443593" src="https://www.healthiwealthi.net/public/remote/page/4931931cf737288ba0e8b30a751ad4c276fd7bc.js"></Script>  |
     Privacy Policy | Terms of Use |  <a href=" https://healthiwealthi.io/rxheal/cookie.php" target="_blank" style={{textDecoration:"none", color:"#D32286", fontWeight:"600", paddingLeft:"5px"}}>   Cookie Policy  </a>
    </p>
 
  </footer>
    </div>
  )
}

export default Footer