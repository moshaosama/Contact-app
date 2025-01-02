import {
  MdOutlineMailOutline,
  MdPhone,
  MdSignalWifiStatusbar4Bar,
} from "react-icons/md";
import Details from "./Details";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

enum Status {
  Active = "Active",
  inActive = "Inactive",
}

const Card = () => {
  return (
    <>
      <div className="mx-16 bg-blue-200 p-5 max-w-72 rounded-xl shadow-xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
        <Link to={"/Edit"}>
          <div className="flex items-center gap-3">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4g-3ZH_1TjfN-zOuCRru2LrfrGtPbwaCsQ&s"
                alt=""
                className="w-14 rounded-full h-14"
              />
            </div>
            <div>
              <h1>Name</h1>
              <p className="bg-blue-400 text-center rounded-xl px-10">Jop</p>
            </div>
          </div>

          <div className="mx-5">
            <Details Element={<MdOutlineMailOutline />} Title={"Your Email"} />
            <Details Element={<IoLocationOutline />} Title={"Your Location"} />
            <Details Element={<MdPhone />} Title={"Phone"} />
            <Details
              Element={<MdSignalWifiStatusbar4Bar />}
              Title={Status.Active}
            />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
