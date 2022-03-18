const TabItem = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${
        id === activeTab ? "text-gray-400" : "text-orange-600"
      } px-4 font-bold uppercase `}
    >
      {title}
    </button>
  );
};

export default TabItem;
