define(["./landing-page.js"],function(_landingPage){"use strict";function _templateObject_741d27d0ff1411eda1bf05236946c202(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"iron-flex iron-flex-alignment\">\n      :host {\n        display: block;\n        width: 100%;\n      }\n\n      #container {\n        padding: 30px 20vw;\n      }\n\n      @media (max-width: 768px) {\n        #container {\n          padding: 15px 5vw;\n        }\n      }\n\n      a,\n      a:visited {\n        text-transform: none;\n        text-decoration: none;\n        color: unset;\n      }\n\n      paper-item {\n        margin: 15px;\n        --paper-item: {\n          font-size: 1.4em;\n          font-weight: 300;\n          line-height: 1.4;\n          border-left: 3px solid var(--paper-orange-800);\n        };\n      }\n\n      h1 {\n        font-weight: 400;\n      }\n    </style>\n\n    <div id=\"container\" class=\"layout vertical start\">\n      <h1>Book</h1>\n      <paper-item>\n        <span>\n        <u>Min-Yih Hsu</u>. \u201CLLVM Techniques, Tips, and Best Practices Clang and Middle-End Libraries: Design Powerful and Reliable Compilers Using the Latest Libraries and Tools from LLVM\u201D. <i>Packt Publishing</i> (2021)\n        </span>\n      </paper-item>\n      <h1>Paper and Talk</h1>\n      <paper-item>\n        <span>\n        <u>Min-Yih Hsu</u>, David Gens, Michael Franz. \u201CMCA Daemon: Hybrid Throughput Analysis Beyond Basic Blocks\u201D. <i>EuroLLVM Developers Meeting</i> (2022)\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        <u>Min-Yih Hsu</u>, Stan Kvasov, and Vince Del Vecchio. \u201CSouper-Charging Peepholes with Target Machine Info\u201D. <i>LLVM Developers Meeting</i> (2019)\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        Chun-Chieh Yang, Shao-Chung Wang, <u>Min-Yih Hsu</u>, and Jenq-Kuen Lee et al. \"OpenCL 2.0 Compiler Adaptation on LLVM for PTX Simulators.\"<i>THE INTERNATIONAL WORKSHOP ON EMBEDDED MULTICORE SYSTEMS(ICPP-EMS)</i>(2017).\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        <u>Min-Yih Hsu</u>, and Jenq-Kuen Lee. \"Hydra LLVM: Instruction Selection with Threads.\"<i>European LLVM Developers Meeting</i>(2017).\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        Li Wang, Shao-Chung Wang, <u>Min-Yih Hsu</u>, and Jenq-Kuen Lee et al. \"Analyzing OpenCL 2.0 Workloads Using a Heterogeneous CPU-GPU Simulator.\" <i>IEEE International Symposium on Performance Analysis of Systems and Software </i>(2017).\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        Chun-Chieh Yang, Shao-Chung Wang, <u>Min-Yi Hsu</u>, Yuan-Shin Hwang, and Jenq-Kuen Lee. \"Support OpenCL 2.0 Compiler on LLVM for Multi-Core Simulations.\" Submitted to <i>European LLVM Developers Meeting</i> (2017)\n        </span>\n      </paper-item>\n\n      <h1>Blog</h1>\n      <paper-item>\n        <span>\n        M68k LLVM Development Blog\n        <br>\n        <a href=\"https://m680x0.github.io/blog/\" target=\"_blank\" style=\"margin-left: 0.5em;\">\n          Link&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        Medium\n        <br>\n        <a href=\"https://medium.com/@mshockwave\" target=\"_blank\" style=\"margin-left: 0.5em;\">\n          Link&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        </span>\n      </paper-item>\n      <paper-item>\n        <span>\n        Shockwave Base.\n        <br>\n        <a href=\"http://mshockwave.blogspot.tw/\" target=\"_blank\" style=\"margin-left: 0.5em;\">\n          Link&nbsp;\n          <iron-icon icon=\"open-in-new\"></iron-icon>\n        </a>\n        </span>\n      </paper-item>\n    </div>\n"]);_templateObject_741d27d0ff1411eda1bf05236946c202=function _templateObject_741d27d0ff1411eda1bf05236946c202(){return data};return data}var PublicationPage=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(PublicationPage,_PolymerElement);function PublicationPage(){babelHelpers.classCallCheck(this,PublicationPage);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(PublicationPage).apply(this,arguments))}babelHelpers.createClass(PublicationPage,null,[{key:"template",get:function get(){return(0,_landingPage.html$1)(_templateObject_741d27d0ff1411eda1bf05236946c202())}},{key:"is",get:function get(){return"publication-page"}}]);return PublicationPage}(_landingPage.PolymerElement);window.customElements.define(PublicationPage.is,PublicationPage)});