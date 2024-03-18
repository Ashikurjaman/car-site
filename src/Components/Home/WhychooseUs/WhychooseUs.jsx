import img1 from "../../../assets/icons/check.svg";
import img2 from "../../../assets/icons/deliveryt.svg";
import img3 from "../../../assets/icons/group.svg";
import img4 from "../../../assets/icons/person.svg";
import img5 from "../../../assets/icons/Wrench.svg";

const WhychooseUs = () => {
  return (
    <div className="text-center mt-[130px] mb-16">
      <h3 className="text-3xl text-orange-500 font-bold">Core Features</h3>
      <h2 className="text-3xl mt-8 font-bold">Why Choose Us</h2>
      <p className="font-semibold mt-8">
        the majority have suffered alteration in some form, by injected humour,
        <br /> or randomized words which do not look even slightly believable.
      </p>
      <div className="grid lg:grid-cols-5 gap-8 justify-center mt-16 mb-8">
        <div className="card bg-base-100 shadow-xl hover:bg-orange-500 hover:-translate-y-8 transition-all">
          <figure className="px-10 pt-10">
            <img src={img1} className="rounded-xl w-[24px] h-[24px]" />
          </figure>
          <div className="card-body items-center text-center">
            
            <p className=" font-bold">100% Guranty</p>
            
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl hover:bg-orange-500 hover:-translate-y-8 transition-all">
          <figure className="px-10 pt-10">
            <img src={img2} className="rounded-xl w-[24px] h-[24px]" />
          </figure>
          <div className="card-body items-center text-center">
            
            <p className=" font-bold">Timely Delivery</p>
            
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl hover:bg-orange-500 hover:-translate-y-8 transition-all">
          <figure className="px-10 pt-10">
            <img src={img3} className="rounded-xl w-[24px] h-[24px]" />
          </figure>

          <div className="card-body items-center text-center">
            
            <p className=" font-bold">Expert Team</p>
            
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl hover:bg-orange-500 hover:-translate-y-8 transition-all">
          <figure className="px-10 pt-10">
            <img src={img4} className="rounded-xl w-[24px] h-[24px]" />
          </figure>

          <div className="card-body items-center text-center">
            
            <p className=" font-bold">24/7 Support</p>
            
          </div>
        </div>
        <div className="card  bg-base-100 shadow-xl hover:bg-orange-500 hover:-translate-y-8 transition-all">
          <figure className="px-10 pt-10">
            <img src={img5} className="rounded-xl w-[24px] h-[24px]" />
          </figure>

          <div className="card-body items-center text-center">
            
            <p className=" font-bold">Best Equipment</p>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WhychooseUs;
