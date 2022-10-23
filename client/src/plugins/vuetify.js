// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Vuetify
import { createVuetify } from 'vuetify';

export default createVuetify(
  {
    components,
    directives,
    styles: {
      configFile: 'src/main.scss',
    },
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
);
