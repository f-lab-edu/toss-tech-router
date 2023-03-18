class ArticleItem extends HTMLElement {
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
        .article {
          display: flex;
          align-items: center;
          cursor: pointer;
          text-decoration: none;
          margin-bottom: var(--article-space);
        }
        .article:hover .article__thumbnail {
          transform: translate3d(0, -3%, 0);
        }
        .article:hover .article__description > h3 {
          color: var(--color-blue);
        }
        .article__thumbnail {
          width: var(--thumbnail-width);
          height: var(--thumbnail-height);
          object-fit: cover;
          border-radius: 14px;
          margin-right: 48px;
          transition: var(--thumbnail-transition);
        }
        .article__description {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          line-height: 1.6;
        }
        .article__description > h3 {
          font-size: var(--font-size-h3);
          color: var(--color-h3);
          word-break: keep-all;
          margin: 0 0 14px 0;
        }
        .article__description > h7 {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          word-break: keep-all;
          margin: 0 0 14px 0;
        }
        .article__description > p:last-child {
          font-size: var(--font-size-p);
          color: var(--color-p);
          margin: 0;
        }
        
        @media screen and (max-width: 700px) {
          .article {
            flex-direction: column;
            align-items: flex-start;
          }
          .article__thumbnail {
            width: 100%;
            height: 200px;
            margin: 0 0 20px 0;
          }
          .article__description {
            width: 100%;
          }
          .article__description > h3 {
            font-size: 26px;
            margin: 0 0 10px 0;
          }
        }
      </style>
    `;
  }

  render() {
    const props = {
      link: this.getAttribute('link'),
      title: this.getAttribute('title'),
      description: this.getAttribute('description'),
      date: this.getAttribute('date'),
      thumbnail: this.getAttribute('thumbnail'),
    };
    this.shadowRoot.innerHTML = `
      ${this.styles}
      <a
        class='article'
        href='${props.link}'
        data-link='${props.link}'
      >
        <img
          class='article__thumbnail'
          srcset='${props.thumbnail}'
          alt='${props.title} 썸네일 이미지'
        />
        <div class='article__description'>
          <h3>${props.title}</h3>
          <h7>${props.description}</h7>
          <p>${props.date}</p>
        </div>
      </a>
    `;
  }
}

customElements.define('article-item', ArticleItem);

export default ArticleItem;
