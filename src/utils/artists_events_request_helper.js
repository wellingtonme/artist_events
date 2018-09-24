import UrlBuilder from './url_builder';

// eslint-disable-next-line import/prefer-default-export
export const request = async (service, urlParams = {}) => {
  try {
    const params = { ...urlParams, app_id: APP_KEY };
    const url = UrlBuilder.buildUrl(`${BASE_URL}${service}`, params);
    const result = await fetch(url);
    return result.json();
  } catch (ex) {
    return {
      err: ex,
    };
  }
};
