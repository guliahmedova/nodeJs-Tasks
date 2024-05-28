const { DASHBOARD_ENDPOINT, DASHBOARD_CREATE_ENDPOINT, DASHBOARD_CREATE_ACTİON_ENDPOINT } = require('../utils/url-helper');
const dahsboardController = require('../controllers/dashboard-controller');
const Router = require("./router");

const router = new Router();
router.addRoute(DASHBOARD_ENDPOINT, dahsboardController.getDashboard);
router.addRoute(DASHBOARD_CREATE_ENDPOINT, dahsboardController.getCreatePage);
router.addRoute(DASHBOARD_CREATE_ACTİON_ENDPOINT, dahsboardController.createCard);

module.exports = router.handleRoute.bind(router);