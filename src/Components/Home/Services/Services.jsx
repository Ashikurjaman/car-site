import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="service" className="text-center mt-16 mb-8 ">
      <h3 className="text-3xl font-bold text-orange-500">Service</h3>
      <h2 className="text-6xl font-bold mt-5">Our Service Area</h2>
      <p className="font-medium mt-5">
        the majority have suffered alteration in some form, by injected humour,{" "}
        <br /> or randomized words which do not look even slightly believable.{" "}
      </p>
      <div className="grid lg:grid-cols-3 gap-8 space-y-8 justify-center">
      {services.map((service) => (
        <ServiceCard key={service._id} service={service}></ServiceCard>
      ))}
      </div>
      <button  className="btn btn-outline btn-accent mt-16"> More Services</button>
    </div>
  );
};

export default Services;
