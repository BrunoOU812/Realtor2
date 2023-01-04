import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

function SignUp() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const [visible, setVisible] = React.useState(true);
  const changeVisible = () => {
    setVisible(!visible);
  };
  const eyeStyle = `absolute right-3 top-3 cursor-pointer`;
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign Up</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form type="text">
            <input
              type="text"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transitionease-in-out mb-3"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Your name here"
            />
            <input
              type="text"
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transitionease-in-out mb-3"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="relative">
              <input
                type={visible === false ? "text" : "password"}
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transitionease-in-out mb-3"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
              />
              {visible === true ? (
                <AiFillEyeInvisible
                  onClick={changeVisible}
                  className={eyeStyle}
                />
              ) : (
                <AiFillEye onClick={changeVisible} className={eyeStyle} />
              )}
            </div>
          </form>

          <button
            className="w-full bg-blue-500 text-white px-7 py-3 rounded mb-3"
            type="submit"
          >
            Sign Up
          </button>
          <p className="flex items-center before:flex-1 before:border-t  after:flex-1 after:border-t mb-3 justify-between">
            &nbsp; Or &nbsp;
          </p>
          <OAuth />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
