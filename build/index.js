!function(e){var l={};function a(o){if(l[o])return l[o].exports;var t=l[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=l,a.d=function(e,l,o){a.o(e,l)||Object.defineProperty(e,l,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,l){if(1&l&&(e=a(e)),8&l)return e;if(4&l&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&l&&"string"!=typeof e)for(var t in e)a.d(o,t,function(l){return e[l]}.bind(null,t));return o},a.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(l,"a",l),l},a.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)},a.p="",a(a.s=14)}([function(e,l){!function(){e.exports=this.wp.element}()},function(e,l){!function(){e.exports=this.wp.i18n}()},function(e,l){!function(){e.exports=this.wp.components}()},function(e,l){!function(){e.exports=this.wp.blockEditor}()},function(e,l){!function(){e.exports=this.regeneratorRuntime}()},function(e,l){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,l){!function(){e.exports=this.wp.blocks}()},function(e,l){e.exports=function(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}},function(e,l){function a(e,l){for(var a=0;a<l.length;a++){var o=l[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,l,o){return l&&a(e.prototype,l),o&&a(e,o),e}},function(e,l,a){var o=a(12),t=a(5);e.exports=function(e,l){return!l||"object"!==o(l)&&"function"!=typeof l?t(e):l}},function(e,l){function a(l){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(l)}e.exports=a},function(e,l,a){var o=a(13);e.exports=function(e,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(l&&l.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),l&&o(e,l)}},function(e,l){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(l){return"function"==typeof Symbol&&"symbol"===a(Symbol.iterator)?e.exports=o=function(e){return a(e)}:e.exports=o=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)},o(l)}e.exports=o},function(e,l){function a(l,o){return e.exports=a=Object.setPrototypeOf||function(e,l){return e.__proto__=l,e},a(l,o)}e.exports=a},function(e,l,a){"use strict";a.r(l);var o=a(0),t=a(6),c=a(1),u=a(3),n=a(4),b=a.n(n),r=a(7),d=a.n(r),v=a(8),s=a.n(v),i=a(9),p=a.n(i),f=a(10),h=a.n(f),C=a(5),m=a.n(C),M=a(11),S=a.n(M),y=a(2),O=[{code:"US",label:"🇺🇸 +1",value:"1US"},{code:"CA",label:"🇨🇦 +1",value:"1CA"},{code:"BS",label:"🇧🇸 +1242",value:"1242BS"},{code:"BB",label:"🇧🇧 +1246",value:"1246BB"},{code:"AI",label:"🇦🇮 +1264",value:"1264AI"},{code:"AG",label:"🇦🇬 +1268",value:"1268AG"},{code:"VG",label:"🇻🇬 +1284",value:"1284VG"},{code:"VI",label:"🇻🇮 +1340",value:"1340VI"},{code:"BM",label:"🇧🇲 +1441",value:"1441BM"},{code:"GD",label:"🇬🇩 +1473",value:"1473GD"},{code:"TC",label:"🇹🇨 +1649",value:"1649TC"},{code:"MS",label:"🇲🇸 +1664",value:"1664MS"},{code:"MP",label:"🇲🇵 +1670",value:"1670MP"},{code:"GU",label:"🇬🇺 +1671",value:"1671GU"},{code:"AS",label:"🇦🇸 +1684",value:"1684AS"},{code:"LC",label:"🇱🇨 +1758",value:"1758LC"},{code:"DM",label:"🇩🇲 +1767",value:"1767DM"},{code:"VC",label:"🇻🇨 +1784",value:"1784VC"},{code:"DO",label:"🇩🇴 +1849",value:"1849DO"},{code:"TT",label:"🇹🇹 +1868",value:"1868TT"},{code:"KN",label:"🇰🇳 +1869",value:"1869KN"},{code:"JM",label:"🇯🇲 +1876",value:"1876JM"},{code:"PR",label:"🇵🇷 +1939",value:"1939PR"},{code:"EG",label:"🇪🇬 +20",value:"20EG"},{code:"MA",label:"🇲🇦 +212",value:"212MA"},{code:"DZ",label:"🇩🇿 +213",value:"213DZ"},{code:"TN",label:"🇹🇳 +216",value:"216TN"},{code:"LY",label:"🇱🇾 +218",value:"218LY"},{code:"GM",label:"🇬🇲 +220",value:"220GM"},{code:"SN",label:"🇸🇳 +221",value:"221SN"},{code:"MR",label:"🇲🇷 +222",value:"222MR"},{code:"ML",label:"🇲🇱 +223",value:"223ML"},{code:"GN",label:"🇬🇳 +224",value:"224GN"},{code:"CI",label:"🇨🇮 +225",value:"225CI"},{code:"BF",label:"🇧🇫 +226",value:"226BF"},{code:"NE",label:"🇳🇪 +227",value:"227NE"},{code:"TG",label:"🇹🇬 +228",value:"228TG"},{code:"BJ",label:"🇧🇯 +229",value:"229BJ"},{code:"MU",label:"🇲🇺 +230",value:"230MU"},{code:"LR",label:"🇱🇷 +231",value:"231LR"},{code:"SL",label:"🇸🇱 +232",value:"232SL"},{code:"GH",label:"🇬🇭 +233",value:"233GH"},{code:"NG",label:"🇳🇬 +234",value:"234NG"},{code:"TD",label:"🇹🇩 +235",value:"235TD"},{code:"CF",label:"🇨🇫 +236",value:"236CF"},{code:"CM",label:"🇨🇲 +237",value:"237CM"},{code:"CV",label:"🇨🇻 +238",value:"238CV"},{code:"ST",label:"🇸🇹 +239",value:"239ST"},{code:"GQ",label:"🇬🇶 +240",value:"240GQ"},{code:"GA",label:"🇬🇦 +241",value:"241GA"},{code:"CG",label:"🇨🇬 +242",value:"242CG"},{code:"CD",label:"🇨🇩 +243",value:"243CD"},{code:"AO",label:"🇦🇴 +244",value:"244AO"},{code:"GW",label:"🇬🇼 +245",value:"245GW"},{code:"IO",label:"🇮🇴 +246",value:"246IO"},{code:"SC",label:"🇸🇨 +248",value:"248SC"},{code:"SD",label:"🇸🇩 +249",value:"249SD"},{code:"RW",label:"🇷🇼 +250",value:"250RW"},{code:"ET",label:"🇪🇹 +251",value:"251ET"},{code:"SO",label:"🇸🇴 +252",value:"252SO"},{code:"DJ",label:"🇩🇯 +253",value:"253DJ"},{code:"KE",label:"🇰🇪 +254",value:"254KE"},{code:"TZ",label:"🇹🇿 +255",value:"255TZ"},{code:"UG",label:"🇺🇬 +256",value:"256UG"},{code:"BI",label:"🇧🇮 +257",value:"257BI"},{code:"MZ",label:"🇲🇿 +258",value:"258MZ"},{code:"ZM",label:"🇿🇲 +260",value:"260ZM"},{code:"MG",label:"🇲🇬 +261",value:"261MG"},{code:"YT",label:"🇾🇹 +262",value:"262YT"},{code:"RE",label:"🇷🇪 +262",value:"262RE"},{code:"ZW",label:"🇿🇼 +263",value:"263ZW"},{code:"NA",label:"🇳🇦 +264",value:"264NA"},{code:"MW",label:"🇲🇼 +265",value:"265MW"},{code:"LS",label:"🇱🇸 +266",value:"266LS"},{code:"BW",label:"🇧🇼 +267",value:"267BW"},{code:"SZ",label:"🇸🇿 +268",value:"268SZ"},{code:"KM",label:"🇰🇲 +269",value:"269KM"},{code:"ZA",label:"🇿🇦 +27",value:"27ZA"},{code:"SH",label:"🇸🇭 +290",value:"290SH"},{code:"ER",label:"🇪🇷 +291",value:"291ER"},{code:"AW",label:"🇦🇼 +297",value:"297AW"},{code:"FO",label:"🇫🇴 +298",value:"298FO"},{code:"GL",label:"🇬🇱 +299",value:"299GL"},{code:"GR",label:"🇬🇷 +30",value:"30GR"},{code:"NL",label:"🇳🇱 +31",value:"31NL"},{code:"BE",label:"🇧🇪 +32",value:"32BE"},{code:"FR",label:"🇫🇷 +33",value:"33FR"},{code:"ES",label:"🇪🇸 +34",value:"34ES"},{code:"KY",label:"🇰🇾 +345",value:"345KY"},{code:"GI",label:"🇬🇮 +350",value:"350GI"},{code:"PT",label:"🇵🇹 +351",value:"351PT"},{code:"LU",label:"🇱🇺 +352",value:"352LU"},{code:"IE",label:"🇮🇪 +353",value:"353IE"},{code:"IS",label:"🇮🇸 +354",value:"354IS"},{code:"AL",label:"🇦🇱 +355",value:"355AL"},{code:"MT",label:"🇲🇹 +356",value:"356MT"},{code:"FI",label:"🇫🇮 +358",value:"358FI"},{code:"BG",label:"🇧🇬 +359",value:"359BG"},{code:"HU",label:"🇭🇺 +36",value:"36HU"},{code:"LT",label:"🇱🇹 +370",value:"370LT"},{code:"LV",label:"🇱🇻 +371",value:"371LV"},{code:"EE",label:"🇪🇪 +372",value:"372EE"},{code:"MD",label:"🇲🇩 +373",value:"373MD"},{code:"AM",label:"🇦🇲 +374",value:"374AM"},{code:"BY",label:"🇧🇾 +375",value:"375BY"},{code:"AD",label:"🇦🇩 +376",value:"376AD"},{code:"MC",label:"🇲🇨 +377",value:"377MC"},{code:"SM",label:"🇸🇲 +378",value:"378SM"},{code:"VA",label:"🇻🇦 +379",value:"379VA"},{code:"UA",label:"🇺🇦 +380",value:"380UA"},{code:"RS",label:"🇷🇸 +381",value:"381RS"},{code:"ME",label:"🇲🇪 +382",value:"382ME"},{code:"XK",label:"🇽🇰 +383",value:"383XK"},{code:"HR",label:"🇭🇷 +385",value:"385HR"},{code:"SI",label:"🇸🇮 +386",value:"386SI"},{code:"BA",label:"🇧🇦 +387",value:"387BA"},{code:"MK",label:"🇲🇰 +389",value:"389MK"},{code:"IT",label:"🇮🇹 +39",value:"39IT"},{code:"RO",label:"🇷🇴 +40",value:"40RO"},{code:"CH",label:"🇨🇭 +41",value:"41CH"},{code:"CZ",label:"🇨🇿 +420",value:"420CZ"},{code:"SK",label:"🇸🇰 +421",value:"421SK"},{code:"LI",label:"🇱🇮 +423",value:"423LI"},{code:"AT",label:"🇦🇹 +43",value:"43AT"},{code:"IM",label:"🇮🇲 +44",value:"44IM"},{code:"GG",label:"🇬🇬 +44",value:"44GG"},{code:"JE",label:"🇯🇪 +44",value:"44JE"},{code:"GB",label:"🇬🇧 +44",value:"44GB"},{code:"DK",label:"🇩🇰 +45",value:"45DK"},{code:"SE",label:"🇸🇪 +46",value:"46SE"},{code:"NO",label:"🇳🇴 +47",value:"47NO"},{code:"SJ",label:"🇸🇯 +47",value:"47SJ"},{code:"PL",label:"🇵🇱 +48",value:"48PL"},{code:"DE",label:"🇩🇪 +49",value:"49DE"},{code:"FK",label:"🇫🇰 +500",value:"500FK"},{code:"GS",label:"🇬🇸 +500",value:"500GS"},{code:"BZ",label:"🇧🇿 +501",value:"501BZ"},{code:"GT",label:"🇬🇹 +502",value:"502GT"},{code:"SV",label:"🇸🇻 +503",value:"503SV"},{code:"HN",label:"🇭🇳 +504",value:"504HN"},{code:"NI",label:"🇳🇮 +505",value:"505NI"},{code:"CR",label:"🇨🇷 +506",value:"506CR"},{code:"PA",label:"🇵🇦 +507",value:"507PA"},{code:"PM",label:"🇵🇲 +508",value:"508PM"},{code:"HT",label:"🇭🇹 +509",value:"509HT"},{code:"PE",label:"🇵🇪 +51",value:"51PE"},{code:"MX",label:"🇲🇽 +52",value:"52MX"},{code:"CU",label:"🇨🇺 +53",value:"53CU"},{code:"CY",label:"🇨🇾 +537",value:"537CY"},{code:"AR",label:"🇦🇷 +54",value:"54AR"},{code:"BR",label:"🇧🇷 +55",value:"55BR"},{code:"CL",label:"🇨🇱 +56",value:"56CL"},{code:"CO",label:"🇨🇴 +57",value:"57CO"},{code:"VE",label:"🇻🇪 +58",value:"58VE"},{code:"BL",label:"🇧🇱 +590",value:"590BL"},{code:"MF",label:"🇲🇫 +590",value:"590MF"},{code:"GP",label:"🇬🇵 +590",value:"590GP"},{code:"BO",label:"🇧🇴 +591",value:"591BO"},{code:"EC",label:"🇪🇨 +593",value:"593EC"},{code:"GF",label:"🇬🇫 +594",value:"594GF"},{code:"GY",label:"🇬🇾 +595",value:"595GY"},{code:"PY",label:"🇵🇾 +595",value:"595PY"},{code:"MQ",label:"🇲🇶 +596",value:"596MQ"},{code:"SR",label:"🇸🇷 +597",value:"597SR"},{code:"UY",label:"🇺🇾 +598",value:"598UY"},{code:"MY",label:"🇲🇾 +60",value:"60MY"},{code:"CC",label:"🇨🇨 +61",value:"61CC"},{code:"AU",label:"🇦🇺 +61",value:"61AU"},{code:"CX",label:"🇨🇽 +61",value:"61CX"},{code:"ID",label:"🇮🇩 +62",value:"62ID"},{code:"PH",label:"🇵🇭 +63",value:"63PH"},{code:"NZ",label:"🇳🇿 +64",value:"64NZ"},{code:"SG",label:"🇸🇬 +65",value:"65SG"},{code:"TH",label:"🇹🇭 +66",value:"66TH"},{code:"TL",label:"🇹🇱 +670",value:"670TL"},{code:"NF",label:"🇳🇫 +672",value:"672NF"},{code:"BN",label:"🇧🇳 +673",value:"673BN"},{code:"NR",label:"🇳🇷 +674",value:"674NR"},{code:"PG",label:"🇵🇬 +675",value:"675PG"},{code:"TO",label:"🇹🇴 +676",value:"676TO"},{code:"SB",label:"🇸🇧 +677",value:"677SB"},{code:"VU",label:"🇻🇺 +678",value:"678VU"},{code:"FJ",label:"🇫🇯 +679",value:"679FJ"},{code:"PW",label:"🇵🇼 +680",value:"680PW"},{code:"WF",label:"🇼🇫 +681",value:"681WF"},{code:"CK",label:"🇨🇰 +682",value:"682CK"},{code:"NU",label:"🇳🇺 +683",value:"683NU"},{code:"WS",label:"🇼🇸 +685",value:"685WS"},{code:"KI",label:"🇰🇮 +686",value:"686KI"},{code:"NC",label:"🇳🇨 +687",value:"687NC"},{code:"TV",label:"🇹🇻 +688",value:"688TV"},{code:"PF",label:"🇵🇫 +689",value:"689PF"},{code:"TK",label:"🇹🇰 +690",value:"690TK"},{code:"FM",label:"🇫🇲 +691",value:"691FM"},{code:"MH",label:"🇲🇭 +692",value:"692MH"},{code:"RU",label:"🇷🇺 +7",value:"7RU"},{code:"KZ",label:"🇰🇿 +77",value:"77KZ"},{code:"JP",label:"🇯🇵 +81",value:"81JP"},{code:"KR",label:"🇰🇷 +82",value:"82KR"},{code:"VN",label:"🇻🇳 +84",value:"84VN"},{code:"KP",label:"🇰🇵 +850",value:"850KP"},{code:"HK",label:"🇭🇰 +852",value:"852HK"},{code:"MO",label:"🇲🇴 +853",value:"853MO"},{code:"KH",label:"🇰🇭 +855",value:"855KH"},{code:"LA",label:"🇱🇦 +856",value:"856LA"},{code:"CN",label:"🇨🇳 +86",value:"86CN"},{code:"PN",label:"🇵🇳 +872",value:"872PN"},{code:"BD",label:"🇧🇩 +880",value:"880BD"},{code:"TW",label:"🇹🇼 +886",value:"886TW"},{code:"TR",label:"🇹🇷 +90",value:"90TR"},{code:"IN",label:"🇮🇳 +91",value:"91IN"},{code:"PK",label:"🇵🇰 +92",value:"92PK"},{code:"AF",label:"🇦🇫 +93",value:"93AF"},{code:"LK",label:"🇱🇰 +94",value:"94LK"},{code:"MM",label:"🇲🇲 +95",value:"95MM"},{code:"MV",label:"🇲🇻 +960",value:"960MV"},{code:"LB",label:"🇱🇧 +961",value:"961LB"},{code:"JO",label:"🇯🇴 +962",value:"962JO"},{code:"SY",label:"🇸🇾 +963",value:"963SY"},{code:"IQ",label:"🇮🇶 +964",value:"964IQ"},{code:"KW",label:"🇰🇼 +965",value:"965KW"},{code:"SA",label:"🇸🇦 +966",value:"966SA"},{code:"YE",label:"🇾🇪 +967",value:"967YE"},{code:"OM",label:"🇴🇲 +968",value:"968OM"},{code:"PS",label:"🇵🇸 +970",value:"970PS"},{code:"AE",label:"🇦🇪 +971",value:"971AE"},{code:"IL",label:"🇮🇱 +972",value:"972IL"},{code:"BH",label:"🇧🇭 +973",value:"973BH"},{code:"QA",label:"🇶🇦 +974",value:"974QA"},{code:"BT",label:"🇧🇹 +975",value:"975BT"},{code:"MN",label:"🇲🇳 +976",value:"976MN"},{code:"NP",label:"🇳🇵 +977",value:"977NP"},{code:"IR",label:"🇮🇷 +98",value:"98IR"},{code:"TJ",label:"🇹🇯 +992",value:"992TJ"},{code:"TM",label:"🇹🇲 +993",value:"993TM"},{code:"AZ",label:"🇦🇿 +994",value:"994AZ"},{code:"GE",label:"🇬🇪 +995",value:"995GE"},{code:"KG",label:"🇰🇬 +996",value:"996KG"},{code:"UZ",label:"🇺🇿 +998",value:"998UZ"}],g=Object(o.createElement)(y.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},Object(o.createElement)(y.Path,{d:"M24,11.6909333 C24,18.1477333 18.7256,23.3818667 12.2181333,23.3818667 C10.1522667,23.3818667 8.21146667,22.8538667 6.52293333,21.9272 L0,24 L2.12666667,17.7274667 C1.05386667,15.9658667 0.436,13.8997333 0.436,11.6909333 C0.436,5.23413333 5.71093333,0 12.2181333,0 C18.7261333,0 24,5.23413333 24,11.6909333 Z M12.2181333,1.86186667 C6.75573333,1.86186667 2.31253333,6.2712 2.31253333,11.6909333 C2.31253333,13.8416 3.0136,15.8333333 4.19946667,17.4536 L2.96186667,21.104 L6.76853333,19.8941333 C8.33253333,20.9210667 10.2061333,21.52 12.2184,21.52 C17.68,21.52 22.124,17.1112 22.124,11.6914667 C22.124,6.27173333 17.6802667,1.86186667 12.2181333,1.86186667 Z M18.1677333,14.3834667 C18.0949333,14.2642667 17.9026667,14.1922667 17.6141333,14.0490667 C17.3250667,13.9058667 15.9048,13.2122667 15.6408,13.1170667 C15.376,13.0216 15.1829333,12.9736 14.9906667,13.2602667 C14.7984,13.5472 14.2448,14.1922667 14.076,14.3834667 C13.9074667,14.5752 13.7392,14.5992 13.4501333,14.4557333 C13.1616,14.3125333 12.2312,14.0096 11.128,13.0336 C10.2696,12.2741333 9.68986667,11.3365333 9.52133333,11.0493333 C9.35306667,10.7626667 9.50373333,10.6077333 9.648,10.4650667 C9.77813333,10.3365333 9.93706667,10.1304 10.0813333,9.9632 C10.2261333,9.79573333 10.2741333,9.67653333 10.3698667,9.48506667 C10.4666667,9.29386667 10.4184,9.12666667 10.3458667,8.98293333 C10.2738667,8.83973333 9.69573333,7.4296 9.4552,6.85573333 C9.21466667,6.2824 8.9744,6.37786667 8.8056,6.37786667 C8.63733333,6.37786667 8.44453333,6.35386667 8.252,6.35386667 C8.05946667,6.35386667 7.7464,6.4256 7.4816,6.71226667 C7.21706667,6.9992 6.4712,7.69253333 6.4712,9.1024 C6.4712,10.5125333 7.5056,11.8749333 7.6504,12.0658667 C7.79466667,12.2568 9.64773333,15.2445333 12.5837333,16.392 C15.52,17.5389333 15.52,17.1562667 16.0496,17.1082667 C16.5786667,17.0605333 17.7578667,16.4152 17.9994667,15.7464 C18.2394667,15.0765333 18.2394667,14.5029333 18.1677333,14.3834667 Z"})),E={whatsAppURL:"https://wa.me/",defaultButtonText:Object(c._x)("Chat on WhatsApp","default button text","whatsapp-block"),defaultFirstMessage:Object(c._x)("Hi, I got your WhatsApp information from your website.","default first message","whatsapp-block")},T=function(e){function l(){var e;d()(this,l),(e=p()(this,h()(l).apply(this,arguments))).setDefaultCountryCode();var a=e.isValidPhoneNumber();return e.state={editing:!a,isValidPhoneNumber:a},e.onSubmitURL=e.onSubmitURL.bind(m()(e)),e}return S()(l,e),s()(l,[{key:"setDefaultCountryCode",value:function(){var e,l,a,o;return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.props.attributes.countryCode,l=this.props.setAttributes,void 0!==e){t.next=12;break}return l({countryCode:"1"}),t.next=6,b.a.awrap(fetch("http://ip-api.com/json/?fields=countryCode").then((function(e){return!!e.ok&&e})).catch((function(){return!1})));case 6:if(!(a=t.sent)){t.next=12;break}return t.next=10,b.a.awrap(a.json());case 10:o=t.sent,O.forEach((function(e){e.code===o.countryCode&&l({countryCode:e.value})}));case 12:case"end":return t.stop()}}),null,this)}},{key:"onSubmitURL",value:function(e){e.preventDefault(),this.isValidPhoneNumber()?this.setState({editing:!1,isValidPhoneNumber:!0}):this.setState({isValidPhoneNumber:!1})}},{key:"isValidPhoneNumber",value:function(){var e=this.props.attributes,l=e.countryCode,a=e.phoneNumber,o=RegExp(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,"g");return!(void 0===a||a.length<1)&&o.test(l.replace(/\D/g,"")+a)}},{key:"render",value:function(){var e=this,l=this.props.attributes,a=l.countryCode,t=l.phoneNumber,n=l.buttonText,b=l.firstMessage,r=l.colorClass,d=l.backgroundColor,v=this.props,s=v.setAttributes,i=v.className;if(this.state.editing)return Object(o.createElement)(y.Placeholder,{icon:g,label:"WhatsApp",instructions:"Enter the phone number for your WhatsApp account:",className:i},Object(o.createElement)("form",{onSubmit:this.onSubmitURL},Object(o.createElement)(y.SelectControl,{value:a,onChange:function(e){return s({countryCode:e})},options:O}),Object(o.createElement)(y.TextControl,{placeholder:Object(c.__)("Your phone number…","whatsapp-block"),onChange:function(e){return s({phoneNumber:e})},onFocus:function(){e.setState({isValidPhoneNumber:!0})},value:t}),!this.state.isValidPhoneNumber&&Object(o.createElement)(y.Popover,{position:"top center",className:"whatsapp-phonenumber-invalid"},Object(o.createElement)(y.Icon,{icon:"info"}),Object(c.__)("Please enter a valid phone number","whatsapp-block")),Object(o.createElement)(y.Button,{isLarge:!0,type:"submit"},Object(c._x)("Insert","block insert button","whatsapp-block"))));var p=[{icon:"edit",title:Object(c.__)("Edit WhatsApp phone number","whatsapp-block"),onClick:function(){return e.setState({editing:!0})}}];return Object(o.createElement)("div",{className:i+" is-color-"+r},Object(o.createElement)(u.BlockControls,null,Object(o.createElement)(y.Toolbar,{controls:p})),Object(o.createElement)(u.InspectorControls,null,Object(o.createElement)(y.PanelBody,{title:"Message Settings",initialOpen:!0},Object(o.createElement)(y.PanelRow,null,Object(o.createElement)(y.TextareaControl,{label:Object(c.__)("Default First Message","whatsapp-block"),help:Object(c.__)("The default first message that will be sent by visitors when using this button.","whatsapp-block"),value:void 0===b?E.defaultFirstMessage:b,onChange:function(e){return s({firstMessage:e})}}))),Object(o.createElement)(u.PanelColorSettings,{title:Object(c.__)("Color Settings","whatsapp-block"),initialOpen:!1,colorSettings:[{value:d,onChange:function(e){return function(e){if(s({backgroundColor:e}),"#25D366"===e||"#465B64"===e)return s({colorClass:"dark"});s({colorClass:"light"})}(e)},label:Object(c.__)("Background Color","whatsapp-block"),disableCustomColors:!0,colors:[{name:Object(c._x)("WhatsApp Green","background color name","whatsapp-block"),slug:"whatsapp-green",color:"#25D366"},{name:Object(c._x)("WhatsApp Dark","background color name","whatsapp-block"),slug:"whatsapp-dark",color:"#465B64"},{name:Object(c._x)("WhatsApp Light","background color name","whatsapp-block"),slug:"whatsapp-light",color:"#F4F4F4"},{name:Object(c._x)("White","background color name","whatsapp-block"),slug:"whatsapp-white",color:"#FFFFFF"}]}]},Object(o.createElement)(u.ContrastChecker,null))),Object(o.createElement)(u.RichText,{placeholder:E.defaultButtonText,keepPlaceholderOnFocus:!0,value:n,onChange:function(e){return s({buttonText:e})},withoutInteractiveFormatting:!0,allowedFormats:[],className:"whatsapp-block__button",tagName:"a",style:{backgroundColor:d}}))}}]),l}(o.Component);Object(t.registerBlockType)("apeatling/whatsapp-block",{title:Object(c._x)("WhatsApp","block title","whatsapp-block"),description:Object(c.__)("Allow your visitors to send you a message on WhatsApp with the tap of a button.","whatsapp-block"),icon:g,category:"widgets",keywords:[Object(c._x)("whatsapp","keyword","whatsapp-block"),Object(c._x)("messenger","keyword","whatsapp-block"),Object(c._x)("contact","keyword","whatsapp-block"),Object(c._x)("support","keyword","whatsapp-block")],supports:{align:["left","center","right"],html:!1},attributes:{countryCode:{type:"string"},phoneNumber:{type:"string"},firstMessage:{type:"string"},buttonText:{type:"array",source:"children",selector:"a.whatsapp-block__button"},backgroundColor:{type:"string"},colorClass:{type:"string"}},edit:T,save:function(e){var l,a=e.attributes,t=a.countryCode,c=a.phoneNumber,n=a.firstMessage,b=a.buttonText,r=a.backgroundColor,d=a.colorClass,v=t.replace(/\D+/g,"")+c.replace(/\D+/g,"");return Object(o.createElement)("div",{className:e.className+" is-color-"+d},Object(o.createElement)("a",{className:"whatsapp-block__button",href:(l=E.whatsAppURL+v,""!==n&&(l+="/?text="+encodeURIComponent(void 0===n?E.defaultFirstMessage:n)),l),style:{backgroundColor:r}},b.length?Object(o.createElement)(u.RichText.Content,{value:b}):E.defaultButtonText))}})}]);