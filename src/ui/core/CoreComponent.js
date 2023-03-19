class CoreComponent extends HTMLElement {
  constructor(attributes) {
    super();
    this.props = {};
    for (const attribute of attributes) {
      this.props[attribute] = this.getAttribute(attribute);
    }
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get styles() {
    return '';
  }

  createHTML(props) {
    return '';
  }

  render() {
    const html = this.createHTML(this.props);
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${html}
    `;
  }
}

export default CoreComponent;
