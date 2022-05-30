import * as React from 'react';
import { createElement } from 'react';
import { NumberPicker } from '@alifd/next';
import type { NumberPickerProps } from '@alifd/next/types/number-picker';
import wrapper from './next-wrapper';

export type ProFormNumberInputProps = NumberPickerProps;

const ProFormNumberInput = wrapper<ProFormNumberInputProps>(NumberPicker, 'ProFormNumberInput');

export default ProFormNumberInput;
