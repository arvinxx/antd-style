import { CSSObject } from '@emotion/css';

type CSSParams<T> = T extends string ? string : CSSObject;

/**
 * 给用户提供类型定义的返回签名
 * 用户可以使用  key: css` color:red `，或者 key :{ color : 'red' }，都能正常提供类型定义
 */
export type StyleDefinition<Style> = Style extends string
  ? string
  : {
      [Key in keyof Style]: CSSParams<Style[Key]>;
    };

/**
 * 根据用户返回的样式对象，返回一个可以给用户使用的
 * 譬如用户输入为 { a: css`color: red;`, b: { color: 'red' }
 * 输出的类型泛型为 { a:string; b:string }
 */
export type ReturnStyleToUse<T> = T extends string
  ? string
  : {
      [Key in keyof T]: string;
    };