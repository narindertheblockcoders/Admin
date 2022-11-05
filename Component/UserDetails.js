import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import DeleteModal from "./ui/DeleteModal";
import { Button } from "react-bootstrap";

const UserDetails = ({ props }) => {
  const [changeCoach, setChangeCoach] = useState(false);
  console.log(props);
  const [modal, setModal] = useState(false);
  let { data } = props.response;
  let { id } = props;
  console.log(id);
  async function onChangeCoach(e) {
    let response = await axios.post("/api/changeCoach", { id, e });
  }
  async function changeCoachStatus(boool) {
    let data = { toggle: boool, id };
    let response = axios.post("/api/coachtoggle", data);
    console.log(response);
  }
  // const [userDetails, setUserDetails] = useState(null);
  // console.log(props)

  // async function userdetails() {
  // try {
  //   const token = localStorage.getItem("token");
  //   console.log(token, "for api");

  // let data = {
  //   id : props.id,
  //   token
  // }
  // let res = await axios.post("/api/userdetails", data);
  //     const response = res.data;
  //     console.log(response.data, "for fetching details");

  //     setUserDetails(response.data)
  //     setUsersBuyRequest(response.data);
  //   } catch (err) {
  //     console.log(err, err);
  //   }
  // }
  // }
  // useEffect(() => {
  //   userdetails();
  // }, []);

  return (
    <div>
      <section className="profile-sec pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <form className="input-sec mb-5">
              <div
                className="line userprofile-line"
                style={{ top: "-5% !important" }}
              ></div>
              <h3 className="heading-text pink-text mt-2">
                {/* <Link href> */}
                <span
                  className="arrows-icon"
                  style={{
                    position: "relative",
                    left: "-23%",
                    cursor: "pointer",
                  }}
                >
                  {/* <img src={Arrow.src} /> */}
                </span>
                {/* </Link> */}
                USER PROFILE
              </h3>

              <div className="name-sec">
                <div className="input-item item-set">
                  <h6 className="item-text">FIRST NAME :- </h6>
                  <h6 className="item-text">{data?.firstName}</h6>
                  {/* <input
                    required
                    className="textinput"
                    type="name"
                    name="username"
                  
                  /> */}
                </div>
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">LAST NAME :- </h6>
                <h6 className="item-text"> {data?.lastName}</h6>
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">EMAIL :- </h6>
                <h6 className="item-text"> {data?.email}</h6>

                {/* <input disabled required className="textinput" name="email" /> */}
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">CONTACT NUMBER :- </h6>
                <h6 className="item-text">{data?.contactNumber}</h6>

                {/* <input  required className="textinput" name="contact no"  /> */}
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">ADDRESS :- </h6>
                <h6 className="item-text"> {data?.address}</h6>

                {/* <textarea  required className="textinput" name="address"  /> */}
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">CITY :- </h6>
                <h6 className="item-text"> {data?.city}</h6>

                {/* <input  required className="textinput" name="city"  /> */}
              </div>
              <div className="input-item item-set">
                <h6 className="item-text">STATE/PROVINCE :-</h6>
                <h6 className="item-text"> {data?.state}</h6>

                {/* <input  required className="textinput" name="state"  /> */}
              </div>

              <div className="input-item item-set">
                <h6 className="item-text">ZIP Code :- </h6>
                <h6 className="item-text"> {data?.zipcode}</h6>
              </div>

              <div className="input-item item-set">
                <h6 className="item-text"> Coach Status:-
                {(data?.coachStatus && " True") || " False"}
                
                 </h6>
                <h6 className="item-text">
                  {" "}
                  
                   <p>The toggle represents the status of user as a coach.</p>
<label value="" class="switch">
  
                <input
                  type="checkbox"
                  onChange={(e) => changeCoachStatus(e.currentTarget.checked)}
                  checked={data?.coachStatus}
                />
                
                <span class="slider round"></span>
                {/* <p>To convert a user to coach click toggle  </p> */}
              </label>

                </h6>
              </div>
              
              {changeCoach ? (
                <div className="input-item ">
                  <h6 className="item-text"> Change Coach </h6>
                  <input
                    onChange={(e) => onChangeCoach(e.currentTarget.value)}
                    list="brow"
                  />{" "}
                  <Button variant="primary">Save</Button>
                  <datalist id="brow">
                    <option value="Internet Explorer" />
                    <option value="Firefox" />
                    <option value="Chrome" />
                    <option value="Opera" />
                    <option value="Safari" />
                  </datalist>
                  {/* <input  required className="textinput" name="zip code"  /> */}
                </div>
              ) : (
                <div className="input-item ">
                  <Button
                    className=" btn-round   w-50 p-0"
                    onClick={() => setChangeCoach(true)}
                  >
                    Change Coach
                  </Button>
                </div>
              )}

              <Link href={"/users"}>
                <button
                  href="funds-page.html"
                  className="btn btn-round btn-warning w-100 p-0"
                  style={{ marginTop: "50px" }}
                  type="submit"
                >
                  BACK
                </button>
              </Link>
              <button
                href="funds-page.html"
                onClick={() => setModal(true)}
                className="btn  btn-danger w-100 p-0"
                style={{ marginTop: "50px" }}
                type="button"
              >
                Delete user
              </button>
              <DeleteModal
                show={modal}
                id={id}
                onHide={() => setModal(false)}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserDetails;
