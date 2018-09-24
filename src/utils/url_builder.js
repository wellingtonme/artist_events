/**
 * This class is made to create URL replacing a param with its value
 * the only method needed is buildUrl
 * @class UrlBuilder
 */
export default class UrlBuilder {
  /**
   *
   * It replaces the params passed in the url with the pattern :param
   * with the passed value in the object getting the key with the same name as the param.
   * If it has more than one param with the same name,
   * it will replace all of them with the same value.
   *
   * @static
   * @param {*} url
   * @param {Object} [params={}]
   * @returns {String} formated string
   * @example
   * UrlBuilder.buildUrl('/resource/:id', { id: '123' }) : '/resource/123'
   * @memberof UrlBuilder
   */
  static buildUrl(url, params = {}) {
    return UrlBuilder.getParamsName(params)
      .reduce(
        UrlBuilder.replaceAllParamsAtUrl(params),
        url,
      );
  }

  static getParamsName(params) {
    return Object.keys(params);
  }

  static replaceAllParamsAtUrl(params) {
    return (builtUrl, param) => {
      // eslint-disable-next-line no-param-reassign
      builtUrl = UrlBuilder.replaceParamAtUrl(builtUrl, param, params[param]);
      return builtUrl;
    };
  }

  static replaceParamAtUrl(url, param, replacement) {
    const replaceToken = UrlBuilder.getReplace(param);
    return url.replace(replaceToken, replacement);
  }

  static getReplace(param) {
    return new RegExp(`:${param}`, 'g');
  }
}
