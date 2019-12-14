const SessionModel = require('../models/session.model');
const SongService = require('./song.service');

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
      const session = await SessionModel.findById(sessionid).populate('songs');
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

      console.log(session.songs);
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
      await session.save();
    } catch (error) {
      console.log(error);
    }
  }

  static async addParticipants(userid) {
    //
  }

  static async removeParticipants(userid) {
    //
  }
}

module.exports = SessionService;
