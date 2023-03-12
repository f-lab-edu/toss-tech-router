function ArticlePage({ $target, params }) {
  const $page = document.createElement('div');

  this.render = () => {
    $page.innerHTML = `
      <h1>Article Page</h1>
      <p>Article ID: ${params.id}</p>
      <p>Article title: ${params.title}</p>
    `;
    $target.innerHTML = '';
    $target.appendChild($page);
  };
}

export default ArticlePage;
