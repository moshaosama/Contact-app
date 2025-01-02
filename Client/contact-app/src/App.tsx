import { Route, Routes } from "react-router";
import "./App.css";
import Card from "./Components/Card";
import NumberContact from "./Components/NumberContact";
import EditCard from "./Components/Edit/editCard";
import Button from "./Components/Button";
import { CiSquarePlus } from "react-icons/ci";

function App() {
  return (
    <>
      <div className="flex justify-between">
        <NumberContact />
        <Button
          Title="Add New"
          Margin="16"
          Element={<CiSquarePlus className="text-xl" />}
        />
      </div>
      <Routes>
        <Route path="/" element={<Card />}></Route>
        <Route path="/Edit" element={<EditCard />}></Route>
      </Routes>
    </>
  );
}

export default App;
