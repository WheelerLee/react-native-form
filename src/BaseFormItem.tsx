/**
 * form子项的基本类
 * 2019-09-07 16:08.
 *
 * @author WheelerLee https://github.com/WheelerLee
 * @copyright 2019 
 */
import {Component} from 'react';
import { FormItemProps, BaseInput } from './Base';

export default class BaseFormItem<T extends FormItemProps, R = {}> extends Component<T, R> implements BaseInput {

  value?: string | number | boolean;

  constructor(props: T, state?: R) {
    super(props, state);
    this.value = props.value;
  }

  isForm() {
    return true;
  }

  componentWillReceiveProps(nextProps: Readonly<T>) {
    if (nextProps.value !== this.value) {
      this.value = nextProps.value;
    }
  }

}