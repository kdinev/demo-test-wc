import { describe, it, expect } from 'vitest';
import FeedbackView from './feedback-view.js';

describe('FeedbackView', () => {
  it('<app-feedback-view> is an instance of FeedbackView', async () => {
    const element = document.createElement('app-feedback-view');
    expect(element).to.be.instanceOf(FeedbackView);
  });
});
