import React, { useState } from "react";

function Footermain() {
  const [addSub, setAddSub] = useState({
    email: "",
    bool: Boolean,
  });

  // console.log(addSub.email.length);
  // console.log(addSub.bool);
  // console.log(addSub.email);
  // const handleSub = () => {
  //   if (addSub.email.includes("@gmail.com")) {
  //     return setAddSub({
  //       bool: true,
  //     });
  //   } else {
  //     return setAddSub({
  //       bool: false,
  //     });
  //   }
  // };
  return (
    <>
      <footer id="footer">
        <div className="row">
          <div className="col">
            <img src="logo192.png" alt="img" className="logo" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              veritatis impedit, itaque corporis magnam sapiente, sint
              laboriosam nemo hic, a pariatur libero.
            </p>
          </div>
          <div className="col">
            <h3>
              Details
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <p>Nallasopara West, Thane</p>
            <p>Maharashtra, Pin-401203</p>
            <p className="email-id">ankushksingh086@gmail.com</p>
            <h4>+917715945071</h4>
          </div>
          <div className="col">
            <h3>
              Links
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="home">Products</a>
              </li>
              <li>
                <a href="home">Blog</a>
              </li>
              <li>
                <a href="home">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              Newsletter
              <div className="underline">
                <span></span>
              </div>
            </h3>

            {addSub.bool === true ? (
              <p>Thank-you for Subscribing.</p>
            ) : (
              <>
                <div className="footer-sub">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email id"
                    value={addSub.email}
                    onChange={(e) => {
                      setAddSub({ email: e.target.value });
                    }}
                  />
                  <button>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className="social-icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-twitter"></i>
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </>
            )}
          </div>
        </div>

        <hr />
        <p className="copyright">Ankush Kumar Singh</p>
      </footer>
    </>
  );
}

export default Footermain;
