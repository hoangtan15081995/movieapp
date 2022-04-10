import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import { MovieContextProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MovieContextProvider>
  );
}

export default App;
