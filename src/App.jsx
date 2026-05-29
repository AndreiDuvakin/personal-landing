import './styles/App.css'
import AppRouter from "./AppRouter.jsx";
import {ThemeProvider} from "./components/ThemeContext.jsx";


const App = () => (
    <ThemeProvider>
        <AppRouter/>
    </ThemeProvider>
);


export default App;