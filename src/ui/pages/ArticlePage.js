import { apiGetArticleDetail } from '../../lib/api/article';
import { CoreComponent } from '../core';

class ArticlePage extends CoreComponent {
  constructor() {
    super(['thumbnail', 'title', 'writer', 'description']);
  }

  async connectedCallback() {
    const articleId = this.getAttribute('articleId');
    const response = await apiGetArticleDetail(articleId);
    this.props = response;
    this.render();
  }

  get styles() {
    return `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 43.75rem;
          height: 100%;
          margin: 0 auto 12rem auto;
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
}

export const articlePageTageName = 'article-page';

window.customElements.define(articlePageTageName, ArticlePage);

export default ArticlePage;
