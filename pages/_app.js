import { Component } from "react";

import { Analytics } from '@vercel/analytics/react';

import ThemeProvider from 'providers/ThemeProvider';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { 
    faSun,
    faMoon,
    faBorderAll, 
    faList, 
    faSortNumericDown, 
    faSortNumericUp} from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
    faSun,
    faMoon,
    faList, 
    faBorderAll, 
    faSortNumericDown, 
    faSortNumericUp);

import { 
    faLinkedin,
    faGithubSquare,
    faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

library.add(
    faLinkedin,
    faGithubSquare,
    faFacebookSquare);

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/base16/darcula.css';
import "react-toggle/style.css";
import 'styles/index.scss';

const AppExport = ({Component, pageProps}) => 
    <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
    </ThemeProvider>;
export default AppExport;