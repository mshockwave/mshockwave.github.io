define(["./landing-page.js"],function(_landingPage){"use strict";function _templateObject_62e0cec0b4d411edb153593493d7efb1(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"iron-flex iron-flex-alignment\">\n      :host {\n        display: block;\n        width: 100%;\n      }\n\n      #pageContainer {\n        padding: 30px 20%;\n      }\n\n      @media (max-width: 768px) {\n        #pageContainer {\n          padding: 30px 10%;\n        }\n      }\n\n      paper-card {\n        margin: 14px;\n      }\n      paper-card .card-content img {\n        width: 10vw;\n      }\n\n      @media (max-width: 768px) {\n        paper-card .card-content img {\n          width: 40vw;\n        } \n      }\n\n      a,\n      a:visited {\n        text-transform: none;\n        text-decoration: none;\n        color: unset;\n      }\n\n      paper-item {\n        margin: 15px;\n        --paper-item: {\n          @apply --layout-vertical;\n          @apply --layout-start;\n          font-size: 1.4em;\n          font-weight: 300;\n          line-height: 1.4;\n          border-left: 3px solid var(--paper-cyan-500);\n        };\n      }\n\n      h1, h2 {\n        font-weight: 400;\n      }\n\n      [description]{\n        color: var(--paper-grey-600);\n      }\n\n      [link] {\n        margin-bottom: 1.1em;\n        margin-left: 0.5em;\n      }\n    </style>\n\n    <div id=\"pageContainer\" class=\"layout vertical start\">\n      <div class=\"layout horizontal center center-justified wrap\" style=\"width: 100%;\">\n        <paper-card>\n          <div class=\"card-content layout vertical center\">\n            <img src=\"../../images/github-logo.png\">\n          </div>\n          <div class=\"card-actions\">\n            <a href=\"https://github.com/mshockwave\" target=\"_blank\">\n              <h2>\n                mshockwave\n                <iron-icon icon=\"open-in-new\"></iron-icon>\n              </h2>\n            </a>\n          </div>\n        </paper-card>\n\n        <paper-card>\n          <div class=\"card-content layout vertical center\">\n            <img src=\"../../images/bitbucket-logo.png\">\n          </div>\n          <div class=\"card-actions\">\n            <a href=\"https://bitbucket.org/mshockwave\" target=\"_blank\">\n              <h2>\n                mshockwave\n                <iron-icon icon=\"open-in-new\"></iron-icon>\n              </h2>\n            </a>\n          </div>\n        </paper-card>\n      </div>\n\n      <h1 style=\"margin-top: 1.8em;\">\n        Highlights\n      </h1>\n\n      <paper-item>\n        <h2>\n          Reference Design for the Next Generation OpenCL Fixed Point Features\n        </h2>\n        <a link=\"\" href=\"https://bitbucket.org/mshockwave/llvm-spirv\" target=\"_blank\">\n          Source Code&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        <span description=\"\">\n          Programming Language Lab (NTHU) led by Prof. Jenq-Kuen Lee is a part of the team in the Mediatek/MOST MLB Project. Among the research work, the team is proposing to add DSP friendly features (such as fixed-point type and complex type) to OpenCL 3. The proposals from NTHU team were presented at Khronos f2f meetings at Houston (Oct 2015), Seattle (Jan 2016), Frankfurt (April 2016), and Seoul (Sep 2016), respectively. Min-Yih participated in the design and discussion for DSP features integrating fixed-point types and related arithmetic operations. In addition, Min-Yih finished the first reference design for this feature by revising the code from the clang, LLVM, and libclcxx library in Khronos\u2019 previous reference design. The new reference design toolchain would consume OpenCL code and emit SPIR-V binary code which contains new fixed-point opcode that makes underlying hardware perform more power-efficient arithmetic.\n        </span>\n      </paper-item>\n\n      <paper-item>\n        <h2>\n          Support OpenCL 2.0 Compiler on LLVM for Multi-Core GPGPUsim Simulations\n        </h2>\n        <span description=\"\">\n          GPGPUSim has been widely used in many academic researches related to GPU computations. Min-Yih Hsu and other team members build a compiler that compiles newer versions of OpenCL 2.0 programs, which are not supported by current GPGPUSim version yet, into NVIDIA PTX assembly code. Min-Yih Hsu is responsible for implementing features that are related to OpenCL work group operations (e.g. work_group_broadcast API) and device side kernel enqueue (i.e. enqueue_kernel API) introduced in OpenCL 2.0. Note that OpenCL 2.0 allows dynamic enqueuer to support more flexible parallel paradigms. The work mainly upgraded the 3.7 version of clang, LLVM and libclc, which only supported OpenCL up to version 1.1.\n        </span>\n      </paper-item>\n\n      <paper-item>\n        <h2>\n          Hydra LLVM: Instruction Selection with Threads\n        </h2>\n        <a link=\"\" href=\"https://bitbucket.org/mshockwave/hydra-llvm\" target=\"_blank\">\n          Source Code&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        <span description=\"\">\n          In some scenarios, just-in-time(JIT) compiler to name a few, compilation time may become a key factor of overall performance. Also, instruction selection usually takes the most time among other compiler procedures. Hydra LLVM, as Min-Yih Hsu\u2019s undergraduate project, try to solve this problem by parallelizing the instruction selection process by threads. Also, he got plenty of useful advices that are worth taking from the discussion thread he posted about this project on the LLVM mailing list.\n        </span>\n      </paper-item>\n\n      <paper-item>\n        <h2>\n          MIPS-R3000 CPU Simulator\n        </h2>\n        <a link=\"\" href=\"https://github.com/mshockwave/MIPS-R3000-CPU-Simulator\" target=\"_blank\">\n          Source Code&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        <span description=\"\">\n          As the project in the Computer Architecture class Min-Yih Hsu took, he implemented a simple MIPS CPU simulator that has 34 instructions, including arithmetic and memory operations, and a 5 stages pipeline which supports branch prefetching and ID (Instruction Decoding) stage forwarding. It is worth noticing that he used multi-thread programming to parallelize the five pipeline stages, such that the simulator can even simulate the instruction level parallelism behaviors benefit from pipeline design in real-world CPUs.\n        </span>\n      </paper-item>\n\n      <paper-item>\n        <h2>\n          MIPS-R3000 Assembler\n        </h2>\n        <a link=\"\" href=\"https://github.com/mshockwave/MIPS-R3000-Assembler\" target=\"_blank\">\n          Source Code&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        <span description=\"\">\n          In aid of the MIPS-R3000 simulator mentioned above, Min-Yih Hsu built a simple assembler that transforms human readable MIPS-R3000 assembly code into binary format. The assembler leveraged the famous parser library ANTLR4, which is also adopted by one of the compilers in the Android Open Source Project(AOSP).\n        </span>\n      </paper-item>\n    </div>\n"]);_templateObject_62e0cec0b4d411edb153593493d7efb1=function _templateObject_62e0cec0b4d411edb153593493d7efb1(){return data};return data}var ProjectPage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(ProjectPage,_PolymerElement);function ProjectPage(){babelHelpers.classCallCheck(this,ProjectPage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ProjectPage).apply(this,arguments))}babelHelpers.createClass(ProjectPage,null,[{key:"template",get:function get(){return(0,_landingPage.html$1)(_templateObject_62e0cec0b4d411edb153593493d7efb1())}},{key:"is",get:function get(){return"project-page"}}]);return ProjectPage}(_landingPage.PolymerElement);window.customElements.define(ProjectPage.is,ProjectPage)});