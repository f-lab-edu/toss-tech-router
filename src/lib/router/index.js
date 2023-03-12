import { NotFoundPage } from '../../ui/pages';

const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = '([^\\/]+)';

function Router({ $target, routes }) {
  let lastPathname;
  const parsedRoutes = routes.map((route) => {
    const params = [];
    const parsedPath = route.path
      .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
        params.push(paramName);
        return URL_FRAGMENT_REGEXP;
      })
      .replace(/\//g, '\\/');
    return {
      ...route,
      regexp: new RegExp(`^${parsedPath}$`),
      params,
    };
  });

  this.checkRoutes = () => {
    const { pathname } = window.location;
    if (lastPathname === pathname) {
      return;
    }

    lastPathname = pathname;

    const currentRoute = parsedRoutes.find((route) => {
      const { regexp } = route;
      return regexp.test(pathname);
    });

    if (!currentRoute) {
      new NotFoundPage({ $target }).render();
      return;
    }

    const params = extractUrlParams(currentRoute, pathname);
    new currentRoute.component({ $target, params }).render();
  };

  this.navigateTo = (path) => {
    window.history.pushState(null, null, path);
    this.checkRoutes();
  };
}

const extractUrlParams = (route, pathname) => {
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

export const initRouter = ({ $target, $element, routes }) => {
  const router = new Router({ $target: $element, routes });
  router.checkRoutes();
  window.addEventListener('popstate', router.checkRoutes);
  $target.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const { link } = e.target.dataset;
      router.navigateTo(link);
    }
  });
};

export default Router;
