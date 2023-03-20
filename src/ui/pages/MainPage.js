import { apiGetArticleList } from '../../lib/api/article';
import { CoreComponent } from '../core';

class MainPage extends CoreComponent {
  constructor() {
    super(['link', 'title', 'description', 'date', 'thumbnail']);
  }

  async connectedCallback() {
    const response = await apiGetArticleList();
    this.props = response;
    this.render();
  }

  get styles() {
    return `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 61.25rem;
          height: 100%;
          margin: 0 auto 12rem auto;
        }
        .main-page__container {
          width: var(--main-page-container-width);
          margin: 0 var(--main-page-container-margin);
        }
        .main-page__heading {
          width: 100%;
          background-color: var(--color-white);
          display: block;
          padding: 4.5rem 0 3.25rem 0;
          margin: 0;
          font-size: var(--font-size-h3);
        }
        .article-list__item {
          margin: 0;
          padding: 0;
          list-style: none;
        }
      </style>
    `;
  }

  createHTML(response) {
    const articleItemsHTML = response?.map(this.createArticleItemsHTML).join('');
    return `
      <section class='main-page__container'>
        <h3 class='main-page__heading'>개발</h3>
        <article>
          <ul class='article-list__item'>
            ${articleItemsHTML}          
          </ul>
        </article>
      </section>
    `;
  }

  createArticleItemsHTML({ link, title, description, date, thumbnail }) {
    return `
      <article-item
        link='${link}'
        title='${title}'
        description='${description}'
        date='${date}'
        thumbnail='${thumbnail}'
      ></article-item>
    `;
  }
}

export const mainPageTagName = 'main-page';

window.customElements.define(mainPageTagName, MainPage);

export default MainPage;
