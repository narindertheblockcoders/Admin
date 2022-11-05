import React from "react";
import Heart from "../public/Heart.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { Router, useRouter } from "next/router";

const AddNewLs = () => {
  const nameInputRef = useRef();
  const descriptionInputRef = useRef();
  const monthlyCostInputRef = useRef();
  const annualCostInputRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const timesDateRef = useRef();
  const activeInputRef = useRef();
  const router = useRouter();
  const [isValid, setIsValid] = useState(false);
const [currentFields,setCurrentFields] = useState([{value:""}])
  async function addsubscription(data) {
    try {
      let res = await axios.post("/api/newlifesubscription", data);
      const record = res.data;
      console.log(record, "data from api");
      notify("New Subscription Added Successfully");
      setTimeout(() => {
        router.push("/subscription");
      }, 1000);
    } catch (err) {
      notifyError("Something Went Wrong");
      console.log(err, "hello");
    }
  }
function onIncrementField(data) {
    setCurrentFields([{value:""},...currentFields]);

}
function onDecrementField() {
if(currentFields.length==1) return;
    const value = [...currentFields];
    value.splice(currentFields.length-1, 1);
    setCurrentFields([...value]);

}
function handleChange(index, event) {
    console.log(index, event.target.value);
    console.log(currentFields);
    const value = [...currentFields];
    value[index][event.target.name] = event.target.value;
    setCurrentFields(value);
  }
  function formSubmitHandler(event) {
    event.preventDefault();

    const subscriptionName = nameInputRef.current.value;
    const description = descriptionInputRef.current.value;
    const monthlyCost = monthlyCostInputRef.current.value;
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    
let arr=[];
currentFields.forEach((data)=>{
    arr.push(data.value);
})
    // const active = activeInputRef.current.value;
    console.log(startDate, endDate,arr.toString());
    
    if (
      !subscriptionName ||
      !description ||
      !monthlyCost ||
      !startDate 
    ) {
      notifyError("Please fill all the details");
      return;
    }
    const data = {
      title:subscriptionName,
     notes: description,
     startDate: startDate,
     endDate: endDate
     ,
notification:monthlyCost,

      
      times:arr
    };
    console.log(data, "enterd by admin");

    // localStorage.setItem("profile", JSON.stringify(data));

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
              <div className="line add-line"></div>
              <img src={Heart.src} className="mt-2" />
              <h3 className="heading-text mt-3"> ADD NEW</h3>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">Title</h6>
                <input
                  className="textinput"
                  required
                  type="text"
                  name="username"
                  ref={nameInputRef}
                />
              </div>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">Notes</h6>
                <textarea
                  style={{ height: "100px" }}
                  className="textinput"
                  required
                  rows="10"
                  ref={descriptionInputRef}
                />
              </div>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">Notification</h6>
                <textarea
                  className="textinput"
                  required
                  type="text"
                  name="username"
                  ref={monthlyCostInputRef}
                />
              </div>

              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">Start Date</h6>
                <input
                  className="textinput"
                  required
                  type="date"
                  name="start"
                  ref={startDateRef}
                />
              </div>
              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">End Date</h6>
                <input
                  className="textinput"
                  required
                  type="date"
                  name="end"
                  ref={endDateRef}
                />
                
              </div>
              <div className="input-item" style={{ flexDirection: "column" }}>
                <h6 className="item-text">Times</h6>
             {currentFields.map((input,i)=>{return <input
                className="textinput"
                required
                key={"value"+i}
                type="datetime-local"
                name="value"
                value={input.value}
                ref={timesDateRef}
                onChange={(event) => handleChange(i, event)}
                />
            })
        }
              </div>
              <button onClick={onIncrementField} type="button"  className="btn rounded btn-primary m-2">+</button>
              <button onClick={onDecrementField} type="button"  className="btn rounded btn-primary m-2">-</button>
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

export default AddNewLs;
