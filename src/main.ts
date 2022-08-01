import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

function updateCodeWidth() {
  var windowWidth = window.screen.availWidth;
  if(windowWidth > 1100) {
    return;
  }
  var offsetWidth = (<HTMLElement>document.querySelector('td.left-panel')).offsetWidth;
  var contentWidth = windowWidth - offsetWidth;
  var padding = 20;
  var extra = 5;

  if(windowWidth > 768) {
    padding = 60;
    extra = 40;
  }

  contentWidth = contentWidth - padding - extra;
  var codes = document.querySelectorAll('div.code');

  codes.forEach(code => {
    (<HTMLElement>code).style.width = contentWidth + 'px';
  });
}

document.addEventListener("DOMContentLoaded", function(event) { 
  updateCodeWidth();
  window.addEventListener('resize', updateCodeWidth);
});