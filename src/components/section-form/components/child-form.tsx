import * as React from 'react';
import { createElement } from 'react';
import { ResponsiveGrid } from '@alifd/next';
import { formatFormItems } from '../../form/form';
import type { ResponsiveGridProps } from '@alifd/next/types/responsive-grid';

export interface ChildFormProps extends ResponsiveGridProps {
  spacing: number | number[];
  emptyContent: string;
}

const ChildForm: React.ForwardRefRenderFunction<React.Component, ChildFormProps> = (props, ref) => {
  const { children, columns, spacing = [0, 16, 16, 0], emptyContent, ...otherProps } = props;
  return (
    <ResponsiveGrid gap={spacing} columns={columns} ref={ref}>
      {children ? (
        formatFormItems(children, { ...otherProps })
      ) : (
        <div className="empty-content">{emptyContent}</div>
      )}
    </ResponsiveGrid>
  );
};

const ChildFormRef = React.forwardRef(ChildForm);

export default ChildFormRef;
