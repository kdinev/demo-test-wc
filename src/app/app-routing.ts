import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './schedule-view/schedule-view';
import './speaker-proposals-view/speaker-proposals-view';
import './register-view/register-view';
import './feedback-view/feedback-view';

export const routes: Route[] = [
  { path: 'feedback-view', component: 'app-feedback-view', name: 'Feedback View' },
  { path: 'register-view', component: 'app-register-view', name: 'Register View' },
  { path: 'speaker-proposals-view', component: 'app-speaker-proposals-view', name: 'Speaker Proposals View' },
  { path: 'schedule-view', component: 'app-schedule-view', name: 'Schedule View' },
  { path: '', component: 'app-schedule-view', name: 'Schedule View' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
