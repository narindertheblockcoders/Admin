import React, { useRef, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Arrow from "../public/arrow.svg";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Subscription = (props) => {
  const [subscriptionData, setSubscriptioinData] = useState(null);
  const router = useRouter();

  async function subscription() {
    try {
      const token = localStorage.getItem("token");
      console.log(token, "for api");
      let res = await axios.post("/api/subscription", { token: token });
      const response = res.data;
      console.log(response.data, "for fetching details");
      setSubscriptioinData(response.data);
    } catch (err) {
      console.log(err, err);
    }
  }

  useEffect(() => {
    subscription();
  }, []);

  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="funds-sec">
              <h3 className="funds-heading">
                <Link href={"/dashboard"}>
                  <span
                    className="arrows-icon"
                    id="arrow-span"
                    style={{
                      position: "relative",
                      left: "-1%",
                      marginLeft: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <img src={Arrow.src} />
                  </span>
                </Link>
                SUBSCRIPTION
              </h3>

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
                    {/* <Link href={""}> */}
                    {/* </Link> */}
                  </div>
                  <p className="switch-text">Hide Zero Balances</p>
                </div>
                <Link href={"/addnew"}>
                  <button
                    id="add-btns"
                    className="btn btn-outline-success btn-round border-btn mt-0"
                    type="submit"
                  >
                    Add New
                  </button>
                </Link>
              </div>
              <table className="table funds-table">
                <thead>
                  <tr>
                    {/* <th scope="col" style={{ width: "15%" }}>
                      Register Date
                    </th> */}
                    <th scope="col">Subscription Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Annual Cost</th>
                    <th scope="col">Monthly Cost</th>
                    <th scope="col">Active</th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  {subscriptionData ? (
                    subscriptionData?.map((item) => {
                      return (
                        <tr key={item.id}>
                          {/* <td className="logo-txt" style={{ width: "15%" }}>
                            {new Date(item.regDate).toDateString()}
                          </td> */}
                          <td>{item.subscriptionName}</td>
                          <td>{item.description}</td>
                          <td>{item.annualCost}</td>
                          <td>{item.monthlyCost}</td>
                          <td>
                            <div className="form-check" id="check-sets">
                              <input
                                checked={item.active}
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="flexCheckChecked"
                              />
                            </div>
                          </td>
                          <td style={{ textAlign: "right" }}>
                            <Link
                              href={{
                                pathname: "/updatesubscription",
                                query: {
                                  id: item.id,
                                  name: item.subscriptionName,
                                  description: item.description,
                                  monthly: item.monthlyCost,
                                  annualCost: item.annualCost,
                                  status: item.active,
                                },
                              }}
                            >
                              <button
                                id="add-btn"
                                className="btn btn-outline-success btn-round border-btn"
                                style={{
                                  marginRight: "0px",
                                  border: "none",
                                  width: "100px",
                                  marginTop: "0",
                                }}
                                type="submit"
                              >
                                Edit
                              </button>
                            </Link>
                          </td>
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

export default Subscription;
