const SessionModel = require('../models/session.model');

class SessionService {
  static async getSessions() {
    try {
      const sessions = await SessionModel.find();
      return sessions;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getSession(sessionid) {
    try {
      const session = await SessionModel.findById(sessionid);
      if (!session) {
        throw new Error(`Session not found with id: "${sessionid}"`);
      }
      return session;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async createSession({ name, date, location }) {
    await SessionModel.create({
      name,
      date,
      location,
      songs: [],
      participants: [],
    });
  }

  static async deleteSession(sessionid) {
    await SessionModel.remove({ _id: sessionid });
  }
}

module.exports = SessionService;
