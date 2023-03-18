class ArticleBody extends HTMLElement {
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
        .article-body {
          font-size: var(--font-size-h7);
          color: var(--color-h7);
          line-height: 1.7;
          margin: 54px 0 0 0;
        }
      </style>
    `;
  }

  createArticleBodyHTML(props) {
    return `
      <article class='article-body'>
        <p>${props.description}</p>          
      </article>
    `;
  }

  render() {
    const props = {
      description: this.getAttribute('description'),
    };
    const articleBodyHTML = this.createArticleBodyHTML(props);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${articleBodyHTML}
    `;
  }
}

export const articleBodyTagName = 'article-body';
customElements.define(articleBodyTagName, ArticleBody);

export default ArticleBody;
