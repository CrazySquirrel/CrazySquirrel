exports.id = 801;
exports.ids = [801];
exports.modules = {

/***/ 2401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 7240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 8884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 5008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 6962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 4071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 3183:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1402:
/***/ ((module) => {

module.exports = "import ClientClass from '../../lib/ts/client';\n\nconst Client = new ClientClass();\n\nClient.emit().then(\n    (result) => {\n      console.log(result);\n    }\n);";

/***/ }),

/***/ 3326:
/***/ ((module) => {

module.exports = "import ServerClass from '../../lib/ts/server';\n\nconst Server = new ServerClass();\n\n// Listened event name and callback\nServer.on('connect', (data) => {\n  console.log(data);\n\n  return 'OK';\n});\n";

/***/ }),

/***/ 3701:
/***/ ((module) => {

module.exports = "$(function(){\n  $('.cstiles').CSTiles({\n    shareTile: true,\n    shareTypes: ['facebook','vkontakte','email','print']\n  });\n  /*\n  $('.cstiles__item-content').CSShare({\n    types: ['facebook','vkontakte','email','print']\n  });\n  */\n});";

/***/ }),

/***/ 9172:
/***/ ((module) => {

module.exports = "new CSTiles(\n        document.body,\n        {\n            gridSize: 8,\n            tileMargin: 5,\n            tilePadding: 5,\n            tileContent: {\n                type: 'none'\n            },\n            adaptiveMedia: {\n                'imac': '2560-',\n                'desktops-huge': '1920-2560',\n                'desktops-big': '1600-1920',\n                'desktops': '1440-1600',\n                'base': '1280-1440',\n                'tablet-landscape': '1024-1280',\n                'tablet': '768-1024',\n                'phone-landscape': '480-768',\n                'phone': '320-480',\n                'small': '-320'\n            }\n        },\n        [\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'tiles',\n                    params: {\n                        grid: {\n                            gridSize: 8,\n                            tileMargin: 0,\n                            tilePadding: 0,\n                            tileContent: {\n                                type: 'none'\n                            },\n                            adaptiveMedia: {\n                                'imac': '2560-',\n                                'desktops-huge': '1920-2560',\n                                'desktops-big': '1600-1920',\n                                'desktops': '1440-1600',\n                                'base': '1280-1440',\n                                'tablet-landscape': '1024-1280',\n                                'tablet': '768-1024',\n                                'phone-landscape': '480-768',\n                                'phone': '320-480',\n                                'small': '-320'\n                            }\n                        },\n                        tiles: [\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'image',\n                                    src: './images/1.jpg'\n                                },\n                            },\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'iframe',\n                                    src: 'https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&showinfo=0'\n                                },\n                            },\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'video',\n                                    src: [\n                                        './videos/index.mp4'\n                                    ],\n                                    poster: './images/3.jpg'\n                                },\n                            },\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'audio',\n                                    src: [\n                                        './audios/index.mp4'\n                                    ],\n                                    poster: './images/4.jpg'\n                                },\n                            },\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'image',\n                                    src: './images/5.jpg'\n                                },\n                            },\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'image',\n                                    src: './images/8.jpg'\n                                },\n                            },\n                            {\n                                tileSize: [2, 2],\n                                tileContent: {\n                                    type: 'image',\n                                    src: './images/9.jpg'\n                                },\n                            }\n                        ]\n                    }\n                }\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'image',\n                    src: './images/1.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'iframe',\n                    src: 'https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&showinfo=0'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'video',\n                    src: [\n                        './videos/index.mp4'\n                    ],\n                    poster: './images/3.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'audio',\n                    src: [\n                        './audios/index.mp4'\n                    ],\n                    poster: './images/4.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'html',\n                    html: 'Text',\n                    poster: './images/5.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'dom',\n                    query: '#dfgdfhdhfghf',\n                    poster: './images/6.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'image',\n                    src: './images/7.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'image',\n                    src: './images/8.jpg'\n                },\n            },\n            {\n                tileSize: [2, 2],\n                tileContent: {\n                    type: 'image',\n                    src: './images/9.jpg'\n                },\n            }\n        ]\n);";

/***/ }),

/***/ 2578:
/***/ ((module) => {

module.exports = "new TexturedText(\n    document.getElementById('TexturedText'),\n    {\n      'textureSrc': './images/det_cont_fon.jpg',\n      'offsetX': 150,\n      'offsetY': 150\n    }\n);";

/***/ }),

/***/ 1097:
/***/ ((module) => {

module.exports = "import AnimationFrame from 'AnimationFrame.ts';\n\nlet animation = new AnimationFrame();\n\nlet ID = animation.subscribe(context,callback,arguments,ID);\n\nconsole.log(ID);\n";

/***/ }),

/***/ 5143:
/***/ ((module) => {

module.exports = "let AnimationFrame = required('AnimationFrame.js');\n\nlet animation = new AnimationFrame();\n\nlet ID = animation.subscribe(context,callback,arguments,ID);";

/***/ }),

/***/ 7542:
/***/ ((module) => {

module.exports = "let CSDebug = Debug('CSDebug.js');\n\nnew CSDebug(true);";

/***/ }),

/***/ 8254:
/***/ ((module) => {

module.exports = "import CSDebug from 'CSDebug.ts';\n\nnew CSDebug(true);";

/***/ }),

/***/ 3135:
/***/ ((module) => {

module.exports = "let CSLogger = require('CSLogger.js')({\n  loggerUrl: 'http://localhost/',\n  minLoggerLevel: 100,\n  projectName: '',\n  projectVersion: '',\n});\n\nCSLogger.log(100, 'Test message');";

/***/ }),

/***/ 8171:
/***/ ((module) => {

module.exports = "import CSLoggerClass from 'CSLogger.ts';\n\nlet CSLogger = CSLoggerClass({\n  loggerUrl: 'http://localhost/',\n  minLoggerLevel: 100,\n  projectName: '',\n  projectVersion: '',\n});\n\nCSLogger.log(100, 'Test message');";

/***/ }),

/***/ 9559:
/***/ ((module) => {

module.exports = "let EverCookie = required('EverCookie.js');\n\nlet LocalEverCookie = new EverCookie(uid);\n\nLocalEverCookie.setItem(checkSupport, key, value);\nLocalEverCookie.getItem(checkSupport, key);\nLocalEverCookie.removeItem(checkSupport, key);\nLocalEverCookie.getKeys(checkSupport);\nLocalEverCookie.clear(checkSupport);\nLocalEverCookie.destroy();";

/***/ }),

/***/ 3715:
/***/ ((module) => {

module.exports = "import EverCookie from 'EverCookie.ts';\n\nlet LocalEverCookie = new EverCookie(uid);\n\nLocalEverCookie.setItem(checkSupport, key, value);\nLocalEverCookie.getItem(checkSupport, key);\nLocalEverCookie.removeItem(checkSupport, key);\nLocalEverCookie.getKeys(checkSupport);\nLocalEverCookie.clear(checkSupport);\nLocalEverCookie.destroy();";

/***/ }),

/***/ 8954:
/***/ ((module) => {

module.exports = "let UserID = required('UserID.js');\n\nlet ID = (new UserID()).getID();";

/***/ }),

/***/ 7498:
/***/ ((module) => {

module.exports = "import UserID from 'UserID.ts';\n\nlet ID = (new UserID()).getID()\n\nconsole.log(ID);\n";

/***/ }),

/***/ 7039:
/***/ ((module) => {

module.exports = "let Utils = required('Utils.js');\n\nUtils.Document.getHeight();";

/***/ }),

/***/ 6665:
/***/ ((module) => {

module.exports = "import Utils from 'Utils.ts';\n\nUtils.Document.getHeight();";

/***/ }),

/***/ 5233:
/***/ ((module) => {

module.exports = "// noinspection JSUnresolvedFunction\n\nlet ViewAbility = required('ViewAbility.js');\n\nnew ViewAbility(\n    domBannerObject,\n    {\n      percentage: 0.5,\n      time: 2000,\n    },\n    callback\n);";

/***/ }),

/***/ 5638:
/***/ ((module) => {

module.exports = "import ViewAbility from 'ViewAbility.ts';\n\nnew ViewAbility(\n    domBannerObject,\n    {\n      percentage: 0.5,\n      time: 2000,\n    },\n    callback\n);";

/***/ }),

/***/ 5445:
/***/ ((module) => {

module.exports = "RewriteEngine on\nRewriteCond %{HTTP_HOST} !^crazysquirrel\\.ru$ [NC]\nRewriteRule ^(.*)$ https://crazysquirrel.ru/$1 [R=301,L]";

/***/ }),

/***/ 8835:
/***/ ((module) => {

module.exports = "RewriteEngine on\nRewriteCond %{HTTP_HOST} !^www\\.crazysquirrel\\.ru$ [NC]\nRewriteRule ^(.*)$ https://www.crazysquirrel.ru/$1 [R=301,L]";

/***/ }),

/***/ 5206:
/***/ ((module) => {

module.exports = "RewriteEngine on\nRewriteCond %{THE_REQUEST} ^.*/index.php\nRewriteRule ^(.*)index.php$ https://crazysquirrel.ru/$1 [R=301,L]";

/***/ }),

/***/ 9176:
/***/ ((module) => {

module.exports = "RewriteEngine on\nRewriteCond %{QUERY_STRING} !^$ [NC]\nRewriteCond %{THE_REQUEST} \\? [NC]\nRewriteCond %{THE_REQUEST} !admin [NC]\nRewriteRule ^(.*)?(.*)$ https://crazysquirrel.ru/$1? [R=301,L]";

/***/ }),

/***/ 9691:
/***/ ((module) => {

module.exports = "RewriteEngine on\nRewriteCond %{HTTP_HOST} !^crazysquirrel\\.ru$ [NC]\nRewriteRule ^(.*)$ https://crazysquirrel.ru/$1 [R=301,L]\nRewriteCond %{THE_REQUEST} ^.*/index.php\nRewriteRule ^(.*)index.php$ https://crazysquirrel.ru/$1 [R=301,L]\nRewriteCond %{QUERY_STRING} !^$ [NC]\nRewriteCond %{THE_REQUEST} \\? [NC]\nRewriteCond %{THE_REQUEST} !admin [NC]\nRewriteRule ^(.*)?(.*)$ https://crazysquirrel.ru/$1? [R=301,L]";

/***/ }),

/***/ 5651:
/***/ ((module) => {

module.exports = "User-Agent: *\nAllow: /\nHost: crazysquirrel.ru\nSitemap: https://crazysquirrel.ru/sitemap.xml";

/***/ }),

/***/ 83:
/***/ ((module) => {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"https://www.sitemaps.org/schemas/sitemap/0.9\">\n  <url>\n    <loc>https://crazysquirrel.ru/</loc>\n    <priority>1</priority>\n  </url>\n  <url>\n    <loc>https://crazysquirrel.ru/sitemap_generator</loc>\n    <priority>0.71</priority>\n  </url>\n</urlset>";

/***/ }),

/***/ 8026:
/***/ ((module) => {

module.exports = "{\n    ServerAddress: \"http://127.0.0.1:8888/\", // Default connection address\n    ConnectionTimeout: 1000, // Connection timeout\n    Password: \"xmas\", // Password\n    Reconnections: 10, // Default reconnection\n    Transports: { // Transports: If some settings of the transport or the whole transport is not needed, then it should be set to false go is to remove from the settings.\n        xhr: {\n            HttpMethods: {\n                GET: true,\n                POST: true,\n                PUT: true,\n                PATCH: true,\n            },\n            SubTransports: {\n                path: true,\n                name: true,\n                params: true,\n                header: true,\n                body: true,\n            },\n        },\n        fetch: {\n            HttpMethods: {\n                GET: true,\n                POST: true,\n                PUT: true,\n                PATCH: true,\n            },\n            SubTransports: {\n                path: true,\n                name: true,\n                params: true,\n                header: true,\n                body: true,\n            },\n        },\n        iframe: {\n            SubTransports: {\n                path: true,\n                name: true,\n                params: true,\n            },\n        },\n        script: {\n            SubTransports: {\n                path: true,\n                name: true,\n                params: true,\n            },\n        },\n        image: {\n            SubTransports: {\n                path: true,\n                name: true,\n                params: true,\n            },\n        },\n        style: {\n            SubTransports: {\n                path: true,\n                name: true,\n                params: true,\n            },\n        }\n    },\n}";

/***/ }),

/***/ 593:
/***/ ((module) => {

module.exports = "{\n    Event: \"connect\", // Event name [required]\n    Data: {}, // Data [optional]\n    Url: \"http://127.0.0.1:8888/test/\", // Connection url [optional]\n    Reconnections: 10, // Max reconnections [optional]\n}";

/***/ }),

/***/ 6075:
/***/ ((module) => {

module.exports = "{\n    ServerPort: 8888, // Port to listen on\n    ConnectionTimeout: 1000, // Connection timeout\n    Password: \"xmas\", // Password\n    SuccessResponseCode: 200, // Success http response code\n    ErrorResponseCode: 404, // Error http response code\n}";

/***/ }),

/***/ 5294:
/***/ ((module) => {

module.exports = "types: [\"twitter\",\"facebook\",\"vkontakte\",\"print\"]";

/***/ }),

/***/ 4595:
/***/ ((module) => {

module.exports = "<!doctype html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>CSTiles</title>\n<link rel=\"stylesheet\" data-template-style=\"true\" type=\"text/css\" href=\"css/CSTiles-1.1.0.css\">\n<link rel=\"stylesheet\" data-template-style=\"true\" type=\"text/css\" href=\"css/CSShare-1.0.0.css\">\n</head>\n\n<body>\n<div class=\"cstiles\" data-cstiles-size=\"4,auto\" data-cstiles-margin=\"5\">\n    <div class=\"cstiles__item\" data-cstiles-size=\"2\">\n        <iframe class=\"cstiles__item-video\" width=\"500\" height=\"500\" src=\"https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&amp;showinfo=0\" allowfullscreen></iframe>\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1\" data-cstiles-image_src=\"images/2.jpg\">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1,2\">\n        <img class=\"cstiles__item-image\" src=\"images/3.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1\" data-cstiles-order=\"1\" data-cstiles-order-tablet=\"1\">\n         <img class=\"cstiles__item-image\" src=\"images/4.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"2,1\" data-cstiles-order=\"2\" data-cstiles-order-tablet=\"2\" data-cstiles-image_position=\"left,bottom\">\n        <img class=\"cstiles__item-image\" src=\"images/5.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1\">\n         <img class=\"cstiles__item-image\" src=\"images/6.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1\">\n        <img class=\"cstiles__item-image\" src=\"images/7.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"2,1\">\n         <img class=\"cstiles__item-image\" src=\"images/8.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1\">\n        <img class=\"cstiles__item-image\" src=\"images/9.jpg\" alt=\" \">\n    </div>\n    <div class=\"cstiles__item\" data-cstiles-size=\"1\">\n      <img class=\"cstiles__item-image\" src=\"images/10.jpg\" alt=\" \">\n    </div>\n</div>\n<script src=\"js/jquery-1.11.3.min.js\"></script>\n<script src=\"js/jquery.CSTiles-1.1.0.min.js\"></script>\n<script src=\"js/jquery.CSShare-1.0.0.min.js\"></script>\n<script src=\"js/index.js\"></script>\n</body>\n</html>";

/***/ }),

/***/ 2691:
/***/ ((module) => {

module.exports = "//If you use TypeScript in your project.\nimport CSTiles from CSTiles.ts\n\n//If you use JavaScript in your project.\nlet window = global;\nrequest(\"CSTiles.js\");\nlet CSTiles = window[\"CSTiles\"];\n\n//If you just want to use JavaScript as usual.\n<script src=\"js/CSTiles.js\"></script>\n\n//Then call just CSTiles class with parameters.\nnew CSTiles(<domParentNode>,<objGridParams>,<arrTiles>);";

/***/ }),

/***/ 3666:
/***/ ((module) => {

module.exports = "- domParentNode\n    The parent dom element in which the tiles will be inserted.\n\n- objGridParams\n    The parameters are describing the grid.\n\n    - gridSize <number>\n        The size of the grid in the baseline condition.\n\n    - tileMargin <number>\n        The distance between tiles in pixels.\n\n    - tilePadding <number>\n        The distance from the edge of the tile to the content in pixels.\n\n    - tileContent <Object>\n        The object describing the parameters of the default tile.\n\n            type: 'image',\n            src: './images/1.jpg'\n\n            type: 'iframe',\n            src: 'https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&showinfo=0'\n\n            type: 'video',\n            src: [\n                './videos/index.mp4'\n            ],\n            poster: './images/3.jpg'\n\n            type: 'audio',\n            src: [\n                './audios/index.mp4'\n            ],\n            poster: './images/4.jpg'\n\n            type: 'html',\n            html: 'Text',\n            poster: './images/5.jpg'\n\n            type: 'dom',\n            query: '#dfgdfhdhfghf',\n            poster: './images/6.jpg'\n\n    - adaptiveMedia <Object>\n        The object describing the adaptive ranges for tiles.\n\n            \"imac\": \"2560-\",\n            \"desktops-huge\": \"1920-2560\",\n            \"desktops-big\": \"1600-1920\",\n            \"desktops\": \"1440-1600\",\n            \"base\": \"1280-1440\",\n            \"tablet-landscape\": \"1024-1280\",\n            \"tablet\": \"768-1024\",\n            \"phone-landscape\": \"480-768\",\n            \"phone\": \"320-480\",\n            \"small\": \"-320\"\n\n    - gridAdaptiveSize <Object>\n        The object describing adaptive tile sizes.\n\n            \"imac\": 10,\n            \"desktops-huge\": 10,\n            \"desktops-big\": 10,\n            \"desktops\": 8,\n            \"base\": 6,\n            \"tablet-landscape\": 6,\n            \"tablet\": 4,\n            \"phone-landscape\": 3,\n            \"phone\": 2,\n            \"small\": 1\n\n    - tileAdaptiveMargin <Object>\n        The object describing adaptive indentation between the tiles.\n\n            \"imac\": 10,\n            \"desktops-huge\": 10,\n            \"desktops-big\": 10,\n            \"desktops\": 8,\n            \"base\": 6,\n            \"tablet-landscape\": 6,\n            \"tablet\": 4,\n            \"phone-landscape\": 3,\n            \"phone\": 2,\n            \"small\": 1\n\n    - tileAdaptivePadding <Object>\n        The object describing adaptive spacing from the edge to the content tiles.\n\n            \"imac\": 10,\n            \"desktops-huge\": 10,\n            \"desktops-big\": 10,\n            \"desktops\": 8,\n            \"base\": 6,\n            \"tablet-landscape\": 6,\n            \"tablet\": 4,\n            \"phone-landscape\": 3,\n            \"phone\": 2,\n            \"small\": 1\n\n- arrTiles\n    The array of objects describing the tiles.\n\n    - tileSize <number>\n        The size of the tile in units of the mesh grid.\n\n    - tileMargin <number>\n        The distance between tiles in pixels.\n\n    - tilePadding <number>\n        The distance from the edge of the tile to the content in pixels.\n\n    - tileContent <Object>\n        The object describing the parameters of the default tile.\n\n            type: 'image',\n            src: './images/1.jpg'\n\n            type: 'iframe',\n            src: 'https://www.youtube.com/embed/w1I-HWAP6N8?controls=0&showinfo=0'\n\n            type: 'video',\n            src: [\n                './videos/index.mp4'\n            ],\n            poster: './images/3.jpg'\n\n            type: 'audio',\n            src: [\n                './audios/index.mp4'\n            ],\n            poster: './images/4.jpg'\n\n            type: 'html',\n            html: 'Text',\n            poster: './images/5.jpg'\n\n            type: 'dom',\n            query: '#dfgdfhdhfghf',\n            poster: './images/6.jpg'\n\n    - tileAdaptiveSize <Object>\n        The distance describing adaptive tile sizes in grid units.\n\n            \"imac\": [2, 2],\n            \"desktops-huge\": [2, 2],\n            \"desktops-big\": [2, 2],\n            \"desktops\": [2, 2],\n            \"base\": [2, 2],\n            \"tablet-landscape\": [3, 3],\n            \"tablet\": [2, 2],\n            \"phone-landscape\": [1, 1],\n            \"phone\": [1, 1],\n            \"small\": [1, 1]\n\n    - tileAdaptiveMargin <Object>\n        The object describing adaptive indentation between the tiles.\n\n            \"imac\": 10,\n            \"desktops-huge\": 10,\n            \"desktops-big\": 10,\n            \"desktops\": 8,\n            \"base\": 6,\n            \"tablet-landscape\": 6,\n            \"tablet\": 4,\n            \"phone-landscape\": 3,\n            \"phone\": 2,\n            \"small\": 1\n\n    - tileAdaptivePadding <Object>\n        The object describing adaptive spacing from the edge to the content tiles.\n\n            \"imac\": 10,\n            \"desktops-huge\": 10,\n            \"desktops-big\": 10,\n            \"desktops\": 8,\n            \"base\": 6,\n            \"tablet-landscape\": 6,\n            \"tablet\": 4,\n            \"phone-landscape\": 3,\n            \"phone\": 2,\n            \"small\": 1";

/***/ }),

/***/ 3511:
/***/ ((module) => {

module.exports = "//If you use TypeScript in your project.\nimport TexturedText from TexturedText.ts\n\n//If you use JavaScript in your project.\nlet window = global;\nrequest(\"TexturedText.js\");\nlet TexturedText = window[\"TexturedText\"];\n\n//If you just want to use JavaScript as usual.\n<script src=\"js/TexturedText.js\"></script>\n\n//Then call just TexturedText class with parameters.\nnew TexturedText(<domTextElement>,<objParams>);";

/***/ }),

/***/ 3091:
/***/ ((module) => {

module.exports = "- domTextElement\n    The DOM element with text\n\n- objParams\n    The parameters are describing the text textures.\n\n    - textureSrc\n        The path to texture image\n\n    - offsetX\n        The image texture x offset\n\n    - offsetY\n        The image texture y offset";

/***/ }),

/***/ 4438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-cross-usage",
      viewBox: "0 0 26 26",
      url: __webpack_require__.p + "/home/travis/build/CrazySquirrel/CrazySquirrel/src/components/Icon/svg/icon-cross.svg",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ 9044:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-map-low-usage",
      viewBox: "0 0 53 32",
      url: __webpack_require__.p + "/home/travis/build/CrazySquirrel/CrazySquirrel/src/components/Icon/svg/icon-map-low.svg",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ 9015:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
      id: "icon-squirrel-low-usage",
      viewBox: "0 0 48 50",
      url: __webpack_require__.p + "/home/travis/build/CrazySquirrel/CrazySquirrel/src/components/Icon/svg/icon-squirrel-low.svg",
      toString: function () {
        return this.url;
      }
    });

