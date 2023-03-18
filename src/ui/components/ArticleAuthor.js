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
          margin: 20px 0 0 0;
        }
        .article-author__img {
          width: 48px;
          height: 48px;
          border-radius: 156px;
          margin-right: 14px;
        }
        .article-author__info {
          display: flex;
          flex-direction: column;
        }
        .article-author__name-job {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          margin: 8px 0 2px 0;
        }
        .article-author__date {
          font-size: var(--font-size-span);
          line-height: 1.5;
          color: var(--color-p);        
        }
      </style>
    `;
  }

  createArticleAuthorHTML(props) {
    return `
      <div class='article-author'>
        <img
          class='article-author__img'
          src='${props.image}'
          alt='작성자 프로필 이미지'
        />
        <div class='article-author__info'>
          <p class='article-author__name-job'>
            <span>${props.name}</span>
            <span>${props.job}</span>
          </p>
          <span class='article-author__date'>${props.date}</span>
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
    const articleAuthorHTML = this.createArticleAuthorHTML(props);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${articleAuthorHTML}
    `;
  }
}

export const articleAuthorTagName = 'article-author';
customElements.define(articleAuthorTagName, ArticleAuthor);

export default ArticleAuthor;
