import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Arrow from "../public/arrow.svg";
import { useRouter } from "next/router";
import Link from "next/link";

const BuyRequest = () => {
  const [usersBuyRequest, setUsersBuyRequest] = useState();
  const [query, setQuery] = useState("");
  const router = useRouter();

  async function BuyRequest() {
    try {
      // const token = localStorage.getItem("token");
      // console.log(token, "for api");
      let res = await axios.post("/api/buyrequest");
      const response = res.data;
      console.log(response.data, "for fetching details");
      setUsersBuyRequest(response.data);
    } catch (err) {
      console.log(err, err);
    }
  }
  


  useEffect(() => {
    BuyRequest();
  }, []);

  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec">
              <h3 className="funds-heading">
                <span
                  className="arrows-icon"
                  id="arrow-span"
                  onClick={() => router.back()}
                  style={{
                    position: "relative",
                    left: "-1%",
                    marginLeft: "20px",
                    cursor: "pointer",
                  }}
                >
                  <img src={Arrow.src} />
                </span>
                BUY REQUEST
              </h3>

              <div className="search-sec">
                <input
                  className="search-input"
                  type="text"
                  onChange={(e) => {
                    setQuery(e.currentTarget.value);
                  }}
                  
                  placeholder="Search Email"
                />
                <Link href="/createPayOrder">
     <button className="btn btn-round btn m-3">Create New Pay Order</button>
                </Link>

            
            
              </div>
         
              <table className="table funds-table">
                <thead>
                  <tr>
                    <th scope="col">FIRST NAME</th>
                    <th scope="col">LAST NAME</th>
                    <th scope="col">EMAIL</th>
                    <th scope="col">USD AMOUNT</th>
                    <th scope="col">TOKEN QUANTITY</th>
                    <th scope="col">TOKEN PRICE</th>
                    <th scope="col">FINAL AMOUNT</th>
                    <th scope="col">PAYMENT MODE</th>
                    <th scope="col">COIN</th>
                    <th scope="col">STATUS</th>
                  </tr>
                </thead>

                <tbody>
                  {usersBuyRequest ? (
                    usersBuyRequest
                      ?.filter((user) => user?.email?.includes(query))
                      .map((item) => {
                        return (
                          <tr key={item.id}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.usdAmount}</td>
                            <td>{item.tokenQuantity}</td>
                            <td>{item.tokenPrice}</td>
                            <td> {item.finalAmount}</td>
                            <td>{item.paymentMode}</td>
                            <td>{item.coin}</td>
                            <td>{item.status}</td>
                          </tr>
                        );
                      })
                  ) : (
                    <tr>
                      <td>
                        <Spinner animation="border" variant="warning" />
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
              {/* {new Date().toDateString()} */}

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                ></div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuyRequest;
