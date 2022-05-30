import { createElement } from 'react';
import FormItem from './form-item';

const wrapper = function wrapper<T>(NextFormComponent, displayName) {
  const WrappedComponent = (props: any = {}) => {
    const { formItemProps = {}, ...componentProps } = props;
    return createElement(
      FormItem,
      formItemProps,
      createElement<T>(NextFormComponent, componentProps),
    );
  };
  WrappedComponent.displayName = displayName;
  return WrappedComponent;
};

export default wrapper;
