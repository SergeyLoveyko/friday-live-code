/******/
(function () {
  // webpackBootstrap

  /******/
  var __webpack_modules__ = {
    /***/
    "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/

    /***/
    function srcIndexJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./js/Article */
      "./src/js/Article.js");
      /* harmony import */


      var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./js/ArticleModal */
      "./src/js/ArticleModal.js");
      /* harmony import */


      var _js_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./js/Modal */
      "./src/js/Modal.js");

      var data = [{
        id: 1,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 2,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 3,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/3.jpg',
        tags: ['Art', 'Culture', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 4,
        title: 'Success Steps For Your Personal Or Business Life Plus Funny Image on the Back',
        urlToImage: './src/img/strategies/4.jpg',
        tags: ['Art', 'Culture', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 5,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/5.jpg',
        tags: ['Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 6,
        title: 'Increasing Prosperity With Positive Thinking',
        urlToImage: './src/img/strategies/1.jpg',
        tags: ['Art', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 7,
        title: 'Motivation Is The First Step To Success',
        urlToImage: './src/img/strategies/2.jpg',
        tags: ['Culture'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }, {
        id: 8,
        title: 'Success Steps For Your Personal Or Business Life',
        urlToImage: './src/img/strategies/3.jpg',
        tags: ['Art', 'Culture', 'Design'],
        content: 'Knowing yourself is the first, and a very critical step in the process of planning your future. How can you figure out what you want to do with your life if you don’t know: What am I going to do with the  rest of my life? What is my dream job? What do I enjoy doing? What’s my passion? What kind of career fits my personality?',
        date: '01.01.2022'
      }];

      window.onload = function () {
        console.log('Hello Rolling Scopes!');
        console.log('Hello RS!'); //  Render Articles

        if (data) {
          renderArticlesToDom();
        } //  Tags


        addTagsClickHandler(); //  Genarate Modal from Modal Class

        addToolsClickHandler();
      };

      var addTagsClickHandler = function addTagsClickHandler() {
        document.querySelector('.strategies__tags').addEventListener('click', function (e) {
          if (e.target.classList.contains('tag')) {
            var clickedTag = e.target;
            removeSelectedTags();
            selectClickedTag(clickedTag);

            if (clickedTag.innerText === 'All') {
              showAllStrategies();
            } else {
              filterStrategiesBySelectedTag(clickedTag.innerText);
            }
          }
        });
      };

      var removeSelectedTags = function removeSelectedTags() {
        var tags = document.querySelectorAll('.strategies__tags .tag');
        tags.forEach(function (tag) {
          tag.classList.remove('tag_selected');
          tag.classList.add('tag_bordered');
        });
      };

      var selectClickedTag = function selectClickedTag(clickedTag) {
        clickedTag.classList.remove('tag_bordered');
        clickedTag.classList.add('tag_selected');
      };

      var showAllStrategies = function showAllStrategies() {
        var strategies = document.querySelectorAll('.strategy-wrapper .strategy');
        strategies.forEach(function (strategy) {
          strategy.classList.remove('strategy_hidden');
        });
      };

      var filterStrategiesBySelectedTag = function filterStrategiesBySelectedTag(selectedTag) {
        var strategies = document.querySelectorAll('.strategy-wrapper .strategy');
        strategies.forEach(function (strategy) {
          strategy.classList.add('strategy_hidden');
          console.log(strategy);
          strategy.querySelectorAll('.tag').forEach(function (tag) {
            if (tag.innerText === selectedTag) {
              strategy.classList.remove('strategy_hidden');
            }
          });
        });
      };

      var renderArticlesToDom = function renderArticlesToDom() {
        var strategiesWrapper = getStrategiesWrapper();
        generateArticles(data).forEach(function (article) {
          strategiesWrapper.append(article.generateArticle());
        });
        addStrategyClickHandler();
      };

      var getStrategiesWrapper = function getStrategiesWrapper() {
        var strategiesContainer = document.querySelector('.strategy-wrapper');
        strategiesContainer.innerHTML = '';
        return strategiesContainer;
      };

      var generateArticles = function generateArticles(data) {
        var articles = [];
        data.forEach(function (article) {
          articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article));
        });
        return articles;
      };

      var addToolsClickHandler = function addToolsClickHandler() {
        document.querySelector('.tools__button .button').addEventListener('click', function () {
          genarateToolsModal();
        });
      };

      var genarateToolsModal = function genarateToolsModal() {
        renderModalWindow('Test content for Tools Modal');
      };

      var renderModalWindow = function renderModalWindow(content) {
        var modal = new _js_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal('tools-modal');
        modal.buildModal(content);
      };

      var addStrategyClickHandler = function addStrategyClickHandler() {
        document.querySelector('.strategy-wrapper').addEventListener('click', function (e) {
          if (e.target.closest('.strategy')) {
            var clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');
            var clickStrategyData = getClickedData(clickedStrategyId);
            renderArticleModalWindow(clickStrategyData);
          }
        });
      };

      var getClickedData = function getClickedData(id) {
        return data.find(function (article) {
          return article.id == id;
        });
      };

      var renderArticleModalWindow = function renderArticleModalWindow(article) {
        var modal = new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__.ArticleModal('article-modal', article);
        modal.renderModal();
      };
      /***/

    },

    /***/
    "./src/js/Article.js":
    /*!***************************!*\
      !*** ./src/js/Article.js ***!
      \***************************/

    /***/
    function srcJsArticleJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Article": function Article() {
          return (
            /* binding */
            _Article
          );
        }
        /* harmony export */

      });

      var _excluded = ["id", "title", "urlToImage", "tags"];

      function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};

        var target = _objectWithoutPropertiesLoose(source, excluded);

        var key, i;

        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

          for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
          }
        }

        return target;
      }

      function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;

        for (i = 0; i < sourceKeys.length; i++) {
          key = sourceKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          target[key] = source[key];
        }

        return target;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      var _Article = /*#__PURE__*/function () {
        function Article(_ref) {
          var id = _ref.id,
              title = _ref.title,
              urlToImage = _ref.urlToImage,
              tags = _ref.tags,
              rest = _objectWithoutProperties(_ref, _excluded);

          _classCallCheck(this, Article);

          this.id = id;
          this.title = title;
          this.urlToImage = urlToImage;
          this.tags = tags;
        } //  Article generator


        _createClass(Article, [{
          key: "generateArticle",
          value: function generateArticle() {
            var template = '';
            var article = document.createElement('article');
            article.className = 'strategy block-shadowed';
            article.setAttribute('data-id', this.id);
            this.urlToImage && (template += "<img class=\"strategy__image\" src=".concat(this.urlToImage, " alt=\"strategy\">"));

            if (this.title || this.tags) {
              template += "<div class=\"strategy__content\">";
              this.title && (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));

              if (this.tags) {
                template += "<div class=\"strategy__tags tags\">";
                this.tags.map(function (tag) {
                  template += "<span class=\"tag tag_colored\">".concat(tag, "</span>");
                });
                template += "</div>";
              }

              template += "</div>";
            }

            article.innerHTML = template;
            return article;
          }
        }]);

        return Article;
      }();
      /***/

    },

    /***/
    "./src/js/ArticleModal.js":
    /*!********************************!*\
      !*** ./src/js/ArticleModal.js ***!
      \********************************/

    /***/
    function srcJsArticleModalJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArticleModal": function ArticleModal() {
          return (
            /* binding */
            _ArticleModal
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Modal */
      "./src/js/Modal.js");

      function _typeof(obj) {
        "@babel/helpers - typeof";

        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
          return typeof obj;
        } : function (obj) {
          return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      function _get() {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get.bind();
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(arguments.length < 3 ? target : receiver);
            }

            return desc.value;
          };
        }

        return _get.apply(this, arguments);
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };
        return _setPrototypeOf(o, p);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
              result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }

        return _assertThisInitialized(self);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      var _ArticleModal = /*#__PURE__*/function (_Modal) {
        _inherits(ArticleModal, _Modal);

        var _super = _createSuper(ArticleModal);

        function ArticleModal(classes, _ref) {
          var _this;

          var id = _ref.id,
              title = _ref.title,
              urlToImage = _ref.urlToImage,
              tags = _ref.tags,
              content = _ref.content,
              date = _ref.date;

          _classCallCheck(this, ArticleModal);

          _this = _super.call(this, classes);
          _this.id = id;
          _this.title = title;
          _this.urlToImage = urlToImage;
          _this.tags = tags;
          _this.content = content;
          _this.date = date;
          return _this;
        } //  Article Modal generator


        _createClass(ArticleModal, [{
          key: "generateContent",
          value: function generateContent() {
            var template = '';
            var article = document.createElement('div');
            article.className = 'article-modal__content';
            this.urlToImage && (template += "<img class=\"strategy__image\" src=".concat(this.urlToImage, " alt=\"strategy\">"));

            if (this.title || this.tags || this.content || this.date) {
              template += "<div class=\"strategy__content\">";
              this.date && (template += "<p class=\"strategy__date\">".concat(this.date, "</p>"));
              this.title && (template += "<h3 class=\"strategy__name\">".concat(this.title, "</h3>"));
              this.content && (template += "<p class=\"strategy__text\">".concat(this.content, "</p>"));

              if (this.tags) {
                template += "<div class=\"strategy__tags tags\">";
                this.tags.map(function (tag) {
                  template += "<span class=\"tag tag_colored\">".concat(tag, "</span>");
                });
                template += "</div>";
              }

              template += "</div>";
            }

            article.innerHTML = template;
            return article;
          }
        }, {
          key: "renderModal",
          value: function renderModal() {
            var content = this.generateContent();
            console.log(content);

            _get(_getPrototypeOf(ArticleModal.prototype), "buildModal", this).call(this, content);
          }
        }]);

        return ArticleModal;
      }(_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal);
      /***/

    },

    /***/
    "./src/js/Modal.js":
    /*!*************************!*\
      !*** ./src/js/Modal.js ***!
      \*************************/

    /***/
    function srcJsModalJs(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Modal": function Modal() {
          return (
            /* binding */
            _Modal2
          );
        }
        /* harmony export */

      });

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }

      var _Modal2 = /*#__PURE__*/function () {
        function Modal(classes) {
          _classCallCheck(this, Modal);

          this.classes = classes;
          this.modal = '';
          this.modalContent = '';
          this.modalCloseBtn = '';
          this.overlay = '';
        }

        _createClass(Modal, [{
          key: "buildModal",
          value: function buildModal(content) {
            //  Overlay
            this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal'); //  Modal

            this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes); //  Modal content

            this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content'); // Close Button

            this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon'); //  fill="#2F281E

            this.modalCloseBtn.innerHTML = '<svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z" fill="#FFFFFF"/></svg>';
            this.setContent(content);
            this.appendModalElements(); //  Bind Events

            this.bindEvents(); //  Open Modal

            this.openModal();
          }
        }, {
          key: "createDomNode",
          value: function createDomNode(node, element) {
            var _node$classList;

            node = document.createElement(element);

            for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              classes[_key - 2] = arguments[_key];
            }

            (_node$classList = node.classList).add.apply(_node$classList, classes);

            return node;
          }
        }, {
          key: "setContent",
          value: function setContent(content) {
            if (typeof content === 'string') {
              this.modalContent.innerHTML = content;
            } else {
              this.modalContent.innerHTML = '';
              this.modalContent.appendChild(content);
            }
          }
        }, {
          key: "appendModalElements",
          value: function appendModalElements() {
            this.modal.append(this.modalCloseBtn);
            this.modal.append(this.modalContent);
            this.overlay.append(this.modal);
          }
        }, {
          key: "bindEvents",
          value: function bindEvents() {
            this.modalCloseBtn.addEventListener('click', this.closeModal);
            this.overlay.addEventListener('click', this.closeModal);
          }
        }, {
          key: "openModal",
          value: function openModal() {
            document.body.append(this.overlay);
          }
        }, {
          key: "closeModal",
          value: function closeModal(e) {
            var classes = e.target.classList;

            if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
              document.querySelector('.overlay').remove();
            }
          }
        }]);

        return Modal;
      }();
      /***/

    },

    /***/
    "./src/sass/style.scss":
    /*!*****************************!*\
      !*** ./src/sass/style.scss ***!
      \*****************************/

    /***/
    function srcSassStyleScss() {
      throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined mixin.\n   ╷\n13 │ ┌   @include media-tableе {\n14 │ │     width: calc(60% - $image-gap);\n15 │ └   }\n   ╵\n  src\\sass\\components\\_employee.scss 13:3  @import\n  src\\sass\\style.scss 31:9                 root stylesheet\n    at tryRunOrWebpackError (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\HookWebpackError.js:88:9)\n    at __webpack_require_module__ (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5055:12)\n    at __webpack_require__ (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5012:18)\n    at H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5083:20\n    at symbolIterator (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\neo-async\\async.js:3485:9)\n    at done (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\neo-async\\async.js:3527:9)\n    at Hook.eval [as callAsync] (eval at create (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:15:1)\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\tapable\\lib\\Hook.js:18:14)\n    at H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:4990:43\n    at symbolIterator (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\neo-async\\async.js:3482:9)\n-- inner error --\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined mixin.\n   ╷\n13 │ ┌   @include media-tableе {\n14 │ │     width: calc(60% - $image-gap);\n15 │ └   }\n   ╵\n  src\\sass\\components\\_employee.scss 13:3  @import\n  src\\sass\\style.scss 31:9                 root stylesheet\n    at Object.<anonymous> (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\css-loader\\dist\\cjs.js!H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\sass-loader\\dist\\cjs.js!H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\src\\sass\\style.scss:1:7)\n    at H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\javascript\\JavascriptModulesPlugin.js:441:11\n    at Hook.eval [as call] (eval at create (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\tapable\\lib\\HookCodeFactory.js:19:10), <anonymous>:7:1)\n    at Hook.CALL_DELEGATE [as _call] (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\tapable\\lib\\Hook.js:14:14)\n    at H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5057:39\n    at tryRunOrWebpackError (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\HookWebpackError.js:83:7)\n    at __webpack_require_module__ (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5055:12)\n    at __webpack_require__ (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5012:18)\n    at H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\webpack\\lib\\Compilation.js:5083:20\n    at symbolIterator (H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\neo-async\\async.js:3485:9)\n\nGenerated code for H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\css-loader\\dist\\cjs.js!H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\node_modules\\sass-loader\\dist\\cjs.js!H:\\Different\\Web\\RS-SCHOOL\\my-learn\\friday-live-coding\\friday-live-coding\\src\\sass\\style.scss\n1 | throw new Error(\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nSassError: Undefined mixin.\\n   ╷\\n13 │ ┌   @include media-tableе {\\n14 │ │     width: calc(60% - $image-gap);\\n15 │ └   }\\n   ╵\\n  src\\\\sass\\\\components\\\\_employee.scss 13:3  @import\\n  src\\\\sass\\\\style.scss 31:9                 root stylesheet\");");
      /***/
    }
    /******/

  };
  /************************************************************************/

  /******/
  // The module cache

  /******/

  var __webpack_module_cache__ = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    var cachedModule = __webpack_module_cache__[moduleId];
    /******/

    if (cachedModule !== undefined) {
      /******/
      return cachedModule.exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = __webpack_module_cache__[moduleId] = {
      /******/
      // no module.id needed

      /******/
      // no module.loaded needed

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /******/

    /******/
    // Return the exports of the module

    /******/


    return module.exports;
    /******/
  }
  /******/

  /************************************************************************/

  /******/

  /* webpack/runtime/define property getters */

  /******/


  (function () {
    /******/
    // define getter functions for harmony exports

    /******/
    __webpack_require__.d = function (exports, definition) {
      /******/
      for (var key in definition) {
        /******/
        if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key]
          });
          /******/
        }
        /******/

      }
      /******/

    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/hasOwnProperty shorthand */

  /******/


  (function () {
    /******/
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/

  })();
  /******/

  /******/

  /* webpack/runtime/make namespace object */

  /******/


  (function () {
    /******/
    // define __esModule on exports

    /******/
    __webpack_require__.r = function (exports) {
      /******/
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/
        Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module'
        });
        /******/
      }
      /******/


      Object.defineProperty(exports, '__esModule', {
        value: true
      });
      /******/
    };
    /******/

  })();
  /******/

  /************************************************************************/

  /******/

  /******/
  // startup

  /******/
  // Load entry module and return exports

  /******/


  __webpack_require__("./src/index.js");
  /******/
  // This entry module doesn't tell about it's top-level declarations so it can't be inlined

  /******/


  var __webpack_exports__ = __webpack_require__("./src/sass/style.scss");
  /******/

  /******/

})();