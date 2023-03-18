class NotFoundPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  createNotFoundPageHTML() {
    return `
      <content>
        <h1>Not Found Page</h1>          
      </content>
    `;
  }

  render() {
    const notFoundPageHTML = this.createNotFoundPageHTML();
    this.shadowRoot.innerHTML = notFoundPageHTML;
  }
}

export const notFoundPageTagName = 'notfound-page';
customElements.define(notFoundPageTagName, NotFoundPage);

export default NotFoundPage;
