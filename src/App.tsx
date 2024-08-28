import { Provider } from "react-redux";
import { store } from "./state/store";
import { LeftSidebar } from "./components/LeftSidebar";

const App = () => {
  return (
    <div className="game">
      <Provider store={store}>
        <LeftSidebar />
      </Provider>
    </div>
  );
};

export default App;
