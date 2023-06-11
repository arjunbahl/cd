'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "095b76d26f14ffb4fd18799c0f0e34d6",
"assets/assets/posts/2017-05-23-introspection-1.txt": "d23c44537229f16129651e1dfbef3b66",
"assets/assets/posts/2017-06-10-lessons-learnt-during-ipcc-nov16.txt": "16a4dca04388b43020874c378a03dd42",
"assets/assets/posts/2017-08-18-digispark-notes.txt": "f625a28b1541f4f0c0a441580f33dfd1",
"assets/assets/posts/2017-09-02-mailinator-com-websocket-api.txt": "6a051dd9d0c9ae532e3185c9da13793d",
"assets/assets/posts/2017-09-05-get-serious-about-things-you-do.txt": "7c0ef38bf9d56eecd2fdb92298fe1637",
"assets/assets/posts/2017-09-08-creating-an-cost-effecient-and-optimized-system-of-green-commuting.txt": "265d980513d7571043df28a024f3750f",
"assets/assets/posts/2017-09-30-moving-one-up-on-family-ladder.txt": "4a32a351a7a2777967604382971b2b78",
"assets/assets/posts/2017-10-01-effective-learning.txt": "ee0ce4ac3522d01d31f20363c7c96544",
"assets/assets/posts/2017-10-03-letter-to-aastha.txt": "32af149c31106403910c47b08181c8b0",
"assets/assets/posts/2017-10-14-harivansh-rai-bachchan-poems.txt": "bad235329da026d8e802468afac1c252",
"assets/assets/posts/2017-10-28-why-taking-hard-decisions-and-forcing-yourself-into-uncomfortable-situations-is-highly-beneficial.txt": "7065c3409705e34790efd4b29417ec2b",
"assets/assets/posts/2017-10-30-using-tension-to-get-work-done-effectively-and-efficiently.txt": "bc6961fd012f9c0348b5965fd91aa7a0",
"assets/assets/posts/2017-10-30-why-one-should-constantly-revisit-his-goals.txt": "05b0ced2eafed0425842e11058798db0",
"assets/assets/posts/2017-12-04-what-ritesh-aggarwal-learnt-at-thiel-fellowship.txt": "ccc2141ca77b05143a6b90ff03fbebd7",
"assets/assets/posts/2017-12-13-lessons-delhi-university-exams-sem-5thdec17.txt": "40f8ab964866e93e1225113843e31bc9",
"assets/assets/posts/2017-12-20-lessons-rakesh-jhunjhunwala.txt": "e84cdd2d262fd681ef03880baae53691",
"assets/assets/posts/2017-12-22-introspection.txt": "ec16256eb6db44dcb37399ddc1ee71d3",
"assets/assets/posts/2017-12-26-improve-handwriting.txt": "727289a0ea3606e23f74df32a70a11ae",
"assets/assets/posts/2017-12-29-lessons-parveen-sharma.txt": "213839f77626f98bb1277a63300f6d17",
"assets/assets/posts/2018-01-05-bitbucket-configurationnew-machine.txt": "e571a918f62643b9831190c9cf453c61",
"assets/assets/posts/2018-01-21-business-lessons-selling-and-variety.txt": "0a519723e326d942136223cffca9da46",
"assets/assets/posts/2018-01-28-lessons-ipcc-nov17.txt": "92cdec3b219532208ea78c1161165c88",
"assets/assets/posts/2018-02-15-rocky-balboa-speech.txt": "684a35c87f4cf0876adad76b37b9f361",
"assets/assets/posts/2018-02-25-introspection-3.txt": "d12d1034935a764cc38c7be5b5a73848",
"assets/assets/posts/2018-03-01-beat-procrastination-inaction-to-achieve-goals-seeming-to-difficult-at-first.txt": "5ab9b179ea8057e37c3cbc01d24e0067",
"assets/assets/posts/2018-03-06-book-notes-i-do-what-i-do.txt": "9c5159b22ea5c8f3ce234d620f69ae83",
"assets/assets/posts/2018-03-06-book-notes-ignorance-firestein-stuart.txt": "9f2fdf48684bdb4461a5321508dd3351",
"assets/assets/posts/2018-03-06-book-notes-rich-dad-poor-dad-kiyosaki-robert.txt": "abcf48cbaf5bacd94ae481cba940e7b1",
"assets/assets/posts/2018-03-06-book-notes-the-48-laws-of-power-robert-greene.txt": "11b882c80927efa169af21adecdc0b26",
"assets/assets/posts/2018-03-06-book-notes-the-5-second-rule.txt": "b51cace7448d8f0ab59cabf2bc898942",
"assets/assets/posts/2018-03-06-book-notes-the-physics-of-wall-street-james-owen-weatherall.txt": "d6fbe25077b6af064dedcb3a808da9d8",
"assets/assets/posts/2018-03-06-book-notes-you-can-sell-shiv-khera.txt": "845e7193f3b09fbddc7f6d1a65001846",
"assets/assets/posts/2018-03-22-lessons-parveen-sharma-2.txt": "88c7a0b66a06e65130870431badb1f18",
"assets/assets/posts/2018-04-12-resync-sleep-schedule-change-sleep-cycle.txt": "49c457bdca921a5053553f34b09be683",
"assets/assets/posts/2018-04-13-jim-simons.txt": "4dd1f1f079a722e570bc4e188d370981",
"assets/assets/posts/2018-04-14-belief-and-will-power.txt": "dcc02e8543c041aec114d78cb9349af2",
"assets/assets/posts/2018-04-29-when-lost-come-here.txt": "d3e365764f9f7f3f5dca4f33b5d7678b",
"assets/assets/posts/2018-05-02-1215.txt": "2ed7240d27075616d508132f3ecb63a0",
"assets/assets/posts/2018-05-24-lessons-college-3rd-year-last-sem-exams.txt": "c46a8e28709597e6323594e99e4340a1",
"assets/assets/posts/2018-06-10-failures-1.txt": "b65f09ce8b4731597f6817eb89290aa5",
"assets/assets/posts/2018-06-10-ideas-5.txt": "5830f343b220c08c91b2c8d0a0838cbe",
"assets/assets/posts/2018-07-07-ideas-6.txt": "88cd23fb9ef683e8a5bb40894f840587",
"assets/assets/posts/2018-07-07-the-third-door-alex-banayan.txt": "b613757ec2b7baeb9f4b7f7f0db2a0a9",
"assets/assets/posts/2018-07-10-bhondu-vs-sophisticated.txt": "e05d40f20d1fa3627f206e76ebf4012d",
"assets/assets/posts/2018-08-18-steve-jobs-details.txt": "4ea1ae14c1a1fc309e47d3774d66c791",
"assets/assets/posts/2018-08-29-hardwork-smartwork.txt": "a2590c9fdb8df51a6369590f3dd9c114",
"assets/assets/posts/2018-09-02-self-control-as-a-measure-of-success-better-at-prediction-than-iq-social-class-etc.txt": "078cce28b5cb0f138dbc5293f5f4b6ac",
"assets/assets/posts/2018-10-05-parveen-sharma-srcc-confluence.txt": "e982ba4aeb30231aada8510a0c5a1b36",
"assets/assets/posts/2018-10-18-conversation-with-aastha.txt": "29622215e3bc0cb8648bfdb34b24a7d1",
"assets/assets/posts/2018-10-19-push-the-limits-fuck-the-estimations.txt": "d4d2c331c8adb1b836e1573064d5080f",
"assets/assets/posts/2019-02-17-re-emerge-creativity-hbr-notes.txt": "8d2570050f840fb9bbde156f74e5ee3a",
"assets/assets/posts/2019-02-26-rashim-tandon-deloitte-partner-coporate-career-advice.txt": "bd2e3a2f39d9371dee4108e9a1349c0f",
"assets/assets/posts/2019-07-10-rajiv-bajaj-yoga-homeopathy-philosophy.txt": "452cdfff79b8d8ed22d229ce86a0ee45",
"assets/assets/posts/2019-08-11-life-experiences-reversion.txt": "c8bc045fa3bd1f4da89d4230afb9c95b",
"assets/assets/posts/2019-08-29-one-of-the-methods-to-solve-math-problems.txt": "a44c3d7786a373a55a82b74a99f80f74",
"assets/assets/posts/2019-09-14-asim-qureshi-difference-between-achievers-and-average.txt": "2ef030dc6e675352c4f3e9fdcb3f2499",
"assets/assets/posts/2020-04-26-__trashed-2.txt": "54df7aa322082dfbd07c5577984d70f6",
"assets/assets/posts/2020-12-17-book-notes-billion-dollar-loser.txt": "decfe107a27439af1583a18434087e3d",
"assets/assets/posts/2021-11-14-Demand.txt": "ca964c5bb3eab7d51eccfc5ac5fe47a5",
"assets/assets/posts/2021-11-14-Nykaa.txt": "b73d7aef508420251ebd277e4fcf8d0f",
"assets/assets/posts/2021-11-14-Root.txt": "a661e2735e63be7899630a681f8c3a1a",
"assets/assets/posts/2021-11-14-Supply.txt": "8b6b210d52a863b852ac88010eca7fb0",
"assets/assets/posts/2021-11-15-'Bobby-Axelrod": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Book-Notes": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Eat-the-frog-approach-enhances-oneself-and-creates-opportunities'.txt": "6fcde311380d0131b8eaf72589c0cc26",
"assets/assets/posts/2021-11-15-'For-My-Kids-%2525231'.txt": "0f8545637f648d6e4de01443fe457c68",
"assets/assets/posts/2021-11-15-'For-My-Kids-%2525232'.txt": "c530e22e89ddf4079e10623439b71909",
"assets/assets/posts/2021-11-15-'For-My-Kids-%2525233'.txt": "9d9ef1e42d95ee5db3f60a01fc7112ef",
"assets/assets/posts/2021-11-15-'For-My-Kids-%2525234'.txt": "f07332fee73146afc2e9d89d1035949a",
"assets/assets/posts/2021-11-15-'Framework-Of-Life-%2525231'.txt": "04ed67b4f5caad5f0ff9be3f277f9bcc",
"assets/assets/posts/2021-11-15-'Framework-of-Life-%2525232-(Focus,-Motivation,-Physics-Force(MA)-derivation)'.txt": "9b8245aa12d068443eb59078cf5a5b9b",
"assets/assets/posts/2021-11-15-'Humor-": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Ideas-%2525231'.txt": "fdf0eb89c9ebb4dede7262545ab6bfb9",
"assets/assets/posts/2021-11-15-'Ideas-%2525232'.txt": "738f7c8173021cd32ccefe01d31b4010",
"assets/assets/posts/2021-11-15-'Ideas-%2525233'.txt": "e28df244240aab98920c6fa80feaa79f",
"assets/assets/posts/2021-11-15-'Ideas-%2525234'.txt": "e9dc1f51678320bc03ffd626193b4359",
"assets/assets/posts/2021-11-15-'Introspection-%2525234'.txt": "12b8c5a63cabf8a6dada757dd22827ec",
"assets/assets/posts/2021-11-15-'Notes": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'One-Thing-That-Differentiates-Successful,-by-Jeff-Bezos'.txt": "10ea4dac095e64d5031ec7c39f553282",
"assets/assets/posts/2021-11-15-'Project": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-'Quotes,-Maxims-%2525235'.txt": "66d44b28d9f2afaa95ec5046d8aa7bc3",
"assets/assets/posts/2021-11-15-'Quotes-%2525238-(Primary)'.txt": "936e2c7a4464c185bcd5519bed5862e6",
"assets/assets/posts/2021-11-15-'Thinking-Ahead-For-Your-Life,-Walking-the-Road-Less-Travelled'.txt": "7fe50c0d2e2ccea2338a8688f44c6727",
"assets/assets/posts/2021-11-15-Adorable-And-Prodigal.txt": "d12e73b4ea6599b55cbebf2371b6ddd1",
"assets/assets/posts/2021-11-15-Book-Notes-Ahead-of-the-Curve-Two-Years-at-Harvard-Business-School-Philip-Delves-Broughton.txt": "426144ce1db305f34df2970c364b9810",
"assets/assets/posts/2021-11-15-booknotes-Strategic-thinking.txt": "8eea24dcc93570ef67dfd773790423dc",
"assets/assets/posts/2021-11-15-Eclerx.txt": "ec5f34af86c460153a086fe3705813b0",
"assets/assets/posts/2021-11-15-Ecomm-Project.txt": "1df2693a8066fe1c5824e53d6217ddac",
"assets/assets/posts/2021-11-15-FII's-Selling.txt": "0b4547783e4c379bdc1078eba0ac8b9b",
"assets/assets/posts/2021-11-15-First-Ever-Group-Discussion.txt": "369a493a29a09cf1b51c3d267d27fbb3",
"assets/assets/posts/2021-11-15-Hack-To-Push-Yourself-Further.txt": "ebeaf0ec75bebffe9dda14be2e231795",
"assets/assets/posts/2021-11-15-How-does-an-impending-Stock-Market-Pitfall-look-like.txt": "0fc1e9117e23af4e1fe8e2b51b6762b5",
"assets/assets/posts/2021-11-15-How-I-Got-Inside-Haryana-Government's-Server.txt": "076fedb7ab7ec016da50c0e88fc2c482",
"assets/assets/posts/2021-11-15-How-to-refuse-or-disagree.txt": "48cadaa9c17f5624067b5950606370fb",
"assets/assets/posts/2021-11-15-Ideas-11-03-2017.txt": "053eeb6bcb2b62ccca7433c4e7d4f037",
"assets/assets/posts/2021-11-15-Important-Points-Wordpress-Installation.txt": "6a42dc5b80ddd6ebb7c202e3a626aa9c",
"assets/assets/posts/2021-11-15-Inconsistencies-Within-Indian-Education.txt": "29b6f52077dbb6fac6926d5b14616ac8",
"assets/assets/posts/2021-11-15-Installing-Yowsup.txt": "f3fb0dca71e0bcfa0f821b15aaccc175",
"assets/assets/posts/2021-11-15-Insulting-Techniques.txt": "236beaf6ba573193482d06a2e792acb3",
"assets/assets/posts/2021-11-15-Junoon-Aur-Sukoon-Aur-Pagalpan.txt": "479ea9e87cf736e74da703a8caad1905",
"assets/assets/posts/2021-11-15-K&M.txt": "6a350b8208c944a89dc2096ac0f3ae02",
"assets/assets/posts/2021-11-15-Lessons-Learnt-During-IPCE-2017.txt": "0d87329eb790d38939446a85f03e5b1c",
"assets/assets/posts/2021-11-15-Loreal.txt": "131ec6f104aa610d8977573716b105f6",
"assets/assets/posts/2021-11-15-Myglamm.txt": "6cfaf96167e772947bbb7550d30da910",
"assets/assets/posts/2021-11-15-Notes-2020-03-01-1703.txt": "3037a999253124e5fa4b893aa10e0f08",
"assets/assets/posts/2021-11-15-OP-Training-learnings.txt": "323c79a26de358353e4b7245a2985fd9",
"assets/assets/posts/2021-11-15-Park-Run": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2021-11-15-Parveen-Sharma's-Way-Of-Teaching-And-Learning.txt": "8f39b31ea0241ab880f8bb8b593537a1",
"assets/assets/posts/2021-11-15-Payment-Services--Oblivious-Or-Aware.txt": "44b3718c88ac90aec56d871a7b9340d9",
"assets/assets/posts/2021-11-15-Pigeon-Stuck-Inside-Home.txt": "fd28f658ef81dcada466cd69b8c642b6",
"assets/assets/posts/2021-11-15-Piracy-Sinless.txt": "9ff03c850dc9bac9ed16a4c5780ad693",
"assets/assets/posts/2021-11-15-Port-Forwarding.txt": "82f7fe012e4abc666c8972394f4d3753",
"assets/assets/posts/2021-11-15-Post-Demonetisation--Google-Trends.txt": "c637d699c88c084ae532ffd61fe05ac4",
"assets/assets/posts/2021-11-15-Prabhat-Jasra.txt": "2c0455249eeffed9e9182f88c4e965fb",
"assets/assets/posts/2021-11-15-Pursuit-Of-Happyness.txt": "ebb88b8a262112b160ddae762caa6588",
"assets/assets/posts/2021-11-15-Raspberry-Pi-Notes.txt": "7c35852032e0ed30814be98d31e09dd5",
"assets/assets/posts/2021-11-15-Solving-Hard-Problems-With-Simple-Ideas.txt": "bf01e1d69e44d2fc446bd77485ebf708",
"assets/assets/posts/2021-11-15-The-Aesthetics-Of-Chess.txt": "159447d5543bdf6e9f54ac920cafe71d",
"assets/assets/posts/2021-11-15-Whatsapp-Bot.txt": "8c3b5ad40c9296bf8176c3bc018411a7",
"assets/assets/posts/2021-11-15-Who-moves-the-Sensex.txt": "d386578f8a4e6dce073045eee3146dd5",
"assets/assets/posts/2021-11-15-Yowsup-Registration.txt": "9141cd7920261a69789d67d659615af3",
"assets/assets/posts/2021-11-16-Linear-Algebra.txt": "48680d3d31703e8ed318c90380c7918b",
"assets/assets/posts/2021-11-16-Math.txt": "cd2ac57663f7d136efbe990f1a84b5e7",
"assets/assets/posts/2021-11-16-Portfolio-Optimisation.txt": "c1a9de833144832787bceff0996be198",
"assets/assets/posts/2021-11-19-Oneliners.txt": "d5372c06c10f028a2b1a24d90689eb22",
"assets/assets/posts/2021-11-28-'Quotes-%25252328'.txt": "0f1ce6f996d92889dec0681d45399838",
"assets/assets/posts/2021-11-28-Quotes-%25252328.txt": "0f1ce6f996d92889dec0681d45399838",
"assets/assets/posts/2021-12-05-Kelly-Criterion.txt": "af1d671cb7e64a8dd261b11f787a2462",
"assets/assets/posts/2021-12-06-India.txt": "de36feaca4a3bac17f4e572d06197ac6",
"assets/assets/posts/2021-12-06-Internet_users.txt": "03e76e0c9114cea74bc941368e5cc29e",
"assets/assets/posts/2021-12-12-Ideas.txt": "fb59adc27d2775dce8c3f4466d53b8e1",
"assets/assets/posts/2022-01-23-Book-Notes": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/posts/2022-01-26-Flutter-App.txt": "d7f5eed72470461da6c3509bd6f6491d",
"assets/assets/posts/2022-03-06-Retail-Software.txt": "1ff6ec8e674390c981626c4ca0f79a2a",
"assets/assets/posts/2022-03-09-Luck.txt": "6718fa758f4bbf972486c1f1973c0b00",
"assets/assets/posts/2022-03-09-Phrases.txt": "375952402320271ad4a37b628a95eb02",
"assets/assets/posts/2022-03-12-Kalman-Filter.txt": "1ebc9ea9258eef3464bb8e06b6e221c8",
"assets/assets/posts/2022-04-11-Book-Notes-Man-Who-Solved-the-Market.txt": "92d3baa41001f394a31c183f8a73bbd2",
"assets/assets/posts/2022-05-02-Lec_1.txt": "95f7f59b5516a8621de3958c2fcf743a",
"assets/assets/posts/2022-08-14-Flutter-App_v2.txt": "667d14eaafd589a4d5dc4bafaef4b116",
"assets/assets/posts/2022-08-16-Book-Notes-Sociopath-Next-Door.txt": "ec7d089b90b9b1a47ea49727bd1c3674",
"assets/assets/posts/2022-09-24-Book-Notes-Almanack-of-Naval.txt": "f3f27453955ef799191d2b395dd863fe",
"assets/assets/posts/2022-09-24-Flutter-App_v3.txt": "20f81a40d5b7959551c0fba41d84e451",
"assets/assets/posts/2022-10-22-Python-Ms-Teams.txt": "0a129e48d7102a22d1b606c7379fcc82",
"assets/assets/posts/2022-10-28-'221028'.txt": "e5d218185e99ea40ef113d49224ed8e9",
"assets/assets/posts/2022-10-31-Book-Notes-Loves-Executioner.txt": "9703f1016bd9e66342f46e7471276254",
"assets/assets/posts/2022-11-27-2018-03-11-Baniya-Mindset-Baniya-Management.txt": "bcd909d1eb1e87ecbaa9f2ebd350bf85",
"assets/assets/posts/2022-11-27-Orangebook_.txt": "901f964ede1535d824cce4806d9fed71",
"assets/assets/posts/2022-11-27-Quotes-29-Paul-graham,-goodreads-humor.txt": "b43189b98225b44c23b6a83347c87a17",
"assets/assets/posts/2022-12-04-Book-Notes-How-to-Have-Confidence-and-Power-in-Dealing-with-People.txt": "0c18bfdfcbf417d1c166ffee3cc22d5d",
"assets/assets/posts/2022-12-04-Book-Notes-How-to-Solve-It.txt": "01b771c717cf3fca26454233c0e7c42e",
"assets/assets/posts/2022-12-20-Book-Notes-Homor-Seriously.txt": "6a54a46331053f5af2d13576c48c1aa1",
"assets/assets/posts/2023-06-05-book-notes-kevin-horsley-unlimited-memory%252520-%252520Copy.txt": "dd789ba8bff0c05fe0ed91cea6210518",
"assets/assets/posts/posts.txt": "4616a29f30f1b9f4c11dd96bd4de6f3a",
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
"index.html": "8423fc480fe9d9e5faf2c432437fac91",
"/": "8423fc480fe9d9e5faf2c432437fac91",
"main.dart.js": "2860c686f25c9f932bcbef89c71566b5",
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
