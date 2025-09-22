interface ISubMenuItem {
  title: string;
  href?: string;
}

interface IMenuItem {
  title: string;
  subMenu?: ISubMenuItem[];
  href?: string;
}
