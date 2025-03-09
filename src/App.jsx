import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CarPage from "./pages/CarPage";
import Filter from "./pages/Filter";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Favorite from "./components/Favorite/Favorite";
import Notification from "./components/Notification/Notification";
import How from "./components/How/How";
import Events from "./components/Events/Events";
import OrderPage from "./pages/OrderPage"; 
import SetingsPage from "./pages/SetingsPage";
import AdminPage from "./pages/AdminPage";


const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carPage/:id" element={<CarPage />} />
        <Route path="/filter" element={<Filter />} />
        <Route  path="/order/:id" element={<OrderPage />} /> 
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/howpage" element={<How />} />
        <Route path="/eventsPage" element={<Events />} />
        <Route path="/setingsPage" element={<SetingsPage />} /> 
        <Route path="/admin" element={<AdminPage/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
