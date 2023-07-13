import {css} from 'lit';

export const styles = css`
  :host {
    font-family: 'Heebo';
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    width: 95%;
    height: 100vh;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #d6d6d6;
  }
  ::-webkit-scrollbar-thumb {
    background: grey;
  }

  .header-wrapper,
  .error-msg-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .header {
    font-size: 20px;
    font-weight: 700;
    color: #4c5773;
  }

  .error-msg {
    font-size: 14px;
    font-weight: 500;
    color: black;
    border: solid 1px red;
    padding: 8px;
  }

  .chart-data-table {
    width: 100%;
    height: fit-content;
    max-height: 85vh;
    overflow: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    border: 1px solid rgb(238, 236, 236);
  }

  .columns {
    background: #fff;
    width: fit-content;
    display: flex;
    border: 1px solid #eeecec;
    padding: 5px 10px;
  }
  .column-name-wrapper {
    min-width: 200px;
    max-width: 200px;
    margin-right: 20px;
    display: flex;
  }
  .column-name-wrapper:last-child {
    margin-right: 0px;
  }
  .column-name {
    width: fit-content;
    min-width: 35px;
    font-size: 14px;
    font-weight: 700;
    border: 1px solid rgba(80, 158, 227, 0.2);
    padding: 4px 6px;
    border-radius: 6px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    color: #509ee3;
  }

  .rows {
    background: #fff;
    width: fit-content;
    height: 100%;
    border-right: 1px solid #eeecec;
    border-left: 1px solid #eeecec;
    padding: 0px 10px;
    overflow: scroll;
    scroll-behavior: smooth;
  }
  .row-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid rgba(238, 236, 236, 0.3);
  }
  .row-value-wrapper {
    display: flex;
    align-items: center;
    min-width: 200px;
    max-width: 200px;
    margin-right: 20px;
  }
  .row-value-wrapper:last-child {
    margin-right: 0px;
  }

  .row-value {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    padding: 4px 0px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    color: black;
    height: 28px;
  }

  .loading-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading {
    display: inline-block;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    border-width: 4px;
    border-style: solid;
    border-color: #509ee3 #eeecec #eeecec;
    border-image: initial;
    border-radius: 16px;
    animation: spin 1.3s cubic-bezier(0.17, 0.67, 0.83, 0.67) infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
