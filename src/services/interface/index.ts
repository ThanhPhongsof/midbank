export interface IMidBank {
  title: string;
  desc?: string;
}

export interface IHowItWork extends IMidBank {
  src: string;
  width?: number;
  height: number;
}

export interface ISideBar {
  title: string;
  link: string;
}

export interface ILogoAbout {
  src: string;
  className: string;
}

export interface IFooterSocial {
  src: string;
  kind: boolean;
}

export interface IServiceCard extends IMidBank {
  icon: JSX.Element;
  classNameIcon: string;
  bg: string;
}

export interface IFooterGrid extends IMidBank {
  links: string[];
}

export interface IBlog {
  image: string;
  title: string;
  desc: string;
  author: string;
  position: string;
}
