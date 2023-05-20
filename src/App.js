import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./components";
import NavSideBar from "./components/NavSideBar";
import { Home, Filter, Navbar, Profile, Random } from "./pages";
import FullAnime from "./pages/FullAnime";
import GlobalStyle from "./styles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SearchBar />
      <NavSideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/random" element={<Random />} />
        <Route path="/:id" element={<FullAnime />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </>
  );
}

export default App;
