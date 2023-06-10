import 'dart:async';
import 'dart:io';
import 'package:path_provider/path_provider.dart';
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  int randomGen(min, max) {
    var random = Random();
    var x = random.nextDouble() * (max - min) + min;
    return x.floor();
  }

  String _get_question(int idx) {
    int a = randomGen(10, 99);
    int b = randomGen(10, 99);
    int prod = a * b;
    double divs = a / b;

    if (idx <= 4) {
      return a.toString() + ' x ' + b.toString() + '\t\t\t ' + prod.toString();
    }

    if ((idx > 4) & (idx < 10)) {
      return a.toString() + ' / ' + b.toString() + '\t\t\t ' + divs.toString();
    }

    var d = [
      "To be good, be self-disciplined. To be excellent, love what you do. To be the best, be obsessed. stress/tension manage, test of your endurance- lose friends| relations| no food, no trying go all the way; Pain is your motivation.",
      "Kobe- If you have a hamstring injury, and there's a fire in your house while your family is upstairs, you'll forget about your injury and just run off to rescue them. When something is important you do whatever it takes. Importance ~ Obsession/Love",
      "Special Forces: Your Choice (let's say you're greedy and love to eat sweets in front of you, its now your choice whether to eat in balance proportion or eat excessively and become a bum), SF is a state of mind- leave us in jungle with no clothes we'll come back, surrounded us we'll hit them and make it back, Fuckin put a bullet into his head, Let go- hang on a thread- on the edge, calm in chaos, train to live under pressure-probation for life, constant choice and pressure under which we work, Nothing is impossible, nothing, nothing, nothing, machine gun firing ambush-hiding in the nala between mountains- whole column- the man who stands now and returns fire and gives shit back is the natural leader-bhoot bana diya saalo ka-you have to take it no one gonna give you",
      "3 levels of consciousness: follower, leader and, an explorer",
      "i just thought at that point of time that the man who stands now and returns fire he's the leader",
      "Special forces- lead uncomfortable life, be comfortable with uncomfortable circumstances",
      "certain kind of people who are at that consciousness level where they understand that the choice is theirs those are the kind of people we look for",
      "we want the guys who can make the ultimate choice because they made it and they can stick by it even if you know yamaraja comes and stands in front of you'll tell a fucking put a bullet in you man get the fuck out of my way",
      "what is there beyond when you give up when you when you just let it all go and you're hanging by that thread of choice because it's a choice you made so you're hanging by the thread of choice constantly there constantly there and when you when that choice is so strong and you remain there that's what we are looking for self uh an ability to make a choice for yourself and stick by it so that's what filters out in combat you know that's what we want in combat ",
      "Belief - will power- commitment",
      "5 second rule; you move your physiology changes and your mind follows",
      "compounding",
      "Practice time(Pt) > opponent Pt",
      "overconfidence-lack of practice",
      "5 second insane courage",
      "learn by doing( write not read)",
      "testing regularly due to ego/ignorance",
      "habit- consistency",
      "lattice framework",
      "nudge-marginal",
      "proactive-smart",
      "no limits/rules",
      "Awareness & Visualization- Vision- visualise success on loop everytime (everything in b/w relentnessness, practice, work hard, smart work), cut distractions. Choose uncomfortable situations.",
      "important/urgent",
      "Pichai- frog restaurant, reaction",
      "sense of humor- overactive mind (witty/funny), entertain yourself (in mind or physically) and let it come out, childlike innocence; misinterpret, frame switch",
      "Persistence(10,000 hours) > Genius or talent",
      "Bets basis edge (high wager with high edge), positive expected value",
      "Elon Musk",
      "Tony Stark- proactive, quick-thinker, fast talk, witty, smart solutions",
      "Matt Damon: Martian",
      "Steve jobs- details; Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary",
      "(Michael Fasbender- no shit given, people dislike him, insanely true/aware/honest to himself and follows his own heart/mind/intuition",
      "Ranbir Kapoor -Rockstar/YJHD;",
      "Aman - Rohit- Kal ho naa ho",
      "Shahrukh Khan: KHNH, AIB(Spontaeneous), DDLJ, interviews-TED",
      "Hrithik Roshan (Arjun) ZNMD, Lakshay",
      "Daniel Craig: Bond",
      "Tom Cruise: Mission Impossible",
      "Sidharth Malhotra: Student of the year, Shershaah-Yeh dil maange more- Teri maa ki",
      "Richard Gere: Lewis",
      "A Team",
      "Professor, Berlin, Tokyo",
      "Rocky balboa- world ain't no sunshine; not about how hard you hit its about how hard you can get hit and keep moving forward",
      "Dangal- haryanvi- tough minded, daring, no limits; Not soft-delayed decision maker-not goal obsessed but tough/hard/Killer Instinct unlike Kendall Roy(Succession)",
      "Max Verstappen",
      "Michael Jordan- Why should i think about missing shot until i haven't taken one; used to live in present; extreme competitiveness/hard-work/focussed; used to take losses personal; Pain is my motivation",
      "Remembering what you’ve been through and how that has strengthened your mindset can lift you out of a negative brain loop and help you bypass those weak, one-second impulses to give in so you can power through obstacles. ",
      "Someone who has an edge: I look for the type of guy in London who gets up at seven o'clock on Sunday morning when his kids are still in bed, and logs onto a poker site so that he can pick off the U.S. drunks coming home on Saturday night. I hired a guy like that. He usually clears 5 or 10 grand every Sunday morning before breakfast taking out the drunks playing poker because they're not very good at it, but their confidence has gone up a lot. - Michael Platt, Bluecrest",
      "Don’t partner with cynics and pessimists. Their beliefs are self-fulfilling",
      "Reading is faster than listening. Doing is faster than watching.",
      "Imagine someone comes along who demonstrably has slightly better judgment. They’re right 85 percent of the time instead of 75 percent. You will pay them 50 million, 100 million, 200 million, whatever it takes, because 10 percent better judgment steering a 100 billion ship is very valuable. ",
      "There are basically three really big decisions you make in your early life: where you live, who you’re with, and what you do.",
      "Duality and polarity: If I say I’m happy, that means I was sad at some point. Every positive thought even has a seed of a negative thought within it and vice versa, which is why a lot of greatness in life comes out of suffering. You have to view the negative before you can aspire to and appreciate the positive.",
      "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
      "I can accept failure, everyone fails at something. But I can't accept not trying.",
      "You must expect great things of yourself before you can do them.",
      "Some people want it to happen, some wish it would happen, and others make it happen.",
      "To be successful you have to be selfish, or else you never achieve. And once you get to your highest level, then you have to be unselfish. Stay reachable. Stay in touch. Don't isolate.",
      "If you quit ONCE it becomes a habit.Never quit!!!",
      "Never say never, because limits, like fears, are often just an illusion.",
      "Always turn a negative situation into a positive situation.",
      "To learn to succeed, you must first learn to fail.",
      "If you do the work you get rewarded. There are no shortcuts in life.",
      "The minute you get away from fundamentals – whether its proper technique, work ethic or mental preparation – the bottom can fall out of your game, your schoolwork, your job, whatever you’re doing.",
      "Some people want it to happen, some wish it would happen, others make it happen.",
      "Failure is acceptable. but not trying is a whole different ball park.",
      "I approach everything step by step….I had always set short-term goals. As I look back, each one of the steps or successes led to the next one. When I got cut from the varsity team as a sophomore in high school, I learned something. I knew I never wanted to feel that bad again….So I set a goal of becoming a starter on the varsity. That’s what I focused on all summer. When I worked on my game, that’s what I thought about. When it happened, I set another goal, a reasonable, manageable goal that I could realistically achieve if I worked hard enough….I guess I approached it with the end in mind. I knew exactly where I wanted to go, and I focused on getting there. As I reached those goals, they built on one another. I gained a little confidence every time I came through. …If [your goal is to become a doctor]…and you’re getting Cs in biology then the first thing you have to do is get Bs in biology and then As. You have to perfect the first step and then move on to chemistry or physics. Take those small steps. Otherwise you’re opening yourself up to all kinds of frustration. Where would your confidence come from if the only measure of success was becoming a doctor? If you tried as hard as you could and didn’t become a doctor, would that mean your whole life was a failure? Of course not. All those steps are like pieces of a puzzle. They all come together to form a picture….Not everyone is going to be the greatest….But you can still be considered a success….Step by step, I cant see any other way of accomplishing anything."
    ];
    if (idx >= 10) {
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
              return Center(
                  child: SingleChildScrollView(
                      scrollDirection: Axis.vertical,
                      child: Text(_get_question(index),
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 25))));
            },
            itemCount: 20),
      ),
    );
  }
}
