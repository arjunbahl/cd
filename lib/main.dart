import 'dart:js';
import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  int randomGen(min, max){
    var random = Random();

    // the nextDouble() method returns a random number between 0 and 1
    var x = random.nextDouble() * (max - min) + min;

    // If you don't want to return an integer, just remove the floor() method
    return x.floor();
  }


  String _get_question(int idx){
    final random=Random();
    int a = randomGen(10,99);
    int b =randomGen(10,99);
    int prod = a*b;
    double divs = a/b;
    if(idx<=4) {
      return a.toString() + ' x ' + b.toString() + '\t\t\t ' + prod.toString();
    }
    if((idx>4) & (idx<10)){
      return a.toString() + ' / ' + b.toString() + '\t\t\t ' + divs.toString();
    }
    var d= ["To be good, be self-disciplined. To be excellent, love what you do. To be the best, be obsessed. stress/tension manage, test of your endurance- lose friends| relations| no food, no trying go all the way","Special Forces: Your Choice, leave us in jungle with no clothes we'll come back, surrounded us we'll make it back, Fuckin put a bullet into his head, Let go- hang on a thread- on the edge, calm in chaos, train to live under pressure-probation for life, constant choice and pressure under which we work, Nothing is impossible, nothing, nothing, nothing, machine gun firing ambush-hiding in the nala between mountains- whole column- the man who stands now and returns fire and gives shit back is the natural leader","Indians- Eager to please","Belief - will power- commitment","close things","5 second rule","compounding","Investment banking- doing today vs tomorrow, During my internship at Barclays Capital I was assigned to a team of 3 that took positions as big as the rest of the trading floor combined. It was the heavy weight dream team of 3 ex Goldman bankers. And me! The team’s head was Marc Cheval (might be spelled wrong, can’t seem to find him on Google). Anyway, Marc was once giving me a lift on his way back home in his flashy sports car, and said, Look, Asim, a lot of people say they will learn French, or lose weight, or they will read some book. The difference between most other people and me is that I don’t do them tomorrow, I actually do them. Today. He explained, I’m tired right now, but I don’t care. I’m going to drop you off, get home, and I will read at least a couple of chapters of [some finance book I can’t recall]. I don’t care how tired I am. I am going to get through a couple of chapters. Because I don’t do things tomorrow. I do them today.","start small - succeed- scale","Practice time(Pt) > opponent Pt","overconfidence-lack of practice","5 second insance courage","learn by doing( write not read)","testing regularly due to ego/ignorance","habit- consistency","lattice framework","nudge-marginal","proactive-smart","no limits/rules","Awareness & Visualization- Vision- visualise success on loop everytime (everything in b/w relentnessness, practice, work hard, smart work), cut distractions","Game of chess- Patience & perseverance","important/urgent","Pichai- frog restaurant, reaction","sense of humor- childlike innocence; misinterpret, frame switch","oppurtunity cost- ","Systems- triggers- CBT","Persistence(10,000 hours) > Genius or talent","Interested- stories, excuses, dreams VS committed- do whatever it takes","Little-small bets","Bets, positive expected value","What should we expect from these guys? Jamie is smart. He doesn’t have as much cash to work with since he bought Bear. Lloyd’s a superstar. Goldman’s the smartest shop on the block. And just because I used to be his boss, it doesn’t mean he’s gonna listen to me. John Mack used to run around the floor screaming, there’s blood in the water! Let’s go kill someone! He’s a fighter. Thain was my number two at Goldman. He’s selfish. He’s a pragmatist. He knows– if Lehman goes, Merrill’s next. Vikram Pandit is the new guy at Citigroup. No one knows if he’s running Citi or if Citi’s running him.","Kohli: i try but woh agr khatm hogaya In the last 10 years have you ever woken up not feeling 150% passionate cause I believe you wake up feeling 150% passionate every day when you go to play. – Everyone has off days. – Ive woken up feeling a sense of detachment from what Im doing. Thinking that I dont want to do this. But that has been because of excessive pressure thats been on me during a difficult phase. But still, Ive had the ability to still tell myself no. I’ll go out and try once morehe day you lose the will to go out and try once more then you can’t do anything and No one can convince youo chance. So what is the motivation? Motivation is just about winning. The day I lose my passion, I’ll stop playing.","If awareness shapes the outer boundary of what is possible in the life of a person, then the ability to operate effectively within such a boundary determines the probability that they will. The reason that this relates to agency is that, ultimately, your awareness is what determines your beliefs and establishes the boundaries of what you perceive to be possible. This in turn directly impacts the daily decisions you make about what to do with yourself. If you read any biography of a prominent person, there will almost undoubtedly be a mention of an event or an instance that completely changed how they approached their lives. Sometimes, it’s a brush with mortality, but other times, it’s something as simple as realizing that maybe the rules they had always assumed to be facts weren’t actually set in stone. We all have these pivots of awareness that shift our perspective about what is real and what is important and what is worth doing. We can’t intellectualize them beforehand because they require first-hand exposure through experience. They expand agency by redefining possibility.","Having established the goal of sustainable competitive advantage, the strategist’s next task is to develop and integrate a consistent set of mutually reinforcing activities. The aim is not to have the greatest marketing department in the world but, rather, the best marketing department for your company.","Once a young man asked Socrates the secret to success. Socrates asked the young man to meet him at the riverside the next morning. They met. Socrates asked the young man to walk with him into the water and he did. Suddenly Socrates ducked the kid underwater and held him there till the kid started turning blue. Then, Socrates pulled him out. The first thing the kid did was to take a deep breath. Socrates asked him, ‘Son, when you were under water what did you want the most?’ The young man said, ‘Air.’ Socrates said, ‘Son, there is no secret to success. When you want success, as badly as you wanted air when you were in the water you will have it. Nobody will be able to stop you that day.’ This is called a burning desire. This is the difference between preferences and convictions in life; preferences are negotiable, convictions are not; and under pressure, preferences always become weak whereas convictions become stronger.","Using the Rule is simple. Whenever you feel an instinct fire up to act on a goal or a commitment, or the moment you feel that yourself hesitate on doing something and you know you should do, use the Rule. Physical movement is the most important part of my Rule, too, because when you move your physiology changes and your mind follows.","boring chup rehne wale","Greed- bhookh- like during school- skating/TT/Acads/Spanish/Computing/Music/Tech","p-(q/b)","Sometimes Confidence triumphs competence","Be curious- find interesting in whatever you do and not limit to only interesting work as it may not always be the most worthwhile thing, but make worthwhile work interesting with curiosity.","Pleasure-Pain; A moment of pain is worth lifetime of glory; If you can take it you can make it; easy choices hard life, hard choices easy life; Key to torture- not pain but what pain protects","Elon Musk","Ranbir Kapoor -Rockstar/YJHD","Tony Stark- proactive, quick-thinker, fast talk, witty, smart solutions","Hrithik Roshan (Arjun) ZNMD","Aman - Rohit- Kal ho naa ho","Daniel Craig: Bond","Sidharth Malhotra: Student of the year, Shershaah-Yeh dil maange more- Teri maa ki","Hrithik Roshan: Lakshay","Tom Cruise: Mission Impossible","Al Pacino: Godfather","Richard Gere: Lewis","Shahrukh Khan: KHNH, AIB, DDLJ, interviews-TED, Yale, etc","A Team","Kane & Abel","Matt Damon: Martian","Professor, Berlin, Tokyo","Rocky balboa- world ain't no sunshine; not about how hard you hit its about how hard you can get hit and keep moving forward","Steve jobs- details; Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary; Everything around you that you call life was made up by people that were no smarter than you. And you can change it, you can influence it… Once you learn that, you'll never be the same again; Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes... the ones who see things differently - they're not fond of rules... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things... they push the human race forward, and while some may see them as the crazy ones, we see genius, because the ones who are crazy enough to think that they can change the world, are the ones who do.; If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you.; When you first start off trying to solve a problem, the first solutions you come up with are very complex, and most people stop there. But if you keep going, and live with the problem and peel more layers of the onion off, you can often times arrive at some very elegant and simple solutions.; Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking. Don't let the noise of others' opinions drown out your own inner voice. And most important, have the courage to follow your heart and intuition.; If you define the problem correctly, you almost have the solution. The most important decisions you make are not the things you do, but the things you decide not to do. ; (Michael Fasbender- no shit given, people dislike him, insanely true/aware/honest to himself and follows his own heart/mind/intuition; Reality Distortion Field ;Lisa was a failure, Mac was a failure- John wrote Ticket to ride I(Woz) wrote Apple II; Time magazine had a sculpture which was way before months in process you were never going to become Man of the year- Reality Distortion","Axe - creates oppurtunity; Monk like discipline; use fear- do everything or you might miss, use rage similarly; can't give in to feeling good, we have to win; Mad at Gordie, he didn't game it out, risk-reward ratio way off; coldhearted- no emotions, take a good last look and forget them, move the fuck on. Gordy school principal. Moves on- doesn't keep losers; always looking for win, creates oppurtunities(mettalica gig-> fake retirement-she doess what she wants-> retirement act to protect sell positions for insider trades, Donnie & Cancer treatment, sparton ives- larry arrested distressed situations, Penay, shovelling during childhood), does to feel great- only 1 life so do it all.; Short term vs longterm; Rage, grew in him- fuel; tough - bold; earlier boss he had no soul- decreased his bonus for no reason- founded Axe cap- every year that day buys him breakfast; 9/11 shorts; destroy anyone, comes his way(Taylor, Grigor, Rice-kid redemption, Eads-> Axe Hall)","Dangal- haryanvi- tough minded, daring, no limits","David Goggins- They weren’t motivated. They were driven.; I had the Rocky soundtrack on cassette and I’d listen to Going the Distance for inspiration. On long bike rides and runs, with those horns blasting in my brain, I’d imagine myself going through BUD/S, diving into cold water, and crushing Hell Week. I was wishing, I was hoping, but by the time I was down to 250, my quest to qualify for the SEALs wasn’t a daydream anymore.; The sympathetic nervous system is your fight or flight reflex. It’s bubbling just below the surface, and when you are lost, stressed out, or struggling, like I was when I was a down and out kid, that’s the part of your mind that’s driving the bus. We’ve all tasted this feeling before. Those mornings when going on a run is the last thing you want to do, but then twenty minutes into it you feel energized, that’s the work of the sympathetic nervous system. What I’ve found is that you can tap into it on-call as long as you know how to manage your own mind.; Similar to using an opponent’s energy to gain an advantage, leaning on your calloused mind in the heat of battle can shift your thinking as well. Remembering what you’ve been through and how that has strengthened your mindset can lift you out of a negative brain loop and help you bypass those weak, one-second impulses to give in so you can power through obstacles. And when you leverage a calloused mind like I did around the pool that day and keep fighting through pain, it can help you push your limits because if you accept the pain as a natural process and refuse to give in and give up, you will engage the sympathetic nervous system which shifts your hormonal flow.; I’m not suggesting you crawl up your own ass and bore your friends with all your stories about what a badass you used to be. Nobody wants to hear that shit. I’m talking about utilizing past successes to fuel you to new and bigger ones. Because in the heat of battle, when shit gets real, we need to draw inspiration to push through our own exhaustion, depression, pain, and misery. We need to spark a bunch of small fires to become the motherfucking inferno.","Factor model for real life achievement, beta like college, school, family while alpha is personal will, hardwork, smart work, skills, talent, etc"];
    if (idx>=10){
      return (d.toList()..shuffle()).first.toString();
      // return d[idx-10].toString();
    }


  }

  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'CAT Daily Prep',
      home: Scaffold(
        appBar: AppBar(
          title: Text('CAT Daily Prep'),
        ),
        body: new Swiper(
          itemBuilder: (BuildContext context, int index) {
            return Center(child: SingleChildScrollView(
            scrollDirection: Axis.vertical,
            child: Text(_get_question(index),textAlign: TextAlign.center,style: TextStyle(fontSize: 25))));
          },
          itemCount: 20
        ),
      ),
    );
  }
}
