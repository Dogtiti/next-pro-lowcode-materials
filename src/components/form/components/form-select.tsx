import * as React from 'react';
import { createElement } from 'react';
import { Select } from '@alifd/next';
import type { SelectProps } from '@alifd/next/types/select';
import wrapper from './next-wrapper';

export type ProFormSelectProps = SelectProps;

const ProFormSelect = wrapper<ProFormSelectProps>(Select, 'ProFormSelect');

export default ProFormSelect;
