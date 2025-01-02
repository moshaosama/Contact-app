interface inputProps {
  labelName: string;
  text: string;
}

const Input = ({ labelName, text }: inputProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="labelName" className="font-bold">
          {labelName}
        </label>
        <input
          id="labelName"
          type={text}
          className="p-1 w-72 max-sm:w-32 rounded-lg shadow-lg"
        />
      </div>
    </>
  );
};

export default Input;
