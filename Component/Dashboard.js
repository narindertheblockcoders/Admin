import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';


const Dashboard = () => {
  const [totalStats, setTotalStats] = useState();

  useEffect (()=> {
    <Spinner animation="border" variant="warning" />
  },[])
  
  async function Dashboard() {
    try {
      const token = localStorage.getItem("token");
      console.log(token, "for api");
      let res = await axios.post("/api/dashboard", { token: token });
      const response = res.data;
      console.log(response.data, "for fetching details");
      setTotalStats(response.data);
    } catch (err) {
      console.log(err, err);
    }
  }

  useEffect(() => {
    Dashboard();
  }, []);
  
  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form
              className="input-sec  payment-form "
              id="form-pay"
              style={{ width: "35%", padding: "30px" }}
              >
              <div className="heading-parts">
                <h3
                  className="order-text"
                  style={{ textAlign: "left !important", paddingLeft: "0px", paddingBottom:"10px", borderBottom:"2px solid #D32286" }}
                  >
                  DASHBOARD
                </h3>
              </div>
              

              {/* <div className="input-line   link-line"></div> */}
              <div className="link-head">
                <Link href={"/users"}>
                  <div className="dashboard-item pt-3"  style={{ cursor: "pointer" }}>USERS<br/>{totalStats?.totalUsers}</div>
                </Link>
                <Link href={"/buyrequest"}>
                  <div className="dashboard-item pt-3"  style={{ cursor: "pointer" }} id="first-btns">
                    BUY REQUEST<br/>{totalStats?.totalBuyRequests}
                  </div>
                </Link>
                    <div className="dashboard-item"  style={{ cursor: "pointer" }} id="second-btns">
                    <div className="btc-text pt-3">
                    BTC
                    </div>
                    <div className="dtc-sec" style={{display:"flex"}}>
                    <div className="left-text">Pending<br/>{totalStats?.btcPendingAmount}</div>
                    <div className="right-text">Aproved<br/>{totalStats?.btcApprovedAmount}</div>
                    </div>
                  </div>
                  <div className="dashboard-item "  style={{ cursor: "pointer" }} id="third-btns">
                    <div className="btc-text pt-3">
                    ETH
                    </div>
                    <div className="dtc-sec" style={{display:"flex"}}>
                    <div className="left-text">Pending<br/>{totalStats?.ethPendingAmount}</div>
                    <div className="right-text">Aproved<br/>{totalStats?.ethApprovedAmount}</div>
                    </div>
                  </div>
                  <div className="dashboard-item "  style={{ cursor: "pointer" }} id="four-btns">
                    <div className="btc-text pt-3">
                    POLYGON
                    </div>
                    <div className="dtc-sec" style={{display:"flex"}}>
                    <div className="left-text">Pending<br/>{totalStats?.polyPendingAmount}</div>
                    <div className="right-text">Aproved<br/>{totalStats?.polyApprovedAmount}</div>
                    </div>
                  </div>
                  <div className="dashboard-item "  style={{ cursor: "pointer" }} id="five-btns">
                    <div className="btc-text pt-3">
                    USDT
                    </div>
                    <div className="dtc-sec" style={{display:"flex"}}>
                    <div className="left-text">Pending<br/>{totalStats?.usdtPendingAmount}</div>
                    <div className="right-text">Aproved<br/>{totalStats?.usdtApprovedAmount}</div>
                    </div>
                  </div>
                  <div className="dashboard-item "  style={{ cursor: "pointer" }} id="six-btns">
                    <div className="btc-text pt-3">
                    CREDIT CARD
                    </div>
                    <div className="dtc-sec" style={{display:"flex"}}>
                    <div className="left-text">Pending<br/>{totalStats?.ccPendingAmount}</div>
                    <div className="right-text">Aproved<br/>{totalStats?.ccApprovedAmount}</div>
                    </div>
                  </div>
                  <Link href={"/subscription"}>
                  <div className="dashboard-item " id="seven-btns"  style={{ cursor: "pointer" }}>{}
                  <div className="btc-text pt-3">
                  Subscription
                    </div>
                  </div>
                </Link>
                <div className="dashboard-item "  style={{ cursor: "pointer" }} id="five-btns">
                <Link href="/lifestylesubs">
                    <div className="btc-text pt-3 mt-2">
                    Lifestyle <br/> Subscriptions
                    </div>
                    {/* <div className="dtc-sec" style={{display:"flex"}}>
                    <div className="left-text">Pending<br/>{totalStats?.usdtPendingAmount}</div>
                    <div className="right-text">Aproved<br/>{totalStats?.usdtApprovedAmount}</div>
                  </div> */}
                  </Link>
                  </div>
        
                {/* <div className='link-item'    id='second-item'>CHANGE PASSWORD</div>
             <Link href={'/payyment'}>
             <div className='link-item' id='third-item'>BUY TOKEN</div>
             
             </Link>
            <div className='link-item'  id='third-item'>TOKEN</div> */}
           
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
