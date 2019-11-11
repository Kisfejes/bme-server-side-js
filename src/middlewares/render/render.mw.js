const moment = require('moment');

// Render the given page
const renderMW = viewName => (req, res) => {
  res.locals.moment = moment;
  res.render(viewName);
};

module.exports = renderMW;
