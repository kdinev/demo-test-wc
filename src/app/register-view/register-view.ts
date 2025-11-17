import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCheckboxComponent, IgcInputComponent, IgcSelectComponent } from 'igniteui-webcomponents';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcInputComponent, IgcSelectComponent, IgcCheckboxComponent, IgcButtonComponent);

@customElement('app-register-view')
export default class RegisterView extends LitElement {
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
    .register-title {
      height: max-content;
      min-width: min-content;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .registration-form {
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
    .mailing-list {
      width: max-content;
      height: max-content;
    }
    .submit-registration {
      --ig-size: var(--ig-size-medium);
      height: max-content;
    }
  `;

  @state()
  private value?: string;

  @state()
  private value1?: string;

  render() {
    return html`
      <style>${unsafeCSS(baseStyles)}</style>
      <h3 class="register-title">
        Register to Attend the Event
      </h3>
      <form class="column-layout registration-form">
        <igc-input value=${ifDefined(this.value)} label="Your Full Name" required=${true} ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value = e.detail} class="user-input">
          <p slot="value-missing">This field is required</p>
        </igc-input>
        <igc-input type="email" value=${ifDefined(this.value1)} label="Your Email" required=${true} ?outlined=${false} @igcChange=${(e: CustomEvent<string>) => this.value1 = e.detail} class="user-input">
          <p slot="value-missing">This field is required</p>
        </igc-input>
        <igc-select ?outlined=${false} label="Attendance Option" required=${true} class="user-input">
          <igc-select-item value="bothDays">
            Both Days
          </igc-select-item>
          <igc-select-item value="day1Only">
            Day 1 Only
          </igc-select-item>
          <igc-select-item value="day2Only">
            Day 2 Only
          </igc-select-item>
        </igc-select>
        <igc-checkbox .labelPosition=${"after"} class="mailing-list">
          Subscribe to mailing list for updates
        </igc-checkbox>
        <igc-button type="button" class="submit-registration">
          Register Now
        </igc-button>
      </form>
    `;
  }
}
