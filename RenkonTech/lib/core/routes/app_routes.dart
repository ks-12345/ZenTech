import 'package:flutter/material.dart';

import '../../screens/home/home_screen.dart';

class AppRoutes {
  AppRoutes._();

  static const String home = '/';

  static final Map<String, WidgetBuilder> routes = {
    home: (context) => const HomeScreen(),
  };
}