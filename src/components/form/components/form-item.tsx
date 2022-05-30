import * as React from 'react';
import { createElement } from 'react';
import { Form } from '@alifd/next';
import type { ItemProps } from '@alifd/next/types/form';

const { Item } = Form;

const ProFormItem: React.ForwardRefRenderFunction<React.Component, ItemProps> = (props, ref) => {
  const { children = [], ...otherProps } = props;

  return createElement(
    Item,
    { ...otherProps },
    React.Children.map(children, (child: any) => {
      if (!child) {
        return null;
      }
      const { props: _props = {} } = child;
      const { defaultValue, value, ...restProps } = _props;
      const { __designMode } = restProps;
      const finalValue = __designMode === 'design' ? defaultValue : value;
      if (finalValue) {
        restProps.value = finalValue;
      }
      return React.cloneElement(child, { ..._props, ...restProps });
    }),
  );
};

const ProFormItemRef = React.forwardRef(ProFormItem);

ProFormItemRef.displayName = 'ProFormItem';

export default ProFormItemRef;
