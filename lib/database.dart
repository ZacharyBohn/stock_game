import 'package:hive/hive.dart';
import 'package:uuid/uuid.dart';

class Database {
  static Box? instance;
  static init() async {
    Hive.init('/db/');
    instance = await Hive.openBox('database');
    return;
  }

  static String insert(dynamic item, [String? uid]) {
    uid ??= const Uuid().v4();
    instance?.put(uid, item);
    instance?.flush();
    return uid;
  }

  static dynamic get(String uid) {
    return instance?.get(uid);
  }
}
