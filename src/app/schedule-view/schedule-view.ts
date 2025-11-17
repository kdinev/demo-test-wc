import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcCalendarComponent);

@customElement('app-schedule-view')
export default class ScheduleView extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .event-calendar {
      width: max-content;
      height: max-content;
      min-width: max-content;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      width: 740px;
      min-width: 50px;
      min-height: 50px;
      max-width: 740px;
    }
    .day-1-schedule {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .day-1-registration {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 8px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
  `;

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <h3 class="content">
        Event Schedule
      </h3>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <div class="column-layout day-1-schedule">
            <h4 class="content">
              November 17, 2024
            </h4>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                8:00 - 9:00
              </p>
              <p class="typography__body-1 content">
                Registration &amp; Welcome Coffee
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                9:00 - 10:00
              </p>
              <p class="typography__body-1 content">
                Keynote: The Future of AI in Software Development
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                10:00 - 10:30
              </p>
              <p class="typography__body-1 content">
                Coffee Break
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                10:30 - 12:00
              </p>
              <p class="typography__body-1 content">
                Panel Discussion: Low-Code/No-Code Platforms
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                12:00 - 13:00
              </p>
              <p class="typography__body-1 content">
                Lunch Break
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                13:00 - 14:30
              </p>
              <p class="typography__body-1 content">
                Workshop: Modern Web Frameworks
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                14:30 - 15:00
              </p>
              <p class="typography__body-1 content">
                Coffee Break
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                15:00 - 17:00
              </p>
              <p class="typography__body-1 content">
                Advanced Machine Learning Techniques
              </p>
            </div>
          </div>
          <div class="column-layout day-1-schedule">
            <h4 class="content">
              November 18, 2024
            </h4>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                9:00 - 10:00
              </p>
              <p class="typography__body-1 content">
                Serverless Architectures and Cloud Native Development
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                10:00 - 10:30
              </p>
              <p class="typography__body-1 content">
                Coffee Break
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                10:30 - 12:00
              </p>
              <p class="typography__body-1 content">
                DevOps Best Practices
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                12:00 - 13:00
              </p>
              <p class="typography__body-1 content">
                Lunch Break
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                13:00 - 14:30
              </p>
              <p class="typography__body-1 content">
                Data Science with Python
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                14:30 - 15:00
              </p>
              <p class="typography__body-1 content">
                Coffee Break
              </p>
            </div>
            <div class="row-layout day-1-registration">
              <p class="typography__subtitle-2 content">
                15:00 - 17:00
              </p>
              <p class="typography__body-1 content">
                Closing Keynote: Ethical AI Development
              </p>
            </div>
          </div>
        </div>
        <igc-calendar value=${new Date('11/17/2024 00:00:00')} visible-months=${2} ?hide-header=${false} header-orientation="horizontal" class="event-calendar"></igc-calendar>
      </div>
    `;
  }
}
