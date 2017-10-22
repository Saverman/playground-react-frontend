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

import '../../global.less';

const AppWrapper = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const SideBarWrapper = styled.div`
  position: absolute;
  background-color: #37474F;
  height: 100%;
  position: fixed;
  border-right: 2px solid;
`;

const ContentWrapper = styled.div`
  position: absolute;
  width: 97%;
  right: 0;
  background-color: white;
  margin-top: 15px;
  z-index: 1;
`;

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  heigth: 100%;
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
        <MainWrapper>
          <Row>
            <Col span={4}>
              <SideBarWrapper>
                <SideMenu />
              </SideBarWrapper>
            </Col>
            <Col span={20}>
              <ContentWrapper>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/features" component={FeaturePage} />
                  <Route path="" component={NotFoundPage} />
                </Switch>
              </ContentWrapper>
            </Col>
          </Row>
        </MainWrapper>
      </Layout>
    </AppWrapper>
  );
}
