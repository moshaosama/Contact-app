interface DetailsProps {
  Title: String;
  Element: React.ReactElement;
}

const Details = ({ Title, Element }: DetailsProps) => {
  return (
    <>
      <div className="flex gap-10 my-5 items-center">
        {Element}
        <h1>{Title}</h1>
      </div>
    </>
  );
};

export default Details;