/***/ }),

/***/ 1456:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9269eec00c57373515c347c07bdb3de3.gif");

/***/ }),

/***/ 7590:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateAside = exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["UPDATE"] = "[ASIDE] UPDATE";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var updateAside = function (aside) { return ({
    type: ActionTypes.UPDATE,
    aside: aside
}); };
exports.updateAside = updateAside;


/***/ }),

/***/ 794:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.updateLocation = exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["UPDATE"] = "[ROUTER] UPDATE";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var updateLocation = function (location) { return ({
    type: ActionTypes.UPDATE,
    location: location
}); };
exports.updateLocation = updateLocation;


/***/ }),

/***/ 8615:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.search = exports.ActionTypes = void 0;
var ActionTypes;
(function (ActionTypes) {
    ActionTypes["SEARCH"] = "[SEARCH] SEARCH";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
var search = function (searchText, searchResult) { return ({
    type: ActionTypes.SEARCH,
    searchText: searchText,
    searchResult: searchResult,
}); };
exports.search = search;


/***/ }),

/***/ 5900:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.siastrebov = void 0;
exports.siastrebov = {
    name: '',
    url: 'https://www.linkedin.com/in/sergei-iastrebov/',
};


/***/ }),

/***/ 1863:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var bind_decorator_1 = __webpack_require__(954);
var block = bem_cn_1.block('accordion');
__webpack_require__(2401);
var Accordion = /** @class */ (function (_super) {
    __extends(Accordion, _super);
    function Accordion(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: false,
        };
        return _this;
    }
    Accordion.prototype.render = function () {
        if (this.state.active) {
            return (React.createElement("div", { className: block() }, this.props.children));
        }
        else {
            return (React.createElement("div", { className: block() },
                React.createElement("div", { className: block('button'), onClick: this.handleClick }, this.props.title)));
        }
    };
    Accordion.prototype.handleClick = function () {
        this.setState({
            active: true,
        });
    };
    __decorate([
        bind_decorator_1.default
    ], Accordion.prototype, "handleClick", null);
    return Accordion;
}(React.Component));
exports.default = Accordion;


/***/ }),

/***/ 1391:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
var React = __webpack_require__(9297);
var react_redux_1 = __webpack_require__(79);
var bem_cn_1 = __webpack_require__(2469);
var Aside_1 = __webpack_require__(5591);
var Main_1 = __webpack_require__(2919);
var Footer_1 = __webpack_require__(1348);
var SubMenu_1 = __webpack_require__(8119);
var BreadCrumb_1 = __webpack_require__(6259);
var Badges_1 = __webpack_require__(3007);
var Share_1 = __webpack_require__(1053);
var Comments_1 = __webpack_require__(2576);
var Metatags_1 = __webpack_require__(7250);
var router_1 = __webpack_require__(794);
var aside_1 = __webpack_require__(7590);
var search_1 = __webpack_require__(8615);
var aside_2 = __webpack_require__(3832);
__webpack_require__(2015);
var index_1 = __webpack_require__(8735);
var block = bem_cn_1.block('app');
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        var siteUrl = {"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.start_url.replace(/\/$/ig, '');
        _this.images = props.images || {"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.icons.map(function (v) {
            var sizes = v.sizes.split('x');
            return {
                src: siteUrl + v.src,
                type: v.type,
                width: sizes[0],
                height: sizes[1],
                alt: v.alt || props.title,
            };
        });
        _this.state = {
            href: '',
            pathname: '',
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        this.props.update(location.pathname);
        this.setState({
            href: location.href,
            pathname: location.pathname,
        });
        // Remove old meta
        [
            'title',
            'meta[last-modified]',
            'meta[name="description"]',
            'meta[name="keywords"]',
            'meta[name="author"]',
            'meta[property="og:title"]',
            'meta[property="og:description"]',
            'meta[property="og:type"]',
            'meta[property="og:url"]',
            'meta[property="og:locale"]',
            'meta[property="og:site_name"]',
            'meta[property="og:updated_time"]',
            'meta[property="og:image"]',
            'meta[property="og:image:type"]',
            'meta[property="og:image:width"]',
            'meta[property="og:image:height"]',
            'meta[property="og:image:alt"]',
            'meta[property="og:video"]',
            'meta[property="og:video:type"]',
            'meta[property="og:video:width"]',
            'meta[property="og:video:height"]',
            'meta[property="og:audios"]',
            'meta[property="og:audios:type"]',
        ].forEach(function (selector) { return Array.from(document.head.querySelectorAll(selector)).forEach(function (node) { return document.head.removeChild(node); }); });
        function addMeta(params) {
            var meta = document.createElement('meta');
            if (params.name) {
                meta.name = params.name;
            }
            if (params.content) {
                meta.content = params.content;
            }
            if (params.property) {
                meta.setAttribute('property', params.property);
            }
            if (params.lastModified) {
                meta.setAttribute('last-modified', params.lastModified);
            }
            document.head.appendChild(meta);
        }
        if (this.props.title) {
            var title = document.createElement('title');
            title.innerText = this.props.title;
            document.head.appendChild(title);
        }
        if (this.props.description) {
            addMeta({ name: 'description', content: this.props.description });
        }
        if (this.props.keywords) {
            addMeta({ name: 'keywords', content: this.props.keywords });
        }
        if (this.props.modified) {
            addMeta({ lastModified: this.props.modified });
        }
        if (this.props.author) {
            addMeta({ name: 'author', content: this.props.author.name });
        }
        if (this.props.title) {
            addMeta({ property: 'og:title', content: this.props.title });
        }
        if (this.props.description) {
            addMeta({ property: 'og:description', content: this.props.description });
        }
        if ({"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.start_url) {
            addMeta({ property: 'og:type', content: 'website' });
            addMeta({ property: 'og:url', content: {"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.start_url + this.props.location });
        }
        if (true) {
            addMeta({ property: 'og:locale', content: "en" });
        }
        if ({"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.short_name) {
            addMeta({ property: 'og:site_name', content: {"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.short_name });
        }
        if (this.props.modified) {
            addMeta({ property: 'og:updated_time', content: this.props.modified });
        }
        if (this.props.images) {
            for (var _i = 0, _a = this.props.images; _i < _a.length; _i++) {
                var _b = _a[_i], src = _b.src, type = _b.type, width = _b.width, height = _b.height, alt = _b.alt;
                addMeta({ property: 'og:image', content: src });
                addMeta({ property: 'og:image:type', content: type });
                addMeta({ property: 'og:image:width', content: width });
                addMeta({ property: 'og:image:height', content: height });
                addMeta({ property: 'og:image:alt', content: alt });
            }
        }
        if (this.props.videos) {
            for (var _c = 0, _d = this.props.videos; _c < _d.length; _c++) {
                var _e = _d[_c], src = _e.src, type = _e.type, width = _e.width, height = _e.height;
                addMeta({ property: 'og:video', content: src });
                addMeta({ property: 'og:video:type', content: type });
                addMeta({ property: 'og:video:width', content: width });
                addMeta({ property: 'og:video:height', content: height });
            }
        }
        if (this.props.audios) {
            for (var _f = 0, _g = this.props.audios; _f < _g.length; _f++) {
                var _h = _g[_f], src = _h.src, type = _h.type;
                addMeta({ property: 'og:audios', content: src });
                addMeta({ property: 'og:audios:type', content: type });
            }
        }
    };
    App.prototype.render = function () {
        return (React.createElement("section", { className: block() },
            React.createElement(Main_1.default, null,
                this.getContent(),
                React.createElement(Footer_1.default, null,
                    React.createElement(Comments_1.default, { href: this.state.href, pathname: this.state.pathname, title: this.props.title }),
                    React.createElement(Share_1.default, null))),
            React.createElement(Aside_1.default, { side: Aside_1.Side.LEFT })));
    };
    App.prototype.getContent = function () {
        if (this.props.type === index_1.MetadataType.ARTICLE) {
            var siteUrl = {"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.start_url.replace(/\/$/ig, '');
            return (React.createElement("div", { itemScope: true, itemType: 'https://schema.org/Article' },
                React.createElement(BreadCrumb_1.default, null),
                React.createElement("h1", { itemProp: 'name headline about' }, this.props.h1),
                React.createElement(SubMenu_1.default, null),
                !!this.props.badges && (React.createElement(Badges_1.default, { badges: this.props.badges })),
                React.createElement("div", { itemProp: 'articleBody', className: block('content') }, this.props.children),
                React.createElement("meta", { itemProp: 'datePublished', content: this.props.modified }),
                React.createElement("meta", { itemProp: 'dateModified', content: this.props.modified }),
                React.createElement("meta", { itemProp: 'keywords', content: this.props.keywords }),
                React.createElement("meta", { itemProp: 'description', content: this.props.description }),
                React.createElement("meta", { itemProp: 'isFamilyFriendly', content: 'True' }),
                React.createElement("meta", { itemProp: 'inLanguage', content: 'ru_RU' }),
                React.createElement("meta", { itemProp: 'mainEntityOfPage', content: "" + siteUrl + this.props.location }),
                React.createElement(Metatags_1.Author, { name: '\u0421\u0435\u0440\u0433\u0435\u0439 \u042F\u0441\u0442\u0440\u0435\u0431\u043E\u0432', url: 'https://plus.google.com/u/0/102372703586362573921' }),
                React.createElement(Metatags_1.Publisher, null),
                this.images && this.images.map(function (v) {
                    return (React.createElement("span", { key: v.src, itemScope: true, itemProp: 'image', itemType: 'https://schema.org/ImageObject' },
                        React.createElement("link", { itemProp: 'contentUrl', href: v.src }),
                        React.createElement("link", { itemProp: 'url', href: v.src }),
                        React.createElement("meta", { itemProp: 'width', content: v.width }),
                        React.createElement("meta", { itemProp: 'height', content: v.height })));
                })));
        }
        else {
            return (React.createElement("div", null,
                React.createElement(BreadCrumb_1.default, null),
                React.createElement("h1", null, this.props.h1),
                React.createElement(SubMenu_1.default, null),
                React.createElement("div", { className: block('content') }, this.props.children)));
        }
    };
    return App;
}(React.Component));
exports.App = App;
exports.default = react_redux_1.connect(function (state) { return ({
    location: state.router.location,
    modified: state.router.modified,
    searchText: state.search.searchText,
    searchResult: state.search.searchResult,
}); }, function (dispatch) { return ({
    update: function (location) {
        dispatch(router_1.updateLocation(location));
        dispatch(aside_1.updateAside(aside_2.Type.NONE));
    },
    search: function (searchText, searchResult) { return dispatch(search_1.search(searchText, searchResult)); },
}); })(App);


/***/ }),

/***/ 5591:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Side = void 0;
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var react_redux_1 = __webpack_require__(79);
var aside_1 = __webpack_require__(7590);
var aside_2 = __webpack_require__(3832);
var Logotype_1 = __webpack_require__(2463);
var Language_1 = __webpack_require__(1950);
var Languages_1 = __webpack_require__(9053);
var Burger_1 = __webpack_require__(6454);
var Donate_1 = __webpack_require__(4287);
var Menu_1 = __webpack_require__(9186);
var block = bem_cn_1.block('aside');
__webpack_require__(7240);
var Side;
(function (Side) {
    Side["LEFT"] = "left";
    Side["RIGHT"] = "right";
})(Side = exports.Side || (exports.Side = {}));
var Aside = /** @class */ (function (_super) {
    __extends(Aside, _super);
    function Aside() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aside.prototype.render = function () {
        if (this.props.side === Side.LEFT) {
            return (React.createElement("aside", { className: block({ side: this.props.side }) },
                React.createElement("span", { className: block('icons') },
                    React.createElement(Logotype_1.default, null),
                    React.createElement(Language_1.default, null),
                    React.createElement(Burger_1.default, null),
                    React.createElement(Donate_1.default, null)),
                React.createElement("div", { className: block('content', {
                        active: this.props.aside === aside_2.Type.MENU,
                        type: 'menu',
                    }) },
                    React.createElement(Menu_1.default, null)),
                React.createElement("div", { className: block('content', {
                        active: this.props.aside === aside_2.Type.LANGUAGE,
                        type: 'language',
                    }) },
                    React.createElement(Languages_1.default, null))));
        }
        else if (this.props.side === Side.RIGHT) {
            return (React.createElement("aside", { className: block({ side: this.props.side }) }));
        }
        return (React.createElement("aside", { className: block({ side: this.props.side }) }));
    };
    return Aside;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    aside: state.aside.aside,
}); }, function (dispatch) { return ({
    update: function (aside) { return dispatch(aside_1.updateAside(aside)); },
}); })(Aside);


/***/ }),

/***/ 3007:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var Link_1 = __webpack_require__(5038);
var Icon_1 = __webpack_require__(3921);
var block = bem_cn_1.block('badges');
__webpack_require__(4503);
var Badges = /** @class */ (function (_super) {
    __extends(Badges, _super);
    function Badges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Badges.prototype.render = function () {
        if (!Array.isArray(this.props.badges) || this.props.badges.length === 0) {
            return;
        }
        return (React.createElement("div", { className: block() }, this.props.badges.map(function (badge, i) {
            if (typeof badge.img === 'string') {
                return (React.createElement(Link_1.default, { to: badge.link, key: i, className: block('badge') },
                    React.createElement("img", { src: badge.img, className: block('badge'), alt: badge.alt, width: badge.width, height: badge.height })));
            }
            else {
                return (React.createElement(Link_1.default, { to: badge.link, key: i, className: block('badge') }, Icon_1.Icon(badge.img.default)));
            }
        })));
    };
    return Badges;
}(React.Component));
exports.default = Badges;


/***/ }),

