export interface IMidBank {
  title: string;
  desc: string;
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
