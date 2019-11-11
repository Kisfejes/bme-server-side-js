/* eslint-disable no-param-reassign */
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

  static clearCurrentUser(session) {
    session.user = null;
  }
}

module.exports = AuthService;