/***/ 6259:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var react_redux_1 = __webpack_require__(79);
var bem_cn_1 = __webpack_require__(2469);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(7615);
var block = bem_cn_1.block('bread-crumb');
__webpack_require__(8884);
var BreadCrumb = /** @class */ (function (_super) {
    __extends(BreadCrumb, _super);
    function BreadCrumb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadCrumb.prototype.render = function () {
        var currentPath = ("/" + (this.props.location || '') + "/").replace(/\/+/ig, '/').split('/');
        var path = [currentPath.shift()];
        var breadcrumb = [];
        for (var _i = 0, currentPath_1 = currentPath; _i < currentPath_1.length; _i++) {
            var c = currentPath_1[_i];
            var p = path.join('/') + '/';
            var v = index_1.PAGES[p].metadata;
            breadcrumb.push((React.createElement(Link_1.default, { key: p, to: p }, v.menu)));
            path.push(c);
        }
        return (React.createElement("nav", { className: block() }, breadcrumb));
    };
    return BreadCrumb;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    location: state.router.location,
}); }, function (dispatch) { return ({}); })(BreadCrumb);


/***/ }),

/***/ 6454:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bind_decorator_1 = __webpack_require__(954);
var react_redux_1 = __webpack_require__(79);
var aside_1 = __webpack_require__(7590);
var aside_2 = __webpack_require__(3832);
var bem_cn_1 = __webpack_require__(2469);
var block = bem_cn_1.block('burger');
__webpack_require__(9973);
var Burger = /** @class */ (function (_super) {
    __extends(Burger, _super);
    function Burger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Burger.prototype.render = function () {
        return (React.createElement("span", { className: block({ animation: this.props.aside === aside_2.Type.MENU ? 'forward' : 'backwards' }), onClick: this.handleClick },
            React.createElement("span", { className: block('content') },
                React.createElement("span", { className: block('line', { line: '1' }) }),
                React.createElement("span", { className: block('line', { line: '2' }) }),
                React.createElement("span", { className: block('line', { line: '3' }) }))));
    };
    Burger.prototype.handleClick = function () {
        this.props.update(this.props.aside === aside_2.Type.MENU ? undefined : aside_2.Type.MENU);
    };
    __decorate([
        bind_decorator_1.default
    ], Burger.prototype, "handleClick", null);
    return Burger;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    aside: state.aside.aside,
}); }, function (dispatch) { return ({
    update: function (aside) { return dispatch(aside_1.updateAside(aside)); },
}); })(Burger);


/***/ }),

/***/ 9450:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var bind_decorator_1 = __webpack_require__(954);
var block = bem_cn_1.block('code');
__webpack_require__(476);
var Code = /** @class */ (function (_super) {
    __extends(Code, _super);
    function Code() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Code.prototype.componentDidMount = function () {
        if (typeof window !== 'undefined' &&
            this.getType() !== 'txt') {
            this.watch();
        }
    };
    Code.prototype.render = function () {
        return (React.createElement("pre", { className: block(), ref: this.handleRef },
            React.createElement("code", { className: "lang-" + this.getType() }, this.props.data)));
    };
    Code.prototype.getType = function () {
        if (this.props.src.endsWith('.js')) {
            return 'javascript';
        }
        if (this.props.src.endsWith('.ts')) {
            return 'typescript';
        }
        if (this.props.src.endsWith('.json')) {
            return 'json';
        }
        return 'txt';
    };
    Code.prototype.watch = function () {
        var _this = this;
        requestAnimationFrame(function () {
            if (window.Visibility.checkVisibility(_this.ref) > 0.5) {
                window.Highlight.highlightBlock(_this.ref);
            }
            else {
                _this.watch();
            }
        });
    };
    Code.prototype.handleRef = function (ref) {
        this.ref = ref;
    };
    __decorate([
        bind_decorator_1.default
    ], Code.prototype, "watch", null);
    __decorate([
        bind_decorator_1.default
    ], Code.prototype, "handleRef", null);
    return Code;
}(React.Component));
exports.default = Code;


/***/ }),

/***/ 2576:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var Analytics_1 = __webpack_require__(9310);
var Accordion_1 = __webpack_require__(1863);
var Comments = /** @class */ (function (_super) {
    __extends(Comments, _super);
    function Comments() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comments.prototype.render = function () {
        var Disqus = __webpack_require__(9028);
        return (React.createElement(Accordion_1.default, { title: '' },
            React.createElement(Disqus.DiscussionEmbed, { shortname: 'crazysquirrelru', config: {
                    url: this.props.href,
                    identifier: this.props.pathname,
                    title: this.props.title,
                    onNewComment: function () {
                        Analytics_1.default.event({
                            category: 'comment',
                            action: 'new',
                        });
                    },
                } })));
    };
    return Comments;
}(React.Component));
exports.default = Comments;


/***/ }),

/***/ 4287:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var Link_1 = __webpack_require__(5038);
var block = bem_cn_1.block('donate');
__webpack_require__(5008);
var Donate = /** @class */ (function (_super) {
    __extends(Donate, _super);
    function Donate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Donate.prototype.render = function () {
        return (React.createElement(Link_1.default, { to: 'https://money.yandex.ru/to/41001951616035', title: '\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u043D\u0430\u0441', replaceClassName: block() }));
    };
    return Donate;
}(React.Component));
exports.default = Donate;


/***/ }),

/***/ 1348:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var block = bem_cn_1.block('footer');
__webpack_require__(2730);
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("footer", { className: block() }, this.props.children));
    };
    return Main;
}(React.Component));
exports.default = Main;


/***/ }),

/***/ 3921:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IconCross = exports.IconSquirrel = exports.IconMap = exports.Icon = exports.IconSquirrelSVG = exports.IconCrossSVG = exports.IconMapSVG = void 0;
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
exports.IconMapSVG = __webpack_require__(9044).default;
exports.IconCrossSVG = __webpack_require__(4438).default;
exports.IconSquirrelSVG = __webpack_require__(9015).default;
var block = bem_cn_1.block('icon');
function Icon(icon, props) {
    if (props === void 0) { props = {}; }
    if (!icon || !icon.id) {
        return '';
    }
    var locals = {
        fill: props.fill,
    };
    var id = icon.id.replace('-usage', '');
    return (React.createElement("svg", { className: block(), viewBox: icon.viewBox, ref: props.ref },
        React.createElement("use", __assign({ xlinkHref: "#" + id }, locals))));
}
exports.Icon = Icon;
function IconMap(props) {
    return Icon(exports.IconMapSVG, props);
}
exports.IconMap = IconMap;
function IconSquirrel(props) {
    return Icon(exports.IconSquirrelSVG, props);
}
exports.IconSquirrel = IconSquirrel;
function IconCross(props) {
    return Icon(exports.IconCrossSVG, props);
}
exports.IconCross = IconCross;


/***/ }),

/***/ 1950:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var react_redux_1 = __webpack_require__(79);
var bind_decorator_1 = __webpack_require__(954);
var bem_cn_1 = __webpack_require__(2469);
var aside_1 = __webpack_require__(7590);
var aside_2 = __webpack_require__(3832);
var Icon_1 = __webpack_require__(3921);
var block = bem_cn_1.block('language');
__webpack_require__(6962);
var Language = /** @class */ (function (_super) {
    __extends(Language, _super);
    function Language() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Language.prototype.render = function () {
        return (React.createElement("span", { className: block({ active: this.props.aside === aside_2.Type.LANGUAGE }), onClick: this.handleClick },
            React.createElement("span", { className: block('content') }, Icon_1.IconMap())));
    };
    Language.prototype.handleClick = function () {
        this.props.update(this.props.aside === aside_2.Type.LANGUAGE ? undefined : aside_2.Type.LANGUAGE);
    };
    __decorate([
        bind_decorator_1.default
    ], Language.prototype, "handleClick", null);
    return Language;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    aside: state.aside.aside,
}); }, function (dispatch) { return ({
    update: function (aside) { return dispatch(aside_1.updateAside(aside)); },
}); })(Language);


/***/ }),

/***/ 9053:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var Link_1 = __webpack_require__(5038);
var block = bem_cn_1.block('menu');
var Languages = /** @class */ (function (_super) {
    __extends(Languages, _super);
    function Languages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Languages.prototype.render = function () {
        return (React.createElement("nav", { className: block() },
            React.createElement("ol", null,
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://ru.crazysquirrel.ru' }, "Russian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://en.crazysquirrel.ru' }, "English")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://hy.crazysquirrel.ru' }, "Armenian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://cs.crazysquirrel.ru' }, "Czech")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://no.crazysquirrel.ru' }, "Norwegian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://sq.crazysquirrel.ru' }, "Albanian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://nl.crazysquirrel.ru' }, "Dutch")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://fr.crazysquirrel.ru' }, "French")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://uk.crazysquirrel.ru' }, "Ukrainian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://ro.crazysquirrel.ru' }, "Romanian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://az.crazysquirrel.ru' }, "Azerbaijan")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://el.crazysquirrel.ru' }, "Greek")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://sr.crazysquirrel.ru' }, "Serbian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://lv.crazysquirrel.ru' }, "Latvian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://be.crazysquirrel.ru' }, "Belarusian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://es.crazysquirrel.ru' }, "Spanish")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://ca.crazysquirrel.ru' }, "Catalan")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://it.crazysquirrel.ru' }, "Italian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://tr.crazysquirrel.ru' }, "Turkish")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://sk.crazysquirrel.ru' }, "Slovak")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://hr.crazysquirrel.ru' }, "Croatian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://lt.crazysquirrel.ru' }, "Lithuanian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://pl.crazysquirrel.ru' }, "Polish")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://bg.crazysquirrel.ru' }, "Bulgarian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://pt.crazysquirrel.ru' }, "Portuguese")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://mk.crazysquirrel.ru' }, "Macedonian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://de.crazysquirrel.ru' }, "German")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://da.crazysquirrel.ru' }, "Danish")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://sv.crazysquirrel.ru' }, "Swedish")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://sl.crazysquirrel.ru' }, "Slovenian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://hu.crazysquirrel.ru' }, "Hungarian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://et.crazysquirrel.ru' }, "Estonian")),
                React.createElement("li", null,
                    React.createElement(Link_1.default, { to: 'https://fi.crazysquirrel.ru' }, "Finnish")))));
    };
    return Languages;
}(React.Component));
exports.default = Languages;


/***/ }),

/***/ 5038:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var classnames_1 = __webpack_require__(4058);
var index_1 = __webpack_require__(1064);
var react_router_dom_1 = __webpack_require__(2146);
var index_2 = __webpack_require__(7615);
var block = bem_cn_1.block('link');
__webpack_require__(3029);
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function () {
        var locals = {
            className: this.props.replaceClassName || classnames_1.default(block(), this.props.className),
            title: this.props.title || index_1.prop(index_2.PAGES[this.props.to], 'metadata.menu'),
        };
        if (this.props.to) {
            if (this.props.to.startsWith('http')) {
                return (React.createElement("a", __assign({}, locals, { target: '_blank', rel: 'noreferrer', href: this.props.to }), this.props.children));
            }
            else {
                return (React.createElement(react_router_dom_1.NavLink, __assign({}, locals, { to: this.props.to, exact: true, activeClassName: (this.props.replaceClassName || block({ active: true })).toString() }), this.props.children));
            }
        }
        else {
            return (React.createElement("span", __assign({}, locals), this.props.children));
        }
    };
    return Link;
}(React.Component));
exports.default = Link;


/***/ }),

/***/ 2463:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var Link_1 = __webpack_require__(5038);
var Icon_1 = __webpack_require__(3921);
var block = bem_cn_1.block('logotype');
__webpack_require__(9223);
var Logotype = /** @class */ (function (_super) {
    __extends(Logotype, _super);
    function Logotype() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Logotype.prototype.render = function () {
        return (React.createElement(Link_1.default, { to: '/', replaceClassName: block() }, Icon_1.IconSquirrel()));
    };
    return Logotype;
}(React.Component));
exports.default = Logotype;


/***/ }),

/***/ 2919:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var block = bem_cn_1.block('main');
__webpack_require__(4071);
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("main", { className: block() }, this.props.children));
    };
    return Main;
}(React.Component));
exports.default = Main;


/***/ }),

/***/ 9186:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var react_redux_1 = __webpack_require__(79);
var bem_cn_1 = __webpack_require__(2469);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(7615);
var block = bem_cn_1.block('menu');
__webpack_require__(3183);
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        this.tree = Object.keys(index_1.PAGES).reduce(function (a, v) {
            var localV = v.split('/');
            localV.pop();
            localV.pop();
            if (localV.length > 0) {
                var localLocalV = localV.join('/') + '/';
                a[localLocalV] = a[localLocalV] || {};
                a[localLocalV][v] = index_1.PAGES[v];
            }
            return a;
        }, {});
        return (React.createElement("nav", { className: block() }, this.buildMenu('/')));
    };
    Menu.prototype.buildMenu = function (prefix) {
        var _this = this;
        var items = Object.keys(this.tree[prefix] || {}).map(function (v) { return (React.createElement("li", { key: v },
            React.createElement(Link_1.default, { to: v }, index_1.PAGES[v].metadata.menu),
            _this.buildMenu(v))); });
        if (items.length === 0) {
            return '';
        }
        return (React.createElement("ol", null, items));
    };
    return Menu;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    location: state.router.location,
}); }, function (dispatch) { return ({}); })(Menu);


/***/ }),

/***/ 7250:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Publisher = exports.Author = void 0;
var React = __webpack_require__(9297);
var Author = function (_a) {
    var name = _a.name, url = _a.url;
    return (React.createElement("span", { itemScope: true, itemProp: 'author', itemType: 'https://schema.org/Person' },
        React.createElement("meta", { itemProp: 'name', content: name }),
        React.createElement("link", { itemProp: 'url', href: url })));
};
exports.Author = Author;
var Publisher = function () { return (React.createElement("span", { itemScope: true, itemProp: 'publisher', itemType: 'https://schema.org/Organization' },
    React.createElement("meta", { itemProp: 'name', content: {"name":"CrazySquirrel","short_name":"CrazySquirrel","long_name":"CrazySquirrel","description":"Many useful tools for web professionals in different spheres – from the creation to website promotion","icons":[{"src":"/favicons/android-chrome-36x36.png","sizes":"36x36","type":"image/png"},{"src":"/favicons/android-chrome-48x48.png","sizes":"48x48","type":"image/png"},{"src":"/favicons/android-chrome-72x72.png","sizes":"72x72","type":"image/png"},{"src":"/favicons/android-chrome-96x96.png","sizes":"96x96","type":"image/png"},{"src":"/favicons/android-chrome-144x144.png","sizes":"144x144","type":"image/png"},{"src":"/favicons/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/favicons/android-chrome-256x256.png","sizes":"256x256","type":"image/png"}],"theme_color":"#1c262f","background_color":"#1c262f","start_url":"https://crazysquirrel.ru","display":"standalone","orientation":"landscape"}.short_name }),
    React.createElement("meta", { itemProp: 'address', content: '111625, \u0420\u043E\u0441\u0441\u0438\u044F, \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0421\u0432\u044F\u0442\u043E\u043E\u0437\u0435\u0440\u0441\u043A\u0430\u044F, 13' }),
    React.createElement("meta", { itemProp: 'telephone', content: '+7 (964) 799 - 94 - 81' }),
    React.createElement("span", { itemScope: true, itemProp: 'logo', itemType: 'https://schema.org/ImageObject' },
        React.createElement("link", { itemProp: 'contentUrl', href: 'https://dsps.crazysquirrel.ru/favicon/android-chrome-512x512.png' }),
        React.createElement("link", { itemProp: 'url', href: 'https://dsps.crazysquirrel.ru/favicon/android-chrome-512x512.png' }),
        React.createElement("meta", { itemProp: 'width', content: '512' }),
        React.createElement("meta", { itemProp: 'height', content: '512' })))); };
exports.Publisher = Publisher;


/***/ }),

