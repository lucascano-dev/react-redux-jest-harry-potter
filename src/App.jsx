import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadData } from "./redux/slice/characters/charactersSlice";

function App() {
  let dispatch = useDispatch();

  //let [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://hp-api.onrender.com/api/characters")
      .then((response) => {
        dispatch(loadData(response.data));
      })
      .catch();
  });

  return (
    <div className="App">
      <Header />

      <Routes>
        {/* Aqui digo que si esta en el path "/" que seria el inicio, que me muestre el elemento Home */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
