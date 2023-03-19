import { CoreComponent } from '../core';

class NotFoundPage extends CoreComponent {
  constructor() {
    super([]);
  }

  createHTML() {
    return `
      <section>
        <h1>Not Found Page</h1>          
      </section>
    `;
  }
}

export const notFoundPageTagName = 'notfound-page';
customElements.define(notFoundPageTagName, NotFoundPage);

export default NotFoundPage;