/***/ 1053:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var Analytics_1 = __webpack_require__(9310);
var block = bem_cn_1.block('share');
__webpack_require__(1364);
var Share = /** @class */ (function (_super) {
    __extends(Share, _super);
    function Share() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Share.prototype.render = function () {
        return (React.createElement("div", { className: block() },
            React.createElement("div", { className: block('item', { type: 'vk' }), onClick: this.handleClick.bind(this, 'vkontakte') }),
            React.createElement("div", { className: block('item', { type: 'ok' }), onClick: this.handleClick.bind(this, 'odnoklassniki') }),
            React.createElement("div", { className: block('item', { type: 'facebook' }), onClick: this.handleClick.bind(this, 'facebook') }),
            React.createElement("div", { className: block('item', { type: 'twitter' }), onClick: this.handleClick.bind(this, 'twitter') }),
            React.createElement("div", { className: block('item', { type: 'google' }), onClick: this.handleClick.bind(this, 'google') })));
    };
    Share.prototype.handleClick = function (type, e) {
        var title;
        var description;
        var img;
        Analytics_1.default.event({
            category: 'share',
            action: 'share',
            label: type,
        });
        if (e.currentTarget.getAttribute('data-title')) {
            title = e.currentTarget.parentElement.getAttribute('data-title');
        }
        else if (window.document.querySelector('meta[type=\'og:title\']')) {
            title = window.document.querySelector('meta[type=\'og:title\']').getAttribute('content');
        }
        else if (window.document.querySelector('.og-title')) {
            title = window.document.querySelector('.og-title').getAttribute('data-title');
        }
        else {
            title = window.document.querySelector('title').innerText;
        }
        if (e.currentTarget.parentElement.getAttribute('data-description')) {
            description = e.currentTarget.parentElement.getAttribute('data-description');
        }
        else if (window.document.querySelector('meta[type=\'og:description\']')) {
            description = window.document.querySelector('meta[type=\'og:description\']').getAttribute('content');
        }
        else if (window.document.querySelector('meta[type=\'description\']')) {
            description = window.document.querySelector('meta[type=\'description\']').getAttribute('content');
        }
        else if (window.document.querySelector('.og-description')) {
            description = window.document.querySelector('.og-description').getAttribute('data-description');
        }
        else {
            description = '';
        }
        if (e.currentTarget.parentElement.getAttribute('data-image')) {
            img = e.currentTarget.parentElement.getAttribute('data-image');
        }
        else if (window.document.querySelector('meta[type=\'og:image\']')) {
            img = window.document.querySelector('meta[type=\'og:image\']').getAttribute('content');
        }
        else if (window.document.querySelector('.og-image')) {
            img = window.document.querySelector('.og-image').getAttribute('data-image');
        }
        else if (window.document.querySelector('.logo img')) {
            img = location.protocol + '//' + location.host + window.document.querySelector('link[rel=\'icon\'][sizes=\'192x192\']').getAttribute('href');
        }
        var u = e.currentTarget.parentElement.getAttribute('data-url') || location.href;
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
        var k = '';
        for (var i = 0; i < 5; i++) {
            k += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        var url = '';
        url += 'https://share.pluso.ru/process?';
        url += 'act=share';
        url += '&u=' + encodeURIComponent(u);
        url += '&w=' + screen.width;
        url += '&h=' + screen.height;
        url += '&ref=';
        url += '&uid=1364166423835';
        url += '&k=' + k;
        url += '&type=' + type;
        url += '&t=' + encodeURIComponent(title);
        url += '&s=' + encodeURIComponent(description);
        url += '&img=' + encodeURIComponent(img);
        window.open(url, type, 'toolbar=0,status=0,width=' + Math.min(626, screen.width) + ',height=' + Math.min(436, screen.height) + '');
        e.preventDefault();
    };
    return Share;
}(React.Component));
exports.default = Share;


/***/ }),

/***/ 8119:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = __webpack_require__(9297);
var bem_cn_1 = __webpack_require__(2469);
var react_redux_1 = __webpack_require__(79);
var Badges_1 = __webpack_require__(3007);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(7615);
var block = bem_cn_1.block('sub-menu');
__webpack_require__(9761);
var SubMenu = /** @class */ (function (_super) {
    __extends(SubMenu, _super);
    function SubMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubMenu.prototype.render = function () {
        var _this = this;
        var items = Object.keys(index_1.PAGES).reduce(function (a, v) {
            if (v !== _this.props.location &&
                v.startsWith(_this.props.location) &&
                v.replace(_this.props.location, '').split('/').length <= 2) {
                if (_this.props.extend) {
                    a.push(React.createElement("h2", { key: v + "_h2" },
                        React.createElement(Link_1.default, { to: v }, index_1.PAGES[v].metadata.menu)));
                    if (index_1.PAGES[v].metadata.badges) {
                        a.push(React.createElement(Badges_1.default, { key: v + "_badges", badges: index_1.PAGES[v].metadata.badges }));
                    }
                    if (!_this.props.onlyBadges || !index_1.PAGES[v].metadata.badges) {
                        a.push(React.createElement("p", { key: v + "_p" }, index_1.PAGES[v].metadata.description));
                    }
                }
                else {
                    a.push(React.createElement(Link_1.default, { key: v, to: v }, index_1.PAGES[v].metadata.menu));
                }
            }
            return a;
        }, []);
        if (items.length === 0) {
            return null;
        }
        return (React.createElement("nav", { className: block({ extend: this.props.extend }) }, items));
    };
    return SubMenu;
}(React.Component));
exports.default = react_redux_1.connect(function (state) { return ({
    location: state.router.location,
}); }, function (dispatch) { return ({}); })(SubMenu);


/***/ }),

/***/ 3832:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Type = void 0;
var Type;
(function (Type) {
    Type[Type["NONE"] = 0] = "NONE";
    Type[Type["MENU"] = 1] = "MENU";
    Type[Type["LANGUAGE"] = 2] = "LANGUAGE";
})(Type = exports.Type || (exports.Type = {}));


/***/ }),

/***/ 6365:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: '404 Страница не найдена',
    title: 'Страница не найдена',
    description: 'Страница не найдена',
    keywords: 'Страница не найдена',
    h1: '404 Страница не найдена',
    author: index_2.siastrebov,
    type: index_1.MetadataType.NONE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("img", { src: __webpack_require__(1456), alt: 'Cat', style: {
                margin: '0 auto',
                display: 'block',
                maxWidth: '100%',
            } })));
}
exports.default = default_1;


/***/ }),

/***/ 2855:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Настройка .htaccess',
    title: 'Настройка .htaccess',
    description: 'Файл .htaccess является конфигурационным файлом Apache. Он позволяет задать реакцию сервера на запросы пользователя, настроить кэширование и сжатие, а также разграничить доступ к различным разделам сайта.',
    keywords: 'Настройка .htaccess',
    h1: 'Настройка .htaccess',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0424\u0430\u0439\u043B .htaccess \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u0444\u0430\u0439\u043B\u043E\u043C Apache. \u041E\u043D \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0437\u0430\u0434\u0430\u0442\u044C \u0440\u0435\u0430\u043A\u0446\u0438\u044E \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F, \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043A\u044D\u0448\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0438 \u0441\u0436\u0430\u0442\u0438\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0440\u0430\u0437\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C \u0440\u0430\u0437\u0434\u0435\u043B\u0430\u043C \u0441\u0430\u0439\u0442\u0430,"),
        React.createElement("p", null, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 htaccess \u0434\u043B\u044F \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u0435\u043B\u0438\u043A\u0438, \u0447\u0442\u043E\u0431\u044B \u0443\u043C\u0435\u0441\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0430\u0442\u044C\u0435, \u043D\u043E \u043C\u044B \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C\u0441\u044F \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0432\u0441\u0435 \u0442\u043E\u043D\u043A\u043E\u0441\u0442\u0438 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 Apache, \u0430 \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u043B\u0438\u0448\u044C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 .htaccess \u0434\u043B\u044F \u0443\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u0438\u044F \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u043E\u0432 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435."),
        React.createElement("hr", null),
        React.createElement("p", null, "\u0412\u043E-\u043F\u0435\u0440\u0432\u044B\u0445, \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043C\u0435\u0435\u0442\u0441\u044F \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0437\u0435\u0440\u043A\u0430\u043B\u0430, \u0441\u0430\u0439\u0442 \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u0441 www, \u0442\u0430\u043A \u0438 \u0431\u0435\u0437 \u043D\u0435\u0433\u043E."),
        React.createElement("p", null, "\u0422\u0430\u043A\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u0435\u043B \u043F\u043B\u043E\u0445\u043E \u0442\u0435\u043C \u0447\u0442\u043E:"),
        React.createElement("ul", null,
            React.createElement("li", null, "\u041F\u0443\u0442\u0430\u0435\u0442 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "\u0423\u0445\u0443\u0434\u0448\u0430\u0435\u0442 \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C"),
            React.createElement("li", null, "\u041C\u0435\u0448\u0430\u0435\u0442 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C \u0440\u043E\u0431\u043E\u0442\u0430\u043C \u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u043E \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u0430\u0439\u0442\u0430 (\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0440\u043E\u0431\u043E\u0442\u044B \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441 www \u0438 \u0431\u0435\u0437 www \u0440\u0430\u0437\u043D\u044B\u043C\u0438, \u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u043D\u0438\u0445 \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u043C)")),
        React.createElement("p", null, "\u0414\u043B\u044F \u0438\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u0430 \u0433\u043B\u0430\u0432\u043D\u043E\u0433\u043E \u0437\u0435\u0440\u043A\u0430\u043B\u0430 \u0432 .htaccess \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u0442\u044C:"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.txt', data: __webpack_require__(5445) }),
        React.createElement("p", null, "\u0414\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0435\u0440\u043A\u0430\u043B\u0430 \u0441\u0430\u0439\u0442\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0431\u0435\u0437 www"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.txt', data: __webpack_require__(8835) }),
        React.createElement("p", null, "\u0414\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0437\u0435\u0440\u043A\u0430\u043B\u0430 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0441 www"),
        React.createElement("hr", null),
        React.createElement("p", null, "\u0412\u043E-\u0432\u0442\u043E\u0440\u044B\u0445, \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u0441\u0430\u0439\u0442\u0430 (index.html, index.php \u0438 \u0442.\u0434.)"),
        React.createElement("p", null, "\u0422\u0430\u043A\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u0435\u043B \u043F\u043B\u043E\u0445\u043E \u0442\u0435\u043C \u0447\u0442\u043E:"),
        React.createElement("ul", null,
            React.createElement("li", null, "\u0423\u0445\u0443\u0434\u0448\u0430\u0435\u0442 \u0432\u0438\u0434 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0430\u0439\u0442\u0430 (\u0433\u043E\u0440\u0430\u0437\u0434\u043E \u043F\u0440\u0438\u044F\u0442\u043D\u0435\u0435 \u0432\u0438\u0434\u0435\u0442\u044C \u0438\u043C\u044F \u0441\u0430\u0439\u0442\u0430 \u0431\u0435\u0437 \u0432\u0441\u044F\u043A\u0438\u0445 index \u043D\u0435\u0436\u0435\u043B\u0438 \u0441\u043D\u0438\u043C\u0438)"),
            React.createElement("li", null, "\u041C\u0435\u0448\u0430\u0435\u0442 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C \u0440\u043E\u0431\u043E\u0442\u0430\u043C \u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u043E \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u0430\u0439\u0442\u0430 (\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0440\u043E\u0431\u043E\u0442\u044B \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 \u0441 index \u0438 \u0431\u0435\u0437 \u043D\u0435\u0433\u043E \u043A\u0430\u043A \u0440\u0430\u0437\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u043D\u0438\u0445 \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u043C)")),
        React.createElement("p", null, "\u0414\u043B\u044F \u0438\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u043E\u0432 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0433\u043E \u0444\u0430\u0439\u043B\u0430 \u0441\u0430\u0439\u0442\u0430 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u0442\u044C \u0432 .htaccess:"),
        React.createElement(Code_1.default, { src: './examples/example-3.example.txt', data: __webpack_require__(5206) }),
        React.createElement("hr", null),
        React.createElement("p", null, "\u0412-\u0442\u0440\u0435\u0442\u044C\u0438\u0445, \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u044B GET (\u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043C\u044B\u0445 \u0432 url \u043F\u043E\u0441\u043B\u0435 \u0437\u043D\u0430\u043A\u0430 ?)"),
        React.createElement("p", null, "\u0422\u0430\u043A\u043E\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u0435\u043B \u043F\u043B\u043E\u0445\u043E \u0442\u0435\u043C \u0447\u0442\u043E:"),
        React.createElement("ul", null,
            React.createElement("li", null, "\u0423\u0445\u0443\u0434\u0448\u0430\u0435\u0442 \u0432\u0438\u0434 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0430\u0439\u0442\u0430 (\u0433\u043E\u0440\u0430\u0437\u0434\u043E \u043F\u0440\u0438\u044F\u0442\u043D\u0435\u0435 \u0432\u0438\u0434\u0435\u0442\u044C URL \u0431\u0435\u0437 GET \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u043E\u0432 \u043D\u0435\u0436\u0435\u043B\u0438 \u0441\u043D\u0438\u043C\u0438)"),
            React.createElement("li", null, "\u041C\u0435\u0448\u0430\u0435\u0442 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C \u0440\u043E\u0431\u043E\u0442\u0430\u043C \u0430\u0434\u0435\u043A\u0432\u0430\u0442\u043D\u043E \u0432\u043E\u0441\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u0441\u0430\u0439\u0442\u0430 (\u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0435 \u0440\u043E\u0431\u043E\u0442\u044B \u0441\u0447\u0438\u0442\u0430\u044E\u0442 \u0430\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 \u0441 GET \u0438 \u0431\u0435\u0437 \u043D\u0435\u0433\u043E \u043A\u0430\u043A \u0440\u0430\u0437\u043D\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0430 \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u043D\u0438\u0445 \u0434\u0443\u0431\u043B\u0438\u0440\u0443\u0435\u043C\u044B\u043C)")),
        React.createElement("p", null, "\u0414\u043B\u044F \u0438\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u043E\u0432 GET \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u0442\u044C \u0432 .htaccess:"),
        React.createElement(Code_1.default, { src: './examples/example-4.example.txt', data: __webpack_require__(9176) }),
        React.createElement("hr", null),
        React.createElement("p", null, "\u041E\u0431\u0449\u0435\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0434\u043B\u044F \u0438\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u0434\u0443\u0431\u043B\u0438\u043A\u0430\u0442\u043E\u0432:"),
        React.createElement(Code_1.default, { src: './examples/example-5.example.txt', data: __webpack_require__(9691) }),
        React.createElement("hr", null),
        React.createElement("p", null, "\u0412 \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F\u0445:"),
        React.createElement("ul", null,
            React.createElement("li", null, "RewriteEngine on \u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F/\u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F (\u043F\u0438\u0448\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0430 \u043D\u0430 \u0432\u0435\u0441\u044C htaccess)"),
            React.createElement("li", null,
                "RewriteCond ",
                '%{HTTP_HOST}',
                " !^crazysquirrel\\.ru$ [NC] \u2014 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043A \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F\u043C \u0441\u0430\u0439\u0442\u0430, \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u043E\u0442 \u043D\u0443\u0436\u043D\u043E\u0433\u043E"),
            React.createElement("li", null,
                "RewriteRule ^(.*)$ ",
                React.createElement(Link_1.default, { to: 'https://crazysquirrel.ru/$1' }, "https://crazysquirrel.ru/$1"),
                " [R=301,L] \u2014 \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u043F\u0435\u0440\u0435\u043D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u00AB\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0438\u043C\u044F \u0441\u0430\u0439\u0442\u0430\u00BB"),
            React.createElement("li", null,
                "RewriteCond ",
                '%{QUERY_STRING}',
                " !^$ [NC] \u2014 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u0438\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u043A \u0430\u0434\u0440\u0435\u0441\u0430\u043C \u0443 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0441\u0442\u044C GET \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B"),
            React.createElement("li", null,
                "RewriteCond ",
                '%{THE_REQUEST}',
                " ? [NC] \u2014 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u0443\u0441\u043B\u043E\u0432\u0438\u0435 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u0438\u043C\u0435\u044E\u0449\u0438\u043C ?"),
            React.createElement("li", null,
                "RewriteCond ",
                '%{THE_REQUEST}',
                " !admin [NC] \u2014 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0435\u0442 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0434\u043B\u044F \u0430\u0434\u0440\u0435\u0441\u043E\u0432 \u043D\u0435 \u0438\u043C\u0435\u044E\u0449\u0438\u043C \u0432 \u0441\u0432\u043E\u0435\u043C \u0441\u043E\u0441\u0442\u0430\u0432\u0435 \u0434\u0438\u0440\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u0438 \u0438\u043B\u0438 \u0444\u0430\u0439\u043B\u0430 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u0441\u0430\u0439\u0442\u0430 (\u0435\u0441\u043B\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043D\u0435\u0442 CMS \u0438\u043B\u0438 \u0434\u043B\u044F \u0435\u0451 \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u044E\u0442\u0441\u044F GET \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B, \u0434\u0430\u043D\u043D\u0443\u044E \u0441\u0442\u0440\u043E\u0447\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u043F\u0438\u0441\u0430\u0442\u044C)"),
            React.createElement("li", null, "crazysquirrel.ru \u2014 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "admin \u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u0438 \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "index.php \u2014 \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "R=301 \u2014 \u0444\u043B\u0430\u0433, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0449\u0438\u0439 \u043A\u043E\u0434 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F http \u0434\u043B\u044F \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0430\u0439\u0442\u0430 (301 \u2014 \u0444\u043B\u0430\u0433 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E\u0439 \u0441\u043C\u0435\u043D\u044B \u0430\u0434\u0440\u0435\u0441\u0430)"),
            React.createElement("li", null, "L \u2014 \u0444\u043B\u0430\u0433, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439, \u0447\u0442\u043E \u0434\u0430\u043D\u043D\u043E\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435"),
            React.createElement("li", null, "NC \u2014 \u0444\u043B\u0430\u0433, \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439, \u0447\u0442\u043E \u0434\u043B\u044F \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043D\u0435 \u0432\u0430\u0436\u0435\u043D \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F"))));
}
exports.default = default_1;


/***/ }),

