import { REGEXP } from '../utils/constant';
import { isObjectEmpty } from '../utils/apiUtils';

const checkRoutes = (routes, pathname, $target) => {
  const currentRoute = routes.find((route) => {
    const { regexp } = route;
    return regexp.test(pathname);
  });

  const notFoundRoute = routes.find((route) => route.path === '/404');
  const targetRoute = currentRoute || notFoundRoute;

  const params = getUrlParams(targetRoute, pathname);
  renderRoute({
    tagName: targetRoute.tagName,
    $target,
    params,
  });
};

const getUrlParams = (route, pathname) => {
  const params = {};

  if (route.params.length === 0) {
    return params;
  }

  const matches = pathname.match(route.regexp);
  matches.slice(1).forEach((paramValue, index) => {
    const paramName = route.params[index];
    params[paramName] = paramValue;
  });

  return params;
};

const renderRoute = ({ tagName, $target, params }) => {
  try {
    const $routePage = createElement(tagName, params);
    $target.innerHTML = '';
    $target.appendChild($routePage);
  } catch (e) {
    console.error('renderRoute Error:', e);
  }
};

const createElement = (tagName, props = {}) => {
  const $element = document.createElement(tagName);
  try {
    const hasParams = isObjectEmpty(props);
    if (hasParams) {
      Object.entries(props).forEach(([key, value]) => {
        $element.setAttribute(key, value);
      });
    }
    return $element;
  } catch (e) {
    console.error('createElement Error:', e);
    return $element;
  }
};

const handlePopstate = (routes, $target) => {
  checkRoutes(routes, window.location.pathname, $target);
};

const handleLinkClick = (routes, $target, e) => {
  const path = e.composedPath();
  const $link = path.find((el) => el.tagName === 'A' && el.dataset.link);
  if ($link) {
    e.preventDefault();
    if (window.location.pathname === $link.dataset.link) {
      return;
    }
    const { link } = $link.dataset;
    window.history.pushState(null, null, link);
    checkRoutes(routes, link, $target);
  }
};

const initRouter = ({ $target, $element, routes }) => {
  const parsedRoutes = routes.map((route) => {
    const params = [];

    const parsedPath = route.path
      .replace(REGEXP.ROUTE_PARAMETER, (match, paramName) => {
        params.push(paramName);
        return REGEXP.URL_FRAGMENT;
      })
      .replace(/\//g, '\\/');

    const regexp = new RegExp(`^${parsedPath}$`);

    return {
      ...route,
      params,
      regexp,
    };
  });

  window.addEventListener('popstate', handlePopstate.bind(null, parsedRoutes, $element));
  $target.addEventListener('click', handleLinkClick.bind(null, parsedRoutes, $element));
  checkRoutes(parsedRoutes, window.location.pathname, $element);
};

export default initRouter;
