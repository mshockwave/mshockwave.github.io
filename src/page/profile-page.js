import { PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '../../node_modules/@polymer/iron-icon/iron-icon.js';
import '../../node_modules/@polymer/iron-icons/communication-icons.js';
import '../../node_modules/@polymer/paper-button/paper-button.js';
import '../../node_modules/@polymer/paper-styles/color.js';
import '../../node_modules/@polymer/paper-dialog/paper-dialog.js';
import { html } from '../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
/*
 * @customElement
 * @polymer
 */
class ProfilePage extends PolymerElement {
  static get template() {
    return html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        max-width: 70%;
      }

      p span {
        font-size: 1.4em;
        font-weight: 300;
        line-height: 1.4;
      }

      paper-button#contact {
        background-color: var(--paper-blue-700);
        color: white;
        font-size: 1.1em;
      }

      #thumbnail {
        width: 37%;
        margin-bottom: 0;
      }
      #bio {
        margin-left: 3%;
        width: 60%;
      }

      /* Mobile Page */
      @media (max-width: 768px) {
        :host {
          max-width: 100%;
        }

        #thumbnail {
          width: 70%;
          margin-bottom: 30px;
        }
        #bio {
          margin-left: 0;
          width: 80%;
        }
      }
    </style>

    <div class="layout horizontal start wrap center-justified">
      <img id="thumbnail" src="../../images/formal3-small.jpg">
      <p id="bio">
        <span>Min-Yih Hsu (Bekket McClane)</span>
        <br><br>
        <span>
          Research Assistant in Department of Computer Science, National Tsing-Hua University, Hsinchu, Taiwan
        </span>
        <br><br>
        <paper-button id="contact" raised="" on-tap="_onContactInfoClick">
          <iron-icon icon="communication:mail-outline"></iron-icon>
          &nbsp;Contact Info
        </paper-button>
        <br><br>
        <br><br>
        <span>
          I have been studying for the bachelor program of computer science at National Tsing Hua University since 2014. I'm currently a research assistant in Programming Language Lab, Department of Computer Science, National Tsing Hua University, Taiwan. Advised by Prof. Jenq-Kuen Lee. I show great interests in embedded system and compiler design. My research work includes extending LLVM for OpenCL 2.0 flow on GPGPUSim, participating in the proposal writeup with a new DSP feature set for on-going Khronos OpenCL 3 on DSP Systems (It includes fixed-point feature sets, complex type, and DSP performance feature set), and devising the reference design in extending khronos OpenCL 2.2 and SPIR-V to accommodate OpenCL 3 with DSP fixed-point feature Set.
        </span>
      </p>
    </div>
`;
  }

  static get is() { return 'profile-page'; }

  _onContactInfoClick() {
    this.dispatchEvent(new CustomEvent('show-contact'));
  }
}

window.customElements.define(ProfilePage.is, ProfilePage);