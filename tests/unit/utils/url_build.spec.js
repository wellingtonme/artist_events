import UrlBuilder from '@/utils/url_builder';

describe('Url Builder should work properly', () => {
  it('should return URL with replaced params', () => {
    const result = UrlBuilder.buildUrl('http://foo:8080/resource/:resourceId?token=:token', { resourceId: '123', token: 'asd123asd' });
    expect(result).toBe('http://foo:8080/resource/123?token=asd123asd');
  });

  it('should return URL with no replaced params when pattern is not followed', () => {
    const result = UrlBuilder.buildUrl('http://foo:8080/resource/resourceId?token=token', { resourceId: '123', token: 'asd123asd' });
    expect(result).toBe('http://foo:8080/resource/resourceId?token=token');
  });
});