/***/ 4727:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(2855);
exports.routs = {
    '/articles/configure-htaccess/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6220:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Правильный robots.txt',
    title: 'Правильный robots.txt',
    description: 'Файл robots.txt — это основной файл, описывающий правила обработки страниц поисковым роботов. Данный файл нужен для указания основного имени сайта, карты сайта (sitemap.xml), открытых и закрытых разделов сайта.',
    keywords: 'Правильный robots.txt',
    h1: 'Правильный robots.txt',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null,
            "\u0424\u0430\u0439\u043B robots.txt\u00A0\u2014 \u044D\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0444\u0430\u0439\u043B, \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C \u0440\u043E\u0431\u043E\u0442\u043E\u0432. \u0414\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B \u043D\u0443\u0436\u0435\u043D \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0441\u0430\u0439\u0442\u0430, \u043A\u0430\u0440\u0442\u044B \u0441\u0430\u0439\u0442\u0430 (sitemap.xml), \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0445 \u0438\u00A0\u0437\u0430\u043A\u0440\u044B\u0442\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430.",
            React.createElement("br", null),
            " \u0424\u0430\u0439\u043B robots.txt \u0432\u043A\u043B\u044E\u0447\u0430\u0435\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B:"),
        React.createElement("ul", null,
            React.createElement("li", null, "User-agent\u00A0\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0430\u044F \u0434\u043B\u044F \u043A\u0430\u043A\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430 \u043D\u0438\u0436\u0435\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430"),
            React.createElement("li", null,
                React.createElement("ul", null,
                    React.createElement("li", null, "* - \u0432\u0441\u0435 \u0440\u043E\u0431\u043E\u0442\u044B"),
                    React.createElement("li", null, "Yandex\u00A0\u2014 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u043E\u0431\u043E\u0442 \u042F\u043D\u0434\u0435\u043A\u0441"),
                    React.createElement("li", null, "Googlebot\u00A0\u2014 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0440\u043E\u0431\u043E\u0442 Google"),
                    React.createElement("li", null, "StackRambler\u00A0\u2014 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0440\u043E\u0431\u043E\u0442 \u0420\u0430\u043C\u0431\u043B\u0435\u0440"),
                    React.createElement("li", null, "Aport\u00A0\u2014 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0440\u043E\u0431\u043E\u0442 \u0410\u043F\u043E\u0440\u0442"),
                    React.createElement("li", null, "Slurp\u00A0\u2014 \u0440\u043E\u0431\u043E\u0442 Yahoo"),
                    React.createElement("li", null, "MSNBot\u00A0\u2014 \u0440\u043E\u0431\u043E\u0442 MSN"))),
            React.createElement("li", null, "Disallow\u00A0\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0437\u0430\u043F\u0440\u0435\u0442\u0430 \u0447\u0430\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "Allow\u00A0\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0447\u0430\u0441\u0442\u0438 \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "Host\u00A0\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0438\u043C\u0435\u043D\u0438 \u0441\u0430\u0439\u0442\u0430"),
            React.createElement("li", null, "Sitemap\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u044F \u043A\u0430\u0440\u0442\u044B \u0441\u0430\u0439\u0442\u0430 (sitemap.xml)"),
            React.createElement("li", null, "Crawl-delay\u00A0\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u0443\u043A\u0430\u0437\u044B\u0432\u0430\u044E\u0449\u0430\u044F \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u043A\u0443\u043D\u0434 \u0440\u043E\u0431\u043E\u0442 \u043C\u043E\u0436\u0435\u0442 \u0436\u0434\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442\u0430 \u043E\u0442\u00A0\u0441\u0430\u0439\u0442\u0430 (\u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u0430 \u043D\u0430\u00A0\u0441\u0438\u043B\u044C\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u0445, \u0447\u0442\u043E\u0431\u044B \u0440\u043E\u0431\u043E\u0442 \u043D\u0435\u00A0\u043F\u043E\u0441\u0447\u0438\u0442\u0430\u043B \u0441\u0430\u0439\u0442 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C)"),
            React.createElement("li", null, "Clean-param\u00A0\u2014 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u0430 \u043E\u043F\u0438\u0441\u044B\u0432\u0430\u044E\u0449\u0430\u044F \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u043D\u0435\u00A0\u0432\u043B\u0438\u044F\u044E\u0449\u0438\u0435 \u043D\u0430\u00A0\u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0441\u0430\u0439\u0442\u0430")),
        React.createElement("p", null, "\u041F\u043E\u043C\u0438\u043C\u043E \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432 \u0432\u00A0robots.txt \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0441\u043F\u0435\u0446 \u0441\u0438\u043C\u0432\u043E\u043B\u044B:"),
        React.createElement("ul", null,
            React.createElement("li", null, "* - \u043B\u044E\u0431\u0430\u0439 (\u0432\u00A0\u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u0438\u00A0\u043F\u0443\u0441\u0442\u0430\u044F) \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),
            React.createElement("li", null, "$\u00A0\u2014 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u0430")),
        React.createElement("p", null, "\u0414\u043B\u044F \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F robots.txt \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0432\u044B\u0448\u0435\u043F\u0435\u0440\u0435\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0435 \u0434\u0438\u0440\u0435\u043A\u0442\u0438\u0432\u044B \u0438\u00A0\u0441\u043F\u0435\u0442 \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u043F\u043E\u00A0\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C\u0443 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u0443:"),
        React.createElement("ul", null,
            React.createElement("li", null,
                "\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u043C\u044F \u0440\u043E\u0431\u043E\u0442\u0430 \u0434\u043B\u044F \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u043F\u0438\u0448\u0435\u0442\u0441\u044F \u0441\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u0430\u0432\u0438\u043B",
                React.createElement("br", null),
                " (User-agent: * - \u043F\u0440\u0430\u0432\u0438\u043B\u043E \u0434\u043B\u044F \u0432\u0441\u0435\u0445 \u0440\u043E\u0431\u043E\u0442\u043E\u0432)"),
            React.createElement("li", null,
                "\u041F\u0438\u0448\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u043E\u0431\u043E\u0442\u0430",
                React.createElement("br", null),
                " ( Disallow:\u00A0/ - \u0437\u0430\u043F\u0440\u0435\u0442 \u0438\u043D\u0434\u0435\u043A\u0441\u0430\u0446\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430)"),
            React.createElement("li", null,
                "\u041F\u0438\u0448\u0435\u0442\u0441\u044F \u043F\u0435\u0440\u0435\u0447\u0435\u043D\u044C \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432 \u0441\u0430\u0439\u0442\u0430",
                React.createElement("br", null),
                " (Allow: /home/\u00A0\u2014 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D \u0440\u0430\u0437\u0434\u0435\u043B home)"),
            React.createElement("li", null,
                "\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0438\u043C\u044F \u0441\u0430\u0439\u0442\u0430",
                React.createElement("br", null),
                " (Host: crazysquirrel.ru\u00A0\u2014 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0435 \u0438\u043C\u044F \u0441\u0430\u0439\u0442\u0430 crazysquirrel.ru)"),
            React.createElement("li", null,
                "\u0423\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u0434\u043E\u00A0\u0444\u0430\u0439\u043B\u0430 sitemap.xml",
                React.createElement("br", null),
                " (Sitemap: https:// crazysquirrel.ru/sitemap.xml)")),
        React.createElement("p", null, "\u0415\u0441\u043B\u0438 \u043D\u0430\u00A0\u0441\u0430\u0439\u0442\u0435 \u043D\u0435\u0442 \u0437\u0430\u043F\u0440\u0435\u0449\u0435\u043D\u043D\u044B\u0445 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432, \u0442\u043E\u00A0robots.txt \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437\u00A04\u00A0\u0441\u0442\u0440\u043E\u0447\u0435\u043A:"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.txt', data: __webpack_require__(5651) }),
        React.createElement("p", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C robots.txt \u0438\u00A0\u0442\u043E, \u043A\u0430\u043A \u043E\u043D\u00A0\u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430\u00A0\u0438\u043D\u0434\u0435\u043A\u0441\u0430\u0446\u0438\u044E \u0441\u0430\u0439\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0441\u00A0\u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u042F\u043D\u0434\u0435\u043A\u0441\u0430")));
}
exports.default = default_1;


/***/ }),

/***/ 7104:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(6220);
exports.routs = {
    '/articles/correct-robots-txt/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6544:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Правильный sitemap.xml',
    title: 'Правильный sitemap.xml',
    description: 'Файл sitemap.xml — это xml файл, содержащий в себе полную карту сайта. Данный фал позволяет указать все страницы сайта и некоторые их свойства для улучшения работы поисковых роботов.',
    keywords: 'Правильный sitemap.xml',
    h1: 'Правильный sitemap.xml',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0424\u0430\u0439\u043B sitemap.xml \u2014 \u044D\u0442\u043E xml \u0444\u0430\u0439\u043B, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u0432 \u0441\u0435\u0431\u0435 \u043F\u043E\u043B\u043D\u0443\u044E \u043A\u0430\u0440\u0442\u0443 \u0441\u0430\u0439\u0442\u0430. \u0414\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u043B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0443\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0430\u0439\u0442\u0430 \u0438 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0445 \u0440\u043E\u0431\u043E\u0442\u043E\u0432."),
        React.createElement("p", null, "Sitemap.xml \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u0447\u0430\u0441\u0442\u0435\u0439"),
        React.createElement("ul", null,
            React.createElement("li", null,
                '<?xml version="1.0" encoding="UTF-8"?>',
                " \u2014 \u0443\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C \u0432\u0435\u0440\u0441\u0438\u0438 \u0438 \u043A\u043E\u0434\u0438\u0440\u043E\u0432\u043A\u0438 xml \u0444\u0430\u0439\u043B\u0430"),
            React.createElement("li", null,
                '<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">',
                " \u2014 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u043F\u0435\u0440\u0435\u0447\u043D\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u043D\u0430 \u0432\u0435\u0440\u0441\u0438\u044E \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0430 sitemap \u0444\u0430\u0439\u043B\u043E\u0432"),
            React.createElement("li", null,
                React.createElement("ul", null,
                    React.createElement("li", null,
                        '<url>',
                        " \u2014 \u043E\u0442\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"),
                    React.createElement("li", null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                '<loc>https://crazysquirrel.ru/</loc>',
                                " \u2014 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0441\u0430\u0439\u0442\u0430"),
                            React.createElement("li", null,
                                '<lastmod>2013-06-28</lastmod>',
                                " \u2014 \u0434\u0430\u0442\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (\u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 W3C Datetime.)"),
                            React.createElement("li", null,
                                '<changefreq>daily</changefreq>',
                                " \u2014 \u0447\u0430\u0441\u0442\u043E\u0442\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B (always,hourly,daily,weekly,monthly,yearly,never)"),
                            React.createElement("li", null,
                                '<priority>1</priority>',
                                " \u2014 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u043E\u0431\u0449\u0435\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0435 \u0441\u0430\u0439\u0442\u0430 (\u0432\u0435\u043B\u0438\u0447\u0438\u043D\u0430 \u043E\u0442 0 \u0434\u043E 1)"))),
                    React.createElement("li", null,
                        '</url>',
                        " \u2014 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u044F \u043E\u0434\u043D\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"))),
            React.createElement("li", null,
                '</urlset>',
                " \u2014 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u0430 \u043F\u0435\u0440\u0435\u0447\u043D\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446")),
        React.createElement("p", null,
            "\u041D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F, \u043A\u043E\u0433\u0434\u0430 sitemap \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442",
            '<url>',
            " \u0441 \u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C",
            '<loc>',
            " \u0438",
            '<priority>',
            " ",
            React.createElement("br", null),
            "\u041F\u0440\u0438\u043C\u0435\u0440 \u0444\u0430\u0439\u043B\u0430 sitemap.xml (\u0443\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F):"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.txt', data: __webpack_require__(83) }),
        React.createElement("p", null, "\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C sitemap.xml \u043C\u043E\u0436\u043D\u043E \u0441\u00A0\u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u042F\u043D\u0434\u0435\u043A\u0441\u0430."),
        React.createElement("p", null,
            React.createElement(Link_1.default, { to: '/tools/generators/sitemap/' }, "\u0421\u0433\u0435\u043D\u0435\u0440\u0438\u0440\u0443\u0439\u0442\u0435 sitemap.xml"),
            " \u0434\u043B\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430.")));
}
exports.default = default_1;


/***/ }),

/***/ 9911:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(6544);
exports.routs = {
    '/articles/correct-sitemap-xml/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 9202:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var SubMenu_1 = __webpack_require__(8119);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Полезные статьи',
    title: 'Полезные статьи',
    description: 'Полезные статьи',
    keywords: 'Полезные статьи',
    h1: 'Полезные статьи',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement(SubMenu_1.default, { extend: true })));
}
exports.default = default_1;


/***/ }),

