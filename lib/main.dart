import 'package:flutter/material.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
import 'fileu.dart';
import 'home.dart';
import 'dart:math';
import 'dart:io';
import 'package:path_provider/path_provider.dart';
import 'package:flutter/services.dart' show rootBundle;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  // This widget is the root of your application.

  int randomGen(min, max) {
    var random = Random();
    var x = random.nextDouble() * (max - min) + min;
    return x.floor();
  }

  // ignore: missing_return
  Future<String> _get_question(int idx) async {
    int a = randomGen(10, 99);
    int b = randomGen(10, 99);
    int prod = a * b;
    double divs = a / b;
    var l = await fetchlist();
    if (idx <= 4) {
      return a.toString() + ' x ' + b.toString() + '\t\t\t ' + prod.toString();
    }

    if ((idx > 4) & (idx < 10)) {
      return a.toString() + ' / ' + b.toString() + '\t\t\t ' + divs.toString();
    }
    if (idx >= 10) {
      var d = await fetchArticle(
          'https://raw.githubusercontent.com/arjunbahl/jekyll/main/_posts/' +
              (l..shuffle()).first.toString());

      return d;
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
          scrollDirection: Axis.horizontal,
          // autoplay: true,
          itemCount: 20,
          // duration: 10000,
          itemBuilder: (BuildContext context, int index) {
            return Center(
                child: SingleChildScrollView(
                    scrollDirection: Axis.vertical,
                    child: FutureBuilder(
                        future: _get_question(index),
                        builder: (BuildContext context,
                            AsyncSnapshot<String> snapshot) {
                          if (snapshot.hasData) {
                            return Text(snapshot.data);
                          }
                          return Center(
                            child: CircularProgressIndicator(),
                          );
                        })));
          },
        ),
      ),
    );
  }
}
