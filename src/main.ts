// Plugins
import { registerPlugins } from '@/plugins';
import { registerComponents } from '@/plugins/prime-components';

// Components
import App from './App.vue';

// Composables
import { createApp } from 'vue';

// styles
import '@/styles/style.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

registerPlugins(app);
registerComponents(app);

app.mount('#app');
