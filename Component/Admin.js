import React from "react";
import Heart from "../public/Heart.svg";
import { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { Router, useRouter } from "next/router";

const Admin = () => {
  const router = useRouter();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  async function formSubmitHandler(event) {
    event.preventDefault();
   
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    })
    console.log (res, 'response from credentials')

    if(res?.error) {
      console.log(res.error)
      notifyError("Invalid Detail")
    }
    else {
    }
    if(!res.error) {
      router.push ('/dashboard')
    }
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
      <section className="profile-sec">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec input-top" onSubmit={formSubmitHandler}>
              <div className="input-line iptset-line"></div>
              <img src={Heart.src} className="mt-2" />
              <h3 className="heading-text mt-3"> ADMIN</h3>

              <div className="input-item" style={{flexDirection:"column"}}>
                <h6 className="item-text">EMAIL</h6>
                <input
                  className="textinput"
                  required
                  type="email"
                  name="username"
                  ref={emailInputRef}
                />
              </div>

              <div className="input-item" style={{ marginTop: "25px", flexDirection:"column" }}>
                <h6 className="item-text">PASSWORD</h6>
                <input
                  className="textinput"
                  required
                  type="password"
                  name="last-name"
                  ref={passwordInputRef}
                />
              </div>
              <button
                className="btn btn-round btn-warning w-100 "
                style={{ marginTop: "73p" }}
                type="submit"
              >
                LOGIN
              </button>
             
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;

// export async function getServerSideProps(context) {
//   return {
//     props:{
//       csrfToken: await getCsrfToken(context)
//     },
//   };
// }
