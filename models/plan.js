const { Schema, model } = require('mongoose');

const PlanSchema = new Schema({
    user: Schema.Types.ObjectId,
    businessType: { type: String, default: 'product' },
    solution: String,
    marketingActivities: String,
    revenue: String,
    expenses: String,
    team: String,
    partners: String,
    name: String,
    domain: String,
    industry: String,
    vision: String,
    mission: String,
    service: String,
    targetMarket: String,
    problem: String,
    competitors: String,
    advantage: String,
    marketingChannels: String,
    marketingMaterials: String,
    incentives: String,
    requirements: String,
    objectives: String,
    date: { type: Date, default: new Date },
});

module.exports = model('Plan', PlanSchema);