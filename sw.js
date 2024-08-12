importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"ffcf8b9645057ff92e96eb12ba700884","url":"contributors.html"},{"revision":"2b8fe809b2c7a23f1db7b0303c6ada97","url":"details.json"},{"revision":"e01f3d714269c1dff93b7d0c84a43a07","url":"feedback.html"},{"revision":"66bdc1bbc90b90dd3d1bd473294e35aa","url":"images/cable.png"},{"revision":"cbd0c0c303757cc8c52a21bf8a220757","url":"images/fnosc.png"},{"revision":"eccb37e75ece1a0a43c1d2a10b470b8c","url":"images/help.png"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"images/iitb_logo_30dpi.png"},{"revision":"146849e346868eaadf88aadb704a0ff7","url":"images/knob.png"},{"revision":"2f5a6650ed1ed4a4cfb83cb55739535f","url":"images/osscope.png"},{"revision":"4dc41523a9a4070fce7fe9e329b506f5","url":"images/receiver.png"},{"revision":"bb0aa8a5b61bea5f22b41515352305c5","url":"images/transmitter.png"},{"revision":"ea245db3b5de3352dd05ecf99fe648ca","url":"index.html"},{"revision":"3c73c8f028848bd3c53beed6e89c388f","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"58cc74f5f5726ce2e634ed167a8da5dc","url":"posttest.html"},{"revision":"7b3c2aecd156f858d926a585a4376c4c","url":"posttest.json"},{"revision":"d60e62299f26995fc4fba1bf041d4ab8","url":"pretest.html"},{"revision":"74b2040953d942a97379c06219738af9","url":"pretest.json"},{"revision":"b6c9b24fcb1bf5492a062b36b749ac5f","url":"procedure.html"},{"revision":"79f1cb60039beaf918522246d9a9ff46","url":"references.html"},{"revision":"14a3b9952fda1ee6fad1904d5659a0de","url":"simulation.html"},{"revision":"8885840ab5f7a3e8b3379636a4bf0460","url":"simulation/css/expstyle.css"},{"revision":"a0894a5f785d974aab44f82197c34a88","url":"simulation/css/simstyle.css"},{"revision":"a1c84a4e6851064610d913c61ed12f8c","url":"simulation/exp.html"},{"revision":"66bdc1bbc90b90dd3d1bd473294e35aa","url":"simulation/images/cable.png"},{"revision":"dd2fa3ad67cefa4b317cc471221c9ba0","url":"simulation/images/check.png"},{"revision":"cbd0c0c303757cc8c52a21bf8a220757","url":"simulation/images/fnosc.png"},{"revision":"eccb37e75ece1a0a43c1d2a10b470b8c","url":"simulation/images/help.png"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"simulation/images/iitb_logo_30dpi.png"},{"revision":"146849e346868eaadf88aadb704a0ff7","url":"simulation/images/knob.png"},{"revision":"db6a07741d7d154cd7f13c26a568dba9","url":"simulation/images/osscope.png"},{"revision":"7bc8f01de17b1e7f657764a55cc071d4","url":"simulation/images/receiver.png"},{"revision":"482cce54a768229ca91ee52bf4b5e636","url":"simulation/images/start.png"},{"revision":"8ff62b29ca05f7d0cb3050aa71277c89","url":"simulation/images/transmitter.png"},{"revision":"44af3712a97c8a766ecd19d629f4512a","url":"simulation/index.html"},{"revision":"83d18f515f38d22109c296ec3049fe14","url":"simulation/js/demo.js"},{"revision":"9f6f078345c0988e49531b5446114433","url":"simulation/js/exp5.js"},{"revision":"4468eb124697c406080e274e818bfb90","url":"simulation/js/exp5axis.js"},{"revision":"3ea9d200ecf304d327439fbdb9d20c13","url":"simulation/js/exp5both.js"},{"revision":"216cfb576bdbb5bf10421b468f69ba30","url":"simulation/js/exp5gnd.js"},{"revision":"58bb40a302214492a806fd59d00d4fa6","url":"simulation/js/exp5knobs.js"},{"revision":"db31f3b4ee33d44be2614d64843c265e","url":"simulation/js/jquery.knob.min.js"},{"revision":"de2856ea93f53cd0d2f26bcc8fb36c34","url":"simulation/js/jsplumb.js"},{"revision":"7ba6728759f47b474e61656010db4a4b","url":"simulation/js/sinewave.js"},{"revision":"121da4ec2ec1e95c92ae80a5322ee598","url":"theory.html"},{"revision":"670e94bb1efbdb479a9e486c297a6dad","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );