/* See https://goo.gl/OOhYW5 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '/src/page/landing-page.js';

import './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<title>Believe in Code | Min-Yih Hsu's Website</title><style>
      html, body {
        padding: 0;
        margin: 0;

        font-family: 'Roboto', sans-serif;
      }
    </style><landing-page></landing-page>`;

document.head.appendChild($_documentContainer.content);
// load pre-caching service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
