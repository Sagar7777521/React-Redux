import { useSelector } from "react-redux";

const IcecreamView = () => {
  const numOfIcreams = useSelector((state) => state.icecream.numOfIcreams);
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcreams}</h2>
      <button>Order IceCreams</button>
      {"   "}
      <button> Restock IceCream</button>
    </div>
  );
};

export default IcecreamView;
