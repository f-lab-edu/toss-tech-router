import { apiGetArticleList } from '../../lib/api/article';

class MainPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const response = await apiGetArticleList();
    this.render(response);
  }

  get styles() {
    return `
      <style>
        :host {
          display: block;
          width: 100%;
          max-width: 980px;
          height: 100%;
          margin: 0 auto 192px auto;
        }
        .main-page__container {
          width: var(--main-page-container-width);
          margin: 0 var(--main-page-container-margin);
        }
        .main-page__heading {
          width: 100%;
          background-color: var(--color-white);
          display: block;
          padding: 72px 0 52px 0;
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

  render(response) {
    const html = this.createHTML(response);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${html}
    `;
  }
}

export const mainPageTagName = 'main-page';

window.customElements.define(mainPageTagName, MainPage);

export default MainPage;
