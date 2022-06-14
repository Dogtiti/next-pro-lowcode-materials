import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { nanoid } from 'nanoid';

const SectionFormMeta: ComponentMetadata = {
  group: '精选组件',
  category: '高级表单(next)',
  componentName: 'SectionForm',
  title: '区块表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@dogtiti/next-pro-lowcode-materials',
    version: '{{version}}',
    exportName: 'SectionForm',
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
        childWhitelist: ['ChildForm'],
      },
    },
    props: [
      {
        name: 'globalConfig',
        title: '全局配置',
        type: 'group',
        display: 'accordion',
        items: [
          {
            name: 'field',
            title: {
              label: {
                type: 'i18n',
                zh_CN: 'Field 实例',
                en_US: 'Field',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: field | 说明: 传入 Field 实例',
                en_US: 'prop: field | description: field instance',
              },
              docUrl:
                'https://fusion.alibaba-inc.com/pc/component/basic/form#%E5%A4%8D%E6%9D%82%E5%8A%9F%E8%83%BD(Field)',
            },
            setter: {
              componentName: 'ExpressionSetter',
            },
          },
          {
            name: 'color',
            title: '标题颜色',
            setter: 'ColorSetter',
            defaultValue: '#5584FF',
          },
        ],
      },
      {
        name: '!items',
        title: '区块设置',
        display: 'accordion',
        extraProps: {
          getValue(target: any) {
            const nodes = target?.node?.children?.map((child: any = {}) => {
              const cardProps = child.getPropValue('cardProps');
              cardProps.primaryKey = cardProps.primaryKey || nanoid();
              return {
                ...cardProps,
              };
            });
            return nodes;
          },
          setValue(target: any, value) {
            const { node } = target;
            const map = {};
            if (!Array.isArray(value)) {
              value = [];
            }
            value.forEach((item: any = {}) => {
              const { primaryKey } = item;
              map[primaryKey] = item;
            });

            node.children.mergeChildren(
              (child) => {
                const targetKey = child.getPropValue('cardProps').primaryKey;
                if (map?.[targetKey]) {
                  const { ...cardProps } = map[targetKey];
                  child.setPropValue('cardProps', cardProps);
                  delete map[targetKey];
                  return false;
                }
                return true;
              },
              () => {
                const items: any = [];
                for (const key in map) {
                  if (Object.hasOwnProperty.call(map, key)) {
                    const { componentName, ...cardProps } = map[key] || {};
                    items.push({
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
                        cardProps,
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
                    });
                  }
                }
                return items;
              },
              (firstChild, secondeChild) => {
                const first = value.findIndex(
                  (item) => item.primaryKey === firstChild.getPropValue('cardProps').primaryKey,
                );
                const seconde = value.findIndex(
                  (item) => item.primaryKey === secondeChild.getPropValue('cardProps').primaryKey,
                );
                return first - seconde;
              },
            );
          },
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              initialValue: () => {
                return {
                  title: '区块',
                  primaryKey: nanoid(),
                };
              },
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: '区块名称',
                      display: 'inline',
                      defaultValue: '区块',
                      important: true,
                      setter: 'StringSetter',
                    },
                    {
                      name: 'primaryKey',
                      title: '编号',
                      condition: () => false,
                      setter: 'StringSetter',
                      defaultValue: () => nanoid(),
                    },
                  ],
                },
              },
            },
          },
        },
      },
      {
        name: 'operations',
        display: 'block',
        title: '操作项',
        getValue: (target, value) => {
          return value || [];
        },
        setter: {
          componentName: 'MixedSetter',
          props: {
            setters: [
              {
                componentName: 'SlotSetter',
                defaultValue: {
                  type: 'JSSlot',
                  value: [],
                },
              },
              {
                componentName: 'ArraySetter',
                props: {
                  itemSetter: {
                    componentName: 'ObjectSetter',
                    initialValue: () => {
                      return {
                        content: '提交',
                        type: 'normal',
                      };
                    },
                    props: {
                      config: {
                        items: [
                          {
                            name: 'id',
                            condition: () => false,
                            getValue: () => {
                              return nanoid();
                            },
                          },
                          {
                            name: 'content',
                            display: 'inline',
                            title: '文本',
                            setter: 'StringSetter',
                            important: true,
                          },
                          {
                            name: 'type',
                            display: 'inline',
                            title: '样式',
                            important: true,
                            setter: {
                              componentName: 'SelectSetter',
                              props: {
                                options: [
                                  {
                                    title: '主要',
                                    value: 'primary',
                                  },
                                  {
                                    title: '次要',
                                    value: 'secondary',
                                  },
                                  {
                                    title: '普通',
                                    value: 'normal',
                                  },
                                ],
                              },
                            },
                          },
                          {
                            name: 'onClick',
                            display: 'inline',
                            title: '点击事件',
                            setter: 'FunctionSetter',
                            extraProps: {
                              supportVariable: true,
                            },
                          },
                        ],
                      },
                    },
                  },
                },
              },
              'VariableSetter',
            ],
          },
        },
      },
    ],
    supports: {
      style: true,
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '区块表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN016gn5DQ1FeXUNKdK22_!!6000000000512-55-tps-50-36.svg',
    schema: {
      componentName: 'SectionForm',
      props: {},
      children: [
        {
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
            cardProps: {
              title: '区块一',
              primaryKey: nanoid(),
            },
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
      ],
    },
  },
];

export default {
  ...SectionFormMeta,
  snippets,
};
