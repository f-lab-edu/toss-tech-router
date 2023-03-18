function Navbar({ $target }) {
  this.render = () => {
    const $page = document.createElement('header');
    $page.innerHTML = `
      <nav>
        <ul>
          <li>
            <a href='/' data-link='/'>MAIN</a>
          </li>
        </ul>
      </nav>
    `;
    $target.appendChild($page);
  };
}

export default Navbar;
