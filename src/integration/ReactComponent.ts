import React from 'react';
import {ChartTable} from '../components/ChartTable/ChartTable';
import {createComponent} from '@lit-labs/react';

export const DLTableReactElement = createComponent({
  tagName: 'chart-table',
  elementClass: ChartTable,
  react: React,
  events: {},
});
