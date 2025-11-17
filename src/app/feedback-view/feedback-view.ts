import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcInputComponent, IgcRatingComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcInputComponent, IgcRatingComponent, IgcTextareaComponent, IgcButtonComponent);

@customElement('app-feedback-view')
export default class FeedbackView extends LitElement {
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
    .row-layout {
      display: flex;
    }
    .feedback-forms-layout {
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: flex-start;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .speaker-feedback-column {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .speaker-feedback-form {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-shrink: 0;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .speaker-overall-rating {
      width: max-content;
      height: max-content;
    }
    .submit-speaker-feedback {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
  `;

  @state()
  private value?: string;

  @state()
  private value1?: string;

  @state()
  private value2?: string;

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <h3 class="content">
        Event Feedback
      </h3>
      <div class="row-layout feedback-forms-layout">
        <div class="column-layout speaker-feedback-column">
          <h4 class="content">
            Speaker Feedback
          </h4>
          <form class="column-layout speaker-feedback-form">
            <igc-input value=${ifDefined(this.value)} label="Your Name (Optional)" ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="user-input"></igc-input>
            <igc-input value=${ifDefined(this.value1)} label="Presentation Title/Speaker Name" required=${true} ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value1 = e.detail} class="user-input">
              <p slot="value-missing">This field is required</p>
            </igc-input>
            <igc-rating class="speaker-overall-rating"></igc-rating>
            <igc-textarea label="Comments" ?outlined=${false} class="user-input"></igc-textarea>
            <igc-button type="button" class="submit-speaker-feedback">
              Submit Feedback
            </igc-button>
          </form>
        </div>
        <div class="column-layout speaker-feedback-column">
          <h4 class="content">
            Attendee Feedback
          </h4>
          <form class="column-layout speaker-feedback-form">
            <igc-input value=${ifDefined(this.value2)} label="Your Name (Optional)" ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value2 = e.detail} class="user-input"></igc-input>
            <igc-rating class="speaker-overall-rating"></igc-rating>
            <igc-textarea label="General Comments" ?outlined=${false} class="user-input"></igc-textarea>
            <igc-button type="button" class="submit-speaker-feedback">
              Submit Feedback
            </igc-button>
          </form>
        </div>
      </div>
    `;
  }
}
