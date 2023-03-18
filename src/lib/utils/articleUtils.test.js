import { getArticleList, getArticleDetailById } from './articleUtils';
import { ARTICLE_DETAILS, ARTICLES } from './constant';

describe('getArticleList 함수를 테스트합니다.', () => {
  test('Article List를 가져옵니다.', () => {
    const articles = getArticleList();
    expect(articles).toEqual(ARTICLES);
  });

  test('Article List가 비어있지 않은지 확인합니다.', () => {
    const articles = getArticleList();
    expect(articles.length).toBeGreaterThan(0);
  });
});

describe('getArticleDetailById 함수를 테스트합니다.', () => {
  test('id가 1인 Article Detail 데이터를 정상적으로 가져오는지 확인합니다.', () => {
    const id = 1;
    const articleLength = ARTICLE_DETAILS.length;
    const expectedArticle = ARTICLE_DETAILS[articleLength - id];
    const article = getArticleDetailById(id);
    expect(article).toEqual(expectedArticle);
  });

  test('id가 존재하지 않은 데이터 일 경우 null이 반환되는지 확인합니다.', () => {
    const id = 0;
    const article = getArticleDetailById(id);
    expect(article).toBe(null);
  });

  test('id가 음수인 경우 null이 반환되는지 확인합니다.', () => {
    const id = -1;
    const article = getArticleDetailById(id);
    expect(article).toBe(null);
  });

  test('id가 문자열인 경우 null이 반환되는지 확인합니다.', () => {
    const id = '문자예요.';
    const article = getArticleDetailById(id);
    expect(article).toBe(null);
  });

  test('id가 null인 경우 null이 반환되는지 확인합니다.', () => {
    const id = null;
    const article = getArticleDetailById(id);
    expect(article).toBe(null);
  });
});
