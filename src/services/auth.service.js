class AuthService {
  static getCurrentUser(session) {
    if (session.user) {
      return session.user;
    }
    return null;
  }

  static setCurrentUser(session, user) {
    session.user = user;
  }
}

module.exports = AuthService;
