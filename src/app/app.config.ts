import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset } from '@primeng/themes';

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      500: '#141516'
    }
  }
});

export const appConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: MyPreset
      }
    })
  ]
};