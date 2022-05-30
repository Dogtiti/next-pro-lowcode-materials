import * as React from 'react';
import { createElement, cloneElement } from 'react';
import { Form, ResponsiveGrid, Input } from '@alifd/next';
import type { FormProps } from '@alifd/next/types/form';
import type { ResponsiveGridProps } from '@alifd/next/types/responsive-grid';
export type ProFormProps = FormProps &
  ResponsiveGridProps & { spacing: number | number[]; emptyContent: string };

const ProForm: React.ForwardRefRenderFunction<React.Component, ProFormProps> = (props, ref) => {
  const { children, columns, spacing = [0, 16, 16, 0], emptyContent, ...otherProps } = props;

  return (
    <Form {...otherProps} ref={ref}>
      <ResponsiveGrid gap={spacing} columns={columns}>
        {children ? (
          formatFormItems(children, { ...otherProps })
        ) : (
          <div className="empty-content">{emptyContent}</div>
        )}
      </ResponsiveGrid>
    </Form>
  );
};
const ProFormRef = React.forwardRef(ProForm);

export default ProFormRef;

export const formatFormItems = (children, props: any = {}) => {
  const { status, labelAlign, labelCol, wrapperCol, labelTextAlign } = props;
  const _children = children.filter(
    (child) => child && ['function', 'object'].indexOf(typeof child) > -1,
  );

  return React.Children.map(_children, (child) => {
    if (child && ['function', 'object'].indexOf(typeof child) > -1) {
      const childrenProps = {
        labelCol: child.props?.labelCol ?? labelCol,
        labelAlign: child.props?.labelAlign ?? labelAlign,
        wrapperCol: child.props?.wrapperCol ?? wrapperCol,
        labelTextAlign: child.props?.labelTextAlign ?? labelTextAlign,
        status,
      };
      const { formItemProps = {} } = child.props;
      const formItemColumn = formItemProps.columnSpan;
      const columnSpan = formItemColumn ?? 1;

      return createElement(
        ResponsiveGrid.Cell,
        { colSpan: columnSpan },
        cloneElement(child, {
          formItemProps: Object.assign({}, pickDefined(childrenProps), formItemProps),
        }),
      );
    }

    return child;
  });
};

const pickDefined = (obj = {}) => {
  const newObj = {};
  Object.keys(obj).forEach((i) => {
    if (typeof obj[i] !== 'undefined') {
      newObj[i] = obj[i];
    }
  });
  return newObj;
};
