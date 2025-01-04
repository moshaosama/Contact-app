import Input from "../Input";
import Button from "../Button";
import { useEffect, useState } from "react";
import { ListData } from "../Card";
import { Link, useParams } from "react-router";

const FormEdit = () => {
  const [list, setList] = useState<ListData | null>(null);
  const id = useParams();

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
              Value={list?.name!}
              key={list?.id}
            />
          </p>
          <p>
            <Input
              labelName="Email"
              text="text"
              Value={list?.email!}
              key={list?.id}
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
            />
          </p>
          <p>
            <Input
              labelName="Address"
              text="text"
              Value={list?.location!}
              key={list?.id}
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
            />
          </p>
          <p>
            <Input
              labelName="Status"
              text="text"
              Value={list?.status!}
              key={list?.id}
            />
          </p>
        </div>
      </form>
      <div className="flex justify-between items-center my-5">
        <Button
          Title="Save"
          Margin="0"
          Color="blue-300"
          ColorHover="blue-500"
        />

        <Button
          Title="Delete"
          Margin="0"
          Color="red-600"
          ColorHover="red-500"
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
      </div>
    </>
  );
};

export default FormEdit;
