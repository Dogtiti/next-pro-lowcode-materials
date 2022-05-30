import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { formItemProps } from '../shared';

const ProFormDatePickerMeta: ComponentMetadata = {
  componentName: 'ProFormDatePicker',
  group: '精选组件',
  category: '高级表单(next)',
  title: '日期选择器',
  hidden: true,
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@dogtiti/next-pro-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProFormDatePicker',
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
            name: 'label',
            title: {
              label: '标签',
              tip: 'label|表单项内置标签',
            },
            setter: 'StringSetter',
          },
          {
            name: 'state',
            title: {
              label: '状态',
              tip: 'state|表单项状态',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['success', 'loading', 'error'],
              },
            },
          },
          {
            name: 'placeholder',
            title: {
              label: '占位提示',
              tip: 'placeholder|输入提示',
            },
            setter: 'StringSetter',
          },
          {
            name: 'value',
            title: {
              label: 'value',
              tip: 'value|日期值（受控）',
            },
            setter: 'DateSetter',
          },
          {
            name: 'format',
            title: {
              label: '格式',
              tip: 'format|日期值的格式（用于限定用户输入和展示）',
            },
            setter: 'StringSetter',
            defaultValue: 'YYYY-MM-DD',
          },
          {
            name: 'size',
            title: {
              label: '尺寸',
              tip: 'size|表单项尺寸',
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
            name: 'disabled',
            title: {
              label: '是否禁用',
              tip: 'disabled|是否禁用',
            },
            setter: 'BoolSetter',
          },
          {
            name: 'hasClear',
            title: {
              label: '清除按钮',
              tip: 'hasClear|是否显示清空按钮',
            },
            setter: 'BoolSetter',
            defaultValue: true,
          },
          {
            name: 'followTrigger',
            setter: 'BoolSetter',
            title: '跟随滚动',
          },
          {
            name: 'defaultValue',
            title: {
              label: '默认值',
              tip: 'defaultValue|初始日期值，moment 对象',
            },
            setter: 'DateSetter',
          },
        ],
      },
    ],
    supports: {
      events: ['onChange', 'onOk'],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '选择器',
    screenshot: '',
    schema: {
      componentName: 'ProFormDatePicker',
      props: {},
    },
  },
];

export default {
  ...ProFormDatePickerMeta,
  snippets,
};
