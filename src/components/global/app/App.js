import { useEffect, useState } from "react";
import Topbar from "../../redactor/topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import RedactorWrapper from "../../redactor/redactorWrapper/RedactorWrapper";
import { makeServer } from "../../../api";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [selectedTask, setSelectedTask] = useState(null);

  const handleOpenSidebar = (isOpen) => {
    setSidebarOpen(isOpen);
  };

  const handleCloseSidebar = (isClosed) => {
    setSidebarOpen(isClosed);
  };

  const setCurrentTheme = (curTheme) => {
    setTheme(curTheme);
  };

  const getTaskHandler = (task) => {
    console.log(task);

    setSelectedTask(task);
  };

  useEffect(() => {
    makeServer();
  }, []);

  return (
    <div className="app">
      <Topbar handler={handleOpenSidebar} handleTheme={setCurrentTheme} />
      <Sidebar isOpen={sidebarOpen} handleClose={handleCloseSidebar} handler={getTaskHandler} />
      <RedactorWrapper theme={theme} task={selectedTask} />
    </div>
  );
}

export default App;
