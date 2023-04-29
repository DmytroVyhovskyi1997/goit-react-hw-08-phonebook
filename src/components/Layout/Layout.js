import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {AppBar} from '../AppBar/AppBar'

import { Wrapper,Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
       
        <AppBar />
      
      
      
      </Header>
      <main>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </main>
      
    </Wrapper>
  );
};
