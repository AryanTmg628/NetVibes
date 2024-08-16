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
  label: string;
  sx?: object;
  shrink?: boolean;
}
