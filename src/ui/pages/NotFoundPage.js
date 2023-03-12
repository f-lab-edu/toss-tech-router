function NotFoundPage({ $target }) {
  const $page = document.createElement('div');

  this.render = () => {
    $page.innerHTML = `
      <h1>NotFound</h1>
    `;
    $target.innerHTML = '';
    $target.appendChild($page);
  };
}

export default NotFoundPage;
