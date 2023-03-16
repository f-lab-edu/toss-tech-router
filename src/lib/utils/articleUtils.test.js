import { getArticleList, getArticleDetailById } from './articleUtils';
import { ARTICLE_DETAILS, ARTICLES } from './constant';

describe('Article 데이터에 대한 단위 테스트', () => {
  describe('getArticleList 함수를 테스트합니다.', () => {
    test('Article List를 가져옵니다.', () => {
      const articles = getArticleList();
      expect(articles).toHaveLength(ARTICLES.length);
      expect(articles).toEqual(ARTICLES);
    });
  });

  describe('getArticleDetailById 함수를 테스트합니다.', () => {
    let article;

    beforeEach(() => {
      article = getArticleDetailById(1);
    });

    test('id가 1인 Article Detail 데이터를 정상적으로 가져오는지 확인합니다.', () => {
      const id = 1;
      const articleLength = ARTICLE_DETAILS.length;
      expect(article).toEqual(ARTICLE_DETAILS[articleLength - id]);
    });

    test('id의 Article Detail 데이터가 없을 경우 undefined가 반환되는지 확인합니다.', () => {
      const id = 0;
      article = getArticleDetailById(id);
      expect(article).toBeUndefined();
    });
  });
});