/***/ 6470:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(5182);
var routs_2 = __webpack_require__(4727);
var routs_3 = __webpack_require__(9911);
var routs_4 = __webpack_require__(7104);
var index_1 = __webpack_require__(9202);
exports.routs = __assign(__assign(__assign(__assign({ '/articles/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs), routs_4.routs);


/***/ }),

/***/ 1394:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Веб-разработка с нуля',
    title: 'Веб-разработка с нуля',
    description: 'Материалы для изучения веб-разработки с нуля до профессионального уровня.',
    keywords: 'Веб-разработка с нуля',
    h1: 'Веб-разработка с нуля',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("h2", null, " Front-end"),
        React.createElement("h3", null, "\u0412\u0435\u0440\u0441\u0442\u043A\u0430"),
        React.createElement("h4", null, "\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 \u0432\u0435\u0440\u0441\u0442\u043A\u043E\u0439"),
        React.createElement("p", null, "\u0414\u0430\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u0438 \u0438 \u043D\u0435 \u0438\u043C\u0435\u044E\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0435, CSS \u0438 HTML."),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/introduction' }, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/html-basics' }, "\u041E\u0441\u043D\u043E\u0432\u044B HTML")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/html-content' }, "\u0421\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435 \u0432 HTML")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/html5-form' }, "\u0424\u043E\u0440\u043C\u044B \u0432 HTML")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/css-basics' }, "\u041E\u0441\u043D\u043E\u0432\u044B CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/css-text' }, "\u0422\u0435\u043A\u0441\u0442 \u0432 CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/box-model' }, "\u0411\u043B\u043E\u0447\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0432 CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/positioning' }, "\u041F\u043E\u0437\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432 CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/learn-html-css' }, "\u0423\u0440\u043E\u043A\u0438 \u043F\u043E HTML \u0438 CSS"))),
        React.createElement("h5", null, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0438"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://everstudent.ru/blog/htmlcss/30-css-seletors-to-memorize/' }, "CSS-\u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/css/value/size' }, "\u0420\u0430\u0437\u043C\u0435\u0440\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/css/value/color' }, "\u0426\u0432\u0435\u0442\u0430")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/css/value/angle' }, "\u0423\u0433\u043E\u043B\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/css/value/media' }, "\u041C\u0435\u0434\u0438\u0430-\u0437\u0430\u043F\u0440\u043E\u0441\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/css/value/filter' }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=ocstRLlFoQI&list=PLqHlAwsJRxAOAuZ53NGC_1azSdPhAtFTR' }, "\u041E\u0441\u043D\u043E\u0432\u044B HTML"))),
        React.createElement("h4", null, "\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430"),
        React.createElement("p", null, "\u0414\u0430\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0435, CSS \u0438 HTML."),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/diveintohtml5' }, "\u041F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0432 HTML5")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/howtocodeinhtml' }, "\u041A\u0430\u043A \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044C \u043D\u0430 HTML5 \u0438 CSS3")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/html5-css3' }, "HTML5 \u0438 CSS3 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0430\u0445")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/magic-of-css' }, "\u041C\u0430\u0433\u0438\u044F CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/css-advanced' }, "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/advanced-html-css' }, "\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E HTML \u0438 CSS"))),
        React.createElement("h5", null, "\u0421\u0442\u0430\u0442\u044C\u0438"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://habrahabr.ru/post/144003/' }, "\u0410\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0430\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0430")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://habrahabr.ru/post/150071/' }, "Retina")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://habrahabr.ru/company/pechkin/blog/255819/' }, "Email-\u043F\u0438\u0441\u0435\u043C"))),
        React.createElement("h5", null, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0438"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/css' }, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A CSS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/html' }, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A HTML"))),
        React.createElement("h4", null, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0432\u0435\u0440\u0441\u0442\u043A\u0438"),
        React.createElement("p", null, "\u0414\u0430\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0435 \u0438 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445 \u0438\u0437\u0443\u0447\u0438\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u044B \u043A \u0432\u0435\u0440\u0441\u0442\u043A\u0435."),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/font-awesome' }, "Font Awesome")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.udacity.com/course/browser-rendering-optimization--ud860' }, "Browser Rendering Optimization"))),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://ru.bem.info/methodology/key-concepts/' }, "\u041E\u0441\u043D\u043E\u0432\u044B \u0411\u042D\u041C"))),
        React.createElement("h5", null, "\u0421\u0442\u0430\u0442\u044C\u0438"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://habrahabr.ru/company/pechkin/blog/256853/' }, "\u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0445 email-\u043F\u0438\u0441\u0435\u043C (\u0447\u0430\u0441\u0442\u044C 1)")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://habrahabr.ru/company/pechkin/blog/257397/' }, "\u0412\u0451\u0440\u0441\u0442\u043A\u0430 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u044B\u0445 email-\u043F\u0438\u0441\u0435\u043C (\u0447\u0430\u0441\u0442\u044C 2)")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://habrahabr.ru/post/256109/' }, "\u0421\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 CSS-\u043A\u043E\u0434\u0430"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=7Lg-438gAc8&list=PLqHlAwsJRxAPs942EdJ1akeWpOg2yatiM' }, "CSS: Flexbox")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=hTmxbJF2Tts' }, "\u041F\u0438\u0448\u0435\u043C \u0411\u042D\u041C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E"))),
        React.createElement("h5", null, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A\u0438"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://csstriggers.com' }, "\u0420\u0435\u043D\u0434\u0435\u0440\u0438\u043D\u0433 CSS"))),
        React.createElement("h4", null, "\u041D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u0430\u0434 HTML \u0438 CSS"),
        React.createElement("p", null, "\u041C\u0435\u0442\u0430\u044F\u0437\u044B\u043A\u0438 \u044F\u0432\u043B\u044F\u044E\u0449\u0438\u0435\u0441\u044F \u043D\u0430\u0434\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u043C\u0438 \u043D\u0430\u0434 HTML CSS."),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/course/sass' }, "\u041E\u0441\u043D\u043E\u0432\u044B Sass")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/sass' }, "Sass")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/less' }, "Less"))),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://sass-scss.ru/documentation/sassscript/' }, "SassScript")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://jade-lang.com/tutorial/' }, "Jade")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://stylus-lang.com/' }, "Stylus"))),
        React.createElement("h4", null, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438"),
        React.createElement("p", null, "\u0414\u0430\u043D\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u0438\u043C\u0435\u044E\u0449\u0438\u0445 \u0433\u043B\u0443\u0431\u043E\u043A\u0438\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043E \u0432\u0435\u0440\u0441\u0442\u043A\u0435 \u0438 \u0436\u0435\u043B\u0430\u044E\u0449\u0438\u0445 \u0438\u0437\u0443\u0447\u0438\u0442\u044C \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0432\u043E\u0435\u0439 \u0440\u0430\u0431\u043E\u0442\u044B. \u0414\u043B\u044F \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u043D\u0430\u0434\u043E\u0431\u0438\u0442\u0441\u044F \u0437\u043D\u0430\u043D\u0438\u0435 \u0442\u0430\u043A \u0436\u0435 JavaScript \u0438 NodeJs"),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/grunt-getting-started' }, "\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u044F \u043A \u0440\u0430\u0431\u043E\u0442\u0435 \u0441 Grunt")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/building-with-gulp' }, "\u0421\u0431\u043E\u0440\u043A\u0430 \u0441 Gulp")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/automate-with-gulp' }, "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 Gulp")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/bower-gulp-yeoman' }, "Bower, Gulp \u0438 Yeoman")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/node-express-libsass' }, "Node, Express \u0438 libsass: \u043F\u0440\u043E\u0435\u043A\u0442 \u0441 \u043D\u0443\u043B\u044F"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=uPk6lQoTThE&list=PLDyvV36pndZFLTE13V4qNWTZbeipNhCgQ' }, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442 \u043F\u043E Gulp")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=kLMjOd-x0aQ&list=PLDyvV36pndZHfBThhg4Z0822EEG9VGenn' }, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442 \u043F\u043E Webpack"))),
        React.createElement("h4", null, " \u0424\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438 \u0434\u043B\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0438"),
        React.createElement("p", null, " \u0413\u043E\u0442\u043E\u0432\u044B\u0435 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u0438 \u0434\u043B\u044F \u0432\u0435\u0440\u0441\u0442\u043A\u0438 \u043C\u0430\u043A\u0435\u0442\u043E\u0432."),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/layout/bootstrap' }, "Bootstrap"))),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://getbootstrap.com/2.3.2/getting-started.html' }, "Bootstrap")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://foundation.zurb.com/sites/docs/installation.html' }, "Foundation")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://getskeleton.com/#intro' }, "Skeleton"))),
        React.createElement("h3", null, "JavaScript"),
        React.createElement("h4", null, "\u042F\u0437\u044B\u043A JavaScript"),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/learn-javascript' }, "\u0417\u043D\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E \u0441 JavaScript"))),
        React.createElement("h5", null, "\u0423\u0447\u0435\u0431\u043D\u0438\u043A"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/getting-started' }, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/first-steps' }, "\u041E\u0441\u043D\u043E\u0432\u044B JavaScript")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/writing-js' }, "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u0434\u0430")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/data-structures' }, "\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0434\u0430\u043D\u043D\u044B\u0445")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/functions-closures' }, "\u0417\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u044F, \u043E\u0431\u043B\u0430\u0441\u0442\u044C \u0432\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/objects-more' }, "\u041C\u0435\u0442\u043E\u0434\u044B \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 \u0438 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442 \u0432\u044B\u0437\u043E\u0432\u0430")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/js-misc' }, "\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/oop' }, "\u041E\u041E\u041F \u0432 \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u043C \u0441\u0442\u0438\u043B\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/prototypes' }, "\u041E\u041E\u041F \u0432 \u043F\u0440\u043E\u0442\u043E\u0442\u0438\u043F\u043D\u043E\u043C \u0441\u0442\u0438\u043B\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/es-modern' }, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 ES-2015"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=4YfsAz-sNAo&list=PLqHlAwsJRxAOpWPtj2T6HhSzX-lKmKV2q' }, "\u041E\u0441\u043D\u043E\u0432\u044B ES6")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=fGdd9qNwQdQ&list=PLoYCgNOIyGACnrXwo5HMCfOH9VT05znGv' }, "Javascript Tutorial For Beginners")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=fGdd9qNwQdQ&list=PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V' }, "Javascript Fundamentals")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=HkFlM73G-hk&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f' }, "Modular Javascript"))),
        React.createElement("h4", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B"),
        React.createElement("h5", null, "\u0423\u0447\u0435\u0431\u043D\u0438\u043A"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/document' }, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u044B \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/events-and-interfaces' }, "\u041E\u0441\u043D\u043E\u0432\u044B \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0441\u043E\u0431\u044B\u0442\u0438\u044F\u043C\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/event-details' }, "\u0421\u043E\u0431\u044B\u0442\u0438\u044F \u0432 \u0434\u0435\u0442\u0430\u043B\u044F\u0445")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/forms-controls' }, "\u0424\u043E\u0440\u043C\u044B, \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/widgets' }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043E\u0432"))),
        React.createElement("h4", null, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E"),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/canvasdeepdive' }, "\u0413\u043B\u0443\u0431\u043E\u043A\u043E\u0435 \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u0435 \u0432 Canvas"))),
        React.createElement("h5", null, "\u0423\u0447\u0435\u0431\u043D\u0438\u043A"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/webcomponents' }, "\u0412\u0435\u0431-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B: \u0432\u0437\u0433\u043B\u044F\u0434 \u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/ajax' }, "AJAX \u0438 COMET")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/animation' }, "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/optimize' }, "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/frames-and-windows' }, "\u041E\u043A\u043D\u0430 \u0438 \u0424\u0440\u0435\u0439\u043C\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/css-for-js' }, "CSS \u0434\u043B\u044F JavaScript-\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/tools' }, "\u0421\u0443\u043D\u0434\u0443\u0447\u043E\u043A \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/regular-expressions-javascript' }, "\u0420\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0435 \u0432\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://learn.javascript.ru/extra' }, "\u041E \u0432\u0441\u044F\u043A\u043E\u0439 \u0432\u0441\u044F\u0447\u0438\u043D\u0435"))),
        React.createElement("h4", null, "Node.JS"),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/first-node-app' }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 Node"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=ILpS4Fq3lmw&list=PLDyvV36pndZFWfEQpNixIHVvp191Hb3Gg' }, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442 \u043F\u043E Node.JS")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=pU9Q6oiQNd0&list=PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh' }, "Node.js Tutorials"))),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://nodejs.org/dist/latest-v6.x/docs/api/' }, "Node.JS"))),
        React.createElement("h4", null, "jQuery"),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/jqfundamentals' }, "\u041E\u0441\u043D\u043E\u0432\u044B jQuery"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=hMxGhHNOkCU&list=PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_' }, "jQuery Tutorial for Beginners"))),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://api.jquery.com/' }, "jQuery API"))),
        React.createElement("h4", null, "AngularJS"),
        React.createElement("h5", null, "\u041A\u0443\u0440\u0441\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://webref.ru/dev/angular-cookbook' }, "AngularJS. \u0420\u0435\u0446\u0435\u043F\u0442\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"))),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=X_JH1gBJe2E&list=PLqHlAwsJRxANDZPGvgX4DQCtN1TTUCUxx' }, "\u041E\u0441\u043D\u043E\u0432\u044B Angular 2")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=QETUuZ27N0w&list=PLoYCgNOIyGAApoDfJHjmMgGNlYenKg5jO' }, "MEAN Stack Tutorials (MongoDB, Express, Angular, NodeJs)"))),
        React.createElement("h4", null, "React"),
        React.createElement("h5", null, "\u0421\u043A\u0440\u0438\u043D\u043A\u0430\u0441\u0442\u044B"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=MhkGQAoc7bc&list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b' }, "React JS Tutorials")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://www.youtube.com/watch?v=1w-oQ-i1XB8&list=PLoYCgNOIyGADILc3iUJzygCqC8Tt3bRXt' }, "Redux Tutorials"))),
        React.createElement("h2", null, "Back-end"),
        React.createElement("h3", null, "PHP"),
        React.createElement("h4", null, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u044F\u0437\u044B\u043A\u0430"),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.basic-syntax.php' }, "\u041E\u0441\u043D\u043E\u0432\u044B \u0441\u0438\u043D\u0442\u0430\u043A\u0441\u0438\u0441\u0430")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.types.php' }, "\u0422\u0438\u043F\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.variables.php' }, "\u041F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.constants.php' }, "\u041A\u043E\u043D\u0441\u0442\u0430\u043D\u0442\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.expressions.php' }, "\u0412\u044B\u0440\u0430\u0436\u0435\u043D\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.operators.php' }, "\u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.control-structures.php' }, "\u0423\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0449\u0438\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.functions.php' }, "\u0424\u0443\u043D\u043A\u0446\u0438\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.oop5.php' }, "\u041A\u043B\u0430\u0441\u0441\u044B \u0438 \u043E\u0431\u044A\u0435\u043A\u0442\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.namespaces.php' }, "\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0430 \u0438\u043C\u0435\u043D"))),
        React.createElement("h4", null, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E"),
        React.createElement("h5", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.errors.php' }, "Errors")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.exceptions.php' }, "\u0418\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.generators.php' }, "Generators")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/language.references.php' }, "\u0421\u0441\u044B\u043B\u043A\u0438. \u0420\u0430\u0437\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/reserved.variables.php' }, "\u041F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/reserved.exceptions.php' }, "\u041F\u0440\u0435\u0434\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0435 \u0438\u0441\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/reserved.interfaces.php' }, "\u0412\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u044B\u0435 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u044B \u0438 \u043A\u043B\u0430\u0441\u0441\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/context.php' }, "\u041A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u044B\u0435 \u043E\u043F\u0446\u0438\u0438 \u0438 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/wrappers.php' }, "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u044B\u0435 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 (wrappers)")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/security.php' }, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/features.php' }, "\u041E\u0442\u043B\u0438\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/funcref.php' }, "\u0421\u043F\u0440\u0430\u0432\u043E\u0447\u043D\u0438\u043A \u0444\u0443\u043D\u043A\u0446\u0438\u0439")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://php.net/manual/ru/internals2.php' }, "\u042F\u0434\u0440\u043E PHP: \u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u0445\u0430\u043A\u0435\u0440\u0430"))),
        React.createElement("h2", null, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E"),
        React.createElement("h3", null, "\u0421\u0438\u0441\u0442\u0435\u043C\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0432\u0435\u0440\u0441\u0438\u0439"),
        React.createElement("h4", null, " Git"),
        React.createElement("h5", null, "\u0423\u0447\u0435\u0431\u043D\u0438\u043A"),
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5' }, "\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git' }, "\u041E\u0441\u043D\u043E\u0432\u044B Git")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git' }, "\u0412\u0435\u0442\u0432\u043B\u0435\u043D\u0438\u0435 \u0432 Git")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/Git-%D0%BD%D0%B0-%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B5' }, "Git \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/%D0%A0%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B9-Git' }, "\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 Git")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B-Git' }, "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B Git")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/%D0%9D%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-Git' }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 Git")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/Git-%D0%B8-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%B5-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9' }, "Git \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0432\u0435\u0440\u0441\u0438\u0439")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://git-scm.com/book/ru/v1/Git-%D0%B8%D0%B7%D0%BD%D1%83%D1%82%D1%80%D0%B8' }, "Git \u0438\u0437\u043D\u0443\u0442\u0440\u0438")))));
}
exports.default = default_1;


/***/ }),

/***/ 5182:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(1394);
exports.routs = {
    '/articles/web-development-from-scratch/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 9633:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Книги',
    title: 'Книги',
    description: 'Книги',
    keywords: 'Книги',
    h1: 'Книги',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438:"),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: 'https://dsps.crazysquirrel.ru' }, "\u0410\u043B\u0433\u043E\u0440\u0438\u0442\u043C\u044B, \u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B \u0434\u0430\u043D\u043D\u044B\u0445 \u0438 \u0420\u0435\u0448\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u0447\u044C \u0441 \u0438\u043D\u0442\u0435\u0440\u044C\u0432\u044C\u044E")))));
}
exports.default = default_1;


/***/ }),

/***/ 8218:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(9633);
exports.routs = {
    '/books/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 9054:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Контакты',
    title: 'Контакты',
    description: 'Контакты',
    keywords: 'Контакты',
    h1: 'Контакты',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u041F\u0440\u0438\u0441\u044B\u043B\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u0438\u0434\u0435\u0438, \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u0438 \u0442.\u0434."),
        React.createElement("p", null, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u043C\u043D\u043E\u0439:"),
        React.createElement("ul", null,
            React.createElement("li", null, " \u0427\u0435\u0440\u0435\u0437 \u0444\u043E\u0440\u043C\u0443 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432"),
            React.createElement("li", null,
                "\u041F\u043E \u043F\u043E\u0447\u0442\u0435 ",
                React.createElement("a", { href: 'mailto:info@crazysquirrel.ru' }, "info@crazysquirrel.ru")),
            React.createElement("li", null,
                "\u0427\u0435\u0440\u0435\u0437 \u0441\u043E\u0446 \u0441\u0435\u0442\u0438:",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: 'https://vk.com/id131848924' }, "VK")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: 'https://www.facebook.com/yastreb.serdg' }, "Facebook")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: 'https://plus.google.com/102372703586362573921/posts' }, "GooglePlus")))),
            React.createElement("li", null,
                "\u041F\u0440\u043E\u0447\u0435\u0435:",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: 'https://github.com/CrazySquirrel' }, "GitHub")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: 'https://www.youtube.com/channel/UC4CFtjun6VXusZmBnApn-bQ' }, "YouTube")))))));
}
exports.default = default_1;


/***/ }),

/***/ 8202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(9054);
exports.routs = {
    '/contacts/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 2986:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Главная',
    title: 'Инструменты для web мастеров, программистов, дизайнеров, верстальщиков и seo оптимизаторов',
    description: 'Множество полезных профессиональных инструментов для web специалистов разных областей – от создания до продвижения сайта',
    keywords: 'инструменты для web мастера, инструменты для программиста, инструменты для дизайнера, инструменты для верстальщика, инструменты для seo оптимизатора',
    h1: 'Инструменты для web мастеров, программистов, дизайнеров, верстальщиков и seo оптимизаторов',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0421\u0430\u0439\u0442 CrazySquirrel \u2013 \u044D\u0442\u043E \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A, \u0433\u043E\u0442\u043E\u0432\u044B\u0439 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0445 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 web \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432: \u0434\u0438\u0437\u0430\u0439\u043D\u0435\u0440\u043E\u0432, \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432, \u0432\u0435\u0440\u0441\u0442\u0430\u043B\u044C\u0449\u0438\u043A\u043E\u0432 \u0438 seo-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0442\u043E\u0440\u043E\u0432."),
        React.createElement("p", null, "\u0412\u0441\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435, \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. \u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0440\u0430\u0437\u0431\u0438\u0442\u044B \u043D\u0430 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u043B\u0435\u0432\u043E\u043C \u043C\u0435\u043D\u044E."),
        React.createElement("p", null, "\u041F\u043E\u043C\u0438\u043C\u043E \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u043E\u0432 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0438\u043C\u0435\u044E\u0442\u0441\u044F \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438, \u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u0435\u043A\u0440\u0435\u0442\u044B web \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043E\u043A, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0434\u0430\u0435\u0442\u0441\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0447\u0430\u0441\u0442\u043E \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0449\u0438\u0445 \u043F\u0440\u043E\u0431\u043B\u0435\u043C.")));
}
exports.default = default_1;


/***/ }),

/***/ 1801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var routs_1 = __webpack_require__(6470);
var routs_2 = __webpack_require__(4819);
var routs_3 = __webpack_require__(4257);
var routs_4 = __webpack_require__(9590);
var routs_5 = __webpack_require__(8202);
var routs_6 = __webpack_require__(8218);
var routs_7 = __webpack_require__(8312);
var index_1 = __webpack_require__(2986);
var _404_1 = __webpack_require__(6365);
exports.default = __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ '/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs), routs_4.routs), routs_6.routs), routs_5.routs), routs_7.routs), { '*': {
        page: _404_1.default,
        metadata: _404_1.metadata,
    } });


/***/ }),

/***/ 2053:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Поиск',
    title: 'Поиск',
    description: 'Поиск',
    keywords: 'Поиск',
    h1: 'Поиск',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 8312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(2053);
exports.routs = {
    '/search/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 9621:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
var SubMenu_1 = __webpack_require__(8119);
exports.metadata = {
    menu: 'Репозитории git',
    title: 'Репозитории git',
    description: 'Репозитории git',
    keywords: 'Репозитории git',
    h1: 'Репозитории git',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement(SubMenu_1.default, { extend: true, onlyBadges: true })));
}
exports.default = default_1;


/***/ }),

/***/ 2320:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Rambler-Landing-Page',
    title: 'Rambler-Landing-Page',
    description: 'Rambler-Landing-Page',
    keywords: 'Rambler-Landing-Page',
    h1: 'Rambler-Landing-Page',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/Rambler-Landing-Page',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null,
            "The repository for ",
            React.createElement(Link_1.default, { to: '/jobs/javascript-developer/' }, "Rambler Landing Page")),
        React.createElement("p", null,
            "For work project should contain pm2 settings file ",
            React.createElement("strong", null, "server.config.json"),
            " with env variables:"),
        React.createElement("ul", null,
            React.createElement("li", null, "STATIC_FOLDER"),
            React.createElement("li", null, "CV_FOLDER"),
            React.createElement("li", null, "SENTRY_JS"),
            React.createElement("li", null, "SENTRY_NODE"),
            React.createElement("li", null, "EMAIL_HOST"),
            React.createElement("li", null, "EMAIL_PORT"),
            React.createElement("li", null, "EMAIL_LOGIN"),
            React.createElement("li", null, "EMAIL_PASSWORD"),
            React.createElement("li", null, "EMAIL_FROM"),
            React.createElement("li", null, "EMAIL_TO"))));
}
exports.default = default_1;


/***/ }),

