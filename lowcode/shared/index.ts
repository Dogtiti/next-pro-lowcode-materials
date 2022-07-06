import { FieldConfig } from '@alilc/lowcode-types';
import { nanoid } from 'nanoid';
import { createElement } from 'react';
import { Button } from '@alifd/next';

export const formItemProps: FieldConfig = {
  name: 'formItemProps',
  title: '表单项配置',
  extraProps: {
    display: 'accordion',
    defaultCollapsed: true,
  },
  setter: {
    componentName: 'ObjectSetter',
    props: {
      config: {
        items: [
          {
            name: 'primaryKey',
            title: '编号',
            setter: 'StringSetter',
            condition: () => false,
          },
          {
            name: 'id',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '唯一标识',
                en_US: 'ID',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: id | 说明: 唯一标识',
                en_US: 'prop: id | description: switch id',
              },
            },
            setter: 'StringSetter',
            condition: () => false,
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
            setter: ['StringSetter', 'EntitySetter'],
            supportVariable: true,
          },
          {
            name: 'columnSpan',
            title: '表单项宽度',
            defaultValue: 1,
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
            name: 'label',
            title: '标题',
            display: 'inline',
            defaultValue: '表单项',
            setter: 'StringSetter',
            important: true,
            supportVariable: true,
          },
          {
            name: 'help',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '错误提示',
                en_US: 'Help Info',
              },
              tip: {
                type: 'i18n',
                zh_CN: '属性: help | 说明: 自定义提示信息, 如不设置，则会根据校验规则自动生成.',
                en_US: 'prop: help | description: help infomation',
              },
            },
            setter: 'StringSetter',
          },
          {
            name: 'extra',
            title: {
              label: {
                type: 'i18n',
                zh_CN: '帮助提示',
                en_US: 'Extra Info',
              },
              tip: {
                type: 'i18n',
                zh_CN:
                  '属性: extra | 说明: 额外的提示信息, 和 help 类似，当需要错误信息和提示文案同时出现时，可以使用这个。 位于错误信息后面',
                en_US: 'prop: extra | description: extra infomation',
              },
            },
            setter: 'StringSetter',
          },
          {
            name: 'validateState',
            title: {
              label: '校验状态',
              tip: '如不设置，则会根据校验规则自动生成\n@enumdesc 失败, 成功, 校验中, 警告',
            },
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['error', 'success', 'loading', 'warning'],
              },
            },
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
            name: 'labelAlign',
            condition: () => false,
            title: {
              label: '标签位置',
              tip: '上, 左, 内',
            },
            getValue: (target) => {
              const value = target.getProps().node.parent.getPropValue(target.name);
              return value;
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
                  {
                    title: '默认',
                    value: '',
                  },
                ],
              },
            },
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
            name: 'labelTip.enable',
            title: '标题提示',
            setter: {
              componentName: 'BoolSetter',
            },
          },
          {
            name: 'labelTip.icon',
            title: '提示图标',
            condition: (target) => {
              return target.parent.getPropValue('labelTip.enable');
            },
            setter: {
              componentName: 'IconSetter',
            },
          },
          {
            name: 'labelTip.content',
            title: '提示内容',
            condition: (target) => {
              return target.parent.getPropValue('labelTip.enable');
            },
            setter: {
              componentName: 'StringSetter',
            },
          },
          {
            name: 'labelTextAlign',
            title: {
              label: '标签对齐',
              tip: '左, 右',
            },
            condition: () => false,
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: [
                  {
                    title: '左',
                    value: 'left',
                  },
                  {
                    title: '右',
                    value: 'right',
                  },
                  {
                    title: '默认',
                    value: '',
                  },
                ],
              },
            },
            defaultValue: 'right',
          },
          {
            name: 'device',
            title: {
              label: '设备',
            },
            condition: () => false,
            setter: {
              componentName: 'RadioGroupSetter',
              props: {
                options: ['phone', 'tablet', 'desktop'],
              },
            },
            defaultValue: 'desktop',
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
            extraProps: {
              setValue(target, value) {
                if (value === true && !target.parent.getPropValue('name')) {
                  target.setPropValue('name', nanoid());
                  target.parent.setValue(target.parent.getValue());
                }
              },
            },
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
            type: 'group',
            name: 'validation',
            display: 'accordion',
            defaultCollapsed: true,
            title: '校验',
            items: [
              {
                type: 'group',
                name: 'notNullValidation',
                display: 'popup',
                title: '非空校验',
                items: [
                  {
                    name: 'required',
                    title: {
                      label: '不能为空',
                      tip: '[表单校验] 不能为空',
                    },
                    setter: 'BoolSetter',
                  },
                  {
                    name: 'requiredMessage',
                    title: {
                      label: '错误信息',
                      tip: '[表单校验]为空时自定义错误信息',
                    },
                    setter: 'StringSetter',
                  },
                ],
              },
              {
                type: 'group',
                name: 'maxValidation',
                display: 'popup',
                title: '最大/最小值校验',
                items: [
                  {
                    name: 'min',
                    title: {
                      label: '最小值',
                      tip: '[表单校验] 最小值',
                    },
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'max',
                    title: {
                      label: '最大值',
                      tip: '[表单校验] 最大值',
                    },
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'minmaxMessage',
                    title: {
                      label: '错误信息',
                      tip: '[表单校验] min/max 自定义错误信息',
                    },
                    setter: 'StringSetter',
                  },
                ],
              },
              {
                type: 'group',
                name: 'maxLenValidation',
                display: 'popup',
                title: '最大/最小长度校验',
                items: [
                  {
                    name: 'minLength',
                    title: {
                      label: '最小长度',
                      tip: '[表单校验] 字符串最小长度 / 数组最小个数',
                    },
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'maxLength',
                    title: {
                      label: '最大长度',
                      tip: '[表单校验] 字符串最大长度 / 数组最大个数',
                    },
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'minmaxLengthMessage',
                    title: {
                      label: '错误信息',
                      tip: '[表单校验] minLength/maxLength 自定义错误信息',
                    },
                    setter: 'StringSetter',
                  },
                ],
              },
              {
                type: 'group',
                name: 'lengthValidation',
                display: 'popup',
                title: '长度校验',
                items: [
                  {
                    name: 'length',
                    title: {
                      label: '长度',
                      tip: '[表单校验] 字符串精确长度 / 数组精确个数',
                    },
                    setter: 'NumberSetter',
                  },
                  {
                    name: 'lengthMessage',
                    title: {
                      label: '错误信息',
                      tip: '[表单校验] minLength/maxLength 自定义错误信息',
                    },
                    setter: 'StringSetter',
                  },
                ],
              },
              {
                type: 'group',
                name: 'regValidation',
                display: 'popup',
                title: '正则校验',
                items: [
                  {
                    name: 'pattern',
                    title: {
                      label: '正则',
                      tip: '[表单校验] 正则校验',
                    },
                    setter: 'StringSetter',
                  },
                  {
                    name: 'patternMessage',
                    title: {
                      label: '错误信息',
                      tip: '[表单校验] pattern 自定义错误信息',
                    },
                    setter: 'StringSetter',
                  },
                ],
              },
              {
                type: 'group',
                name: 'formatValidation',
                display: 'popup',
                title: '格式化校验',
                items: [
                  {
                    name: 'format',
                    title: {
                      label: 'format',
                      tip: '[表单校验] 四种常用的 pattern',
                    },
                    setter: {
                      componentName: 'RadioGroupSetter',
                      props: {
                        options: ['number', 'email', 'url', 'tel'],
                      },
                    },
                  },
                  {
                    name: 'formatMessage',
                    title: {
                      label: '错误信息',
                      tip: '[表单校验] format 自定义错误信息',
                    },
                    setter: 'StringSetter',
                  },
                ],
              },
              {
                name: 'validator',
                display: 'popup',
                title: {
                  label: '自定义校验函数',
                },
                setter: 'FunctionSetter',
              },
            ],
          },
        ],
      },
    },
  },
};

export const formProps: FieldConfig[] = [
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
              child.getPropValue('primaryKey') || child.getPropValue('formItemProps').primaryKey;
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
                item.primaryKey === firstChild.getPropValue('formItemProps').primaryKey,
            );
            const seconde = value.findIndex(
              (item) =>
                item.primaryKey === secondeChild.getPropValue('primaryKey') ||
                item.primaryKey === secondeChild.getPropValue('formItemProps').primaryKey,
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
              label: '表单项',
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
                      Button,
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
];
