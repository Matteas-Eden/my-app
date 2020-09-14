import withRoot from '../modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import ProductCategories from '../modules/views/ProductCategories';
import AppFooter from '../modules/views/AppFooter';
import ProductHero from '../modules/views/ProductHero';
import ProductValues from '../modules/views/ProductValues';
import AppAppBar from '../modules/views/AppAppBar';

import { Element } from 'react-scroll';

function Index() {
    return (
        <React.Fragment>
            <Element id="top" name="top" />
            <AppAppBar />
            <ProductHero />
            <Element id="tech" name="tech" />
            <ProductValues />
            <Element id="projects" name="projects" />
            <ProductCategories />
            <AppFooter />
        </React.Fragment>
    );
}

export default withRoot(Index);
