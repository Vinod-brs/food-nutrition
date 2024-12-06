import axios from 'axios';

const BaseURL = "https://trackapi.nutritionix.com/v2/natural/nutrients";

const oHeaders = {
  headers: {
    'x-app-id': "e28331cf",
    'x-app-key': "d578d9ba935d991b939fae6f0969dedf",
    'x-remote-user-id': "manoharv",
  }
}

export const HttpPost = async(aParams) => {
  let oResponse = await axios.post(BaseURL, aParams, oHeaders);
  return oResponse?.data;
}