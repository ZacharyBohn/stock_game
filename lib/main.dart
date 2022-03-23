// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'dart:async';
import 'dart:math';
import 'package:flutter/material.dart';
import 'package:hive/hive.dart';
import 'package:intl/intl.dart';
import 'package:stock_game/database.dart';

void main() async {
  await Database.init();
  runApp(const Root());
  return;
}

class Root extends StatelessWidget {
  const Root({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: App(),
    );
  }
}

class App extends StatefulWidget {
  const App({Key? key}) : super(key: key);

  @override
  _AppState createState() => _AppState();
}

class _AppState extends State<App> {
  int epoch = DateTime.now().millisecondsSinceEpoch ~/ 1000;
  final int interval = 15 * 60; //15 min
  int funds = 40;
  // how many crystals to buy / sell at a time
  int amount = 1;
  final List<CrystalType> crystalTypes = [
    CrystalType(
      name: 'Crimson Crystal',
      price: 0,
      predictability: 4.5,
      max: 35,
      mid: 6,
      min: 1,
    ),
    CrystalType(
      name: 'Aether Crystal',
      price: 0,
      predictability: 4,
      max: 50,
      mid: 14,
      min: 1,
    ),
    CrystalType(
      name: 'Azure Crystal',
      price: 0,
      predictability: 2.6,
      max: 60,
      mid: 11,
      min: 4,
    ),
    CrystalType(
      name: 'Demon Crystal',
      price: 0,
      predictability: 3,
      max: 95,
      mid: 30,
      min: 4,
    ),
  ];
  List<CrystalType> activeCrystalTypes = [];
  // crystal: amount owned
  Map<CrystalType, int> wallet = {};

  int? poop = null;
  int get day => poop ?? (epoch ~/ interval) - 1831085;
  int get secondsLeft => 60 - ((epoch % interval) % 60);
  int get minsLeft => (epoch % interval) ~/ 60;

  var secondsFormatter = NumberFormat('00');

  @override
  initState() {
    for (var crystal in crystalTypes.sublist(0, 4)) {
      activeCrystalTypes.add(crystal);
      wallet[crystal] = 0;
    }
    Timer.periodic(Duration(seconds: 1), (timer) {
      var prevDay = day;
      epoch = DateTime.now().millisecondsSinceEpoch ~/ 1000;
      if (day != prevDay) {
        cyclePrices();
      }
      setState(() {
        epoch = epoch;
      });
    });
    var tempFunds = Database.get('funds');
    if (tempFunds != null) funds = tempFunds;
    for (var crystal in crystalTypes) {
      var tempFunds = Database.get('wallet.${crystal.name}');
      if (tempFunds != null) wallet[crystal] = tempFunds;
    }
    cyclePrices();
    super.initState();
    return;
  }

  void cyclePrices() {
    for (var crystal in activeCrystalTypes) {
      crystal.randomizePrice(day);
    }
    setState(() {
      activeCrystalTypes = activeCrystalTypes;
    });
    return;
  }

  int getTotalCrystals() {
    int total = 0;
    for (var crystal in activeCrystalTypes) {
      total += wallet[crystal]!;
    }
    return total;
  }

  String formatInt(int value) {
    NumberFormat formatter = NumberFormat('###,###,###,###,###');
    return formatter.format(value);
  }

  void buyCrystals(CrystalType crystal) {
    int? newFunds = crystal.tryToBuy(funds: funds, amount: amount);
    if (newFunds != null) {
      setState(() {
        funds = newFunds;
        wallet[crystal] = wallet[crystal]! + amount;
      });
    }
    saveToDb();
    return;
  }

  void sellCrystals(CrystalType crystal) {
    if (wallet[crystal]! >= amount) {
      setState(() {
        funds += crystal.price * amount;
        wallet[crystal] = wallet[crystal]! - amount;
      });
    }
    saveToDb();
    return;
  }

  void saveToDb() {
    Database.insert(funds, 'funds');
    Database.insert(wallet, 'wallet');
    for (var crystal in crystalTypes) {
      Database.insert(wallet[crystal], 'wallet.${crystal.name}');
    }
    return;
  }

