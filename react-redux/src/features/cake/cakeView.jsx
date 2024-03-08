import { useSelector } from "react-redux";

const Cakeview = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes);
  return (
    <div>
      <h2>Number of Cakes- {numofCakes}</h2>
      <button>Order Cakes</button> {"   "}
      <button>Restock Cakes</button>
    </div>
  );
};

export default Cakeview;
