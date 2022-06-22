
import '../styles/globals.css'
import  'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Component/ui/Navbar'
import 'react-toastify/dist/ReactToastify.css';
import { SSRProvider } from 'react-bootstrap';



// import  'react-bootstrap/dist/css/react-bootstrap.css'


function MyApp({ Component, pageProps }) {
  return<SSRProvider>
   <Navbar/>
  <Component {...pageProps} />
  </SSRProvider>
}

export default MyApp
