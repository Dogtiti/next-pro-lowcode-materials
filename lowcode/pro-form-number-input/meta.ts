import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { formItemProps } from '../shared';

const ProFormNumberInputMeta: ComponentMetadata = {
  componentName: 'ProFormNumberInput',
  group: '精选组件',
  category: '高级表单(next)',
  title: '数字输入框',
  hidden: true,
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@dogtiti/next-pro-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProFormNumberInput',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      formItemProps,
      {
        name: 'componentProps',
        title: '组件配置',
        extraProps: {
          display: 'accordion',
          defaultCollapsed: true,
        },
        type: 'group',
        items: [
          {
            name: 'alwaysShowTrigger',
            title: '展示操作',
            setter: 'BoolSetter',
            defaultValue: true,
          },
          {
            name: 'value',
            title: '当前值',
            setter: ['NumberSetter', 'ExpressionSetter'],
          },
          {
            name: 'defaultValue',
            title: '默认值',
            setter: ['NumberSetter', 'ExpressionSetter'],
          },
          {
            name: 'size',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '尺寸',
                en_US: 'Size',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: size | 说明: 尺寸\n@enumdesc 小, 中, 大',
                en_US: 'prop: size | description: size',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['small', 'medium', 'large'],
              },
            },
            defaultValue: 'medium',
          },
          {
            name: 'type',
            title: '类型',
            defaultValue: 'normal',
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'RadioGroupSetter',
                    props: {
                      options: [
                        {
                          title: '普通',
                          value: 'normal',
                        },
                        {
                          title: '内联',
                          value: 'inline',
                        },
                      ],
                    },
                  },
                  'ExpressionSetter',
                ],
              },
            },
          },
          {
            name: 'innerAfter',
            title: '单位',
            setter: ['StringSetter', 'ExpressionSetter'],
          },
          {
            name: 'step',
            title: '步长',
            defaultValue: 1,
            setter: ['NumberSetter', 'ExpressionSetter'],
          },
          {
            name: 'precision',
            title: '小数位数',
            defaultValue: 0,
            setter: ['NumberSetter', 'ExpressionSetter'],
          },
          {
            name: 'max',
            title: '最大值',
            setter: ['NumberSetter', 'ExpressionSetter'],
          },
          {
            name: 'min',
            title: '最小值',
            setter: ['NumberSetter', 'ExpressionSetter'],
          },
          {
            name: 'editable',
            title: '可以输入',
            defaultValue: true,
            setter: ['BoolSetter', 'ExpressionSetter'],
          },
          {
            name: 'format',
            title: '格式化',
            display: 'block',
            setter: {
              componentName: 'FunctionSetter',
            },
          },
          {
            name: 'style',
            setter: {
              componentName: 'StyleSetter',
            },
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: ['onPressEnter', 'onClear', 'onChange', 'onKeyDown', 'onFocus', 'onBlur'],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '数字输入框',
    screenshot: '',
    schema: {
      componentName: 'ProFormNumberInput',
      props: {},
    },
  },
];

export default {
  ...ProFormNumberInputMeta,
  snippets,
};
