import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <header>{title}</header>
    {children}
    <footer>
      <hr />
      <span>{`I'm here to stay (Footer)`}</span>
    </footer>
  </div>
);

export default Layout;
