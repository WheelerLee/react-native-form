/**
 * 提交按钮
 * 2019-09-07 02:04.
 *
 * @author WheelerLee https://github.com/WheelerLee
 * @copyright 2019 
 */
import React from 'react';
import {Component} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { BaseInput } from './Base';

export default class Submit extends Component<TouchableOpacityProps> implements BaseInput {
  
  value?: string;

  constructor(props: TouchableOpacityProps) {
    super(props);
  }

  isForm() {
    return true;
  }
  
  render() {

    return (
      <TouchableOpacity {...this.props} />
    );

  }

}