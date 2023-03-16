import { apiGetArticleList } from '../../lib/api/article';

function MainPage({ $target }) {
  const $page = document.createElement('div');

  this.render = async () => {
    const response = await apiGetArticleList();
    const articlesHTML = response.map((article) => `<div><a href="${article.link}" data-link="${article.link}">${article.title}</a></div>`).join('');
    $page.innerHTML = `
      <h1>Article List</h1>
      <section style="margin-top: 20px;">
        ${articlesHTML}      
      </section>
    `;
    $target.innerHTML = '';
    $target.appendChild($page);
  };
}

export default MainPage;