/***/ 2641:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(2320);
exports.routs = {
    '/solutions/git/rambler-landing-page/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6057:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(2641);
var routs_2 = __webpack_require__(90);
var index_1 = __webpack_require__(9621);
exports.routs = __assign(__assign({ '/solutions/git/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs);


/***/ }),

/***/ 2226:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'UniqueTransport',
    title: 'UniqueTransport',
    description: 'UniqueTransport',
    keywords: 'UniqueTransport',
    h1: 'UniqueTransport',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/UniqueTransport',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "This plugin is designed to deliver a message from Alice to Bob at any cost."),
        React.createElement("h2", null, "Description"),
        React.createElement("p", null, "The basic idea of the script is that there are two devices (client Alice and the server Bob). Alice needs to send a message to Bob and get his data. While there is a third party that monitors the traffic between Alice and Bob and does some queries."),
        React.createElement("p", null, "Thus to send the message using multiple channels:"),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement("strong", null, "xhr"),
                " support http methods GET, POST, PUT, PATH and data transfer path, file name, parameters, headers and request body."),
            React.createElement("li", null,
                React.createElement("strong", null, "fetch"),
                " - support http methods GET, POST, PUT, PATH and data transfer path, file name, parameters, headers and request body."),
            React.createElement("li", null,
                React.createElement("strong", null, "iframe"),
                " - data communication path, the file name and parameters."),
            React.createElement("li", null,
                React.createElement("strong", null, "script"),
                " - data communication path, the file name and parameters."),
            React.createElement("li", null,
                React.createElement("strong", null, "image"),
                " - data communication path, the file name and parameters."),
            React.createElement("li", null,
                React.createElement("strong", null, "style"),
                " - with data transfer in the path, the file name and parameters.")),
        React.createElement("p", null, "Channel transmission method and transmission parts data are selected randomly. Data requests are performed until."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("p", null, "For details, see /src/ts/."),
        React.createElement("h2", null, "Usage"),
        React.createElement("h3", null, "Client"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.ts', data: __webpack_require__(1402) }),
        React.createElement("h3", null, "Server"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(3326) }),
        React.createElement("h2", null, "Settings"),
        React.createElement("h3", null, "Client"),
        React.createElement("p", null, "Main settings"),
        React.createElement(Code_1.default, { src: './examples/example-3.example.txt', data: __webpack_require__(8026) }),
        React.createElement("p", null, "Emit settings"),
        React.createElement(Code_1.default, { src: './examples/example-4.example.txt', data: __webpack_require__(593) }),
        React.createElement("h3", null, "Server"),
        React.createElement("p", null, "Main settings"),
        React.createElement(Code_1.default, { src: './examples/example-5.example.txt', data: __webpack_require__(6075) })));
}
exports.default = default_1;


/***/ }),

/***/ 90:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(2226);
exports.routs = {
    '/solutions/git/uniquetransport/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 5248:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
var SubMenu_1 = __webpack_require__(8119);
exports.metadata = {
    menu: 'Готовые решения',
    title: 'Готовые решения',
    description: 'Готовые решения',
    keywords: 'Готовые решения',
    h1: 'Готовые решения',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement(SubMenu_1.default, { extend: true })));
}
exports.default = default_1;


/***/ }),

/***/ 343:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'CSShare',
    title: 'CSShare',
    description: 'CSShare',
    keywords: 'CSShare',
    h1: 'CSShare',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSShare/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSShare',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSShare/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSShare/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSShare/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSShare',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null,
            "jQuery plugin for making share buttons. This plugin allows you to create share buttons. You can look at other plugins and utilities for web development on the website ",
            React.createElement(Link_1.default, { to: '/' }, "CrazySquirrel.ru"),
            "."),
        React.createElement("h2", null, "Parameters"),
        React.createElement("h3", null, "Parameters description"),
        React.createElement("ul", null,
            React.createElement("li", null, "types - An array with the names of views share. May include the following values. ['facebook','twitter','vkontakte','odnoklassniki','google','yahoo','misterwong','moimir','friendfeed','yandex','webmoney','vkrugu','juick','pinterest','myspace','googlebookmark','stumbleupon','instapaper','email','springpad','print','linkedin','readability','pinme','surfingbird','webdiscover','memori','livejournal','blogger','liveinternet','evernote','bobrdobr','moemesto','formspring','yazakladki','moikrug','bookmark','digg','tumblr','delicious']")),
        React.createElement("h3", null, "Setting"),
        React.createElement("p", null, "The options for share buttons can be specified when invoking the plugin or via data - attributes. When you call peredaetsa structured object as the default parameters. If you specify options via data, you can use the following values."),
        React.createElement("ul", null,
            React.createElement("li", null, "data-csshare-types - Sets types where value separet by ,")),
        React.createElement("h3", null, "Default parameters"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.txt', data: __webpack_require__(5294) }),
        React.createElement("h2", null, "Example"),
        React.createElement("h3", null, "HTML"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.html', data: __webpack_require__(4595) }),
        React.createElement("h3", null, "JavaScript"),
        React.createElement(Code_1.default, { src: './examples/example-3.example.ts', data: __webpack_require__(3701) })));
}
exports.default = default_1;


/***/ }),

/***/ 4378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(343);
exports.routs = {
    '/solutions/jquery-plugins/csshare/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 5809:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'CSTiles',
    title: 'CSTiles',
    description: 'CSTiles',
    keywords: 'CSTiles',
    h1: 'CSTiles',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSTiles',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSTiles/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSTiles',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "The JavaScript tiles component."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.txt', data: __webpack_require__(2691) }),
        React.createElement("h3", null, "Parameters"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.txt', data: __webpack_require__(3666) }),
        React.createElement("h2", null, "Example"),
        React.createElement(Code_1.default, { src: './examples/example-3.example.ts', data: __webpack_require__(9172) })));
}
exports.default = default_1;


/***/ }),

/***/ 9614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(5809);
exports.routs = {
    '/solutions/jquery-plugins/cstiles/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6808:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
var SubMenu_1 = __webpack_require__(8119);
exports.metadata = {
    menu: 'jQuery плагины',
    title: 'jQuery плагины',
    description: 'jQuery плагины',
    keywords: 'jQuery плагины',
    h1: 'jQuery плагины',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement(SubMenu_1.default, { extend: true, onlyBadges: true })));
}
exports.default = default_1;


/***/ }),

/***/ 406:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(9614);
var routs_2 = __webpack_require__(4378);
var routs_3 = __webpack_require__(9195);
var index_1 = __webpack_require__(6808);
exports.routs = __assign(__assign(__assign({ '/solutions/jquery-plugins/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs);


/***/ }),

/***/ 9461:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'TexturedText',
    title: 'TexturedText',
    description: 'TexturedText',
    keywords: 'TexturedText',
    h1: 'TexturedText',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/TexturedText/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/TexturedText',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/TexturedText/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/TexturedText/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/TexturedText/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/TexturedText',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "JavaScript plugin for textured text."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.txt', data: __webpack_require__(3511) }),
        React.createElement("h3", null, "Parameters"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.txt', data: __webpack_require__(3091) }),
        React.createElement("h2", null, "Example"),
        React.createElement(Code_1.default, { src: './examples/example-3.example.ts', data: __webpack_require__(2578) })));
}
exports.default = default_1;


/***/ }),

/***/ 9195:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(9461);
exports.routs = {
    '/solutions/jquery-plugins/texturedtext/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 5315:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'AnimationFrame',
    title: 'AnimationFrame',
    description: 'AnimationFrame',
    keywords: 'AnimationFrame',
    h1: 'AnimationFrame',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/AnimationFrame.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/AnimationFrame',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/AnimationFrame/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/AnimationFrame',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/AnimationFrame/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/AnimationFrame/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/AnimationFrame/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/AnimationFrame',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "This is the class for signing several watcher on requestanimationframe."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(1097) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(5143) }),
        React.createElement("ul", null,
            React.createElement("li", null, "context - The context of the called function."),
            React.createElement("li", null, "callback - The called function."),
            React.createElement("li", null, "arguments - An array of arguments of the called function."),
            React.createElement("li", null, "ID - ID which will be signed watcher. One ID can contain only one watcher.")),
        React.createElement("p", null, "The arguments and ID are optional. If you do not pass the ID, then the subscribe will return the generated ID, otherwise returns the passed ID.")));
}
exports.default = default_1;


/***/ }),

/***/ 4977:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(5315);
exports.routs = {
    '/solutions/npm/animationframe/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 3667:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'CSDebug',
    title: 'CSDebug',
    description: 'CSDebug',
    keywords: 'CSDebug',
    h1: 'CSDebug',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/CSDebug.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/CSDebug',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSDebug/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSDebug',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSDebug/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSDebug/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSDebug/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSDebug',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "Class to extend the standard console."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(7542) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(8254) })));
}
exports.default = default_1;


/***/ }),

/***/ 1774:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(3667);
exports.routs = {
    '/solutions/npm/csdebug/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 2122:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'CSLogger',
    title: 'CSLogger',
    description: 'CSLogger',
    keywords: 'CSLogger',
    h1: 'CSLogger',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/CSLogger.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/CSLogger',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSLogger/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSLogger',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSLogger/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSLogger/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/CSLogger/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/CSLogger',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "Logger for JavaScript messages."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(3135) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(8171) })));
}
exports.default = default_1;


/***/ }),

/***/ 9084:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(2122);
exports.routs = {
    '/solutions/npm/cslogger/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 1217:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'EverCookie',
    title: 'EverCookie',
    description: 'EverCookie',
    keywords: 'EverCookie',
    h1: 'EverCookie',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/EverCookie.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/EverCookie',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/EverCookie/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/EverCookie',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/EverCookie/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/EverCookie/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/EverCookie/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/EverCookie',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "Versatile storage."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(9559) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(3715) })));
}
exports.default = default_1;


/***/ }),

/***/ 7320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(1217);
exports.routs = {
    '/solutions/npm/evercookie/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 8060:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
var SubMenu_1 = __webpack_require__(8119);
exports.metadata = {
    menu: 'Пакеты npm',
    title: 'Пакеты npm',
    description: 'Пакеты npm',
    keywords: 'Пакеты npm',
    h1: 'Пакеты npm',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement(SubMenu_1.default, { extend: true, onlyBadges: true })));
}
exports.default = default_1;


/***/ }),

/***/ 4052:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(4977);
var routs_2 = __webpack_require__(1774);
var routs_3 = __webpack_require__(9084);
var routs_4 = __webpack_require__(7320);
var routs_5 = __webpack_require__(5706);
var routs_6 = __webpack_require__(4080);
var routs_7 = __webpack_require__(77);
var index_1 = __webpack_require__(8060);
exports.routs = __assign(__assign(__assign(__assign(__assign(__assign(__assign({ '/solutions/npm/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs), routs_4.routs), routs_5.routs), routs_6.routs), routs_7.routs);


/***/ }),

/***/ 8829:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'UserID',
    title: 'UserID',
    description: 'UserID',
    keywords: 'UserID',
    h1: 'UserID',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/UserID.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/UserID',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/UserID/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/UserID',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/UserID/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/UserID/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/UserID/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/UserID',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "Unique user ID generator."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(8954) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(7498) }),
        React.createElement("p", null, "Note that when you first start the module it needs some time to calculate finally UID. So initialize it in the first time as early as possible in the code.")));
}
exports.default = default_1;


/***/ }),

/***/ 5706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(8829);
exports.routs = {
    '/solutions/npm/userid/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 3148:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Utils',
    title: 'Utils',
    description: 'Utils',
    keywords: 'Utils',
    h1: 'Utils',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/Utils.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/Utils',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/Utils/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/Utils',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/Utils/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/Utils/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/Utils/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/Utils',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "Utils for working with DOM, Window, Screen and etc."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(7039) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(6665) })));
}
exports.default = default_1;


/***/ }),

/***/ 4080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(3148);
exports.routs = {
    '/solutions/npm/utils/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 9184:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Code_1 = __webpack_require__(9450);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'ViewAbility',
    title: 'ViewAbility',
    description: 'ViewAbility',
    keywords: 'ViewAbility',
    h1: 'ViewAbility',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
    badges: [
        {
            img: 'https://img.shields.io/npm/v/ViewAbility.svg',
            alt: 'package version',
            width: 133,
            height: 20,
            link: 'https://github.com/CrazySquirrel/ViewAbility',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/badges/gpa.svg',
            alt: 'maintainability',
            width: 144,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/badges/coverage.svg',
            alt: 'coverage',
            width: 157,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/coverage',
        },
        {
            img: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility/badges/issue_count.svg',
            alt: 'issues',
            width: 189,
            height: 20,
            link: 'https://codeclimate.com/github/CrazySquirrel/ViewAbility',
        },
        {
            img: 'https://img.shields.io/badge/donate-%E2%99%A5-red.svg',
            alt: 'donate',
            width: 68,
            height: 20,
            link: 'https://money.yandex.ru/to/41001951616035',
        },
    ],
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "Class to determine the visibility of the block."),
        React.createElement("h2", null, "Build"),
        React.createElement("p", null, "The repository contains pre-compiled files, but if you want to add your files and compile, then run the following commands in the repository folder."),
        React.createElement("ul", null,
            React.createElement("li", null, "npm install"),
            React.createElement("li", null, "npm run production")),
        React.createElement("p", null, "or"),
        React.createElement("ul", null,
            React.createElement("li", null, "npm run development")),
        React.createElement("p", null, "The build required NodeJs version 6 or higher."),
        React.createElement("h2", null, "Usage"),
        React.createElement(Code_1.default, { src: './examples/example-1.example.js', data: __webpack_require__(5233) }),
        React.createElement("p", null, "or"),
        React.createElement(Code_1.default, { src: './examples/example-2.example.ts', data: __webpack_require__(5638) }),
        React.createElement("ul", null,
            React.createElement("li", null, "domBannerObject - DOM element"),
            React.createElement("li", null, "percentage - How much of the object should be visible (0-1)"),
            React.createElement("li", null, "time - The amount of time the object must be visible to called callback."),
            React.createElement("li", null, "callback - A function which will be called after the object is seen."))));
}
exports.default = default_1;


/***/ }),

/***/ 77:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(9184);
exports.routs = {
    '/solutions/npm/viewability/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 4819:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(406);
var routs_2 = __webpack_require__(4052);
var routs_3 = __webpack_require__(6057);
var index_1 = __webpack_require__(5248);
exports.routs = __assign(__assign(__assign({ '/solutions/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs);


/***/ }),

/***/ 5238:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var SubMenu_1 = __webpack_require__(8119);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Тесты',
    title: 'Тесты',
    description: 'Тесты',
    keywords: 'Тесты',
    h1: 'Тесты',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0445 \u0442\u0435\u0441\u0442\u043E\u0432, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0445 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443\u0442 \u0432\u0430\u043C \u043E \u0432\u043B\u0438\u044F\u043D\u0438\u0438 \u043D\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0435 \u0442\u043E\u0433\u043E \u0438\u043B\u0438 \u0438\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0430 \u0432 web \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435."),
        React.createElement("p", null, "\u0422\u0435\u0441\u0442\u044B \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u0430\u043D\u043D\u044B\u0439 \u043C\u043E\u043C\u0435\u043D\u0442:"),
        React.createElement(SubMenu_1.default, null)));
}
exports.default = default_1;


/***/ }),

/***/ 4257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(880);
var index_1 = __webpack_require__(5238);
exports.routs = __assign({ '/tests/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs);


/***/ }),

/***/ 2198:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Влияние знака рубля',
    title: 'Влияние знака рубля',
    description: 'Влияние знака рубля',
    keywords: 'Влияние знака рубля',
    h1: 'Влияние знака рубля',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0412\u00A0\u0442\u0430\u0431\u043B\u0438\u0446\u0435 Unicode \u043F\u043E\u044F\u0432\u0438\u043B\u0438\u0441\u044C \u043D\u043E\u0432\u044B\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B \u0432\u0430\u043B\u044E\u0442, \u0432\u00A0\u0447\u0430\u0441\u0442\u043D\u043E\u0441\u0442\u0438, \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F."),
        React.createElement("p", null, "\u041C\u044B\u00A0\u043C\u043E\u0436\u0435\u043C \u043B\u0435\u0433\u043A\u043E \u0432\u0441\u0442\u0430\u0432\u043B\u044F\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0439 \u0437\u043D\u0430\u043A \u0441\u00A0\u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u0435\u0433\u043E \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0441\u0438\u043C\u0432\u043E\u043B\u0430, \u0441\u00A0\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C\u044B\u0445 \u0448\u0440\u0438\u0444\u0442\u043E\u0432, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u00ABPT\u00A0Sans\u00BB \u0438\u00A0\u0443\u043A\u0430\u0437\u0430\u043D\u0438\u0435\u043C \u043A\u043E\u0434\u0430 \u0441\u0438\u043C\u0432\u043E\u043B\u0430 \u20BD."),
        React.createElement("p", null, "\u041A\u00A0\u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043D\u0438\u0433\u0434\u0435 \u043D\u0435\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u00A0\u0442\u043E\u043C, \u043A\u0430\u043A \u0434\u0430\u043D\u043D\u044B\u0439 \u0437\u043D\u0430\u043A \u0438\u043D\u0442\u0435\u0440\u043F\u0440\u0435\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C\u0438 \u0441\u0438\u0441\u0442\u0435\u043C\u0430\u043C\u0438 \u0438\u00A0\u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430\u00A0\u043F\u043E\u0437\u0438\u0446\u0438\u044E \u0441\u0430\u0439\u0442\u0430."),
        React.createElement("p", null, "\u0414\u0430\u043D\u043D\u044B\u0439 SEO \u0442\u0435\u0441\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0434\u0435\u043D\u043D\u043E\u0439 \u0437\u0430\u0434\u0430\u0447\u0438."),
        React.createElement("p", null, "\u0422\u0435\u0441\u0442 \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437\u00A04\u00A0\u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u0441\u00A0\u043F\u0441\u0435\u0432\u0434\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u043C \u00AB\u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F\u00BB, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043C\u043E\u0436\u043D\u043E \u043A\u0443\u043F\u0438\u0442\u044C \u0437\u0430\u00A01000\u00A0\u0440\u0443\u0431\u043B\u0435\u0439. \u0421\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043E\u0442\u043B\u0438\u0447\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0430\u0440\u0438\u0430\u043D\u0442\u0430\u043C\u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u0438\u044F: \u00AB\u0440\u0443\u0431\u043B\u0435\u0439\u00BB, \u00AB\u0440\u0443\u0431\u00BB, \u00AB\u0440\u00BB \u0438\u00A0\u00AB\u20BD\u00BB."),
        React.createElement("p", null, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0442\u0435\u0441\u0442\u0430 \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441\u0430:"),
        React.createElement("ul", null,
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000 \u0440\u0443\u0431"),
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000 \u0440\u0443\u0431\u043B\u0435\u0439"),
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000\u00A0\u20BD"),
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000\u00A0\u0440")),
        React.createElement("p", null, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u0442\u0435\u0441\u0442\u0430 \u0434\u043B\u044F Google:"),
        React.createElement("ul", null,
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000\u00A0\u20BD"),
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000 \u0440\u0443\u0431\u043B\u0435\u0439"),
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000 \u0440\u0443\u0431"),
            React.createElement("li", null, "\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u043D\u0430\u043A \u0440\u0443\u0431\u043B\u044F \u0437\u0430\u00A01000\u00A0\u0440"))));
}
exports.default = default_1;


