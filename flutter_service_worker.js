'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "091196bd59b57aecff20a3ceb064c0b2",
"version.json": "176282708111d7a47d78f6dee7f52ddf",
"index.html": "4b8e72bd7492bdb7197489763db84441",
"/": "4b8e72bd7492bdb7197489763db84441",
"main.dart.js": "959d9df191d48ceb9218ed7dc75ca9a9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1fab4b5b2dff261529bb9e527c87bdd",
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
