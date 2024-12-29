'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b064a020db8018f18ff5ae367d01b212",
".git/ORIG_HEAD": "4d8c30c2e0d9ce3006925f3b9b575767",
".git/refs/heads/master": "b8cceca7613417ace130a64e217c0721",
".git/refs/remotes/origin/master": "b8cceca7613417ace130a64e217c0721",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/bb/cd9d29ba26f14882e01eb45c4bd28bfd91ce03": "a2cf7fc3082f25318bf44ddd433a7326",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ad/8ee87f2f0ff9c1018b6365f12cca8ee64dbddf": "a0a1b84fbcc02c136c9b4548e5e67a89",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/fe/c5fef09ec36b104c00d4d7dde105ab710bbae8": "55687cd5fe38930655d8420b8e5df5bd",
".git/objects/67/aaeec19094c078bdb1baea1aa5002f2cd4a32d": "f12e6bacdecfe21f97a59f7d76a85303",
".git/objects/b1/a7e097efea8a2dc87fece888a265716bf01652": "7e6a6f6757720a73020b07a6c7113006",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/25/06e7376fb266b7dc5f26eee01bd61ccb56a949": "051cdd856c3254ffa5ca282c1490511c",
".git/objects/10/23930bca63f372bd11dc3a8700dcfcc24710f8": "bafbeac1eeafc5e91e82d4b4e6775192",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/f932a6fec6a813bfea6c785991ca73b3424fd0": "603169452c79bd81b0f74943c12197ee",
".git/objects/fa/4ede33def83df463decaf3d04a3c2a8c980151": "d8103fecfa77fe73996169bc08bd3c44",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/402628195e6b8b146503a6c15a8cba5045d41a": "d0148097ae419429fa0928d240c4a338",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/cb/afef1313f297aa5a988a130c33e2f77c137b35": "e38e06a96094e52a382d58d90c3be16c",
".git/objects/99/cb34d1c1ce8276bdfe5d8779db02301bbf3d43": "c67e8daa53ac4637a8be9dc0a3d4a2b3",
".git/objects/90/f307a42b75a3ad1a9c495ad4c4b1bd49f6cba3": "d61366ada94723fef2ab4b6a17ec3519",
".git/objects/9c/3a906fc84e3113a9e6d07b1e8166f4ebd31f6e": "2a97514704b4f68667da1c9b635cbea0",
".git/objects/a8/73f00edfe0db15ba78a38161d368345fbb4d89": "c600b6e4d56ca182ea37dc0efcce25b2",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/51/05accc7def13eedbf968b32e6a8bc669a99183": "edca9c4c7ead66733a6364367e71c2a9",
".git/objects/71/242ab545a0ea6f85740d0e05411ef06de887f7": "5933f3fff18e866a23b72ab7d0732be0",
".git/objects/bd/eef7f0ec0107c9d84ae1e42fd5a27cf2172b24": "5113b58d0f0dc8955a42acda71f2b4d5",
".git/objects/8f/da6306dc502415d11c407413f680f7aaeb4d05": "69761d6d31626e1decbaae6dc4c1ca25",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/2e/f4ee5497facc8717447122ab2e85905cd70d82": "d26d494aeedd11042ad0e4eda55ccc60",
".git/objects/2e/bb192e9b81262c8ca6247d86aa94c0ef3848c9": "537221727ad5fef4087848d8348c27b6",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/493ecff85903e0a51eefb339028bc551c7d70d": "11860c58b45054d1e6aa606d1726969d",
".git/objects/a9/31e09593759ee6cb24d19d689f89b946b0563e": "c4353de54f679ff02ca12fcab6bb8435",
".git/objects/2c/3c7e411cec1d8f0af5a633d2a56b0e7cbe4b40": "3c9d72a2736e294804e4fd62fff0a068",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/406899317759ee5273903bc9c888fb5efa563d": "9a6facced6c005a41ba01446a0a53e02",
".git/objects/c8/560cde2af6ae2df6c7b295cb875c0eb4904553": "537d464340419a0bfd8c203c64774133",
".git/objects/28/3f3ca5429a3213d0381250e3e6ad7194350631": "5d7fd25a2286b88e7da4627a75f57a1f",
".git/objects/ce/d8fcf44fe5f3ba49e713b820bbeb529b3aaa06": "828aab0598f0775cbb346827a98f35c8",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/4d/1c5e6808828245017e90c0a4a233f7d9bada7f": "909f5810f23893c5636f48f20732c4c8",
".git/objects/e4/c511467a3646c6b4038964224650173bc090a5": "4dda7e75f357acfca51609adbd87505d",
".git/objects/f7/0865f5839d2a2a0c35e12fb8a04fb5ebc68425": "890bf9a15080c153f2fb6fa36e0100ab",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3f/14ac057dbda5af66a6b118df990e4003940a4d": "69fc967edd73bf82d6cff9cf5f06670e",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/5d/0283292a4fdc6a76e4fccf203d449dc241d817": "c23831c701e70d8bb79a5fbe0dfba19e",
".git/objects/5d/766448ae43e30c7f9f0e6fc2022328234d0964": "d7103ce30f454cc815d0bf01d924bf3a",
".git/objects/04/6c56bf6d260fbd6d5a283f03e4c27f846d7994": "1e7d7ab2eb0dda5a3a18b10ddb70f617",
".git/objects/46/2665d50f545b9385a3aff6522c5ccfee30d62a": "bbd977f8fcd4358d48467cb73c058bb4",
".git/objects/f6/4dfa51ae214b687e9c71750aa80c4a969aacdb": "04d023f80d6b48dcd7242157a67d6e8b",
".git/objects/f6/924ef883b6eb81b4aca72ce655446d15978ef1": "ed8b4724544af08122e14f655e4c459a",
".git/objects/dd/9429fa30f02c526ee73831158e46e51cc9422b": "b27aa4b490aa0f7482936bee59bc0045",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e3/5ca52717929eb6b7f50c194080fd5f0ce588c6": "4e66cbfb9084a2a88541f9ce911ddc1a",
".git/objects/5a/17260bde3d6a58bb0e93bfb4a36c289fdc3e61": "964b2f0721f3013ce2182b08fb809bf8",
".git/objects/5a/be889af2375087f2d26b0da4cb03ae5f6030db": "544edfcbb5d8104e96822ec05b61cf0d",
".git/objects/f0/91cf23ceea8f5915fc612dba1ab69093ccf4e3": "1483851a59c8e611bf6ee99b4e25f5a9",
".git/objects/f0/b62a787a37b13f544224709027336a0dee62dc": "26cf05512608e453477aee25a86415f0",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/ff/003184955cbc7bb6263a061aba380668472a77": "e3006c27600e5dfd0fde04db89be8abf",
".git/objects/07/fd6c96c280f1b0627ce0872844ef6d833824ab": "e887a67d70b68404f1fa75cdd2598c96",
".git/objects/b6/f3e31f6e0a6912377a580ef86d28425fa37ea9": "7cbafc939baf2b69dc19b030d60730d0",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/cd/1864e2c141b70e18088179f31b3b63824eed47": "9b44dafb2bd6145daeb6b2445e8e81b1",
".git/objects/cd/2df09ffe25120233ade350b6cbd6a2d34b0f86": "978eef81e780636f63eaecf78b3b8719",
".git/objects/cd/6b7d87064bcbda407076f048779c7a98d3f39f": "11631b948571f39797a371d0c79746a7",
".git/objects/54/c17ce16caf8b074983800c78e12c4a812ae799": "079601d589b98919071b70e4560a5a1b",
".git/objects/15/d5c9457dc83f0fdb1d27fd72270b6b07502a72": "3b7971703e9b1c5a4aee52537f90a462",
".git/objects/f3/de277628bb5fcfc550b68cc624751327d9e9fe": "858a3b14592b2842015f1ae364580ce5",
".git/objects/66/716f45d9e56ada9875b5b62d995f211eb669af": "658b559c23b9d53f07a83d96dd843217",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/75/792fc694f993342fe01b585c3c07a8e3d39ad3": "fd35c17a0e4975974043df9255577135",
".git/objects/4b/d8694164c0d4f849a0a667429b9204b89bdff9": "75798297f0f515c268859dbd034dbdb7",
".git/objects/09/a065c6fcb0dbdcfa6cb45c567c86a4007dcd0e": "78999468547c31948d56bd50cda1000f",
".git/objects/83/280a4151e30af49623df6b6a404c67720b1ef8": "320d7a486d64040b2fbebc8712e1fca9",
".git/objects/83/cce55baf91494b73ec4daa84e45d22dce6070f": "c82c66de03040b4f108cdea5dc273975",
".git/objects/20/6aa4ada75714e2df6709c7b51bc1276c191388": "66f3be8d7c9e195e0ac70b5829e68407",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/18/216e36bbc947ecd07e6965c52be930a46f5d66": "bf152cfd4786169d697f79e32a8551ad",
".git/objects/86/a90168ae8b5f9ec67e0c5285e171f408039f36": "d4c03b159abffef416278ecd315b22ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9e/c5ef9d8f7e40eeca7851cc5db6a4ba79cd1d81": "8bfb2ee5b73846a0b461788b305a4ff6",
".git/objects/16/26b1b5943034ab7af873cd1b1abca1abfc070d": "1d21a45ffcf270a58537d9c7ff408a78",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/65/b34a58615c6590e361b180af467ddd6c5df7af": "2fa4635b362a890ab94498a7cf1d25d6",
".git/objects/65/c696c4701d659eae8e1fc5f0c3548e30ca635f": "de38667524e8b1d6bbae7537952158c7",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/38/f72c3b661274731c0dca4263c6147292c3313e": "06ec909689545717240ec77454003efe",
".git/objects/30/9f2d71384d23cfc2a284d17a8b7261e346deb1": "50d54a42e86f3ed877eb2d9a21685506",
".git/objects/5b/c6ec204726f846dc0c23d0c5f0843fa1698306": "8e715e8d7ef37c2f7ed2b5cf21a068a7",
".git/objects/f2/0917b716e1fdfaf9abd4b43a64d5bfa50c4222": "cf2ca25ed3836030b092485834e3a8e9",
".git/objects/f2/1df9c51250c6039a933c08758483db2c7d7a85": "e4cfcb2d0fb088c5fb7ed3166894ceeb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/8b/b353b605b7272a1e7fb6e3dcc73e0bcf436332": "62343104ec534a20e50f76fd9ea719cc",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/23/86bcf9af940380939d6bf60f6ae6ac9677bb02": "242f0b6176bfc78b051f53f2d0990374",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8d6690a3d3e5389ddbfec740cca6638088975e": "b3459b73d28ca15f3eef1b5b0aa710fc",
".git/objects/85/d17c1a6fc38e78f7a47458fff972b2e1700425": "2b3c645f1cbdc356567338d002364556",
".git/objects/85/8c6f2b2d46e5780e8ef40037ac5620eb41496e": "fbc1d43a062b6a8e8376ebdfdb08dc43",
".git/objects/62/04eeada83c710839318167f5bf09e0a565bed2": "50c2eb2b490060f4d280f3cc85a69d2c",
".git/objects/b4/d923da40f41f5c6041755b6b8040b1000e957d": "114351931c811de7dc16e28804a064a8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/08/bf585cf4270b629a6426d4a099f0802dda9af8": "198548d3effad4636a11028b3c039432",
".git/objects/af/d12c2aab0d38a19d837c5d77f16d2ffad812d6": "30a840e01cc9dae16273d41e5fafd723",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/c9/3f25f75200dd0c039dd6a4989c94855f33a841": "180c8097e54d58da423f7da3e1fc6859",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/7e/4980d842148ad2134f095f06aa53d88a413f60": "ba0cddd3d190d59c6d5176fb42386bec",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/6d/c01bdc2cd2c0c1f2691ccc8c593fe74a6d89fb": "6d5c690c364d6a97562f81560b828eae",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/3d/8e2b925c956aff1ef051086d334bba1e387dce": "1f586627383247f58beda73182553cba",
".git/objects/b9/5a2ec08ce19f962be98c0f5d6ac693968bd737": "3c6cf2106d3bc1f9d0ceb36fa7de4753",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b2/96a12dfa2e0af0f4d8f6adc7963569c3e975c8": "c0d9cab5c526e3dad98b09b1738cd591",
".git/objects/b2/37bbd3e96194069e184c148d8f417528441995": "2663fd1af2c8238eb4a2b99ab7f240eb",
".git/objects/f4/ebae7c665bb7a67425b109dbc6ddaaefb08dfd": "6ab0583ad7c1e28009e53007a23aa22e",
".git/objects/a2/558c054913f14e14fe2566fb70d513faca2177": "ba8eb1e5a1a42ce121fd0b48f9fac605",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/index": "b4c5884f8a23c4f373de499f3c1028be",
".git/FETCH_HEAD": "561e0132059b19d5e88751c6c75e370f",
".git/config": "dfbaa8a14a03cc278474c6cea840f37d",
".git/logs/refs/heads/master": "ca22f5d79c51e893fec6e6c9c05671cb",
".git/logs/refs/remotes/origin/master": "365bfbf9be1646d1b5e2ee7b2124f16a",
".git/logs/HEAD": "ca22f5d79c51e893fec6e6c9c05671cb",
".git/new": "1d3fc65565fe033db1df33409d5a9a22",
"index.html": "bd13b96d5447e21350a3c87487062152",
"/": "bd13b96d5447e21350a3c87487062152",
"flutter_bootstrap.js": "7e4a8d918225a45022ed8fdfe791bf91",
"manifest.json": "d913293ed8fdc9a18da9d4cd231590d8",
"version.json": "d92d97e0eb76dcea4dd97dc220e8ff3d",
"icons/appicon.png": "48a844db6fce1c1e0cbf7567f40c61d0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"assets/AssetManifest.bin": "44123f1b904ff1fa9b4fe48cd6db412c",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3bb40a664d30151784350a69dbd31308",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/AssetManifest.bin.json": "e7cf40e21135b0dccfcd5cba2424950f",
"assets/NOTICES": "1cea601fd38612e9f3647bdc132771ce",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/assets/lottie/whatsapp.json": "3a71f8fe1b145ec7573e98762a6c8986",
"assets/assets/lottie/resume.json": "4971cfde8ab408f25d7203731ced3dc7",
"assets/assets/lottie/download.json": "6d3b3c4e9de90170fc8b8b39a7ae7b0d",
"assets/assets/lottie/businessman.json": "09a5afb1bafde5a73536fef9138a5aed",
"assets/assets/lottie/hi.json": "4a5b187d7a72b4bf2fae1cf3a828fca9",
"assets/assets/lottie/website.json": "05b72e11ed946cda3b3e2a2fa8aaf234",
"assets/assets/lottie/github.json": "ca02963e252e3619fa45582c7324929c",
"assets/assets/lottie/package.json": "528f614f34eb94bec69869b9db180faa",
"assets/assets/lottie/how.json": "a14707d963808b700cdae3cd974fc3be",
"assets/assets/lottie/Parrot(1).json": "4747af15979d890aa9a19cd5dd011d46",
"assets/assets/lottie/website1.json": "9db6523f3a78920c3d84ba979804e85b",
"assets/assets/lottie/ani1.json": "e227306db570ab45be9b3991ffc8f462",
"assets/assets/images/appicon.png": "cb28dc14b4e9c6eb37e8ac6418e74db6",
"assets/assets/images/login_background.jpeg": "7781c439d22e0a42baea383494b1767d",
"assets/assets/images/backgroundimg.jpeg": "4429134bcc53bc8d7ac788e0ba3de9d0",
"assets/assets/images/google_icon.png": "7d2d7ef5aaa41fb4a82e81a8b16b1a3a",
"assets/assets/readme/README.md": "364919b39a7775be886cf8bee8881aa9",
"assets/AssetManifest.json": "30abdbb52b84a74f0284077da5c480a9",
"assets/fonts/MaterialIcons-Regular.otf": "74b99f0a1e9caadcad9381d412a30de0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js": "54f2a3ccdcf090de1cd9f541bd9c8f91",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"favicon.png": "48a844db6fce1c1e0cbf7567f40c61d0",
"CNAME": "733ef0505b01bc74716387329dbf1438"};
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
