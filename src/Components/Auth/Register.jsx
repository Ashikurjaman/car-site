import { Link, Navigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser,user} = useContext(UserContext)

  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    createUser(email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        Swal.fire({
            title: "Registration Successfully",
            
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
            
          });
          form.reset()
          user?<Navigate to={'login'}></Navigate>:'';
          
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-20">
          <img src={img} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16">
          <h1 className="text-5xl text-center font-bold pt-8">Sign Up </h1>
          <form onSubmit={handelSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
              <label className="label">
                <a href="#" className="label-text-alt">
                  Already have and account? Please
                  <Link to={'/login'}>
                  <button className="cursor-pointer text-orange-500 link">
                    Login
                  </button>
                  </Link>
                </a>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
