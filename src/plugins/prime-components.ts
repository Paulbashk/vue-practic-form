import {
  Textarea,
  Select,
  InputText,
  Password,
  Button,
} from 'primevue';
import type { App } from 'vue';

export function registerComponents(app: App) {
  app.component('UiButton', Button);
  app.component('UiTextarea', Textarea);
  app.component('UiInputText', InputText);
  app.component('UiPassword', Password);
  app.component('UiSelect', Select);
}
