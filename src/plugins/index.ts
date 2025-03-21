// Plugins
import pinia from '../stores';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

// Types
import type { App } from 'vue';

export function registerPlugins(app: App) {
  app
    .use(PrimeVue, {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false,
        },
      },
    })
    .use(pinia);
}
