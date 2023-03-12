const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = '([^\\/]+)';

const checkRoutes = (routes, pathname, $target) => {
  const currentRoute = routes.find((route) => {
    const { regexp } = route;
    return regexp.test(pathname);
  });

  if (!currentRoute) {
    console.log('not found');
    return;
  }

  const params = getUrlParams(currentRoute, pathname);
  new currentRoute.component({ $target, params }).render();
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

const handlePopstate = (routes, $target) => {
  checkRoutes(routes, window.location.pathname, $target);
};

const handleLinkClick = (routes, $target, e) => {
  const $link = e.target.closest('a[data-link]');

  if ($link) {
    e.preventDefault();
    const { link } = $link.dataset;
    window.history.pushState(null, null, link);
    checkRoutes(routes, link, $target);
  }
};

const initRouter = ({ $target, $element, routes }) => {
  const parsedRoutes = routes.map((route) => {
    const params = [];

    const parsedPath = route.path
      .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
        params.push(paramName);
        return URL_FRAGMENT_REGEXP;
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
