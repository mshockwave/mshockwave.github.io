import { PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '../../node_modules/@polymer/iron-icon/iron-icon.js';
import '../../node_modules/@polymer/iron-icons/iron-icons.js';
import '../../node_modules/@polymer/paper-item/paper-item.js';
import '../../node_modules/@polymer/paper-styles/color.js';
import { html } from '../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
class PublicationPage extends PolymerElement {
  static get template() {
    return html`
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
      <h1>Papers</h1>
      <paper-item>
        <span>
        Chun-Chieh Yang, Shao-Chung Wang, Min-Yih Hsu, and Jenq-Kuen Lee et al. "OpenCL 2.0 Compiler Adaptation on LLVM for PTX Simulators."<i>THE INTERNATIONAL WORKSHOP ON EMBEDDED MULTICORE SYSTEMS(ICPP-EMS)</i>(2017).
        </span>
      </paper-item>
      <paper-item>
        <span>
        Min-Yih Hsu, and Jenq-Kuen Lee. "Hydra LLVM: Instruction Selection with Threads."<i>European LLVM Developers Meeting</i>(2017).
        </span>
      </paper-item>
      <paper-item>
        <span>
        Li Wang, Shao-Chung Wang, Min-Yih Hsu, and Jenq-Kuen Lee et al. "Analyzing OpenCL 2.0 Workloads Using a Heterogeneous CPU-GPU Simulator." <i>IEEE International Symposium on Performance Analysis of Systems and Software </i>(2017).
        </span>
      </paper-item>
      <paper-item>
        <span>
        Chun-Chieh Yang, Shao-Chung Wang, Min-Yi Hsu, Yuan-Shin Hwang, and Jenq-Kuen Lee. "Support OpenCL 2.0 Compiler on LLVM for Multi-Core Simulations." Submitted to <i>European LLVM Developers Meeting</i> (2017)
        </span>
      </paper-item>

      <h1>Blog</h1>
      <paper-item>
        <span>
        Shockwave Base.
        <br>
        <a href="http://mshockwave.blogspot.tw/" target="_blank" style="margin-left: 0.5em;">
          Link&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <br>
        (Since 2014)
        </span>
      </paper-item>
    </div>
`;
  }

  static get is(){ return 'publication-page'; }
}

window.customElements.define(PublicationPage.is, PublicationPage);
