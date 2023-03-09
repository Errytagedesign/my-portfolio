import React from "react";

function TabTitle({ id, title, activeTab, setActiveTab, styles, icon }) {
  const handTabSwitch = () => {
    setActiveTab(id);
  };

  return (
    <div
      onClick={handTabSwitch}
      className={activeTab === id ? "active" : "notActive"}
    >
      {" "}
      <h4>{title}</h4>
    </div>
  );
}

export default TabTitle;
