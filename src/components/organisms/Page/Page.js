import React from 'react';
import classes from './page.module.css';
import NavigationBar from '../../molecules/NavigationBar/NavigationBar';
import Content from '../../atoms/Content/Content';

const Page = ({ 
  children, // React children
 }) => {
  return <div className={classes.page}>
    <NavigationBar />
    <Content>
      {children}
    </Content>
  </div>
}

export default Page;
