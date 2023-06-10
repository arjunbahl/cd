'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e75e9714e62f136d5953c5e1783824e5",
"assets/assets/posts/2017-05-23-introspection-1.md": "57bd6370240ea941f235686d4a8a08cf",
"assets/assets/posts/2017-06-10-lessons-learnt-during-ipcc-nov16.md": "64e02fb6bb9bc3495b2900f6aa90a95d",
"assets/assets/posts/2017-08-18-digispark-notes.md": "fb6052f5a3b4fc6305fe32455f66a685",
"assets/assets/posts/2017-09-02-mailinator-com-websocket-api.md": "f60460e6795074f6ed1af27cf34842c7",
"assets/assets/posts/2017-09-05-get-serious-about-things-you-do.md": "d83b2fe94b864e7c0614e85145006dcf",
"assets/assets/posts/2017-09-08-creating-an-cost-effecient-and-optimized-system-of-green-commuting.md": "e2d957e5987a1c33ee93093dfeeef059",
"assets/assets/posts/2017-09-30-moving-one-up-on-family-ladder.md": "a4891f060f38270d81193a1cd4b8279f",
"assets/assets/posts/2017-10-01-effective-learning.md": "936ca579b74cd776a1dc3ba183d727cb",
"assets/assets/posts/2017-10-03-letter-to-aastha.md": "2202815de0805d773161cf8e451f3c32",
"assets/assets/posts/2017-10-14-harivansh-rai-bachchan-poems.md": "c822db05e4c1a8e1ae84c34b6227a010",
"assets/assets/posts/2017-10-28-why-taking-hard-decisions-and-forcing-yourself-into-uncomfortable-situations-is-highly-beneficial.md": "10615d2267ebffb13e675d41984c0bc3",
"assets/assets/posts/2017-10-30-using-tension-to-get-work-done-effectively-and-efficiently.md": "156d47e36b6f3350c5f356b416e6d921",
"assets/assets/posts/2017-10-30-why-one-should-constantly-revisit-his-goals.md": "29f23154d60937a9598a3e94bdad849d",
"assets/assets/posts/2017-12-04-what-ritesh-aggarwal-learnt-at-thiel-fellowship.md": "e21cd535e1820f60e96d40be39a29a40",
"assets/assets/posts/2017-12-13-lessons-delhi-university-exams-sem-5thdec17.md": "929cb7f0006a3261a38760e640d1a1f0",
"assets/assets/posts/2017-12-20-lessons-rakesh-jhunjhunwala.md": "ac7be88444481cf48ab5327b7bf6237c",
"assets/assets/posts/2017-12-22-introspection.md": "323f59786c597ecc2e03d1890874dd85",
"assets/assets/posts/2017-12-26-improve-handwriting.md": "0919634b2c33bbf18ed2a9f31b73e1c6",
"assets/assets/posts/2017-12-29-lessons-parveen-sharma.md": "0c65978eae9f96653a0f8921ae8dd7dd",
"assets/assets/posts/2018-01-05-bitbucket-configurationnew-machine.md": "7186a1f3b32b2d8da2d03ec9e958d88c",
"assets/assets/posts/2018-01-21-business-lessons-selling-and-variety.md": "4549be2b75d19cf8cc378f8a1f5d3b4d",
"assets/assets/posts/2018-01-28-lessons-ipcc-nov17.md": "59b7392c09200705db7426cfdf0a650d",
"assets/assets/posts/2018-02-15-rocky-balboa-speech.md": "80ebed94a3bed642761964318da0aeb7",
"assets/assets/posts/2018-02-25-introspection-3.md": "4115589951226ed5ada8a32d1a62a6a1",
"assets/assets/posts/2018-03-01-beat-procrastination-inaction-to-achieve-goals-seeming-to-difficult-at-first.md": "84dcefedd414fbc5d5adcd3f12e47531",
"assets/assets/posts/2018-03-06-book-notes-i-do-what-i-do.md": "688865837e5d521723d225320841f5f3",
"assets/assets/posts/2018-03-06-book-notes-ignorance-firestein-stuart.md": "adde59abdb270ce5f88cc4f8354daaf1",
"assets/assets/posts/2018-03-06-book-notes-rich-dad-poor-dad-kiyosaki-robert.md": "2eb2d4607037e87ad6445a75aa5af68d",
"assets/assets/posts/2018-03-06-book-notes-the-48-laws-of-power-robert-greene.md": "36c89442ee643cea7f3892381fa767c6",
"assets/assets/posts/2018-03-06-book-notes-the-5-second-rule.md": "75092f5c9392ef971e2130f32b3f809e",
"assets/assets/posts/2018-03-06-book-notes-the-physics-of-wall-street-james-owen-weatherall.md": "94440a3c1748bcbf70cf3c61d219a05a",
"assets/assets/posts/2018-03-06-book-notes-you-can-sell-shiv-khera.md": "6274a58a6af8f3a0fcf44fec3564f8ea",
"assets/assets/posts/2018-03-22-lessons-parveen-sharma-2.md": "d6454332b4237d37f18966c43e036397",
"assets/assets/posts/2018-04-12-resync-sleep-schedule-change-sleep-cycle.md": "880df3bc2ba3d9e5c3cf0fb1036f0892",
"assets/assets/posts/2018-04-13-jim-simons.md": "acae1ad9b93afeba7c5b9e511d69eca1",
"assets/assets/posts/2018-04-14-belief-and-will-power.md": "a550079c614e6ef31f93e7870aac9609",
"assets/assets/posts/2018-04-29-when-lost-come-here.md": "9d9e0a118f6be445a602a408c226f760",
"assets/assets/posts/2018-05-02-1215.md": "acf49a119c42ce9448bd07498eead29e",
"assets/assets/posts/2018-05-24-lessons-college-3rd-year-last-sem-exams.md": "a8e0da27dde9130dad789a01d5f7c589",
"assets/assets/posts/2018-06-10-failures-1.md": "d50cde9c7ef801a1edbc12a0d02098de",
"assets/assets/posts/2018-06-10-ideas-5.md": "f0d0a974e37a64a2ca33f9c97aa57aab",
"assets/assets/posts/2018-07-07-ideas-6.md": "f1899014615ce7c80b97f9e4faea5387",
"assets/assets/posts/2018-07-07-the-third-door-alex-banayan.md": "f883ee68682528320cc1c80917276b69",
"assets/assets/posts/2018-07-10-bhondu-vs-sophisticated.md": "a42811afbf438030837c5d1e1dc9abc0",
"assets/assets/posts/2018-08-18-steve-jobs-details.md": "9c77af71334cb29d71c85bff2e804389",
"assets/assets/posts/2018-08-29-hardwork-smartwork.md": "23d055c7cbb44a8166fd8164386426a0",
"assets/assets/posts/2018-09-02-self-control-as-a-measure-of-success-better-at-prediction-than-iq-social-class-etc.md": "e78a399fc2f709c32f36f424aa81582d",
"assets/assets/posts/2018-10-05-parveen-sharma-srcc-confluence.md": "1c697759e63598081242a0dae68de5b5",
"assets/assets/posts/2018-10-18-conversation-with-aastha.md": "acedbc2a3d897b1e8a119ce39efbd003",
"assets/assets/posts/2018-10-19-push-the-limits-fuck-the-estimations.md": "c08d113cada8c04c20292dc1952e0d52",
"assets/assets/posts/2019-02-17-re-emerge-creativity-hbr-notes.md": "96292373d765a6775aadaa25fbdd255e",
"assets/assets/posts/2019-02-26-rashim-tandon-deloitte-partner-coporate-career-advice.md": "f87c00bef93520ac60f9a4baf185d994",
"assets/assets/posts/2019-07-10-rajiv-bajaj-yoga-homeopathy-philosophy.md": "43a0b0a61b4cdb17a4b5b2ae92f5eaa3",
"assets/assets/posts/2019-08-11-life-experiences-reversion.md": "bf3c7973906f7ba495c273e37639097c",
"assets/assets/posts/2019-08-29-one-of-the-methods-to-solve-math-problems.md": "0f3d6f7a27b93b83009988be27e9dff8",
"assets/assets/posts/2019-09-14-asim-qureshi-difference-between-achievers-and-average.md": "7f59d09ee67ed0e801e185d19f402456",
"assets/assets/posts/2020-04-26-__trashed-2.md": "42ae00d63887f477a51490bb10a0778c",
"assets/assets/posts/2020-12-17-book-notes-billion-dollar-loser.md": "2db8ba2962363cdd3fb12e5878a6cd28",
"assets/assets/posts/2021-11-14-Demand.md": "ca964c5bb3eab7d51eccfc5ac5fe47a5",
"assets/assets/posts/2021-11-14-Nykaa.md": "b73d7aef508420251ebd277e4fcf8d0f",
"assets/assets/posts/2021-11-14-Root.md": "a661e2735e63be7899630a681f8c3a1a",
"assets/assets/posts/2021-11-14-Supply.md": "8b6b210d52a863b852ac88010eca7fb0",
"assets/assets/posts/2021-11-15-'Bobby-Axelrod": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Book-Notes": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Eat-the-frog-approach-enhances-oneself-and-creates-opportunities'.md": "6fcde311380d0131b8eaf72589c0cc26",
"assets/assets/posts/2021-11-15-'For-My-Kids-%25231'.md": "0f8545637f648d6e4de01443fe457c68",
"assets/assets/posts/2021-11-15-'For-My-Kids-%25232'.md": "c530e22e89ddf4079e10623439b71909",
"assets/assets/posts/2021-11-15-'For-My-Kids-%25233'.md": "9d9ef1e42d95ee5db3f60a01fc7112ef",
"assets/assets/posts/2021-11-15-'For-My-Kids-%25234'.md": "f07332fee73146afc2e9d89d1035949a",
"assets/assets/posts/2021-11-15-'Framework-Of-Life-%25231'.md": "04ed67b4f5caad5f0ff9be3f277f9bcc",
"assets/assets/posts/2021-11-15-'Framework-of-Life-%25232-(Focus,-Motivation,-Physics-Force(MA)-derivation)'.md": "9b8245aa12d068443eb59078cf5a5b9b",
"assets/assets/posts/2021-11-15-'Humor-": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Ideas-%25231'.md": "fdf0eb89c9ebb4dede7262545ab6bfb9",
"assets/assets/posts/2021-11-15-'Ideas-%25232'.md": "738f7c8173021cd32ccefe01d31b4010",
"assets/assets/posts/2021-11-15-'Ideas-%25233'.md": "e28df244240aab98920c6fa80feaa79f",
"assets/assets/posts/2021-11-15-'Ideas-%25234'.md": "e9dc1f51678320bc03ffd626193b4359",
"assets/assets/posts/2021-11-15-'Introspection-%25234'.md": "12b8c5a63cabf8a6dada757dd22827ec",
"assets/assets/posts/2021-11-15-'Notes": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'One-Thing-That-Differentiates-Successful,-by-Jeff-Bezos'.md": "10ea4dac095e64d5031ec7c39f553282",
"assets/assets/posts/2021-11-15-'Project": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Quotes,-Maxims-%25235'.md": "66d44b28d9f2afaa95ec5046d8aa7bc3",
"assets/assets/posts/2021-11-15-'Quotes-%25238-(Primary)'.md": "936e2c7a4464c185bcd5519bed5862e6",
"assets/assets/posts/2021-11-15-'Thinking-Ahead-For-Your-Life,-Walking-the-Road-Less-Travelled'.md": "7fe50c0d2e2ccea2338a8688f44c6727",
"assets/assets/posts/2021-11-15-Adorable-And-Prodigal.md": "d12e73b4ea6599b55cbebf2371b6ddd1",
"assets/assets/posts/2021-11-15-Book-Notes-Ahead-of-the-Curve-Two-Years-at-Harvard-Business-School-Philip-Delves-Broughton.md": "426144ce1db305f34df2970c364b9810",
"assets/assets/posts/2021-11-15-booknotes-Strategic-thinking.md": "8eea24dcc93570ef67dfd773790423dc",
"assets/assets/posts/2021-11-15-Eclerx.md": "ec5f34af86c460153a086fe3705813b0",
"assets/assets/posts/2021-11-15-Ecomm-Project.md": "1df2693a8066fe1c5824e53d6217ddac",
"assets/assets/posts/2021-11-15-FII's-Selling.md": "0b4547783e4c379bdc1078eba0ac8b9b",
"assets/assets/posts/2021-11-15-First-Ever-Group-Discussion.md": "369a493a29a09cf1b51c3d267d27fbb3",
"assets/assets/posts/2021-11-15-Hack-To-Push-Yourself-Further.md": "ebeaf0ec75bebffe9dda14be2e231795",
"assets/assets/posts/2021-11-15-How-does-an-impending-Stock-Market-Pitfall-look-like.md": "0fc1e9117e23af4e1fe8e2b51b6762b5",
"assets/assets/posts/2021-11-15-How-I-Got-Inside-Haryana-Government's-Server.md": "076fedb7ab7ec016da50c0e88fc2c482",
"assets/assets/posts/2021-11-15-How-to-refuse-or-disagree.md": "48cadaa9c17f5624067b5950606370fb",
"assets/assets/posts/2021-11-15-Ideas-11-03-2017.md": "053eeb6bcb2b62ccca7433c4e7d4f037",
"assets/assets/posts/2021-11-15-Important-Points-Wordpress-Installation.md": "6a42dc5b80ddd6ebb7c202e3a626aa9c",
"assets/assets/posts/2021-11-15-Inconsistencies-Within-Indian-Education.md": "29b6f52077dbb6fac6926d5b14616ac8",
"assets/assets/posts/2021-11-15-Installing-Yowsup.md": "f3fb0dca71e0bcfa0f821b15aaccc175",
"assets/assets/posts/2021-11-15-Insulting-Techniques.md": "236beaf6ba573193482d06a2e792acb3",
"assets/assets/posts/2021-11-15-Junoon-Aur-Sukoon-Aur-Pagalpan.md": "479ea9e87cf736e74da703a8caad1905",
"assets/assets/posts/2021-11-15-K&M.md": "6a350b8208c944a89dc2096ac0f3ae02",
"assets/assets/posts/2021-11-15-Lessons-Learnt-During-IPCE-2017.md": "0d87329eb790d38939446a85f03e5b1c",
"assets/assets/posts/2021-11-15-Loreal.md": "131ec6f104aa610d8977573716b105f6",
"assets/assets/posts/2021-11-15-Myglamm.md": "6cfaf96167e772947bbb7550d30da910",
"assets/assets/posts/2021-11-15-Notes-2020-03-01-1703.md": "3037a999253124e5fa4b893aa10e0f08",
"assets/assets/posts/2021-11-15-OP-Training-learnings.md": "323c79a26de358353e4b7245a2985fd9",
"assets/assets/posts/2021-11-15-Park-Run": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-Parveen-Sharma's-Way-Of-Teaching-And-Learning.md": "8f39b31ea0241ab880f8bb8b593537a1",
"assets/assets/posts/2021-11-15-Payment-Services--Oblivious-Or-Aware.md": "44b3718c88ac90aec56d871a7b9340d9",
"assets/assets/posts/2021-11-15-Pigeon-Stuck-Inside-Home.md": "fd28f658ef81dcada466cd69b8c642b6",
"assets/assets/posts/2021-11-15-Piracy-Sinless.md": "9ff03c850dc9bac9ed16a4c5780ad693",
"assets/assets/posts/2021-11-15-Port-Forwarding.md": "82f7fe012e4abc666c8972394f4d3753",
"assets/assets/posts/2021-11-15-Post-Demonetisation--Google-Trends.md": "c637d699c88c084ae532ffd61fe05ac4",
"assets/assets/posts/2021-11-15-Prabhat-Jasra.md": "2c0455249eeffed9e9182f88c4e965fb",
"assets/assets/posts/2021-11-15-Pursuit-Of-Happyness.md": "ebb88b8a262112b160ddae762caa6588",
"assets/assets/posts/2021-11-15-Raspberry-Pi-Notes.md": "7c35852032e0ed30814be98d31e09dd5",
"assets/assets/posts/2021-11-15-Solving-Hard-Problems-With-Simple-Ideas.md": "bf01e1d69e44d2fc446bd77485ebf708",
"assets/assets/posts/2021-11-15-The-Aesthetics-Of-Chess.md": "159447d5543bdf6e9f54ac920cafe71d",
"assets/assets/posts/2021-11-15-Whatsapp-Bot.md": "8c3b5ad40c9296bf8176c3bc018411a7",
"assets/assets/posts/2021-11-15-Who-moves-the-Sensex.md": "d386578f8a4e6dce073045eee3146dd5",
"assets/assets/posts/2021-11-15-Yowsup-Registration.md": "9141cd7920261a69789d67d659615af3",
"assets/assets/posts/2021-11-16-Linear-Algebra.md": "48680d3d31703e8ed318c90380c7918b",
"assets/assets/posts/2021-11-16-Math.md": "cd2ac57663f7d136efbe990f1a84b5e7",
"assets/assets/posts/2021-11-16-Portfolio-Optimisation.md": "c1a9de833144832787bceff0996be198",
"assets/assets/posts/2021-11-19-Oneliners.md": "d5372c06c10f028a2b1a24d90689eb22",
"assets/assets/posts/2021-11-28-'Quotes-%252328'.md": "0f1ce6f996d92889dec0681d45399838",
"assets/assets/posts/2021-11-28-Quotes-%252328.md": "0f1ce6f996d92889dec0681d45399838",
"assets/assets/posts/2021-12-05-Kelly-Criterion.md": "af1d671cb7e64a8dd261b11f787a2462",
"assets/assets/posts/2021-12-06-India.md": "de36feaca4a3bac17f4e572d06197ac6",
"assets/assets/posts/2021-12-06-Internet_users.md": "03e76e0c9114cea74bc941368e5cc29e",
"assets/assets/posts/2021-12-12-Ideas.md": "fb59adc27d2775dce8c3f4466d53b8e1",
"assets/assets/posts/2022-01-23-Book-Notes": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2022-01-26-Flutter-App.md": "d7f5eed72470461da6c3509bd6f6491d",
"assets/assets/posts/2022-03-06-Retail-Software.md": "1ff6ec8e674390c981626c4ca0f79a2a",
"assets/assets/posts/2022-03-09-Luck.md": "6718fa758f4bbf972486c1f1973c0b00",
"assets/assets/posts/2022-03-09-Phrases.md": "375952402320271ad4a37b628a95eb02",
"assets/assets/posts/2022-03-12-Kalman-Filter.md": "1ebc9ea9258eef3464bb8e06b6e221c8",
"assets/assets/posts/2022-04-11-Book-Notes-Man-Who-Solved-the-Market.md": "92d3baa41001f394a31c183f8a73bbd2",
"assets/assets/posts/2022-05-02-Lec_1.md": "95f7f59b5516a8621de3958c2fcf743a",
"assets/assets/posts/2022-08-14-Flutter-App_v2.md": "667d14eaafd589a4d5dc4bafaef4b116",
"assets/assets/posts/2022-08-16-Book-Notes-Sociopath-Next-Door.md": "ec7d089b90b9b1a47ea49727bd1c3674",
"assets/assets/posts/2022-09-24-Book-Notes-Almanack-of-Naval.md": "f3f27453955ef799191d2b395dd863fe",
"assets/assets/posts/2022-09-24-Flutter-App_v3.md": "20f81a40d5b7959551c0fba41d84e451",
"assets/assets/posts/2022-10-22-Python-Ms-Teams.md": "0a129e48d7102a22d1b606c7379fcc82",
"assets/assets/posts/2022-10-28-'221028'.md": "e5d218185e99ea40ef113d49224ed8e9",
"assets/assets/posts/2022-10-31-Book-Notes-Loves-Executioner.md": "9703f1016bd9e66342f46e7471276254",
"assets/assets/posts/2022-11-27-2018-03-11-Baniya-Mindset-Baniya-Management.md": "bcd909d1eb1e87ecbaa9f2ebd350bf85",
"assets/assets/posts/2022-11-27-Orangebook_.md": "901f964ede1535d824cce4806d9fed71",
"assets/assets/posts/2022-11-27-Quotes-29-Paul-graham,-goodreads-humor.md": "b43189b98225b44c23b6a83347c87a17",
"assets/assets/posts/2022-12-04-Book-Notes-How-to-Have-Confidence-and-Power-in-Dealing-with-People.md": "0c18bfdfcbf417d1c166ffee3cc22d5d",
"assets/assets/posts/2022-12-04-Book-Notes-How-to-Solve-It.md": "01b771c717cf3fca26454233c0e7c42e",
"assets/assets/posts/2022-12-20-Book-Notes-Homor-Seriously.md": "6a54a46331053f5af2d13576c48c1aa1",
"assets/assets/posts/2023-06-05-book-notes-kevin-horsley-unlimited-memory%2520-%2520Copy.md": "dd789ba8bff0c05fe0ed91cea6210518",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f40917a001a0772ca70e964daafbcf21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/shaders/ink_sparkle.frag": "0ff5c2d72578756a2d288596d5a621dc",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d59a85fee30ecc2c778523c995ad8b1f",
"/": "d59a85fee30ecc2c778523c995ad8b1f",
"main.dart.js": "cd6e2f630d3eb7054a7e92af6f257dfc",
"manifest.json": "71e0154c18320c9ca4cbf26c3e30935d",
"version.json": "322dfa94430cc69aa45ce83495f46466"
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
