import { BrowserRouter as Router } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import  { useDarkMode } from "customHooks/useDarkMode"
import { GlobalStyles } from "components/GlobalStyles";
import { lightTheme, darkTheme } from "theme"
import AppRoutes from "routes"

function App() {
    const [theme, themeToggler, mountedComponent] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    if(!mountedComponent) return <div/>
  return (
    <Router>
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <AppRoutes theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>

    </Router>
  );
}

export default App;
