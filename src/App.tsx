import { MyContextProvider } from "./Context/QueryContext";
import Homepage from "./pages/HomePage/Index";
import theme from "./theme";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./store/Index";

function App() {
  return (
    <MyContextProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Homepage />
        </ThemeProvider>
      </Provider>
    </MyContextProvider>
  );
}

export default App;