/***/ }),

/***/ 880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(2198);
exports.routs = {
    '/tests/ruble-sign/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 4092:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Полный анализ сайта',
    title: 'Полный анализ сайта',
    description: 'Полный анализ сайта',
    keywords: 'Полный анализ сайта',
    h1: 'Полный анализ сайта',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 4465:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(4092);
exports.routs = {
    '/tools/analyzers/complete/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6616:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Анализаторы',
    title: 'Анализаторы',
    description: 'Анализаторы',
    keywords: 'Анализаторы',
    h1: 'Анализаторы',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 8878:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(4465);
var index_1 = __webpack_require__(6616);
exports.routs = __assign({ '/tools/analyzers/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs);


/***/ }),

/***/ 9384:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Минификатор css',
    title: 'Минификатор css',
    description: 'Минификатор css',
    keywords: 'Минификатор css',
    h1: 'Минификатор css',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 1576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(9384);
exports.routs = {
    '/tools/compressors/css/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 2260:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Компрессоры',
    title: 'Компрессоры',
    description: 'Компрессоры',
    keywords: 'Компрессоры',
    h1: 'Компрессоры',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u041A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442 \u043C\u0438\u043D\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0430\u0448\u0438 \u0444\u0430\u0439\u043B\u044B \u0438 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u044C \u0442\u0430\u043A\u0438\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430."),
        React.createElement("p", null, "\u041D\u0430 \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B \u0444\u0430\u0439\u043B\u043E\u0432:"),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: '/tools/compressors/js/' }, "JavaScript \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: '/tools/compressors/css/' }, "CSS \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B")),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: '/tools/compressors/pictures/' }, "\u041A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/jpeg/' }, "JPEG \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/png/' }, "PNG \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/gif/' }, "GIF \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/svg/' }, "SVG \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B")))))));
}
exports.default = default_1;


/***/ }),

/***/ 565:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Минификатор js',
    title: 'Минификатор js',
    description: 'Минификатор js',
    keywords: 'Минификатор js',
    h1: 'Минификатор js',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 7164:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(565);
exports.routs = {
    '/tools/compressors/js/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 5715:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Оптимизатор gif',
    title: 'Оптимизатор gif',
    description: 'Оптимизатор gif',
    keywords: 'Оптимизатор gif',
    h1: 'Оптимизатор gif',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 6225:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(5715);
exports.routs = {
    '/tools/compressors/pictures/gif/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 7224:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Оптимизатор изображения',
    title: 'Оптимизатор изображения',
    description: 'Оптимизатор изображения',
    keywords: 'Оптимизатор изображения',
    h1: 'Оптимизатор изображения',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 5471:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Оптимизатор jpeg',
    title: 'Оптимизатор jpeg',
    description: 'Оптимизатор jpeg',
    keywords: 'Оптимизатор jpeg',
    h1: 'Оптимизатор jpeg',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 3537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(5471);
exports.routs = {
    '/tools/compressors/pictures/jpeg/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6961:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Оптимизатор png',
    title: 'Оптимизатор png',
    description: 'Оптимизатор png',
    keywords: 'Оптимизатор png',
    h1: 'Оптимизатор png',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 9504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(6961);
exports.routs = {
    '/tools/compressors/pictures/png/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 8482:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(3537);
var routs_2 = __webpack_require__(9504);
var routs_3 = __webpack_require__(6225);
var routs_4 = __webpack_require__(8401);
var index_1 = __webpack_require__(7224);
exports.routs = __assign(__assign(__assign(__assign({ '/tools/compressors/pictures/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs), routs_4.routs);


/***/ }),

/***/ 8796:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Оптимизатор svg',
    title: 'Оптимизатор svg',
    description: 'Оптимизатор svg',
    keywords: 'Оптимизатор svg',
    h1: 'Оптимизатор svg',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 8401:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(8796);
exports.routs = {
    '/tools/compressors/pictures/svg/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 6427:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(1576);
var routs_2 = __webpack_require__(7164);
var routs_3 = __webpack_require__(8482);
var index_1 = __webpack_require__(2260);
exports.routs = __assign(__assign(__assign({ '/tools/compressors/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs);


/***/ }),

/***/ 6583:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Base64 конвертер',
    title: 'Base64 конвертер',
    description: 'Base64 конвертер',
    keywords: 'Base64 конвертер',
    h1: 'Base64 конвертер',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 5817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(6583);
exports.routs = {
    '/tools/converters/base64/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 4712:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'IDN конвертер',
    title: 'IDN конвертер',
    description: 'IDN конвертер',
    keywords: 'IDN конвертер',
    h1: 'IDN конвертер',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 9124:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(4712);
exports.routs = {
    '/tools/converters/idn/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 1551:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Изображение в base64',
    title: 'Изображение в base64',
    description: 'Изображение в base64',
    keywords: 'Изображение в base64',
    h1: 'Изображение в base64',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 8702:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(1551);
exports.routs = {
    '/tools/converters/image-to-base64/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 2328:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Конверторы',
    title: 'Конверторы',
    description: 'Конверторы',
    keywords: 'Конверторы',
    h1: 'Конверторы',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null,
            "\u041A\u043E\u043D\u0432\u0435\u0440\u0442\u043E\u0440\u044B \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0434\u0430\u043D\u043D\u044B\u043C\u0438, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440,",
            React.createElement(Link_1.default, { to: '/tools/converters/idn/' }, "\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u044B\u0432\u0430\u0442\u044C \u043D\u0435 \u0430\u043D\u0433\u043B\u043E\u044F\u0437\u044B\u0447\u043D\u0430\u044F \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044F \u0434\u043E\u043C\u0435\u043D\u043E\u0432"),
            "\u0432 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0438\u043B\u0438 \u0447\u0438\u0442\u0430\u0435\u043C\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442,",
            React.createElement(Link_1.default, { to: '/tools/converters/image-to-base64/' }, "\u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0438\u043D\u043B\u0430\u0439\u043D\u043E\u0432\u044B\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"),
            ", \u0438\u043B\u0438",
            React.createElement(Link_1.default, { to: '/tools/converters/base64/' }, "\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0441 base64"))));
}
exports.default = default_1;


/***/ }),

/***/ 9903:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(9124);
var routs_2 = __webpack_require__(8702);
var routs_3 = __webpack_require__(5817);
var index_1 = __webpack_require__(2328);
exports.routs = __assign(__assign(__assign({ '/tools/converters/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs);


/***/ }),

/***/ 1433:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Генераторы',
    title: 'Генераторы',
    description: 'Генераторы',
    keywords: 'Генераторы',
    h1: 'Генераторы',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430."),
        React.createElement("p", null,
            "\u0422\u0430\u043A \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",
            React.createElement(Link_1.default, { to: '/tools/generators/map-area/' }, "map area"),
            "\u043C\u043E\u0436\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B (\u0444\u0438\u0433\u0443\u0440\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043C\u0435\u043D\u044E, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0430\u0440\u0442\u044B \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u00AB\u0432\u0438\u0442\u0440\u0430\u0436\u0435\u0439\u00BB \u0434\u043B\u044F \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438 \u0442.\u0434.)."),
        React.createElement("p", null,
            "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E",
            React.createElement(Link_1.default, { to: '/tools/generators/sprite/' }, "\u0441\u043F\u0440\u0430\u0439\u0442\u043E\u0432"),
            "\u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u043A\u043E\u043D\u043E\u043A \u0438\u043B\u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0438 (\u043F\u043E\u043C\u0435\u0441\u0442\u0438\u0432 \u0442\u0435\u043A\u0441\u0442\u0443\u0440\u044B \u043C\u0435\u043B\u043A\u0438\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432 \u043E\u0434\u0438\u043D \u0441\u043F\u0440\u0430\u0439\u0442)."),
        React.createElement("p", null,
            React.createElement(Link_1.default, { to: '/tools/generators/sitemap/' }, "Sitemap.xml"),
            "\u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0432\u0430\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u0442\u044C \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u043E\u043C\u0443 \u0440\u043E\u0431\u043E\u0442\u0443 \u043E\u0431\u043E \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430\u0445 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0435 \u0438 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u044C \u0438\u0445 \u043F\u043E\u043F\u0430\u0434\u0430\u043D\u0438\u0435 \u0432 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441.")));
}
exports.default = default_1;


/***/ }),

/***/ 7530:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Map area по изображению',
    title: 'Map area по изображению',
    description: 'Map area по изображению',
    keywords: 'Map area по изображению',
    h1: 'Map area по изображению',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 1260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(7530);
exports.routs = {
    '/tools/generators/map-area/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 2437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(1260);
var routs_2 = __webpack_require__(6290);
var routs_3 = __webpack_require__(9273);
var index_1 = __webpack_require__(1433);
exports.routs = __assign(__assign(__assign({ '/tools/generators/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs);


/***/ }),

/***/ 8648:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Генератор sitemap',
    title: 'Генератор sitemap',
    description: 'Генератор sitemap',
    keywords: 'Генератор sitemap',
    h1: 'Генератор sitemap',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 6290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(8648);
exports.routs = {
    '/tools/generators/sitemap/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 4787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Генератор спрайтов',
    title: 'Генератор спрайтов',
    description: 'Генератор спрайтов',
    keywords: 'Генератор спрайтов',
    h1: 'Генератор спрайтов',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata)));
}
exports.default = default_1;


/***/ }),

/***/ 9273:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var index_1 = __webpack_require__(4787);
exports.routs = {
    '/tools/generators/sprite/': {
        page: index_1.default,
        metadata: index_1.metadata,
    },
};


/***/ }),

/***/ 1023:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.metadata = void 0;
var React = __webpack_require__(9297);
var App_1 = __webpack_require__(1391);
var Link_1 = __webpack_require__(5038);
var index_1 = __webpack_require__(8735);
var index_2 = __webpack_require__(5900);
exports.metadata = {
    menu: 'Инструменты',
    title: 'Инструменты',
    description: 'Инструменты',
    keywords: 'Инструменты',
    h1: 'Инструменты',
    author: index_2.siastrebov,
    type: index_1.MetadataType.ARTICLE,
};
function default_1() {
    return (React.createElement(App_1.default, __assign({}, exports.metadata),
        React.createElement("p", null, "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u043C\u0438 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0434\u043B\u044F \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430, \u0442\u0430\u043A\u0438\u043C\u0438 \u043A\u0430\u043A:"),
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: '/tools/generators/' }, "\u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440\u044B"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/generators/map-area/' }, "map area"),
                        "- \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0438 \u043D\u0435\u043E\u0431\u044B\u0447\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u043D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435"),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/generators/sprite/' }, "\u0441\u043F\u0440\u0430\u0439\u0442\u044B"),
                        "\u2013 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0445 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0438\u043A\u043E\u043D\u043E\u043A) \u0437\u0430 \u0441\u0447\u0435\u0442 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F \u0438\u0445 \u0432 \u043E\u0434\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435"),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/generators/sitemap/' }, "sitemap"),
                        "\u2013 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u043C \u0440\u043E\u0431\u043E\u0442\u0430\u043C \u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u043F\u0440\u043E\u0438\u043D\u0434\u0435\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0441\u0430\u0439\u0442\u0435"))),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: '/tools/compressors/' }, "\u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440\u044B"),
                "\u00A0\u2013 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0442 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440\u044B \u0441\u043B\u0443\u0436\u0435\u0431\u043D\u044B\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0438 \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u00AB\u0432\u0435\u0441\u00BB \u0438 \u0432\u0440\u0435\u043C\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/js/' }, "JS")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/css/' }, "CSS")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/jpg/' }, "JPG")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/png/' }, "PNG")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/gif/' }, "GIF")),
                    React.createElement("li", null,
                        React.createElement(Link_1.default, { to: '/tools/compressors/pictures/svg/' }, "SVG")))),
            React.createElement("li", null,
                React.createElement(Link_1.default, { to: '/tools/analyzers/' }, "\u0430\u043D\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u044B"),
                "\u2013 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0442 \u0432\u0430\u0448 \u0441\u0430\u0439\u0442 \u0438 \u0441\u043A\u0430\u0436\u0443\u0442 \u0432\u0430\u043C \u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043A\u0430\u0445, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u0442\u044C."))));
}
exports.default = default_1;


/***/ }),

/***/ 9590:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.routs = void 0;
var routs_1 = __webpack_require__(8878);
var routs_2 = __webpack_require__(6427);
var routs_3 = __webpack_require__(9903);
var routs_4 = __webpack_require__(2437);
var index_1 = __webpack_require__(1023);
exports.routs = __assign(__assign(__assign(__assign({ '/tools/': {
        page: index_1.default,
        metadata: index_1.metadata,
    } }, routs_1.routs), routs_2.routs), routs_3.routs), routs_4.routs);


/***/ }),

/***/ 1064:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prop = void 0;
function prop(target, path, def) {
    if (target === void 0) { target = {}; }
    if (path === void 0) { path = ''; }
    try {
        var parsedPath = path.trim().split('.');
        for (var _i = 0, parsedPath_1 = parsedPath; _i < parsedPath_1.length; _i++) {
            var p = parsedPath_1[_i];
            target = target[p];
        }
        return target;
    }
    catch (e) {
        return def;
    }
}
exports.prop = prop;


/***/ }),

/***/ 8735:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetadataType = void 0;
var MetadataType;
(function (MetadataType) {
    MetadataType["NONE"] = "NONE";
    MetadataType["ARTICLE"] = "ARTICLE";
})(MetadataType = exports.MetadataType || (exports.MetadataType = {}));


/***/ }),

/***/ 9310:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Analytics = /** @class */ (function () {
    function Analytics() {
    }
    Analytics.init = function () {
        if (true) {
            return;
        }
        Analytics.pageview({
            url: window.location.pathname + window.location.search,
            title: window.document.title,
            referer: window.document.referrer,
        });
        Analytics._watch();
    };
    Analytics.event = function (params) {
        if (true) {
            return;
        }
        Analytics.stack.event.push(params);
        Analytics._watch();
    };
    Analytics.pageview = function (params) {
        if (true) {
            return;
        }
        Analytics.stack.pageview.push(params);
        Analytics._watch();
    };
    Analytics.file = function (params) {
        if (true) {
            return;
        }
        Analytics.stack.file.push(params);
        Analytics._watch();
    };
    Analytics.error = function (params) {
        if (true) {
            return;
        }
        Analytics.stack.error.push(params);
        Analytics._watch();
    };
    /**********************************************/
    Analytics._watch = function () {
        if (true) {
            return;
        }
        if (!Analytics.GooglaAnalytics && window.ga) {
            Analytics.GooglaAnalytics = window.ga;
            Analytics.GooglaAnalytics('create', 'UA-18733193-8', location.hostname);
        }
        if (!Analytics.YandexMetric && window.Ya) {
            Analytics.YandexMetric = new window.Ya.Metrika({
                id: 21098149,
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                trackHash: true,
            });
        }
        if (Analytics.GooglaAnalytics &&
            Analytics.YandexMetric) {
            while (Analytics.stack.event.length > 0) {
                Analytics.processEvent(Analytics.stack.event.shift());
            }
            while (Analytics.stack.pageview.length > 0) {
                Analytics.processPageView(Analytics.stack.pageview.shift());
            }
            while (Analytics.stack.file.length > 0) {
                Analytics.processFile(Analytics.stack.file.shift());
            }
            while (Analytics.stack.error.length > 0) {
                Analytics.processError(Analytics.stack.error.shift());
            }
        }
        else {
            requestAnimationFrame(function () { return Analytics._watch(); });
        }
    };
    Analytics.processEvent = function (params) {
        var args = Analytics.cut([params.category, params.action, params.label, params.value]);
        Analytics.GooglaAnalytics.apply(Analytics, __spreadArray(['send', 'event'], args));
        Analytics.YandexMetric.reachGoal(__spreadArray(['send', 'event'], args).join('-'));
    };
    Analytics.processPageView = function (params) {
        var _a;
        var args = Analytics.cut([params.url, params.title, params.referer, params.params]);
        Analytics.GooglaAnalytics('send', 'pageview', { 'page': args[0], 'title': args[1] });
        (_a = Analytics.YandexMetric).hit.apply(_a, args);
    };
    Analytics.processFile = function (params) {
        Analytics.YandexMetric.file(params.file);
    };
    Analytics.processError = function (params) {
        var args = Analytics.cut([params.category, params.action, params.label, params.value]);
        Analytics.GooglaAnalytics('send', 'exception', { 'exDescription': args.join('-') });
        Analytics.YandexMetric.reachGoal(['send', 'error', args[0]].join('-'));
    };
    Analytics.cut = function (params) {
        var result = [];
        for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
            var v = params_1[_i];
            if (v) {
                result.push(v);
            }
            else {
                break;
            }
        }
        return result;
    };
    Analytics.stack = {
        event: [],
        pageview: [],
        file: [],
        error: [],
    };
    return Analytics;
}());
exports.default = Analytics;


/***/ })

};
;