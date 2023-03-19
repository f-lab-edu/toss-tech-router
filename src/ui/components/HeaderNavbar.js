class HeaderNavbar extends HTMLElement {
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
        :host {
          display: block;
          position: sticky;
          top: 0;
          height: 60px;
          border-bottom: 1px solid var(--border-grey);
          background-color: var(--color-white);
          z-index: 100;
        }
        .header {
          display: flex;
          justify-content: center;
          max-width: 1140px;
          height: 100%;
          margin: 0 auto;
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 92%;
          height: 100%;
        }
        .nav__logo {
          display: flex;
          align-items: center;
        }
        .nav__logo--img {
          width: auto;
          max-width: 110px;
          height: auto;
        }
      </style>
    `;
  }

  createHTML() {
    return `
      <header class='header'>
        <nav class='nav'>
          <div class='nav__logo'>
            <a href="/" data-link="/">
              <img class='nav__logo--img' src='https://i.imgur.com/cdzrwrt.png' alt='토스테크로고' />
            </a>          
          </div>
        </nav>
      </header>
    `;
  }

  render() {
    const html = this.createHTML();
    this.shadowRoot.innerHTML = `
      ${this.styles}
      ${html}
    `;
  }
}

window.customElements.define('header-navbar', HeaderNavbar);

export default HeaderNavbar;
