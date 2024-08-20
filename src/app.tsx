import { AppRouter } from "./core/router";
import { ThemeProvider } from "./core/theme";
import "@/app.global-styles.ts";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
