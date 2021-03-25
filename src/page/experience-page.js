import { PolymerElement } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../../node_modules/@polymer/app-layout/app-grid/app-grid-style.js';
import '../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js';
import '../../node_modules/@polymer/iron-icon/iron-icon.js';
import '../../node_modules/@polymer/iron-icons/iron-icons.js';
import '../../node_modules/@polymer/iron-icons/av-icons.js';
import '../../node_modules/@polymer/paper-styles/color.js';
import '../../node_modules/@polymer/paper-card/paper-card.js';
import '../../node_modules/@polymer/paper-icon-button/paper-icon-button.js';
import { html } from '../../node_modules/@polymer/polymer/lib/utils/html-tag.js';
class ExperiencePage extends PolymerElement {
  static get template() {
    return html`
    <style include="iron-flex iron-flex-alignment app-grid-style">
      :host {
        display: block;
        width: 70%;

        --app-grid-columns: 2;
        --app-grid-expandible-item-columns: 2;
        --app-grid-gutter: 10px;
      }

      a,
      a:visited {
        color: unset;
        text-decoration: unset;
      }

      .app-grid > paper-card{
        margin-bottom: 14px;
      }
      .app-grid > h1,
      .app-grid > [expand-item],
      .app-grid > [chrono-title],
      .app-grid > [chrono-divide-line] {
        @apply --app-grid-expandible-item;
      }

      @media (max-width: 768px) {
        :host {
          width: 80%;

          --app-grid-columns: 1;
          --app-grid-expandible-item-columns: 1;
          --app-grid-gutter: 0;
        }

        [chrono-title] {
          width: 100%;
        }
      }

      [chrono-title] {
        color: var(--paper-grey-700);
        font-size: 1.8em;
        font-weight: 300;
        margin-bottom: 20px;

        border-left: 3px solid var(--paper-pink-500);
        padding-left: 8px;
      }

      [chrono-divide-line] {
        display: block;
        height: 30px;
      }

      [sub-title] {
        color: var(--paper-grey-600);
        font-size: 1.2em;
        margin-bottom: 10px;
      }

      paper-card {
        --paper-card-content: {
          @apply --layout-start;
        };
      }
      paper-card[expand-item] {
        --paper-card-header: {
          text-align: center;
        };
        --paper-card-content: {
          @apply --layout-center;
        };
      }
    </style>

    <div list-container="" class="app-grid">
      <h1 style="margin-top: 0; text-align:center; margin-bottom: 0.7em;">
        Experience
      </h1>

      <!-- 2021 -->
      <span chrono-title="">2021</span>
      <paper-card expand-item="" heading="LLVM M68k Backend Code Owner">
        <div class="card-content layout vertical">
          <span sub-title="">
            Code ownder and primary maintainer of M68k (Motorola 68000 series CPU) backend in LLVM
            <a href="https://github.com/llvm/llvm-project/tree/main/llvm/lib/Target/M68k" target="_blank">
              <paper-icon-button icon="launch" style="margin: 0px -8px"></paper-icon-button>
            </a>
          </span>
        </div>
      </paper-card>

      <!-- 2020 -->
      <span chrono-title="">2020</span>
      <paper-card expand-item="" heading="Compiler Engineer Intern">
        <div class="card-content layout vertical">
          <span sub-title="">PlayStation (Sony Interactive Entertainment), San Mateo, CA. June ~ September</span>
          <span sub-title="">
            Working on the PlayStation toolchain and open source LLVM compiler.
        </div>
      </paper-card>

      <!-- 2019 -->
      <span chrono-title="">2019</span>
      <paper-card expand-item="" heading="Speaker">
        <div class="card-content layout vertical">
          <span sub-title="">
            LLVM Dev Meeting 2019, San Jose, CA
          </span>
          <span sub-title="">
            <i>Souper-Charging Peepholes with Target Machine Info</i>
            <a href="https://www.slideshare.net/bekketmcclane/soupercharging-peepholes-with-target-machine-info-186029829" target="_blank" tabindex="-1">
              <paper-icon-button icon="launch" style="margin: 0px -8px"></paper-icon-button>
            </a>
            <a href="https://youtu.be/5eSOWM0upN8" target="_blank" tabindex="-1">
              <paper-icon-button icon="av:video-library" style="margin-left: -8px;"></paper-icon-button>
            </a>
          </span>
        </div>
      </paper-card>
      <paper-card expand-item="" heading="Compiler Engineer Intern">
        <div class="card-content layout vertical">
          <span sub-title="">MediaTek USA, Woburn, MA. June ~ September</span>
          <span sub-title="">
            Working on souper<a href="https://github.com/google/souper" target="_blank" tabindex="-1"><paper-icon-button icon="launch" style="margin-left: -8px;"></paper-icon-button></a>
            , a LLVM-based super-optimizer</span>
        </div>
      </paper-card>
      <!-- 2018 -->
      <span chrono-title="">2018</span>
      <paper-card expand-item="" heading="Started as Ph.D. Student in Computer Science">
        <div class="card-content layout vertical">
          <span sub-title="">University of California, Irvine (UCI), CA</span>
          <span sub-title="">
            Advised by Prof. Michael Franz
            <a href="https://www.michaelfranz.com/" target="_blank" tabindex="-1"><paper-icon-button icon="launch"></paper-icon-button></a>
          </span>
        </div>
      </paper-card>
      <paper-card expand-item="" heading="Compiler Engineer Intern">
        <div class="card-content layout vertical">
          <span sub-title="">MediaTek USA, Woburn, MA. June ~ September</span>
          <span sub-title="">LLVM-based Compiler Development for DSP processors</span>
        </div>
      </paper-card>
      <!-- Before 2018 -->
      <paper-card expand-item="" heading="B.S. in Computer Science">
        <div class="card-content layout vertical">
          <span sub-title="">National Tsing Hua University. Hsinchu, Taiwan</span>
          <span sub-title="">
            Advised by Prof. Jenq-Kuen Lee
            <a href="http://pllab.cs.nthu.edu.tw/~jklee/" target="_blank" tabindex="-1"><paper-icon-button icon="launch"></paper-icon-button></a>
          </span>
          <span sub-title="">Sep 2014 ~ June 2018</span>
        </div>
      </paper-card>
      
      <span chrono-title="">2017</span>
      <paper-card expand-item="" heading="Compiler Engineer Intern">
        <div class="card-content layout vertical">
          <span sub-title="">MediaTek USA, Woburn, MA. July ~ October</span>
          <span sub-title="">DSP Compiler Development and Optimization.</span>
        </div>
      </paper-card>
      <paper-card heading="Speaker">
        <div class="card-content layout vertical">
          <span sub-title="">
            EuroLLVM 2017, Saarbrücken, Germany, March
          </span>
          <span sub-title="">
            <i>Hydra LLVM: Instruction Selection with Threads</i>(Poster)
          </span>
        </div>
      </paper-card>
      <paper-card heading="Speaker">
        <div class="card-content layout vertical">
          <span sub-title="">
            SITCON 2017, Taipei, Taiwan, March
          </span>
          <span sub-title="">
            <i>From V8 to Modern Compilers</i>(Talk)
          </span>
        </div>
      </paper-card>

      <div chrono-divide-line=""></div>
      <span chrono-title="">2016</span>
      <paper-card heading="Speaker">
        <div class="card-content layout vertical">
          <span sub-title="">
            SITCON 2016, Taipei, Taiwan, March
          </span>
          <span sub-title="">
            <i>War of Native Speed on Web</i>(Talk)
          </span>
        </div>
      </paper-card>

      <div chrono-divide-line=""></div>
      <span chrono-title="">2015</span>
      <paper-card heading="Speaker">
        <div class="card-content layout vertical">
          <span sub-title="">
            SITCON 2015, Taipei, Taiwan, March
          </span>
          <span sub-title="">
            <i>From Android NDK To AOSP</i>(Talk)
          </span>
        </div>
      </paper-card>
    </div>
`;
  }

  static get is(){ return 'experience-page'; }
}

window.customElements.define(ExperiencePage.is, ExperiencePage);
