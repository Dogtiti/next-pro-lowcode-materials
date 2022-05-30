import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { createElement } from 'react';
import { nanoid } from 'nanoid';

const ProFormMeta: ComponentMetadata = {
  group: '精选组件',
  category: '高级表单(next)',
  componentName: 'ProForm',
  title: '高级表单',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: '@dogtiti/next-pro-lowcode-materials',
    version: '{{version}}',
    exportName: 'ProForm',
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
            name: 'status',
            virtual: () => true,
            title: '状态',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '只读态',
                    value: 'readonly',
                  },
                  {
                    title: '编辑态',
                    value: 'editable',
                  },
                ],
              },
            },
            defaultValue: 'editable',
          },
          {
            name: 'columns',
            title: '布局',
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '一列',
                    value: 1,
                  },
                  {
                    title: '二列',
                    value: 2,
                  },
                  {
                    title: '三列',
                    value: 3,
                  },
                  {
                    title: '四列',
                    value: 4,
                  },
                ],
              },
            },
          },
          {
            name: 'labelAlign',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '标签位置',
                en_US: 'Label Align',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: labelAlign | 说明: 标签的位置\n@enumdesc 上, 左, 内',
                en_US: 'prop: labelAlign | description: label align',
              },
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '上',
                    value: 'top',
                  },
                  {
                    title: '左',
                    value: 'left',
                  },
                  {
                    title: '内',
                    value: 'inset',
                  },
                ],
              },
            },
            defaultValue: 'top',
          },
          {
            name: 'labelCol.fixedSpan',
            title: '标题宽度',
            condition: (target) => {
              return target.parent.getPropValue('labelAlign') === 'left';
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'labelCol.offset',
            title: '标题偏移',
            condition: (target) => {
              return target.parent.getPropValue('labelAlign') === 'left';
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'wrapperCol.span',
            title: '内容宽度',
            condition: (target) => {
              const labelAlign = target.parent.getPropValue('labelAlign');
              return labelAlign === 'left' || labelAlign === 'inset';
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'wrapperCol.offset',
            title: '内容偏移',
            condition: (target) => {
              const labelAlign = target.parent.getPropValue('labelAlign');
              return labelAlign === 'left' || labelAlign === 'inset';
            },
            setter: {
              componentName: 'NumberSetter',
              props: {
                min: 0,
                max: 24,
              },
            },
          },
          {
            name: 'labelTextAlign',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '标签对齐',
                en_US: 'Text Align',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: labelTextAlign | 说明: 标签的左右对齐方式\n@enumdesc 左, 右',
                en_US: 'prop: labelTextAlign | description: label text align',
              },
            },
            condition: (target) => {
              return target.parent.getPropValue('labelAlign') === 'left';
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['left', 'right'],
              },
            },
            defaultValue: 'right',
          },
        ],
      },
      {
        name: '!items',
        title: '表单项',
        display: 'accordion',
        extraProps: {
          getValue(target: any) {
            const nodes = target?.node?.children?.map((child: any = {}) => {
              const { propsData, componentName } = child;
              const { formItemProps, ...componentProps } = propsData;
              return { componentName, componentProps, ...formItemProps };
            });
            return nodes;
          },
          setValue(target: any, value) {
            const { node } = target;
            const map = {};
            const adderMap = {};
            if (!Array.isArray(value)) {
              value = [];
            }
            value.forEach((item: any = {}) => {
              item.componentName = item.componentName || 'ProFormInput';
              map[item.primaryKey] = item;
              adderMap[item.primaryKey] = item;
            });

            node.children.mergeChildren(
              (child) => {
                const targetKey =
                  child.getPropValue('primaryKey') ||
                  child.getPropValue('formItemProps').primaryKey;
                if (map?.[targetKey]) {
                  const target = map[targetKey];
                  const { componentName, componentProps, ...formItemProps } = target;
                  const props = {
                    formItemProps,
                    ...componentProps,
                  };
                  node.replaceChild(child, {
                    componentName,
                    props,
                  });
                  delete adderMap[targetKey];
                  return false;
                }
                return true;
              },
              () => {
                const items = [];
                for (const key in adderMap) {
                  if (Object.hasOwnProperty.call(adderMap, key)) {
                    const { componentName, componentProps, ...formItemProps } = adderMap[key] || {};
                    const props = { componentProps, formItemProps };
                    items.push({
                      componentName,
                      props,
                    });
                  }
                }
                return items;
              },
              (firstChild, secondeChild) => {
                const first = value.findIndex(
                  (item) =>
                    item.primaryKey === firstChild.getPropValue('primaryKey') ||
                    firstChild.getPropValue('formItemProps').primaryKey,
                );
                const seconde = value.findIndex(
                  (item) =>
                    item.primaryKey === secondeChild.getPropValue('primaryKey') ||
                    secondeChild.getPropValue('formItemProps').primaryKey,
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
                  componentName: 'ProFormInput',
                  primaryKey: nanoid(),
                  label: '表单项123',
                  size: 'medium',
                  colSpan: 1,
                  fullWidth: true,
                };
              },
              props: {
                config: {
                  items: [
                    {
                      name: 'componentName',
                      title: '表单项组件',
                      display: 'inline',
                      defaultValue: 'ProFormInput',
                      important: true,
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '输入框',
                              value: 'ProFormInput',
                            },
                            {
                              title: '数字输入框',
                              value: 'ProFormNumberInput',
                            },
                            {
                              title: '选择器',
                              value: 'ProFormSelect',
                            },
                            {
                              title: '日期选择器',
                              value: 'ProFormDatePicker',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'primaryKey',
                      title: '编号',
                      condition: () => false,
                      setter: 'StringSetter',
                      defaultValue: () => nanoid(),
                    },
                    {
                      name: 'name',
                      title: {
                        label: {
                          type: 'i18n',
                          zh_CN: '表单标识',
                          en_US: 'Name',
                        },
                        tip: {
                          type: 'i18n',
                          zh_CN: '属性: name | 说明: 表单标识，用于表单校验',
                          en_US: 'prop: name | description: form item name',
                        },
                      },
                      setter: 'StringSetter',
                    },
                    {
                      name: 'label',
                      title: '标题',
                      display: 'inline',
                      defaultValue: '表单项',
                      setter: 'StringSetter',
                      important: true,
                      supportVariable: true,
                    },
                    {
                      name: 'size',
                      title: {
                        label: '尺寸',
                        tip: '单个 Item 的 size 自定义，优先级高于 Form 的 size, 并且当组件与 Item 一起使用时，组件自身设置 size 属性无效。',
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
                      name: 'columnSpan',
                      title: '表单项宽度',
                      initialValue: 1,
                      setter: {
                        componentName: 'RadioGroupSetter',
                        props: {
                          options: [
                            {
                              title: '一列',
                              value: 1,
                            },
                            {
                              title: '二列',
                              value: 2,
                            },
                            {
                              title: '三列',
                              value: 3,
                            },
                            {
                              title: '四列',
                              value: 4,
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'labelTip.enable',
                      title: '标题提示',
                      setter: {
                        componentName: 'BoolSetter',
                      },
                    },
                    {
                      name: 'labelTip.icon',
                      title: '提示图标',
                      setter: {
                        componentName: 'IconSetter',
                      },
                    },
                    {
                      name: 'labelTip.content',
                      title: '提示内容',
                      setter: {
                        componentName: 'StringSetter',
                      },
                    },
                    {
                      name: 'required',
                      defaultValue: false,
                      title: {
                        label: '是否必填',
                        tip: 'required | 是否必填',
                      },
                      setter: {
                        componentName: 'BoolSetter',
                      },
                      extraProps: {},
                    },
                    {
                      name: 'fullWidth',
                      defaultValue: true,
                      title: {
                        label: '宽度占满',
                        tip: '单个 Item 中表单类组件宽度是否是100%',
                      },
                      setter: {
                        componentName: 'BoolSetter',
                      },
                    },
                    {
                      name: 'isPreview',
                      title: {
                        label: '预览态',
                        tip: '是否开启预览态',
                      },
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'autoValidate',
                      title: {
                        label: '自动校验',
                        tip: '是否修改数据时自动触发校验',
                      },
                      setter: 'BoolSetter',
                    },
                    {
                      name: '!entry',
                      title: '组件详细配置',
                      display: 'block',
                      setter: (target) => {
                        return createElement(
                          'div',
                          {
                            onClick: () => {
                              target.node.children.get(target.parent.key).select();
                            },
                          },
                          '点击配置',
                        );
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
    ],
    supports: {
      style: true,
      events: ['saveField', 'onSubmit', 'onChange'],
    },
  },
};
const snippets: Snippet[] = [
  {
    title: '高级表单',
    screenshot:
      'https://img.alicdn.com/imgextra/i2/O1CN016gn5DQ1FeXUNKdK22_!!6000000000512-55-tps-50-36.svg',
    schema: {
      componentName: 'ProForm',
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
  ...ProFormMeta,
  snippets,
};
