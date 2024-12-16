import { useState } from "react";
import Topbar from "../../redactor/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  const handleCloseSidebar = (isClosed) => {
    setSidebarOpen(isClosed);
  };

  return (
    <div className="app">
      <Topbar handler={handleOpenSidebar} />
      <Sidebar isOpen={sidebarOpen} handleClose={handleCloseSidebar} />
    </div>
  );
}

export default App;
//npm run api
