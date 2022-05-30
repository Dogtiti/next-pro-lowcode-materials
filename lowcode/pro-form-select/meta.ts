import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { formItemProps } from '../shared';

const ProFormSelectMeta: ComponentMetadata = {
  componentName: 'ProFormSelect',
  group: '精选组件',
  category: '高级表单(next)',
  title: '选择器',
  hidden: true,
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@dogtiti/next-pro-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProFormSelect',
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
            name: 'placeholder',
            title: {
              label: '占位提示',
              tip: '属性: placeholder',
            },
            defaultValue: '请选择',
            setter: 'StringSetter',
          },
          {
            name: 'hasClear',
            title: {
              label: '清除按钮',
              tip: '属性: hasClear',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'showSearch',
            title: {
              label: '可搜索',
              tip: '属性: showSearch',
            },
            setter: 'BoolSetter',
            defaultValue: false,
          },
          {
            name: 'dataSource',
            display: 'block',
            title: '选项',
            tip: {
              title: '数据格式',
              url: '',
            },
            setter: {
              componentName: 'MixedSetter',
              props: {
                setters: [
                  {
                    componentName: 'ArraySetter',
                    props: {
                      itemSetter: {
                        componentName: 'ObjectSetter',
                        props: {
                          config: {
                            items: [
                              {
                                name: 'label',
                                title: '标题',
                                setter: 'StringSetter',
                                important: true,
                              },
                              {
                                name: 'value',
                                title: '值',
                                setter: 'StringSetter',
                                important: true,
                              },
                            ],
                          },
                        },
                        initialValue: {
                          title: 'Title',
                        },
                      },
                    },
                  },
                  'ExpressionSetter',
                ],
              },
            },
          },
          {
            name: 'mode',
            title: {
              label: '模式',
              tip: '属性: mode',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                defaultValue: 'single',
                options: [
                  {
                    value: 'single',
                    title: '单选',
                  },
                  {
                    value: 'multiple',
                    title: '多选',
                  },
                  {
                    value: 'tag',
                    title: '标签',
                  },
                ],
              },
            },
          },
          {
            type: 'group',
            title: '其他配置',
            display: 'block',
            items: [
              {
                name: 'notFoundContent',
                title: {
                  label: '空文案',
                  tip: 'notFoundContent|弹层内容为空的文案',
                },
                setter: 'StringSetter',
              },
              {
                name: 'hasBorder',
                title: {
                  label: '边框',
                  tip: '是否有边框',
                },
                setter: 'BoolSetter',
              },
              {
                name: 'autoWidth',
                title: '下拉等宽',
                setter: 'BoolSetter',
              },
              {
                name: 'hasArrow',
                title: '下拉箭头',
                setter: 'BoolSetter',
                defaultValue: true,
              },
            ],
          },
        ],
      },
    ],
    supports: {
      style: true,
      events: [
        {
          name: 'onChange',
          propType: 'func',
          description: '值发生变化',
        },
        {
          name: 'onVisibleChange',
          propType: 'func',
          description: '弹层显示隐藏变化',
        },
        {
          name: 'onRemove',
          propType: 'func',
          description: 'Tag 被删除',
        },
        {
          name: 'onSearch',
          propType: 'func',
          description: '搜索',
        },
      ],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '选择器',
    screenshot: '',
    schema: {
      componentName: 'ProFormSelect',
      props: {},
    },
  },
];

export default {
  ...ProFormSelectMeta,
  snippets,
};
