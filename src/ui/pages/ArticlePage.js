import { apiGetArticleDetail } from '../../lib/api/article';

function ArticlePage({ $target, params }) {
  const $page = document.createElement('div');

  this.render = async () => {
    const response = await apiGetArticleDetail(params.id);
    const articleHTML = `<div><h3>${response.title}</h3><div>${JSON.stringify(response)}</div></div>`;
    $page.innerHTML = `
      <h1>Article Detail</h1>
      <section style="margin-top: 20px;">
        ${articleHTML}      
      </section>
    `;
    $target.innerHTML = '';
    $target.appendChild($page);
  };
}

export default ArticlePage;
