define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/polymer/lib/elements/dom-if.js","../../node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js","../../node_modules/@polymer/app-layout/app-header/app-header.js","../../node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js","../../node_modules/@polymer/app-layout/app-scroll-effects/app-scroll-effects.js","../../node_modules/@polymer/app-route/app-route.js","../../node_modules/@polymer/app-route/app-location.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js","../../node_modules/@polymer/iron-pages/iron-pages.js","../../node_modules/@polymer/iron-media-query/iron-media-query.js","../../node_modules/@polymer/paper-styles/color.js","../../node_modules/@polymer/paper-tabs/paper-tabs.js","../../node_modules/@polymer/paper-tabs/paper-tab.js","../element/vertical-resize-title.js","./profile-page.js","./experience-page.js","./project-page.js","./publication-page.js","../../node_modules/@polymer/polymer/lib/utils/html-tag.js"],function(_polymerElement,_domIf,_appHeaderLayout,_appHeader,_appToolbar,_appScrollEffects,_appRoute,_appLocation,_ironFlexLayout,_ironFlexLayoutClasses,_ironPages,_ironMediaQuery,_color,_paperTabs,_paperTab,_verticalResizeTitle,_profilePage,_experiencePage,_projectPage,_publicationPage,_htmlTag){"use strict";//import { importHref } from '../../node_modules/@polymer/polymer/lib/utils/import-href.js';
/**
 * @customElement
 * @polymer
 */class LandingPage extends _polymerElement.PolymerElement{static get template(){return _htmlTag.html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;

        --main-banner-color: white;
        --main-banner-background: #607D8B;
        --condensed-banner-background: #AB47BC;
      }

      app-toolbar {
        height: 64px;
        text-align: center;
      }
      .tall {
        height: 286px;
      }

      app-header {
        @apply --layout-horizontal;
        @apply --layout-center;
        background-color: var(--main-banner-background);
        color: var(--main-banner-color);
        height: 350px;
        --app-header-background-rear-layer: {
          background-color: var(--condensed-banner-background);
        };
      }

      paper-tabs {
        margin-left: 32px;
        margin-bottom: 10px;
      }
      paper-tab {
        --paper-tab-content: {
          font-size: 1.6em;
          font-weight: 300;
          margin: 0 10px;
        };
      }
      paper-tab a,
      paper-tab a:visited {
        color: inherit;
        text-transform: inherit;
        text-decoration: inherit;
        height: unset;
      }

      [main-title]{
        font-size: 3em;
        font-weight: 300;
        margin-bottom: 20px;
        margin-top: 5px;
      }
      /* Large Mobile Screen */
      @media (max-width: 425px) {
        [main-title] {
          font-size: 2.8em;
        }
      }
      /* Medium Mobile Screen */
      @media (max-width: 375px) {
        [main-title] {
          font-size: 2.5em;
        }
      }
      /* Small Mobile Screen */
      @media (max-width: 320px) {
        [main-title] {
          font-size: 2em;
        }
      }
      [sub-title] {
        font-size: 1.7em;
        font-weight: 200;
      }

      iron-pages {
        width: 100vw;
        background-color: var(--paper-grey-100);
      }

      #landingContent {
        @apply --layout-vertical;
        @apply --layout-center;
        width: 100%;
        padding-top: 40px;
      }
      #landingContent > *{
        margin-bottom: 40px;
      }

      paper-dialog span {
        font-size: 1.2em;
      }
    </style>

    <app-location route="{{_appRoute}}"></app-location>
    <app-route route="[[_appRoute]]" pattern="/:page" data="{{_routeData}}"></app-route>

    <!-- Mobile Page Observer -->
    <iron-media-query query="(max-width: 768px)" query-matches="{{_isMobile}}"></iron-media-query>
    
    <!-- Put here to get higher z-index -->
    <paper-dialog id="contactDialog" class="layout vertical start">
      <span> Email: </span>
      <img src="../../images/email-uci.png" style="height: 2.0em;">
      <img src="../../images/email-private.png" style="height: 1.4em;">
      
      <span>
        LinkedIn: 
        <a href="https://www.linkedin.com/in/bekketmcclane" target="_blank">
          https://www.linkedin.com/in/bekketmcclane
        </a>
      </span>
    </paper-dialog>

    <app-header-layout fullbleed="">
      <app-header slot="header" fixed="" condenses="" effects="blend-background vertical-resize-title waterfall">
        <app-toolbar>
          <paper-tabs bottom-item="" selected="{{_currentPage}}" attr-for-selected="name" scrollable="" hide-scroll-buttons="">
            <paper-tab link="" name="profile">
              <a href="/profile">Profile</a>
            </paper-tab>
            <paper-tab link="" name="publications">
              <a href="/publications">Publications</a>
            </paper-tab>
            <paper-tab link="" name="projects">
              <a href="/projects">Projects</a>
            </paper-tab>
          </paper-tabs>
          <div condensed-title="">
            <dom-if if="[[!_isMobile]]" restamp="">
              <template>
                [[_bannerText.condensedTitle]]
              </template>
            </dom-if>
          </div>
        </app-toolbar>

        <div class="tall layout vertical center center-justified">
          <h1 main-title="">
            [[_bannerText.title]]
          </h1>
          <span sub-title="" style="margin-bottom: 10px;">
            [[_bannerText.subTitle]]
          </span>
        </div>
      </app-header>

      <iron-pages selected="[[_currentPage]]" attr-for-selected="name">
        <div id="landingContent" name="profile">
          <profile-page on-show-contact="_onShowContact"></profile-page>
          <experience-page></experience-page>
        </div>

        <publication-page name="publications"></publication-page>

        <project-page name="projects"></project-page>
      </iron-pages>
    </app-header-layout>
`}static get is(){return"landing-page"}_onShowContact(){this.$.contactDialog.open()}static get properties(){return{_currentPage:{type:Number,value:0},_bannerText:{type:Object,computed:"_computeBannerText(_currentPage)"}}}static get _lazyLoadedFiles(){return{profile:"",publications:"publication-page.html",projects:"project-page.html"}}static get observers(){return["_onPageChanged(_currentPage)","_onRoutePageChanged(_routeData.page)"]}get _appHeader(){return this.shadowRoot.querySelector("app-header")}_computeBannerText(pageName){switch(pageName){case"profile":return{title:"{ Believe in Code }",subTitle:"Min-Yih Hsu",condensedTitle:"Profile"};case"publications":return{title:"/* Publications */",subTitle:"",condensedTitle:"Publications"};case"projects":return{title:"<<< Projects >>>",subTitle:"",condensedTitle:"Projects"};default:return{title:"Dummy",subTitle:"dummy",condensedTitle:"DUMMY"};}}_onPageChanged(pageName){// Lazily Load Fragments
/*
    const file = LandingPage._lazyLoadedFiles[pageName];
    if(file && file.length > 0){
      importHref(
        this.resolveUrl(file),
        null, null,
        true
      );
    }
    */ // Update Theme
switch(pageName){case"profile":{this.updateStyles({"--main-banner-background":"#607D8B","--main-banner-color":"white","--condensed-banner-background":"#AB47BC"});break}case"publications":{this.updateStyles({"--main-banner-background":"#00796B","--main-banner-color":"white","--condensed-banner-background":"#3F51B5"});break}case"projects":{this.updateStyles({"--main-banner-background":"#388E3C","--main-banner-color":"white","--condensed-banner-background":"#E64A19"});break}}}_onRoutePageChanged(routePage){this._currentPage=routePage||"profile"}}window.customElements.define(LandingPage.is,LandingPage)});