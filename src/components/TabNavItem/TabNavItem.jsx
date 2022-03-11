import React from "react";

const TabNavItem = ({ title, id, activeTab, setActiveTab }) => {
  const handleTabSwitch = () => {
    setActiveTab(id);
    console.log(activeTab);
  };

  return (
    <li
      onClick={handleTabSwitch}
      className={activeTab === id ? 'active__tab' : null}
    >
      {title}
    </li>
  );
};

export default TabNavItem;
