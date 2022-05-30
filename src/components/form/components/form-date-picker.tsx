import * as React from 'react';
import { createElement } from 'react';
import { DatePicker2 } from '@alifd/next';
import type { DatePickerProps } from '@alifd/next/types/date-picker2';
import wrapper from './next-wrapper';

export type ProFormDatePickerProps = DatePickerProps;

const ProFormDatePicker = wrapper<ProFormDatePickerProps>(DatePicker2, 'ProFormDatePicker');

export default ProFormDatePicker;
