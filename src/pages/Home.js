import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../modules/views/ProductCategories';
import ProductSmokingHero from '../modules/views/ProductSmokingHero';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import ProductHowItWorks from '../modules/views/ProductHowItWorks';
import ProductCTA from '../modules/views/ProductCTA';
import AppAppBar from '../modules/views/AppAppBar';

import { Element } from 'react-scroll';

function Index() {
  return (
    <React.Fragment>
      <Element id='top' name='top' />
      <AppAppBar />
      <ProductHero />
      <Element id='tech' name='tech' />
      <ProductValues />
      <Element id='sites' name='sites' />
      <ProductCategories />
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
