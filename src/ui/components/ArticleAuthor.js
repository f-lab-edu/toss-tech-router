class ArticleAuthor extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return `
      <style>
        .article-author {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 1.25rem 0 0 0;
        }
        .article-author__img {
          width: 3rem;
          height: 3rem;
          border-radius: 9.75rem;
          margin-right: 0.875rem;
        }
        .article-author__info {
          display: flex;
          flex-direction: column;
        }
        .article-author__name-job {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          margin: 0.5rem 0 0.125rem 0;
        }
        .article-author__date {
          font-size: var(--font-size-span);
          line-height: 1.5;
          color: var(--color-p);        
        }
      </style>
    `;
  }

  createHTML({ image, name, job, date }) {
    return `
      <div class='article-author'>
        <img
          class='article-author__img'
          src='${image}'
          alt='작성자 프로필 이미지'
        />
        <div class='article-author__info'>
          <p class='article-author__name-job'>
            <span>${name}</span>
            <span>${job}</span>
          </p>
          <span class='article-author__date'>${date}</span>
        </div>
      </div>
    `;
  }

  render() {
    const props = {
      image: this.getAttribute('image'),
      name: this.getAttribute('name'),
      job: this.getAttribute('job'),
      date: this.getAttribute('date'),
    };
    const html = this.createHTML(props);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${html}
    `;
  }
}

export const articleAuthorTagName = 'article-author';
customElements.define(articleAuthorTagName, ArticleAuthor);

export default ArticleAuthor;
