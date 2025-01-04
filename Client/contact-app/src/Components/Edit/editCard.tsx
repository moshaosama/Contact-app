import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router";
import FormEdit from "./FormEdit";

const EditCard = () => {
  return (
    <>
      <div className="mx-16 my-10">
        <div>
          <Link to={"/"}>
            <h1 className="flex items-center gap-2 cursor-pointer hover:underline transition-all duration-300">
              <BiArrowBack /> Back to list
            </h1>
          </Link>
          <div className="flex justify-center my-10">
            <div className="bg-blue-200 p-10 w-[45pc] max-sm:w-96 rounded-xl shadow-xl">
              <FormEdit />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCard;
