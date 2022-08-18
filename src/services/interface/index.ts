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

export interface IServiceCard extends IMidBank {
  icon: JSX.Element;
  classNameIcon: string;
  bg: string;
}
