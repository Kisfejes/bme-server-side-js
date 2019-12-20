const { expect } = require('chai');

const { SessionService } = require('../src/services');

describe('session-remove-song', () => {
  it('should remove song', async () => {
    const songid = '1';
    const sessionid = '1';
    const originalSongsLength = (await SessionService.getSession(sessionid)).songs.length;

    // remove song
    await SessionService.removeSong(sessionid, songid);

    const { songs } = await SessionService.getSession(sessionid);
    expect(songs.length, 'Songs count').to.be.equal(originalSongsLength - 1);
  });

  it('should not remove not existing song', async () => {
    const songid = 'not_existing_songid';
    const sessionid = '1';
    const originalSongsLength = (await SessionService.getSession(sessionid)).songs.length;

    // remove song
    await SessionService.removeSong(sessionid, songid);

    const { songs } = await SessionService.getSession(sessionid);
    expect(songs.length, 'Songs count').to.be.equal(originalSongsLength);
  });
});
