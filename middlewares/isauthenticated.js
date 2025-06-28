function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next(); // User is logged in
  } else {
    res.redirect('/api/auth/login');
  }
}


module.exports = isAuthenticated;
