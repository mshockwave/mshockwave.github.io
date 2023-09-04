define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js","../../node_modules/@polymer/iron-icon/iron-icon.js","../../node_modules/@polymer/iron-icons/communication-icons.js","../../node_modules/@polymer/paper-button/paper-button.js","../../node_modules/@polymer/paper-styles/color.js","../../node_modules/@polymer/paper-dialog/paper-dialog.js","../../node_modules/@polymer/paper-icon-button/paper-icon-button.js","../../node_modules/@polymer/polymer/lib/utils/html-tag.js"],function(_polymerElement,_ironFlexLayoutClasses,_ironIcon,_communicationIcons,_paperButton,_color,_paperDialog,_paperIconButton,_htmlTag){"use strict";/*
 * @customElement
 * @polymer
 */class ProfilePage extends _polymerElement.PolymerElement{static get template(){return _htmlTag.html`
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
        <span><b>Min-Yih "Min" Hsu</b></span>
        <br><br>
        <span>
          Compiler Engineer at SiFive, California.
        </span>
        <br><br>
        <paper-button id="contact" raised="" on-tap="_onContactInfoClick">
          <iron-icon icon="communication:mail-outline"></iron-icon>
          &nbsp;Contact Info
        </paper-button>
        <br><br><br>
        <span>
          I received my <b>Ph.D. in Computer Science</b> from University of California, Irvine (UCI) in 2023; my doctoral advisor was <a href="https://www.michaelfranz.com" target="_blank">Prof.&nbsp;Dr.&nbsp;Michael&nbsp;Franz</a>.<br>
          My research interests include: 
          Compilers, Program Analysis, and System Software.
          <br>
          I received my M.S. in Computer Science from UCI in 2022.<br>
          In 2018, I received my Bachelor degree in computer science from National Tsing Hua University, Taiwan.
        </span>
        <br><br>
        <span>
          I have been <a href="https://reviews.llvm.org/p/myhsu/" target="_blank">actively contributing</a> to LLVM for over 5 years; I served on the program commitee for multiple LLVM Developer's Meetings.
          I'm also the code owner and primary maintainer of LLVM's M68k compiler backend;
          author of <a href="https://a.co/d/0AXkEdI" target="_blank"><i>LLVM Techniques, Tips, and Best Practices Clang and Middle-End Libraries</i></a>.
        </span>
        <br><br>
        <!--
        <span>
          During my undergraduate career, I've published several works regarding LLVM and OpenCL.
          I have strong compiler background, especially LLVM development, and system programming skills.
        </span>
        -->
        <span>
          In my leisure time, I like jogging, coffee brewing, 
          playing flight simulator, and riding motorcycle.
        </span>
      </p>
    </div>
`}static get is(){return"profile-page"}_onContactInfoClick(){this.dispatchEvent(new CustomEvent("show-contact"))}}window.customElements.define(ProfilePage.is,ProfilePage)});