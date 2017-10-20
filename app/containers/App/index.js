import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Loadables
import HomePage from '../../containers/HomePage/Loadable';
import FeaturePage from '../../containers/FeaturePage/Loadable';
import NotFoundPage from '../../containers/NotFoundPage/Loadable';

// Components
import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import {
  Layout,
  Row,
  Col,
} from 'antd';

import '../../global.css';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Playground React App"
        defaultTitle="Playground React App"
      >
        <meta name="description" content="A Playground React App" />
      </Helmet>
      <Header />
      <Layout>
        <Row>
          <Col span={4}>
            <SideMenu />
          </Col>
          <Col span={20}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Layout>
    </AppWrapper>
  );
}
