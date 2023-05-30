define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js","../../node_modules/@polymer/iron-icon/iron-icon.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-item/paper-item.js","../../node_modules/@polymer/paper-styles/color.js","../../node_modules/@polymer/polymer/lib/utils/html-tag.js"],function(_polymerElement,_ironFlexLayoutClasses,_ironIcon,_ironIcons,_paperItem,_color,_htmlTag){"use strict";class PublicationPage extends _polymerElement.PolymerElement{static get template(){return _htmlTag.html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        width: 100%;
      }

      #container {
        padding: 30px 20vw;
      }

      @media (max-width: 768px) {
        #container {
          padding: 15px 5vw;
        }
      }

      a,
      a:visited {
        text-transform: none;
        text-decoration: none;
        color: unset;
      }

      paper-item {
        margin: 15px;
        --paper-item: {
          font-size: 1.4em;
          font-weight: 300;
          line-height: 1.4;
          border-left: 3px solid var(--paper-orange-800);
        };
      }

      h1 {
        font-weight: 400;
      }
    </style>

    <div id="container" class="layout vertical start">
      <h1>Book</h1>
      <paper-item>
        <span>
        <u>Min-Yih Hsu</u>. “LLVM Techniques, Tips, and Best Practices Clang and Middle-End Libraries: Design Powerful and Reliable Compilers Using the Latest Libraries and Tools from LLVM”. <i>Packt Publishing</i> (2021)
        </span>
      </paper-item>
      <h1>Paper and Talk</h1>
      <paper-item>
        <span>
        <u>Min-Yih Hsu</u>, David Gens, Michael Franz. “MCA Daemon: Hybrid Throughput Analysis Beyond Basic Blocks”. <i>EuroLLVM Developers Meeting</i> (2022)
        </span>
      </paper-item>
      <paper-item>
        <span>
        <u>Min-Yih Hsu</u>, Stan Kvasov, and Vince Del Vecchio. “Souper-Charging Peepholes with Target Machine Info”. <i>LLVM Developers Meeting</i> (2019)
        </span>
      </paper-item>
      <paper-item>
        <span>
        Chun-Chieh Yang, Shao-Chung Wang, <u>Min-Yih Hsu</u>, and Jenq-Kuen Lee et al. "OpenCL 2.0 Compiler Adaptation on LLVM for PTX Simulators."<i>THE INTERNATIONAL WORKSHOP ON EMBEDDED MULTICORE SYSTEMS(ICPP-EMS)</i>(2017).
        </span>
      </paper-item>
      <paper-item>
        <span>
        <u>Min-Yih Hsu</u>, and Jenq-Kuen Lee. "Hydra LLVM: Instruction Selection with Threads."<i>European LLVM Developers Meeting</i>(2017).
        </span>
      </paper-item>
      <paper-item>
        <span>
        Li Wang, Shao-Chung Wang, <u>Min-Yih Hsu</u>, and Jenq-Kuen Lee et al. "Analyzing OpenCL 2.0 Workloads Using a Heterogeneous CPU-GPU Simulator." <i>IEEE International Symposium on Performance Analysis of Systems and Software </i>(2017).
        </span>
      </paper-item>
      <paper-item>
        <span>
        Chun-Chieh Yang, Shao-Chung Wang, <u>Min-Yi Hsu</u>, Yuan-Shin Hwang, and Jenq-Kuen Lee. "Support OpenCL 2.0 Compiler on LLVM for Multi-Core Simulations." Submitted to <i>European LLVM Developers Meeting</i> (2017)
        </span>
      </paper-item>

      <h1>Blog</h1>
      <paper-item>
        <span>
        M68k LLVM Development Blog
        <br>
        <a href="https://m680x0.github.io/blog/" target="_blank" style="margin-left: 0.5em;">
          Link&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        </span>
      </paper-item>
      <paper-item>
        <span>
        Medium
        <br>
        <a href="https://medium.com/@mshockwave" target="_blank" style="margin-left: 0.5em;">
          Link&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        </span>
      </paper-item>
      <paper-item>
        <span>
        Shockwave Base.
        <br>
        <a href="http://mshockwave.blogspot.tw/" target="_blank" style="margin-left: 0.5em;">
          Link&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        </span>
      </paper-item>
    </div>
`}static get is(){return"publication-page"}}window.customElements.define(PublicationPage.is,PublicationPage)});