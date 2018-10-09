import { PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '../../node_modules/@polymer/iron-icon/iron-icon.js';
import '../../node_modules/@polymer/iron-icons/communication-icons.js';
import '../../node_modules/@polymer/paper-button/paper-button.js';
import '../../node_modules/@polymer/paper-styles/color.js';
import '../../node_modules/@polymer/paper-dialog/paper-dialog.js';
import '../../node_modules/@polymer/paper-icon-button/paper-icon-button.js';
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
        font-size: 1.3em;
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
        <span><b>Min-Yih Hsu</b> (Bekket McClane)</span>
        <br><br>
        <span>
          Ph.D. Student in Donald Bren School of Information and Computer Science, University of California, Irvine.
        </span>
        <br><br>
        <paper-button id="contact" raised="" on-tap="_onContactInfoClick">
          <iron-icon icon="communication:mail-outline"></iron-icon>
          &nbsp;Contact Info
        </paper-button>
        <br><br><br>
        <span>
          I'm currently a Ph.D. student major in computer science in UCI, advised by Prof. Michael Franz.&nbsp;
          I received my Bachelor degree in computer science from National Tsing Hua University, Taiwan, in 2018.
          <br><br>
          My research interests includes: 
          <b>Compilers, High Performance Computing, Security and System Software</b>.
        </span>
        <span>
          During my undergraduate career, I've published several works regarding LLVM and OpenCL.
          I have strong compiler background, especially LLVM development, and system programming skills.
        </span>
        <br><br>
        <span>
          In my leisure time, I like jogging, coffee brewing, 
          and listening Nightcore<a href="https://en.wikipedia.org/wiki/Nightcore" target="_blank"><paper-icon-button icon="launch"></paper-icon-button></a> music.
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
