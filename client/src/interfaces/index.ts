export interface SingleMenuInterface {
  name: string;
  redirect?: string;
  subcontent: Array<MenuSubContentInterface>;
}

export interface MenuSubContentInterface {
  name: string;
  redirect: string;
  icon?: string;
  description?: string;
}

export interface CustomTextFieldInterface {
  name: string;
  label?: string;
  sx?: object;
  placeholder?: string;
}

export interface CardInfoInterface {
  title: string;
  content: string;
  icon?: string;
}

export interface ContentCollapseInterface {
  title: string;
  subContent?: string | Array<any>;
  plus?: string;
  minus?: string;
}
