import React from "react";
import Heart from "../public/Heart.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Admin = () => {
  // const [valid, setValid] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  async function Admin(dat) {
    try {
      let res = await axios.post("/api/admin", dat);
      const response = res.data;
      console.log(response.data);
      // setValid(false);
      localStorage.setItem("token", response.data.data);
      console.log(response.data.data);
      notify("signed in Successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    } catch (err) {
      console.log(err, err);
      // setValid(true);
      notifyError("User Not Found");
    }
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!email || email.trim() === "" || !email.includes("@") || !password) {
      setValid(true);
      return;
    }
    const data = {
      email,
      password,
    };
    Admin(data);
  
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
              {/* <div className="input-line iptset-line"></div> */}
              <img src={Heart.src} className="mt-2" />
              <h3 className="heading-text mt-3"> ADMIN</h3>

              <div className="input-item">
                <h6 className="item-text">EMAIL</h6>
                <input
                  className="textinput"
                  required
                  type="email"
                  name="username"
                  ref={emailInputRef}
                />
              </div>

              <div className="input-item" style={{ marginTop: "25px" }}>
                <h6 className="item-text">PASSWORD</h6>
                <input
                  className="textinput"
                  required
                  type="password"
                  name="last-name"
                  ref={passwordInputRef}
                />
                {/* {valid && <p style={{ color: "red" }}> Invalid details. </p>} */}
              </div>

              {/* <Link href={"/creditPage"}> */}
              <button
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "73p" }}
                type="submit"
              >
                LOGIN
              </button>
              {/* </Link> */}
              {/* <p className="by-text"> By continuing you agree to our cookie policy.</p> */}

              {/* <div className="para-set">
                <Link href={'/'}>
                <p className="iptpara-text">Are you new here? <a href="home-page.html" style={{fontWeight: "bold", fontSize: "15px", color: "#D32286"}}>Sign Up</a></p>
              </Link>

              </div> */}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
