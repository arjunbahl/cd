import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:dio/dio.dart';

Future<String> fetchArticle(String url) async {
  final dio = Dio();
  // https://raw.githubusercontent.com/arjunbahl/jekyll/main/_posts/2017-05-23-introspection-1.md
  final response = await dio.get(url);
  // print(response.data);
  return response.data;
}

Future<List<String>> fetchlist() async {
  final dio = Dio();
  final response = await dio
      .get('https://raw.githubusercontent.com/arjunbahl/jekyll/main/posts.txt');
  // print(response.data);
  List<String> splitter(String text) {
    LineSplitter ls = new LineSplitter();
    List<String> _masForUsing = ls.convert(text);
    return _masForUsing;
  }

  return splitter(response.data);
}
