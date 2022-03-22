// ignore_for_file: prefer_const_constructors, prefer_const_literals_to_create_immutables

import 'dart:math';
import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
// import 'package:stock_game/database.dart';

void main() async {
  // await Database.init();
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
  int day = 1;
  int funds = 20;
  // how many crystals to buy / sell at a time
  int amount = 1;
  final List<CrystalType> crystalTypes = [
    CrystalType(
      name: 'Crimson Crystal',
      price: 10,
      softMin: 16,
      softMax: 80,
      spread: 15,
    ),
    CrystalType(
      name: 'Aether Crystal',
      price: 11,
      softMin: 18,
      softMax: 170,
      spread: 3,
    ),
    CrystalType(
      name: 'Azure Crystal',
      price: 12,
      softMin: 20,
      softMax: 290,
      spread: 8,
    ),
    CrystalType(
      name: 'Demon Crystal',
      price: 50,
      softMin: 40,
      softMax: 900,
      spread: 25,
    ),
  ];
  List<CrystalType> activeCrystalTypes = [];
  // crystal: amount owned
  Map<CrystalType, int> wallet = {};

  @override
  initState() {
    for (var crystal in crystalTypes.sublist(0, 4)) {
      activeCrystalTypes.add(crystal);
      wallet[crystal] = 0;
    }
    super.initState();
    return;
  }

  void nextDay() {
    for (var crystal in activeCrystalTypes) {
      crystal.randomizePrice(Random().nextInt(2) - 1);
    }
    setState(() {
      activeCrystalTypes = activeCrystalTypes;
      day += 1;
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
    NumberFormat formatter = NumberFormat.compact();
    return formatter.format(value);
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
                    crystal.goingUp == true
                        ? Icon(
                            Icons.arrow_upward_rounded,
                            color: Colors.green,
                          )
                        : crystal.goingUp == false
                            ? Icon(
                                Icons.arrow_downward_rounded,
                                color: Colors.red,
                              )
                            : Container(),
                    Spacer(),
                    AppButton(
                        child: AppText('Buy'),
                        onPressed: () {
                          int? newFunds =
                              crystal.tryToBuy(funds: funds, amount: amount);
                          if (newFunds != null) {
                            setState(() {
                              funds = newFunds;
                              wallet[crystal] = wallet[crystal]! + amount;
                            });
                          }
                          return;
                        }),
                    SizedBox(width: 14),
                    AppButton(
                        child: AppText('Sell'),
                        onPressed: () {
                          if (wallet[crystal]! >= amount) {
                            setState(() {
                              funds += crystal.price * amount;
                              wallet[crystal] = wallet[crystal]! - amount;
                            });
                          }
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
                  AppButton(
                    child: AppText('Cycle Day'),
                    onPressed: () {
                      nextDay();
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

class CrystalType {
  CrystalType({
    required this.name,
    required this.price,
    required this.softMin,
    required this.softMax,
    required this.spread,
  }) : direction = Random().nextInt(4) - 2;
  String name;
  int direction;
  int price;
  int softMin;
  int softMax;
  int spread;
  bool? goingUp;

  int? tryToBuy({required int funds, required int amount}) {
    int totalPrice = price * amount;
    if (funds < totalPrice) return null;
    return funds - totalPrice;
  }

  void randomizePrice(int adjustment) {
    int previous = price;
    if (Random().nextInt(3) == 0) {
      direction += (Random().nextInt(4) - 2);
      if (direction < -4) direction = -4;
      if (direction > 4) direction = 4;
    }
    int hardMin = 1;
    int localSpread = Random().nextInt(spread) + 4;
    price = price + Random().nextInt(localSpread) - (localSpread ~/ 2);
    price += direction;
    if (price < hardMin) price = 1;
    if (price < softMin) direction += 1;
    if (price > softMax) price -= 2;
    goingUp = null;
    if (price > previous) goingUp = true;
    if (price < previous) goingUp = false;
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
