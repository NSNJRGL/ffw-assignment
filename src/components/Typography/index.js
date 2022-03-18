const Typography = ({ title }) => {
  return (
    <div className="flex flex-row">
      <div className="text-gray-400">&bull;</div>
      <div className="pl-2">
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Typography;
