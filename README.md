# DappLooker Visualizer SDK

<h1 align="center">
    <picture>
        <source media="(prefers-color-scheme: light)" srcset="https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/DLLogo1800x400.png">
        <source media="(prefers-color-scheme: dark)" srcset="https://d2yxqfr8upg55w.cloudfront.net/assets/img/DL_LOGO_dark_theme.png">
        <img width='60%' height='60%' src="https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/DLLogo1800x400.png" alt="DL logo">
    </picture>
</h1>

<p align="center">
  <i align="center" style="font-size:0.9em;" >Get free blockchain analytics for Smart Contract, Subgraph, Defi, NFT, and Gaming dApps. Analyze and query on-chain and off-chain web3 data from Ethereum, Polygon, TheGraph, Celo, Polkadot, NEAR with our no-code dashboard..🚀</i>
</p>

<h4 align="center">

  <a href="https://discord.com/invite/dapplooker">
    <img src="https://d2yxqfr8upg55w.cloudfront.net/assets/img/DL_background.png">
  </a>
  </a>
</h4>

<h1>Introduction</h1>

<h3> What is DappLooker?</h3>
<p style="font-size:1em;">
DappLooker is a no-code multi-chain community-driven analytics and visualization platform for blockchain networks and Dapps. Users can run Visual SQL queries on blockchain data, using easy to use simple editor. Charts and dashboards can be forked, edited, and shared with the community.

DappLooker aims to empower everyone to easily understand blockchain data, do analytics and easily build beautiful charts and dashboards. You can build and share key metrics for Defi, NFT, gaming, and multi-chain protocols.

</p>

### What We Do ?

DappLooker is a Web3 analytics platform that is dedicated to making blockchain analytics accessible and simplified for everyone. Our goal is to provide a seamless and user-friendly experience With our intuitive, no-code platform, you can effortlessly analyze blockchain networks and Dapps. Our No-code interface allows you to create stunning charts and dashboards, enabling you to visualize and understand complex blockchain data without the need for coding skills.

<p style="font-weight:600;">Welcome to the GitHub profile for DappLooker</p>

📚 Read our comprehensive [documentation](https://docs.dapplooker.com) to learn how to start building with DappLooker.

# DappLooker Visualizer Components

The dapplooker visualizer compoenets provides developers with programmatic access and visualize to reliable and comprehensive blockchain data in the Web3 environment. By integrating the DappLooker Visualizer Compoenets, you can easily retrieve popular charts table for your decentralized applications (Dapps).

> #### Node version: >=14

## Installation

To start using the DappLooker Visulaizer Components, follow these steps:

#### 1. Install the package:

```bash
npm install dapplooker-visualizer-sdk
```

#### 2. Import the package

Once you have installed our package, import it into your project. With the imported package, use it as a component and pass the JSON response as a attribute or props with the component. You can get the JSON reponse by making Chart API calls from our the [Dapplooker SDK](https://github.com/dapplooker/dapplooker-sdk)

### Example (ReactJS)

Here's an example of ReactJS project of how you can use our Visualizer component just like a normal React component:

```jsx
//App.tsx (Typescript)
import {useEffect, useState} from 'react';
import './App.css';
import {DappLookerChartsAPI} from 'dapplooker-sdk';
import {DLTableReactElement} from 'dapplooker-ui-sdk';

function App() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    //Make Chart API Call
    getAPIData();
  }, []);

  const getAPIData = async () => {
    try {
      let chartId = 'ENTER_CHART_UUID'; //Replace Chart UUID Here
      let key = 'ENTER_API_KEY'; //Your API Key Here
      let response = await DappLookerChartsAPI.getChartData(
        chartId,
        key,
        'json'
      );
      setChartData(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <DLTableReactElement data={chartData}></DLTableReactElement>
      </div>
    </>
  );
}

export default App;
```

### Example (Angular)

Here's an example of a Angular project of how you can use our Visualizer component just like a normal Angular component:

- Import our package in `app.module.ts` file
- Import `CUSTOM_ELEMENTS_SCHEMA` from `@angular/core` in schemas which enables external components to use in your package.

```jsx
//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'dapplooker-visualizer-sdk';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- Add the component just like a normal angular component, and pass the JSON data as an attribute.
```html
//app.component.html
<chart-table [data]="chartData">
</chart-table>
```

#### 3. Output

Here's the output of the DappLooker's Visualizer Component
![ChartTableComponent.png](https://d2yxqfr8upg55w.cloudfront.net/npm-package-images/chart-table-component.png)

By integrating the dapplooker visualizer components into your Dapp, you can easily access chart API data in form of tables and utilize the most reliable and comprehensive blockchain data in the Web3 environment. Start exploring the possibilities and enhancing your decentralized applications with DappLooker Visualizer Components today!

## Resources

- **[Website](https://dapplooker.com/)** To checkout our Product.
- **[Docs](https://docs.dapplooker.com)** For comprehensive documentation.
- **[Medium](https://dapplooker.medium.com/)** To learn more about our partners, new launches, etc.
- **[GitHub](https://github.com/dapplooker/)** for source code, project board, issues, and pull requests.
- **[Youtube](https://www.youtube.com/channel/UC1KJmtb3UhnWSN_sDv71_fg)** Subscribe to our YouTube channel for video tutorials, demos, and informative content.

## Contributing

We invite you to become a valued member of the DappLooker community, an open-source project committed to transparency in our development process. We appreciate any contributions you can make, whether it's helping us identify and fix bugs, suggesting new features, improving our documentation, or spreading the word about DappLooker.

If you come across any errors or issues while using DappLooker, please take a moment to create a bug report. Your feedback is invaluable in improving the reliability. We also value the importance of comprehensive documentation. If you find any gaps or areas that need improvement in our documentation, please don't hesitate, Your suggestions will enable us to provide better resources for our users.

If you're unsure where to begin or need assistance, we invite you to join our Discord community. We'll be more than happy to help you get started on your journey with DappLooker.

## Social Links

Follow us to stay updated with the latest news and updates!

<a href="https://dapplooker.com/community" target="_blank">Discord</a> |
<a href="https://twitter.com/dapplooker" target="_blank">Twitter</a> |
<a href="https://t.me/dapplooker" target="_blank">Telegram</a> |
<a href="https://www.linkedin.com/company/dapplooker/" target="_blank">Linkedin</a>
