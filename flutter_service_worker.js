'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "aaa8c39362258d624f80b4d0ad461c25",
"version.json": "176282708111d7a47d78f6dee7f52ddf",
"index.html": "72453faace6c07edcce958d529ef1641",
"/": "72453faace6c07edcce958d529ef1641",
"main.dart.js": "36d8c33d573e0fe5249bab16051f226e",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1fab4b5b2dff261529bb9e527c87bdd",
".git/config": "b39e79c84184f38b711ba646c2283365",
".git/objects/95/c6ac613d5736f6b0e916c7a9267938263d3093": "a16cdcc5b56708d118f68fc47e8ab2cf",
".git/objects/50/6f7d8426c62bbc597b74f7cabb9689e0272a9f": "09696f21b0e2813ebac493751d95483b",
".git/objects/50/aecb2819a9c9fedef4fe9178ce98847879f868": "d3bbc04ffa4f6cb0e966a64737ba18e5",
".git/objects/68/abd4c0e24cfc66c6b1e730e57ad61fdf378734": "a6c355cf30cd76438a1c17c193b59490",
".git/objects/04/4720c914a721e69d2aa0ab39e763773601a41b": "3e63e927d7f4d9b85e5532f09abec986",
".git/objects/32/f1d0306d76f50ad6ec95003bed0bc0e2858b2b": "f974cde7d82d646aea6993ccd9e68421",
".git/objects/35/4d9de7fa2fa0910959dca104d0bc3a31b6f7ae": "5ab25746eb32f522185cd085d6889a74",
".git/objects/51/5b4fe82b45821bad6e97fb12096404ad9cb041": "ae118670ada3e8568c155ba74af472e8",
".git/objects/58/684467bd1d2eedaeb189d3bcda7451cc70ed5f": "5807b99b6b200e2b3549a3f24ff8eadf",
".git/objects/58/c5cd9257683fee87b7f4282039813f39cd1324": "8d445b421dec63b5e99d31c74c0d88b7",
".git/objects/0b/d3fc4574ec5428bfc69716655bbe892a1c7c50": "461937a523fd45954d270cc4d31681ba",
".git/objects/94/2e82d90d89ad2b3fe0021142a381acd01ae7e4": "a892f17dfe327b0c858c13cecf7e260f",
".git/objects/0e/8fa4bde53ddbf70c5b3ca208a107b5fff8ce01": "55778cb95b292a64b246ebd6215a0ac8",
".git/objects/34/9df5c7fc5fd6717719dd1b0ed15473a6ddd8eb": "ac13883bf4e31a7a339e56642d3971dd",
".git/objects/02/2b666bbf3fdb92632f014f29a48a01055e539c": "2c16648226a7fe8134fdf8829bd3d805",
".git/objects/a4/4124bb363c8a4735627d02948041b8f9ab4819": "eb7736eb7a30742440545f9d087febc2",
".git/objects/b2/37297c7bf8785e580913c7463f8576d40575bf": "3306f491863ab01bd99f9a656b1748be",
".git/objects/d9/b9e148c8fad03c2d6ba128bae2ef62dd5e7e19": "781d6624508a7d6db5112685200aff48",
".git/objects/b3/78bebc19461cf6dfdb56f8346e3a0ba9888085": "5cd222fd9fefc627ffef4cc27bf6e069",
".git/objects/b3/1c10634c23c2424680c0f57c22a07ec373cf04": "9e15f58c1e8c0aaae8ad8f43b769d866",
".git/objects/df/c640c36ba3644813acb4d4c7e9be95f185b549": "600987826cf26ebda54deceaed15c060",
".git/objects/d1/a5f014270bd2d8314ad22dfd00b16c050bddc2": "a7e67a660dccb4c86d9ee8001228413b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/1cbba0d1442275c39160a6df2207c96bcd2b5b": "8df4ccf1b2a072ae9bb04cb548935896",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/29e57461fd310d6b7c1eb3e3e12f3b3657b81f": "b13250461ed4397f7cd514f65fcbba07",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/dff97ca958147ec8036661756eb4589b0ebeb2": "d9467fb686488cf26543262f24729331",
".git/objects/cf/a4ce1a0e46c33e2bebae3802cd64bc7340777c": "c931b42ca3c942a076577aff6704817c",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/cc7eceac00e5af0701469158a80cdcde867285": "da5d2dc5a280f9b355ee90c682e06e68",
".git/objects/c8/d254f7bf51a945f88b19dbda4e95171786a444": "24c2dc7a598b1cc54a9eca84ece6d32b",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/28320f0d5839ff5b72fe10c8dd55c58647cf48": "1dd82880288c21af94f1b7f054124859",
".git/objects/c6/066c5da10484184e990451e70dfa55d3b93416": "53a4101abb3ebdfe350007f95c383730",
".git/objects/ec/c1b5f6262bfdf657358b1acfc40a7a3b3a3d6e": "1573094fc0d05246ed97eec4d29f27e6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/39e11efef7b33e4e5c947316514a06ac1d11f5": "68235f22d9f80c903aad30675bdd6ec4",
".git/objects/4b/ac02f2f46dcbf78fe25be1992785d749ae3bf5": "8b5c03e4db0a4bf373bb3b03f6d0e766",
".git/objects/29/cccb580e7168a639c916e3424eb75b30ee7687": "72908d525965efa72e1a2db35df3b1fa",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/99a2a51dee04b950d6f764e9e870da719c8b99": "c359c8ca90645c5fb55bea8c1b349a8d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/868018a400bc500146e7f8ebbdf9a4f9c0e82b": "af11f3ff75b30aff3c8da623a80a4252",
".git/objects/28/b3e63442d8162c6d5b9fc13469f1309e81b374": "9d33a6c99ce29eea2c074c123a26e8a5",
".git/objects/7b/031492726184046c67d75b520b1164220f9edb": "7e54ec7d621c947b816fc29250afa9db",
".git/objects/8f/db353e4b42f901f971729029bedaa07f3f7c2c": "bf85a3154c680779753b8a54674b27ac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/dfc9e35b519300e489cfde98a8cd38cd459b8f": "8de8899456b87aa41f97f5ceb43f05f5",
".git/objects/26/e85529831568bdd50c9e00180c96f964f4d564": "322ee53701206b3ae2b2f556a5eaa95e",
".git/objects/88/7e7f24973b205dadf127e1547f95ba477b9b57": "1f7170922bb4cb6a546627b9ac7f9fea",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/683d648afcd94b3f08e78368c2b33ec75783e2": "94a3151f386f12d6ac9083dc7324ad98",
".git/objects/3a/3eb37e43621384089581efe7937bf2e55f7d76": "6a5fd637090fc4f9e00f55cdddfd1fc0",
".git/objects/5b/a5469b4362bf6a950f83389a50e4eed14563ba": "ff512a95505d87bdd7d0f9270eee49c8",
".git/objects/6d/bd6716d39e51d4990ff034ad23d10f4138db24": "b24116d8db0970b03bd108e87a4fdfcb",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/944e742e05cbac892c3d298c28645e6c16a80c": "6f83fbce7e0489901b77939e13e2896a",
".git/objects/06/341b8268fbe9ccbc0eb156791027f9d5bdffab": "75b5f4da65ae55c81cfc15473a3806ca",
".git/objects/39/97bda7ce5aac5e0935bfafb291c0359470cfa0": "9f05eafdba562bb729140be9998244ae",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/df5e647ca8ad7df7d142e514dcb35253eb52ac": "150da5084a6c3cec19572ce79882634d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/59a6a07b99505da2fa0e63bed667d5a3973cb5": "294e455040265ab038646d3f7e7ef6bd",
".git/objects/b6/6622435ed69c14b05eefac86d29cfeb8dbcdce": "1fa08194c74298e0cdaca194033f3b5b",
".git/objects/d5/a6e0d15d8513640f12702693e93c195b3b40a6": "f63f4e6f9bf8cb6602cd28b71b8ec9ef",
".git/objects/d5/3a5d94f4aa665f9a5c5946f3a056822f3e8d55": "9dc7d133b5ca187ba03e59f7b40819c9",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/3191b5a05a67b9f3a28877bac321b447c656eb": "9b47204f48797746a7065526647aefd1",
".git/objects/b0/a4ae1d5df94b6afd9a070fcc496b3ea3b6d1f1": "7b3798ea3c71a44b0c20c070035e939e",
".git/objects/a6/a3c3988b648f6f3d3353072a8fa6fce18368a0": "a937289ca172a17632f039f5648bf335",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/e6/bd5b9b6c2944b530e56024bdd339c449d37461": "35a71ef146aa35364da58af222928428",
".git/objects/f9/bd45ed83adbe8ab40f2bf5a9a8105e7e7de382": "f440a04d4f8d831f17c862724083232c",
".git/objects/f9/15a408b4be3b7546ab0e1708301f6fa714bc59": "4e7bd45aa9a40855ea6d3f6c22f481d8",
".git/objects/f0/87a6badb27f05b65ea52aa9dd9c21f9b36323b": "4b501b7a8623e7127ccbca8ac887ed7f",
".git/objects/e8/46749015ac4a397366dfc65cd7f51fa1c1e3d8": "aa421594b1249a726f897cef41f0706c",
".git/objects/e8/285b98696e9ac06118f0966578d4f232eacf8d": "6cf98fa4a9ff9ed3c6c86029b1eec3f2",
".git/objects/ff/2948ecd804032cb3e5d4b704372d16341502e5": "05f00d0284bb8ddbb96d4514e99710c1",
".git/objects/ff/8d68ce6cc5b1e441c406ff35c61c2bfe02e8cd": "7b72a116e8e391cbfbc28361d745b842",
".git/objects/e7/56db7640fa9689333cadf15f5bf7a12c3c7fcf": "7428f4448c4ba4e6f4c93889723b6e1a",
".git/objects/ce/89b62c1b065a88983f94b70b1b241aa4f44b6c": "46831c5e8defaaa1ed40edaab0d004fb",
".git/objects/46/7af1b3a5e9851ce4a656951d3df97bbfcf0a6f": "335ef6aecb1b10af19de980f68134554",
".git/objects/2c/85456dd27538153e7458d99717d5fd6c29efa5": "26f5e6c2ad9e66e6c2c0b132f270f4a4",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/e231f1daa4eb28fa854fe967741b355c8d18ce": "b6677f6e02c8b7832a6d326623cfc843",
".git/objects/84/f005249e436c07754fefce31ba30835f05b932": "37b79bafbc1f13b391ce907d5a454f34",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/4f/c34f93ed77429c6a3958ac855204d0d41cf1d2": "e74e972467e35863f37bafec12716161",
".git/objects/85/911cc255b851067ace252f870743ed026eaaee": "d8e65904cc60952436026f3e54d97eb3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/f07aedd8ccee73c87860a77e4ae4fbd7d6ee4c": "22465017773e3a5a349c98c997094900",
".git/objects/78/54bbde31b5ab43f12e1f3df6e2a092e6cf5a92": "605e1a0cac36949664bd90b65a4d6eca",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "285ad0983d258cc903195ac4b6d7051d",
".git/logs/refs/heads/master": "c9466e80b363c762babc794766828367",
".git/logs/refs/remotes/origin/master": "23025925a2e1376ddde33f095c54b24e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "99192ed89f50ef35464b93478eae9ac6",
".git/refs/remotes/origin/master": "99192ed89f50ef35464b93478eae9ac6",
".git/index": "408ba08b5b061ac7dd1a0e9b74adc4f7",
".git/COMMIT_EDITMSG": "4289bbdd6fba75013b317b2f9a540736",
".git/FETCH_HEAD": "cc68298e40b50cb6a997212e462749c2",
"assets/AssetManifest.json": "c3f3437fcaba9e672d39b42b897c8636",
"assets/NOTICES": "e2dc3005e97b0841fee4e3c9f410d481",
"assets/FontManifest.json": "b34e3cc4726982613391901080a33843",
"assets/AssetManifest.bin.json": "cb0a482e227438f938c6cc713d0807ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "afeb8f1e108599ddec0146781c6a5dc4",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/ic_wheel_center.png": "544af1960f8fa03a4b182816b62d4721",
"assets/assets/images/2.0x/ic_wheel_center.png": "84740f62c2e849eccb195de8963c6dc3",
"assets/assets/images/ic_8.png": "0f1aa32cb618e800e1894017c6a3fdcc",
"assets/assets/images/ic_tre.png": "ddceca8f9eb3915ead745cc888c0b9d2",
"assets/assets/images/ic_9.png": "f573af237fbcbd6705972b1718cc129c",
"assets/assets/images/ic_mai_left.png": "cacc5585b62dc2e83b61fde2024226b6",
"assets/assets/images/bg_tet.jpg": "e803bdcf3fa4d73cb69f2948f00f920b",
"assets/assets/images/3.0x/ic_wheel_center.png": "d96f6825882f25c93205ab69eeb213cd",
"assets/assets/images/ic_2.png": "62848af630c9654b7f1edf240d8a6aca",
"assets/assets/images/ic_dua.png": "91c88db6f0038284924a3f7cf85446d5",
"assets/assets/images/ic_11.png": "b7a581c5558caeea6e22a60b51d8883d",
"assets/assets/images/ic_10.png": "1d1754a74efb747de21697fdb8f29139",
"assets/assets/images/ic_3.png": "205ea034f02eecc7930e07b576e2ebd4",
"assets/assets/images/ic_1.png": "e82d4220090d7b45e27a6699b6e1ff41",
"assets/assets/images/ic_12.png": "bd949db157f109b8af7ff731717c231d",
"assets/assets/images/ic_13.png": "05e22268518c97c85938be6c5cab2ecb",
"assets/assets/images/ic_4.png": "9529f9be066395467778dd3b3a2c96f4",
"assets/assets/images/ic_16.png": "9676d53aaed5b0d8665435acf2f37885",
"assets/assets/images/ic_5.png": "954681c1849d1ae914d5ef0ef6df9add",
"assets/assets/images/ic_7.png": "d9618e45767e3a9c3b492889acf5a949",
"assets/assets/images/ic_14.png": "7efcfa48c17003b86d24d3219cdcfd98",
"assets/assets/images/ic_15.png": "40f47ddfb616472dbc24bc370a69a169",
"assets/assets/images/ic_mai_right.png": "65175bb5e1b6ae737f649a10fa15daaa",
"assets/assets/images/ic_6.png": "e82d4220090d7b45e27a6699b6e1ff41",
"assets/assets/images/ic_ran.png": "45f74459f8ff18cd2e345031f170098c",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/NotoSans-Medium.ttf": "a1311858ffd88b69aa5eadafd8f5c164",
"assets/assets/fonts/PaytoneOne-Regular.ttf": "85daf9c50e0de17ce952a7c9bf918bae",
"assets/assets/fonts/NotoSans-MediumItalic.ttf": "c3df9f63939ae47a3f978d3fdfd8ed8b",
"assets/assets/fonts/NotoSans-Black.ttf": "a45b4647b217a27f7eb0db1f4a4a2421",
"assets/assets/fonts/NotoSans-Bold.ttf": "2ea5e0855d5a3ec3f561b5bc62b39805",
"assets/assets/fonts/NotoSans-SemiBold.ttf": "f5a1e1476234ba356911d9b4e287e30d",
"assets/assets/fonts/NotoSans-SemiBoldItalic.ttf": "69f9af3b328aa8557b3c81df5ccaece6",
"assets/assets/fonts/NotoSans-BoldItalic.ttf": "4321108b0cf255575499e2361b6501e0",
"assets/assets/fonts/NotoSans-BlackItalic.ttf": "13ac991d429a2ca6be9451e38a5079cd",
"assets/assets/fonts/NotoSans-ExtraBoldItalic.ttf": "cb45ddbeb7ca5b0c1934ce48f8a3767b",
"assets/assets/fonts/NotoSans-ExtraBold.ttf": "6d20a0d666df4e4ed72c2f666a974ea0",
"assets/assets/fonts/NotoSans-Italic.ttf": "a6d070775dd5e6bfff61870528c6248a",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
