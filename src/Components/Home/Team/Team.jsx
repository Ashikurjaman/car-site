import team1 from "../../../assets/images/team/1.jpg";
import team2 from "../../../assets/images/team/2.jpg";
import team3 from "../../../assets/images/team/3.jpg";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
const Team = () => {
  return (
    <div className="text-center mt-[130px] mb-16">
      <h3 className="text-3xl text-orange-500 font-bold">Teams</h3>
      <h2 className="text-3xl mt-8 font-bold">Meet Our Team</h2>
      <p className="font-semibold mt-8">
        the majority have suffered alteration in some form, by injected humour,
        <br /> or randomized words which do not look even slightly believable.
      </p>
      <div className="grid lg:grid-cols-3 gap-8 justify-center mt-16 mb-8">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team1} className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-500 font-bold">Engine Expert</p>
            <div className="flex justify-between items-center">
              <FaFacebook className="cursor-pointer" />
              <FaGoogle className="ml-3 cursor-pointer" />
              <FaLinkedin className="ml-3 cursor-pointer" />
              <FaInstagram className="ml-3 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team2} className="rounded-xl " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-500 font-bold">Engine Expert</p>
            <div className="flex justify-between items-center">
              <FaFacebook className="cursor-pointer" />
              <FaGoogle className="ml-3 cursor-pointer" />
              <FaLinkedin className="ml-3 cursor-pointer" />
              <FaInstagram className="ml-3 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={team3} className="rounded-xl " />
          </figure>

          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Car Engine Plug</h2>
            <p className="text-orange-500 font-bold">Engine Expert</p>
            <div className="flex justify-between items-center">
              <FaFacebook className="cursor-pointer" />
              <FaGoogle className="ml-3 cursor-pointer" />
              <FaLinkedin className="ml-3 cursor-pointer" />
              <FaInstagram className="ml-3 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Team;
