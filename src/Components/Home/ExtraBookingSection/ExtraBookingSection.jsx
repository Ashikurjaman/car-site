import { FaCalendarDays } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
const ExtraBookingSection = () => {
  return (
    <div className="bg-stone-950 text-slate-50 flex flex-col items-center lg:flex-row">
      <div className="flex flex-1 items-center p-16">
      <FaCalendarDays className="w-24 h-24" />
        <div className="ml-4">
          
          <p className="text-sm">We are open monday-friday</p>
          <p className="text-sm font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>
      <div className="flex flex-1 items-center p-16">
      <FaPhoneVolume  className="w-24 h-24" />
        <div className="ml-4">
          
          <p className="text-sm">Have a question?</p>
          <p className="text-sm font-bold">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex flex-1 items-center p-16">
      <FaMapLocationDot  className="w-24 h-24" />
        <div className="ml-4">
          
        <p className="text-sm">Need a repair? our address</p>
          <p className="text-sm font-bold">Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ExtraBookingSection;
