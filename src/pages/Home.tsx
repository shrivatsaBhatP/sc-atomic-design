import React from 'react';
import Body from '../components/organisms/Body';
import Header from '../components/organisms/Header';
import Template from '../components/templates/Body';

const Home = () => {
  return (
    <div>
      <Header />
      <Template>
        <Body />
      </Template>
    </div>
  );
};

export default Home;
