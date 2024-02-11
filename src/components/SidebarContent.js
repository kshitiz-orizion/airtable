import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faSearch,
  faStar,
  faClock,
  faDisplay,
  faCirclePlus,
  faClipboard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const SideBarContent = () => {
  const data = [
    { icon: faBook, value: "My Templates", type: "bold" },
    { icon: faSearch, value: "Search", type: "bold" },
    { icon: faStar, value: "Software Engineer" },
    { icon: faStar, value: "Computer Hardware Engineer" },
    { icon: faStar, value: "Network Engineer" },
    { icon: faStar, value: "Technical Support" },
    { icon: faStar, value: "Network Administor" },
    { icon: faStar, value: "Management" },
    { icon: faStar, value: "Data Analyst" },
    { icon: faStar, value: "Computer Technician" },
    { icon: faClock, value: "Past Search 1" },
    { icon: faClock, value: "Past Search 2" },
    { icon: faClock, value: "Computers and Administration" },
    { icon: faClock, value: "Database Administrator" },
    { icon: faClock, value: "Computer Security" },
    { icon: faClock, value: "Computer System Analyst" },
  ];

  const data2 = [
    { icon: faClipboard, value: "Board 1", type: "bold" },
    { icon: faClipboard, value: "Board 2", type: "bold" },
    { icon: faClipboard, value: "Board 3", type: "bold" },
    { icon: faLock, value: "Board Agent 1", type: "bold" },
    { icon: faLock, value: "Board Agent 2", type: "bold" },
    { icon: faLock, value: "Board Agent 3", type: "bold" },
  ];

  return (
    <>
      {data.map((value) => (
        <div className="sidebarElement">
          <FontAwesomeIcon icon={value.icon} color={value.icon === faStar ?'#FFDF00' : '#a1a1a1'}/>
          <p className={value.type === "bold" ? "boldWeight" : ""}>
            {value.value}
          </p>
        </div>
      ))}
      <div className="boardBorder">
        <FontAwesomeIcon icon={faDisplay} className="iconBoard" />
        My Boards
        <FontAwesomeIcon icon={faCirclePlus} className="iconBoard flotright" />
      </div>
      {data2.map((value) => (
        <div className="sidebarElement">
          <FontAwesomeIcon icon={value.icon} color={value.icon===faLock ?'#FFD700': '#E6BE8A'}/>
          <p className={value.type === "bold" ? "boldWeight" : ""}>
            {value.value}
          </p>
        </div>
      ))}
    </>
  );
};

export default SideBarContent;
