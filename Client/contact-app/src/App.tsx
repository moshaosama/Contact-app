import { Route, Routes } from "react-router";
import "./App.css";
import Card from "./Components/Card";
import NumberContact from "./Components/NumberContact";
import EditCard from "./Components/Edit/editCard";
import Button from "./Components/Button";
import { CiSquarePlus } from "react-icons/ci";
import FormAdd from "./Components/Add/FormAdd";
import { useState } from "react";

function App() {
  const [Active, setActive] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between bg-white sticky top-0 z-50 shadow-lg ">
        <NumberContact />
        <Button
          Title="Add New"
          Color="blue-300"
          Margin="6"
          Element={<CiSquarePlus className="text-xl" />}
          handleClick={() => setActive(true)}
        />
      </div>
      {Active ? <FormAdd Active={Active} setActive={setActive} /> : null}
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/edit/:id" element={<EditCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
