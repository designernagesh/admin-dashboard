import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import './App.scss';

function App() {
  return (
    <div className="grid-container">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
