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
            <a href='/article/asdasd' data-link='/article/asdasd'>list</a>
          </li>
          <li>
            <a href='/post' data-link='/post'>post</a>
          </li>
        </ul>
      </nav>
    `;
    $target.appendChild($page);
  };
}

export default Navbar;
