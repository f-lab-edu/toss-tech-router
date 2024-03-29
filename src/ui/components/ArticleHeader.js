import { CoreComponent } from '../core';

class ArticleHeader extends CoreComponent {
  constructor() {
    super(['thumbnail', 'title', 'image', 'name', 'job', 'date']);
  }

  get styles() {
    return `
      <style>
        .article-header {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .article-header__thumbnail {
          width: 100%;
          margin: 2.25rem 0 0 0;
          border-radius: var(--border-radius);
        }
        .article-header__title {
          margin: 1.25rem 0 0 0;
          font-size: var(--font-size-h2);
          color: var(--color-h3);
          line-height: 1.25;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        @media screen and (max-width: 700px) {
          .article-header__title {
            font-size: var(--font-size-h3);
          }
        }
      </style>
    `;
  }

  createHTML({ thumbnail, title, image, name, job, date }) {
    return `
      <header class='article-header'>
        <img
          class='article-header__thumbnail'
          srcset='${thumbnail}'
          alt='${title} 썸네일 이미지'
        />
        <h2 class='article-header__title'>${title}</h2>
        <article-author
          image='${image}'
          name='${name}'
          job='${job}'
          date='${date}'
        ></article-author>
      </header>
    `;
  }
}

export const articleHeaderTagName = 'article-header';
customElements.define(articleHeaderTagName, ArticleHeader);

export default ArticleHeader;
