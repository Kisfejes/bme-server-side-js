const { SessionService } = require('../../services');

// Check request body, and create session
const sessionCreate = async (req, res, next) => {
  const { name, location, date } = req.body;

  try {
    await SessionService.createSession({
      name,
      location,
      date: new Date(date),
    });

    res.redirect('/sessions');
  } catch (error) {
    console.log(error);

    res.locals.error = error.message;
    res.locals.session = {
      name,
      location,
      date,
    };
    next();
  }
};

module.exports = sessionCreate;
