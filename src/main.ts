import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';
import { App } from './app';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import '@betsybot/betsy-web-components/dist/style.css';

import * as BetsyWebComponentsPlugin from '@betsybot/betsy-web-components';

Aurelia
    .register(
        RouterConfiguration.customize({
            //title: "Betsy Bot Admin Panel",
            useUrlFragmentHash: false,
        }),
    )
    .register(BetsyWebComponentsPlugin)
    .app(App)
    .start();