  @override
  Widget build(BuildContext context) {
    // Size size = MediaQuery.of(context).size;
    return SafeArea(
      child: Scaffold(
        backgroundColor: Colors.black54,
        body: Padding(
          padding: const EdgeInsets.all(14.0),
          child: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              SizedBox(height: 8),
              Row(
                mainAxisSize: MainAxisSize.max,
                children: [
                  AppText('Funds: ${formatInt(funds)} g'),
                  Spacer(),
                  AppText('Total Crystals Owned: ${getTotalCrystals()}'),
                ],
              ),
              SizedBox(height: 8),
              AppDivider(),
              SizedBox(height: 8),
              for (var crystal in activeCrystalTypes) ...[
                SizedBox(height: 8),
                Align(
                  alignment: Alignment.centerLeft,
                  child: AppText(
                    '${crystal.name} (${wallet[crystal]})',
                    header: true,
                  ),
                ),
                SizedBox(height: 8),
                Row(
                  children: [
                    AppText('Price: ${formatInt(crystal.price)} g'),
                    SizedBox(width: 14),
                    crystal.goingUp(day) == true
                        ? Icon(
                            Icons.arrow_upward_rounded,
                            color: Colors.green,
                          )
                        : crystal.goingUp(day) == false
                            ? Icon(
                                Icons.arrow_downward_rounded,
                                color: Colors.red,
                              )
                            : Container(),
                    Spacer(),
                    AppButton(
                        child: AppText('Buy'),
                        onPressed: () {
                          buyCrystals(crystal);
                          return;
                        }),
                    SizedBox(width: 14),
                    AppButton(
                        child: AppText('Sell'),
                        onPressed: () {
                          sellCrystals(crystal);
                          return;
                        }),
                  ],
                ),
                SizedBox(height: 14),
              ],
              SizedBox(height: 8),
              AppDivider(),
              SizedBox(height: 8),
              Row(
                children: [
                  AppText('Crystals per sell: ${formatInt(amount)}'),
                  Spacer(),
                  AppButton(
                      child: AppText('-'),
                      onPressed: () {
                        if (amount == 1) return;
                        setState(() {
                          amount ~/= 10;
                        });
                      }),
                  SizedBox(
                    width: 8,
                  ),
                  AppButton(
                      child: AppText('+'),
                      onPressed: () {
                        if (amount > pow(10, 14)) return;
                        setState(() {
                          amount *= 10;
                        });
                      }),
                ],
              ),
              // mercenary stuff here
              // AppText('Mercenaries', header: true),
              // SizedBox(height: 8),
              // Row(
              //   children: [
              //     AppText('Shadowblade (lvl 1)'),
              //     Spacer(),
              //     AppText('1g / day'),
              //     Spacer(),
              //     AppButton(child: AppText(''), onPressed: () {}),
              //   ],
              // ),
              SizedBox(height: 8),
              AppDivider(),
              SizedBox(height: 8),
              Spacer(),
              Row(
                children: [
                  AppText('Day ${formatInt(day)}'),
                  Spacer(),
                  AppText(
                      'Next day in $minsLeft:${secondsFormatter.format(secondsLeft)}'),
                  if (poop != null)
                    AppButton(
                      child: AppText('Cycle Day'),
                      onPressed: () {
                        setState(() => poop = poop! + 1);
                        cyclePrices();
                        return;
                      },
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

@HiveType(typeId: 0)
class CrystalType {
  CrystalType({
    required this.name,
    required this.price,
    required this.predictability,
    required this.max,
    required this.mid,
    required this.min,
  });
  @HiveField(0)
  String name;
  @HiveField(1)
  int price;
  // lower = more predictable
  // 1 - 10
  // @HiveField(0)
  double predictability;
  @HiveField(2)
  int max;
  @HiveField(3)
  int mid;
  @HiveField(4)
  int min;
  @HiveField(5)
  bool? goingUp(int day) {
    int prevPrice = _getPseudoPrice(day - 1);
    int price = _getPseudoPrice(day);
    if (price > prevPrice) return true;
    if (price < prevPrice) return false;
    return null;
  }

  int? tryToBuy({required int funds, required int amount}) {
    int totalPrice = price * amount;
    if (funds < totalPrice) return null;
    return funds - totalPrice;
  }

  int _getPseudoPrice(int x) {
    double y = x / predictability;
    double cursor0 = _pseudo(y);
    double cursor1 = _pseudo(y + 1);
    double cursor2 = _pseudo(y + 2);
    return ((cursor0 * max) + (cursor1 * mid) + (cursor2 * min)).toInt();
  }

  double _pseudo(double x) {
    return (sin(x * 2) + sin(x * 3) + 2) / 4;
  }

  void randomizePrice(int day) {
    price = _getPseudoPrice(day);
    return;
  }
}

class AppButton extends StatelessWidget {
  final Widget child;
  final void Function() onPressed;
  const AppButton({
    required this.child,
    required this.onPressed,
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: onPressed,
      child: child,
      style: ElevatedButton.styleFrom(
        primary: Colors.teal,
        shape: BeveledRectangleBorder(
          borderRadius: BorderRadius.circular(8),
        ),
      ),
    );
  }
}

class AppDivider extends StatelessWidget {
  const AppDivider({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Divider(
          height: 1.5,
          color: Colors.white60,
        ),
        SizedBox(height: 8),
        Divider(
          height: 1.5,
          color: Colors.white60,
        ),
      ],
    );
  }
}

class AppText extends StatelessWidget {
  final String label;
  final bool header;
  const AppText(this.label, {Key? key, this.header = false}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Text(
      label,
      style: TextStyle(
        color: Colors.white,
        fontSize: header ? 21 : 14,
      ),
    );
  }
}
