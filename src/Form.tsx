/**
 * 表单的基础组件Form
 * 2019-09-06 21:44.
 *
 * @author WheelerLee https://github.com/WheelerLee
 * @copyright 2019 
 */
import React, { ReactElement, ReactNode } from 'react';
import {Component} from 'react';
import { BaseInput } from './Base';

interface Props {
  /**
   * 当表单提交的时候被出发，和html不一样，并不会真的提交表单到服务器，需要自己在此方法中提交到服务器
   */
  onSubmit?: (parsms: any) => void;
}

export default class Form extends Component<Props> {
  
  //TODO: 目前已经简单实现了提交和输入框功能，还需要实现别的一些组件。
  value?: string;
  childrendRefs: Array<ReactElement>;

  constructor(props: Props) {
    super(props);
    this.childrendRefs = [];
  }

  submit() {
    let params: any = {};
    for (let x of this.childrendRefs) {
      let name = x.props.name;
      const child = x as BaseInput;
      let value = child.value;
      if (name && value) {
        params[name] = value;
      }
    }
    this.props.onSubmit && this.props.onSubmit(params);
    return params;
  }

  /**
   * 遍历所有的孩子节点，获取Form的组件
   * @param cr 组件的孩子节点
   */
  private getChildren(cr: ReactNode): ReactNode {
    this.childrendRefs = [];
    const children: ReactNode = React.Children.map<ReactElement, ReactNode>(cr, (child: any) => {
      let x: ReactElement = child as ReactElement<Function>;
      if (child && child.type && child.type.prototype && child.type.prototype.isForm && child.type.prototype.isForm()) { //表示是From组件，需要复制获取ref属性
        if (child.type.name === 'Submit') {
          return React.cloneElement(x, {
            onPress: this.submit.bind(this)
          });
        } else {
          return React.cloneElement(x, {
            ref: (node: ReactElement) => {
              if (node) this.childrendRefs.push(node);
            }
          });
        }
      } else {
        if (x && x.props && x.props.children && (typeof x.props.children !== 'string') && (typeof x.props.children) !== 'number') {
          return React.cloneElement(x, {
            children: this.getChildren(x.props.children)
          });
        } else {
          return x;
        }
      }
    });
    return children;
  }

  render() {
    return this.getChildren(this.props.children);
  }

}