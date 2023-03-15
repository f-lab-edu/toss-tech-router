function MainPage({ $target }) {
  const $page = document.createElement('div');

  this.render = () => {
    $page.innerHTML = `
      <h1>안녕하세요</h1>
    `;
    $target.innerHTML = '';
    $target.appendChild($page);
  };
}

export default MainPage;
