import { html, css, LitElement, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import { routes } from './app-routing.js';
import { defineComponents, IgcIconButtonComponent, IgcIconComponent, IgcNavbarComponent, IgcNavDrawerComponent } from 'igniteui-webcomponents';
import baseStyles from '/src/app/base-view-styles.css?inline';

defineComponents(IgcNavbarComponent, IgcIconButtonComponent, IgcIconComponent, IgcNavDrawerComponent);

@customElement('app-root')
export default class App extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
    }
    .app-navigation-bar {
      height: max-content;
      min-width: min-content;
    }
    .app-navigation-drawer {
      min-width: min-content;
      min-height: 0;
      max-width: 320px;
      flex-shrink: 0;
    }
    .app-view-container {
      overflow: auto;
      display: block;
      position: relative;
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
    }
    .app-navigation-drawer::part(base) {
      width: 320px;
    }
    .h6 {
      margin: 0;
      flex-shrink: 0;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 1rem;
      overflow: hidden;
    }
    .content-layout {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
  `;

  @query('#app-navigation-drawer')
  private appNavigationDrawer?: IgcNavDrawerComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <style>${unsafeCSS(baseStyles)}</style>
      <igc-navbar class="app-navigation-bar">
        <igc-icon-button variant="flat" slot="start" @click=${() => this.appNavigationDrawer?.toggle()}>
          <span class="material-icons">
            menu
          </span>
        </igc-icon-button>
        <div class="row-layout group">
          <h6 class="h6">
            Tech Event
          </h6>
        </div>
      </igc-navbar>
      <div class="row-layout content-layout">
        <igc-nav-drawer ?open=${true} position="relative" id="app-navigation-drawer" class="app-navigation-drawer">
          <igc-nav-drawer-item @click=${() => Router.go(`/schedule-view`)}>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
            </span>
            <div slot="content">Schedule</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click=${() => Router.go(`/speaker-proposals-view`)}>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
            </span>
            <div slot="content">Speaker Proposals</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click=${() => Router.go(`/register-view`)}>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
            </span>
            <div slot="content">Register to Attend</div>
          </igc-nav-drawer-item>
          <igc-nav-drawer-item @click=${() => Router.go(`/feedback-view`)}>
            <span slot="icon">
              <span class="material-icons icon">
                account_circle
              </span>
            </span>
            <div slot="content">Feedback</div>
          </igc-nav-drawer-item>
        </igc-nav-drawer>
        <router-outlet class="app-view-container"></router-outlet>
      </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot?.querySelector('router-outlet');
    const router = new Router(outlet);
    router.setRoutes(routes);
  }
}
