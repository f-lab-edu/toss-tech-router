function Navbar({ $target }) {
  this.render = () => {
    const $page = document.createElement('header');
    $page.innerHTML = `
      <nav>
        <ul>
          <li>
            <a href='/' data-link='/'>root</a>
          </li>
          <li>
            <a href='/article/안녕하세요' data-link='/article/안녕하세요'>list</a>
          </li>
          <li>
            <a href='/article/title/description' data-link='/article/title/description'>post</a>
          </li>
        </ul>
      </nav>
    `;
    $target.appendChild($page);
  };
}

export default Navbar;
