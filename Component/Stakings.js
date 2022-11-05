import React, {useState, useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Arrow from "../public/arrow.svg";
import { useRouter } from "next/router";

const Stakings = () => {
  const [usersStaks, setUsersStaks] = useState(null);
  const  router =useRouter()

  async function stakings() {
    try {
      const token = localStorage.getItem("token");
      console.log(token, "for api");
      let res = await axios.post("/api/stakings", { token: token });
      const response = res.data;
      console.log(response.data, "for fetching details");
      setUsersStaks(response.data);
      setTimeout(() => {
        notify("Stakings Updated Successfully")
      }, 1000);
    } catch (err) {
      console.log(err, err);
    }
  }

  useEffect(() => {
    stakings();
  }, []);

  const notify = (msg) =>
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  return (
    <div>
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <form className="funds-sec">
              <h3 className="funds-heading">
              <span className="arrows-icon" id="arrow-span" onClick={()=>router.back()}  style={{ position: "relative", left: "-1%", marginLeft:"20px", cursor: "pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                STAKINGS</h3>

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
                    <th scope="col">STAKINGS DATE</th>
                    <th scope="col">TOKEN</th>
                    <th scope="col">ROI</th>
                    <th scope="col">ENDDATE</th>
                  </tr>
                </thead>

                <tbody>
                  {usersStaks
                    ? usersStaks?.map((item) => {
                        return (
                            <tr key={item.id}>
                              <td
                                className="logo-txt"
                                style={{ width: "15%" }}
                              >{new Date(item.createdAt).toDateString()}</td>
                              <td>{item.token}</td>
                              <td>{item.roi}</td>
                              <td>{new Date(item.endDate).toDateString()}</td>
                            </tr>
                        );
                      })
                      :(
                        <tr>
                          <td>
                            <Spinner animation="border" variant="warning" />
                          </td>
                        </tr>
                      )}
                </tbody>
              </table>
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

export default Stakings;
