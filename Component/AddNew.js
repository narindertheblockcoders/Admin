import React from "react";
import Heart from "../public/Heart.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { Router, useRouter } from "next/router";

const AddNew = () => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const monthlyCostInputRef = useRef();
  const annualCostInputRef = useRef();
  const activeInputRef = useRef();
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);

  async function addsubscription(data) {
    try {
      let res = await axios.post("/api/addsubscription", data);
      const record = res.data;
      console.log(record, "data from api");
      notify("New Subscription Added Successfully");
      setTimeout(() => {
        router.push('/subscription')
      }, 1000);
    } catch (err) {
      notifyError("Something Went Wrong")
      console.log(err, "hello");
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();

    const subscriptionName = nameInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const monthlyCost = monthlyCostInputRef.current.value;
    const annualCost = annualCostInputRef.current.value;
    const active = activeInputRef.current.value;

    if (
      !subscriptionName ||
      !description ||
      !monthlyCost ||
      !annualCost ||
      !active
    ) {
      notifyError("Please fill all the details");
      return;
    }
    const data = {
      subscriptionName,
      description,
      monthlyCost,
      annualCost,
      active,
    };
    console.log(data, "enterd by admin");

    localStorage.setItem("profile", JSON.stringify(data));

    addsubscription(data);
  }

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
            <form className="input-sec input-top" onSubmit={formSubmitHandler}>
              <div
                className="line add-line"
              ></div>
              <img src={Heart.src} className="mt-2" />
              <h3 className="heading-text mt-3"> ADD NEW</h3>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">NAME</h6>
                <input
                  className="textinput"
                  required
                  type="text"
                  name="username"
                  ref={nameInputRef}
                />
              </div>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">DESCRIPTION</h6>
                <textarea
                style={{height:"100px"}}
                  className="textinput"
                  required
                  rows="10"
                  ref={descriptionInputRef}
                />
              </div>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">MONTHLY COST</h6>
                <input
                  className="textinput"
                  required
                  type="text"
                  name="username"
                  ref={monthlyCostInputRef}
                />
              </div>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">ANNUAL COST</h6>
                <input
                  className="textinput"
                  required
                  type="text"
                  name="username"
                  ref={annualCostInputRef}
                />
              </div>

              <div
                className="input-item"
                style={{ marginTop: "25px", flexDirection: "column" }}
              >
                <h6 className="item-text">ACTIVE</h6>
                <select className="textinput" ref={activeInputRef}>
                  {/* <option placeholder="Select"></option> */}
                  <option value="1">True</option>
                  <option value="0">False</option>
                </select>
              </div>
              <button
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "50px" }}
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddNew;
