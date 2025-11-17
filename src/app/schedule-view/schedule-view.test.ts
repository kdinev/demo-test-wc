import { describe, it, expect } from 'vitest';
import ScheduleView from './schedule-view.js';

describe('ScheduleView', () => {
  it('<app-schedule-view> is an instance of ScheduleView', async () => {
    const element = document.createElement('app-schedule-view');
    expect(element).to.be.instanceOf(ScheduleView);
  });
});
