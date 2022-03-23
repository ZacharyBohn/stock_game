'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "15ef841730d24418a994ff4ebb053068",
".git/config": "17eb504d2e456412bb3de757582b525b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e3320878ba4e5a1b10d3ad073fd09b8c",
".git/HEAD": "2e315b57043b0a01c10d1365acfe0ff6",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d47398dbeb1e98475dc8234567b5ae6b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "50e79acb94b37119125f6b87690c52fc",
".git/logs/refs/heads/gh-pages": "11814714cfda43284084d7b478a7d896",
".git/logs/refs/heads/master": "dfcd87fdda808622ed8f5a0d2b479c95",
".git/logs/refs/heads/production": "0942c01b6f00338f5da6777c040d9274",
".git/logs/refs/remotes/origin/gh-pages": "be7f7a50b4047dbeb30ed2bcdec931c4",
".git/logs/refs/remotes/origin/main": "f5bb98a7d61899ae52357c5418cd16df",
".git/logs/refs/remotes/origin/production": "0fca20b8fd52f35486e08acceb13dd95",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/c34eebbe1602baf3b3766e316093004eb4510b": "253a30dcab58fd3a76df4ba423d2957d",
".git/objects/0b/7977ada3e502055cd5ef5f69f654a539531a8c": "23247ec406c0f6df9363b860dc9217e8",
".git/objects/16/d54679c97a70d98aa4641411030c8d67ade41e": "90420c16f530273e72fcc6cbfd889adb",
".git/objects/16/ec1008b5df43ebfd54bac0ff629209a396a5bf": "358a890e2f8fe3a412b367c1dda89b28",
".git/objects/26/15ef834be4fbe2fca85d1c5fe2002883322af9": "8f9e529327b254a1a0c3e5cbd3903329",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/99a463ebd08b870570dff3936df82f18ccdf92": "b13509e6c1ac6a62984cec68a1bce795",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/b5005f60143ce3a12834fea9e87634625d6136": "f76964c2a85a72c47db081b4407c599e",
".git/objects/52/bab582205de346446d3c8d37eacc8f8bb192e4": "fd78cc00f87e5ddb3c2440df8ba0c935",
".git/objects/66/222eb37cb368388b6961a606f7a16a6cc98a98": "05a628e0cbc55047ca243d464bf5266d",
".git/objects/66/b06ac688fab5388986757bebb236f52a0a106b": "3d71ad9fc7b869bc49758ebd757205fa",
".git/objects/75/7e4f5556f46f996e62d0cb7f4c36385df5fce3": "4d017e18bffd85e14be395472d44d0f0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/f1ac9ffb1f70f53539cacfb4f1352985759c3d": "dd3538b7b78d650f4fd90e0df24a859d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/204d48a05c3db3ce1bdc144717368e9e61cc28": "a71799a9c7ca6f4caa47a20c39d8e2ad",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ff/0669c4e84f228958a5be07fa372ef21d32bb44": "130378dffd2049572ad2b5a1696b141d",
".git/objects/pack/pack-2dda1ad1080a6e418d9a24ad295165748b5e574b.idx": "aa17252768edc759d5790400b6b74dcd",
".git/objects/pack/pack-2dda1ad1080a6e418d9a24ad295165748b5e574b.pack": "0bf771c02c9292eb752cd22fae530e57",
".git/ORIG_HEAD": "c16a07f88084ce4b0d3221c991c36515",
".git/refs/heads/gh-pages": "a3900c417b4e8e41b6c32182f042f229",
".git/refs/heads/master": "aad3ad48eddc77bf7300a8ee9cb037fe",
".git/refs/heads/production": "c16a07f88084ce4b0d3221c991c36515",
".git/refs/remotes/origin/gh-pages": "a3900c417b4e8e41b6c32182f042f229",
".git/refs/remotes/origin/main": "ebdd9ed5aaa87d063d3e9db6a8e1db06",
".git/refs/remotes/origin/production": "c16a07f88084ce4b0d3221c991c36515",
".vscode/settings.json": "6a4fd723dc217bd722ee83bf989730e3",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "a8496d2b7c805da25524743b75636121",
"android/app/src/debug/AndroidManifest.xml": "8da018266c32d7f607ae0bc2994795e7",
"android/app/src/main/AndroidManifest.xml": "c578818385223f784dd40cab7496992f",
"android/app/src/main/kotlin/com/example/stock_game/MainActivity.kt": "5026cc4e0940772f7b164bcef6f9c47b",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "28e128a0ed9ec526c8673198e751a3cc",
"android/app/src/main/res/values-night/styles.xml": "b98b32ea0a3c018ad99a73ab8e77d32f",
"android/app/src/profile/AndroidManifest.xml": "8da018266c32d7f607ae0bc2994795e7",
"android/build.gradle": "d2ca010c48bc7879b51a8900ee42abbb",
"android/gradle/wrapper/gradle-wrapper.properties": "229502955d529ae0e02c6ad58236b7a0",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "de2f615eb4e64a7f90e552a4c1a073a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"build/web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"build/web/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"build/web/assets/NOTICES": "278a8ba6253f289634be2fba4a02d3df",
"build/web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"build/web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"build/web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"build/web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"build/web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"build/web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"build/web/index.html": "60157adf239683d96438f834cabd0679",
"/": "2346eddd680737a0a03e4de83cf7bcca",
"build/web/main.dart.js": "1b8ecf98f0a1b7318faf3aa8eacd9a5c",
"build/web/manifest.json": "1daf6095c10be9f25bc6bb09e5ae4733",
"build/web/version.json": "23c11e3291ab71c0cef025638f464cbf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a7e903c28fa290857525cdbacad3ba49",
"ios/Flutter/AppFrameworkInfo.plist": "db12a133dfacff2c7ffcdfe99a669634",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "e2b9a9fb66c6f8165a179d370eb723c0",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "128e30cc061e49f503f48c338a21380e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "9595f5692fac4a15b50616d6549e9ed4",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "2adf6396c0f80a2ddc96ead2f2405220",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "f8e7955550407d4ec71d28e7c2d8c8c6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "19898f3eea0783250a0e2a20dc147827",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "a34a631e106b9e7251e55fa199d34bca",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "27c7e24d5bfb4f14a7978883bebfaf73",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "7af6f2ed506e771a319d46846dde1f26",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "975d8a8c44f5d28ac65263294b84b0c5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "c0fa6a088a2d486e4d75a012096d611b",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "d86de75e9341c42432a12b3d58e364b8",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/Info.plist": "8938dd418f41d5c289d9731661c96f96",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "ccf146e7a8784575c4a5110b1bb671d9",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "5da85f8957f771f0c1002fdc60fc4a04",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/database.dart": "a326f9d31504fad1203e4176c5e02f25",
"lib/main.dart": "3f4675f10ceccd28ea5f824031ddc11e",
"main.dart.js": "451540bb9c56793ed41a0cdccf879026",
"manifest.json": "1daf6095c10be9f25bc6bb09e5ae4733",
"pubspec.lock": "692001f384470127912c0630ef35783f",
"pubspec.yaml": "902e394be08bdd324bb0aec562b13444",
"README.md": "6070c640a729a956c8070dc26a4d4d44",
"test/widget_test.dart": "b7285d7bcc5bfc6629a3baa94612a9e4",
"version.json": "23c11e3291ab71c0cef025638f464cbf",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "2346eddd680737a0a03e4de83cf7bcca",
"web/manifest.json": "1daf6095c10be9f25bc6bb09e5ae4733"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
