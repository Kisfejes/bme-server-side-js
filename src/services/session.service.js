// eslint-disable-next-line prefer-const
let sessions = [
  {
    id: 1,
    name: 'Practice for Christmas concert',
    date: 1570896000,
    location: 'Supercharge Office',
    currentSongs: [
      {
        artist: 'Simon & Garfunkel',
        title: 'El Condor Pasa',
      },
      {
        artist: 'Simon & Garfunkel',
        title: 'The Boxer',
      },
    ],
    availableSongs: [
      {
        artist: 'Stone Sour',
        title: 'Wicked Game',
      },
      {
        artist: 'Stone Sour',
        title: 'Song #3',
      },
    ],
    participants: [
      {
        name: 'Foo Bela',
      },
      {
        name: 'Kiss Istvan',
      },
    ],
  },
  {
    id: 2,
    name: 'Practice with Viki',
    date: 1573585200,
    location: 'Supercharge Office',
    currentSongs: [
      {
        artist: 'Simon & Garfunkel',
        title: 'El Condor Pasa',
      },
    ],
    availableSongs: [],
    participants: [
      {
        name: 'Foo Bela',
      },
    ],
  },
];

class SessionService {
  static getSessions() {
    return sessions;
  }

  static getSession(sessionid) {
    const currentSession = sessions.find(session => session.id === sessionid);

    if (!currentSession) {
      throw new Error(`Session not found with id: "${sessionid}"`);
    }

    return currentSession;
  }

  static deleteSession(sessionid) {
    const currentSessionIndex = sessions.findIndex(session => session.id === sessionid);

    if (currentSessionIndex === -1) {
      throw new Error(`Session not found with id: "${sessionid}"`);
    }

    sessions.splice(currentSessionIndex, 1);
  }
}

module.exports = SessionService;
