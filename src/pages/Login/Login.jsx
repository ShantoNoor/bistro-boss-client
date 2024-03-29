import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginDisable, setLoginDisable] = useState(true);
  const capchaRef = useRef();

  const { signIn } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(password, email);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCapcha = () => {
    const user_captcha_value = capchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      setLoginDisable(false);
    } else {
      setLoginDisable(true);
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  name="captcha"
                  type="text"
                  placeholder="type the text above"
                  className="input input-bordered"
                  required
                  ref={capchaRef}
                />
                <button
                  className="btn btn-outline btn-sm"
                  onClick={handleValidateCapcha}
                >
                  Validate Capcha
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  placeholder="Submit"
                  disabled={loginDisable}
                />
              </div>
            </form>
            <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
