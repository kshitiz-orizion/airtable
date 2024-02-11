import React from "react";
import SideBar from "./components/Sidebar";
import RightContent from "./components/RightContent";

const App = () => {
  return (
    <>
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
        <SideBar/>
        <RightContent/>
    </div>
    </>
  );
};

export default App;
