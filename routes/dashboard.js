const { Router } = require('express');

const dashboardRouter = Router();

dashboardRouter.get('/', (req, res) => {
    res.render('dashboard/index', { errors: null });
});

module.exports = dashboardRouter;