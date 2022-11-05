import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Arrow from "../public/arrow.svg";
import { ToastContainer, toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";

const CreatePayOrder = () => {
  let [data, setData] = useState({
    finalAmount: "",
    userId: "1",
    tokenPrice: "",
    tokenQuantity: "",
    usdAmount: "",
  });

  const confirmPasswordInputRef = useRef();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRef, setLoadingRef] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [error, setError] = useState(null);
  // const [reffralBy,setReffralBy]= useState(false)

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 4000));
  }

  const router = useRouter();

  const [users, setUsers] = useState(null);

  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
        let theData= {...data,finalAmount:data.usdAmount};
      let res = await axios.post("/api/createorder", theData);
      const record = res.data;
      console.log(record, "hii man");
      console.log(res.data.data.id);
    //   router.push("/buyrequest/");
      // localStorage.setItem("token", record.data.data);
      // window.location.reload();
    } catch (err) {
      console.log(err.response.data.error.message);
      setError(err.response.data.error.message);
      setLoadingRef(false);
      setIsLoading(false);
    }
  }

  const notifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  async function getUsers() {
    try {
      // const token = localStorage.getItem("token");
      // console.log(token, "for api");
      let res = await axios.post("/api/getallusers");
      const response = res.data;
      console.log(response.data, "for fetching details");
      setUsers(response.data);
    } catch (err) {
      console.log(err, err);
    }
  }

  useEffect(() => {
    getUsers();
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoadingRef(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoadingRef(false);
//   async function formSubmitHandler(e) {
//     e.preventDefault();

//     let res = await axios.post("/api/createpayorder",data);

//   }
  return (
    <div>
      <section className="profile-sec  ">
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
            <form className="input-sec" onSubmit={formSubmitHandler}>
              <div className="line profile-line" id="profile-line"></div>
              <h3 className="heading-text pink-text mt-2">
                {/* <Link href={'/verification'}>
                  <span className="arrows-icon" style={{ position: "relative", left: "-15%", cursor: "pointer" }}  >
                    <img src={Arrow.src} />
                  </span>
                </Link> */}
                Create Pay Order
              </h3>

              <div className="name-sec">
                <div
                  className="input-item item-set"
                  style={{ marginRight: "10px" }}
                >
                  <h6 className="item-text">Token Price</h6>
                  <input
                  step="0.001"
                  type="number"
                    onChange={(e) => {
                      console.log(e.currentTarget.value);
                      setData({ ...data, tokenPrice: e.currentTarget.value });
                    }}
                    required
                    className="textinput"
                  />
                </div>

                <div
                  className="input-item item-set"
                  style={{ marginLeft: "10px" }}
                >
                  <h6 className="item-text">Token QUANTITY </h6>
                  <input
                  type="number"
                    onChange={(e) =>
                      setData({ ...data, tokenQuantity: e.currentTarget.value })
                    }
                    className="textinput"
                  />
                </div>
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">Select User</h6>
                <select
                  style={{ width: "100%", height: "40px" }}
                  onChange={(e) =>
                    setData({ ...data, userId: e.currentTarget.value })
                  }
                >
                  {users?.map((item) => {
                    return (
                      <option value={item.id}>
                        {item.firstName} {item.email}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">USD AMOUNT</h6>
                <input
                  required
                  className="textinput"
                  type="number"
                  name="password"
                  
                  id="pass"
                  onChange={(e) =>
                    setData({ ...data, usdAmount: e.currentTarget.value })
                  }
                />
              </div>

              {/* <div className="input-item item-set">
                <h6 className="item-text">Referred By</h6>
                <p>(Optional)</p>
                <input
                
                  defaultValue={refCode || ""}
                  className="textinput"
                  type="text"
                  disabled
                  name="Refferedby"
                />
              </div> */}

              {/* <Link href={"/login"}> */}
              {/* <button
                href="funds-page.html"
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "30px" }}
                type="submit"
                >
                CONTINUE
            </button> */}
              <div className="input-item item-set">
                {error && <Alert variant="danger"> {error}</Alert>}

                <Button
                  variant="primary"
                  className="btn btn-round btn-warning w-100 "
                  style={{ marginTop: "30px" }}
                  type="submit"
                  disabled={isLoading}
                  onClick={!isLoading ? handleClick : null}
                >
                  {isLoadingRef ? "Loading…" : "   CONTINUE"}
                </Button>
              </div>
              {/* </Link> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreatePayOrder;
