import "./App.css";

import Cakeview from "./features/cake/cakeView";
import Userview from "./features/users/userView";
import IcecreamView from "./features/icecream/iceCreamView";
function App() {
  return (
    <div>
      <Cakeview />
      <IcecreamView />
      <Userview />
    </div>
  );
}

export default App;
