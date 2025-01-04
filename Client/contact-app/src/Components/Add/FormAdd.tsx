import { useState } from "react";
import Button from "../Button";
import Input from "../Input";

interface FormAddProps {
  Active: boolean;
  setActive: (e: boolean) => void;
}

const FormAdd = ({ setActive, Active }: FormAddProps) => {
  const [Name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Phone, setPhone] = useState<string>("");
  const [Address, setAddress] = useState<string>("");
  const [Title, setTitle] = useState<string>("");
  const [Status, setStatus] = useState<string>("");

  console.log(Name);

  return (
    <>
      <div
        className={`bg-[rgba(0,0,0,0.5)] absolute top-0 w-full h-screen transition-all duration-300  flex justify-center items-center`}
      >
        <form action="" className="bg-white p-5 rounded-xl shadow-xl">
          <div
            className="flex justify-between mx-5 cursor-pointer"
            onClick={() => setActive(!Active)}
          >
            <h1 className="text-xl font-bold">New Contact</h1>
            <div className="bg-gray-400 w-fit rounded-full px-2">
              <span className="rounded-full p-1 font-bold text-xl">X</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 my-10">
            <div className="flex justify-between gap-3 max-sm:gap-5">
              <p>
                <Input
                  labelName="Name"
                  text="text"
                  handleChange={(e) => setName(e.target.value)}
                />
              </p>
              <p>
                <Input
                  labelName="Email"
                  text="text"
                  handleChange={(e) => setEmail(e.target.value)}
                />
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                <Input
                  labelName="Phone"
                  text="text"
                  handleChange={(e) => setPhone(e.target.value)}
                />
              </p>
              <p>
                <Input
                  labelName="Address"
                  text="text"
                  handleChange={(e) => setAddress(e.target.value)}
                />
              </p>
            </div>
            <div className="flex justify-between">
              <p>
                <Input
                  labelName="Title"
                  text="text"
                  handleChange={(e) => setTitle(e.target.value)}
                />
              </p>
              <p>
                <Input
                  labelName="Status"
                  text="text"
                  handleChange={(e) => setStatus(e.target.value)}
                />
              </p>
            </div>
          </div>

          <Button
            Title="Save"
            Margin="0"
            Color="blue-300"
            handleClick={() => {
              fetch("http://localhost:8080/createContact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: Name,
                  jop: Title,
                  email: Email,
                  location: Address,
                  phone: Phone,
                  status: Status,
                }),
              }).then((res) => {
                return res.json();
              });
            }}
          />
        </form>
      </div>
    </>
  );
};

export default FormAdd;
