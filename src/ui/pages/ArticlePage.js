import { apiGetArticleDetail } from '../../lib/api/article';

class ArticlePage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const articleId = this.getAttribute('articleId');
    const response = await apiGetArticleDetail(articleId);
    this.render(response);
  }

  get styles() {
    return `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 700px;
          height: 100%;
          margin: 0 auto 192px auto;
        }
        .article-page__container {
            width: 92%;
            max-width: calc(100% - 48px);
            margin: 0 auto;
        }
        .article-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .article-header__thumbnail {
          width: 100%;
          margin: 36px 0 0 0;
          border-radius: var(--border-radius);
        }
        .article-header__title {
          margin: 20px 0 0 0;
          font-size: var(--font-size-h2);
          color: var(--color-h3);
          line-height: 1.25;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .article-header__author {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 20px 0 0 0;
        }
        .article-header__author-img {
          width: 48px;
          height: 48px;
          border-radius: 156px;
          margin-right: 14px;
        }
        .article-header__author-info {
          display: flex;
          flex-direction: column;
        }
        .article-header__author-name-job {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          margin: 8px 0 2px 0;
        }
        .article-header__author-date {
          font-size: var(--font-size-span);
          line-height: 1.5;
          color: var(--color-p);        
        }
        .article-body {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          line-height: 1.7;
          margin: 54px 0 0 0;
        }
        @media screen and (max-width: 700px) {
          .article-header__title {
            font-size: var(--font-size-h3);
          }
        }
      </style>
    `;
  }

  render(response) {
    this.shadowRoot.innerHTML = `
      ${this.styles}
      <section class="article-page__container">
        <header class="article-header">
          <img
            class="article-header__thumbnail"
            srcset="${response.thumbnail}"
            alt="${response.title} 썸네일 이미지"
          />
          <h2 class="article-header__title">${response.title}</h2>
          <div class="article-header__author">
            <img
              class="article-header__author-img"
              src="${response.writer.image}"
              alt="작성자 프로필 이미지"
            />
            <div class="article-header__author-info">
              <p class="article-header__author-name-job">
                <span>${response.writer.name}</span>
                <span>${response.writer.job}</span>
              </p>
              <span class="article-header__author-date">${response.writer.date}</span>
            </div>
          </div>
        </header>
        <article class="article-body">
          <p>${response.description}</p>          
        </article>
      </section>
    `;
  }
}

export const articlePageTageName = 'article-page';

window.customElements.define(articlePageTageName, ArticlePage);

export default ArticlePage;
