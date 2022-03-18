const TabItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`px-4 font-bold text-orange-600 uppercase ${
        id === activeTab ? "text-gray-400" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default TabItem;
