'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "742fabfbb0ff287f1b3b40b4d2fcaf20",
"assets/assets/Fonts/AvertaDemoPE-ExtraBold.otf": "fe2229d60258c59f4a831f51d13c8ea3",
"assets/assets/Fonts/AvertaDemoPECuttedDemo-Regular.otf": "03079f487621b4be7f32559d6ebc94ab",
"assets/assets/Fonts/Cairo-Black.ttf": "c3da5664903bac89a1e5a6f38e47a778",
"assets/assets/Fonts/Cairo-Bold.ttf": "ef55322bc2031017175022b779940cb0",
"assets/assets/Fonts/Cairo-ExtraBold.ttf": "0645b8a99ffdc54a258b3eb7f6d160b9",
"assets/assets/Fonts/Cairo-ExtraLight.ttf": "a20fc041a3249119d5ac5232a72aab6d",
"assets/assets/Fonts/Cairo-Regular.ttf": "374ef4fe60ef13426296c292bba5e237",
"assets/assets/Fonts/Cairo-SemiBold.ttf": "b9eb3a03009d618aa53a0ca8eaa6ab4b",
"assets/assets/Fonts/thmbnl.%2520-%2520ChromoxomePro-Bold.otf": "803a6447d2f3e6d3ce724b2b8111cb36",
"assets/assets/Fonts/thmbnl.%2520-%2520ChromoxomePro-LightOblique.otf": "4be521d2bb59b0e389936fea0fe2d48c",
"assets/assets/Fonts/thmbnl.%2520-%2520ChromoxomePro-Medium.otf": "599557d1f904c94696fc1ac879984324",
"assets/assets/Fonts/thmbnl.%2520-%2520ChromoxomePro-MediumOblique.otf": "8005bc95c375c21704b7d75a3b63c528",
"assets/assets/Fonts/thmbnl.%2520-%2520ChromoxomePro-SemiBold.otf": "50616b4a68c0ef919fde308378af0361",
"assets/assets/Fonts/thmbnl.%2520-%2520ChromoxomePro-SemiBoldOblique.otf": "d131c31fbe0e1e6e9328256536a35ae0",
"assets/assets/Images/DailerApp%2520(1).png": "0189ebfb5a0c8ff70523f3f1fa61839b",
"assets/assets/Images/DailerApp%2520(2).png": "d8bace8c21b462fd0f5a95c20b8bead4",
"assets/assets/Images/DailerApp%2520(3).png": "51de7519bed4a70afbcff0db5b90867d",
"assets/assets/Images/DailerApp%2520(4).png": "2c72d17f1f535a71549ffdb3fa77325e",
"assets/assets/Images/DailerApp%2520(5).png": "503a146f8dc5b56e51f4dd1d198f86f0",
"assets/assets/Images/DailerApp%2520(6).png": "e11dd87dc22568ba2ffc10ec119de4f3",
"assets/assets/Images/EGS_Leagueo.jfif": "7fd64f0f7b674900bdd172967865d545",
"assets/assets/Images/Group%25204.png": "2ce65ed3887da35d308f403accb50449",
"assets/assets/Images/Group%25204@2x.png": "7ef04477a83366db4722db9d03c774e4",
"assets/assets/Images/Group%25207.png": "42c0e546e10445170cccad79abdf9db5",
"assets/assets/Images/Group%25207@2x.png": "7c54eb04d30129eccf4744a94e625085",
"assets/assets/Images/Logo2.png": "95eee4ff75df689b2a1d485dfd7668e8",
"assets/assets/Images/Logo2@2x.png": "a9dcba65f304a07a7ec4ac27ebbab94f",
"assets/assets/Images/unnamed.png": "75336696128b6b11d43e247c910884e5",
"assets/FontManifest.json": "82457ade656e57c9a1d059deca43b99e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5524f7f40a94e5b53d7a0faa64cd8cae",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "98b43a4295de1797d6feced1f8f5425a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "008a51636f275f25e73bc5911dcce36a",
"/": "008a51636f275f25e73bc5911dcce36a",
"main.dart.js": "0101c1fa2613331df0e12f9780b57873",
"manifest.json": "1dbde710cc5131256f9cb49fcd55b7cd",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"version.json": "980547175e325fe622a3362b84d55b6a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
