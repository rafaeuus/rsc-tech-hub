import RoutesComponent from "./routes";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <RoutesComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
