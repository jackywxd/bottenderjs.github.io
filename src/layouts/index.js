import React from 'react';
import styled from 'styled-components';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { rhythm } from '../utils/typography';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`;

const Container = styled.div`
  display: flex;
`;

export default ({ children, data }) => (
  <Wrapper>
    <Header title={data.site.siteMetadata.title} />
    <Container>
      <Sidebar />
      {children()}
    </Container>
  </Wrapper>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;