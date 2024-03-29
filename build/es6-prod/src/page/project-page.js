define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js","../../node_modules/@polymer/iron-flex-layout/iron-flex-layout.js","../../node_modules/@polymer/iron-icon/iron-icon.js","../../node_modules/@polymer/iron-icons/iron-icons.js","../../node_modules/@polymer/paper-card/paper-card.js","../../node_modules/@polymer/paper-item/paper-item.js","../../node_modules/@polymer/paper-styles/color.js","../../node_modules/@polymer/polymer/lib/utils/html-tag.js"],function(_polymerElement,_ironFlexLayoutClasses,_ironFlexLayout,_ironIcon,_ironIcons,_paperCard,_paperItem,_color,_htmlTag){"use strict";class ProjectPage extends _polymerElement.PolymerElement{static get template(){return _htmlTag.html`
    <style include="iron-flex iron-flex-alignment">
      :host {
        display: block;
        width: 100%;
      }

      #pageContainer {
        padding: 30px 20%;
      }

      @media (max-width: 768px) {
        #pageContainer {
          padding: 30px 10%;
        }
      }

      paper-card {
        margin: 14px;
      }
      paper-card .card-content img {
        width: 10vw;
      }

      @media (max-width: 768px) {
        paper-card .card-content img {
          width: 40vw;
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
          @apply --layout-vertical;
          @apply --layout-start;
          font-size: 1.4em;
          font-weight: 300;
          line-height: 1.4;
          border-left: 3px solid var(--paper-cyan-500);
        };
      }

      h1, h2 {
        font-weight: 400;
      }

      [description]{
        color: var(--paper-grey-600);
      }

      [link] {
        margin-bottom: 1.1em;
        margin-left: 0.5em;
      }
    </style>

    <div id="pageContainer" class="layout vertical start">
      <div class="layout horizontal center center-justified wrap" style="width: 100%;">
        <paper-card>
          <div class="card-content layout vertical center">
            <img src="../../images/github-logo.png">
          </div>
          <div class="card-actions">
            <a href="https://github.com/mshockwave" target="_blank">
              <h2>
                mshockwave
                <iron-icon icon="open-in-new"></iron-icon>
              </h2>
            </a>
          </div>
        </paper-card>

        <paper-card>
          <div class="card-content layout vertical center">
            <img src="../../images/bitbucket-logo.png">
          </div>
          <div class="card-actions">
            <a href="https://bitbucket.org/mshockwave" target="_blank">
              <h2>
                mshockwave
                <iron-icon icon="open-in-new"></iron-icon>
              </h2>
            </a>
          </div>
        </paper-card>
      </div>

      <h1 style="margin-top: 1.8em;">
        Highlights
      </h1>

      <paper-item>
        <h2>
          GROSS: Research Compiler using Graph IR for Code Optimizations and Code Generations
        </h2>
        <a link="" href="https://github.com/mshockwave/gross" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
        GROSS is a research compiler used for studying non-traditional Graph IR, which has advantages on both code optimization and code generations.
        <br>
        This compiler was originally created as a class project in Advanced Compiler Construction(CS241) in UC Irvine. The class was instructed by Prof. Michael Franz.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          Nacro: A better C/C++ macro extension inspired by Rust
        </h2>
        <a link="" href="https://github.com/mshockwave/nacro" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
        A better macro extension for C/C++. Implemented in Clang plugins. Inspired by Rust's procedural macro system.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          SQLGen: Generate SQL from TableGen code
        </h2>
        <a link="" href="https://github.com/mshockwave/SQLGen" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
        This is part of the tutorial "How to write a TableGen backend" in 2021 LLVM Developers' Meeting.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          Reference Design for the Next Generation OpenCL Fixed Point Features
        </h2>
        <a link="" href="https://bitbucket.org/mshockwave/llvm-spirv" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
          Programming Language Lab (NTHU) led by Prof. Jenq-Kuen Lee is a part of the team in the Mediatek/MOST MLB Project. Among the research work, the team is proposing to add DSP friendly features (such as fixed-point type and complex type) to OpenCL 3. The proposals from NTHU team were presented at Khronos f2f meetings at Houston (Oct 2015), Seattle (Jan 2016), Frankfurt (April 2016), and Seoul (Sep 2016), respectively. Min-Yih participated in the design and discussion for DSP features integrating fixed-point types and related arithmetic operations. In addition, Min-Yih finished the first reference design for this feature by revising the code from the clang, LLVM, and libclcxx library in Khronos’ previous reference design. The new reference design toolchain would consume OpenCL code and emit SPIR-V binary code which contains new fixed-point opcode that makes underlying hardware perform more power-efficient arithmetic.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          Support OpenCL 2.0 Compiler on LLVM for Multi-Core GPGPUsim Simulations
        </h2>
        <span description="">
          GPGPUSim has been widely used in many academic researches related to GPU computations. Min-Yih Hsu and other team members build a compiler that compiles newer versions of OpenCL 2.0 programs, which are not supported by current GPGPUSim version yet, into NVIDIA PTX assembly code. Min-Yih Hsu is responsible for implementing features that are related to OpenCL work group operations (e.g. work_group_broadcast API) and device side kernel enqueue (i.e. enqueue_kernel API) introduced in OpenCL 2.0. Note that OpenCL 2.0 allows dynamic enqueuer to support more flexible parallel paradigms. The work mainly upgraded the 3.7 version of clang, LLVM and libclc, which only supported OpenCL up to version 1.1.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          Hydra LLVM: Instruction Selection with Threads
        </h2>
        <a link="" href="https://bitbucket.org/mshockwave/hydra-llvm" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
          In some scenarios, just-in-time(JIT) compiler to name a few, compilation time may become a key factor of overall performance. Also, instruction selection usually takes the most time among other compiler procedures. Hydra LLVM, as Min-Yih Hsu’s undergraduate project, try to solve this problem by parallelizing the instruction selection process by threads. Also, he got plenty of useful advices that are worth taking from the discussion thread he posted about this project on the LLVM mailing list.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          MIPS-R3000 CPU Simulator
        </h2>
        <a link="" href="https://github.com/mshockwave/MIPS-R3000-CPU-Simulator" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
          As the project in the Computer Architecture class Min-Yih Hsu took, he implemented a simple MIPS CPU simulator that has 34 instructions, including arithmetic and memory operations, and a 5 stages pipeline which supports branch prefetching and ID (Instruction Decoding) stage forwarding. It is worth noticing that he used multi-thread programming to parallelize the five pipeline stages, such that the simulator can even simulate the instruction level parallelism behaviors benefit from pipeline design in real-world CPUs.
        </span>
      </paper-item>

      <paper-item>
        <h2>
          MIPS-R3000 Assembler
        </h2>
        <a link="" href="https://github.com/mshockwave/MIPS-R3000-Assembler" target="_blank">
          Source Code&nbsp;
          <iron-icon icon="open-in-new"></iron-icon>
        </a>
        <span description="">
          In aid of the MIPS-R3000 simulator mentioned above, Min-Yih Hsu built a simple assembler that transforms human readable MIPS-R3000 assembly code into binary format. The assembler leveraged the famous parser library ANTLR4, which is also adopted by one of the compilers in the Android Open Source Project(AOSP).
        </span>
      </paper-item>
    </div>
`}static get is(){return"project-page"}}window.customElements.define(ProjectPage.is,ProjectPage)});