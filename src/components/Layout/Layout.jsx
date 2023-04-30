import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

import { Wrapper, Header, Box } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Box>
          <AppBar />
        </Box>
      </Header>
      <main>
        <Box>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Box>
      </main>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  );
};
