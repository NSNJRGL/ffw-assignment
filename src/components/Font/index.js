const Font = ({ id, size, font }) => {
  return (
    <div
      id={id}
      className={`${
        size === "big" ? "w-32 h-32" : "w-24 h-24"
      } border border-gray-900 rounded-2xl relative`}
    >
      <div
        style={{ backgroundColor: font.color }}
        className={`w-[96%] h-[96%] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      ></div>
      <span
        className={`absolute bottom-2 left-4 font-bold text-gray-200 text-opacity-50 
        ${size === "big" ? "text-4xl" : "text-2xl"}`}
      >
        {font.abbr}
      </span>
    </div>
  );
};

export default Font;
