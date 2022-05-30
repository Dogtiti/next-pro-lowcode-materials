import * as React from 'react';
import { createElement } from 'react';
import { Input } from '@alifd/next';
import type { InputProps } from '@alifd/next/types/input';
import wrapper from './next-wrapper';

export type ProFormInputProps = InputProps;

const ProFormInput = wrapper<ProFormInputProps>(Input, 'ProFormInput');

export default ProFormInput;
