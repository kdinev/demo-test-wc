import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcInputComponent, IgcTextareaComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcInputComponent, IgcTextareaComponent, IgcButtonComponent);

@customElement('app-speaker-proposals-view')
export default class SpeakerProposalsView extends LitElement {
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
    .speaker-proposals-title {
      height: max-content;
      min-width: min-content;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .proposal-form {
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
    .submit-proposal {
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
      <h3 class="speaker-proposals-title">
        Submit Speaker Proposal
      </h3>
      <form class="column-layout proposal-form">
        <igc-input value=${ifDefined(this.value)} label="Your Name" required=${true} ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="user-input">
          <p slot="value-missing">This field is required</p>
        </igc-input>
        <igc-input type="email" value=${ifDefined(this.value1)} label="Your Email" required=${true} ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value1 = e.detail} class="user-input">
          <p slot="value-missing">This field is required</p>
        </igc-input>
        <igc-input value=${ifDefined(this.value2)} label="Presentation Title" required=${true} ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value2 = e.detail} class="user-input">
          <p slot="value-missing">This field is required</p>
        </igc-input>
        <igc-textarea label="Abstract (200-300 words)" required=${true} ?outlined=${false} class="user-input"></igc-textarea>
        <igc-textarea label="Short Speaker Bio" required=${true} ?outlined=${false} class="user-input"></igc-textarea>
        <igc-button type="button" class="submit-proposal">
          Submit Proposal
        </igc-button>
      </form>
    `;
  }
}
