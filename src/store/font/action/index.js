import { fontService } from "../../../services/fontService";

export const fontAction = {
  getTabs: () => (dispatch) => {
    dispatch(fontActionCreators.getTabRequest());
    fontService.getTabs().then(
      ({ data }) => {
        dispatch(fontActionCreators.getTabSuccess(data));
      },
      (error) => {
        console.log(error);
      }
    );
  },
  getFont: (content) => (dispatch) => {
    dispatch(fontActionCreators.getFontRequest());
    fontService.getFont(content).then(
      ({ data }) => {
        dispatch(fontActionCreators.getFontSuccess(data));
      },
      (error) => {
        console.log(error);
      }
    );
  },
  setSelectedFont: (content) => (dispatch) => {
    dispatch(fontActionCreators.setSelectedFontSuccess(content));
  },
};

const fontActionCreators = {
  getTabRequest: () => ({
    type: "TAB_LOADING",
  }),
  getTabSuccess: (payload) => ({
    type: "TAB_SUCCESS",
    payload,
  }),
  getTabFailure: (error) => ({
    type: "TAB_FAILURE",
    error,
  }),
  getFontRequest: () => ({
    type: "FONT_LOADING",
  }),
  getFontSuccess: (payload) => ({
    type: "FONT_SUCCESS",
    payload,
  }),
  getFontFailure: (error) => ({
    type: "FONT_FAILURE",
    error,
  }),
  setSelectedFontSuccess: (payload) => ({
    type: "FONT_SELECTION_SUCCESS",
    payload,
  }),
};
