import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "react";
import { ListData } from "../Card";
import { Link, useParams } from "react-router";

const FormEdit = () => {
  const [list, setList] = useState<ListData | null>(null);
  const id = useParams();
  const [Name, setName] = useState<string>(list?.name!);
  const [Email, setEmail] = useState<string>(list?.email!);
  const [Phone, setPhone] = useState<string>(list?.phone!);
  const [Address, setAddress] = useState<string>(list?.location!);
  const [Title, setTitle] = useState<string>(list?.jop!);
  const [Status, setStatus] = useState<string>(list?.status!);

  useEffect(() => {
    fetch(`http://localhost:8080/Contact/${id?.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <>
      <form action="" className="flex flex-col gap-5">
        <div className="flex justify-between max-sm:gap-5">
          <p>
            <Input
              labelName="Name"
              text="text"
              key={list?.id}
              handleChange={(e) => setName(e.target.value)}
            />
          </p>
          <p>
            <Input
              labelName="Email"
              text="text"
              Value={list?.email!}
              key={list?.id}
              handleChange={(e) => setEmail(e.target.value)}
            />
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <Input
              labelName="Phone"
              text="text"
              Value={list?.phone!}
              key={list?.id}
              handleChange={(e) => setPhone(e.target.value)}
            />
          </p>
          <p>
            <Input
              labelName="Address"
              text="text"
              Value={list?.location!}
              key={list?.id}
              handleChange={(e) => setAddress(e.target.value)}
            />
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <Input
              labelName="Title"
              text="text"
              Value={list?.jop!}
              key={list?.id}
              handleChange={(e) => setTitle(e.target.value)}
            />
          </p>
          <p>
            <Input
              labelName="Status"
              text="text"
              Value={list?.status!}
              key={list?.id}
              handleChange={(e) => setStatus(e.target.value)}
            />
          </p>
        </div>
      </form>
      <div className="flex justify-between items-center my-5">
        <Link to={"/"}>
          <Button
            Title="Save"
            Margin="0"
            Color="blue-300"
            handleClick={() => {
              fetch(`http://localhost:8080/EditContact/${id?.id}`, {
                method: "PUT",
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
        </Link>

        <Link to={"/"}>
          <Button
            Title="Delete"
            Margin="0"
            Color="red-600"
            handleClick={async () => {
              await fetch(`http://localhost:8080/deleteContact/${id?.id}`, {
                method: "DELETE",
                headers: {
                  "Content-type": "application/json",
                },
              }).then((res) => {
                return res.json();
              });
            }}
          />
        </Link>
      </div>
    </>
  );
};

export default FormEdit;
