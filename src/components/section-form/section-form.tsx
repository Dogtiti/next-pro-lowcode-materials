import * as React from 'react';
import { createElement, cloneElement } from 'react';
import { Form, Card, Button } from '@alifd/next';
import type { FormProps } from '@alifd/next/types/form';
import type { Operations } from '../form/form';
import ProCard from '../pro-card';

export interface SectionFormProps extends FormProps {
  operations: Operations[];
  isPreview: boolean;
  color: string;
}

const SectionForm: React.ForwardRefRenderFunction<React.Component, SectionFormProps> = (
  props,
  ref,
) => {
  const { children, isPreview, operations = [], color, ...otherProps } = props;
  return (
    <Form {...otherProps} ref={ref}>
      {children ? formatChildForm(children, { color }) : null}
      {isPreview ? null : (
        <div style={{ textAlign: 'center' }}>
          <Button.Group>
            {operations.map(({ id, content, type, onClick }) => {
              return (
                <Button key={id} onClick={onClick} type={type}>
                  {content}
                </Button>
              );
            })}
          </Button.Group>
        </div>
      )}
    </Form>
  );
};

const SectionFormRef = React.forwardRef(SectionForm);

export default SectionFormRef;

const formatChildForm = (children, globalProps) => {
  const { color } = globalProps;
  return React.Children.map(children, (child) => {
    const { props } = child;
    const { cardProps = {} } = props;
    const { primaryKey, ...restProps } = cardProps;
    return (
      <ProCard key={primaryKey} {...restProps} color={color}>
        {child}
      </ProCard>
    );
  });
};
