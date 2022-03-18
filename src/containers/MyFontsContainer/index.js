import { useDispatch } from "react-redux";
import Font from "../../components/Font";
import Typography from "../../components/Typography";
import { fontAction } from "../../store/font/action";

const MyFontsContainer = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = (fontId, event) => {
    if (event !== undefined && event.key !== "Enter") {
      return;
    }

    dispatch(fontAction.setSelectedFont(fontId));
  };

  const setOpacity = (selectedFont) => {
    return data.selectedFont === selectedFont ? "opacity-50" : "";
  };

  return (
    <div className="lg:flex lg:flex-row lg:items-start lg:justify-between md:justify-between sm:flex sm:flex-column sm:justify-between">
      <div
        tabIndex="0"
        role="button"
        aria-pressed="mixed"
        onKeyDown={(event) => handleClick(data.fonts.content[0].id, event)}
        onClick={() => handleClick(data.fonts.content[0].id)}
        className={`md:flex md:flex-col lg-flex lg:flex-col cursor-pointer ${setOpacity(
          data.fonts.content[0].id
        )}`}
      >
        <Font size="big" font={data.fonts.content[0]} />
        <div className="w-36 h-36 mt-4">
          <Typography title={data.fonts.content[0].label} />
        </div>
      </div>
      <div>
        {data.fonts.content.slice(1).map((font, index) => (
          <div
            tabIndex="0"
            role="button"
            aria-pressed="mixed"
            key={font.id + index}
            className={`flex flex-column mb-6 cursor-pointer ${setOpacity(
              font.id
            )}`}
            onClick={() => handleClick(font.id)}
            onKeyDown={(event) => handleClick(font.id, event)}
          >
            <Font id={font.id} size="small" font={font} />
            <div className="flex flex-column items-center justify-center ml-2 max-w-[68%]">
              <Typography title={font.label} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFontsContainer;
