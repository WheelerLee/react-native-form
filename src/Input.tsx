/**
 * Input 输入框组件
 * 2019-09-06 22:40.
 *
 * @author WheelerLee https://github.com/WheelerLee
 * @copyright 2019 
 */
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {FormItemProps} from './Base';
import BaseFormItem from './BaseFormItem';

type InputProps = FormItemProps & TextInputProps;

export default class Input extends BaseFormItem<InputProps> {
  
  render() {

    return (
      <TextInput {...this.props} onChangeText={(text: string) => {
        this.value = text;
        this.props.onChangeText && this.props.onChangeText(text);
      }} />
    );

  }

}