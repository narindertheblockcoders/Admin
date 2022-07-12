import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';

const BuyRequest = () => {
  const [usersBuyRequest, setUsersBuyRequest] = useState();

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
              <h3 className="funds-heading">BUY REQUEST</h3>

              <div className="search-sec">
                <input
                  className="search-input"
                  type="text"
                  name="username"
                  placeholder="Search"
                />
                <div className="switch-sec">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      style={{ width: "3rem" }}
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                  <p className="switch-text">Hide Zero Balances</p>
                </div>
              </div>

              <table className="table funds-table">
                <thead>
                  <tr>
                    <th  scope="col">FIRST NAME</th>
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
                  {usersBuyRequest
                    ? usersBuyRequest?.map((item) => {
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
                      }):(
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
