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
      <AppAppBar />
      <Element id='intro' name='intro'>
        <ProductHero />
      </Element>
      <ProductValues />
      <Element id='sites' name='sites'>
        <ProductCategories />
      </Element>
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <Element id='footer' name='footer'>
        <AppFooter />
      </Element>
    </React.Fragment>
  );
}

export default withRoot(Index);
