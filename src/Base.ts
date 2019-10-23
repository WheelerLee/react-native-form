/**
 * 表单子项的公共属性
 * 2019-09-07 01:07.
 *
 * @author WheelerLee https://github.com/WheelerLee
 * @copyright 2019 
 */
export interface BaseInput {

  value?: string | number | boolean;
  isForm?: () => boolean;

}

export interface FormItemProps {
  
  /**
   * 类似于html中form组件的name属性，如果包含name属性就会将该组件的值包含到form的对象中
  */
  name?: string;
  value?: string | number | boolean;

}