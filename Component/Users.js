import React, { useRef, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Arrow from "../public/arrow.svg";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const Users = (props) => {
  const [usersData, setUsersData] = useState(null);
  const router = useRouter();
  const [query, setQuery] = useState("");
  async function Users() {
    try {
      const token = localStorage.getItem("token");
      console.log(token, "for api");
      let res = await axios.post("/api/getallusers", { token: token });
      const response = res.data;
      console.log(response.data, "for fetching details");
      setUsersData(response.data);
    } catch (err) {
      console.log(err, err);
    }
  }

  useEffect(() => {
    Users();
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
                USERS
              </h3>

              <div className="search-sec">
                <input
                  className="search-input"
                  type="text"
                  onChange={(e) => setQuery(e.currentTarget.value)}
                  placeholder="Search"
                />
                <div className="switch-sec">
                  {/* <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      style={{ width: "3rem" }}
                      type="checkbox"
                      id="flexSwitchCheckChecked"
                    /> */}
                  {/* </div> */}
                  <button className="switch-text">Search Users</button>
                </div>
              </div>
              <div className="search-sec">
                <Link href="/addusers">
                  <button className="btn btn-outline-success btn-round border-btn mb-3 mt-0">
                    Add New User
                  </button>
                </Link>
              </div>
              <table className="table funds-table">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      // style={{ width: "15%" }}
                    >
                      Register Date
                    </th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col"> Is Coach?</th>
                    <th scope="col">Email</th>
                    <th scope="col">DETAIL</th>
                  </tr>
                </thead>

                <tbody>
                  {usersData ? (
                    usersData
                      ?.filter((item) => {
                        return (
                          item?.firstName?.includes(query) ||
                          item?.email?.includes(query)
                        );
                      })
                      .map((item) => {
                        return (
                          <tr key={item.id}>
                            <td
                              className="logo-txt"
                              // style={{ width: "15%" }}
                            >
                              {new Date(item.regDate).toDateString()}
                            </td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td
                              style={
                                item?.isCoaches == "true"
                                  ? { color: "green", padding: "20px" }
                                  : { color: "red", padding: "20px" }
                              }
                            >
                              {(item?.isCoaches).toUpperCase()}
                            </td>
                            <td>{item.email}</td>
                            <td>
                              <Link href={"/userdetails/" + item.id}>
                                <button
                                  className="btn btn-outline-success btn-round border-btn"
                                  style={{
                                    marginRight: "0px",
                                    marginTop: "0px",
                                    border: "none",
                                    width: "100px",
                                  }}
                                  type="submit"
                                >
                                  Details
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

export default Users;
