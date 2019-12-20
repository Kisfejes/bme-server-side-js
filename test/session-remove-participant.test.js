const { expect } = require('chai');

const { SessionService } = require('../src/services');

describe('session-remove-participant', () => {
  it('should remove participant', async () => {
    const userid = '1';
    const sessionid = '1';
    const originalParticipantsLength = (await SessionService.getSession(sessionid)).participants
      .length;

    // remove participant
    await SessionService.removeParticipant(sessionid, userid);

    const { participants } = await SessionService.getSession(sessionid);
    expect(participants.length, 'Participants count').to.be.equal(originalParticipantsLength - 1);
  });

  it('should not remove participant when its not in the list', async () => {
    const userid = 'not existing id';
    const sessionid = '1';
    const originalParticipantsLength = (await SessionService.getSession(sessionid)).participants
      .length;

    // remove participant
    await SessionService.removeParticipant(sessionid, userid);

    const { participants } = await SessionService.getSession(sessionid);
    expect(participants.length, 'Participants count').to.be.equal(originalParticipantsLength);
  });
});
