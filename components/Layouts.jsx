import React from 'react';
import { Header} from '.';
import FeaturedPosts from '../sections/FeaturedPosts';

const Layouts = ({children}) => {
  return(
      <>
      <Header />
      <FeaturedPosts />
      {children}
      </>
  )
};

export default Layouts;
