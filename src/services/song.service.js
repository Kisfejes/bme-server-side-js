const songs = [
  {
    id: 1,
    title: 'The Boxer',
    artist: 'Simon & Garfunkel',
    youtubeLink: 'https://www.youtube.com/watch?v=l3LFML_pxlY',
  },
  {
    id: 2,
    title: 'Mrs Robinson',
    artist: 'Simon & Garfunkel',
    youtubeLink: 'https://www.youtube.com/watch?v=9C1BCAgu2I8',
  },
  {
    id: 3,
    title: 'Feed Me',
    artist: 'Blue Tips',
    youtubeLink: 'https://www.youtube.com/watch?v=eG4pDOD9Plk',
  },
];

class SongService {
  static getSongs() {
    return songs;
  }

  static getSong(songid) {
    const currentSong = songs.find(song => song.id === songid);

    if (!currentSong) {
      throw new Error(`Song not found with id: "${songid}"`);
    }

    return currentSong;
  }
}

module.exports = SongService;
