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
        @media screen and (max-width: 700px) {
          .article-header__title {
            font-size: var(--font-size-h3);
          }
        }
      </style>
    `;
  }

  createHTML({ thumbnail, title, writer, description }) {
    return `
      <section class="article-page__container">
        <article-header
          thumbnail="${thumbnail}"
          title="${title}"
          image="${writer.image}"
          name="${writer.name}"
          job="${writer.job}"
          date="${writer.date}"
        ></article-header>
        <article-body description="${description}"></article-body>
      </section>
    `;
  }

  render(response) {
    const html = this.createHTML(response);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${html}
    `;
  }
}

export const articlePageTageName = 'article-page';

window.customElements.define(articlePageTageName, ArticlePage);

export default ArticlePage;
