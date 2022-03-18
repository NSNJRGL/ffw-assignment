import api from "./api";

const BASE_URL = "http://json.ffwagency.md/";

export const fontService = {
  getTabs: () => {
    return api.get(BASE_URL + "tabs");
  },
  getFont: (data) => {
    return api.get(BASE_URL + data);
  },
};
