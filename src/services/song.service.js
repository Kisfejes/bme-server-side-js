const SongModel = require('../models/song.model');

class SongService {
  static async getSongs() {
    try {
      const songs = await SongModel.find();
      return songs;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getSong(songid) {
    try {
      const song = await SongModel.findById(songid);
      if (!song) {
        throw new Error(`Song not found with id: "${songid}"`);
      }
      return song;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  static async createSong({ title, artist, youtube }) {
    await SongModel.create({
      title,
      artist,
      youtubeLink: youtube,
    });
  }

  static async updateSong({ songid, title, artist, youtube }) {
    const song = await SongModel.findById(songid);
    if (!song) {
      throw new Error(`Song not found with id: "${songid}"`);
    }

    song.title = title;
    song.artist = artist;
    song.youtubeLink = youtube;
    await song.save();
  }

  static async deleteSong(songid) {
    await SongModel.remove({
      _id: songid,
    });
  }
}

module.exports = SongService;
