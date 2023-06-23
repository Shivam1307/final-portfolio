import React from "react";
import { useEffect } from "react";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { GlobalStyle } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/my-dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
const MainComp: any = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};
function App() {
  return (
    <BrowserRouter basename={"/"}>
      <>
        <Routes>
          <Route path="/" Component={MainComp}></Route>
          <Route path="/my-portfolio/dashboard" Component={Dashboard} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
