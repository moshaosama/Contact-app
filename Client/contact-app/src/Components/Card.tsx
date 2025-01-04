import {
  MdOutlineMailOutline,
  MdPhone,
  MdSignalWifiStatusbar4Bar,
} from "react-icons/md";
import Details from "./Details";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

export interface ListData {
  id: number;
  name: string;
  location: string;
  status: string;
  jop: string;
  email: string;
  phone: string;
}

const Card = () => {
  const [lists, setLists] = useState<ListData[] | []>([]);
  useEffect(() => {
    fetch("http://localhost:8080/Contacts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLists(data);
      });
  }, [lists]);

  return (
    <>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-y-10 my-10">
        {lists.length > 0 ? (
          lists.map((el: ListData) => {
            return (
              <>
                <Suspense fallback={"Loading..."}>
                  <div className="mx-16 bg-blue-200 p-5 w-80 max-sm:mx-6  rounded-xl shadow-xl hover:-translate-y-3 transition-all duration-300 cursor-pointer">
                    <Link to={`/edit/${el.id}`}>
                      <div className="flex items-center gap-3">
                        <div>
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4g-3ZH_1TjfN-zOuCRru2LrfrGtPbwaCsQ&s"
                            alt=""
                            className="w-14 rounded-full h-14"
                          />
                        </div>
                        <div>
                          <h1>{el.name}</h1>
                          <p className="bg-blue-400 rounded-xl px-10">
                            {el.jop}
                          </p>
                        </div>
                      </div>

                      <div className="mx-5">
                        <Details
                          Element={<MdOutlineMailOutline />}
                          Title={el.email}
                        />
                        <Details
                          Element={<IoLocationOutline />}
                          Title={el.location}
                        />
                        <Details Element={<MdPhone />} Title={el.phone} />
                        <Details
                          Element={<MdSignalWifiStatusbar4Bar />}
                          Title={el.status}
                        />
                      </div>
                    </Link>
                  </div>
                </Suspense>
              </>
            );
          })
        ) : (
          <h1 className="text-5xl font-bold mx-16 text-red-300">No Lists</h1>
        )}
      </div>
    </>
  );
};

export default Card;
