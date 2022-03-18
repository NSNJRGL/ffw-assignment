const initialFont = {
  tabs: [],
  fonts: [],
  tabLoading: false,
  fontLoading: false,
  selectedFont: undefined,
};

const fontReducer = (state = initialFont, action) => {
  switch (action.type) {
    case "TAB_LOADING":
      return {
        ...state,
        tabLoading: true,
      };
    case "TAB_SUCCESS":
      return {
        ...state,
        tabs: action.payload,
        tabLoading: false,
        fontLoading: true,
      };
    case "TAB_FAILURE":
      return {
        ...state,
        tabs: action.payload,
        tabLoading: false,
      };

    case "FONT_LOADING":
      return {
        ...state,
        fontLoading: true,
      };
    case "FONT_SUCCESS":
      return {
        ...state,
        fonts: action.payload,
        fontLoading: false,
      };
    case "FONT_FAILURE":
      return {
        ...state,
        fonts: action.payload,
        fontLoading: false,
      };
    case "FONT_SELECTION_SUCCESS":
      return {
        ...state,
        selectedFont: action.payload,
      };

    default:
      return state;
  }
};

export default fontReducer;
