const { Router } = require('express');

const dashboardRouter = Router();

dashboardRouter.get('/', (req, res) => {
    res.render('dashboard/index');
});

module.exports = dashboardRouter;