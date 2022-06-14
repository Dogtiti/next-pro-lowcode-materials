import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { nanoid } from 'nanoid';
import { formProps } from '../shared';

const props = formProps
  .filter((p) => p.name !== 'operations')
  .map((r) => {
    if (r.name === 'globalConfig') {
      return {
        ...r,
        items: r.items?.filter((item) => item.name !== 'field'),
      };
    }
    return r;
  });

const ChildFormMeta: ComponentMetadata = {
  group: '精选组件',
  category: '高级表单(next)',
  componentName: 'ChildForm',
  title: '子表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  hidden: true,
  npm: {
    package: '@dogtiti/next-pro-lowcode-materials',
    version: '{{version}}',
    exportName: 'ChildForm',
    main: 'src/index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [],
  configure: {
    component: {
      isContainer: true,
      isMinimalRenderUnit: true,
      nestingRule: {
        childWhitelist: /ProForm.*/i,
        parentWhitelist: ['SectionForm', 'ProForm'],
      },
    },
    props,
    supports: {
      style: true,
      events: ['saveField', 'onSubmit', 'onChange'],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '子表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN016gn5DQ1FeXUNKdK22_!!6000000000512-55-tps-50-36.svg',
    schema: {
      componentName: 'ChildForm',
      props: {
        placeholder: '请在右侧面板添加表单项+',
        placeholderStyle: {
          height: '38px',
          color: '#0088FF',
          background: '#d8d8d836',
          border: 0,
          gridArea: 'span 4 / span 4',
        },
        columns: 4,
        labelCol: {
          fixedSpan: 4,
        },
        labelAlign: 'top',
        emptyContent: '添加表单项',
      },
      children: [
        {
          componentName: 'ProFormInput',
          props: {
            formItemProps: {
              primaryKey: nanoid(),
              label: '表单项',
              size: 'medium',
              device: 'desktop',
              fullWidth: true,
            },
            placeholder: '请输入',
          },
        },
        {
          componentName: 'ProFormInput',
          props: {
            formItemProps: {
              primaryKey: nanoid(),
              label: '表单项',
              size: 'medium',
              device: 'desktop',
              fullWidth: true,
            },
            placeholder: '请输入',
          },
        },
      ],
    },
  },
];

export default {
  ...ChildFormMeta,
  snippets,
};
