import "./App.css";
import { AppRouter } from "./core/router";
import { ThemeProvider } from "./core/theme";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
