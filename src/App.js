import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";

/**
 * Root App Component
 *
 * Wraps the entire application with Redux Provider to make the store
 * accessible throughout the component tree.
 */
function App() {
  return (
    <Provider store={appStore}>
      {/* Main body of the app containing header, content, and other components */}
      <Body />
    </Provider>
  );
}

export default App;
