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

  createHTML({ description }) {
    return `
      <article class='article-body'>
        <p>${description}</p>          
      </article>
    `;
  }

  render() {
    const props = {
      description: this.getAttribute('description'),
    };
    const html = this.createHTML(props);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${html}
    `;
  }
}

export const articleBodyTagName = 'article-body';
customElements.define(articleBodyTagName, ArticleBody);

export default ArticleBody;
