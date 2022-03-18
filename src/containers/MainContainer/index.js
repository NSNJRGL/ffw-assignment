import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabContent from "../../components/Tab/TabContent";
import TabItem from "../../components/Tab/TabItem";
import { fontAction } from "../../store/font/action";
import Loader from "../../components/Loader";
import MyFontsContainer from "../MyFontsContainer";
import BuyFontsContainer from "../BuyFontsContainer";

const MainContainer = () => {
  const data = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(101);

  useEffect(() => {
    dispatch(fontAction.getTabs());
  }, [dispatch]);

  useEffect(() => {
    if (data.tabs.length > 0) {
      const filteredContentEndpoint = data.tabs.filter(
        (tab) => tab.id === activeTab
      );
      dispatch(fontAction.getFont(filteredContentEndpoint[0].content_endpoint));
    }
  }, [activeTab, data.tabs, dispatch]);

  const renderContent = () => {
    return data.fonts.type === "Font selection" ? (
      <MyFontsContainer data={data} />
    ) : (
      <BuyFontsContainer title={data.fonts.content} />
    );
  };

  return (
    <>
      <div className="flex flex-row mx-auto py-4 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center justify-between">
        <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900">
          <span className="block">Please select one font</span>
        </h2>
        <div className="flex lg:mt-0 lg:flex-shrink-0">
          {data.tabLoading ? (
            <Loader />
          ) : (
            <>
              {data.tabs.map((tab, index) => (
                <TabItem
                  key={tab.id + index}
                  title={tab.label}
                  id={tab.id}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="py-4 px-4 sm:px-6 lg:py-4 lg:px-8 lg:flex lg:items-center lg:justify-between xl:flex xl:items-center xl:justify-between">
        <div className="p-8 border-gray-200 border-2 rounded-xl w-full">
          {data.tabLoading ? (
            <Loader />
          ) : (
            <>
              {data.tabs.map((tab, index) => (
                <TabContent
                  key={tab.id + index}
                  id={tab.id}
                  activeTab={activeTab}
                >
                  {data.fontLoading ? <Loader /> : renderContent()}
                </TabContent>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
