import {LitElement, css, html} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import {styles} from './Styles';
import Constants from '../../constants/Constants';

@customElement('chart-table')
export class ChartTable extends LitElement {
  // styles
  static override styles = css`
    ${styles}
  `;

  //Public Props/Attribute
  @property({type: Array})
  data: any = [];

  //Private Attributes
  @state()
  isError: boolean = false;

  @state()
  checkErrorObj: string = Constants.errorObj;

  @state()
  isLoading: boolean = false;

  // This function is called when the component is connected to the DOM.
  override connectedCallback(): void {
    super.connectedCallback();
    const dataAttribute = this.getAttribute('data');
    this.isLoading = true;
    if (dataAttribute) {
      try {
        const newValue = JSON.parse(dataAttribute);
        this.data = newValue;

        this.isError = false;
      } catch (error) {
        this.isError = true;
      }
      this.isLoading = false;
    }
  }

  //Error Handling
  errorHandling = () => {
    if (JSON.stringify(this.data) == this.checkErrorObj) {
      this.isLoading = false;
      this.isError = true;
    } else if (this.data.length > 0) {
      this.isLoading = false;
      this.isError = false;
      this.requestUpdate();
    }
  };

  override render() {
    this.errorHandling();

    return html`
      <div class="header-wrapper">
        <h1 class="header">${Constants.chartTableHeader}</h1>
      </div>
      ${!this.isLoading
        ? html`
            ${this.isError == true
              ? html`
                  <!-- Error Handling -->
                  <div class="error-msg-wrapper">
                    <h1 class="error-msg">${Constants.errorMessage}</h1>
                  </div>
                `
              : html`
                  <!-- Table UX -->
                  <div class="chart-data-table">
                    <!-- Columns Wrapper -->
                    <div class="columns">
                      ${this.isError == false &&
                      Object.keys(this.data[0]).map(
                        (columnName) =>
                          html` <!-- Column -->
                            <div class="column-name-wrapper">
                              <span class="column-name">${columnName}</span>
                            </div>`
                      )}
                    </div>
                    <!-- Rows Wrapper-->
                    <div class="rows">
                      ${this.data.map(
                        (rowItem: any) =>
                          html` <!-- Row Item -->
                            <div class="row-item">
                              ${Object.keys(rowItem).map(
                                (key) =>
                                  html` <div class="row-value-wrapper">
                                    <span class="row-value"
                                      >${rowItem[key]}</span
                                    >
                                  </div>`
                              )}
                            </div>`
                      )}
                    </div>
                  </div>
                `}
          `
        : html`
            <!-- Loader -->
            <div class="loading-wrapper">
              <div class="loading"></div>
            </div>
          `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chart-table': ChartTable;
  }
}
