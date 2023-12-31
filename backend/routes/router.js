const glob = require("glob");
const { Router } = require("express");

const createRouter = () => {
  const routes = glob
    .sync("../controller/**/*.js", { cwd: `${__dirname}/` })
    .map((filename) => require(`./${filename}`).default)
    .filter((router) => router && Object.getPrototypeOf(router) == Router)
    .reduce(
      (rootRouter, router) => rootRouter.use(router),
      Router({ mergeParams: true })
    );
  return routes;
};

exports.default = createRouter();
