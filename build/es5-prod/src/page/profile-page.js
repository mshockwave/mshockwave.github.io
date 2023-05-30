define(["exports","./landing-page.js"],function(_exports,_landingPage){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports._composedTreeContains=_composedTreeContains;_exports._getScrollInfo=_getScrollInfo;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports.currentLockingElement=_exports._unlockedElementCache=_exports._lockingElements=_exports._lockedElementCache=_exports._boundScrollHandler=_exports.PaperDialogBehaviorImpl=_exports.PaperDialogBehavior=_exports.PaperButtonBehaviorImpl=_exports.PaperButtonBehavior=_exports.NeonAnimationRunnerBehaviorImpl=_exports.NeonAnimationRunnerBehavior=_exports.NeonAnimatableBehavior=_exports.IronResizableBehavior=_exports.IronOverlayManagerClass=_exports.IronOverlayManager=_exports.IronOverlayBehaviorImpl=_exports.IronOverlayBehavior=_exports.IronFocusablesHelper=_exports.IronFitBehavior=_exports.$paperDialogBehavior=_exports.$paperButtonBehavior=_exports.$neonAnimationRunnerBehavior=_exports.$neonAnimatableBehavior=_exports.$ironScrollManager=_exports.$ironResizableBehavior=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironFocusablesHelper=_exports.$ironFitBehavior=void 0;function _templateObject5_741ab6d0ff1411eda1bf05236946c202(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"iron-flex iron-flex-alignment\">\n      :host {\n        display: block;\n        max-width: 70%;\n      }\n\n      p span {\n        font-size: 1.3em;\n        font-weight: 300;\n        line-height: 1.4;\n      }\n\n      paper-button#contact {\n        background-color: var(--paper-blue-700);\n        color: white;\n        font-size: 1.1em;\n      }\n\n      #thumbnail {\n        width: 37%;\n        margin-bottom: 0;\n      }\n      #bio {\n        margin-left: 3%;\n        width: 60%;\n      }\n\n      /* Mobile Page */\n      @media (max-width: 768px) {\n        :host {\n          max-width: 100%;\n        }\n\n        #thumbnail {\n          width: 70%;\n          margin-bottom: 30px;\n        }\n        #bio {\n          margin-left: 0;\n          width: 80%;\n        }\n      }\n    </style>\n\n    <div class=\"layout horizontal start wrap center-justified\">\n      <img id=\"thumbnail\" src=\"../../images/formal3-small.jpg\">\n      <p id=\"bio\">\n        <span><b>Min-Yih \"Min\" Hsu</b></span>\n        <br><br>\n        <span>\n          Ph.D. Candidate in Donald Bren School of Information and Computer Science, University of California, Irvine.\n        </span>\n        <br><br>\n        <paper-button id=\"contact\" raised=\"\" on-tap=\"_onContactInfoClick\">\n          <iron-icon icon=\"communication:mail-outline\"></iron-icon>\n          &nbsp;Contact Info\n        </paper-button>\n        <br><br><br>\n        <span>\n          I'm currently a Ph.D. Candidate in computer science at UCI, advised by Prof. Michael Franz.<br>\n          I received my M.S. in Computer Science from UCI in 2022.<br>\n          In 2018, I received my Bachelor degree in computer science from National Tsing Hua University, Taiwan.\n          <br><br>\n          My research interests includes: \n          <b>Compilers, Program Analysis, Security and System Software</b>.\n        </span>\n        <br>\n        <span>\n          I have been <a href=\"https://reviews.llvm.org/p/myhsu/\" target=\"_blank\">actively contributing</a> to LLVM for over 5 years; I served on the program commitee for multiple LLVM Developer's Meetings.\n          I'm also the code owner and primary maintainer of LLVM's M68k compiler backend;\n          author of <i>LLVM Techniques, Tips, and Best Practices Clang and Middle-End Libraries</i>.\n        </span>\n        <br><br>\n        <!--\n        <span>\n          During my undergraduate career, I've published several works regarding LLVM and OpenCL.\n          I have strong compiler background, especially LLVM development, and system programming skills.\n        </span>\n        -->\n        <span>\n          In my leisure time, I like jogging, coffee brewing, \n          playing flight simulator, and riding motorcycle.\n        </span>\n      </p>\n    </div>\n"]);_templateObject5_741ab6d0ff1411eda1bf05236946c202=function _templateObject5_741ab6d0ff1411eda1bf05236946c202(){return data};return data}function _templateObject4_741ab6d0ff1411eda1bf05236946c202(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"paper-dialog-shared-styles\"></style>\n    <slot></slot>\n"]);_templateObject4_741ab6d0ff1411eda1bf05236946c202=function _templateObject4_741ab6d0ff1411eda1bf05236946c202(){return data};return data}function _templateObject3_741ab6d0ff1411eda1bf05236946c202(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-material-styles\">\n    /* Need to specify the same specificity as the styles imported from paper-material. */\n    :host {\n      @apply --layout-inline;\n      @apply --layout-center-center;\n      position: relative;\n      box-sizing: border-box;\n      min-width: 5.14em;\n      margin: 0 0.29em;\n      background: transparent;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      -webkit-tap-highlight-color: transparent;\n      font: inherit;\n      text-transform: uppercase;\n      outline-width: 0;\n      border-radius: 3px;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      cursor: pointer;\n      z-index: 0;\n      padding: 0.7em 0.57em;\n\n      @apply --paper-font-common-base;\n      @apply --paper-button;\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n\n    :host([hidden]) {\n      display: none !important;\n    }\n\n    :host([raised].keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-raised-keyboard-focus;\n    }\n\n    :host(:not([raised]).keyboard-focus) {\n      font-weight: bold;\n      @apply --paper-button-flat-keyboard-focus;\n    }\n\n    :host([disabled]) {\n      background: none;\n      color: #a8a8a8;\n      cursor: auto;\n      pointer-events: none;\n\n      @apply --paper-button-disabled;\n    }\n\n    :host([disabled][raised]) {\n      background: #eaeaea;\n    }\n\n\n    :host([animated]) {\n      @apply --shadow-transition;\n    }\n\n    paper-ripple {\n      color: var(--paper-button-ink-color);\n    }\n  </style>\n\n  <slot></slot>"]);_templateObject3_741ab6d0ff1411eda1bf05236946c202=function _templateObject3_741ab6d0ff1411eda1bf05236946c202(){return data};return data}function _templateObject2_741ab6d0ff1411eda1bf05236946c202(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject2_741ab6d0ff1411eda1bf05236946c202=function _templateObject2_741ab6d0ff1411eda1bf05236946c202(){return data};return data}function _templateObject_741ab6d0ff1411eda1bf05236946c202(){var data=babelHelpers.taggedTemplateLiteral(["<iron-iconset-svg name=\"communication\" size=\"24\">\n<svg><defs>\n<g id=\"business\"><path d=\"M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z\"></path></g>\n<g id=\"call\"><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g>\n<g id=\"call-end\"><path d=\"M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08c-.18-.17-.29-.42-.29-.7 0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.11-.7-.28-.79-.74-1.69-1.36-2.67-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z\"></path></g>\n<g id=\"call-made\"><path d=\"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z\"></path></g>\n<g id=\"call-merge\"><path d=\"M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z\"></path></g>\n<g id=\"call-missed\"><path d=\"M19.59 7L12 14.59 6.41 9H11V7H3v8h2v-4.59l7 7 9-9z\"></path></g>\n<g id=\"call-missed-outgoing\"><path d=\"M3 8.41l9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z\"></path></g>\n<g id=\"call-received\"><path d=\"M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z\"></path></g>\n<g id=\"call-split\"><path d=\"M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z\"></path></g>\n<g id=\"chat\"><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z\"></path></g>\n<g id=\"chat-bubble\"><path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"chat-bubble-outline\"><path d=\"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z\"></path></g>\n<g id=\"clear-all\"><path d=\"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z\"></path></g>\n<g id=\"comment\"><path d=\"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"></path></g>\n<g id=\"contact-mail\"><path d=\"M21 8V7l-3 2-3-2v1l3 2 3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z\"></path></g>\n<g id=\"contact-phone\"><path d=\"M22 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm3.85-4h1.64L21 16l-1.99 1.99c-1.31-.98-2.28-2.38-2.73-3.99-.18-.64-.28-1.31-.28-2s.1-1.36.28-2c.45-1.62 1.42-3.01 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2z\"></path></g>\n<g id=\"contacts\"><path d=\"M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z\"></path></g>\n<g id=\"dialer-sip\"><path d=\"M17 3h-1v5h1V3zm-2 2h-2V4h2V3h-3v3h2v1h-2v1h3V5zm3-2v5h1V6h2V3h-3zm2 2h-1V4h1v1zm0 10.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.27-.26.35-.65.24-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z\"></path></g>\n<g id=\"dialpad\"><path d=\"M12 19c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"email\"><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z\"></path></g>\n<g id=\"forum\"><path d=\"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z\"></path></g>\n<g id=\"import-contacts\"><path d=\"M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z\"></path></g>\n<g id=\"import-export\"><path d=\"M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z\"></path></g>\n<g id=\"invert-colors-off\"><path d=\"M20.65 20.87l-2.35-2.35-6.3-6.29-3.56-3.57-1.42-1.41L4.27 4.5 3 5.77l2.78 2.78c-2.55 3.14-2.36 7.76.56 10.69C7.9 20.8 9.95 21.58 12 21.58c1.79 0 3.57-.59 5.03-1.78l2.7 2.7L21 21.23l-.35-.36zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59c0-1.32.43-2.57 1.21-3.6L12 14.77v4.82zM12 5.1v4.58l7.25 7.26c1.37-2.96.84-6.57-1.6-9.01L12 2.27l-3.7 3.7 1.41 1.41L12 5.1z\"></path></g>\n<g id=\"live-help\"><path d=\"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 11.9 13 12.5 13 14h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z\"></path></g>\n<g id=\"location-off\"><path d=\"M12 6.5c1.38 0 2.5 1.12 2.5 2.5 0 .74-.33 1.39-.83 1.85l3.63 3.63c.98-1.86 1.7-3.8 1.7-5.48 0-3.87-3.13-7-7-7-1.98 0-3.76.83-5.04 2.15l3.19 3.19c.46-.52 1.11-.84 1.85-.84zm4.37 9.6l-4.63-4.63-.11-.11L3.27 3 2 4.27l3.18 3.18C5.07 7.95 5 8.47 5 9c0 5.25 7 13 7 13s1.67-1.85 3.38-4.35L18.73 21 20 19.73l-3.63-3.63z\"></path></g>\n<g id=\"location-on\"><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"></path></g>\n<g id=\"mail-outline\"><path d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z\"></path></g>\n<g id=\"message\"><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z\"></path></g>\n<g id=\"no-sim\"><path d=\"M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34 19 16.68 18.99 5zM3.65 3.88L2.38 5.15 5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88 1.27-1.27L3.65 3.88z\"></path></g>\n<g id=\"phone\"><path d=\"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z\"></path></g>\n<g id=\"phonelink-erase\"><path d=\"M13 8.2l-1-1-4 4-4-4-1 1 4 4-4 4 1 1 4-4 4 4 1-1-4-4 4-4zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"phonelink-lock\"><path d=\"M19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-8.2 10V9.5C10.8 8.1 9.4 7 8 7S5.2 8.1 5.2 9.5V11c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3zm-1.3 0h-3V9.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3V11z\"></path></g>\n<g id=\"phonelink-ring\"><path d=\"M20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5zM18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3zM14 1H4c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 19H4V4h10v16z\"></path></g>\n<g id=\"phonelink-setup\"><path d=\"M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z\"></path></g>\n<g id=\"portable-wifi-off\"><path d=\"M17.56 14.24c.28-.69.44-1.45.44-2.24 0-3.31-2.69-6-6-6-.79 0-1.55.16-2.24.44l1.62 1.62c.2-.03.41-.06.62-.06 2.21 0 4 1.79 4 4 0 .21-.02.42-.05.63l1.61 1.61zM12 4c4.42 0 8 3.58 8 8 0 1.35-.35 2.62-.95 3.74l1.47 1.47C21.46 15.69 22 13.91 22 12c0-5.52-4.48-10-10-10-1.91 0-3.69.55-5.21 1.47l1.46 1.46C9.37 4.34 10.65 4 12 4zM3.27 2.5L2 3.77l2.1 2.1C2.79 7.57 2 9.69 2 12c0 3.7 2.01 6.92 4.99 8.65l1-1.73C5.61 17.53 4 14.96 4 12c0-1.76.57-3.38 1.53-4.69l1.43 1.44C6.36 9.68 6 10.8 6 12c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-.65.17-1.25.44-1.79l1.58 1.58L10 12c0 1.1.9 2 2 2l.21-.02.01.01 7.51 7.51L21 20.23 4.27 3.5l-1-1z\"></path></g>\n<g id=\"present-to-all\"><path d=\"M21 3H3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h18c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 16.02H3V4.98h18v14.04zM10 12H8l4-4 4 4h-2v4h-4v-4z\"></path></g>\n<g id=\"ring-volume\"><path d=\"M23.71 16.67C20.66 13.78 16.54 12 12 12 7.46 12 3.34 13.78.29 16.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.72v3.1c0 .39.23.74.56.9.98.49 1.87 1.12 2.66 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.27-.11-.52-.29-.7zM21.16 6.26l-1.41-1.41-3.56 3.55 1.41 1.41s3.45-3.52 3.56-3.55zM13 2h-2v5h2V2zM6.4 9.81L7.81 8.4 4.26 4.84 2.84 6.26c.11.03 3.56 3.55 3.56 3.55z\"></path></g>\n<g id=\"rss-feed\"><circle cx=\"6.18\" cy=\"17.82\" r=\"2.18\"></circle><path d=\"M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z\"></path></g>\n<g id=\"screen-share\"><path d=\"M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z\"></path></g>\n<g id=\"speaker-phone\"><path d=\"M7 7.07L8.43 8.5c.91-.91 2.18-1.48 3.57-1.48s2.66.57 3.57 1.48L17 7.07C15.72 5.79 13.95 5 12 5s-3.72.79-5 2.07zM12 1C8.98 1 6.24 2.23 4.25 4.21l1.41 1.41C7.28 4 9.53 3 12 3s4.72 1 6.34 2.62l1.41-1.41C17.76 2.23 15.02 1 12 1zm2.86 9.01L9.14 10C8.51 10 8 10.51 8 11.14v9.71c0 .63.51 1.14 1.14 1.14h5.71c.63 0 1.14-.51 1.14-1.14v-9.71c.01-.63-.5-1.13-1.13-1.13zM15 20H9v-8h6v8z\"></path></g>\n<g id=\"stay-current-landscape\"><path d=\"M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z\"></path></g>\n<g id=\"stay-current-portrait\"><path d=\"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>\n<g id=\"stay-primary-landscape\"><path d=\"M1.01 7L1 17c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2zM19 7v10H5V7h14z\"></path></g>\n<g id=\"stay-primary-portrait\"><path d=\"M17 1.01L7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z\"></path></g>\n<g id=\"stop-screen-share\"><path d=\"M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z\"></path></g>\n<g id=\"swap-calls\"><path d=\"M18 4l-4 4h3v7c0 1.1-.9 2-2 2s-2-.9-2-2V8c0-2.21-1.79-4-4-4S5 5.79 5 8v7H2l4 4 4-4H7V8c0-1.1.9-2 2-2s2 .9 2 2v7c0 2.21 1.79 4 4 4s4-1.79 4-4V8h3l-4-4z\"></path></g>\n<g id=\"textsms\"><path d=\"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z\"></path></g>\n<g id=\"voicemail\"><path d=\"M18.5 6C15.46 6 13 8.46 13 11.5c0 1.33.47 2.55 1.26 3.5H9.74c.79-.95 1.26-2.17 1.26-3.5C11 8.46 8.54 6 5.5 6S0 8.46 0 11.5 2.46 17 5.5 17h13c3.04 0 5.5-2.46 5.5-5.5S21.54 6 18.5 6zm-13 9C3.57 15 2 13.43 2 11.5S3.57 8 5.5 8 9 9.57 9 11.5 7.43 15 5.5 15zm13 0c-1.93 0-3.5-1.57-3.5-3.5S16.57 8 18.5 8 22 9.57 22 11.5 20.43 15 18.5 15z\"></path></g>\n<g id=\"vpn-key\"><path d=\"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>"]);_templateObject_741ab6d0ff1411eda1bf05236946c202=function _templateObject_741ab6d0ff1411eda1bf05236946c202(){return data};return data}var IronFitBehavior={properties:{/**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */sizingTarget:{type:Object,value:function value(){return this}},/**
     * The element to fit `this` into.
     */fitInto:{type:Object,value:window},/**
     * Will position the element around the positionTarget without overlapping
     * it.
     */noOverlap:{type:Boolean},/**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */positionTarget:{type:Element},/**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */horizontalAlign:{type:String},/**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */verticalAlign:{type:String},/**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */dynamicAlign:{type:Boolean},/**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */horizontalOffset:{type:Number,value:0,notify:!0},/**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */verticalOffset:{type:Number,value:0,notify:!0},/**
     * Set to true to auto-fit on attach.
     */autoFitOnAttach:{type:Boolean,value:!1},/** @type {?Object} */_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},/**
   * The element that should be used to position the element,
   * if no position target is configured.
   */get _defaultPositionTarget(){var parent=(0,_landingPage.dom)(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},/**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */get _localeHorizontalAlign(){if(this._isRTL){// In RTL, "left" becomes "right".
if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},/**
   * True if the element should be positioned instead of centered.
   * @private
   */get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},/**
   * True if the component is RTL.
   * @private
   */get _isRTL(){// Memoize this to avoid expensive calculations & relayouts.
// Make sure we do it only once
if("undefined"===typeof this._memoizedIsRTL){this._memoizedIsRTL="rtl"==window.getComputedStyle(this).direction}return this._memoizedIsRTL},/** @override */attached:function attached(){this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{// NOTE: shadydom applies distribution asynchronously
// for performance reasons webcomponents/shadydom#120
// Flush to get correct layout info.
window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},/** @override */detached:function detached(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},/**
   * Positions and fits the element into the `fitInto` element.
   */fit:function fit(){this.position();this.constrain();this.center()},/**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */_discoverInfo:function _discoverInfo(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},/**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */resetFit:function resetFit(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},/**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */refit:function refit(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},/**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */position:function position(){if(!this.__shouldPosition){// needs to be centered, and it is done after constrain.
return}this._discoverInfo();this.style.position="fixed";// Need border-box for margin/padding.
this.sizingTarget.style.boxSizing="border-box";// Set to 0, 0 in order to discover any offset caused by parent stacking
// contexts.
this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=Math.min(fitRect.right-margin.right,left+rect.width),bottom=Math.min(fitRect.bottom-margin.bottom,top+rect.height);// Keep left/top within fitInto respecting the margin.
left=Math.max(fitRect.left+margin.left,Math.min(left,right-this._fitInfo.sizedBy.minWidth));top=Math.max(fitRect.top+margin.top,Math.min(top,bottom-this._fitInfo.sizedBy.minHeight));// Use right/bottom to set maxWidth/maxHeight, and respect
// minWidth/minHeight.
this.sizingTarget.style.maxWidth=Math.max(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=Math.max(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";// Remove the offset caused by any stacking context.
this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},/**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */constrain:function constrain(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;// position at (0px, 0px) if not already positioned, so we can measure the
// natural size.
if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}// need border-box for margin/padding
this.sizingTarget.style.boxSizing="border-box";// constrain the width and height if not already set
var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},/**
   * @protected
   * @deprecated
   */_sizeDimension:function _sizeDimension(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},/**
   * @private
   */__sizeDimension:function __sizeDimension(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},/**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */center:function center(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){// Already positioned.
return}// Need position:fixed to center
this.style.position="fixed";// Take into account the offset caused by parents that create stacking
// contexts (e.g. with transform: translate3d). Translate to 0,0 and
// measure the bounding rect.
if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}// It will take in consideration margins and transforms
var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function __getNormalizedRect(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function __getOffscreenArea(position,size,fitRect){var verticalCrop=Math.min(0,position.top)+Math.min(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=Math.min(0,position.left)+Math.min(0,fitRect.right-(position.left+size.width));return Math.abs(verticalCrop)*size.width+Math.abs(horizontalCrop)*size.height},__getPosition:function __getPosition(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){// All the possible configurations.
// Ordered as top-left, top-right, bottom-left, bottom-right.
var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){// Duplicate.
for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}// Horizontal overlap only.
positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;// Vertical overlap only.
positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}// Consider auto as null for coding convenience.
vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;// If both vAlign and hAlign are defined, return exact match.
// For dynamicAlign and noOverlap we'll have more than one candidate, so
// we'll have to check the offscreenArea to make the best choice.
if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}// Align is ok if alignment preferences are respected. If no preferences,
// it is considered ok.
var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);// Filter out elements that don't match the alignment (if defined).
// With dynamicAlign, we need to consider all the positions to find the
// one that minimizes the cropped area.
if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);// If not cropped and respects the align requirements, keep it.
// This allows to prefer positions overlapping horizontally over the
// ones overlapping vertically.
if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;// Check which crops less. If it crops equally, check if at least one
// align setting is ok.
if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;var ironFitBehavior={IronFitBehavior:IronFitBehavior};_exports.$ironFitBehavior=ironFitBehavior;var template=(0,_landingPage.html$1)(_templateObject_741ab6d0ff1411eda1bf05236946c202());document.head.appendChild(template.content);var p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,IronFocusablesHelperClass=/*#__PURE__*/function(){function IronFocusablesHelperClass(){babelHelpers.classCallCheck(this,IronFocusablesHelperClass)}babelHelpers.createClass(IronFocusablesHelperClass,[{key:"getTabbableNodes",/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */value:function getTabbableNodes(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result}/**
     * Returns if a element is focusable.
     * @param {!HTMLElement} element
     * @return {boolean}
     */},{key:"isFocusable",value:function isFocusable(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")}/**
     * Returns if a element is tabbable. To be tabbable, a element must be
     * focusable, visible, and with a tabindex !== -1.
     * @param {!HTMLElement} element
     * @return {boolean}
     */},{key:"isTabbable",value:function isTabbable(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)}/**
     * Returns the normalized element tabindex. If not focusable, returns -1.
     * It checks for the attribute "tabindex" instead of the element property
     * `tabIndex` since browsers assign different values to it.
     * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
     * @param {!HTMLElement} element
     * @return {!number}
     * @private
     */},{key:"_normalizedTabIndex",value:function _normalizedTabIndex(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1}/**
     * Searches for nodes that are tabbable and adds them to the `result` array.
     * Returns if the `result` array needs to be sorted by tabindex.
     * @param {!Node} node The starting point for the search; added to `result`
     * if tabbable.
     * @param {!Array<!HTMLElement>} result
     * @return {boolean}
     * @private
     */},{key:"_collectTabbableNodes",value:function _collectTabbableNodes(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE){return!1}var element=/** @type {!HTMLElement} */node;if(!this._isVisible(element)){return!1}var tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distrubution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distrubution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
// TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
var children;if("content"===element.localName||"slot"===element.localName){children=(0,_landingPage.dom)(element).getDistributedNodes()}else{// Use shadow root if possible, will check for distributed nodes.
children=(0,_landingPage.dom)(element.root||element).children}for(var i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort}/**
     * Returns false if the element has `visibility: hidden` or `display: none`
     * @param {!HTMLElement} element
     * @return {boolean}
     * @private
     */},{key:"_isVisible",value:function _isVisible(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1}/**
     * Sorts an array of tabbable elements by tabindex. Returns a new array.
     * @param {!Array<!HTMLElement>} tabbables
     * @return {!Array<!HTMLElement>}
     * @private
     */},{key:"_sortByTabIndex",value:function _sortByTabIndex(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
var len=tabbables.length;if(2>len){return tabbables}var pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)}/**
     * Merge sort iterator, merges the two arrays into one, sorted by tab index.
     * @param {!Array<!HTMLElement>} left
     * @param {!Array<!HTMLElement>} right
     * @return {!Array<!HTMLElement>}
     * @private
     */},{key:"_mergeSortByTabIndex",value:function _mergeSortByTabIndex(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)}/**
     * Returns if element `a` has lower tab order compared to element `b`
     * (both elements are assumed to be focusable and tabbable).
     * Elements with tabindex = 0 have lower tab order compared to elements
     * with tabindex > 0.
     * If both have same tabindex, it returns false.
     * @param {!HTMLElement} a
     * @param {!HTMLElement} b
     * @return {boolean}
     * @private
     */},{key:"_hasLowerTabOrder",value:function _hasLowerTabOrder(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
var ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}}]);return IronFocusablesHelperClass}(),IronFocusablesHelper=new IronFocusablesHelperClass;_exports.IronFocusablesHelper=IronFocusablesHelper;var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};_exports.$ironFocusablesHelper=ironFocusablesHelper;(0,_landingPage.Polymer)({/** @override */_template:(0,_landingPage.html$1)(_templateObject2_741ab6d0ff1411eda1bf05236946c202()),is:"iron-overlay-backdrop",properties:{/**
     * Returns true if the backdrop is opened.
     */opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},/** @override */created:function created(){// Used to cancel previous requestAnimationFrame calls when opened changes.
this.__openedRaf=null},/** @override */attached:function attached(){this.opened&&this._openedChanged(this.opened)},/**
   * Appends the backdrop to document body if needed.
   */prepare:function prepare(){if(this.opened&&!this.parentNode){(0,_landingPage.dom)(document.body).appendChild(this)}},/**
   * Shows the backdrop.
   */open:function open(){this.opened=!0},/**
   * Hides the backdrop.
   */close:function close(){this.opened=!1},/**
   * Removes the backdrop from document body if needed.
   */complete:function complete(){if(!this.opened&&this.parentNode===document.body){(0,_landingPage.dom)(this.parentNode).removeChild(this)}},_onTransitionend:function _onTransitionend(event){if(event&&event.target===this){this.complete()}},/**
   * @param {boolean} opened
   * @private
   */_openedChanged:function _openedChanged(opened){if(opened){// Auto-attach.
this.prepare()}else{// Animation might be disabled via the mixin or opacity custom property.
// If it is disabled in other ways, it's up to the user to call complete.
var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}// Always cancel previous requestAnimationFrame.
if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}// Force relayout to ensure proper transitions.
this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});var ORPHANS=new Set,IronResizableBehavior={properties:{/**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */_parentResizable:{type:Object,observer:"_parentResizableChanged"},/**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function created(){// We don't really need property effects on these, and also we want them
// to be created before the `_parentResizable` observer fires:
this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function attached(){this._requestResizeNotifications()},detached:function detached(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},/**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */notifyResize:function notifyResize(){if(!this.isAttached){return}this._interestedResizables.forEach(function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}},this);this._fireResize()},/**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */assignParentResizable:function assignParentResizable(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&-1===parentResizable._interestedResizables.indexOf(this)){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},/**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */stopResizeNotificationsFor:function stopResizeNotificationsFor(target){var index=this._interestedResizables.indexOf(target);if(-1<index){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},/**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_subscribeIronResize:function _subscribeIronResize(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */_unsubscribeIronResize:function _unsubscribeIronResize(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},/**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */resizerShouldNotify:function resizerShouldNotify(element){return!0},_onDescendantIronResize:function _onDescendantIronResize(event){if(this._notifyingDescendant){event.stopPropagation();return}// no need to use this during shadow dom because of event retargeting
if(!_landingPage.useShadow){this._fireResize()}},_fireResize:function _fireResize(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function _onIronRequestResizeNotifications(event){var target=/** @type {!EventTarget} */(0,_landingPage.dom)(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function _parentResizableChanged(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function _notifyDescendant(descendant){// NOTE(cdata): In IE10, attached is fired on children first, so it's
// important not to notify them if the parent is not attached yet (or
// else they will get redundantly notified when the parent attaches).
if(!this.isAttached){return}this._notifyingDescendant=!0;descendant.notifyResize();this._notifyingDescendant=!1},_requestResizeNotifications:function _requestResizeNotifications(){if(!this.isAttached){return}if("loading"===document.readyState){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()})}else{this._findParent();if(!this._parentResizable){// If this resizable is an orphan, tell other orphans to try to find
// their parent again, in case it's this resizable.
ORPHANS.forEach(function(orphan){if(orphan!==this){orphan._findParent()}},this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{// If this resizable has a parent, tell other child resizables of
// that parent to try finding their parent again, in case it's this
// resizable.
this._parentResizable._interestedResizables.forEach(function(resizable){if(resizable!==this){resizable._findParent()}},this)}}},_findParent:function _findParent(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};/**
                          * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
                          * coordinate the flow of resize events between "resizers" (elements that
                          *control the size or hidden state of their children) and "resizables" (elements
                          *that need to be notified when they are resized or un-hidden by their parents
                          *in order to take action on their new measurements).
                          *
                          * Elements that perform measurement should add the `IronResizableBehavior`
                          *behavior to their element definition and listen for the `iron-resize` event on
                          *themselves. This event will be fired when they become showing after having
                          *been hidden, when they are resized explicitly by another resizable, or when
                          *the window has been resized.
                          *
                          * Note, the `iron-resize` event is non-bubbling.
                          *
                          * @polymerBehavior
                          * @demo demo/index.html
                          **/_exports.IronResizableBehavior=IronResizableBehavior;var ironResizableBehavior={IronResizableBehavior:IronResizableBehavior};_exports.$ironResizableBehavior=ironResizableBehavior;var IronOverlayManagerClass=/*#__PURE__*/function(){function IronOverlayManagerClass(){babelHelpers.classCallCheck(this,IronOverlayManagerClass);/**
     * Used to keep track of the opened overlays.
     * @private {!Array<!Element>}
     */this._overlays=[];/**
                             * iframes have a default z-index of 100,
                             * so this default should be at least that.
                             * @private {number}
                             */this._minimumZ=101;/**
                           * Memoized backdrop element.
                           * @private {Element|null}
                           */this._backdropElement=null;// Enable document-wide tap recognizer.
// NOTE: Use useCapture=true to avoid accidentally prevention of the closing
// of an overlay via event.stopPropagation(). The only way to prevent
// closing of an overlay should be through its APIs.
// NOTE: enable tap on <html> to workaround Polymer/polymer#4459
// Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
// https://github.com/Microsoft/ChakraCore/issues/3863
(0,_landingPage.addListener)(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)}/**
     * The shared backdrop element.
     * @return {!Element} backdropElement
     */babelHelpers.createClass(IronOverlayManagerClass,[{key:"_bringOverlayAtIndexToFront",/**
     * Brings the overlay at the specified index to the front.
     * @param {number} i
     * @private
     */value:function _bringOverlayAtIndexToFront(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}// If already the top element, return.
if(i>=lastI){return}// Update z-index to be on top.
var minimumZ=Math.max(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}// Shift other overlays behind the new on top.
while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay}/**
     * Adds the overlay and updates its z-index if it's opened, or removes it if
     * it's closed. Also updates the backdrop z-index.
     * @param {!Element} overlay
     */},{key:"addOrRemoveOverlay",value:function addOrRemoveOverlay(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}}/**
     * Tracks overlays for z-index and focus management.
     * Ensures the last added overlay with always-on-top remains on top.
     * @param {!Element} overlay
     */},{key:"addOverlay",value:function addOverlay(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=Math.max(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){// This bumps the z-index of +2.
this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;// Update minimumZ to match previous overlay's z-index.
var previousOverlay=this._overlays[insertionIndex-1];minimumZ=Math.max(this._getZ(previousOverlay),this._minimumZ)}// Update z-index and insert overlay.
if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()}/**
     * @param {!Element} overlay
     */},{key:"removeOverlay",value:function removeOverlay(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()}/**
     * Returns the current overlay.
     * @return {!Element|undefined}
     */},{key:"currentOverlay",value:function currentOverlay(){var i=this._overlays.length-1;return this._overlays[i]}/**
     * Returns the current overlay z-index.
     * @return {number}
     */},{key:"currentOverlayZ",value:function currentOverlayZ(){return this._getZ(this.currentOverlay())}/**
     * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
     * This does not effect the z-index of any existing overlays.
     * @param {number} minimumZ
     */},{key:"ensureMinimumZ",value:function ensureMinimumZ(minimumZ){this._minimumZ=Math.max(this._minimumZ,minimumZ)}},{key:"focusOverlay",value:function focusOverlay(){var current=/** @type {?} */this.currentOverlay();if(current){current._applyFocus()}}/**
     * Updates the backdrop z-index.
     */},{key:"trackBackdrop",value:function trackBackdrop(){var overlay=this._overlayWithBackdrop();// Avoid creating the backdrop if there is no overlay with backdrop.
if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;// Property observers are not fired until element is attached
// in Polymer 2.x, so we ensure element is attached if needed.
// https://github.com/Polymer/polymer/issues/4526
this.backdropElement.prepare()}/**
     * @return {!Array<!Element>}
     */},{key:"getBackdrops",value:function getBackdrops(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops}/**
     * Returns the z-index for the backdrop.
     * @return {number}
     */},{key:"backdropZ",value:function backdropZ(){return this._getZ(this._overlayWithBackdrop())-1}/**
     * Returns the top opened overlay that has a backdrop.
     * @return {!Element|undefined}
     * @private
     */},{key:"_overlayWithBackdrop",value:function _overlayWithBackdrop(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}}/**
     * Calculates the minimum z-index for the overlay.
     * @param {Element=} overlay
     * @private
     */},{key:"_getZ",value:function _getZ(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);// Check if is a number
// Number.isNaN not supported in IE 10+
if(z1===z1){z=z1}}return z}/**
     * @param {!Element} element
     * @param {number|string} z
     * @private
     */},{key:"_setZ",value:function _setZ(element,z){element.style.zIndex=z}/**
     * @param {!Element} overlay
     * @param {number} aboveZ
     * @private
     */},{key:"_applyOverlayZ",value:function _applyOverlayZ(overlay,aboveZ){this._setZ(overlay,aboveZ+2)}/**
     * Returns the deepest overlay in the path.
     * @param {!Array<!Element>=} path
     * @return {!Element|undefined}
     * @suppress {missingProperties}
     * @private
     */},{key:"_overlayInPath",value:function _overlayInPath(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}}/**
     * Ensures the click event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureClick",value:function _onCaptureClick(event){var i=this._overlays.length-1;if(-1===i)return;var path=/** @type {!Array<!EventTarget>} */(0,_landingPage.dom)(event).path,overlay;// Check if clicked outside of overlay.
while((overlay=/** @type {?} */this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}}/**
     * Ensures the focus event is delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureFocus",value:function _onCaptureFocus(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}}/**
     * Ensures TAB and ESC keyboard events are delegated to the right overlay.
     * @param {!Event} event
     * @private
     */},{key:"_onCaptureKeyDown",value:function _onCaptureKeyDown(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){if(_landingPage.IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(_landingPage.IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}}/**
     * Returns if the overlay1 should be behind overlay2.
     * @param {!Element} overlay1
     * @param {!Element} overlay2
     * @return {boolean}
     * @suppress {missingProperties}
     * @private
     */},{key:"_shouldBeBehindOverlay",value:function _shouldBeBehindOverlay(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}},{key:"backdropElement",get:function get(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement}/**
     * The deepest active element.
     * @return {!Element} activeElement the active element
     */},{key:"deepActiveElement",get:function get(){var active=document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes.
// In these cases, default it to document.body.
if(!active||!1===babelHelpers.instanceof(active,Element)){active=document.body}while(active.root&&(0,_landingPage.dom)(active.root).activeElement){active=(0,_landingPage.dom)(active.root).activeElement}return active}}]);return IronOverlayManagerClass}();_exports.IronOverlayManagerClass=IronOverlayManagerClass;;var IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;var ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};_exports.$ironOverlayManager=ironOverlayManager;var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=[// Modern `wheel` event for mouse wheel scrolling:
"wheel",// Older, non-standard `mousewheel` event for some FF:
"mousewheel",// IE:
"DOMMouseScroll",// Touch enabled devices
"touchstart","touchmove"],_boundScrollHandler;/**
    * Used to avoid computing event.path and filter scrollable nodes (better perf).
    * @type {?EventTarget}
    */_exports._boundScrollHandler=_boundScrollHandler;/**
                          * The current element that defines the DOM boundaries of the
                          * scroll lock. This is always the most recently locking element.
                          *
                          * @type {!Node|undefined}
                          */var currentLockingElement;_exports.currentLockingElement=currentLockingElement;function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}/**
   * Push an element onto the current scroll lock stack. The most recently
   * pushed element and its children will be considered scrollable. All
   * other elements will not be scrollable.
   *
   * Scroll locking is implemented as a stack so that cases such as
   * dropdowns within dropdowns are handled well.
   *
   * @param {!HTMLElement} element The element that should lock scroll.
   */function pushScrollLock(element){// Prevent pushing the same element twice
if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}/**
   * Remove an element from the scroll lock stack. The element being
   * removed does not need to be the most recently pushed element. However,
   * the scroll lock constraints only change when the most recently pushed
   * element is removed.
   *
   * @param {!HTMLElement} element The element to remove from the scroll
   * lock stack.
   */function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}var _lockingElements=[];_exports._lockingElements=_lockingElements;var _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;var _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){// NOTE(cdata): This method iterates over content elements and their
// corresponding distributed nodes to implement a contains-like method
// that pierces through the composed tree of the ShadowDOM. Results of
// this operation are cached (elsewhere) on a per-scroll-lock basis, to
// guard against potentially expensive lookups happening repeatedly as
// a user scrolls / touchmoves.
var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=(0,_landingPage.dom)(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=(0,_landingPage.dom)(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){// Avoid canceling an event with cancelable=false, e.g. scrolling is in
// progress and cannot be interrupted.
if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}// If event has targetTouches (touch event), update last touch position.
if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}/**
   * @package
   */function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}/**
   * Returns true if the event causes scroll outside the current locking
   * element, e.g. pointer/keyboard interactions, or scroll "leaking"
   * outside the locking element when it is already at its scroll boundaries.
   * @param {!Event} event
   * @return {boolean}
   * @package
   */function _shouldPreventScrolling(event){// Update if root target changed. For touch events, ensure we don't
// update during touchmove.
var target=(0,_landingPage.dom)(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes((0,_landingPage.dom)(event).path)}// Prevent event if no scrollable nodes.
if(!lastScrollableNodes.length){return!0}// Don't prevent touchstart event inside the locking element when it has
// scrollable nodes.
if("touchstart"===event.type){return!1}// Get deltaX/Y.
var info=_getScrollInfo(event);// Prevent if there is no child that can scroll.
return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}/**
   * Returns an array of scrollable nodes up to the current locking element,
   * which is included too if scrollable.
   * @param {!Array<!Node>} nodes
   * @return {!Array<!Node>} scrollables
   * @package
   */function _getScrollableNodes(nodes){// Loop from root target to locking element (included).
for(var scrollables=[],lockingIndex=nodes.indexOf(/** @type {!Node} */currentLockingElement),i=0;i<=lockingIndex;i++){// Skip non-Element nodes.
if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=/** @type {!Element} */nodes[i],style=node.style;// Check inline style before checking computed style.
if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}/**
   * Returns the node that is scrolling. If there is no scrolling,
   * returns undefined.
   * @param {!Array<!Node>} nodes
   * @param {number} deltaX Scroll delta on the x-axis
   * @param {number} deltaY Scroll delta on the y-axis
   * @return {!Node|undefined}
   * @package
   */function _getScrollingNode(nodes,deltaX,deltaY){// No scroll.
if(!deltaX&&!deltaY){return}// Check only one axis according to where there is more scroll.
// Prefer vertical to horizontal.
for(var verticalScroll=Math.abs(deltaY)>=Math.abs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){// delta < 0 is scroll up, delta > 0 is scroll down.
canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{// delta < 0 is scroll left, delta > 0 is scroll right.
canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}/**
   * Returns scroll `deltaX` and `deltaY`.
   * @param {!Event} event The scroll event
   * @return {{deltaX: number, deltaY: number}} Object containing the
   * x-axis scroll delta (positive: scroll right, negative: scroll left,
   * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
   * negative: scroll up, 0: no scroll).
   * @package
   */function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};// Already available.
if("deltaX"in event){}// do nothing, values are already good.
// Safari has scroll info in `wheelDeltaX/Y`.
else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}// IE10 has only vertical scroll info in `wheelDelta`.
else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}// Firefox has scroll info in `detail` and `axis`.
else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}// On mobile devices, calculate scroll direction.
else if(event.targetTouches){var touch=event.targetTouches[0];// Touch moves from right to left => scrolling goes right.
info.deltaX=lastTouchPosition.pageX-touch.pageX;// Touch moves from down to up => scrolling goes down.
info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;var IronOverlayBehaviorImpl={properties:{/**
     * True if the overlay is currently displayed.
     */opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},/**
     * True if the overlay was canceled when it was last closed.
     */canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},/**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */withBackdrop:{observer:"_withBackdropChanged",type:Boolean},/**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */noAutoFocus:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay with the ESC key.
     */noCancelOnEscKey:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay by clicking outside it.
     */noCancelOnOutsideClick:{type:Boolean,value:!1},/**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */closingReason:{// was a getter before, but needs to be a property so other
// behaviors can override this.
type:Object},/**
     * Set to true to enable restoring of focus when overlay is closed.
     */restoreFocusOnClose:{type:Boolean,value:!1},/**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */allowClickThrough:{type:Boolean},/**
     * Set to true to keep overlay always on top.
     */alwaysOnTop:{type:Boolean},/**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */scrollAction:{type:String},/**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */_manager:{type:Object,value:IronOverlayManager},/**
     * The node being focused.
     * @type {?Node}
     */_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],/**
   * The backdrop element.
   * @return {!Element}
   */get backdropElement(){return this._manager.backdropElement},/**
   * Returns the node to give focus to.
   * @return {!Node}
   */get _focusNode(){return this._focusedChild||(0,_landingPage.dom)(this).querySelector("[autofocus]")||this},/**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},/**
   * @return {void}
   */ready:function ready(){// Used to skip calls to notifyResize and refit while the overlay is
// animating.
this.__isAnimating=!1;// with-backdrop needs tabindex to be set in order to trap the focus.
// If it is not set, IronOverlayBehavior will set it, and remove it if
// with-backdrop = false.
this.__shouldRemoveTabIndex=!1;// Used for wrapping the focus on TAB / Shift+TAB.
this.__firstFocusableNode=this.__lastFocusableNode=null;// Used by to keep track of the RAF callbacks.
this.__rafs={};// Focused node before overlay gets opened. Can be restored on close.
this.__restoreFocusNode=null;// Scroll info to be restored.
this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);// Root nodes hosting the overlay, used to listen for scroll events on them.
this.__rootNodes=null;this._ensureSetup()},/** @override */attached:function attached(){// Call _openedChanged here so that position can be computed correctly.
if(this.opened){this._openedChanged(this.opened)}this._observer=(0,_landingPage.dom)(this).observeNodes(this._onNodesChange)},/** @override */detached:function detached(){// TODO(bicknellr): Per spec, checking `this._observer` should never be
// necessary because `connectedCallback` and `disconnectedCallback` should
// always be called in alternating order. However, the custom elements
// polyfill doesn't implement the reactions stack, so this can sometimes
// happen, particularly if ShadyDOM is in noPatch mode where the custom
// elements polyfill is installed before ShadyDOM. We should investigate
// whether or not we can either implement the reactions stack without major
// performance implications or patch ShadyDOM's functions to restore the
// typical ShadyDOM-then-custom-elements order and remove this workaround.
if(this._observer){(0,_landingPage.dom)(this).unobserveNodes(this._observer)}this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);// We got detached while animating, ensure we show/hide the overlay
// and fire iron-overlay-opened/closed event!
if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{// Restore the focus if necessary.
this._applyFocus();this._finishRenderClosed()}}},/**
   * Toggle the opened state of the overlay.
   */toggle:function toggle(){this._setCanceled(!1);this.opened=!this.opened},/**
   * Open the overlay.
   */open:function open(){this._setCanceled(!1);this.opened=!0},/**
   * Close the overlay.
   */close:function close(){this._setCanceled(!1);this.opened=!1},/**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */cancel:function cancel(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},/**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */invalidateTabbables:function invalidateTabbables(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function _ensureSetup(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},/**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */_openedChanged:function _openedChanged(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}// Defer any animation-related code on attached
// (_openedChanged gets called again on attached).
if(!this.isAttached){return}this.__isAnimating=!0;// Deraf for non-blocking rendering.
this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function _canceledChanged(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function _withBackdropChanged(){// If tabindex is already set, no need to override it.
if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},/**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */_prepareRenderOpened:function _prepareRenderOpened(){// Store focused node.
this.__restoreFocusNode=this._manager.deepActiveElement;// Needed to calculate the size of the overlay so that transitions on its
// size will have the correct starting points.
this._preparePositioning();this.refit();this._finishPositioning();// Safari will apply the focus to the autofocus element when displayed
// for the first time, so we make sure to return the focus where it was.
if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},/**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */_renderOpened:function _renderOpened(){this._finishRenderOpened()},/**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */_renderClosed:function _renderClosed(){this._finishRenderClosed()},/**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */_finishRenderOpened:function _finishRenderOpened(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},/**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */_finishRenderClosed:function _finishRenderClosed(){// Hide the overlay.
this.style.display="none";// Reset z-index only at the end of the animation.
this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function _preparePositioning(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function _finishPositioning(){// First, make it invisible & reactivate animations.
this.style.display="none";// Force reflow before re-enabling animations so that they don't start.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";// Now that animations are enabled, make it visible again
this.style.display="";// Force reflow, so that following animations are properly started.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop},/**
   * Applies focus according to the opened state.
   * @protected
   */_applyFocus:function _applyFocus(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{// Restore focus.
if(this.restoreFocusOnClose&&this.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by an user interaction (e.g. click on a
// button outside the overlay).
var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||composedContains(this,activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},/**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureClick:function _onCaptureClick(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},/**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureFocus:function _onCaptureFocus(event){if(!this.withBackdrop){return}var path=(0,_landingPage.dom)(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=/** @type {Node} */path[0]}},/**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureEsc:function _onCaptureEsc(event){if(!this.noCancelOnEscKey){this.cancel(event)}},/**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */_onCaptureTab:function _onCaptureTab(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();// TAB wraps from last to first focusable.
// Shift + TAB wraps from first to last focusable.
var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){// If nodeToCheck is the same as nodeToSet, it means we have an overlay
// with 0 or 1 focusables; in either case we still need to trap the
// focus within the overlay.
shouldWrap=!0}else{// In dom=shadow, the manager will receive focus changes on the main
// root but not the ones within other shadow roots, so we can't rely on
// _focusedChild, but we should check the deepest active element.
var focusedNode=this._manager.deepActiveElement;// If the active element is not the nodeToCheck but the overlay itself,
// it means the focus is about to go outside the overlay, hence we
// should prevent that (e.g. user opens the overlay and hit Shift+TAB).
shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){// When the overlay contains the last focusable element of the document
// and it's already focused, pressing TAB would move the focus outside
// the document (e.g. to the browser search bar). Similarly, when the
// overlay contains the first focusable element of the document and it's
// already focused, pressing Shift+TAB would move the focus outside the
// document (e.g. to the browser search bar).
// In both cases, we would not receive a focus event, but only a blur.
// In order to achieve focus wrapping, we prevent this TAB event and
// force the focus. This will also prevent the focus to temporarily move
// outside the overlay, which might cause scrolling.
event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},/**
   * Refits if the overlay is opened and not animating.
   * @protected
   */_onIronResize:function _onIronResize(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},/**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */_onNodesChange:function _onNodesChange(){if(this.opened&&!this.__isAnimating){// It might have added focusable nodes, so invalidate cached values.
this.invalidateTabbables();this.notifyResize()}},/**
   * Updates the references to the first and last focusable nodes.
   * @private
   */__ensureFirstLastFocusables:function __ensureFirstLastFocusables(){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]},/**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */__openedChanged:function __openedChanged(){if(this.opened){// Make overlay visible, then add it to the manager.
this._prepareRenderOpened();this._manager.addOverlay(this);// Move the focus to the child node with [autofocus].
this._applyFocus();this._renderOpened()}else{// Remove overlay, then restore the focus before actually closing.
this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},/**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */__deraf:function __deraf(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function nextAnimationFrame(){rafs[jobname]=null;callback.call(this)}.bind(this))},/**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */__updateScrollObservers:function __updateScrollObservers(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},/**
   * @private
   */__addScrollListeners:function __addScrollListeners(){if(!this.__rootNodes){this.__rootNodes=[];// Listen for scroll events in all shadowRoots hosting this overlay only
// when in native ShadowDOM.
if(_landingPage.useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},/**
   * @private
   */__removeScrollListeners:function __removeScrollListeners(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},/**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */__isValidScrollAction:function __isValidScrollAction(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},/**
   * @private
   */__onCaptureScroll:function __onCaptureScroll(event){if(this.__isAnimating){return}// Check if scroll outside the overlay.
if(0<=(0,_landingPage.dom)(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":// NOTE: scrolling might happen if a scroll event is not cancellable, or
// if user pressed keys that cause scrolling (they're not prevented in
// order not to break a11y features like navigate with arrow keys).
this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},/**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */__saveScrollPosition:function __saveScrollPosition(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{// Since we don't know if is the body or html, get max.
this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)}},/**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */__restoreScrollPosition:function __restoreScrollPosition(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{// Since we don't know if is the body or html, set both.
document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;var composedParent=function composedParent(node){return node.assignedSlot||node.parentNode||node.host},composedContains=function composedContains(ancestor,descendant){for(var element=descendant;element;element=composedParent(element)){if(element===ancestor){return!0}}return!1},IronOverlayBehavior=[IronFitBehavior,IronResizableBehavior,IronOverlayBehaviorImpl];_exports.IronOverlayBehavior=IronOverlayBehavior;/**
                                                                                                       * Fired after the overlay opens.
                                                                                                       * @event iron-overlay-opened
                                                                                                       */ /**
                                                                                                           * Fired when the overlay is canceled, but before it is closed.
                                                                                                           * @event iron-overlay-canceled
                                                                                                           * @param {Event} event The closing of the overlay can be prevented
                                                                                                           * by calling `event.preventDefault()`. The `event.detail` is the original event
                                                                                                           * that originated the canceling (e.g. ESC keyboard event or click event outside
                                                                                                           * the overlay).
                                                                                                           */ /**
                                                                                                               * Fired after the overlay closes.
                                                                                                               * @event iron-overlay-closed
                                                                                                               * @param {Event} event The `event.detail` is the `closingReason` property
                                                                                                               * (contains `canceled`, whether the overlay was canceled).
                                                                                                               */var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};_exports.$ironOverlayBehavior=ironOverlayBehavior;var NeonAnimatableBehavior={properties:{/**
     * Animation configuration. See README for more info.
     */animationConfig:{type:Object},/**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */entryAnimation:{observer:"_entryAnimationChanged",type:String},/**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */exitAnimation:{observer:"_exitAnimationChanged",type:String}},_entryAnimationChanged:function _entryAnimationChanged(){this.animationConfig=this.animationConfig||{};this.animationConfig.entry=[{name:this.entryAnimation,node:this}]},_exitAnimationChanged:function _exitAnimationChanged(){this.animationConfig=this.animationConfig||{};this.animationConfig.exit=[{name:this.exitAnimation,node:this}]},_copyProperties:function _copyProperties(config1,config2){// shallowly copy properties from config2 to config1
for(var property in config2){config1[property]=config2[property]}},_cloneConfig:function _cloneConfig(config){var clone={isClone:!0};this._copyProperties(clone,config);return clone},_getAnimationConfigRecursive:function _getAnimationConfigRecursive(type,map,allConfigs){if(!this.animationConfig){return}if(this.animationConfig.value&&"function"===typeof this.animationConfig.value){this._warn(this._logf("playAnimation","Please put 'animationConfig' inside of your components 'properties' object instead of outside of it."));return}// type is optional
var thisConfig;if(type){thisConfig=this.animationConfig[type]}else{thisConfig=this.animationConfig}if(!Array.isArray(thisConfig)){thisConfig=[thisConfig]}// iterate animations and recurse to process configurations from child nodes
if(thisConfig){for(var config,index=0;config=thisConfig[index];index++){if(config.animatable){config.animatable._getAnimationConfigRecursive(config.type||type,map,allConfigs)}else{if(config.id){var cachedConfig=map[config.id];if(cachedConfig){// merge configurations with the same id, making a clone lazily
if(!cachedConfig.isClone){map[config.id]=this._cloneConfig(cachedConfig);cachedConfig=map[config.id]}this._copyProperties(cachedConfig,config)}else{// put any configs with an id into a map
map[config.id]=config}}else{allConfigs.push(config)}}}}},/**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */getAnimationConfig:function getAnimationConfig(type){var map={},allConfigs=[];this._getAnimationConfigRecursive(type,map,allConfigs);// append the configurations saved in the map to the array
for(var key in map){allConfigs.push(map[key])}return allConfigs}};_exports.NeonAnimatableBehavior=NeonAnimatableBehavior;var neonAnimatableBehavior={NeonAnimatableBehavior:NeonAnimatableBehavior};_exports.$neonAnimatableBehavior=neonAnimatableBehavior;var NeonAnimationRunnerBehaviorImpl={_configureAnimations:function _configureAnimations(configs){var results=[],resultsToPlay=[];if(0<configs.length){for(var config,index=0,neonAnimation;config=configs[index];index++){neonAnimation=document.createElement(config.name);// is this element actually a neon animation?
if(neonAnimation.isNeonAnimation){var result=null;// Closure compiler does not work well with a try / catch here.
// .configure needs to be explicitly defined
if(!neonAnimation.configure){/**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */neonAnimation.configure=function(config){return null}}result=neonAnimation.configure(config);resultsToPlay.push({result:result,config:config,neonAnimation:neonAnimation})}else{console.warn(this.is+":",config.name,"not found!")}}}for(var i=0;i<resultsToPlay.length;i++){var _result=resultsToPlay[i].result,_config=resultsToPlay[i].config,_neonAnimation=resultsToPlay[i].neonAnimation;// configuration or play could fail if polyfills aren't loaded
try{// Check if we have an Effect rather than an Animation
if("function"!=typeof _result.cancel){_result=document.timeline.play(_result)}}catch(e){_result=null;console.warn("Couldnt play","(",_config.name,").",e)}if(_result){results.push({neonAnimation:_neonAnimation,config:_config,animation:_result})}}return results},_shouldComplete:function _shouldComplete(activeEntries){for(var finished=!0,i=0;i<activeEntries.length;i++){if("finished"!=activeEntries[i].animation.playState){finished=!1;break}}return finished},_complete:function _complete(activeEntries){for(var i=0;i<activeEntries.length;i++){activeEntries[i].neonAnimation.complete(activeEntries[i].config)}for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.cancel()}},/**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */playAnimation:function playAnimation(type,cookie){var configs=this.getAnimationConfig(type);if(!configs){return}this._active=this._active||{};if(this._active[type]){this._complete(this._active[type]);delete this._active[type]}var activeEntries=this._configureAnimations(configs);if(0==activeEntries.length){this.fire("neon-animation-finish",cookie,{bubbles:!1});return}this._active[type]=activeEntries;for(var i=0;i<activeEntries.length;i++){activeEntries[i].animation.onfinish=function(){if(this._shouldComplete(activeEntries)){this._complete(activeEntries);delete this._active[type];this.fire("neon-animation-finish",cookie,{bubbles:!1})}}.bind(this)}},/**
   * Cancels the currently running animations.
   */cancelAnimation:function cancelAnimation(){for(var k in this._active){var entries=this._active[k];for(var j in entries){entries[j].animation.cancel()}}this._active={}}};/** @polymerBehavior */_exports.NeonAnimationRunnerBehaviorImpl=NeonAnimationRunnerBehaviorImpl;var NeonAnimationRunnerBehavior=[NeonAnimatableBehavior,NeonAnimationRunnerBehaviorImpl];_exports.NeonAnimationRunnerBehavior=NeonAnimationRunnerBehavior;var neonAnimationRunnerBehavior={NeonAnimationRunnerBehaviorImpl:NeonAnimationRunnerBehaviorImpl,NeonAnimationRunnerBehavior:NeonAnimationRunnerBehavior};_exports.$neonAnimationRunnerBehavior=neonAnimationRunnerBehavior;var PaperButtonBehaviorImpl={properties:{/**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     *
     * @attribute elevation
     * @type number
     * @default 1
     */elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function _calculateElevation(){var e=1;if(this.disabled){e=0}else if(this.active||this.pressed){e=4}else if(this.receivedFocusFromKeyboard){e=3}this._setElevation(e)},_computeKeyboardClass:function _computeKeyboardClass(receivedFocusFromKeyboard){this.toggleClass("keyboard-focus",receivedFocusFromKeyboard)},/**
   * In addition to `IronButtonState` behavior, when space key goes down,
   * create a ripple down effect.
   *
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){_landingPage.IronButtonStateImpl._spaceKeyDownHandler.call(this,event);// Ensure that there is at most one ripple when the space key is held down.
if(this.hasRipple()&&1>this.getRipple().ripples.length){this._ripple.uiDownAction()}},/**
   * In addition to `IronButtonState` behavior, when space key goes up,
   * create a ripple up effect.
   *
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){_landingPage.IronButtonStateImpl._spaceKeyUpHandler.call(this,event);if(this.hasRipple()){this._ripple.uiUpAction()}}};/** @polymerBehavior */_exports.PaperButtonBehaviorImpl=PaperButtonBehaviorImpl;var PaperButtonBehavior=[_landingPage.IronButtonState,_landingPage.IronControlState,_landingPage.PaperRippleBehavior,PaperButtonBehaviorImpl];_exports.PaperButtonBehavior=PaperButtonBehavior;var paperButtonBehavior={PaperButtonBehaviorImpl:PaperButtonBehaviorImpl,PaperButtonBehavior:PaperButtonBehavior};_exports.$paperButtonBehavior=paperButtonBehavior;var template$1=(0,_landingPage.html)(_templateObject3_741ab6d0ff1411eda1bf05236946c202());template$1.setAttribute("strip-whitespace","");/**
                                                 Material design:
                                                 [Buttons](https://www.google.com/design/spec/components/buttons.html)
                                                                                               `paper-button` is a button. When the user touches the button, a ripple effect
                                                 emanates from the point of contact. It may be flat or raised. A raised button is
                                                 styled with a shadow.
                                                                                               Example:
                                                                                                   <paper-button>Flat button</paper-button>
                                                   <paper-button raised>Raised button</paper-button>
                                                   <paper-button noink>No ripple effect</paper-button>
                                                   <paper-button toggles>Toggle-able button</paper-button>
                                                                                               A button that has `toggles` true will remain `active` after being clicked (and
                                                 will have an `active` attribute set). For more information, see the
                                                 `IronButtonState` behavior.
                                                                                               You may use custom DOM in the button body to create a variety of buttons. For
                                                 example, to create a button with an icon and some text:
                                                                                                   <paper-button>
                                                     <iron-icon icon="favorite"></iron-icon>
                                                     custom button content
                                                   </paper-button>
                                                                                               To use `paper-button` as a link, wrap it in an anchor tag. Since `paper-button`
                                                 will already receive focus, you may want to prevent the anchor tag from
                                                 receiving focus as well by setting its tabindex to -1.
                                                                                                   <a href="https://www.polymer-project.org/" tabindex="-1">
                                                     <paper-button raised>Polymer Project</paper-button>
                                                   </a>
                                                                                               ### Styling
                                                                                               Style the button with CSS as you would a normal DOM element.
                                                                                                   paper-button.fancy {
                                                     background: green;
                                                     color: yellow;
                                                   }
                                                                                                   paper-button.fancy:hover {
                                                     background: lime;
                                                   }
                                                                                                   paper-button[disabled],
                                                   paper-button[toggles][active] {
                                                     background: red;
                                                   }
                                                                                               By default, the ripple is the same color as the foreground at 25% opacity. You
                                                 may customize the color using the `--paper-button-ink-color` custom property.
                                                                                               The following custom properties and mixins are also available for styling:
                                                                                               Custom property | Description | Default
                                                 ----------------|-------------|----------
                                                 `--paper-button-ink-color` | Background color of the ripple | `Based on the button's color`
                                                 `--paper-button` | Mixin applied to the button | `{}`
                                                 `--paper-button-disabled` | Mixin applied to the disabled button. Note that you can also use the `paper-button[disabled]` selector | `{}`
                                                 `--paper-button-flat-keyboard-focus` | Mixin applied to a flat button after it's been focused using the keyboard | `{}`
                                                 `--paper-button-raised-keyboard-focus` | Mixin applied to a raised button after it's been focused using the keyboard | `{}`
                                                                                               @demo demo/index.html
                                                 */(0,_landingPage.Polymer)({_template:template$1,is:"paper-button",behaviors:[PaperButtonBehavior],properties:{/**
     * If true, the button should be styled with a shadow.
     */raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function _calculateElevation(){if(!this.raised){this._setElevation(0)}else{PaperButtonBehaviorImpl._calculateElevation.apply(this)}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    Event param: {{node: Object}} detail Contains the animated node.
    */});var PaperDialogBehaviorImpl={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{/**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},/**
   * @return {void}
   */ready:function ready(){// Only now these properties can be read.
this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.__readied=!0},_modalChanged:function _modalChanged(modal,readied){// modal implies noCancelOnOutsideClick, noCancelOnEscKey and withBackdrop.
// We need to wait for the element to be ready before we can read the
// properties values.
if(!readied){return}if(modal){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick;this.__prevNoCancelOnEscKey=this.noCancelOnEscKey;this.__prevWithBackdrop=this.withBackdrop;this.noCancelOnOutsideClick=!0;this.noCancelOnEscKey=!0;this.withBackdrop=!0}else{// If the value was changed to false, let it false.
this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick;this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey;this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop}},_updateClosingReasonConfirmed:function _updateClosingReasonConfirmed(confirmed){this.closingReason=this.closingReason||{};this.closingReason.confirmed=confirmed},/**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */_onDialogClick:function _onDialogClick(event){// Search for the element with dialog-confirm or dialog-dismiss,
// from the root target until this (excluded).
for(var path=(0,_landingPage.dom)(event).path,i=0,l=path.indexOf(this),target;i<l;i++){target=path[i];if(target.hasAttribute&&(target.hasAttribute("dialog-dismiss")||target.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(target.hasAttribute("dialog-confirm"));this.close();event.stopPropagation();break}}}};/** @polymerBehavior */_exports.PaperDialogBehaviorImpl=PaperDialogBehaviorImpl;var PaperDialogBehavior=[IronOverlayBehavior,PaperDialogBehaviorImpl];_exports.PaperDialogBehavior=PaperDialogBehavior;var paperDialogBehavior={PaperDialogBehaviorImpl:PaperDialogBehaviorImpl,PaperDialogBehavior:PaperDialogBehavior};_exports.$paperDialogBehavior=paperDialogBehavior;var $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML="<dom-module id=\"paper-dialog-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);(0,_landingPage.Polymer)({_template:(0,_landingPage.html$1)(_templateObject4_741ab6d0ff1411eda1bf05236946c202()),is:"paper-dialog",behaviors:[PaperDialogBehavior,NeonAnimationRunnerBehavior],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function _renderOpened(){this.cancelAnimation();this.playAnimation("entry")},_renderClosed:function _renderClosed(){this.cancelAnimation();this.playAnimation("exit")},_onNeonAnimationFinish:function _onNeonAnimationFinish(){if(this.opened){this._finishRenderOpened()}else{this._finishRenderClosed()}}});var ProfilePage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(ProfilePage,_PolymerElement);function ProfilePage(){babelHelpers.classCallCheck(this,ProfilePage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ProfilePage).apply(this,arguments))}babelHelpers.createClass(ProfilePage,[{key:"_onContactInfoClick",value:function _onContactInfoClick(){this.dispatchEvent(new CustomEvent("show-contact"))}}],[{key:"template",get:function get(){return(0,_landingPage.html$1)(_templateObject5_741ab6d0ff1411eda1bf05236946c202())}},{key:"is",get:function get(){return"profile-page"}}]);return ProfilePage}(_landingPage.PolymerElement);window.customElements.define(ProfilePage.is,ProfilePage)});