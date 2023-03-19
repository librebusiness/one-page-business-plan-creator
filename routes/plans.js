const { Router } = require('express');
const Plan = require('../models/plan');

const plansRouter = Router();

plansRouter.get('/', (req, res) => {
    Plan.find().then(plans => {
        res.render('plans/index', { plans });
    }).catch(err => {
        res.render('plans/index', { plans: [], errors: err });
    });
});

plansRouter.get('/:id', (req, res, next) => {
    Plan.findOne(req.params.id).then(plan => {
        res.render('plans/plan', { plan });
    }).catch(err => {
        next();
    });
});

plansRouter.delete('/:id', (req, res, next) => {
    Plan.deleteOne({ _id: req.params.id }).then(() => {
        res.redirect('/plans', 301);
    }).catch(err => {
        next();
    });
});

plansRouter.get('/new', (req, res) => {
    res.render('plans/new', { errors: null });
});

plansRouter.post('/create', (req, res) => {
    const planData = req.body;
    console.log(planData)
    // sanitize!
    const plan = new Plan(planData);
    plan.save().then((plan) => {
        res.render('plans/plan', { plan, message: 'Plan created!' });
    }).catch(err => {
        res.render('plans/', { errors: err });
    });
});

plansRouter.get('/edit/:id', (req, res) => {
    plan.findOne({ _id: req.params.id }).then(plan => {
        res.render('plans/edit', { plan });
    });
});

plansRouter.put('/update/:id', (req, res) => {
    const data = req.body;
    // sanitize!
    plan.updateOne({ _id: req.params.id }, data).then((plan) => {
        res.render('plans/plan', { plan });
    }).catch(err => {
        res.render('plans/edit', { plan: data, errors: err });
    });
});

module.exports = plansRouter;