import React, { useState } from "react";

const Contact = () => {

    const [data,setData] =useState({
        fullname:'',
        mobile:'',
        email:'',
        msg:'',
    });

    const inputEvent =(event)=>{
        const {name,value} = event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name] : value,
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Hi Mr./Mrs. ${data.fullname}. 
        Your Contact Number is ${data.mobile}. 
        Your email id is ${data.email}. 
        And your message is ${data.msg}.
        Thank You for Contacting Us......`)
    };

  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Contact page</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Mobile Number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="mobile"
                  value={data.mobile}
                  onChange={inputEvent}
                  placeholder="Provide Your Valid Contact Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Put Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-success" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
