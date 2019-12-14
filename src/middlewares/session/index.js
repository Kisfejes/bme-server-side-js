const sessionCreate = require('./session-create.mw');
const sessionDelete = require('./session-delete.mw');
const sessionGet = require('./session-get.mw');
const sessionList = require('./session-list.mw');
const sessionUpdate = require('./session-update.mw');
const sessionAddSong = require('./session-add-song.mw');
const sessionRemoveSong = require('./session-remove-song.mw');

module.exports = {
  sessionCreate,
  sessionDelete,
  sessionGet,
  sessionList,
  sessionUpdate,
  sessionAddSong,
  sessionRemoveSong,
};
