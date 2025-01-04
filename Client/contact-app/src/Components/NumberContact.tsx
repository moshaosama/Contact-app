import { useState, useEffect } from "react";
import { ListData } from "./Card";

const NumberContact = () => {
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
      <div className="m-6 text-xl font-bold">
        <h1>Conatct ({lists.length})</h1>
      </div>
    </>
  );
};

export default NumberContact;
