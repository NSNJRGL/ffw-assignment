import React from "react";

const TabContent = ({ id, activeTab, children }) => {
  return id === activeTab ? <div>{children}</div> : null;
};

export default TabContent;
