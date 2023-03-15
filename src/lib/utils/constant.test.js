import { API_URL, REGEXP } from './constant';

describe('REGEXP를 테스트 합니다.', () => {
  describe('ROUTE_PARAMETER는 :param 형식을 가집니다.', () => {
    test(`${API_URL.ARTICLE_DETAIL} 는 :id와 매치 됩니다.`, () => {
      const route = API_URL.ARTICLE_DETAIL;
      const match = route.match(REGEXP.ROUTE_PARAMETER);
      expect(match).toEqual([':id']);
    });
  });
  describe('URL_FRAGMENT는 URL 경로에서 params 값을 추출합니다.', () => {
    test(`${API_URL.ARTICLE_DETAIL} 는 api, article, :id와 매치됩니다.`, () => {
      const urlFragment = new RegExp(REGEXP.URL_FRAGMENT, 'g');
      const params = API_URL.ARTICLE_DETAIL.match(urlFragment);
      expect(params).toEqual(['api', 'article', ':id']);
    });
  });
});
