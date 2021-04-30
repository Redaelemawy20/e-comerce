const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    console.log(req.body);
    const charge = await stripe.charges.create({
      amount: req.body.total_amount * 100,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.token.id,
    });

    req.user.credits += req.body.total_amount * 100;
    const user = await req.user.save();

    res.send(charge);
  });
};
