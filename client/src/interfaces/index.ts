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

export interface CustomButtonInterface {
  bgColor?: string;
  value?: string;
  color?: string;
  sx?: any;
  onClick?: () => void;
}

export interface ImageComponentInterface {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
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
  handleClick?: (path: string) => void;
}

export interface CustomFormProviderInterface {
  children: React.ReactNode;
  methods: object;
  onSubmit?: () => void;
}

export interface PersonInformationDataInterface {
  first_name: string;
  last_name: string;
  state: string;
  country: string;
  street_address: string;
  city: string;
}

export interface AccountSecurityInterface {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
}

export interface LinearAlternativeInterface {
  getCurrentForm: () => JSX.Element;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
}
