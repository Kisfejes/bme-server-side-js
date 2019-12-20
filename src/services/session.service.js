const SessionModel = require('../models/session.model');
const SongService = require('./song.service');
const UserService = require('./user.service');

const mockedSessions = require('./mock-data/sessions.mock');

class SessionService {
  static async getSessions() {
    try {
      let sessions;

      if (process.env.UNDER_TEST) {
        sessions = mockedSessions;
      } else {
        sessions = await SessionModel.find();
      }

      return sessions;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getSession(sessionid) {
    try {
      let session;

      if (process.env.UNDER_TEST) {
        session = mockedSessions.find(mockedSession => mockedSession.id === sessionid);
      } else {
        session = await SessionModel.findById(sessionid)
          .populate('songs')
          .populate('participants');
      }

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

  static async addSong(sessionid, songid) {
    try {
      const session = await SessionService.getSession(sessionid);
      const song = await SongService.getSong(songid);

      session.songs.push(song);
      await session.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async removeSong(sessionid, songid) {
    try {
      const session = await SessionService.getSession(sessionid);

      const songToRemoveIndex = session.songs.findIndex(song => {
        // eslint-disable-next-line no-underscore-dangle
        return song._id.toString() === songid;
      });
      if (songToRemoveIndex === -1) {
        throw new Error(`No song ${songid} in session ${sessionid}`);
      }

      session.songs.splice(songToRemoveIndex, 1);

      if (!process.env.UNDER_TEST) {
        await session.save();
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async addParticipant(sessionid, userid) {
    try {
      const session = await SessionService.getSession(sessionid);
      const user = await UserService.getUser(userid);

      session.participants.push(user);
      await session.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async removeParticipant(sessionid, userid) {
    try {
      const session = await SessionService.getSession(sessionid);

      const userToRemoveIndex = session.participants.findIndex(user => {
        // eslint-disable-next-line no-underscore-dangle
        return user._id.toString() === userid;
      });
      if (userToRemoveIndex === -1) {
        throw new Error(`No user "${userid}" in session "${sessionid}"`);
      }

      session.participants.splice(userToRemoveIndex, 1);

      if (!process.env.UNDER_TEST) {
        await session.save();
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = SessionService;
