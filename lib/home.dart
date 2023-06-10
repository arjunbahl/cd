import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_markdown/flutter_markdown.dart';

import 'fileu.dart';

// class HomePage extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       body: FutureBuilder(
//           future: fetchab(),
//           builder: (BuildContext context, AsyncSnapshot<String> snapshot) {
//             if (snapshot.hasData) {
//               return Markdown(data: snapshot.data);
//             }
//             return Center(
//               child: CircularProgressIndicator(),
//             );
//           }),
//     );
//   }
// }
