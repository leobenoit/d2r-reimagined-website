import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';
import { App } from './app';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Aurelia
    .register(
        RouterConfiguration.customize({
            //title: "Betsy Bot Admin Panel",
            useUrlFragmentHash: false,
        }),
    )
    .app(App)
    .start();
