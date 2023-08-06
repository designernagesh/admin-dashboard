import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import './App.scss';
import { useState } from "react";

function App() {
  const [ showSidebar, setShowSidebar ] = useState(false);

  const menuHandler = () => {
      setShowSidebar(!showSidebar);
  }

  return (
    <div className="grid-container">
      <Header menuHandler={menuHandler} />
      <Sidebar showSidebar={showSidebar} menuHandler={menuHandler} />
      <MainContent />
    </div>
  )
}

export default App
