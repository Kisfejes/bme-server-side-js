// Render the given page
const renderMW = viewName => (req, res) => {
  res.render(viewName);
};

module.exports = renderMW;
