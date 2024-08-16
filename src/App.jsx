import React, { useState } from "react";
import { SideBarComponent } from "./Client/Components/SideBarComponent";
import { IndexPage } from "./Client/Pages/IndexPage";
import { ChatPage } from "./Client/Pages/ChatPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Client/Css/index.css";
export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <Router>
      <div className="flex bg-custom-dark max-h-screen overflow-hidden p-8 min-h-svh">
        <SideBarComponent
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <div
          className={`flex-1 bg-white overflow-hidden border-red-700 border-4 rounded-2xl transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "-ml-36"
          }`}
        >
          <Routes>
            <Route path="*" element={<IndexPage />} />
            <Route path="/" element={<IndexPage />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
