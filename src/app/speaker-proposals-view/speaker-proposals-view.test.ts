import { describe, it, expect } from 'vitest';
import SpeakerProposalsView from './speaker-proposals-view.js';

describe('SpeakerProposalsView', () => {
  it('<app-speaker-proposals-view> is an instance of SpeakerProposalsView', async () => {
    const element = document.createElement('app-speaker-proposals-view');
    expect(element).to.be.instanceOf(SpeakerProposalsView);
  });
});
