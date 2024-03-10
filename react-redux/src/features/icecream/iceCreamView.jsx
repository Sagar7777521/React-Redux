import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const numOfIcreams = useSelector((state) => state.icecream.numOfIcreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcreams}</h2>
      <button onClick={() => dispatch(ordered())}>Order IceCream</button>
      {"   "}
      <button onClick={() => dispatch(restocked(5))}>Restock IceCream</button>
    </div>
  );
};
  
export default IcecreamView;
