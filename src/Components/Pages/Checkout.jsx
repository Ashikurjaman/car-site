import { useLoaderData } from "react-router-dom";
import img1 from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { UserContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
const Checkout = () => {
  const { user } = useContext(UserContext);
  const loadData = useLoaderData();
  const { title, _id, price, img } = loadData;
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const name = form.name.value;
    const date = form.date.value;

    console.log(email);
    const order = {
      customerName: name,
      email,
      date,
      price,
      img:img,
      service: title,
      service_id: _id,
    };
    console.log(order);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          
          Swal.fire({
            title: "Booking Successfully Added",
            showClass: {
              popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
            },
          });
          form.reset();
        }
      });
  };
  return (
    <div className="relative mb-8 mt-8 ">
      <div className="relative mb-8">
        <img src={img1} alt="" />
        <h3 className="absolute text-4xl font-bold top-28 left-12 text-stone-100 ">
          Check Out
        </h3>
      </div>
      <div className="">
        <h2 className="text-4xl font-bold text-center ">
          Service Name : {title}
        </h2>
        <div className="card  shadow-2xl ">
          <form onSubmit={handelSubmit} className="card-body ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  defaultValue={user?.displayName}
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  name="date"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Due Price"
                  className="input input-bordered"
                  required
                  defaultValue={"$" + price}
                />
              </div>
            </div>
            <div>
              <textarea
                className="textarea textarea-info w-full"
                placeholder="Massage"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary btn-block"
                type="submit"
                value="Check Out"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
