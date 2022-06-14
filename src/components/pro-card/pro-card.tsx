import * as React from 'react';
import { createElement } from 'react';
import { Card, Button, Icon } from '@alifd/next';
import type { CardProps } from '@alifd/next/types/card';
import './index.scss';

const { Header, Content } = Card;

export interface ProCardProps extends CardProps {
  color: string;
}

const ProCard: React.ForwardRefRenderFunction<React.Component, ProCardProps> = (props) => {
  const [collapse, setCollapse] = React.useState(false);
  const { children, title, color = '#5584FF' } = props;

  const extra = () => {
    return (
      <Button text type="primary" onClick={() => setCollapse(!collapse)}>
        {collapse ? '展开' : '收起'}
        <Icon type={collapse ? 'arrow-down' : 'arrow-up'} />
      </Button>
    );
  };

  const renderTitle = () => {
    return (
      <div className="title-container" style={{ color }}>
        <div className="divider" style={{ backgroundColor: color }}></div>
        <div>{title}</div>
      </div>
    );
  };

  return (
    <Card free hasBorder={false}>
      <Header title={renderTitle()} extra={extra()} />
      <Content
        style={{
          display: collapse ? 'none' : 'block',
        }}
      >
        {children}
      </Content>
    </Card>
  );
};

export default ProCard;
