import Axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import URL from './URL';
import Strings from './Strings';
import { Functions } from '../Utils';
const REQUEST = async ({
  Method,
  EndPoint,
  Params,
  IsformData = false,
  NeedToken = true,
}) => {
  const Device = await NetInfo.fetch();
  if (Device && Device?.isConnected) {
    return ApiCalling({
      Method,
      EndPoint,
      Params,
      IsformData,
      NeedToken,
    });
  } else {
    return alert('Please check your internet connection.');
  }
};
const ApiCalling = async ({
  Method,
  EndPoint,
  Params,
  IsformData,
  NeedToken,
}) => {
  const user = await Functions.getUser();
  const Headers = Header(NeedToken, user?.token, IsformData);
  const options = {
    method: Method,
    headers: Headers,
    data: Params,
    url: URL.AppUrl + EndPoint,
  };
  // console.log('Payload -> ', JSON.stringify(options, null, 2));
  const response = await Axios(options);
  return response.data;

  // fetch method......
  // const responseJson = await fetch(options.url, {
  //   method: Method,
  //   body: JSON.stringify(Params),
  //   headers: Headers,
  // });
  // const response = await responseJson?.json();
  // return response;
};
const Header = (NeedToken, Token, IsformData) => {
  let apiHeaders = {
    Accept: '*/*',
    language: Strings.getLanguage(),
    'Content-Type': IsformData ? 'multipart/form-data' : 'application/json',
  };
  if (NeedToken) {
    apiHeaders = { ...apiHeaders, Authorization: `Bearer ${Token}` };
  }
  return apiHeaders;
};
export default REQUEST;
