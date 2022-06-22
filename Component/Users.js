import React, { useRef, useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

import axios from "axios";

const Users = () => {
  const [usersData, setUsersData] = useState(null);

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
              <h3 className="funds-heading">USERS</h3>

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
                    <th scope="col" style={{ width: "15%" }}>
                      Register Date
                    </th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                  </tr>
                </thead>

                <tbody>
                  {usersData ? (
                    usersData?.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td className="logo-txt" style={{ width: "15%" }}>
                            {new Date(item.regDate).toDateString()}
                          </td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
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
