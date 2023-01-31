import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./AppRoutes";
import background from './assets/homebg.jpg';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
    palette: {
        steelBlue1: "#457AA5ff",
        steelBlue2: "#4E85AFff",
        starCommandBlue: "#3676A3ff",
        gunmetal: "#1B2932ff",
        camel: "#AE895Cff",
        camel2: "#B48B59ff",
        richBlack1: "#0A161Bff",
        richBlack2: "#020505ff",
        richBlack3: "#060B0Eff",
        khaki: "#BDB098ff",
        silver: "#B1BFC3",
        darkBlue: "#0F4273"
    }
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ height: '100vh', backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}> {/* styled component instead ? */}
                <BrowserRouter>
                    <Navbar />
                    <AppRoutes />
                </BrowserRouter>
            </div>
        </ThemeProvider>
    )
}