import { describe, it, expect } from 'vitest';
import RegisterView from './register-view.js';

describe('RegisterView', () => {
  it('<app-register-view> is an instance of RegisterView', async () => {
    const element = document.createElement('app-register-view');
    expect(element).to.be.instanceOf(RegisterView);
  });
});
