import { CoreComponent } from '../core';

class ArticleBody extends CoreComponent {
  constructor() {
    super(['description']);
  }

  get styles() {
    return `
      <style>
        .article-body {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          line-height: 1.7;
          margin: 3.375rem 0 0 0;
        }
      </style>
    `;
  }

  createHTML({ description }) {
    return `
      <article class='article-body'>
        <p>${description}</p>          
      </article>
    `;
  }
}

export const articleBodyTagName = 'article-body';
customElements.define(articleBodyTagName, ArticleBody);

export default ArticleBody;
