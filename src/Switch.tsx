/**
 * 开关组件
 * 2019-09-07 16:25.
 *
 * @author WheelerLee https://github.com/WheelerLee
 * @copyright 2019 
 */
import React from 'react';
import {Switch as NativeSwitch, SwitchProps} from 'react-native';
import BaseFormItem from './BaseFormItem';

export default class Switch extends BaseFormItem<SwitchProps> {

  value?: boolean;

  render() {

    return (
      <NativeSwitch {...this.props} onValueChange={value => {
        this.value = value;
        this.props.onValueChange && this.props.onValueChange(value);
      }} />
    );

  }

}