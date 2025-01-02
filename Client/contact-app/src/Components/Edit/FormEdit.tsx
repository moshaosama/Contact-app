
import Input from "../Input";
import Button from "../Button";

const FormEdit = () => {
  return (
    <>
      <form action="" className="flex flex-col gap-5">
        <div className="flex justify-between max-sm:gap-5">
          <p>
            <Input labelName="Name" text="text" />
          </p>
          <p>
            <Input labelName="Email" text="text" />
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <Input labelName="Phone" text="number" />
          </p>
          <p>
            <Input labelName="Address" text="text" />
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <Input labelName="Title" text="text" />
          </p>
          <p>
            <Input labelName="Status" text="text" />
          </p>
        </div>

        <div>
          <Button Title="Save" Margin="0" />
        </div>
      </form>
    </>
  );
};

export default FormEdit;
