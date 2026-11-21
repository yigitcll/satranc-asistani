Warning: truncated output (original token count: 78389)
Total output lines: 2280

# Progression / Regression Tests

A historical record of the progression and regression test results for each Stockfish version, tracking the engine's strength, Elo milestones, and version-by-version performance.

---

All of the information below has been generated from the results of tests performed on the [Fishtest] framework.

Current Testing Criteria

* `1 Thread` 60 seconds + 0.6 seconds for 60,000 games `(2019-11-21 - current)`
* `8 Threads` 60 seconds + 0.6 seconds for 60,000 games `(2023-06-29 - current)`
* [UHO_Lichess_4852_v1.epd][book-uho4852v1] opening book `(2026-02-04 - current)`

<details>
  <summary>Previous Testing Criteria</summary><br>

* `1 Thread` 60 seconds + 0.6 seconds for 40,000 games `(2016-01-02 - 2019-11-21)`
* `1 Thread` 60 seconds + 0.5 seconds for 40,000 games `(2013-10-13 - 2016-01-02)`
* `1 Thread` 60 seconds + 0.5 seconds for 20,000 games `(2013-03-04 - 2013-10-13)`
* `8 Threads` 30 seconds + 0.3 seconds for 40,000 games `(2018-12-13 - 2023-06-29)`
* 8moves_GM.pgn opening book `(2013-04-10 - 2013-11-01)`
* varied.bin opening book `(2013-03-04 - 2013-04-07)`
* [8moves_v3.pgn][book-8mv3] opening book `(2013-11-09 - 2023-06-29)`
* [UHO_XXL_+0.90_+1.19.epd][book-uho21epd] opening book `(2022-04-17 - 2023-06-29)`
* [UHO_4060_v2.epd][book-uho4060v2] opening book `(2023-06-29 - 2023-09-10)`
* [UHO_4060_v3.epd][book-uho4060v3] opening book `(2023-09-10 - 2025-04-26)`
* [UHO_4060_v4.epd][book-uho4060v4] opening book `(2025-04-26 - 2026-02-04)`


</details>

---

## Current Development

<div align="center">

[![][graph-current]][graph-current]

| `Date` | `Version` | `1 Thread` | `8 Threads` |
|:---:|:---:|:---:|:---:|
| 2026&#8209;02&#8209;18 | [master][180226-master] vs [Stockfish 18]<br><sub>`Bench: 2396996`<br>Update NNUE architecture to SFNNv13 and net nn-5227780996d3.nnue<br>[\[differences\]][180226-dif] `35`</sub> | Elo: [3.72][180226-elo1] ±1.3<br><sub>Ptnml:&nbsp;46,&nbsp;6340,&nbsp;16586,&nbsp;6981,&nbsp;47<br>nElo: 7.80 ±2.8<br>PairsRatio: 1.10<br>[\[raw statistics\]][180226-raw1]</sub> | Elo: [6.28][180226-elo8] ±1.2<br><sub>Ptnml:&nbsp;8,&nbsp;5214,&nbsp;18476,&nbsp;6289,&nbsp;13<br>nElo: 14.32 ±2.8<br>PairsRatio: 1.21<br>[\[raw statistics\]][180226-raw8]</sub>
| 2026&#8209;04&#8209;09 | [master][090426-master] vs [Stockfish 18]<br><sub>`Bench: 2923401`<br>Don't store stand pat return value in TT<br>[\[differences\]][090426-dif] `78`</sub> | Elo: [8.64][090426-elo1] ±1.33<br><sub>Ptnml:&nbsp;38,&nbsp;5974,&nbsp;16500,&nbsp;7435,&nbsp;53<br>nElo: 18.07 ±2.78<br>PairsRatio: 1.25<br>[\[raw statistics\]][090426-raw1]</sub> | Elo: [7.77][090426-elo8] ±1.21<br><sub>Ptnml:&nbsp;7,&nbsp;5028,&nbsp;18594,&nbsp;6358,&nbsp;13<br>nElo: 17.82 ±2.78<br>PairsRatio: 1.27<br>[\[raw statistics\]][090426-raw8]</sub>
| 2026&#8209;05&#8209;04 | [master][040526-master] vs [Stockfish 18]<br><sub>`Bench: 2344696`<br>Update main network to nn-fcf986aea78a.nnue<br>[\[differences\]][040526-dif] `127`</sub> | Elo: [13.08][040526-elo1] ±1.33<br><sub>Ptnml:&nbsp;25,&nbsp;5659,&nbsp;16418,&nbsp;7829,&nbsp;69<br>nElo: 27.37 ±2.78<br>PairsRatio: 1.39<br>[\[raw statistics\]][040526-raw1]</sub> | Elo: [8.36][040526-elo8] ±1.23<br><sub>Ptnml:&nbsp;7,&nbsp;5096,&nbsp;18359,&nbsp;6522,&nbsp;16<br>nElo: 18.98 ±2.78<br>PairsRatio: 1.28<br>[\[raw statistics\]][040526-raw8]</sub>
| 2026&#8209;05&#8209;19 | [master][190526-master] vs [Stockfish 18]<br><sub>`Bench: 2259945`<br>Simplify away unused CorrHistType variants<br>[\[differences\]][190526-dif] `154`</sub> | Elo: [16.77][190526-elo1] ±1.33<br><sub>Ptnml:&nbsp;22,&nbsp;5357,&nbsp;16405,&nbsp;8137,&nbsp;79<br>nElo: 35.17 ±2.78<br>PairsRatio: 1.53<br>[\[raw statistics\]][190526-raw1]</sub> | Elo: [12.69][190526-elo8] ±1.21<br><sub>Ptnml:&nbsp;10,&nbsp;4577,&nbsp;18640,&nbsp;6759,&nbsp;14<br>nElo: 29.26 ±2.78<br>PairsRatio: 1.48<br>[\[raw statistics\]][190526-raw8]</sub>
| 2026&#8209;06&#8209;14 | [master][140626-master] vs [Stockfish 18]<br><sub>`Bench: 3493826`<br>Final fix for MultiPV mate PV corner cases<br>[\[differences\]][140626-dif] `195`</sub> | Elo: [25.09][140626-elo1] ±1.34<br><sub>Ptnml:&nbsp;24,&nbsp;4865,&nbsp;15978,&nbsp;9027,&nbsp;106<br>nElo: 52.26 ±2.78<br>PairsRatio: 1.87<br>[\[raw statistics\]][140626-raw1]</sub> | Elo: [17.38][140626-elo8] ±1.21<br><sub>Ptnml:&nbsp;0,&nbsp;4310,&nbsp;18400,&nbsp;7271,&nbsp;19<br>nElo: 39.92 ±2.78<br>PairsRatio: 1.69<br>[\[raw statistics\]][140626-raw8]</sub>
| 2026&#8209;06&#8209;27 | [master][270626-master] vs [Stockfish 18]<br><sub>`Bench: 2703604`<br>Update main network to nn-1b6a82263149.nnue<br>[\[differences\]][270626-dif] `206`</sub> | Elo: [27.54][270626-elo1] ±1.33<br><sub>Ptnml:&nbsp;28,&nbsp;4582,&nbsp;16093,&nbsp;9210,&nbsp;87<br>nElo: 57.93 ±2.78<br>PairsRatio: 2.02<br>[\[raw statistics\]][270626-raw1]</sub> | Elo: [25.22][270626-elo8] ±1.21<br><sub>Ptnml:&nbsp;6,&nbsp;3743,&nbsp;18163,&nbsp;8074,&nbsp;14<br>nElo: 58.09 ±2.78<br>PairsRatio: 2.16<br>[\[raw statistics\]][270626-raw8]</sub>
| 2026&#8209;07&#8209;03 | [master][030726-master] vs [Stockfish 18]<br><sub>`Bench: 2752030`<br>[RfC] RISC-V port and universal binary<br>[\[differences\]][030726-dif] `217`</sub> | Elo: [36.93][030726-elo1] ±1.32<br><sub>Ptnml:&nbsp;21,&nbsp;3908,&nbsp;15896,&nbsp;10046,&nbsp;129<br>nElo: 78.42 ±2.78<br>PairsRatio: 2.59<br>[\[raw statistics\]][030726-raw1]</sub> | Elo: [35.12][030726-elo8] ±1.20<br><sub>Ptnml:&nbsp;5,&nbsp;3055,&nbsp;17847,&nbsp;9076,&nbsp;17<br>nElo: 81.75 ±2.78<br>PairsRatio: 2.97<br>[\[raw statistics\]][030726-raw8]</sub>
| 2026&#8209;07&#8209;16 | [master][160726-master] vs [Stockfish 18]<br><sub>`Bench: 2792255`<br>VVLTC parameters tweak<br>[\[differences\]][160726-dif] `243`</sub> | Elo: [38.70][160726-elo1] ±1.32<br><sub>Ptnml:&nbsp;10,&nbsp;3862,&nbsp;15700,&nbsp;10319,&nbsp;109<br>nElo: 82.22 ±2.78<br>PairsRatio: 2.69<br>[\[raw statistics\]][160726-raw1]</sub> | Elo: [33.42][160726-elo8] ±1.20<br><sub>Ptnml:&nbsp;9,&nbsp;3145,&nbsp;17962,&nbsp;8852,&nbsp;32<br>nElo: 77.60 ±2.78<br>PairsRatio: 2.82<br>[\[raw statistics\]][160726-raw8]</sub>
| 2026&#8209;07&#8209;26 | [master][260726-master] vs [Stockfish 18]<br><sub>`Bench: 3184328`<br>Remove Unused Option Constructor<br>[\[differences\]][260726-dif] `257`</sub> | Elo: [43.52][260726-elo1] ±1.32<br><sub>Ptnml:&nbsp;17,&nbsp;3604,&nbsp;15382,&nbsp;10880,&nbsp;117<br>nElo: 92.45 ±2.78<br>PairsRatio: 3.04<br>[\[raw statistics\]][260726-raw1]</sub> | Elo: [39.07][260726-elo8] ±1.21<br><sub>Ptnml:&nbsp;3,&nbsp;2898,&nbsp;17508,&nbsp;9560,&nbsp;31<br>nElo: 90.49 ±2.78<br>PairsRatio: 3.31<br>[\[raw statistics\]][260726-raw8]</sub>
| 2026&#8209;08&#8209;19 | [master][190826-master] vs [Stockfish 18]<br><sub>`Bench: 2516158`<br>Update Release Creation<br>[\[differences\]][190826-dif] `298`</sub> | Elo: [44.69][190826-elo1] ±1.33<br><sub>Ptnml:&nbsp;14,&nbsp;3575,&nbsp;15288,&nbsp;10968,&nbsp;155<br>nElo: 94.55 ±2.78<br>PairsRatio: 3.10<br>[\[raw statistics\]][190826-raw1]</sub> | Elo: [39.28][190826-elo8] ±1.21<br><sub>Ptnml:&nbsp;3,&nbsp;2837,&nbsp;17595,&nbsp;9532,&nbsp;33<br>nElo: 91.39 ±2.78<br>PairsRatio: 3.37<br>[\[raw statistics\]][190826-raw8]</sub>
</div>

---

## Version Comparison

### Elo Progression

| [![][graph-elo1]][graph-elo1] | [![][graph-elo8]][graph-elo8] |
|:---------------------------------:|:---------------------------------:|

### Normalized Elo Progression

| [![][graph-nelo1]][graph-nelo1] | [![][graph-nelo8]][graph-nelo8] |
|:---------------------------------:|:---------------------------------:|

### Game Pair Ratio Progression

| [![][graph-gpr1]][graph-gpr1] | [![][graph-gpr8]][graph-gpr8] |
|:---------------------------------:|:---------------------------------:|

### 30 Day Average

| [![][graph-thirty1]][graph-thirty1] | [![][graph-thirty8]][graph-thirty8] |
|:-----------------------------------:|:-----------------------------------:|

### Draw Percentage vs Elo

| [![][graph-dve1]][graph-dve1] | [![][graph-dve8]][graph-dve8] |
|:-----------------------------:|:-----------------------------:|

---

## Historical Information

<details>
  <summary><code>Stockfish 3 Development (2013-03-01 - 2013-04-30)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2013&#8209;03&#8209;04 | [master][040313-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4968764`<br>Increase see prune depth<br>[\[differences\]][040313-dif] `226`</sub> | Elo: [15.00][040313-elo1] ±2.8<br><sub>WDL:&nbsp;2906,&nbsp;13325,&nbsp;3769<br>nElo: 26.02 ±4.8<br>[\[raw statistics\]][040313-raw1]</sub> |
| 2013&#8209;03&#8209;11 | [master][110313A-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4968764`<br>Be more aggressive on trying to finish iterations<br>[\[differences\]][110313A-dif] `227`</sub> | Elo: [15.49][110313A-elo1] ±2.8<br><sub>WDL:&nbsp;3016,&nbsp;13077,&nbsp;3907<br>nElo: 26.38 ±4.8<br>[\[raw statistics\]][110313A-raw1]</sub> |
| 2013&#8209;03&#8209;11 | [master][110313B-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4968764`<br>Check for easy move just once<br>[\[differences\]][110313B-dif] `228`</sub> | Elo: [13.42][110313B-elo1] ±2.8<br><sub>WDL:&nbsp;2974,&nbsp;13280,&nbsp;3746<br>nElo: 23.19 ±4.8<br>[\[raw statistics\]][110313B-raw1]</sub> |
| 2013&#8209;03&#8209;16 | [master][160313-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 5442365`<br>Further increase SEE prune depth<br>[\[differences\]][160313-dif] `232`</sub> | Elo: [17.77][160313-elo1] ±2.8<br><sub>WDL:&nbsp;2897,&nbsp;13184,&nbsp;3919<br>nElo: 30.53 ±4.8<br>[\[raw statistics\]][160313-raw1]</sub> |
| 2013&#8209;03&#8209;24 | [master][240313-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4985829`<br>Update bestValue when futility pruning (2)<br>[\[differences\]][240313-dif] `237`</sub> | Elo: [16.71][240313-elo1] ±2.8<br><sub>WDL:&nbsp;2874,&nbsp;13291,&nbsp;3835<br>nElo: 28.92 ±4.8<br>[\[raw statistics\]][240313-raw1]</sub> |
| 2013&#8209;03&#8209;30 | [master][300313-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4781239`<br>Set IID half way between d/2 and d-4<br>[\[differences\]][300313-dif] `241`</sub> | Elo: [18.76][300313-elo1] ±2.8<br><sub>WDL:&nbsp;2824,&nbsp;13273,&nbsp;3903<br>nElo: 32.46 ±4.8<br>[\[raw statistics\]][300313-raw1]</sub> |
| 2013&#8209;04&#8209;03 | [master][030413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4705335`<br>Double Impact of Gain tables<br>[\[differences\]][030413-dif] `242`</sub> | Elo: [15.44][030413-elo1] ±2.8<br><sub>WDL:&nbsp;3040,&nbsp;13032,&nbsp;3928<br>nElo: 26.21 ±4.8<br>[\[raw statistics\]][030413-raw1]</sub> |
| 2013&#8209;04&#8209;06 | [master][060413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4361224`<br>Increase null verification threshold to 12 plies<br>[\[differences\]][060413-dif] `249`</sub> | Elo: [17.11][060413-elo1] ±2.8<br><sub>WDL:&nbsp;2774,&nbsp;12861,&nbsp;3727<br>nElo: 29.62 ±4.9<br>[\[raw statistics\]][060413-raw1]</sub> |
| 2013&#8209;04&#8209;07 | [master][070413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 5473339`<br>Rescale UCI parameters to 100<br>[\[differences\]][070413-dif] `252`</sub> | Elo: [19.02][070413-elo1] ±2.8<br><sub>WDL:&nbsp;2948,&nbsp;13010,&nbsp;4042<br>nElo: 32.29 ±4.8<br>[\[raw statistics\]][070413-raw1]</sub> |
| 2013&#8209;04&#8209;10 | [master][100413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 5157061`<br>De-templetize Position::is_draw()<br>[\[differences\]][100413-dif] `257`</sub> | Elo: [24.13][100413-elo1] ±2.8<br><sub>WDL:&nbsp;2791,&nbsp;13031,&nbsp;4178<br>nElo: 41.10 ±4.8<br>[\[raw statistics\]][100413-raw1]</sub> |
| 2013&#8209;04&#8209;19 | [master][190413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 5274705`<br>Skip a couple of popcount in previous patch<br>[\[differences\]][190413-dif] `262`</sub> | Elo: [28.27][190413-elo1] ±2.9<br><sub>WDL:&nbsp;2754,&nbsp;12868,&nbsp;4378<br>nElo: 47.69 ±4.9<br>[\[raw statistics\]][190413-raw1]</sub> |
| 2013&#8209;04&#8209;26 | [master][260413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4311634`<br>Fix a crash introduced few days ago<br>[\[differences\]][260413-dif] `270`</sub> | Elo: [33.67][260413-elo1] ±2.9<br><sub>WDL:&nbsp;2642,&nbsp;12784,&nbsp;4574<br>nElo: 56.61 ±4.9<br>[\[raw statistics\]][260413-raw1]</sub> |
| 2013&#8209;04&#8209;28 | [master][280413-master] vs [Stockfish 2.3.1]<br><sub>`Bench: 4176431`<br>Temporary revert "Expose EvalInfo struct to search"<br>[\[differences\]][280413-dif] `273`</sub> | Elo: [30.86][280413-elo1] ±2.9<br><sub>WDL:&nbsp;2721,&nbsp;12786,&nbsp;4493<br>nElo: 51.82 ±4.9<br>[\[raw statistics\]][280413-raw1]</sub> |
| 2013&#8209;04&#8209;30 | [Stockfish 3] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF3RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF3DP]<br><sub>`Bench: 4176431`<br>[\[differences\]][300413-dif] `275`</sub> |

</details>

<details>
  <summary><code>Stockfish 4 Development (2013-04-30 - 2013-08-20)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2013&#8209;05&#8209;16 | [master][160513-master] vs [Stockfish 3]<br><sub>`Bench: 4327405`<br>Use two counter moves instead of one<br>[\[differences\]][160513-dif] `28`</sub> | Elo: [22.11][160513-elo1] ±3.0<br><sub>WDL:&nbsp;3212,&nbsp;12305,&nbsp;4483<br>nElo: 35.78 ±4.8<br>[\[raw statistics\]][160513-raw1]</sub> |
| 2013&#8209;05&#8209;23 | [master][230513-master] vs [Stockfish 3]<br><sub>`Bench: 4821467`<br>Bunch of 3 small patches<br>[\[differences\]][230513-dif] `33`</sub> | Elo: [26.70][230513-elo1] ±2.1<br><sub>WDL:&nbsp;6435,&nbsp;24062,&nbsp;9503<br>nElo: 42.53 ±3.4<br>[\[raw statistics\]][230513-raw1]</sub> |
| 2013&#8209;05&#8209;31 | [master][310513-master] vs [Stockfish 3]<br><sub>`Bench: 4931544`<br>Passed pawn tuning<br>[\[differences\]][310513-dif] `38`</sub> | Elo: [29.50][310513-elo1] ±2.2<br><sub>WDL:&nbsp;6588,&nbsp;23436,&nbsp;9976<br>nElo: 46.13 ±3.4<br>[\[raw statistics\]][310513-raw1]</sub> |
| 2013&#8209;06&#8209;23 | [master][230613-master] vs [Stockfish 3]<br><sub>`Bench: 4609948`<br>Fix some stale comments<br>[\[differences\]][230613-dif] `72`</sub> | Elo: [35.47][230613-elo1] ±2.2<br><sub>WDL:&nbsp;6196,&nbsp;23539,&nbsp;10265<br>nElo: 55.80 ±3.4<br>[\[raw statistics\]][230613-raw1]</sub> |
| 2013&#8209;07&#8209;03 | [master][030713-master] vs [Stockfish 3]<br><sub>`Bench: 4507288`<br>Simplify aspiration window code<br>[\[differences\]][030713-dif] `88`</sub> | Elo: [37.36][030713-elo1] ±2.2<br><sub>WDL:&nbsp;6223,&nbsp;23269,&nbsp;10508<br>nElo: 58.35 ±3.4<br>[\[raw statistics\]][030713-raw1]</sub> |
| 2013&#8209;07&#8209;13 | [master][130713-master] vs [Stockfish 3]<br><sub>`Bench: 4558173`<br>Fully qualify memset and memcpy<br>[\[differences\]][130713-dif] `100`</sub> | Elo: [39.27][130713-elo1] ±3.1<br><sub>WDL:&nbsp;3052,&nbsp;11645,&nbsp;5303<br>nElo: 61.44 ±4.9<br>[\[raw statistics\]][130713-raw1]</sub> |
| 2013&#8209;07&#8209;19 | [master][190713-master] vs [Stockfish 3]<br><sub>`Bench: 4769737`<br>Halve king eval margin<br>[\[differences\]][190713-dif] `110`</sub> | Elo: [39.83][190713-elo1] ±3.1<br><sub>WDL:&nbsp;3067,&nbsp;11583,&nbsp;5350<br>nElo: 62.10 ±4.9<br>[\[raw statistics\]][190713-raw1]</sub> |
| 2013&#8209;07&#8209;25 | [master][250713-master] vs [Stockfish 3]<br><sub>`Bench: 4727133`<br>Rewrite pawn shield and storm code<br>[\[differences\]][250713-dif] `133`</sub> | Elo: [48.84][250713-elo1] ±3.3<br><sub>WDL:&nbsp;3203,&nbsp;10801,&nbsp;5996<br>nElo: 73.11 ±4.9<br>[\[raw statistics\]][250713-raw1]</sub> |
| 2013&#8209;08&#8209;03 | [master][030813-master] vs [Stockfish 3]<br><sub>`Bench: 4424151`<br>Streamline time computation<br>[\[differences\]][030813-dif] `147`</sub> | Elo: [50.95][030813-elo1] ±3.2<br><sub>WDL:&nbsp;3056,&nbsp;10976,&nbsp;5968<br>nElo: 77.14 ±4.9<br>[\[raw statistics\]][030813-raw1]</sub> |
| 2013&#8209;08&#8209;18 | [master][180813-master] vs [Stockfish 3]<br><sub>`Bench: 4132374`<br>Further tweak movecount pruning<br>[\[differences\]][180813-dif] `162`</sub> | Elo: [56.66][180813-elo1] ±3.3<br><sub>WDL:&nbsp;2988,&nbsp;10791,&nbsp;6221<br>nElo: 85.22 ±5.0<br>[\[raw statistics\]][180813-raw1]</sub> |
| 2013&#8209;08&#8209;20 | [Stockfish 4] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF4RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF4DP]<br><sub>`Bench: 4132374`<br>[\[differences\]][200813-dif] `165`</sub> |

</details>

<details>
  <summary><code>Stockfish DD Development (2013-08-20 - 2013-11-29)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2013&#8209;08&#8209;29 | [master][290813-master] vs [Stockfish 4]<br><sub>`Bench: 4620975`<br>Enable LMR for dangerous moves<br>[\[differences\]][290813-dif] `12`</sub> | Elo: [16.18][290813-elo1] ±2.9<br><sub>WDL:&nbsp;3221,&nbsp;12627,&nbsp;4152<br>nElo: 26.72 ±4.8<br>[\[raw statistics\]][290813-raw1]</sub> |
| 2013&#8209;09&#8209;01 | [master][010913-master] vs [Stockfish 4]<br><sub>`Bench: 3453945`<br>Don't use lpthread for Android<br>[\[differences\]][010913-dif] `18`</sub> | Elo: [19.30][010913-elo1] ±2.9<br><sub>WDL:&nbsp;3083,&nbsp;12724,&nbsp;4193<br>nElo: 32.11 ±4.8<br>[\[raw statistics\]][010913-raw1]</sub> |
| 2013&#8209;09&#8209;05 | [master][050913-master] vs [Stockfish 4]<br><sub>`Bench: 4633330`<br>Do not prune useless checks in QS<br>[\[differences\]][050913-dif] `23`</sub> | Elo: [23.80][050913-elo1] ±2.9<br><sub>WDL:&nbsp;2932,&nbsp;12768,&nbsp;4300<br>nElo: 39.78 ±4.8<br>[\[raw statistics\]][050913-raw1]</sub> |
| 2013&#8209;09&#8209;07 | [master][070913-master] vs [Stockfish 4]<br><sub>`Bench: 3864419`<br>Remove unreachable values in mobility table<br>[\[differences\]][070913-dif] `27`</sub> | Elo: [27.66][070913-elo1] ±2.9<br><sub>WDL:&nbsp;2766,&nbsp;12879,&nbsp;4355<br>nElo: 46.68 ±4.9<br>[\[raw statistics\]][070913-raw1]</sub> |
| 2013&#8209;09&#8209;11 | [master][110913-master] vs [Stockfish 4]<br><sub>`Bench: 4554576`<br>Extend checks more when below alpha<br>[\[differences\]][110913-dif] `35`</sub> | Elo: [24.87][110913-elo1] ±2.9<br><sub>WDL:&nbsp;2824,&nbsp;12923,&nbsp;4253<br>nElo: 42.04 ±4.8<br>[\[raw statistics\]][110913-raw1]</sub> |
| 2013&#8209;09&#8209;12 | [master][120913-master] vs [Stockfish 4]<br><sub>`Bench: 4554579`<br>Revert "Move draw by material check"<br>[\[differences\]][120913-dif] `37`</sub> | Elo: [24.34][120913-elo1] ±2.9<br><sub>WDL:&nbsp;2825,&nbsp;12951,&nbsp;4224<br>nElo: 41.22 ±4.8<br>[\[raw statistics\]][120913-raw1]</sub> |
| 2013&#8209;09&#8209;13 | [master][130913-master] vs [Stockfish 4]<br><sub>`Bench: 3846852`<br>Increase passed bonus for having more pieces<br>[\[differences\]][130913-dif] `38`</sub> | Elo: [26.21][130913-elo1] ±2.9<br><sub>WDL:&nbsp;2871,&nbsp;12752,&nbsp;4377<br>nElo: 43.80 ±4.8<br>[\[raw statistics\]][130913-raw1]</sub> |
| 2013&#8209;09&#8209;16 | [master][160913-master] vs [Stockfish 4]<br><sub>`Bench: 3884003`<br>Fix time parameters for blitz games<br>[\[differences\]][160913-dif] `47`</sub> | Elo: [31.56][160913-elo1] ±2.1<br><sub>WDL:&nbsp;5588,&nbsp;25200,&nbsp;9212<br>nElo: 52.33 ±3.4<br>[\[raw statistics\]][160913-raw1]</sub> |
| 2013&#8209;09&#8209;23 | [master][230913-master] vs [Stockfish 4]<br><sub>`Bench: 3529630`<br>Update disabled warnings for Intel compiler<br>[\[differences\]][230913-dif] `54`</sub> | Elo: [34.03][230913-elo1] ±2.1<br><sub>WDL:&nbsp;5449,&nbsp;25197,&nbsp;9354<br>nElo: 56.49 ±3.4<br>[\[raw statistics\]][230913-raw1]</sub> |
| 2013&#8209;09&#8209;28 | [master][280913-master] vs [Stockfish 4]<br><sub>`Bench: 3172206`<br>Drop 'is' prefix from query functions<br>[\[differences\]][280913-dif] `62`</sub> | Elo: [33.49][280913-elo1] ±2.9<br><sub>WDL:&nbsp;2571,&nbsp;12936,&nbsp;4493<br>nElo: 56.93 ±4.9<br>[\[raw statistics\]][280913-raw1]</sub> |
| 2013&#8209;09&#8209;29 | [master][290913-master] vs [Stockfish 4]<br><sub>`Bench: 8336338`<br>Add more depth/positions to bench<br>[\[differences\]][290913-dif] `63`</sub> | Elo: [33.90][290913-elo1] ±2.0<br><sub>WDL:&nbsp;5292,&nbsp;25525,&nbsp;9183<br>nElo: 56.93 ±3.4<br>[\[raw statistics\]][290913-raw1]</sub> |
| 2013&#8209;10&#8209;08 | [master][081013A-master] vs [Stockfish 4]<br><sub>`Bench: 8340585`<br>Use TT refined value to stand pat<br>[\[differences\]][081013A-dif] `66`</sub> | Elo: [36.58][081013A-elo1] ±2.9<br><sub>WDL:&nbsp;2623,&nbsp;12656,&nbsp;4721<br>nElo: 61.07 ±4.9<br>[\[raw statistics\]][081013A-raw1]</sub> |
| 2013&#8209;10&#8209;08 | [master][081013B-master] vs [Stockfish 4]<br><sub>`Bench: 8340585`<br>Increase slowmover and reduce instability<br>[\[differences\]][081013B-dif] `67`</sub> | Elo: [38.91][081013B-elo1] ±2.1<br><sub>WDL:&nbsp;5102,&nbsp;25335,&nbsp;9563<br>nElo: 65.11 ±3.5<br>[\[raw statistics\]][081013B-raw1]</sub> |
| 2013&#8209;10&#8209;09 | [master][091013-master] vs [Stockfish 4]<br><sub>`Bench: 8279065`<br>Smoother transition for LMR<br>[\[differences\]][091013-dif] `68`</sub> | Elo: [39.29][091013-elo1] ±2.1<br><sub>WDL:&nbsp;5071,&nbsp;25354,&nbsp;9575<br>nElo: 65.80 ±3.4<br>[\[raw statistics\]][091013-raw1]</sub> |
| 2013&#8209;10&#8209;14 | [master][141013-master] vs [Stockfish 4]<br><sub>`Bench: 7700683`<br>Double king safety weights<br>[\[differences\]][141013-dif] `75`</sub> | Elo: [43.64][141013-elo1] ±2.9<br><sub>WDL:&nbsp;2432,&nbsp;12637,&nbsp;4931<br>nElo: 73.12 ±4.9<br>[\[raw statistics\]][141013-raw1]</sub> |
| 2013&#8209;10&#8209;18 | [master][181013-master] vs [Stockfish 4]<br><sub>`Bench: 8440524`<br>Score chain pawn also by rank<br>[\[differences\]][181013-dif] `78`</sub> | Elo: [49.51][181013-elo1] ±2.1<br><sub>WDL:&nbsp;4821,&nbsp;24696,&nbsp;10483<br>nElo: 81.68 ±3.5<br>[\[raw statistics\]][181013-raw1]</sub> |
| 2013&#8209;10&#8209;19 | [master][191013-master] vs [Stockfish 4]<br><sub>`Bench: 9160831`<br>Further increase safe checks bonus<br>[\[differences\]][191013-dif] `80`</sub> | Elo: [50.11][191013-elo1] ±2.1<br><sub>WDL:&nbsp;4817,&nbsp;24636,&nbsp;10547<br>nElo: 82.54 ±3.5<br>[\[raw statistics\]][191013-raw1]</sub> |
| 2013&#8209;10&#8209;20 | [master][201013-master] vs [Stockfish 4]<br><sub>`Bench: 9294116`<br>Further improve chain pawn evaluation<br>[\[differences\]][201013-dif] `84`</sub> | Elo: [49.72][201013-elo1] ±3.1<br><sub>WDL:&nbsp;2677,&nbsp;11803,&nbsp;5520<br>nElo: 79.12 ±4.9<br>[\[raw statistics\]][201013-raw1]</sub> |
| 2013&#8209;10&#8209;22 | [master][221013-master] vs [Stockfish 4]<br><sub>`Bench: 8455956`<br>Tweak again chain pawn bonus<br>[\[differences\]][221013-dif] `87`</sub> | Elo: [53.85][221013-elo1] ±3.0<br><sub>WDL:&nbsp;2425,&nbsp;12075,&nbsp;5500<br>nElo: 87.51 ±4.9<br>[\[raw statistics\]][221013-raw1]</sub> |
| 2013&#8209;10&#8209;24 | [master][241013-master] vs [Stockfish 4]<br><sub>`Bench: 8291883`<br>Retire mirror()<br>[\[differences\]][241013-dif] `94`</sub> | Elo: [55.18][241013-elo1] ±3.0<br><sub>WDL:&nbsp;2385,&nbsp;12080,&nbsp;5535<br>nElo: 89.82 ±4.9<br>[\[raw statistics\]][241013-raw1]</sub> |
| 2013&#8209;10&#8209;28 | [master][281013-master] vs [Stockfish 4]<br><sub>`Bench: 8029334`<br>Tweak bishop pair and knight weight<br>[\[differences\]][281013-dif] `96`</sub> | Elo: [52.84][281013-elo1] ±2.1<br><sub>WDL:&nbsp;4866,&nbsp;24231,&nbsp;10903<br>nElo: 86.04 ±3.5<br>[\[raw statistics\]][281013-raw1]</sub> |
| 2013&#8209;11&#8209;01 | [master][011113-master] vs [Stockfish 4]<br><sub>`Bench: 7995098`<br>Set timer to a fixed interval<br>[\[differences\]][011113-dif] `98`</sub> | Elo: [59.73][011113-elo1] ±3.0<br><sub>WDL:&nbsp;2324,&nbsp;11947,&nbsp;5729<br>nElo: 96.77 ±5.0<br>[\[raw statistics\]][011113-raw1]</sub> |
| 2013&#8209;11&#8209;09 | [master][091113-master] vs [Stockfish 4]<br><sub>`Bench: 7243575`<br>Futility pruning simplification<br>[\[differences\]][091113-dif] `106`</sub> | Elo: [60.68][091113-elo1] ±3.0<br><sub>WDL:&nbsp;2198,&nbsp;12146,&nbsp;5656<br>nElo: 99.73 ±5.0<br>[\[raw statistics\]][091113-raw1]</sub> |
| 2013&#8209;11&#8209;10 | [master][101113-master] vs [Stockfish 4]<br><sub>`Bench: 9282549`<br>Remove opposed flag for doubled pawns<br>[\[differences\]][101113-dif] `113`</sub> | Elo: [61.23][101113-elo1] ±2.1<br><sub>WDL:&nbsp;4333,&nbsp;24357,&nbsp;11310<br>nElo: 100.91 ±3.5<br>[\[raw statistics\]][101113-raw1]</sub> |
| 2013&#8209;11&#8209;11 | [master][111113-master] vs [Stockfish 4]<br><sub>`Bench: 8331357`<br>Simplify generate\<EVASIONS\><br>[\[differences\]][111113-dif] `116`</sub> | Elo: [63.85][111113-elo1] ±2.1<br><sub>WDL:&nbsp;4185,&nbsp;24361,&nbsp;11454<br>nElo: 105.53 ±3.5<br>[\[raw statistics\]][111113-raw1]</sub> |
| 2013&#8209;11&#8209;29 | [master][291113A-master] vs [Stockfish 4]<br><sub>`Bench: 8596156`<br>Add support for PPC 64bit on Linux<br>[\[differences\]][291113A-dif] `123`</sub> | Elo: [67.44][291113A-elo1] ±2.1<br><sub>WDL:&nbsp;4119,&nbsp;24094,&nbsp;11787<br>nElo: 110.87 ±3.5<br>[\[raw statistics\]][291113A-raw1]</sub> |
| 2013&#8209;11&#8209;29 | [Stockfish DD] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SFDDRN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SFDDDP]<br><sub>`Bench: 8596156`<br>[\[differences\]][291113B-dif] `124`</sub> |

</details>

<details>
  <summary><code>Stockfish 5 Development (2013-11-29 - 2014-05-31)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2013&#8209;12&#8209;09 | [master][091213-master] vs [Stockfish DD]<br><sub>`Bench: 7869223`<br>Research at intermediate depth if LMR is very high<br>[\[differences\]][091213-dif] `23`</sub> | Elo: [7.94][091213-elo1] ±1.9<br><sub>WDL:&nbsp;5662,&nbsp;27762,&nbsp;6576<br>nElo: 14.37 ±3.4<br>[\[raw statistics\]][091213-raw1]</sub> |
| 2013&#8209;12&#8209;19 | [master][191213-master] vs [Stockfish DD]<br><sub>`Bench: 7425809`<br>Faster and simplified threat eval<br>[\[differences\]][191213-dif] `29`</sub> | Elo: [11.35][191213-elo1] ±1.9<br><sub>WDL:&nbsp;5766,&nbsp;27162,&nbsp;7072<br>nElo: 20.06 ±3.4<br>[\[raw statistics\]][191213-raw1]</sub> |
| 2013&#8209;12&#8209;23 | [master][231213-master] vs [Stockfish DD]<br><sub>`Bench: 6835416`<br>Loosened trigger condition for king safety<br>[\[differences\]][231213-dif] `31`</sub> | Elo: [18.62][231213-elo1] ±2.0<br><sub>WDL:&nbsp;5619,&nbsp;26620,&nbsp;7761<br>nElo: 32.31 ±3.4<br>[\[raw statistics\]][231213-raw1]</sub> |
| 2013&#8209;12&#8209;29 | [master][291213-master] vs [Stockfish DD]<br><sub>`Bench: 7762310`<br>Retire asymmThreshold<br>[\[differences\]][291213-dif] `36`</sub> | Elo: [19.54][291213-elo1] ±2.0<br><sub>WDL:&nbsp;5580,&nbsp;26593,&nbsp;7827<br>nElo: 33.87 ±3.4<br>[\[raw statistics\]][291213-raw1]</sub> |
| 2014&#8209;01&#8209;02 | [master][020114-master] vs [Stockfish DD]<br><sub>`Bench: 7602383`<br>Ensure move_importance() is non-zero<br>[\[differences\]][020114-dif] `46`</sub> | Elo: [25.36][020114-elo1] ±2.0<br><sub>WDL:&nbsp;5371,&nbsp;26343,&nbsp;8286<br>nElo: 43.67 ±3.4<br>[\[raw statistics\]][020114-raw1]</sub> |
| 2014&#8209;01&#8209;08 | [master][080114-master] vs [Stockfish DD]<br><sub>`Bench: 8502826`<br>Position::gives_check - use ci.ksq<br>[\[differences\]][080114-dif] `55`</sub> | Elo: [29.85][080114-elo1] ±2.0<br><sub>WDL:&nbsp;5165,&nbsp;26242,&nbsp;8593<br>nElo: 51.32 ±3.4<br>[\[raw statistics\]][080114-raw1]</sub> |
| 2014&#8209;01&#8209;14 | [master][140114-master] vs [Stockfish DD]<br><sub>`Bench: 7205153`<br>Introduce 'follow up' moves<br>[\[differences\]][140114-dif] `59`</sub> | Elo: [29.84][140114-elo1] ±2.0<br><sub>WDL:&nbsp;5222,&nbsp;26129,&nbsp;8649<br>nElo: 51.09 ±3.4<br>[\[raw statistics\]][140114-raw1]</sub> |
| 2014&#8209;01&#8209;19 | [master][190114-master] vs [Stockfish DD]<br><sub>`Bench: 7804908`<br>Small simplification to Position::see<br>[\[differences\]][190114-dif] `64`</sub> | Elo: [32.49][190114-elo1] ±2.0<br><sub>WDL:&nbsp;5088,&nbsp;26094,&nbsp;8818<br>nElo: 55.65 ±3.4<br>[\[raw statistics\]][190114-raw1]</sub> |
| 2014&#8209;01&#8209;29 | [master][290114-master] vs [Stockfish DD]<br><sub>`Bench: 6875743`<br>Tweak bishop PSQT tables<br>[\[differences\]][290114-dif] `70`</sub> | Elo: [36.66][290114-elo1] ±2.0<br><sub>WDL:&nbsp;4905,&nbsp;25985,&nbsp;9110<br>nElo: 62.70 ±3.4<br>[\[raw statistics\]][290114-raw1]</sub> |
| 2014&#8209;02&#8209;09 | [master][090214-master] vs [Stockfish DD]<br><sub>`Bench: 8347121`<br>Faster handling of king captures in Position::see<br>[\[differences\]][090214-dif] `79`</sub> | Elo: [38.63][090214-elo1] ±2.0<br><sub>WDL:&nbsp;4956,&nbsp;25659,&nbsp;9385<br>nElo: 65.38 ±3.4<br>[\[raw statistics\]][090214-raw1]</sub> |
| 2014&#8209;02&#8209;22 | [master][220214-master] vs [Stockfish DD]<br><sub>`Bench: 8430785`<br>Fix a warning with Intel compiler<br>[\[differences\]][220214-dif] `99`</sub> | Elo: [38.93][220214-elo1] ±2.0<br><sub>WDL:&nbsp;4944,&nbsp;25649,&nbsp;9407<br>nElo: 65.87 ±3.4<br>[\[raw statistics\]][220214-raw1]</sub> |
| 2014&#8209;02&#8209;26 | [master][260214-master] vs [Stockfish DD]<br><sub>`Bench: 7990513`<br>Dynamic draw value<br>[\[differences\]][260214-dif] `100`</sub> | Elo: [39.25][260214-elo1] ±2.1<br><sub>WDL:&nbsp;5164,&nbsp;25172,&nbsp;9664<br>nElo: 65.32 ±3.4<br>[\[raw statistics\]][260214-raw1]</sub> |
| 2014&#8209;03&#8209;14 | [master][140314-master] vs [Stockfish DD]<br><sub>`Bench: 7451319`<br>Depth dependent aspiration window delta<br>[\[differences\]][140314-dif] `122`</sub> | Elo: [40.85][140314-elo1] ±2.0<br><sub>WDL:&nbsp;4925,&nbsp;25469,&nbsp;9606<br>nElo: 68.77 ±3.5<br>[\[raw statistics\]][140314-raw1]</sub> |
| 2014&#8209;03&#8209;24 | [master][240314-master] vs [Stockfish DD]<br><sub>`Bench: 7682173`<br>Simplify TT replace strategy<br>[\[differences\]][240314-dif] `138`</sub> | Elo: [43.70][240314-elo1] ±2.1<br><sub>WDL:&nbsp;4887,&nbsp;25221,&nbsp;9892<br>nElo: 73.08 ±3.5<br>[\[raw statistics\]][240314-raw1]</sub> |
| 2014&#8209;04&#8209;08 | [master][080414-master] vs [Stockfish DD]<br><sub>`Bench: 7533692`<br>Restrict queen mobility to safe squares<br>[\[differences\]][080414-dif] `159`</sub> | Elo: [47.70][080414-elo1] ±2.1<br><sub>WDL:&nbsp;4689,&nbsp;25165,&nbsp;10146<br>nElo: 79.86 ±3.5<br>[\[raw statistics\]][080414-raw1]</sub> |
| 2014&#8209;04&#8209;12 | [master][120414-master] vs [Stockfish DD]<br><sub>`Bench: 6921356`<br>Move args parsing to UCI::loop<br>[\[differences\]][120414-dif] `174`</sub> | Elo: [49.21][120414-elo1] ±2.1<br><sub>WDL:&nbsp;4717,&nbsp;24938,&nbsp;10345<br>nElo: 81.84 ±3.5<br>[\[raw statistics\]][120414-raw1]</sub> |
| 2014&#8209;04&#8209;21 | [master][210414-master] vs [Stockfish DD]<br><sub>`Bench: 7384368`<br>Reset DrawValue[] before new search<br>[\[differences\]][210414-dif] `184`</sub> | Elo: [54.53][210414-elo1] ±2.1<br><sub>WDL:&nbsp;4742,&nbsp;24289,&nbsp;10969<br>nElo: 89.09 ±3.5<br>[\[raw statistics\]][210414-raw1]</sub> |
| 2014&#8209;04&#8209;25 | [master][250414-master] vs [Stockfish DD]<br><sub>`Bench: 7905850`<br>Speed up picking of killers<br>[\[differences\]][250414-dif] `191`</sub> | Elo: [57.08][250414-elo1] ±2.2<br><sub>WDL:&nbsp;4858,&nbsp;23771,&nbsp;11371<br>nElo: 91.87 ±3.5<br>[\[raw statistics\]][250414-raw1]</sub> |
| 2014&#8209;05&#8209;04 | [master][040514-master] vs [Stockfish DD]<br><sub>`Bench: 8802105`<br>Revert dynamic contempt<br>[\[differences\]][040514-dif] `216`</sub> | Elo: [53.27][040514-elo1] ±2.2<br><sub>WDL:&nbsp;5183,&nbsp;23549,&nbsp;11268<br>nElo: 84.84 ±3.5<br>[\[raw statistics\]][040514-raw1]</sub> |
| 2014&#8209;05&#8209;13 | [master][130514-master] vs [Stockfish DD]<br><sub>`Bench: 8739659`<br>Drop to qsearch at low depth in razoring<br>[\[differences\]][130514-dif] `227`</sub> | Elo: [57.15][130514-elo1] ±1.8<br><sub>WDL:&nbsp;7289,&nbsp;35641,&nbsp;17070<br>nElo: 91.95 ±2.9<br>[\[raw statistics\]][130514-raw1]</sub> |
| 2014&#8209;05&#8209;17 | [master][170514-master] vs [Stockfish DD]<br><sub>`Bench: 8732553`<br>Fix an off-by-one bug in extract_pv_from_tt<br>[\[differences\]][170514-dif] `229`</sub> | Elo: [55.26][170514-elo1] ±2.2<br><sub>WDL:&nbsp;5108,&nbsp;23475,&nbsp;11417<br>nElo: 87.95 ±3.5<br>[\[raw statistics\]][170514-raw1]</sub> |
| 2014&#8209;05&#8209;24 | [master][240514-master] vs [Stockfish DD]<br><sub>`Bench: 7396783`<br>Fix a warning with Intel compiler<br>[\[differences\]][240514-dif] `234`</sub> | Elo: [53.28][240514-elo1] ±2.1<br><sub>WDL:&nbsp;4858,&nbsp;24198,&nbsp;10944<br>nElo: 86.68 ±3.5<br>[\[raw statistics\]][240514-raw1]</sub> |
| 2014&#8209;05&#8209;31 | [Stockfish 5] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF5RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF5DP]<br><sub>`Bench: 8732553`<br>[\[differences\]][310514-dif] `236`</sub> |

</details>

<details>
  <summary><code>Stockfish 6 Development (2014-05-31 - 2015-01-27)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2014&#8209;06&#8209;03 | [master][030614-master] vs [Stockfish 5]<br><sub>`Bench: 8205159`<br>Symmetric King Safety: take 2<br>[\[differences\]][030614-dif] `8`</sub> | Elo: [5.35][030614-elo1] ±1.8<br><sub>WDL:&nbsp;5386,&nbsp;28612,&nbsp;6002<br>nElo: 10.03 ±3.4<br>[\[raw statistics\]][030614-raw1]</sub> |
| 2014&#8209;06&#8209;11 | [master][110614-master] vs [Stockfish 5]<br><sub>`Bench: 7875814`<br>Simplify pawn threats and merge into ThreatenedByPawn[]<br>[\[differences\]][110614-dif] `22`</sub> | Elo: [8.30][110614-elo1] ±2.0<br><sub>WDL:&nbsp;4589,&nbsp;24491,&nbsp;5413<br>nElo: 15.43 ±3.7<br>[\[raw statistics\]][110614-raw1]</sub> |
| 2014&#8209;06&#8209;29 | [master][290614-master] vs [Stockfish 5]<br><sub>`Bench: 8759675`<br>Fix Singular extension condition to handle mate scores<br>[\[differences\]][290614-dif] `46`</sub> | Elo: [10.78][290614-elo1] ±1.8<br><sub>WDL:&nbsp;5152,&nbsp;28455,&nbsp;6393<br>nElo: 20.10 ±3.4<br>[\[raw statistics\]][290614-raw1]</sub> |
| 2014&#8209;07&#8209;22 | [master][220714-master] vs [Stockfish 5]<br><sub>`Bench: 7831429`<br>Outpost tuning<br>[\[differences\]][220714-dif] `62`</sub> | Elo: [19.63][220714-elo1] ±1.8<br><sub>WDL:&nbsp;4775,&nbsp;28192,&nbsp;7033<br>nElo: 36.29 ±3.4<br>[\[raw statistics\]][220714-raw1]</sub> |
| 2014&#8209;08&#8209;06 | [master][060814-master] vs [Stockfish 5]<br><sub>`Bench: 7461881`<br>Remove insufficient material rule<br>[\[differences\]][060814-dif] `73`</sub> | Elo: [19.68][060814-elo1] ±1.8<br><sub>WDL:&nbsp;4737,&nbsp;28263,&nbsp;7000<br>nElo: 36.49 ±3.4<br>[\[raw statistics\]][060814-raw1]</sub> |
| 2014&#8209;09&#8209;04 | [master][040914-master] vs [Stockfish 5]<br><sub>`Bench: 7461881`<br>Small tweak to idle_loop()<br>[\[differences\]][040914-dif] `82`</sub> | Elo: [15.90][040914-elo1] ±1.8<br><sub>WDL:&nbsp;4986,&nbsp;28199,&nbsp;6815<br>nElo: 29.35 ±3.4<br>[\[raw statistics\]][040914-raw1]</sub> |
| 2014&#8209;09&#8209;27 | [master][270914-master] vs [Stockfish 5]<br><sub>`Bench: 6545733`<br>Remove use of half-ply reductions<br>[\[differences\]][270914-dif] `93`</sub> | Elo: [22.80][270914-elo1] ±1.9<br><sub>WDL:&nbsp;4664,&nbsp;28051,&nbsp;7285<br>nElo: 41.96 ±3.4<br>[\[raw statistics\]][270914-raw1]</sub> |
| 2014&#8209;10&#8209;15 | [master][151014-master] vs [Stockfish 5]<br><sub>`Bench: 7328585`<br>Document why initing eval tables<br>[\[differences\]][151014-dif] `108`</sub> | Elo: [27.58][151014-elo1] ±1.9<br><sub>WDL:&nbsp;4613,&nbsp;27605,&nbsp;7782<br>nElo: 49.96 ±3.4<br>[\[raw statistics\]][151014-raw1]</sub> |
| 2014&#8209;11&#8209;01 | [master][011114-master] vs [Stockfish 5]<br><sub>`Bench: 6564212`<br>Merge pull request #89 from official-stockfish/pull_no_pretty<br>[\[differences\]][011114-dif] `129`</sub> | Elo: [31.00][011114-elo1] ±1.9<br><sub>WDL:&nbsp;4484,&nbsp;27472,&nbsp;8044<br>nElo: 55.96 ±3.4<br>[\[raw statistics\]][011114-raw1]</sub> |
| 2014&#8209;11&#8209;10 | [master][101114-master] vs [Stockfish 5]<br><sub>`Bench: 6807896`<br>Profile Build with Hash=16<br>[\[differences\]][101114-dif] `148`</sub> | Elo: [36.21][101114-elo1] ±1.9<br><sub>WDL:&nbsp;4357,&nbsp;27132,&nbsp;8511<br>nElo: 64.71 ±3.4<br>[\[raw statistics\]][101114-raw1]</sub> |
| 2014&#8209;11&#8209;25 | [master][251114-master] vs [Stockfish 5]<br><sub>`Bench: 8255966`<br>Bitbase index() from ADD to OR<br>[\[differences\]][251114-dif] `168`</sub> | Elo: [39.02][251114-elo1] ±1.9<br><sub>WDL:&nbsp;4151,&nbsp;27225,&nbsp;8624<br>nElo: 70.14 ±3.4<br>[\[raw statistics\]][251114-raw1]</sub> |
| 2014&#8209;12&#8209;07 | [master][071214-master] vs [Stockfish 5]<br><sub>`Bench: 9324905`<br>Simpler PRNG and faster magics search<br>[\[differences\]][071214-dif] `181`</sub> | Elo: [41.42][071214-elo1] ±1.9<br><sub>WDL:&nbsp;4108,&nbsp;27038,&nbsp;8854<br>nElo: 74.04 ±3.4<br>[\[raw statistics\]][071214-raw1]</sub> |
| 2014&#8209;12&#8209;22 | [master][221214-master] vs [Stockfish 5]<br><sub>`Bench: 9498821`<br>Prefer names to numbers in storm code<br>[\[differences\]][221214-dif] `197`</sub> | Elo: [46.26][221214-elo1] ±1.9<br><sub>WDL:&nbsp;4011,&nbsp;26683,&nbsp;9306<br>nElo: 81.89 ±3.4<br>[\[raw statistics\]][221214-raw1]</sub> |
| 2015&#8209;01&#8209;07 | [master][070115-master] vs [Stockfish 5]<br><sub>`Bench: 7604776`<br>Assorted formatting and comment tweaks in position.h<br>[\[differences\]][070115-dif] `213`</sub> | Elo: [52.10][070115-elo1] ±2.0<br><sub>WDL:&nbsp;3913,&nbsp;26688,&nbsp;9948<br>nElo: 91.46 ±3.4<br>[\[raw statistics\]][070115-raw1]</sub> |
| 2015&#8209;01&#8209;18 | [master][180115-master] vs [Stockfish 5]<br><sub>`Bench: 8080602`<br>Stockfish 6 Release Candidate 1<br>[\[differences\]][180115-dif] `228`</sub> | Elo: [51.71][180115-elo1] ±1.9<br><sub>WDL:&nbsp;3723,&nbsp;26644,&nbsp;9633<br>nElo: 91.89 ±3.5<br>[\[raw statistics\]][180115-raw1]</sub> |
| 2015&#8209;01&#8209;27 | [Stockfish 6] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF6RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF6DP]<br><sub>`Bench: 8918745`<br>[\[differences\]][270115-dif] `236`</sub> |

</details>

<details>
  <summary><code>Stockfish 7 Development (2015-01-27 - 2016-01-02)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2015&#8209;02&#8209;08 | [master][080215-master] vs [Stockfish 6]<br><sub>`Bench: 7699138`<br>Pawn Center Bind Bonus<br>[\[differences\]][080215-dif] `12`</sub> | Elo: [7.50][080215-elo1] ±2.0<br><sub>WDL:&nbsp;6423,&nbsp;26291,&nbsp;7286<br>nElo: 12.81 ±3.4<br>[\[raw statistics\]][080215-raw1]</sub> |
| 2015&#8209;03&#8209;19 | [master][190315-master] vs [Stockfish 6]<br><sub>`Bench: 8226843`<br>Retire ConditionVariable<br>[\[differences\]][190315-dif] `123`</sub> | Elo: [15.92][190315-elo1] ±1.8<br><sub>WDL:&nbsp;4796,&nbsp;28576,&nbsp;6628<br>nElo: 29.89 ±3.4<br>[\[raw statistics\]][190315-raw1]</sub> |
| 2015&#8209;03&#8209;29 | [master][290315-master] vs [Stockfish 6]<br><sub>`Bench: 7658627`<br>Remove some difficult to understand C++11 constructs<br>[\[differences\]][290315-dif] `137`</sub> | Elo: [19.02][290315-elo1] ±1.8<br><sub>WDL:&nbsp;4590,&nbsp;28633,&nbsp;6777<br>nElo: 35.82 ±3.4<br>[\[raw statistics\]][290315-raw1]</sub> |
| 2015&#8209;04&#8209;10 | [master][100415-master] vs [Stockfish 6]<br><sub>`Bench: 6985247`<br>Allow Position::init() to be called more than once<br>[\[differences\]][100415-dif] `151`</sub> | Elo: [22.12][100415-elo1] ±1.8<br><sub>WDL:&nbsp;4480,&nbsp;28497,&nbsp;7023<br>nElo: 41.48 ±3.4<br>[\[raw statistics\]][100415-raw1]</sub> |
| 2015&#8209;05&#8209;09 | [master][090515-master] vs [Stockfish 6]<br><sub>`Bench: 8787152`<br>Smart TT save<br>[\[differences\]][090515-dif] `164`</sub> | Elo: [28.82][090515-elo1] ±1.8<br><sub>WDL:&nbsp;4197,&nbsp;28295,&nbsp;7508<br>nElo: 53.80 ±3.4<br>[\[raw statistics\]][090515-raw1]</sub> |
| 2015&#8209;06&#8209;07 | [master][070615-master] vs [Stockfish 6]<br><sub>`Bench: 6716940`<br>Simplify outpost evaluation<br>[\[differences\]][070615-dif] `176`</sub> | Elo: [27.85][070615-elo1] ±1.9<br><sub>WDL:&nbsp;4501,&nbsp;27798,&nbsp;7701<br>nElo: 50.86 ±3.4<br>[\[raw statistics\]][070615-raw1]</sub> |
| 2015&#8209;07&#8209;16 | [master][160715-master] vs [Stockfish 6]<br><sub>`Bench: 6943812`<br>Fix formatting of previous patch<br>[\[differences\]][160715-dif] `187`</sub> | Elo: [30.74][160715-elo1] ±1.9<br><sub>WDL:&nbsp;4367,&nbsp;27736,&nbsp;7897<br>nElo: 56.09 ±3.4<br>[\[raw statistics\]][160715-raw1]</sub> |
| 2015&#8209;07&#8209;30 | [master][300715-master] vs [Stockfish 6]<br><sub>`Bench: 8040572`<br>Simplify IID depth formula<br>[\[differences\]][300715-dif] `192`</sub> | Elo: [34.04][300715-elo1] ±1.9<br><sub>WDL:&nbsp;4283,&nbsp;27527,&nbsp;8190<br>nElo: 61.72 ±3.4<br>[\[raw statistics\]][300715-raw1]</sub> |
| 2015&#8209;10&#8209;03 | [master][031015-master] vs [Stockfish 6]<br><sub>`Bench: 8073614`<br>File based passed pawn bonus<br>[\[differences\]][031015-dif] `214`</sub> | Elo: [44.23][031015-elo1] ±1.9<br><sub>WDL:&nbsp;3690,&nbsp;27555,&nbsp;8755<br>nElo: 80.99 ±3.4<br>[\[raw statistics\]][031015-raw1]</sub> |
| 2015&#8209;10&#8209;25 | [master][251015-master] vs [Stockfish 6]<br><sub>`Bench: 8004751`<br>Use atomics instead of volatile<br>[\[differences\]][251015-dif] `232`</sub> | Elo: [61.76][251015-elo1] ±1.9<br><sub>WDL:&nbsp;3197,&nbsp;26570,&nbsp;10233<br>nElo: 110.69 ±3.5<br>[\[raw statistics\]][251015-raw1]</sub> |
| 2015&#8209;12&#8209;27 | [master][271215-master] vs [Stockfish 6]<br><sub>`Bench: 8355485`<br>Stockfish 7 Beta 1<br>[\[differences\]][271215-dif] `267`</sub> | Elo: [62.62][271215-elo1] ±1.6<br><sub>WDL:&nbsp;4472,&nbsp;40358,&nbsp;15170<br>nElo: 113.94 ±2.8<br>[\[raw statistics\]][271215-raw1]</sub> |
| 2016&#8209;01&#8209;02 | [Stockfish 7] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF7RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF7DP]<br><sub>`Bench: 8355485`<br>[\[differences\]][020116-dif] `273`</sub> |

</details>

<details>
  <summary><code>Stockfish 8 Development (2016-01-02 - 2016-11-01)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2016&#8209;01&#8209;28 | [master][280116-master] vs [Stockfish 7]<br><sub>`Bench: 7751425`<br>Time management simplification<br>[\[differences\]][280116-dif] `16`</sub> | Elo: [4.93][280116-elo1] ±1.5<br><sub>WDL:&nbsp;3814,&nbsp;31804,&nbsp;4382<br>nElo: 10.90 ±3.4<br>[\[raw statistics\]][280116-raw1]</sub> |
| 2016&#8209;03&#8209;10 | [master][100316-master] vs [Stockfish 7]<br><sub>`Bench: 8261839`<br>Add follow up moves history for move ordering<br>[\[differences\]][100316-dif] `28`</sub> | Elo: [12.83][100316-elo1] ±1.5<br><sub>WDL:&nbsp;3354,&nbsp;31816,&nbsp;4830<br>nElo: 28.44 ±3.4<br>[\[raw statistics\]][100316-raw1]</sub> |
| 2016&#8209;04&#8209;08 | [master][080416-master] vs [Stockfish 7]<br><sub>`Bench: 7482426`<br>Small passed pawn simplification<br>[\[differences\]][080416-dif] `42`</sub> | Elo: [15.27][080416-elo1] ±1.5<br><sub>WDL:&nbsp;3251,&nbsp;31741,&nbsp;5008<br>nElo: 33.74 ±3.4<br>[\[raw statistics\]][080416-raw1]</sub> |
| 2016&#8209;05&#8209;20 | [master][200516-master] vs [Stockfish 7]<br><sub>`Bench: 8428997`<br>More detailed dependence of time allocation<br>[\[differences\]][200516-dif] `64`</sub> | Elo: [29.44][200516-elo1] ±1.6<br><sub>WDL:&nbsp;2719,&nbsp;31217,&nbsp;6104<br>nElo: 63.61 ±3.4<br>[\[raw statistics\]][200516-raw1]</sub> |
| 2016&#8209;06&#8209;10 | [master][100616-master] vs [Stockfish 7]<br><sub>`Bench: 8276130`<br>Stat Formula Tweak<br>[\[differences\]][100616-dif] `76`</sub> | Elo: [36.29][100616-elo1] ±1.6<br><sub>WDL:&nbsp;2606,&nbsp;30625,&nbsp;6769<br>nElo: 76.48 ±3.4<br>[\[raw statistics\]][100616-raw1]</sub> |
| 2016&#8209;07&#8209;24 | [master][240716-master] vs [Stockfish 7]<br><sub>`Bench: 8145304`<br>Allow null pruning at depth 1<br>[\[differences\]][240716-dif] `94`</sub> | Elo: [49.73][240716-elo1] ±1.7<br><sub>WDL:&nbsp;2415,&nbsp;29483,&nbsp;8102<br>nElo: 100.27 ±3.4<br>[\[raw statistics\]][240716-raw1]</sub> |
| 2016&#8209;08&#8209;18 | [master][180816-master] vs [Stockfish 7]<br><sub>`Bench: 7662861`<br>Remove a stale assignment<br>[\[differences\]][180816-dif] `101`</sub> | Elo: [52.59][180816-elo1] ±1.7<br><sub>WDL:&nbsp;2413,&nbsp;29165,&nbsp;8422<br>nElo: 104.74 ±3.4<br>[\[raw statistics\]][180816-raw1]</sub> |
| 2016&#8209;09&#8209;07 | [master][070916-master] vs [Stockfish 7]<br><sub>`Bench: 6024713`<br>Refactor previous patch<br>[\[differences\]][070916-dif] `124`</sub> | Elo: [66.53][070916-elo1] ±1.8<br><sub>WDL:&nbsp;1893,&nbsp;28647,&nbsp;9460<br>nElo: 131.97 ±3.3<br>[\[raw statistics\]][070916-raw1]</sub> |
| 2016&#8209;10&#8209;07 | [master][071016-master] vs [Stockfish 7]<br><sub>`Bench: 6421663`<br>Optimisation of Position::see and Position::see_sign<br>[\[differences\]][071016-dif] `149`</sub> | Elo: [76.60][071016-elo1] ±1.8<br><sub>WDL:&nbsp;1571,&nbsp;28179,&nbsp;10250<br>nElo: 151.24 ±3.3<br>[\[raw statistics\]][071016-raw1]</sub> |
| 2016&#8209;11&#8209;01 | [Stockfish 8] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF8RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF8DP]<br><sub>`Bench: 5926706`<br>[\[differences\]][011116-dif] `168`</sub> |

</details>

<details>
  <summary><code>Stockfish 9 Development (2016-11-01 - 2018-01-31)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2016&#8209;12&#8209;31 | [master][311216-master] vs [Stockfish 8]<br><sub>`Bench: 5468995`<br>Small eval cleanup and renaming<br>[\[differences\]][311216-dif] `55`</sub> | Elo: [5.21][311216-elo1] ±1.5<br><sub>WDL:&nbsp;3656,&nbsp;32088,&nbsp;4256<br>nElo: 11.72 ±3.4<br>[\[raw statistics\]][311216-raw1]</sub> |
| 2017&#8209;01&#8209;29 | [master][290117-master] vs [Stockfish 8]<br><sub>`Bench: 5941174`<br>Simplify TT penalty stat (#980)<br>[\[differences\]][290117-dif] `86`</sub> | Elo: [8.82][290117-elo1] ±1.5<br><sub>WDL:&nbsp;3580,&nbsp;31825,&nbsp;4595<br>nElo: 19.53 ±3.4<br>[\[raw statistics\]][290117-raw1]</sub> |
| 2017&#8209;03&#8209;08 | [master][080317-master] vs [Stockfish 8]<br><sub>`Bench: 5803228`<br>Helper functions to count material for both sides<br>[\[differences\]][080317-dif] `106`</sub> | Elo: [10.84][080317-elo1] ±1.6<br><sub>WDL:&nbsp;3569,&nbsp;31614,&nbsp;4817<br>nElo: 23.73 ±3.4<br>[\[raw statistics\]][080317-raw1]</sub> |
| 2017&#8209;04&#8209;20 | [master][200417-master] vs [Stockfish 8]<br><sub>`Bench: 6581936`<br>simplify logic for history based pruning<br>[\[differences\]][200417-dif] `127`</sub> | Elo: [15.17][200417-elo1] ±1.6<br><sub>WDL:&nbsp;3430,&nbsp;31395,&nbsp;5175<br>nElo: 32.82 ±3.4<br>[\[raw statistics\]][200417-raw1]</sub> |
| 2017&#8209;05&#8209;07 | [master][070517-master] vs [Stockfish 8]<br><sub>`Bench: 6107863`<br>Linear Protector bonus by distance<br>[\[differences\]][070517-dif] `144`</sub> | Elo: [20.25][070517-elo1] ±1.6<br><sub>WDL:&nbsp;3258,&nbsp;31155,&nbsp;5587<br>nElo: 43.35 ±3.4<br>[\[raw statistics\]][070517-raw1]</sub> |
| 2017&#8209;06&#8209;21 | [master][210617-master] vs [Stockfish 8]<br><sub>`Bench: 5725676`<br>Increase reduction if tt-move is a capture<br>[\[differences\]][210617-dif] `167`</sub> | Elo: [27.41][210617-elo1] ±1.6<br><sub>WDL:&nbsp;2918,&nbsp;31015,&nbsp;6067<br>nElo: 58.52 ±3.4<br>[\[raw statistics\]][210617-raw1]</sub> |
| 2017&#8209;08&#8209;26 | [master][260817-master] vs [Stockfish 8]<br><sub>`Bench: 5965302`<br>Improve multi-threaded mate finding<br>[\[differences\]][260817-dif] `218`</sub> | Elo: [29.32][260817-elo1] ±1.6<br><sub>WDL:&nbsp;2886,&nbsp;30860,&nbsp;6254<br>nElo: 62.17 ±3.4<br>[\[raw statistics\]][260817-raw1]</sub> |
| 2017&#8209;10&#8209;02 | [master][021017-master] vs [Stockfish 8]<br><sub>`Bench: 5620312`<br>Good bishops on the main diagonals<br>[\[differences\]][021017-dif] `237`</sub> | Elo: [32.61][021017-elo1] ±1.6<br><sub>WDL:&nbsp;2688,&nbsp;30881,&nbsp;6431<br>nElo: 69.44 ±3.4<br>[\[raw statistics\]][021017-raw1]</sub> |
| 2017&#8209;11&#8209;03 | [master][031117-master] vs [Stockfish 8]<br><sub>`Bench: 5536775`<br>Introduce capture history table for capture move sorting<br>[\[differences\]][031117-dif] `247`</sub> | Elo: [35.18][031117-elo1] ±1.6<br><sub>WDL:&nbsp;2682,&nbsp;30600,&nbsp;6718<br>nElo: 73.93 ±3.4<br>[\[raw statistics\]][031117-raw1]</sub> |
| 2017&#8209;12&#8209;03 | [master][031217-master] vs [Stockfish 8]<br><sub>`Bench: 5051254`<br>Use constexpr when makes sense<br>[\[differences\]][031217-dif] `261`</sub> | Elo: [43.31][031217-elo1] ±1.7<br><sub>WDL:&nbsp;2406,&nbsp;30227,&nbsp;7367<br>nElo: 90.06 ±3.3<br>[\[raw statistics\]][031217-raw1]</sub> |
| 2018&#8209;01&#8209;23 | [master][230118-master] vs [Stockfish 8]<br><sub>`Bench: 5783344`<br>Contempt 20<br>[\[differences\]][230118-dif] `286`</sub> | Elo: [57.25][230118-elo1] ±1.9<br><sub>WDL:&nbsp;2917,&nbsp;27634,&nbsp;9449<br>nElo: 106.75 ±3.4<br>[\[raw statistics\]][230118-raw1]</sub> |
| 2018&#8209;01&#8209;31 | [Stockfish 9] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF9RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF9DP]<br><sub>`Bench: 5023629`<br>[\[differences\]][310118-dif] `291`</sub> |

</details>

<details>
  <summary><code>Stockfish 10 Development (2018-01-31 - 2018-11-29)</code></summary><br>

| `Date` | `Version` | `1 Thread` |
|:------:|:---------:|:----------:|
| 2018&#8209;02&#8209;28 | [master][280218-master] vs [Stockfish 9]<br><sub>`Bench: 5765806`<br>Reintroduce depth 2 razoring (with additional margin)<br>[\[differences\]][280218-dif] `41`</sub> | Elo: [5.16][280218-elo1] ±1.7<br><sub>WDL:&nbsp;5143,&nbsp;30105,&nbsp;5752<br>nElo: 10.02 ±3.4<br>[\[raw statistics\]][280218-raw1]</sub> |
| 2018&#8209;03&#8209;07 | [master][070318-master] vs [Stockfish 9]<br><sub>`Bench: 5544908`<br>Simplification: use Arctan for the optimism S-curve<br>[\[differences\]][070318-dif] `53`</sub> | Elo: [6.94][070318-elo1] ±1.7<br><sub>WDL:&nbsp;4813,&nbsp;29575,&nbsp;5612<br>nElo: 13.60 ±3.4<br>[\[raw statistics\]][070318-raw1]</sub> |
| 2018&#8209;03&#8209;13 | [master][130318-master] vs [Stockfish 9]<br><sub>`Bench: 5741807`<br>Use intrinsics only for LSB/MSB<br>[\[differences\]][130318-dif] `64`</sub> | Elo: [13.03][130318-elo1] ±1.7<br><sub>WDL:&nbsp;4463,&nbsp;29574,&nbsp;5963<br>nElo: 25.59 ±3.4<br>[\[raw statistics\]][130318-raw1]</sub> |
| 2018&#8209;03&#8209;26 | [master][260318-master] vs [Stockfish 9]<br><sub>`Bench: 5934103`<br>Make kingRing always 8 squares<br>[\[differences\]][260318-dif] `75`</sub> | Elo: [13.77][260318-elo1] ±1.7<br><sub>WDL:&nbsp;4339,&nbsp;29737,&nbsp;5924<br>nElo: 27.26 ±3.4<br>[\[raw statistics\]][260318-raw1]</sub> |
| 2018&#8209;04&#8209;03 | [master][030418-master] vs [Stockfish 9]<br><sub>`Bench: 4989125`<br>Remove the Queen from the mobility area of minor pieces<br>[\[differences\]][030418-dif] `92`</sub> | Elo: [16.59][030418-elo1] ±1.7<br><sub>WDL:&nbsp;4283,&nbsp;29525,&nbsp;6192<br>nElo: 32.54 ±3.4<br>[\[raw statistics\]][030418-raw1]</sub> |
| 2018&#8209;04&#8209;07 | [master][070418-master] vs [Stockfish 9]<br><sub>`Bench: 5170165`<br>Reset negative statScore on fail high<br>[\[differences\]][070418-dif] `94`</sub> | Elo: [16.63][070418-elo1] ±1.8<br><sub>WDL:&nbsp;4397,&nbsp;29293,&nbsp;6310<br>nElo: 32.25 ±3.4<br>[\[raw statistics\]][070418-raw1]</sub> |
| 2018&#8209;04&#8209;23 | [master][230418-master] vs [Stockfish 9]<br><sub>`Bench: 5549801`<br>Alternative formula for dynamic contempt<br>[\[differences\]][230418-dif] `106`</sub> | Elo: [15.90][230418-elo1] ±1.8<br><sub>WDL:&nbsp;4462,&nbsp;29247,&nbsp;6291<br>nElo: 30.76 ±3.4<br>[\[raw statistics\]][230418-raw1]</sub> |
| 2018&#8209;04&#8209;29 | [master][290418-master] vs [Stockfish 9]<br><sub>`Bench: 5254862`<br>Always scale using pawn contribution<br>[\[differences\]][290418-dif] `112`</sub> | Elo: [14.61][290418-elo1] ±1.7<br><sub>WDL:&nbsp;4430,&nbsp;29459,&nbsp;6111<br>nElo: 28.54 ±3.4<br>[\[raw statistics\]][290418-raw1]</sub> |
| 2018&#8209;05&#8209;03 | [master][030518-master] vs [Stockfish 9]<br><sub>`Bench: 5186783`<br>Tweak the connected[] array value for pawns on rank 5<br>[\[differences\]][030518-dif] `116`</sub> | Elo: [18.52][030518-elo1] ±1.8<br><sub>WDL:&nbsp;4385,&nbsp;29100,&nbsp;6515<br>nElo: 35.63 ±3.4<br>[\[raw statistics\]][030518-raw1]</sub> |
| 2018&#8209;05&#8209;13 | [master][130518-master] vs [Stockfish 9]<br><sub>`Bench: 5294316`<br>Update search.cpp<br>[\[differences\]][130518-dif] `128`</sub> | Elo: [24.92][130518-elo1] ±1.8<br><sub>WDL:&nbsp;4175,&nbsp;28786,&nbsp;7039<br>nElo: 47.42 ±3.4<br>[\[raw statistics\]][130518-raw1]</sub> |
| 2018&#8209;05&#8209;24 | [master][240518-master] vs [Stockfish 9]<br><sub>`Bench: 5167159`<br>LMR Capture Tweak<br>[\[differences\]][240518-dif] `137`</sub> | Elo: [26.72][240518-elo1] ±1.8<br><sub>WDL:&nbsp;4033,&nbsp;28864,&nbsp;7103<br>nElo: 51.08 ±3.4<br>[\[raw statistics\]][240518-raw1]</sub> |
| 2018&#8209;06&#8209;05 | [master][050618-master] vs [Stockfish 9]<br><sub>`Bench: 4326784`<br>Call cycle detection before qsearch()<br>[\[differences\]][050618-dif] `148`</sub> | Elo: [28.16][050618-elo1] ±1.8<br><sub>WDL:&nbsp;3971,&nbsp;28823,&nbsp;7206<br>nElo: 53.79 ±3.4<br>[\[raw statistics\]][050618-raw1]</sub> |
| 2018&#8209;06&#8209;11 | [master][110618-master] vs [Stockfish 9]<br><sub>`Bench: 4980482`<br>Optimize an expression in endgame.cpp<br>[\[differences\]][110618-dif] `154`</sub> | Elo: [29.72][110618-elo1] ±1.9<br><sub>WDL:&nbsp;4335,&nbsp;27917,&nbsp;7748<br>nElo: 54.60 ±3.4<br>[\[raw statistics\]][110618-raw1]</sub> |
| 2018&#8209;06&#8209;23 | [master][230618-master] vs [Stockfish 9]<br><sub>`Bench: 4557946`<br>Another set of tuned values after one million games<br>[\[differences\]][230618-dif] `162`</sub> | Elo: [31.98][230618-elo1] ±1.9<br><sub>WDL:&nbsp;4354,&nbsp;27621,&nbsp;8025<br>nElo: 58.11 ±3.4<br>[\[raw statistics\]][230618-raw1]</sub> |
| 2018&#8209;07&#8209;19 | [master][190718-master] vs [Stockfish 9]<br><sub>`Bench: 4817583`<br>Better check evasion move sorting<br>[\[differences\]][190718-dif] `179`</sub> | Elo: [36.70][190718-elo1] ±1.9<br><sub>WDL:&nbsp;4312,&nbsp;27166,&nbsp;8522<br>nElo: 65.70 ±3.4<br>[\[raw statistics\]][190718-raw1]</sub> |
| 2018&#8209;07&#8209;27 | [master][270718-master] vs [Stockfish 9]<br><sub>`Bench: 4905530`<br>Simplify cmh pruning<br>[\[differences\]][270718-dif] `199`</sub> | Elo: [37.45][270718-elo1] ±1.9<br><sub>WDL:&nbsp;4183,&nbsp;27339,&nbsp;8478<br>nElo: 67.55 ±3.4<br>[\[raw statistics\]][270718-raw1]</sub> |
| 2018&#8209;07&#8209;28 | [master][280718-master] vs [Stockfish 9]<br><sub>`Bench: 4883742`<br>Increase the mg->eg gradient for the PawnlessFlank malus<br>[\[differences\]][280718-dif] `200`</sub> | Elo: [35.84][280718-elo1] ±1.9<br><sub>WDL:&nbsp;4235,&nbsp;27418,&nbsp;8347<br>nElo: 64.78 ±3.4<br>[\[raw statistics\]][280718-raw1]</sub> |
| 2018&#8209;07&#8209;31 | [master][310718-master] vs [Stockfish 9]<br><sub>`Bench: 5591925`<br>Small tweaks to recent code changes<br>[\[differences\]][310718-dif] `203`</sub> | Elo: [37.67][310718-elo1] ±1.9<br><sub>WDL:&nbsp;4019,&nbsp;27642,&nbsp;8339<br>nElo: 68.82 ±3.4<br>[\[raw statistics\]][310718-raw1]</sub> |
| 2018&#8209;08&#8209;08 | [master][080818-master] vs [Stockfish 9]<br><sub>`Bench: 4669050`<br>First check threshold in space evaluation<br>[\[differences\]][080818-dif] `207`</sub> | Elo: [37.78][080818-elo1] ±1.9<br><sub>WDL:&nbsp;4224,&nbsp;27220,&nbsp;8556<br>nElo: 67.82 ±3.4<br>[\[raw statistics\]][080818-raw1]</sub> |
| 2018&#8209;08&#8209;12 | [master][120818-master] vs [Stockfish 9]<br><sub>`Bench: 4694813`<br>Combo of several promising parameter tweaks<br>[\[differences\]][120818-dif] `211`</sub> | Elo: [40.88][120818-elo1] ±1.9<br><sub>WDL:&nbsp;4069,&nbsp;27177,&nbsp;8754<br>nElo: 73.46 ±3.4<br>[\[raw statistics\]][120818-raw1]</sub> |
| 2018&#8209;08&#8209;14 | [master][140818-master] vs [Stockfish 9]<br><sub>`Bench: 4272361`<br>Double weight of capture history<br>[\[differences\]][140818-dif] `214`</sub> | Elo: [41.69][140818-elo1] ±1.9<br><sub>WDL:&nbsp;3942,&nbsp;27339,&nbsp;8719<br>nElo: 75.47 ±3.4<br>[\[raw statistics\]][140818-raw1]</sub> |
| 2018&#8209;08&#8209;17 | [master][170818-master] vs [Stockfish 9]<br><sub>`Bench: 4592766`<br>Use an affine formula to mix stats and eval<br>[\[differences\]][170818-dif] `217`</sub> | Elo: [43.15][170818-elo1] ±1.9<br><sub>WDL:&nbsp;3922,&nbsp;27213,&nbsp;8865<br>nElo: 77.82 ±3.4<br>[\[raw statistics\]][170818-raw1]</sub> |
| 2018&#8209;08&#8209;28 | [master][280818A-master] vs [Stockfish 9]<br><sub>`Bench: 4172767`<br>Tweak stat bonus formula<br>[\[differences\]][280818A-dif] `220`</sub> | Elo: [44.20][280818A-elo1] ±1.9<br><sub>WDL:&nbsp;3861,&nbsp;27217,&nbsp;8922<br>nElo: 79.79 ±3.4<br>[\[raw statistics\]][280818A-raw1]</sub> |
| 2018&#8209;08&#8209;28 | [master][280818B-master] vs [Stockfish 9]<br><sub>`Bench: 4413173`<br>Remove PawnsOnBothFlanks<br>[\[differences\]][280818B-dif] `225`</sub> | Elo: [42.37][280818B-elo1] ±1.9<br><sub>WDL:&nbsp;3952,&nbsp;27242,&nbsp;8806<br>nElo: 76.44 ±3.4<br>[\[raw statistics\]][280818B-raw1]</sub> |
| 2018&#8209;09&#8209;01 | [master][010918-master] vs [Stockfish 9]<br><sub>`Bench: 4609645`<br>Re-introduce "keep pawns on both flanks"<br>[\[differences\]][010918-dif] `227`</sub> | Elo: [46.46][010918-elo1] ±1.9<br><sub>WDL:&nbsp;3804,&nbsp;27075,&nbsp;9121<br>nElo: 83.56 ±3.4<br>[\[raw statistics\]][010918-raw1]</sub> |
| 2018&#8209;09&#8209;10 | [master][100918-master] vs [Stockfish 9]<br><sub>`Bench: 4248710`<br>Tweak opposite colored bishops endgame scaling<br>[\[differences\]][100918-dif] `230`</sub> | Elo: [45.47][100918-elo1] ±1.9<br><sub>WDL:&nbsp;3911,&nbsp;26973,&nbsp;9116<br>nElo: 81.36 ±3.4<br>[\[raw statistics\]][100918-raw1]</sub> |
| 2018&#8209;09&#8209;27 | [master][270918-master] vs [Stockfish 9]<br><sub>`Bench: 4059356`<br>Fix two typos in comments<br>[\[differences\]][270918-dif] `235`</sub> | Elo: [46.93][270918-elo1] ±1.9<br><sub>WDL:&nbsp;3883,&nbsp;26864,&nbsp;9253<br>nElo: 83.72 ±3.4<br>[\[raw statistics\]][270918-raw1]</sub> |
| 2018&#8209;10&#8209;14 | [master][141018-master] vs [Stockfish 9]<br><sub>`Bench: 4274207`<br>Simplify check extensions<br>[\[differences\]][141018-dif] `241`</sub> | Elo: [49.01][141018-elo1] ±1.9<br><sub>WDL:&nbsp;3783,&nbsp;26829,&nbsp;9388<br>nElo: 87.49 ±3.4<br>[\[raw statistics\]][141018-raw1]</sub> |
| 2018&#8209;10&#8209;25 | [master][251018-master] vs [Stockfish 9]<br><sub>`Bench: 3314347`<br>On main thread: reduce depth after fail high<br>[\[differences\]][251018-dif] `245`</sub> | Elo: [52.82][251018-elo1] ±1.9<br><sub>WDL:&nbsp;3514,&nbsp;26937,&nbsp;9549<br>nElo: 95.10 ±3.4<br>[\[raw statistics\]][251018-raw1]</sub> |
| 2018&#8209;11&#8209;01 | [master][011118-master] vs [Stockfish 9]<br><sub>`Bench: 3556672`<br>Fix issues from using adjustedDepth too broadly<br>[\[differences\]][011118-dif] `248`</sub> | Elo: [51.68][011118-elo1] ±1.9<br><sub>WDL:&nbsp;3581,&nbsp;26932,&nbsp;9487<br>nElo: 92.90 ±3.4<br>[\[raw statistics\]][011118-raw1]</sub> |
| 2018&#8209;11&#8209;08 | [master][081118-master] vs [Stockfish 9]<br><sub>`Bench: 3647775`<br>Update list of top CPU contributors<br>[\[differences\]][081118-dif] `254`</sub> | Elo: [50.43][081118-elo1] ±1.9<br><sub>WDL:&nbsp;3773,&nbsp;26689,&nbsp;9538<br>nElo: 89.65 ±3.5<br>[\[raw statistics\]][081118-raw1]</sub> |
| 2018&#8209;11&#8209;19 | [master][191118-master] vs [Stockfish 9]<br><sub>`Bench: 3717396`<br>Stockfish 10-beta<br>[\[differences\]][191118-dif] `267`</sub> | Elo: [53.77][191118-elo1] ±1.9<br><sub>WDL:&nbsp;3612,&nbsp;26634,&nbsp;9754<br>nElo: 95.73 ±3.5<br>[\[raw statistics\]][191118-raw1]</sub> |
| 2018&#8209;11&#8209;27 | [master][271118-master] vs [Stockfish 9]<br><sub>`Bench: 3939338`<br>Simplify casting extension<br>[\[differences\]][271118-dif] `274`</sub> | Elo: [54.21][271118-elo1] ±1.9<br><sub>WDL:&nbsp;3562,&nbsp;26685,&nbsp;9753<br>nElo: 96.75 ±3.5<br>[\[raw statistics\]][271118-raw1]</sub> |
| 2018&#8209;11&#8209;29 | [Stockfish 10] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF10RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF10DP]<br><sub>`Bench: 3939338`<br>[\[differences\]][291118-dif] `277`</sub> |

</details>

<details>
  <summary><code>Stockfish 11 Development (2018-11-29 - 2020-01-17)</code></summary><br>

| `Date` | `Version` | `1 Thread` | `8 Threads` |
|:------:|:---------:|:----------:|:-----------:|
| 2018&#8209;12&#8209;06 | [master][061218-master] vs [Stockfish 10]<br><sub>`Bench: 3773021`<br>Revert "pseudo_legal() and MOVE_NONE"<br>[\[differences\]][061218-dif] `8`</sub> | Elo: [4.32][061218-elo1] ±1.7<br><sub>WDL:&nbsp;5033,&nbsp;29437,&nbsp;5530<br>nElo: 8.40 ±3.4<br>[\[raw statistics\]][061218-raw1]</sub> |
| 2018&#8209;12&#8209;13 | [master][131218-master] vs [Stockfish 10]<br><sub>`Bench: 3332460`<br>A combo of parameter tweaks<br>[\[differences\]][131218-dif] `16`</sub> | Elo: [8.06][131218-elo1] ±1.8<br><sub>WDL:&nbsp;5020,&nbsp;29032,&nbsp;5948<br>nElo: 15.41 ±3.4<br>[\[raw statistics\]][131218-raw1]</sub> | Elo: [12.70][131218-elo8] ±1.7<br><sub>WDL:&nbsp;4068,&nbsp;30403,&nbsp;5529<br>nElo: 25.98 ±3.4<br>[\[raw statistics\]][131218-raw8]</sub> |
| 2018&#8209;12&#8209;16 | [master][161218-master] vs [Stockfish 10]<br><sub>`Bench: 3646542`<br>Use stronglyProtected<br>[\[differences\]][161218-dif] `21`</sub> | Elo: [7.85][161218-elo1] ±1.7<br><sub>WDL:&nbsp;5107,&nbsp;30004,&nbsp;6037<br>nElo: 15.10 ±3.4<br>[\[raw statistics\]][161218-raw1]</sub> |
| 2019&#8209;01&#8209;04 | [master][040119-master] vs [Stockfish 10]<br><sub>`Bench: 3559104`<br>Check tablebase files<br>[\[differences\]][040119-dif] `40`</sub> | Elo: [7.20][040119-elo1] ±1.8<br><sub>WDL:&nbsp;5164,&nbsp;28843,&nbsp;5993<br>nElo: 13.64 ±3.4<br>[\[raw statistics\]][040119-raw1]</sub> |
| 2019&#8209;01&#8209;10 | [master][100119-master] vs [Stockfish 10]<br><sub>`Bench: 3739723`<br>Remove pvExact<br>[\[differences\]][100119-dif] `45`</sub> | Elo: [13.14][100119-elo1] ±1.8<br><sub>WDL:&nbsp;4779,&nbsp;28930,&nbsp;6291<br>nElo: 25.03 ±3.4<br>[\[raw statistics\]][100119-raw1]</sub> | Elo: [16.17][100119-elo8] ±1.7<br><sub>WDL:&nbsp;3887,&nbsp;30366,&nbsp;5747<br>nElo: 33.07 ±3.4<br>[\[raw statistics\]][100119-raw8]</sub> |
| 2019&#8209;01&#8209;22 | [master][220119-master] vs [Stockfish 10]<br><sub>`Bench: 3665090`<br>Simplify TrappedRook<br>[\[differences\]][220119-dif] `53`</sub> | Elo: [13.98][220119-elo1] ±1.8<br><sub>WDL:&nbsp;4714,&nbsp;28963,&nbsp;6323<br>nElo: 26.68 ±3.4<br>[\[raw statistics\]][220119-raw1]</sub> |
| 2019&#8209;02&#8209;03 | [master][030219-master] vs [Stockfish 10]<br><sub>`Bench: 3653942`<br>Less king danger if we have a knight<br>[\[differences\]][030219-dif] `61`</sub> | Elo: [17.71][030219-elo1] ±1.8<br><sub>WDL:&nbsp;4624,&nbsp;28715,&nbsp;6661<br>nElo: 33.46 ±3.4<br>[\[raw statistics\]][030219-raw1]</sub> | Elo: [19.77][030219-elo8] ±1.7<br><sub>WDL:&nbsp;3728,&nbsp;30270,&nbsp;6002<br>nElo: 40.32 ±3.4<br>[\[raw statistics\]][030219-raw8]</sub> |
| 2019&#8209;03&#8209;12 | [master][120319-master] vs [Stockfish 10]<br><sub>`Bench: 3318033`<br>Increase thread stack for OS X (#2035)<br>[\[differences\]][120319-dif] `80`</sub> | Elo: [16.58][120319-elo1] ±1.8<br><sub>WDL:&nbsp;4635,&nbsp;28823,&nbsp;6542<br>nElo: 31.46 ±3.4<br>[\[raw statistics\]][120319-raw1]</sub> |
| 2019&#8209;03&#8209;31 | [master][310319-master] vs [Stockfish 10]<br><sub>`Bench: 3548313`<br>Assorted trivial cleanups 3/2019 (#2030)<br>[\[differences\]][310319-dif] `91`</sub> | Elo: [16.58][310319-elo1] ±1.8<br><sub>WDL:&nbsp;4742,&nbsp;28609,&nbsp;6649<br>nElo: 31.16 ±3.4<br>[\[raw statistics\]][310319-raw1]</sub> | Elo: [24.33][310319-elo8] ±1.7<br><sub>WDL:&nbsp;3633,&nbsp;29937,&nbsp;6430<br>nElo: 48.91 ±3.4<br>[\[raw statistics\]][310319-raw8]</sub> |
| 2019&#8209;04&#8209;24 | [master][240419-master] vs [Stockfish 10]<br><sub>`Bench: 3402947`<br>Remove useless initializations (#2115)<br>[\[differences\]][240419-dif] `113`</sub> | Elo: [16.39][240419-elo1] ±1.8<br><sub>WDL:&nbsp;4634,&nbsp;28847,&nbsp;6519<br>nElo: 31.13 ±3.4<br>[\[raw statistics\]][240419-raw1]</sub> |
| 2019&#8209;05&#8209;05 | [master][050519-master] vs [Stockfish 10]<br><sub>`Bench: 3644175`<br>LMR for captures not cracking alpha<br>[\[differences\]][050519-dif] `121`</sub> | Elo: [16.65][050519-elo1] ±1.8<br><sub>WDL:&nbsp;4788,&nbsp;28508,&nbsp;6704<br>nElo: 31.17 ±3.4<br>[\[raw statistics\]][050519-raw1]</sub> |
| 2019&#8209;05&#8209;15 | [master][150519-master] vs [Stockfish 10]<br><sub>`Bench: 3824325`<br>Update failedHighCnt rule #2063<br>[\[differences\]][150519-dif] `136`</sub> | Elo: [19.76][150519-elo1] ±1.8<br><sub>WDL:&nbsp;4665,&nbsp;28397,&nbsp;6938<br>nElo: 36.86 ±3.4<br>[\[raw statistics\]][150519-raw1]</sub> | Elo: [28.93][150519-elo8] ±1.7<br><sub>WDL:&nbsp;3573,&nbsp;29531,&nbsp;6896<br>nElo: 57.18 ±3.4<br>[\[raw statistics\]][150519-raw8]</sub> |
| 2019&#8209;06&#8209;09 | [master][090619-master] vs [Stockfish 10]<br><sub>`Bench: 3424592`<br>Remove depth condition for ttPv (#2166)<br>[\[differences\]][090619-dif] `151`</sub> | Elo: [19.87][090619-elo1] ±1.9<br><sub>WDL:&nbsp;4796,&nbsp;28123,&nbsp;7081<br>nElo: 36.62 ±3.4<br>[\[raw statistics\]][090619-raw1]</sub> |
| 2019&#8209;06&#8209;20 | [master][200619-master] vs [Stockfish 10]<br><sub>`Bench: 3398333`<br>More bonus for free passed pawn<br>[\[differences\]][200619-dif] `161`</sub> | Elo: [24.06][200619-elo1] ±1.8<br><sub>WDL:&nbsp;4547,&nbsp;28140,&nbsp;7313<br>nElo: 44.48 ±3.4<br>[\[raw statistics\]][200619-raw1]</sub> | Elo: [30.76][200619-elo8] ±1.7<br><sub>WDL:&nbsp;3462,&nbsp;29544,&nbsp;6994<br>nElo: 60.92 ±3.4<br>[\[raw statistics\]][200619-raw8]</sub> |
| 2019&#8209;06&#8209;27 | [master][270619-master] vs [Stockfish 10]<br><sub>`Bench: 3633546`<br>Bonus for double attacks<br>[\[differences\]][270619-dif] `167`</sub> | Elo: [22.75][270619-elo1] ±1.9<br><sub>WDL:&nbsp;4644,&nbsp;28096,&nbsp;7260<br>nElo: 41.95 ±3.4<br>[\[raw statistics\]][270619-raw1]</sub> |
| 2019&#8209;07&#8209;11 | [master][110719-master] vs [Stockfish 10]<br><sub>`Bench: 3206912`<br>Assorted trivial cleanups June 2019<br>[\[differences\]][110719-dif] `176`</sub> | Elo: [24.39][110719-elo1] ±1.9<br><sub>WDL:&nbsp;4596,&nbsp;28005,&nbsp;7399<br>nElo: 44.83 ±3.4<br>[\[raw statistics\]][110719-raw1]</sub> |
| 2019&#8209;07&#8209;25 | [master][250719-master] vs [Stockfish 10]<br><sub>`Bench: 3935523`<br>Tweak of SEE pruning condition<br>[\[differences\]][250719-dif] `192`</sub> | Elo: [25.72][250719-elo1] ±1.9<br><sub>WDL:&nbsp;4519,&nbsp;28006,&nbsp;7475<br>nElo: 47.32 ±3.4<br>[\[raw statistics\]][250719-raw1]</sub> | Elo: [37.49][250719-elo8] ±1.7<br><sub>WDL:&nbsp;3225,&nbsp;29251,&nbsp;7524<br>nElo: 73.63 ±3.4<br>[\[raw statistics\]][250719-raw8]</sub> |
| 2019&#8209;08&#8209;14 | [master][140819-master] vs [Stockfish 10]<br><sub>`Bench: 4139590`<br>Tweak unsafe checks<br>[\[differences\]][140819-dif] `198`</sub> | Elo: [32.24][140819-elo1] ±1.9<br><sub>WDL:&nbsp;4168,&nbsp;27963,&nbsp;7869<br>nElo: 59.45 ±3.4<br>[\[raw statistics\]][140819-raw1]</sub> |
| 2019&#8209;08&#8209;26 | [master][260819-master] vs [Stockfish 10]<br><sub>`Bench: 3568210`<br>Tweak Late Move Reduction at root<br>[\[differences\]][260819-dif] `207`</sub> | Elo: [35.63][260819-elo1] ±1.9<br><sub>WDL:&nbsp;4021,&nbsp;27870,&nbsp;8109<br>nElo: 65.62 ±3.4<br>[\[raw statistics\]][260819-raw1]</sub> | Elo: [44.52][260819-elo8] ±1.8<br><sub>WDL:&nbsp;2958,&nbsp;28986,&nbsp;8056<br>nElo: 86.99 ±3.4<br>[\[raw statistics\]][260819-raw8]</sub> |
| 2019&#8209;09&#8209;12 | [master][120919-master] vs [Stockfish 10]<br><sub>`Bench: 3954190`<br>Scale down complexity<br>[\[differences\]][120919-dif] `211`</sub> | Elo: [39.10][120919-elo1] ±1.9<br><sub>WDL:&nbsp;3824,&nbsp;27869,&nbsp;8307<br>nElo: 72.22 ±3.4<br>[\[raw statistics\]][120919-raw1]</sub> |
| 2019&#8209;09&#8209;16 | [master][160919-master] vs [Stockfish 10]<br><sub>`Bench: 4272173`<br>Raise stack size to 8MB for pthreads<br>[\[differences\]][160919-dif] `218`</sub> | Elo: [37.63][160919-elo1] ±1.9<br><sub>WDL:&nbsp;4007,&nbsp;27670,&nbsp;8323<br>nElo: 68.83 ±3.4<br>[\[raw statistics\]][160919-raw1]</sub> | Elo: [46.57][160919-elo8] ±1.8<br><sub>WDL:&nbsp;2764,&nbsp;28492,&nbsp;7994<br>nElo: 91.44 ±3.4<br>[\[raw statistics\]][160919-raw8]</sub> |
| 2019&#8209;09&#8209;24 | [master][240919-master] vs [Stockfish 10]<br><sub>`Bench: 3618154`<br>Increase weight for supported pawns<br>[\[differences\]][240919-dif] `226`</sub> | Elo: [38.97][240919-elo1] ±1.9<br><sub>WDL:&nbsp;3857,&nbsp;27818,&nbsp;8325<br>nElo: 71.81 ±3.4<br>[\[raw statistics\]][240919-raw1]</sub> |
| 2019&#8209;10&#8209;05 | [master][051019-master] vs [Stockfish 10]<br><sub>`Bench: 4131643`<br>Introduce separate counter-move tables<br>[\[differences\]][051019-dif] `239`</sub> | Elo: [41.96][051019-elo1] ±1.9<br><sub>WDL:&nbsp;3746,&nbsp;27701,&nbsp;8553<br>nElo: 77.13 ±3.4<br>[\[raw statistics\]][051019-raw1]</sub> | Elo: [51.76][051019-elo8] ±1.8<br><sub>WDL:&nbsp;2628,&nbsp;28829,&nbsp;8543<br>nElo: 101.26 ±3.4<br>[\[raw statistics\]][051019-raw8]</sub> |
| 2019&#8209;10&#8209;18 | [master][181019-master] vs [Stockfish 10]<br><sub>`Bench: 4423737`<br>Current capture for Counter-Move history<br>[\[differences\]][181019-dif] `247`</sub> | Elo: [44.63][181019-elo1] ±1.9<br><sub>WDL:&nbsp;3641,&nbsp;27608,&nbsp;8751<br>nElo: 81.93 ±3.4<br>[\[raw statistics\]][181019-raw1]</sub> |
| 2019&#8209;11&#8209;04 | [master][041119-master] vs [Stockfish 10]<br><sub>`Bench: 4707799`<br>Rook PSQT Tuned<br>[\[differences\]][041119-dif] `259`</sub> | Elo: [42.20][041119-elo1] ±1.9<br><sub>WDL:&nbsp;3686,&nbsp;27793,&nbsp;8521<br>nElo: 77.91 ±3.4<br>[\[raw statistics\]][041119-raw1]</sub> | Elo: [52.90][041119-elo8] ±1.8<br><sub>WDL:&nbsp;2601,&nbsp;28754,&nbsp;8645<br>nElo: 103.29 ±3.4<br>[\[raw statistics\]][041119-raw8]</sub> |
| 2019&#8209;11&#8209;14 | [master][141119-master] vs [Stockfish 10]<br><sub>`Bench: 4532366`<br>Prune before extension<br>[\[differences\]][141119-dif] `266`</sub> | Elo: [43.12][141119-elo1] ±1.9<br><sub>WDL:&nbsp;3676,&nbsp;27709,&nbsp;8615<br>nElo: 79.39 ±3.4<br>[\[raw statistics\]][141119-raw1]</sub> |
| 2019&#8209;11&#8209;21 | [master][211119-master] vs [Stockfish 10]<br><sub>`Bench: 5067870`<br>Do lmr for more captures<br>[\[differences\]][211119-dif] `271`</sub> | Elo: [46.56][211119-elo1] ±1.5<br><sub>WDL:&nbsp;5306,&nbsp;41395,&nbsp;13299<br>nElo: 85.60 ±2.8<br>[\[raw statistics\]][211119-raw1]</sub> | Elo: [53.93][211119-elo8] ±1.8<br><sub>WDL:&nbsp;2502,&nbsp;28837,&nbsp;8661<br>nElo: 105.86 ±3.4<br>[\[raw statistics\]][211119-raw8]</sub> |
| 2019&#8209;12&#8209;02 | [master][021219-master] vs [Stockfish 10]<br><sub>`Bench: 5122362`<br>UnblockedStorm tuned<br>[\[differences\]][021219-dif] `278`</sub> | Elo: [44.88][021219-elo1] ±1.5<br><sub>WDL:&nbsp;5273,&nbsp;41746,&nbsp;12981<br>nElo: 83.21 ±2.8<br>[\[raw statistics\]][021219-raw1]</sub> |
| 2019&#8209;12&#8209;10 | [master][101219-master] vs [Stockfish 10]<br><sub>`Bench: 5371271`<br>Refine improving-logic<br>[\[differences\]][101219-dif] `288`</sub> | Elo: [47.27][101219-elo1] ±1.5<br><sub>WDL:&nbsp;5329,&nbsp;41229,&nbsp;13442<br>nElo: 86.56 ±2.8<br>[\[raw statistics\]][101219-raw1]</sub> | Elo: [56.62][101219-elo8] ±1.8<br><sub>WDL:&nbsp;2365,&nbsp;28809,&nbsp;8826<br>nElo: 111.42 ±3.4<br>[\[raw statistics\]][101219-raw8]</sub> |
| 2020&#8209;01&#8209;07 | [master][070120-master] vs [Stockfish 10]<br><sub>`Bench: 4747984`<br>Tuned nullmove search<br>[\[differences\]][070120-dif] `294`</sub> | Elo: [51.50][070120-elo1] ±1.5<br><sub>Ptnml:&nbsp;160,&nbsp;3173,&nbsp;15729,&nbsp;9546,&nbsp;1387<br>nElo: 98.05 ±2.8<br>PairsRatio: 3.28<br>[\[raw statistics\]][070120-raw1]</sub> | Elo: [58.15][070120-elo8] ±1.7<br><sub>Ptnml:&nbsp;36,&nbsp;1527,&nbsp;11059,&nbsp;6509,&nbsp;860<br>nElo: 118.69 ±3.4<br>PairsRatio: 4.71<br>[\[raw statistics\]][070120-raw8]</sub> |
| 2020&#8209;01&#8209;17 | [master][170120-master] vs [Stockfish 10]<br><sub>`Bench: 5156767`<br>Stockfish 11<br>[\[differences\]][170120-dif] `307`</sub> | Elo: [53.59][170120-elo1] ±1.5<br><sub>Ptnml:&nbsp;138,&nbsp;2988,&nbsp;15833,&nbsp;9631,&nbsp;1407<br>nElo: 102.99 ±2.8<br>PairsRatio: 3.53<br>[\[raw statistics\]][170120-raw1]</sub> | Elo: [58.07][170120-elo8] ±1.7<br><sub>Ptnml:&nbsp;36,&nbsp;1478,&nbsp;11159,&nbsp;6463,&nbsp;854<br>nElo: 119.25 ±3.4<br>PairsRatio: 4.83<br>[\[raw statistics\]][170120-raw8]</sub> |
| 2020&#8209;01&#8209;17 | [Stockfish 11] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF11RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF11DP]<br><sub>`Bench: 5156767`<br>[\[differences\]][170120-dif] `307`</sub> |

</details>

<details>
  <summary><code>Stockfish 12 Development (2020-01-17 - 2020-09-02)</code></summary><br>

| `Date` | `Version` | `1 Thread` | `8 Threads` |
|:------:|:---------:|:----------:|:-----------:|
| 2020&#8209;01&#8209;28 | [master][280120-master] vs [Stockfish 11]<br><sub>`Bench: 5545845`<br>More bonus for bestMoves<br>[\[differences\]][280120-dif] `16`</sub> | Elo: [-2.47][280120-elo1] ±1.3<br><sub>Ptnml:&nbsp;330,&nbsp;5657,&nbsp;18424,&nbsp;5285,&nbsp;303<br>nElo: -5.21 ±2.8<br>PairsRatio: 0.93<br>[\[raw statistics\]][280120-raw1]</sub> |
| 2020&#8209;01&#8209;31 | [master][310120-master] vs [Stockfish 11]<br><sub>`Bench: 5153165`<br>Revert 5 recent patches<br>[\[differences\]][310120-dif] `19`</sub> | Elo: [0.85][310120-elo1] ±1.3<br><sub>Ptnml:&nbsp;306,&nbsp;5327,&nbsp;18593,&nbsp;5457,&nbsp;314<br>nElo: 1.80 ±2.8<br>PairsRatio: 1.02<br>[\[raw statistics\]][310120-raw1]</sub> |
| 2020&#8209;02&#8209;27 | [master][270220-master] vs [Stockfish 11]<br><sub>`Bench: 4923286`<br>Weak queen protection<br>[\[differences\]][270220-dif] `32`</sub> | Elo: [1.33][270220-elo1] ±1.3<br><sub>Ptnml:&nbsp;327,&nbsp;5308,&nbsp;18486,&nbsp;5567,&nbsp;312<br>nElo: 2.80 ±2.8<br>PairsRatio: 1.04<br>[\[raw statistics\]][270220-raw1]</sub> | Elo: [0.51][270220-elo8] ±1.4<br><sub>Ptnml:&nbsp;118,&nbsp;3072,&nbsp;13560,&nbsp;3133,&nbsp;117<br>nElo: 1.21 ±3.4<br>PairsRatio: 1.02<br>[\[raw statistics\]][270220-raw8]</sub> |
| 2020&#8209;03&#8209;20 | [master][200320-master] vs [Stockfish 11]<br><sub>`Bench: 5398277`<br>Adjust singular extension search depth<br>[\[differences\]][200320-dif] `48`</sub> | Elo: [2.94][200320-elo1] ±1.3<br><sub>Ptnml:&nbsp;351,&nbsp;5099,&nbsp;18580,&nbsp;5631,&nbsp;339<br>nElo: 6.21 ±2.8<br>PairsRatio: 1.10<br>[\[raw statistics\]][200320-raw1]</sub> |
| 2020&#8209;04&#8209;07 | [master][070420-master] vs [Stockfish 11]<br><sub>`Bench: 4417023`<br>Introduce capture history pruning<br>[\[differences\]][070420-dif] `63`</sub> | Elo: [5.74][070420-elo1] ±1.3<br><sub>Ptnml:&nbsp;274,&nbsp;5058,&nbsp;18460,&nbsp;5818,&nbsp;390<br>nElo: 12.11 ±2.8<br>PairsRatio: 1.16<br>[\[raw statistics\]][070420-raw1]</sub> | Elo: [6.49][070420-elo8] ±1.5<br><sub>Ptnml:&nbsp;113,&nbsp;2854,&nbsp;13369,&nbsp;3501,&nbsp;163<br>nElo: 15.05 ±3.4<br>PairsRatio: 1.23<br>[\[raw statistics\]][070420-raw8]</sub> |
| 2020&#8209;04&#8209;16 | [master][160420-master] vs [Stockfish 11]<br><sub>`Bench: 4958027`<br>Remove one condition in probcut TTmove<br>[\[differences\]][160420-dif] `76`</sub> | Elo: [11.33][160420-elo1] ±1.3<br><sub>Ptnml:&nbsp;281,&nbsp;4681,&nbsp;18282,&nbsp;6313,&nbsp;443<br>nElo: 23.65 ±2.8<br>PairsRatio: 1.36<br>[\[raw statistics\]][160420-raw1]</sub> |
| 2020&#8209;05&#8209;02 | [master][020520-master] vs [Stockfish 11]<br><sub>`Bench: 4247490`<br>Fishtest Tuning Framework<br>[\[differences\]][020520-dif] `84`</sub> | Elo: [15.21][020520-elo1] ±1.3<br><sub>Ptnml:&nbsp;236,&nbsp;4370,&nbsp;18388,&nbsp;6545,&nbsp;461<br>nElo: 32.08 ±2.8<br>PairsRatio: 1.52<br>[\[raw statistics\]][020520-raw1]</sub> | Elo: [16.71][020520-elo8] ±1.5<br><sub>Ptnml:&nbsp;105,&nbsp;2457,&nbsp;13100,&nbsp;4087,&nbsp;251<br>nElo: 37.85 ±3.4<br>PairsRatio: 1.69<br>[\[raw statistics\]][020520-raw8]</sub> |
| 2020&#8209;05&#8209;21 | [master][210520-master] vs [Stockfish 11]<br><sub>`Bench: 4778956`<br>Tweak knight mobility<br>[\[differences\]][210520-dif] `100`</sub> | Elo: [15.97][210520-elo1] ±1.3<br><sub>Ptnml:&nbsp;230,&nbsp;4544,&nbsp;17963,&nbsp;6766,&nbsp;497<br>nElo: 33.08 ±2.8<br>PairsRatio: 1.52<br>[\[raw statistics\]][210520-raw1]</sub> |
| 2020&#8209;06&#8209;06 | [master][060620-master] vs [Stockfish 11]<br><sub>`Bench: 4582693`<br>Use lowply-history also on low depths<br>[\[differences\]][060620-dif] `117`</sub> | Elo: [19.45][060620-elo1] ±1.4<br><sub>Ptnml:&nbsp;250,&nbsp;4360,&nbsp;17761,&nbsp;7042,&nbsp;587<br>nElo: 39.70 ±2.8<br>PairsRatio: 1.65<br>[\[raw statistics\]][060620-raw1]</sub> | Elo: [23.70][060620-elo8] ±1.5<br><sub>Ptnml:&nbsp;88,&nbsp;2142,&nbsp;12987,&nbsp;4524,&nbsp;259<br>nElo: 53.99 ±3.4<br>PairsRatio: 2.14<br>[\[raw statistics\]][060620-raw8]</sub> |
| 2020&#8209;06&#8209;13 | [master][130620-master] vs [Stockfish 11]<br><sub>`Bench: 4246971`<br>Tuned values for search constants<br>[\[differences\]][130620-dif] `127`</sub> | Elo: [20.91][130620-elo1] ±1.4<br><sub>Ptnml:&nbsp;195,&nbsp;4263,&nbsp;17878,&nbsp;7069,&nbsp;595<br>nElo: 43.14 ±2.8<br>PairsRatio: 1.72<br>[\[raw statistics\]][130620-raw1]</sub> | Elo: [24.86][130620-elo8] ±1.5<br><sub>Ptnml:&nbsp;81,&nbsp;2088,&nbsp;13016,&nbsp;4523,&nbsp;292<br>nElo: 56.58 ±3.4<br>PairsRatio: 2.22<br>[\[raw statistics\]][130620-raw8]</sub> |
| 2020&#8209;06&#8209;29 | [master][290620-master] vs [Stockfish 11]<br><sub>`Bench: 4523573`<br>Tweak single queen endgame scaling<br>[\[differences\]][290620-dif] `148`</sub> | Elo: [25.67][290620-elo1] ±1.3<br><sub>Ptnml:&nbsp;192,&nbsp;3878,&nbsp;17888,&nbsp;7397,&nbsp;645<br>nElo: 53.10 ±2.8<br>PairsRatio: 1.98<br>[\[raw statistics\]][290620-raw1]</sub> |
| 2020&#8209;07&#8209;17 | [master][170720-master] vs [Stockfish 11]<br><sub>`Bench: 4578298`<br>Do not overwrite valuable TT data<br>[\[differences\]][170720-dif] `163`</sub> | Elo: [26.44][170720-elo1] ±1.3<br><sub>Ptnml:&nbsp;192,&nbsp;3800,&nbsp;17928,&nbsp;7418,&nbsp;662<br>nElo: 54.75 ±2.8<br>PairsRatio: 2.02<br>[\[raw statistics\]][170720-raw1]</sub> | Elo: [30.71][170720-elo8] ±1.5<br><sub>Ptnml:&nbsp;63,&nbsp;1923,&nbsp;12759,&nbsp;4935,&nbsp;320<br>nElo: 69.50 ±3.4<br>PairsRatio: 2.65<br>[\[raw statistics\]][170720-raw8]</sub> |
| 2020&#8209;07&#8209;31 | [master][310720-master] vs [Stockfish 11]<br><sub>`Bench: 4746616`<br>Tweak cutnode reduction<br>[\[differences\]][310720-dif] `167`</sub> | Elo: [25.49][310720-elo1] ±1.4<br><sub>Ptnml:&nbsp;203,&nbsp;3910,&nbsp;17861,&nbsp;7342,&nbsp;684<br>nElo: 52.38 ±2.8<br>PairsRatio: 1.95<br>[\[raw statistics\]][310720-raw1]</sub> | Elo: [32.39][310720-elo8] ±1.5<br><sub>Ptnml:&nbsp;69,&nbsp;1829,&nbsp;12779,&nbsp;4961,&nbsp;362<br>nElo: 73.03 ±3.4<br>PairsRatio: 2.80<br>[\[raw statistics\]][310720-raw8]</sub> |
| 2020&#8209;08&#8209;06 | [master][060820-master] vs [Stockfish 11]<br><sub>`Bench: 4746616`<br>Add NNUE evaluation<br>[\[differences\]][060820-dif] `168`</sub> | Elo: [83.42][060820-elo1] ±1.7<br><sub>Ptnml:&nbsp;172,&nbsp;2656,&nbsp;12724,&nbsp;11761,&nbsp;2687<br>nElo: 144.72 ±3.0<br>PairsRatio: 5.11<br>[\[raw statistics\]][060820-raw1]</sub> | Elo: [86.10][060820-elo8] ±1.9<br><sub>Ptnml:&nbsp;36,&nbsp;1192,&nbsp;9342,&nbsp;7881,&nbsp;1549<br>nElo: 163.20 ±3.6<br>PairsRatio: 7.68<br>[\[raw statistics\]][060820-raw8]</sub> |
| 2020&#8209;08&#8209;07 | [Add NNUE evaluation][060820-master] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SFNNUERN]<br><sub>`Bench: 4746616`<br>[\[differences\]][070820-dif] `168`</sub> |
| 2020&#8209;08&#8209;08 | [master][080820-master] vs [Stockfish 11]<br><sub>`Bench: 4084753`<br>LMR search tweak<br>[\[differences\]][080820-dif] `185`</sub> | Elo: [106.20][080820-elo1] ±1.7<br><sub>Ptnml:&nbsp;67,&nbsp;1716,&nbsp;11867,&nbsp;13060,&nbsp;3290<br>nElo: 189.91 ±3.2<br>PairsRatio: 9.17<br>[\[raw statistics\]][080820-raw1]</sub> |
| 2020&#8209;08&#8209;11 | [master][110820-master] vs [Stockfish 11]<br><sub>`Bench: 4290577`<br>This commit enables a mixed bench<br>[\[differences\]][110820-dif] `205`</sub> | Elo: [125.60][110820-elo1] ±1.7<br><sub>Ptnml:&nbsp;48,&nbsp;1240,&nbsp;10613,&nbsp;14070,&nbsp;4029<br>nElo: 224.82 ±3.3<br>PairsRatio: 14.05<br>[\[raw statistics\]][110820-raw1]</sub> | Elo: [111.78][110820-elo8] ±1.9<br><sub>Ptnml:&nbsp;11,&nbsp;591,&nbsp;8286,&nbsp;9168,&nbsp;1944<br>nElo: 217.93 ±3.8<br>PairsRatio: 18.46<br>[\[raw statistics\]][110820-raw8]</sub> |
| 2020&#8209;08&#8209;18 | [master][180820-master] vs [Stockfish 11]<br><sub>`Bench: 4026216`<br>Fix Makefile typo<br>[\[differences\]][180820-dif] `226`</sub> | Elo: [121.54][180820-elo1] ±1.7<br><sub>Ptnml:&nbsp;52,&nbsp;1373,&nbsp;10930,&nbsp;13640,&nbsp;4005<br>nElo: 215.22 ±3.3<br>PairsRatio: 12.38<br>[\[raw statistics\]][180820-raw1]</sub> | Elo: [111.40][180820-elo8] ±1.9<br><sub>Ptnml:&nbsp;20,&nbsp;700,&nbsp;8128,&nbsp;9161,&nbsp;1991<br>nElo: 213.20 ±3.8<br>PairsRatio: 15.49<br>[\[raw statistics\]][180820-raw8]</sub> |
| 2020&#8209;08&#8209;30 | [master][300820-master] vs [Stockfish 11]<br><sub>`Bench: 3736029`<br>Update parameters in classical evaluation<br>[\[differences\]][300820-dif] `255`</sub> | Elo: [130.96][300820-elo1] ±1.7<br><sub>Ptnml:&nbsp;44,&nbsp;1161,&nbsp;10305,&nbsp;14128,&nbsp;4362<br>nElo: 232.58 ±3.4<br>PairsRatio: 15.34<br>[\[raw statistics\]][300820-raw1]</sub> |
| 2020&#8209;09&#8209;02 | [master][020920-master] vs [Stockfish 11]<br><sub>`Bench: 3624569`<br>Stockfish 12<br>[\[differences\]][020920-dif] `262`</sub> | Elo: [133.65][020920-elo1] ±1.7<br><sub>Ptnml:&nbsp;32,&nbsp;1088,&nbsp;10158,&nbsp;14286,&nbsp;4436<br>nElo: 238.67 ±3.4<br>PairsRatio: 16.72<br>[\[raw statistics\]][020920-raw1]</sub> | Elo: [117.62][020920-elo8] ±1.9<br><sub>Ptnml:&nbsp;10,&nbsp;562,&nbsp;8016,&nbsp;9195,&nbsp;2217<br>nElo: 224.93 ±3.8<br>PairsRatio: 19.95<br>[\[raw statistics\]][020920-raw8]</sub> |
| 2020&#8209;09&#8209;02 | [Stockfish 12] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF12RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF12DP]<br><sub>`Bench: 3624569`<br>[\[differences\]][020920-dif] `262`</sub> |

</details>

<details>
  <summary><code>Stockfish 13 Development (2020-09-02 - 2021-02-18)</code></summary><br>

| `Date` | `Version` | `1 Thread` | `8 Threads` |
|:------:|:---------:|:----------:|:-----------:|
| 2020&#8209;09&#8209;08 | [master][080920-master] vs [Stockfish 12]<br><sub>`Bench: 4161067`<br>Double probability of using classical eval<br>[\[differences\]][080920-dif] `10`</sub> | Elo: [6.49][080920-elo1] ±1.0<br><sub>Ptnml:&nbsp;85,&nbsp;3319,&nbsp;22112,&nbsp;4359,&nbsp;125<br>nElo: 17.26 ±2.8<br>PairsRatio: 1.32<br>[\[raw statistics\]][080920-raw1]</sub> |
| 2020&#8209;09&#8209;21 | [master][210920-master] vs [Stockfish 12]<br><sub>`Bench: 3973739`<br>Add large page support for NNUE weights<br>[\[differences\]][210920-dif] `21`</sub> | Elo: [13.88][210920-elo1] ±1.0<br><sub>Ptnml:&nbsp;49,&nbsp;2767,&nbsp;22106,&nbsp;4896,&nbsp;182<br>nElo: 37.07 ±2.8<br>PairsRatio: 1.80<br>[\[raw statistics\]][210920-raw1]</sub> | Elo: [8.97][210920-elo8] ±1.1<br><sub>Ptnml:&nbsp;15,&nbsp;1474,&nbsp;16020,&nbsp;2445,&nbsp;46<br>nElo: 27.99 ±3.4<br>PairsRatio: 1.67<br>[\[raw statistics\]][210920-raw8]</sub> |
| 2020&#8209;09&#8209;28 | [master][280920-master] vs [Stockfish 12]<br><sub>`Bench: 3776081`<br>Include pawns in NNUE scaling<br>[\[differences\]][280920-dif] `33`</sub> | Elo: [23.15][280920-elo1] ±1.0<br><sub>Ptnml:&nbsp;38,&nbsp;1945,&nbsp;22217,&nbsp;5587,&nbsp;213<br>nElo: 63.29 ±2.7<br>PairsRatio: 2.92<br>[\[raw statistics\]][280920-raw1]</sub> |
| 2020&#8209;10&#8209;18 | [master][181020-master] vs [Stockfish 12]<br><sub>`Bench: 4066972`<br>Do more reductions for late quiet moves<br>[\[differences\]][181020-dif] `41`</sub> | Elo: [24.09][181020-elo1] ±1.0<br><sub>Ptnml:&nbsp;43,&nbsp;2023,&nbsp;21889,&nbsp;5827,&nbsp;218<br>nElo: 64.60 ±2.7<br>PairsRatio: 2.93<br>[\[raw statistics\]][181020-raw1]</sub> | Elo: [21.17][181020-elo8] ±1.1<br><sub>Ptnml:&nbsp;12,&nbsp;908,&nbsp;15789,&nbsp;3216,&nbsp;75<br>nElo: 65.43 ±3.2<br>PairsRatio: 3.58<br>[\[raw statistics\]][181020-raw8]</sub> |
| 2020&#8209;11&#8209;01 | [master][011120-master] vs [Stockfish 12]<br><sub>`Bench: 3517795`<br>Update default net to nn-cb26f10b1fd9.nnue<br>[\[differences\]][011120-dif] `48`</sub> | Elo: [28.02][011120-elo1] ±1.1<br><sub>Ptnml:&nbsp;63,&nbsp;2079,&nbsp;21107,&nbsp;6469,&nbsp;282<br>nElo: 71.59 ±2.7<br>PairsRatio: 3.15<br>[\[raw statistics\]][011120-raw1]</sub> |
| 2020&#8209;11&#8209;15 | [master][151120-master] vs [Stockfish 12]<br><sub>`Bench: 3597730`<br>Rook Mobility Tweak<br>[\[differences\]][151120-dif] `60`</sub> | Elo: [29.99][151120-elo1] ±1.0<br><sub>Ptnml:&nbsp;32,&nbsp;1667,&nbsp;21658,&nbsp;6389,&nbsp;254<br>nElo: 80.38 ±2.7<br>PairsRatio: 3.91<br>[\[raw statistics\]][151120-raw1]</sub> | Elo: [25.49][151120-elo8] ±1.1<br><sub>Ptnml:&nbsp;10,&nbsp;799,&nbsp;15532,&nbsp;3570,&nbsp;89<br>nElo: 77.27 ±3.2<br>PairsRatio: 4.52<br>[\[raw statistics\]][151120-raw8]</sub> |
| 2020&#8209;11&#8209;29 | [master][291120-master] vs [Stockfish 12]<br><sub>`Bench: 3561701`<br>Update default net to nn-62ef826d1a6d.nnue<br>[\[differences\]][291120-dif] `72`</sub> | Elo: [30.61][291120-elo1] ±1.0<br><sub>Ptnml:&nbsp;19,&nbsp;1645,&nbsp;21655,&nbsp;6407,&nbsp;274<br>nElo: 82.09 ±2.7<br>PairsRatio: 4.02<br>[\[raw statistics\]][291120-raw1]</sub> |
| 2020&#8209;12&#8209;14 | [master][141220-master] vs [Stockfish 12]<br><sub>`Bench: 4050630`<br>Increase reduction in case of stable best move<br>[\[differences\]][141220-dif] `79`</sub> | Elo: [32.09][141220-elo1] ±1.0<br><sub>Ptnml:&nbsp;33,&nbsp;1581,&nbsp;21474,&nbsp;6651,&nbsp;261<br>nElo: 85.57 ±2.7<br>PairsRatio: 4.28<br>[\[raw statistics\]][141220-raw1]</sub> | Elo: [27.50][141220-elo8] ±1.1<br><sub>Ptnml:&nbsp;10,&nbsp;706,&nbsp;15480,&nbsp;3723,&nbsp;81<br>nElo: 83.75 ±3.1<br>PairsRatio: 5.31<br>[\[raw statistics\]][141220-raw8]</sub> |
| 2020&#8209;12&#8209;31 | [master][311220-master] vs [Stockfish 12]<br><sub>`Bench: 4109336`<br>WeakUnopposed penalty for backwards<br>[\[differences\]][311220-dif] `89`</sub> | Elo: [33.71][311220-elo1] ±1.0<br><sub>Ptnml:&nbsp;23,&nbsp;1475,&nbsp;21475,&nbsp;6730,&nbsp;297<br>nElo: 90.01 ±2.6<br>PairsRatio: 4.69<br>[\[raw statistics\]][311220-raw1]</sub> |
| 2021&#8209;01&#8209;13 | [master][130121-master] vs [Stockfish 12]<br><sub>`Bench: 4287509`<br>Optimize generate_moves<br>[\[differences\]][130121-dif] `101`</sub> | Elo: [32.40][130121-elo1] ±1.0<br><sub>Ptnml:&nbsp;31,&nbsp;1487,&nbsp;21588,&nbsp;6660,&nbsp;234<br>nElo: 87.55 ±2.7<br>PairsRatio: 4.54<br>[\[raw statistics\]][130121-raw1]</sub> | Elo: [28.29][130121-elo8] ±1.1<br><sub>Ptnml:&nbsp;10,&nbsp;671,&nbsp;15468,&nbsp;3761,&nbsp;90<br>nElo: 86.06 ±3.1<br>PairsRatio: 5.65<br>[\[raw statistics\]][130121-raw8]</sub> |
| 2021&#8209;02&#8209;15 | [master][150221-master] vs [Stockfish 12]<br><sub>`Bench: 3766422`<br>Small trivial clean-ups, February 2021<br>[\[differences\]][150221-dif] `121`</sub> | Elo: [36.03][150221-elo1] ±1.1<br><sub>Ptnml:&nbsp;29,&nbsp;1395,&nbsp;21210,&nbsp;7079,&nbsp;287<br>nElo: 95.63 ±2.7<br>PairsRatio: 5.17<br>[\[raw statistics\]][150221-raw1]</sub> | Elo: [29.08][150221-elo8] ±1.1<br><sub>Ptnml:&nbsp;6,&nbsp;626,&nbsp;15476,&nbsp;3806,&nbsp;86<br>nElo: 89.08 ±3.1<br>PairsRatio: 6.16<br>[\[raw statistics\]][150221-raw8]</sub> |
| 2021&#8209;02&#8209;18 | [Stockfish 13] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF13RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF13DP]<br><sub>`Bench: 3766422`<br>[\[differences\]][180221-dif] `123`</sub> |

</details>

<details>
  <summary><code>Stockfish 14 Development (2021-02-18 - 2021-07-02)</code></summary><br>

| `Date` | `Version` | `1 Thread` | `8 Threads` |
|:------:|:---------:|:----------:|:-----------:|
| 2021&#8209;02&#8209;26 | [master][260221-master] vs [Stockfish 13]<br><sub>`Bench: 5037279`<br>Introduce DistanceFromPV<br>[\[differences\]][260221-dif] `4`</sub> | Elo: [1.34][260221-elo1] ±0.8<br><sub>Ptnml:&nbsp;28,&nbsp;2367,&nbsp;24980,&nbsp;2596,&nbsp;29<br>nElo: 4.55 ±2.8<br>PairsRatio: 1.10<br>[\[raw statistics\]][260221-raw1]</sub> |
| 2021&#8209;03&#8209;24 | [master][240321-master] vs [Stockfish 13]<br><sub>`Bench: 4339126`<br>Small cleanups (march 2021)<br>[\[differences\]][240321-dif] `18`</sub> | Elo: [0.61][240321-elo1] ±0.8<br><sub>Ptnml:&nbsp;18,&nbsp;2457,&nbsp;24938,&nbsp;2575,&nbsp;12<br>nElo: 2.09 ±2.8<br>PairsRatio: 1.05<br>[\[raw statistics\]][240321-raw1]</sub> |
| 2021&#8209;04&#8209;15 | [master][150421-master] vs [Stockfish 13]<br><sub>`Bench: 4503918`<br>Use classical eval for Bishop vs Pawns<br>[\[differences\]][150421-dif] `29`</sub> | Elo: [1.47][150421-elo1] ±0.8<br><sub>Ptnml:&nbsp;39,&nbsp;2384,&nbsp;24886,&nbsp;2667,&nbsp;24<br>nElo: 4.93 ±2.8<br>PairsRatio: 1.11<br>[\[raw statistics\]][150421-raw1]</sub> | Elo: [0.89][150421-elo8] ±0.9<br><sub>Ptnml:&nbsp;11,&nbsp;1279,&nbsp;17318,&nbsp;1381,&nbsp;11<br>nElo: 3.38 ±3.4<br>PairsRatio: 1.08<br>[\[raw statistics\]][150421-raw8]</sub> |
| 2021&#8209;05&#8209;22 | [master][220521-master] vs [Stockfish 13]<br><sub>`Bench: 3856635`<br>Sometimes change the balance<br>[\[differences\]][220521-dif] `62`</sub> | Elo: [10.12][220521-elo1] ±1.0<br><sub>Ptnml:&nbsp;60,&nbsp;2454,&nbsp;23277,&nbsp;4096,&nbsp;113<br>nElo: 29.34 ±2.8<br>PairsRatio: 1.67<br>[\[raw statistics\]][220521-raw1]</sub> |
| 2021&#8209;06&#8209;14 | [master][140621-master] vs [Stockfish 13]<br><sub>`Bench: 4877339`<br>Update default net to nn-8e47cf062333.nnue<br>[\[differences\]][140621-dif] `90`</sub> | Elo: [21.80][140621-elo1] ±1.1<br><sub>Ptnml:&nbsp;67,&nbsp;2216,&nbsp;21852,&nbsp;5620,&nbsp;245<br>nElo: 57.47 ±2.7<br>PairsRatio: 2.57<br>[\[raw statistics\]][140621-raw1]</sub> | Elo: [16.96][140621-elo8] ±1.1<br><sub>Ptnml:&nbsp;15,&nbsp;1083,&nbsp;15923,&nbsp;2894,&nbsp;85<br>nElo: 52.38 ±3.3<br>PairsRatio: 2.71<br>[\[raw statistics\]][140621-raw8]</sub> |
| 2021&#8209;06&#8209;18 | [master][180621-master] vs [Stockfish 13]<br><sub>`Bench: 4900906`<br>Make net nn-50144f835024.nnue the default<br>[\[differences\]][180621-dif] `100`</sub> | Elo: [25.56][180621-elo1] ±1.0<br><sub>Ptnml:&nbsp;30,&nbsp;1814,&nbsp;22084,&nbsp;5864,&nbsp;208<br>nElo: 69.95 ±2.7<br>PairsRatio: 3.29<br>[\[raw statistics\]][180621-raw1]</sub> |
| 2021&#8209;06&#8209;29 | [master][290621-master] vs [Stockfish 13]<br><sub>`Bench: 4770936`<br>Update Top CPU Contributors<br>[\[differences\]][290621-dif] `113`</sub> | Elo: [30.27][290621-elo1] ±1.0<br><sub>Ptnml:&nbsp;14,&nbsp;1443,&nbsp;22127,&nbsp;6146,&nbsp;270<br>nElo: 83.66 ±2.6<br>PairsRatio: 4.40<br>[\[raw statistics\]][290621-raw1]</sub> | Elo: [22.62][290621-elo8] ±1.1<br><sub>Ptnml:&nbsp;7,&nbsp;755,&nbsp;15977,&nbsp;3153,&nbsp;108<br>nElo: 71.15 ±3.1<br>PairsRatio: 4.28<br>[\[raw statistics\]][290621-raw8]</sub> |
| 2021&#8209;07&#8209;02 | [Stockfish 14] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF14RN] [<img src="https://github.githubassets.com/images/icons/emoji/unicode/1f4c8.png" width="20px">][SF14DP]<br><sub>`Bench: 4770936`<br>[\[differences\]][020721-dif] `114`</sub> |

</details>

<details>
  <summary><code>Stockfish 15 Development (2021-07-02 - 2022-04-18)</code></summary><br>

| `Date` | `Version` | `1 Thread` | `8 Threads` | `1 Thread (UHO)` |
|:---:|:---:|:---:|:---:|:---:|
| 2021&#8209;07&#8209;26 | [master][260721-master] vs [Stockfish 14]<br><sub>`Bench: 5124774`<br>Update default net to nn-26abeed38351.nnue<br>[\[differences\]][260721-dif] `17`</sub> | Elo: [2.74][260721-elo1] ±0.8<br><sub>Ptnml:&nbsp;24,&nbsp;2000,&nbsp;25476,&nbsp;2478,&nbsp;22<br>nElo: 9.85 ±2.8<br>PairsRatio: 1.24<br>[\[raw statistics\]][260721-raw1]</sub> | |
| 2021&#8209;08&#8209;15 | [master][150821-master] vs [Stockfish 14]<br><sub>`Bench: 5189338`<br>New NNUE architecture and net<br>[\[differences\]][150821-dif] `26`</sub> | Elo: [9.31][150821-elo1] ±0.9<br><sub>Ptnml:&nbsp;24,&nbsp;2044,&nbsp;24321,&nbsp;3522,&nbsp;89<br>nElo: 29.61 ±2.7<br>PairsRatio: 1.75<br>[\[raw statistics\]][150821-raw1]</sub> | Elo: [6.08][150821-elo8] ±0.9<br><sub>Ptnml:&nbsp;5,&nbsp;1063,&nbsp;17183,&nbsp;1725,&nbsp;24<br>nElo: 22.66 ±3.4<br>PairsRatio: 1.64<br>[\[raw statistics\]][150821-raw8]</sub> | |
| 2021&#8209;08&#8209;31 | [master][310821-master] vs [Stockfish 14]<br><sub>`Bench: 5600615`<br>Update default net to nn-735bba95dec0.nnue<br>[\[differences\]][310821-dif] `39`</sub> | Elo: [15.04][310821-elo1] ±0.9<br><sub>Ptnml:&nbsp;17,&nbsp;1601,&nbsp;24272,&nbsp;3990,&nbsp;120<br>nElo: 47.86 ±2.7<br>PairsRatio: 2.54<br>[\[raw statistics\]][310821-raw1]</sub> | |
| 2021&#8209;09&#8209;15 | [master][150921-master] vs [Stockfish 14]<br><sub>`Bench: 6658747`<br>Update default net to nn-13406b1dcbe0.nnue<br>[\[differences\]][150921-dif] `46`</sub> | Elo: [16.64][150921-elo1] ±0.9<br><sub>Ptnml:&nbsp;21,&nbsp;1878,&nbsp;23452,&nbsp;4506,&nbsp;143<br>nElo: 49.53 ±2.7<br>PairsRatio: 2.45<br>[\[raw statistics\]][150921-raw1]</sub> | Elo: [12.39][150921-elo8] ±0.9<br><sub>Ptnml:&nbsp;1,&nbsp;766,&nbsp;17084,&nbsp;2104,&nbsp;45<br>nElo: 45.59 ±3.2<br>PairsRatio: 2.80<br>[\[raw statistics\]][150921-raw8]</sub> | |
| 2021&#8209;10&#8209;06 | [master][061021-master] vs [Stockfish 14]<br><sub>`Bench: 6261865`<br>Capping stat bonus at 2000<br>[\[differences\]][061021-dif] `57`</sub> | Elo: [18.68][061021-elo1] ±0.9<br><sub>Ptnml:&nbsp;28,&nbsp;1496,&nbsp;23821,&nbsp;4535,&nbsp;120<br>nElo: 57.70 ±2.7<br>PairsRatio: 3.05<br>[\[raw statistics\]][061021-raw1]</sub> | Elo: [11.74][061021-elo8] ±0.9<br><sub>Ptnml:&nbsp;4,&nbsp;769,&nbsp;17137,&nbsp;2052,&nbsp;38<br>nElo: 43.60 ±3.2<br>PairsRatio: 2.70<br>[\[raw statistics\]][061021-raw8]</sub> | |
| 2021&#8209;10&#8209;18 | [master][181021-master] vs [Stockfish 14]<br><sub>`Bench: 5005810`<br>Simplify probCutCount away<br>[\[differences\]][181021-dif] `67`</sub> | Elo: [17.69][181021-elo1] ±0.9<br><sub>Ptnml:&nbsp;13,&nbsp;1577,&nbsp;23891,&nbsp;4382,&nbsp;137<br>nElo: 54.78 ±2.7<br>PairsRatio: 2.84<br>[\[raw statistics\]][181021-raw1]</sub> | |
| 2021&#8209;10&#8209;23 | [master][231021-master] vs [Stockfish 14]<br><sub>`Bench: 6334068`<br>Adjust ButterflyHistory decay parameter<br>[\[differences\]][231021-dif] `78`</sub> | Elo: [17.87][231021-elo1] ±0.9<br><sub>Ptnml:&nbsp;11,&nbsp;1377,&nbsp;24244,&nbsp;4253,&nbsp;115<br>nElo: 57.35 ±2.6<br>PairsRatio: 3.15<br>[\[raw statistics\]][231021-raw1]</sub> | Elo: [10.27][231021-elo8] ±0.9<br><sub>Ptnml:&nbsp;3,&nbsp;696,&nbsp;17438,&nbsp;1842,&nbsp;21<br>nElo: 40.55 ±3.2<br>PairsRatio: 2.67<br>[\[raw statistics\]][231021-raw8]</sub> | |
| 2021&#8209;10&#8209;28 | [Stockfish 14.1] [<img src="https://official-stockfish.github.io/docs/images/icon_128x128@2x.webp" width="20px">][SF141RN]<br><sub>`Bench: 6334068`<br>[\[differences\]][281021-dif] `80`</sub> | |
| 2021&#8209;11&#8209;05 | [master][051121-master] vs [Stockfish 14]<br><sub>`Bench: 6719976`<br>Tweak initial aspiration window<br>[\[differences\]][051121-dif] `89`</sub> | Elo: [18.71][051121-elo1] ±0.9<br><sub>Ptnml:&nbsp;16,&nbsp;1293,&nbsp;24255,&nbsp;4319,&nbsp;117<br>nElo: 60.14 ±2.6<br>PairsRatio: 3.39<br>[\[raw statistics\]][051121-raw1]</sub> | |
| 2021&#8209;11&#8209;23 | [master][231121-master] vs [Stockfish 14]<br><sub>`Bench: 7334766`<br>Less futility pruning<br>[\[differences\]][231121-dif] `98`</sub> | Elo: [19.35][231121-elo1] ±0.9<br><sub>Ptnml:&nbsp;19,&nbsp;1405,&nbsp;23923,&nbsp;4524,&nbsp;129<br>nElo: 60.39 ±2.6<br>PairsRatio: 3.27<br>[\[raw statistics\]][231121-raw1]</sub> | Elo: [13.28][231121-elo8] ±0.9<br><sub>Ptnml:&nbsp;3,&nbsp;696,&nbsp;17112,&nbsp;2148,&nbsp;41<br>nElo: 49.26 ±3.2<br>PairsRatio: 3.13<br>[\[raw statistics\]][231121-raw8]</sub> | |
| 2021&#8209;11&#8209;28 | [master][281121-master] vs [Stockfish 14]<br><sub>`Bench: 6302543`<br>Refine futility pruning for parent nodes<br>[\[differences\]][281121-dif] `103`</sub> | Elo: [24.44][281121-elo1] ±0.9<br><sub>Ptnml:&nbsp;9,&nbsp;1054,&nbsp;23776,&nbsp;5037,&nbsp;124<br>nElo: 76.95 ±2.5<br>PairsRatio: 4.86<br>[\[raw statistics\]][281121-raw1]</sub> | |
| 2021&#8209;12&#8209;07 | [master][071221-master] vs [Stockfish 14]<br><sub>`Bench: 4667742`<br>Update default net to nn-63376713ba63.nnue<br>[\[differences\]][071221-dif] `118`</sub> | Elo: [26.99][071221-elo1] ±0.9<br><sub>Ptnml:&nbsp;11,&nbsp;998,&nbsp;23473,&nbsp;5365,&nbsp;153<br>nElo: 83.13 ±2.5<br>PairsRatio: 5.47<br>[\[raw statistics\]][071221-raw1]</sub> | Elo: [17.80][071221-elo8] ±0.9<br><sub>Ptnml:&nbsp;6,&nbsp;529,&nbsp;16919,&nbsp;2504,&nbsp;42<br>nElo: 64.76 ±3.1<br>PairsRatio: 4.76<br>[\[raw statistics\]][071221-raw8]</sub> | |
| 2021&#8209;12&#8209;14 | [master][141221-master] vs [Stockfish 14]<br><sub>`Bench: 4735679`<br>Remove NNUE scaling term<br>[\[differences\]][141221-dif] `126`</sub> | Elo: [26.45][141221-elo1] ±0.9<br><sub>Ptnml:&nbsp;9,&nbsp;962,&nbsp;23656,&nbsp;5207,&nbsp;166<br>nElo: 82.28 ±2.5<br>PairsRatio: 5.53<br>[\[raw statistics\]][141221-raw1]</sub> | |
| 2021&#8209;12&#8209;22 | [master][221221-master] vs [Stockfish 14]<br><sub>`Bench: 4633875`<br>Update default net to nn-ac07bd334b62.nnue<br>[\[differences\]][221221-dif] `139`</sub> | Elo: [28.65][221221-elo1] ±0.9<br><sub>Ptnml:&nbsp;11,&nbsp;1036,&nbsp;23172,&nbsp;5567,&nbsp;214<br>nElo: 85.61 ±2.5<br>PairsRatio: 5.52<br>[\[raw statistics\]][221221-raw1]</sub> | Elo: [17.66][221221-elo8] ±0.9<br><sub>Ptnml:&nbsp;2,&nbsp;520,&nbsp;16976,&nbsp;2448,&nbsp;54<br>nElo: 64.60 ±3.0<br>PairsRatio: 4.79<br>[\[raw statistics\]][221221-raw8]</sub> | |
| 2022&#8209;01&#8209;10 | [master][100122-master] vs [Stockfish 14]<br><sub>`Bench: 4572746`<br>Adjust pruning constants<br>[\[differences\]][100122-dif] `148`</sub> | Elo: [30.51][100122-elo1] ±1.0<br><sub>Ptnml:&nbsp;13,&nbsp;1065,&nbsp;22809,&nbsp;5879,&nbsp;234<br>nElo: 89.03 ±2.5<br>PairsRatio: 5.67<br>[\[raw statistics\]][100122-raw1]</sub> | |
| 2022&#8209;01&#8209;29 | [master][290122-master] vs [Stockfish 14]<br><sub>`Bench: 4637392`<br>Do stats updates after LMR for captures<br>[\[differences\]][290122-dif] `159`</sub> | Elo: [32.07][290122-elo1] ±1.0<br><sub>Ptnml:&nbsp;10,&nbsp;1009,&nbsp;22681,&nbsp;6049,&nbsp;251<br>nElo: 93.05 ±2.5<br>PairsRatio: 6.18<br>[\[raw statistics\]][290122-raw1]</sub> | Elo: [22.31][290122-elo8] ±1.0<br><sub>Ptnml:&nbsp;3,&nbsp;496,&nbsp;16495,&nbsp;2945,&nbsp;61<br>nElo: 76.78 ±3.0<br>PairsRatio: 6.02<br>[\[raw statistics\]][290122-raw8]</sub> | |
| 2022&#8209;0…28389 tokens truncated…61218-raw1]:    https://tests.stockfishchess.org/tests/stats/5c092f8b0ebc5902bcee8877
[131218-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...31ac538f96
[131218-elo1]:    https://tests.stockfishchess.org/tests/view/5c126a140ebc5902ba11afb0
[131218-elo8]:    https://tests.stockfishchess.org/tests/view/5d01302d0ebc5925cf09d044
[131218-master]:  https://github.com/official-stockfish/Stockfish/commit/31ac538f96a54b294e79213d33aacf5d8a182c87
[131218-raw1]:    https://tests.stockfishchess.org/tests/stats/5c126a140ebc5902ba11afb0
[131218-raw8]:    https://tests.stockfishchess.org/tests/stats/5d01302d0ebc5925cf09d044
[161218-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...7240a90bf9
[161218-elo1]:    https://tests.stockfishchess.org/tests/view/5c17830c0ebc5902ba1234c4
[161218-master]:  https://github.com/official-stockfish/Stockfish/commit/7240a90bf9be3f39f3ca4f34921dd644c5cebb3a
[161218-raw1]:    https://tests.stockfishchess.org/tests/stats/5c17830c0ebc5902ba1234c4
[040119-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...bb843a00c1
[040119-elo1]:    https://tests.stockfishchess.org/tests/view/5c2f7d4f0ebc596a450be7dc
[040119-master]:  https://github.com/official-stockfish/Stockfish/commit/bb843a00c1ef381162dc9c2491b5436b6cf5563f
[040119-raw1]:    https://tests.stockfishchess.org/tests/stats/5c2f7d4f0ebc596a450be7dc
[100119-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...5446e6f408
[100119-elo1]:    https://tests.stockfishchess.org/tests/view/5c376bd30ebc596a450c8216
[100119-elo8]:    https://tests.stockfishchess.org/tests/view/5ced50b50ebc5925cf07eabf
[100119-master]:  https://github.com/official-stockfish/Stockfish/commit/5446e6f408f2ed7fa281dbe0097c46674d193260
[100119-raw1]:    https://tests.stockfishchess.org/tests/stats/5c376bd30ebc596a450c8216
[100119-raw8]:    https://tests.stockfishchess.org/tests/stats/5ced50b50ebc5925cf07eabf
[220119-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...2d0af36753
[220119-elo1]:    https://tests.stockfishchess.org/tests/view/5c46dbef0ebc5902bb5d6b6f
[220119-master]:  https://github.com/official-stockfish/Stockfish/commit/2d0af36753a2f1acdf43b4e1d30d56ad8effc429
[220119-raw1]:    https://tests.stockfishchess.org/tests/stats/5c46dbef0ebc5902bb5d6b6f
[030219-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...6514500236
[030219-elo1]:    https://tests.stockfishchess.org/tests/view/5c5777a00ebc592015e0db3b
[030219-elo8]:    https://tests.stockfishchess.org/tests/view/5cf9eadf0ebc5925cf09264e
[030219-master]:  https://github.com/official-stockfish/Stockfish/commit/651450023619ddea590f301f040286151004df66
[030219-raw1]:    https://tests.stockfishchess.org/tests/stats/5c5777a00ebc592015e0db3b
[030219-raw8]:    https://tests.stockfishchess.org/tests/stats/5cf9eadf0ebc5925cf09264e
[120319-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...bad18bccb6
[120319-elo1]:    https://tests.stockfishchess.org/tests/view/5c8bbd6b0ebc5925cffed484
[120319-master]:  https://github.com/official-stockfish/Stockfish/commit/bad18bccb60c874410edd3f61624696d3abc3cbc
[120319-raw1]:    https://tests.stockfishchess.org/tests/stats/5c8bbd6b0ebc5925cffed484
[310319-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...82ad9ce9cf
[310319-elo1]:    https://tests.stockfishchess.org/tests/view/5ca294f90ebc5925cf000e4d
[310319-elo8]:    https://tests.stockfishchess.org/tests/view/5cba4ebd0ebc5925cf020fae
[310319-master]:  https://github.com/official-stockfish/Stockfish/commit/82ad9ce9cfb0eff33f1d781f329f7c5dc0b277eb
[310319-raw1]:    https://tests.stockfishchess.org/tests/stats/5ca294f90ebc5925cf000e4d
[310319-raw8]:    https://tests.stockfishchess.org/tests/stats/5cba4ebd0ebc5925cf020fae
[240419-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...6373fd56e9
[240419-elo1]:    https://tests.stockfishchess.org/tests/view/5cc0b7520ebc5925cf02af43
[240419-master]:  https://github.com/official-stockfish/Stockfish/commit/6373fd56e90bc6114230a70cacad804248d955e2
[240419-raw1]:    https://tests.stockfishchess.org/tests/stats/5cc0b7520ebc5925cf02af43
[050519-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...b6d11028bb
[050519-elo1]:    https://tests.stockfishchess.org/tests/view/5ccf55560ebc5925cf04273a
[050519-master]:  https://github.com/official-stockfish/Stockfish/commit/b6d11028bbb5e428cdbd709ba46d8b14bab17c88
[050519-raw1]:    https://tests.stockfishchess.org/tests/stats/5ccf55560ebc5925cf04273a
[150519-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...3a572ffb48
[150519-elo1]:    https://tests.stockfishchess.org/tests/view/5cdc33ac0ebc5925cf05b8bc
[150519-elo8]:    https://tests.stockfishchess.org/tests/view/5cdc35160ebc5925cf05b90e
[150519-master]:  https://github.com/official-stockfish/Stockfish/commit/3a572ffb4840bfea3c587c9c81a0008515f02a32
[150519-raw1]:    https://tests.stockfishchess.org/tests/stats/5cdc33ac0ebc5925cf05b8bc
[150519-raw8]:    https://tests.stockfishchess.org/tests/stats/5cdc35160ebc5925cf05b90e
[090619-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...2ead74d1e2
[090619-elo1]:    https://tests.stockfishchess.org/tests/view/5cfd00570ebc5925cf096317
[090619-master]:  https://github.com/official-stockfish/Stockfish/commit/2ead74d1e2b0c5edbb0da5887e56bbddb5b2a905
[090619-raw1]:    https://tests.stockfishchess.org/tests/stats/5cfd00570ebc5925cf096317
[200619-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...37ffacf209
[200619-elo1]:    https://tests.stockfishchess.org/tests/view/5d0b9f950ebc5925cf0a9c6b
[200619-elo8]:    https://tests.stockfishchess.org/tests/view/5d0ba0010ebc5925cf0a9c84
[200619-master]:  https://github.com/official-stockfish/Stockfish/commit/37ffacf2094594314346bf9c3d7d8a61911b34d5
[200619-raw1]:    https://tests.stockfishchess.org/tests/stats/5d0b9f950ebc5925cf0a9c6b
[200619-raw8]:    https://tests.stockfishchess.org/tests/stats/5d0ba0010ebc5925cf0a9c84
[270619-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...d889bb4718
[270619-elo1]:    https://tests.stockfishchess.org/tests/view/5d1479580ebc5925cf0b421f
[270619-master]:  https://github.com/official-stockfish/Stockfish/commit/d889bb47185e33012b45cab63359952247bc86e2
[270619-raw1]:    https://tests.stockfishchess.org/tests/stats/5d1479580ebc5925cf0b421f
[110719-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...4ae5a7b45a
[110719-elo1]:    https://tests.stockfishchess.org/tests/view/5d274ae90ebc5925cf0d3cd4
[110719-master]:  https://github.com/official-stockfish/Stockfish/commit/4ae5a7b45a430aea5f4b21f9455b4db74ed1c44a
[110719-raw1]:    https://tests.stockfishchess.org/tests/stats/5d274ae90ebc5925cf0d3cd4
[250719-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...acdda38b93
[250719-elo1]:    https://tests.stockfishchess.org/tests/view/5d395a840ebc5925cf0f075e
[250719-elo8]:    https://tests.stockfishchess.org/tests/view/5d3964d20ebc5925cf0f078b
[250719-master]:  https://github.com/official-stockfish/Stockfish/commit/acdda38b93361f10e331a6d951d6870577efdace
[250719-raw1]:    https://tests.stockfishchess.org/tests/stats/5d395a840ebc5925cf0f075e
[250719-raw8]:    https://tests.stockfishchess.org/tests/stats/5d3964d20ebc5925cf0f078b
[140819-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...66a3c2968b
[140819-elo1]:    https://tests.stockfishchess.org/tests/view/5d545fd20ebc5925cf10a1ee
[140819-master]:  https://github.com/official-stockfish/Stockfish/commit/66a3c2968b8552efce8c7e670d7ceabb28f9c1eb
[140819-raw1]:    https://tests.stockfishchess.org/tests/stats/5d545fd20ebc5925cf10a1ee
[260819-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...8fec883471
[260819-elo1]:    https://tests.stockfishchess.org/tests/view/5d6394260ebc5939d09f436c
[260819-elo8]:    https://tests.stockfishchess.org/tests/view/5d63961a0ebc5939d09f4382
[260819-master]:  https://github.com/official-stockfish/Stockfish/commit/8fec8834715a440ac18e24e130888c2c60bab352
[260819-raw1]:    https://tests.stockfishchess.org/tests/stats/5d6394260ebc5939d09f436c
[260819-raw8]:    https://tests.stockfishchess.org/tests/stats/5d63961a0ebc5939d09f4382
[120919-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...8aecf26981
[120919-elo1]:    https://tests.stockfishchess.org/tests/view/5d7a0b7c0ebc5902d385654a
[120919-master]:  https://github.com/official-stockfish/Stockfish/commit/8aecf2698184babce57ccfd2ba5948342e29c325
[120919-raw1]:    https://tests.stockfishchess.org/tests/stats/5d7a0b7c0ebc5902d385654a
[160919-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...a858defd33
[160919-elo1]:    https://tests.stockfishchess.org/tests/view/5d809d540ebc5971531d0b66
[160919-elo8]:    https://tests.stockfishchess.org/tests/view/5d80d2240ebc5971531d1e46
[160919-master]:  https://github.com/official-stockfish/Stockfish/commit/a858defd332bddd828c9280a9e326a0b750b3dda
[160919-raw1]:    https://tests.stockfishchess.org/tests/stats/5d809d540ebc5971531d0b66
[160919-raw8]:    https://tests.stockfishchess.org/tests/stats/5d80d2240ebc5971531d1e46
[240919-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...667d24f227
[240919-elo1]:    https://tests.stockfishchess.org/tests/view/5d8d2c030ebc590f3beac64d
[240919-master]:  https://github.com/official-stockfish/Stockfish/commit/667d24f22743959ceddda6af53718619ea5c551d
[240919-raw1]:    https://tests.stockfishchess.org/tests/stats/5d8d2c030ebc590f3beac64d
[051019-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...2e96c513ad
[051019-elo1]:    https://tests.stockfishchess.org/tests/view/5d99322f0ebc5902b6cef9fa
[051019-elo8]:    https://tests.stockfishchess.org/tests/view/5d9932830ebc5902b6cef9fc
[051019-master]:  https://github.com/official-stockfish/Stockfish/commit/2e96c513ad6113abb6bc4fdd4962cc1f6eed3d4a
[051019-raw1]:    https://tests.stockfishchess.org/tests/stats/5d99322f0ebc5902b6cef9fa
[051019-raw8]:    https://tests.stockfishchess.org/tests/stats/5d9932830ebc5902b6cef9fc
[181019-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...472de897cb
[181019-elo1]:    https://tests.stockfishchess.org/tests/view/5da9d8470ebc597ba8edbb52
[181019-master]:  https://github.com/official-stockfish/Stockfish/commit/472de897cb7efb66cb3518f3f4924716bd8abaee
[181019-raw1]:    https://tests.stockfishchess.org/tests/stats/5da9d8470ebc597ba8edbb52
[041119-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...3804effb34
[041119-elo1]:    https://tests.stockfishchess.org/tests/view/5dc0b9660ebc5904493b0107
[041119-elo8]:    https://tests.stockfishchess.org/tests/view/5dc0ba190ebc5904493b0110
[041119-master]:  https://github.com/official-stockfish/Stockfish/commit/3804effb341b3008326a1613923177eb83d02826
[041119-raw1]:    https://tests.stockfishchess.org/tests/stats/5dc0b9660ebc5904493b0107
[041119-raw8]:    https://tests.stockfishchess.org/tests/stats/5dc0ba190ebc5904493b0110
[141119-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...a00a336946
[141119-elo1]:    https://tests.stockfishchess.org/tests/view/5dcdb0170ebc590256324986
[141119-master]:  https://github.com/official-stockfish/Stockfish/commit/a00a336946fa9e6dcfa39f8b656413d2de032a89
[141119-raw1]:    https://tests.stockfishchess.org/tests/stats/5dcdb0170ebc590256324986
[211119-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...3f4191392c
[211119-elo1]:    https://tests.stockfishchess.org/tests/view/5dd888329b6a7a2aa0a9005a
[211119-elo8]:    https://tests.stockfishchess.org/tests/view/5dd888a09b6a7a2aa0a9005c
[211119-master]:  https://github.com/official-stockfish/Stockfish/commit/3f4191392c18f08011294aab880c31b15fc6f61c
[211119-raw1]:    https://tests.stockfishchess.org/tests/stats/5dd888329b6a7a2aa0a9005a
[211119-raw8]:    https://tests.stockfishchess.org/tests/stats/5dd888a09b6a7a2aa0a9005c
[021219-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...97a0e4e817
[021219-elo1]:    https://tests.stockfishchess.org/tests/view/5de59f7db407ee7bfda68a58
[021219-master]:  https://github.com/official-stockfish/Stockfish/commit/97a0e4e8170df33b927c48d734e0132e9ef8a22f
[021219-raw1]:    https://tests.stockfishchess.org/tests/stats/5de59f7db407ee7bfda68a58
[101219-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...b6482472a0
[101219-elo1]:    https://tests.stockfishchess.org/tests/view/5def70363cff9a249bb9e4c5
[101219-elo8]:    https://tests.stockfishchess.org/tests/view/5def70ae3cff9a249bb9e4c8
[101219-master]:  https://github.com/official-stockfish/Stockfish/commit/b6482472a03833287dc21bdaa783f156978ac63e
[101219-raw1]:    https://tests.stockfishchess.org/tests/stats/5def70363cff9a249bb9e4c5
[101219-raw8]:    https://tests.stockfishchess.org/tests/stats/5def70ae3cff9a249bb9e4c8
[070120-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...44f79bdf5a
[070120-elo1]:    https://tests.stockfishchess.org/tests/view/5e1472da61fe5f83a67dd84f
[070120-elo8]:    https://tests.stockfishchess.org/tests/view/5e14734d61fe5f83a67dd851
[070120-master]:  https://github.com/official-stockfish/Stockfish/commit/44f79bdf5a092c3acec0a8bf8f2c1440e5a9da90
[070120-raw1]:    https://tests.stockfishchess.org/tests/stats/5e1472da61fe5f83a67dd84f
[070120-raw8]:    https://tests.stockfishchess.org/tests/stats/5e14734d61fe5f83a67dd851
[170120-dif]:     https://github.com/official-stockfish/Stockfish/compare/b4c239b625...c3483fa9a7
[170120-elo1]:    https://tests.stockfishchess.org/tests/view/5e2258dd346e35ac603b7d8c
[170120-elo8]:    https://tests.stockfishchess.org/tests/view/5e22593d346e35ac603b7d8f
[170120-master]:  https://github.com/official-stockfish/Stockfish/commit/c3483fa9a7d7c0ffa9fcc32b467ca844cfb63790
[170120-raw1]:    https://tests.stockfishchess.org/tests/stats/5e2258dd346e35ac603b7d8c
[170120-raw8]:    https://tests.stockfishchess.org/tests/stats/5e22593d346e35ac603b7d8f
[Stockfish 11]:   https://github.com/official-stockfish/Stockfish/commit/c3483fa9a7d7c0ffa9fcc32b467ca844cfb63790
[SF11DP]:         https://user-images.githubusercontent.com/64992190/156415721-adef6287-f523-4cc4-b7e8-cc920bdd7bdc.png "Development Progress"
[SF11RN]:         https://stockfishchess.org/blog/2020/stockfish-11/ "Release Notes"
[280120-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...71e0b5385e
[280120-elo1]:    https://tests.stockfishchess.org/tests/view/5e307251ab2d69d58394fdb9
[280120-master]:  https://github.com/official-stockfish/Stockfish/commit/71e0b5385e2717679a57c6b77d8c7ac5fff3b89f
[280120-raw1]:    https://tests.stockfishchess.org/tests/stats/5e307251ab2d69d58394fdb9
[310120-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...f10498be40
[310120-elo1]:    https://tests.stockfishchess.org/tests/view/5e334851708b13464ceea33c
[310120-master]:  https://github.com/official-stockfish/Stockfish/commit/6ccb1cac5aaaf7337da8b1738448793be63fdfdb
[310120-raw1]:    https://tests.stockfishchess.org/tests/stats/5e334851708b13464ceea33c
[270220-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...09f53dbfa5
[270220-elo1]:    https://tests.stockfishchess.org/tests/view/5e5801a584a82b4acd414a28
[270220-elo8]:    https://tests.stockfishchess.org/tests/view/5e58020384a82b4acd414a2a
[270220-master]:  https://github.com/official-stockfish/Stockfish/commit/09f53dbfa5b55e761ca8070960345ab140baad04
[270220-raw1]:    https://tests.stockfishchess.org/tests/stats/5e5801a584a82b4acd414a28
[270220-raw8]:    https://tests.stockfishchess.org/tests/stats/5e58020384a82b4acd414a2a
[200320-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...6ecab03dee
[200320-elo1]:    https://tests.stockfishchess.org/tests/view/5e790d12e42a5c3b3ca2e9b7
[200320-master]:  https://github.com/official-stockfish/Stockfish/commit/6ecab03dee15fe30bc0237919180a2e51e0ce4b1
[200320-raw1]:    https://tests.stockfishchess.org/tests/stats/5e790d12e42a5c3b3ca2e9b7
[070420-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...195a4fec6d
[070420-elo1]:    https://tests.stockfishchess.org/tests/view/5e8ca31b0ffd2be7f15e54b3
[070420-elo8]:    https://tests.stockfishchess.org/tests/view/5e8ca37e0ffd2be7f15e54b5
[070420-master]:  https://github.com/official-stockfish/Stockfish/commit/195a4fec6d6bd1f9e43f5b3e83a3dcf57dc73744
[070420-raw1]:    https://tests.stockfishchess.org/tests/stats/5e8ca31b0ffd2be7f15e54b3
[070420-raw8]:    https://tests.stockfishchess.org/tests/stats/5e8ca37e0ffd2be7f15e54b5
[160420-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...345b2d153a
[160420-elo1]:    https://tests.stockfishchess.org/tests/view/5e98b9e130be947a14e9db1b
[160420-master]:  https://github.com/official-stockfish/Stockfish/commit/345b2d153a8092cff93ad660c9d107cd66fda43b
[160420-raw1]:    https://tests.stockfishchess.org/tests/stats/5e98b9e130be947a14e9db1b
[020520-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...c527c3ad44
[020520-elo1]:    https://tests.stockfishchess.org/tests/view/5eadc1526ffeed51f6e3277e
[020520-elo8]:    https://tests.stockfishchess.org/tests/view/5eadc2156ffeed51f6e32781
[020520-master]:  https://github.com/official-stockfish/Stockfish/commit/c527c3ad44f7465c79cef93f1e8cfebd998dc627
[020520-raw1]:    https://tests.stockfishchess.org/tests/stats/5eadc1526ffeed51f6e3277e
[020520-raw8]:    https://tests.stockfishchess.org/tests/stats/5eadc2156ffeed51f6e32781
[210520-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...09c6917d05
[210520-elo1]:    https://tests.stockfishchess.org/tests/view/5ec6c48ec23f5b0710632b04
[210520-master]:  https://github.com/official-stockfish/Stockfish/commit/09c6917d053582267a2960e8c375883e0d9461da
[210520-raw1]:    https://tests.stockfishchess.org/tests/stats/5ec6c48ec23f5b0710632b04
[060620-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...15e190e942
[060620-elo1]:    https://tests.stockfishchess.org/tests/view/5edf5ffdf29b40b0fc95ad62
[060620-elo8]:    https://tests.stockfishchess.org/tests/view/5edf6220f29b40b0fc95ad6e
[060620-master]:  https://github.com/official-stockfish/Stockfish/commit/15e190e9428b21fbfe29ce020c456077dc5fdd04
[060620-raw1]:    https://tests.stockfishchess.org/tests/stats/5edf5ffdf29b40b0fc95ad62
[060620-raw8]:    https://tests.stockfishchess.org/tests/stats/5edf6220f29b40b0fc95ad6e
[130620-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...42b7dbcb5e
[130620-elo1]:    https://tests.stockfishchess.org/tests/view/5ee5b14dca6c451633a9a06f
[130620-elo8]:    https://tests.stockfishchess.org/tests/view/5ee5b1c3ca6c451633a9a075
[130620-master]:  https://github.com/official-stockfish/Stockfish/commit/42b7dbcb5e20ae9015122601522be8b455787a4a
[130620-raw1]:    https://tests.stockfishchess.org/tests/stats/5ee5b14dca6c451633a9a06f
[130620-raw8]:    https://tests.stockfishchess.org/tests/stats/5ee5b1c3ca6c451633a9a075
[290620-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...69d3be42a1
[290620-elo1]:    https://tests.stockfishchess.org/tests/view/5efa336b020eec13834a975d
[290620-master]:  https://github.com/official-stockfish/Stockfish/commit/69d3be42a112645a9e599df615f730d61a5dca8c
[290620-raw1]:    https://tests.stockfishchess.org/tests/stats/5efa336b020eec13834a975d
[170720-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...d89730d5c8
[170720-elo1]:    https://tests.stockfishchess.org/tests/view/5f14adebda64229ef7dc1788
[170720-elo8]:    https://tests.stockfishchess.org/tests/view/5f14ae36da64229ef7dc178a
[170720-master]:  https://github.com/official-stockfish/Stockfish/commit/d89730d5c8dcf10eb9e1d91a81f903d9fc3c949a
[170720-raw1]:    https://tests.stockfishchess.org/tests/stats/5f14adebda64229ef7dc1788
[170720-raw8]:    https://tests.stockfishchess.org/tests/stats/5f14ae36da64229ef7dc178a
[310720-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...9587eeeb5e
[310720-elo1]:    https://tests.stockfishchess.org/tests/view/5f29002aa5abc164f05e4c4f
[310720-elo8]:    https://tests.stockfishchess.org/tests/view/5f291999a5abc164f05e4c67
[310720-master]:  https://github.com/official-stockfish/Stockfish/commit/9587eeeb5ed29f834d4f956b92e0e732877c47a7
[310720-raw1]:    https://tests.stockfishchess.org/tests/stats/5f29002aa5abc164f05e4c4f
[310720-raw8]:    https://tests.stockfishchess.org/tests/stats/5f291999a5abc164f05e4c67
[060820-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...84f3e86790
[060820-elo1]:    https://tests.stockfishchess.org/tests/view/5f2c5a25b3ebe5cbfee85b8e
[060820-elo8]:    https://tests.stockfishchess.org/tests/view/5f2c5a52b3ebe5cbfee85b91
[060820-master]:  https://github.com/official-stockfish/Stockfish/commit/84f3e867903f62480c33243dd0ecbffd342796fc
[060820-raw1]:    https://tests.stockfishchess.org/tests/stats/5f2c5a25b3ebe5cbfee85b8e
[060820-raw8]:    https://tests.stockfishchess.org/tests/stats/5f2c5a52b3ebe5cbfee85b91
[SFNNUERN]:       https://stockfishchess.org/blog/2020/introducing-nnue-evaluation/ "Release Notes"
[070820-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...84f3e86790
[080820-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...add890a10b
[080820-elo1]:    https://tests.stockfishchess.org/tests/view/5f2f0ff49081672066536b29
[080820-master]:  https://github.com/official-stockfish/Stockfish/commit/add890a10b8fe03e091520cd0af7383615c6c386
[080820-raw1]:    https://tests.stockfishchess.org/tests/stats/5f2f0ff49081672066536b29
[110820-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...ea6220f381
[110820-elo1]:    https://tests.stockfishchess.org/tests/view/5f32844966a893ef3a025dde
[110820-elo8]:    https://tests.stockfishchess.org/tests/view/5f32846e66a893ef3a025de0
[110820-master]:  https://github.com/official-stockfish/Stockfish/commit/ea6220f3813e5b76b444a02905eaf2c556bdb368
[110820-raw1]:    https://tests.stockfishchess.org/tests/stats/5f32844966a893ef3a025dde
[110820-raw8]:    https://tests.stockfishchess.org/tests/stats/5f32846e66a893ef3a025de0
[180820-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...fbae5614eb
[180820-elo1]:    https://tests.stockfishchess.org/tests/view/5f3b7ff8b38d442594aabebc
[180820-elo8]:    https://tests.stockfishchess.org/tests/view/5f3b8008b38d442594aabebe
[180820-master]:  https://github.com/official-stockfish/Stockfish/commit/fbae5614eb1e82bccd37fbcfb0d2ca388b7a9a7d
[180820-raw1]:    https://tests.stockfishchess.org/tests/stats/5f3b7ff8b38d442594aabebc
[180820-raw8]:    https://tests.stockfishchess.org/tests/stats/5f3b8008b38d442594aabebe
[300820-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...e0bafa1911
[300820-elo1]:    https://tests.stockfishchess.org/tests/view/5f4b9b24ba100690c5cc5c7f
[300820-master]:  https://github.com/official-stockfish/Stockfish/commit/e0bafa1911ede61b9268e0b461a5d8856d6cd6be
[300820-raw1]:    https://tests.stockfishchess.org/tests/stats/5f4b9b24ba100690c5cc5c7f
[020920-dif]:     https://github.com/official-stockfish/Stockfish/compare/c3483fa9a7...c306d83869
[020920-elo1]:    https://tests.stockfishchess.org/tests/view/5f4faef2ba100690c5cc5e79
[020920-elo8]:    https://tests.stockfishchess.org/tests/view/5f4faf0eba100690c5cc5e7b
[020920-master]:  https://github.com/official-stockfish/Stockfish/commit/c306d838697011da0a960758dde3f7ede6849060
[020920-raw1]:    https://tests.stockfishchess.org/tests/stats/5f4faef2ba100690c5cc5e79
[020920-raw8]:    https://tests.stockfishchess.org/tests/stats/5f4faf0eba100690c5cc5e7b
[Stockfish 12]:   https://github.com/official-stockfish/Stockfish/commit/c306d838697011da0a960758dde3f7ede6849060
[SF12DP]:         https://user-images.githubusercontent.com/64992190/156415498-30505e38-cfaa-4656-af7d-c5a007b168dd.png "Development Progress"
[SF12RN]:         https://stockfishchess.org/blog/2020/stockfish-12/ "Release Notes"
[080920-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...0405f35403
[080920-elo1]:    https://tests.stockfishchess.org/tests/view/5f57f1762f5ee9c2a401eb7c
[080920-master]:  https://github.com/official-stockfish/Stockfish/commit/0405f3540366cc16245d51531881c55d3726c8b5
[080920-raw1]:    https://tests.stockfishchess.org/tests/stats/5f57f1762f5ee9c2a401eb7c
[210920-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...485d517c68
[210920-elo1]:    https://tests.stockfishchess.org/tests/view/5f684d23ded68c240be72173
[210920-elo8]:    https://tests.stockfishchess.org/tests/view/5f684d42ded68c240be7217c
[210920-master]:  https://github.com/official-stockfish/Stockfish/commit/485d517c687a2d3cb0b88cc8c198483759eaf2c7
[210920-raw1]:    https://tests.stockfishchess.org/tests/stats/5f684d23ded68c240be72173
[210920-raw8]:    https://tests.stockfishchess.org/tests/stats/5f684d42ded68c240be7217c
[280920-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...5af09cfda5
[280920-elo1]:    https://tests.stockfishchess.org/tests/view/5f724c7fc96941256e85618f
[280920-master]:  https://github.com/official-stockfish/Stockfish/commit/5af09cfda5b71f9470ef233298e0f4233651337d
[280920-raw1]:    https://tests.stockfishchess.org/tests/stats/5f724c7fc96941256e85618f
[181020-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...560c776397
[181020-elo1]:    https://tests.stockfishchess.org/tests/view/5f8c3442e669321c019e509f
[181020-elo8]:    https://tests.stockfishchess.org/tests/view/5f8c346ae669321c019e50a1
[181020-master]:  https://github.com/official-stockfish/Stockfish/commit/560c776397483feaaa0deb5b666f46ff3f5b655f
[181020-raw1]:    https://tests.stockfishchess.org/tests/stats/5f8c3442e669321c019e509f
[181020-raw8]:    https://tests.stockfishchess.org/tests/stats/5f8c346ae669321c019e50a1
[011120-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...dfc7f88650
[011120-elo1]:    https://tests.stockfishchess.org/tests/view/5f9e7c786a2c112b60691e39
[011120-master]:  https://github.com/official-stockfish/Stockfish/commit/dfc7f88650bf8bda4a381d36e209209cf63a9bcc
[011120-raw1]:    https://tests.stockfishchess.org/tests/stats/5f9e7c786a2c112b60691e39
[151120-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...f9595828eb
[151120-elo1]:    https://tests.stockfishchess.org/tests/view/5fb11f8467cbf42301d6ab62
[151120-elo8]:    https://tests.stockfishchess.org/tests/view/5fb11fac67cbf42301d6ab64
[151120-master]:  https://github.com/official-stockfish/Stockfish/commit/f9595828eb7e5e970b0be3ee5f84ddd726845523
[151120-raw1]:    https://tests.stockfishchess.org/tests/stats/5fb11f8467cbf42301d6ab62
[151120-raw8]:    https://tests.stockfishchess.org/tests/stats/5fb11fac67cbf42301d6ab64
[291120-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...7364006757
[291120-elo1]:    https://tests.stockfishchess.org/tests/view/5fc3ca3442a050a89f02c9bf
[291120-master]:  https://github.com/official-stockfish/Stockfish/commit/736400675746c6b84a0bdf131babce1b07ade0df
[291120-raw1]:    https://tests.stockfishchess.org/tests/stats/5fc3ca3442a050a89f02c9bf
[141220-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...a88a38c3a9
[141220-elo1]:    https://tests.stockfishchess.org/tests/view/5fd70ce51ac1691201888628
[141220-elo8]:    https://tests.stockfishchess.org/tests/view/5fd70d211ac169120188862d
[141220-master]:  https://github.com/official-stockfish/Stockfish/commit/a88a38c3a91749181ffa5d6dc0af7314a70a1c41
[141220-raw1]:    https://tests.stockfishchess.org/tests/stats/5fd70ce51ac1691201888628
[141220-raw8]:    https://tests.stockfishchess.org/tests/stats/5fd70d211ac169120188862d
[311220-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...d21e421ad7
[311220-elo1]:    https://tests.stockfishchess.org/tests/view/5fee0bee6019e097de3eea80
[311220-master]:  https://github.com/official-stockfish/Stockfish/commit/d21e421ad74cff3b157d156d6ea8fdee3634e75b
[311220-raw1]:    https://tests.stockfishchess.org/tests/stats/5fee0bee6019e097de3eea80
[130121-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...6dddcecb09
[130121-elo1]:    https://tests.stockfishchess.org/tests/view/6000a2616019e097de3ef77d
[130121-elo8]:    https://tests.stockfishchess.org/tests/view/6000a2796019e097de3ef77f
[130121-master]:  https://github.com/official-stockfish/Stockfish/commit/6dddcecb09df268d93810a1a38deb116f97672af
[130121-raw1]:    https://tests.stockfishchess.org/tests/stats/6000a2616019e097de3ef77d
[130121-raw8]:    https://tests.stockfishchess.org/tests/stats/6000a2796019e097de3ef77f
[150221-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...40cb0f076a
[150221-elo1]:    https://tests.stockfishchess.org/tests/view/602bcccf7f517a561bc49b11
[150221-elo8]:    https://tests.stockfishchess.org/tests/view/602bd7b27f517a561bc49b1e
[150221-master]:  https://github.com/official-stockfish/Stockfish/commit/40cb0f076a62115af030c4524825d9ba73d61023
[150221-raw1]:    https://tests.stockfishchess.org/tests/stats/602bcccf7f517a561bc49b11
[150221-raw8]:    https://tests.stockfishchess.org/tests/stats/602bd7b27f517a561bc49b1e
[Stockfish 13]:   https://github.com/official-stockfish/Stockfish/commit/3597f1942ec6f2cfbd50b905683739b0900ff5dd
[SF13DP]:         https://user-images.githubusercontent.com/64992190/156415393-f800b8c2-344b-4de1-b74a-c9f1715012d5.png "Development Progress"
[SF13RN]:         https://stockfishchess.org/blog/2021/stockfish-13/ "Release Notes"
[180221-dif]:     https://github.com/official-stockfish/Stockfish/compare/c306d83869...3597f1942e
[260221-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...0f3f5d85fb
[260221-elo1]:    https://tests.stockfishchess.org/tests/view/603c9ed1e8971688486fff85
[260221-master]:  https://github.com/official-stockfish/Stockfish/commit/0f3f5d85fb5c9f75199f27fbf7a725ff3e8bb4dc
[260221-raw1]:    https://tests.stockfishchess.org/tests/stats/603c9ed1e8971688486fff85
[240321-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...83eac08e75
[240321-elo1]:    https://tests.stockfishchess.org/tests/view/605c304bfa3cc97981cfaab7
[240321-master]:  https://github.com/official-stockfish/Stockfish/commit/83eac08e7562d93787f75eccd4b7781c4bd45dd3
[240321-raw1]:    https://tests.stockfishchess.org/tests/stats/605c304bfa3cc97981cfaab7
[150421-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...a7ab92ec25
[150421-elo1]:    https://tests.stockfishchess.org/tests/view/60795147162adf76afa5b7a1
[150421-elo8]:    https://tests.stockfishchess.org/tests/view/607951a5162adf76afa5b7a6
[150421-master]:  https://github.com/official-stockfish/Stockfish/commit/a7ab92ec25c91e8413630c52cfc2db6b4ecacf0c
[150421-raw1]:    https://tests.stockfishchess.org/tests/stats/60795147162adf76afa5b7a1
[150421-raw8]:    https://tests.stockfishchess.org/tests/stats/607951a5162adf76afa5b7a6
[220521-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...a2f01c07eb
[220521-elo1]:    https://tests.stockfishchess.org/tests/view/60a959adce8ea25a3ef04161
[220521-master]:  https://github.com/official-stockfish/Stockfish/commit/a2f01c07eb91524fc372bd82d6513ab058d3e043
[220521-raw1]:    https://tests.stockfishchess.org/tests/stats/60a959adce8ea25a3ef04161
[140621-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...f8c779dbe5
[140621-elo1]:    https://tests.stockfishchess.org/tests/view/60c70ba5457376eb8bcaaede
[140621-elo8]:    https://tests.stockfishchess.org/tests/view/60c711ab457376eb8bcaaef5
[140621-master]:  https://github.com/official-stockfish/Stockfish/commit/f8c779dbe538315aa6f65556d0acf11640558504
[140621-raw1]:    https://tests.stockfishchess.org/tests/stats/60c70ba5457376eb8bcaaede
[140621-raw8]:    https://tests.stockfishchess.org/tests/stats/60c711ab457376eb8bcaaef5
[180621-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...adfb23c029
[180621-elo1]:    https://tests.stockfishchess.org/tests/view/60cd9589457376eb8bcab62d
[180621-master]:  https://github.com/official-stockfish/Stockfish/commit/adfb23c029e54c7522aadca1adf3e0b15fdcebcd
[180621-raw1]:    https://tests.stockfishchess.org/tests/stats/60cd9589457376eb8bcab62d
[290621-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...2275923d3c
[290621-elo1]:    https://tests.stockfishchess.org/tests/view/60dae5363beab81350aca077
[290621-elo8]:    https://tests.stockfishchess.org/tests/view/60dae6033beab81350aca07b
[290621-master]:  https://github.com/official-stockfish/Stockfish/commit/2275923d3cbca85b433a4d16d40fae5c8de6784a
[290621-raw1]:    https://tests.stockfishchess.org/tests/stats/60dae5363beab81350aca077
[290621-raw8]:    https://tests.stockfishchess.org/tests/stats/60dae6033beab81350aca07b
[Stockfish 14]:   https://github.com/official-stockfish/Stockfish/commit/773dff020968f7a6f590cfd53e8fd89f12e15e36
[SF14DP]:         https://user-images.githubusercontent.com/64992190/156415128-ee9d81c9-7360-47b2-a800-d11a7518bbb1.png "Development Progress"
[SF14RN]:         https://stockfishchess.org/blog/2021/stockfish-14/ "Release Notes"
[020721-dif]:     https://github.com/official-stockfish/Stockfish/compare/3597f1942e...773dff0209
[260721-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...237ed1ef8f
[260721-elo1]:    https://tests.stockfishchess.org/tests/view/60fe4fa2d8a6b65b2f3a7a59
[260721-master]:  https://github.com/official-stockfish/Stockfish/commit/237ed1ef8fddea77779e7fdcde8e4195d92f123b
[260721-raw1]:    https://tests.stockfishchess.org/tests/stats/60fe4fa2d8a6b65b2f3a7a59
[150821-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...d61d38586e
[150821-elo1]:    https://tests.stockfishchess.org/tests/view/6118e9ae4977aa1525c9c746
[150821-elo8]:    https://tests.stockfishchess.org/tests/view/6118e9f04977aa1525c9c748
[150821-master]:  https://github.com/official-stockfish/Stockfish/commit/d61d38586ee35fd4d93445eb547e4af27cc86e6b
[150821-raw1]:    https://tests.stockfishchess.org/tests/stats/6118e9ae4977aa1525c9c746
[150821-raw8]:    https://tests.stockfishchess.org/tests/stats/6118e9f04977aa1525c9c748
[310821-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...2807dcfab6
[310821-elo1]:    https://tests.stockfishchess.org/tests/view/612e0b9fbb4956d8b78eb635
[310821-master]:  https://github.com/official-stockfish/Stockfish/commit/2807dcfab671bfc7a1bea79f5639dbbd505703ad
[310821-raw1]:    https://tests.stockfishchess.org/tests/stats/612e0b9fbb4956d8b78eb635
[150921-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...723f48dec0
[150921-elo1]:    https://tests.stockfishchess.org/tests/view/6142172c7315e7c73204a614
[150921-elo8]:    https://tests.stockfishchess.org/tests/view/614217467315e7c73204a616
[150921-master]:  https://github.com/official-stockfish/Stockfish/commit/723f48dec0eb05204b51cace54b033a5a85a66b9
[150921-raw1]:    https://tests.stockfishchess.org/tests/stats/6142172c7315e7c73204a614
[150921-raw8]:    https://tests.stockfishchess.org/tests/stats/614217467315e7c73204a616
[061021-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...54a989930e
[061021-elo1]:    https://tests.stockfishchess.org/tests/view/615dcb711a32f4036ac7fc47
[061021-elo8]:    https://tests.stockfishchess.org/tests/view/615dcb871a32f4036ac7fc49
[061021-master]:  https://github.com/official-stockfish/Stockfish/commit/54a989930ebed200c3278c725151e26a2c0da37a
[061021-raw1]:    https://tests.stockfishchess.org/tests/stats/615dcb711a32f4036ac7fc47
[061021-raw8]:    https://tests.stockfishchess.org/tests/stats/615dcb871a32f4036ac7fc49
[181021-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...67d0616483
[181021-elo1]:    https://tests.stockfishchess.org/tests/view/616ddbf44f95b438f7a860af
[181021-master]:  https://github.com/official-stockfish/Stockfish/commit/67d06164833857d3497010e952fd0d2c5f00c095
[181021-raw1]:    https://tests.stockfishchess.org/tests/stats/616ddbf44f95b438f7a860af
[231021-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...2c86ae196d
[231021-elo1]:    https://tests.stockfishchess.org/tests/view/6175c320af70c2be1788fa2b
[231021-elo8]:    https://tests.stockfishchess.org/tests/view/6175c334af70c2be1788fa2d
[231021-master]:  https://github.com/official-stockfish/Stockfish/commit/2c86ae196df8b2a1197e0de1853a6458e404a976
[231021-raw1]:    https://tests.stockfishchess.org/tests/stats/6175c320af70c2be1788fa2b
[231021-raw8]:    https://tests.stockfishchess.org/tests/stats/6175c334af70c2be1788fa2d
[Stockfish 14.1]: https://github.com/official-stockfish/Stockfish/commit/7262fd5d14810b7b495b5038e348a448fda1bcc3
[SF141RN]:        https://stockfishchess.org/blog/2021/stockfish-14-1/ "Release Notes"
[281021-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...7262fd5d14
[051121-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...a0259d8ab9
[051121-elo1]:    https://tests.stockfishchess.org/tests/view/6185b066d7a085ad008eefdf
[051121-master]:  https://github.com/official-stockfish/Stockfish/commit/a0259d8ab9661b7f625474d2cbe18481ef69bbf2
[051121-raw1]:    https://tests.stockfishchess.org/tests/stats/6185b066d7a085ad008eefdf
[231121-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...092b27a6d0
[231121-elo1]:    https://tests.stockfishchess.org/tests/view/619d4e89c0a4ea18ba95a3b8
[231121-elo8]:    https://tests.stockfishchess.org/tests/view/619d4ea9c0a4ea18ba95a3ba
[231121-master]:  https://github.com/official-stockfish/Stockfish/commit/092b27a6d0174f619fff9a53099ac9fdc5c2cb4e
[231121-raw1]:    https://tests.stockfishchess.org/tests/stats/619d4e89c0a4ea18ba95a3b8
[231121-raw8]:    https://tests.stockfishchess.org/tests/stats/619d4ea9c0a4ea18ba95a3ba
[281121-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...af050e5eed
[281121-elo1]:    https://tests.stockfishchess.org/tests/view/61a385323ce29cae572b920f
[281121-master]:  https://github.com/official-stockfish/Stockfish/commit/af050e5eed43f2d360bc6d38a9d9ef64b6ce6ad8
[281121-raw1]:    https://tests.stockfishchess.org/tests/stats/61a385323ce29cae572b920f
[071221-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...b82d93ece4
[071221-elo1]:    https://tests.stockfishchess.org/tests/view/61af497356fcf33bce7dd428
[071221-elo8]:    https://tests.stockfishchess.org/tests/view/61af49ae56fcf33bce7dd430
[071221-master]:  https://github.com/official-stockfish/Stockfish/commit/b82d93ece484f833c994b40d9eddd959ba20ef92
[071221-raw1]:    https://tests.stockfishchess.org/tests/stats/61af497356fcf33bce7dd428
[071221-raw8]:    https://tests.stockfishchess.org/tests/stats/61af49ae56fcf33bce7dd430
[141221-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...c6edf33f53
[141221-elo1]:    https://tests.stockfishchess.org/tests/view/61b896f8dffbe89a358145cb
[141221-master]:  https://github.com/official-stockfish/Stockfish/commit/c6edf33f539f160d4a7009f3aac25e7ec5668eda
[141221-raw1]:    https://tests.stockfishchess.org/tests/stats/61b896f8dffbe89a358145cb
[221221-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...7d82f0d1f4
[221221-elo1]:    https://tests.stockfishchess.org/tests/view/61c2f921a66b89b0007fff35
[221221-elo8]:    https://tests.stockfishchess.org/tests/view/61c2f986a66b89b0007fff54
[221221-master]:  https://github.com/official-stockfish/Stockfish/commit/7d82f0d1f4e25892e1901d25cf5cf6f6a2606c2a
[221221-raw1]:    https://tests.stockfishchess.org/tests/stats/61c2f921a66b89b0007fff35
[221221-raw8]:    https://tests.stockfishchess.org/tests/stats/61c2f986a66b89b0007fff54
[100122-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...44b1ba89a9
[100122-elo1]:    https://tests.stockfishchess.org/tests/view/61dc7d27aad48d052737b7a4
[100122-master]:  https://github.com/official-stockfish/Stockfish/commit/44b1ba89a95f394f3e180eb508f2d7798417c86e
[100122-raw1]:    https://tests.stockfishchess.org/tests/stats/61dc7d27aad48d052737b7a4
[290122-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...90d051952f
[290122-elo1]:    https://tests.stockfishchess.org/tests/view/61f4f474f7fba9f1a4f17837
[290122-elo8]:    https://tests.stockfishchess.org/tests/view/61f4f485f7fba9f1a4f1783c
[290122-master]:  https://github.com/official-stockfish/Stockfish/commit/90d051952f4fce415f09f316e24e1701aafa7a92
[290122-raw1]:    https://tests.stockfishchess.org/tests/stats/61f4f474f7fba9f1a4f17837
[290122-raw8]:    https://tests.stockfishchess.org/tests/stats/61f4f485f7fba9f1a4f1783c
[100222-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...cb9c2594fc
[100222-elo1]:    https://tests.stockfishchess.org/tests/view/620562ffd71106ed12a449a6
[100222-elo8]:    https://tests.stockfishchess.org/tests/view/620822bed71106ed12a4af70
[100222-master]:  https://github.com/official-stockfish/Stockfish/commit/cb9c2594fcedc881ae8f8bfbfdf130cf89840e4c
[100222-raw1]:    https://tests.stockfishchess.org/tests/stats/620562ffd71106ed12a449a6
[100222-raw8]:    https://tests.stockfishchess.org/tests/stats/620822bed71106ed12a4af70
[170222-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...84b1940fca
[170222-elo1]:    https://tests.stockfishchess.org/tests/view/6210f2e5b1792e8985f86e01
[170222-elo8]:    https://tests.stockfishchess.org/tests/view/62115f93b1792e8985f87eb3
[170222-master]:  https://github.com/official-stockfish/Stockfish/commit/84b1940fcae95bb0a641dda9e85cb96f8c21cd22
[170222-raw1]:    https://tests.stockfishchess.org/tests/stats/6210f2e5b1792e8985f86e01
[170222-raw8]:    https://tests.stockfishchess.org/tests/stats/62115f93b1792e8985f87eb3
[190322-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...e31f97e3ba
[190322-elo1]:    https://tests.stockfishchess.org/tests/view/6235d03aceed04483e6f16d8
[190322-master]:  https://github.com/official-stockfish/Stockfish/commit/e31f97e3baa52042fe60d6f4eeb50fe0d9e61013
[190322-raw1]:    https://tests.stockfishchess.org/tests/stats/6235d03aceed04483e6f16d8
[170422-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...df2f7e7527
[170422-elo1]:    https://tests.stockfishchess.org/tests/view/625d156dff677a888877d1be
[170422-elo1uho]: https://tests.stockfishchess.org/tests/view/625d2400ff677a888877d3df
[170422-elo8]:    https://tests.stockfishchess.org/tests/view/625d1586ff677a888877d1c5
[170422-master]:  https://github.com/official-stockfish/Stockfish/commit/df2f7e75276cc93a8cb8c70057903ab0edbd92bd
[170422-raw1]:    https://tests.stockfishchess.org/tests/stats/625d156dff677a888877d1be
[170422-raw1uho]: https://tests.stockfishchess.org/tests/stats/625d2400ff677a888877d3df
[170422-raw8]:    https://tests.stockfishchess.org/tests/stats/625d1586ff677a888877d1c5
[Stockfish 15]:   https://github.com/official-stockfish/Stockfish/commit/e6e324eb28fd49c1fc44b3b65784f85a773ec61c
[SF15DP]:         https://user-images.githubusercontent.com/64992190/163892421-aa025052-53ab-4a53-9162-4043b6f021b0.png "Development Progress"
[SF15RN]:         https://stockfishchess.org/blog/2022/stockfish-15/ "Release Notes"
[180422-dif]:     https://github.com/official-stockfish/Stockfish/compare/773dff0209...e6e324eb28
[140522-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...5372f81cc8
[140522-elo1]:    https://tests.stockfishchess.org/tests/view/627f9a5c56be8ced122d7df7
[140522-elo8]:    https://tests.stockfishchess.org/tests/view/627f9a7356be8ced122d7dfe
[140522-master]:  https://github.com/official-stockfish/Stockfish/commit/5372f81cc81d5be3040db6f2dbfff108c460baf9
[140522-raw1]:    https://tests.stockfishchess.org/tests/stats/627f9a5c56be8ced122d7df7
[140522-raw8]:    https://tests.stockfishchess.org/tests/stats/627f9a7356be8ced122d7dfe
[160622-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...6edc29d720
[160622-elo1]:    https://tests.stockfishchess.org/tests/view/62aac16750949cfc241b0f15
[160622-master]:  https://github.com/official-stockfish/Stockfish/commit/6edc29d720b43383a04bd2208e9666a6f3173a64
[160622-raw1]:    https://tests.stockfishchess.org/tests/stats/62aac16750949cfc241b0f15
[130722-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...4b4b7d1209
[130722-elo1]:    https://tests.stockfishchess.org/tests/view/62ceecfc877d5077fe6e4714
[130722-elo8]:    https://tests.stockfishchess.org/tests/view/62ceed0e877d5077fe6e4718
[130722-master]:  https://github.com/official-stockfish/Stockfish/commit/4b4b7d1209259811537634c68555d2a8f4af197c
[130722-raw1]:    https://tests.stockfishchess.org/tests/stats/62ceecfc877d5077fe6e4714
[130722-raw8]:    https://tests.stockfishchess.org/tests/stats/62ceed0e877d5077fe6e4718
[120822-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...1054a483ca
[120822-elo1]:    https://tests.stockfishchess.org/tests/view/62f64a886f0a08af9f7767aa
[120822-elo1uho]: https://tests.stockfishchess.org/tests/view/62f9d9e623d42b50a8daf3b2
[120822-elo8]:    https://tests.stockfishchess.org/tests/view/62f64a9c6f0a08af9f7767ae
[120822-master]:  https://github.com/official-stockfish/Stockfish/commit/1054a483ca0c560d30fb61617c0192cb4cd31528
[120822-raw1]:    https://tests.stockfishchess.org/tests/stats/62f64a886f0a08af9f7767aa
[120822-raw1uho]: https://tests.stockfishchess.org/tests/stats/62f9d9e623d42b50a8daf3b2
[120822-raw8]:    https://tests.stockfishchess.org/tests/stats/62f64a9c6f0a08af9f7767ae
[070922-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...5eeb96d0e7
[070922-elo1]:    https://tests.stockfishchess.org/tests/view/631835ed37f41b13973d7d81
[070922-elo8]:    https://tests.stockfishchess.org/tests/view/6318361537f41b13973d7d8a
[070922-master]:  https://github.com/official-stockfish/Stockfish/commit/5eeb96d0e7d54686376305029c477c42478aa1d5
[070922-raw1]:    https://tests.stockfishchess.org/tests/stats/631835ed37f41b13973d7d81
[070922-raw8]:    https://tests.stockfishchess.org/tests/stats/6318361537f41b13973d7d8a
[051022-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...da937e219e
[051022-elo1]:    https://tests.stockfishchess.org/tests/view/633df173fb7ccb2ea9bd732a
[051022-elo8]:    https://tests.stockfishchess.org/tests/view/633df17efb7ccb2ea9bd732c
[051022-master]:  https://github.com/official-stockfish/Stockfish/commit/da937e219ee7981966ac29fc11c43470a505ff18
[051022-raw1]:    https://tests.stockfishchess.org/tests/stats/633df173fb7ccb2ea9bd732a
[051022-raw8]:    https://tests.stockfishchess.org/tests/stats/633df17efb7ccb2ea9bd732c
[301022-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...d09653df0d
[301022-elo1]:    https://tests.stockfishchess.org/tests/view/635e9692a7c06f6479d40009
[301022-elo1uho]: https://tests.stockfishchess.org/tests/view/635efedba7c06f6479d40ae6
[301022-elo8]:    https://tests.stockfishchess.org/tests/view/635e96b4a7c06f6479d4000c
[301022-master]:  https://github.com/official-stockfish/Stockfish/commit/d09653df0d1bfec0af05ab2e8975e0d8e5cccba8
[301022-raw1]:    https://tests.stockfishchess.org/tests/stats/635e9692a7c06f6479d40009
[301022-raw1uho]: https://tests.stockfishchess.org/tests/stats/635efedba7c06f6479d40ae6
[301022-raw8]:    https://tests.stockfishchess.org/tests/stats/635e96b4a7c06f6479d4000c
[021222-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...d60f5de967
[021222-elo1]:    https://tests.stockfishchess.org/tests/view/638a4dd7d2b9c924c4c6297b
[021222-elo1uho]: https://tests.stockfishchess.org/tests/view/638a5275d2b9c924c4c62a3c
[021222-elo8]:    https://tests.stockfishchess.org/tests/view/638a4ddfd2b9c924c4c6297e
[021222-master]:  https://github.com/official-stockfish/Stockfish/commit/d60f5de9670cc84ba7940b5815bc3e128da9423f
[021222-raw1]:    https://tests.stockfishchess.org/tests/stats/638a4dd7d2b9c924c4c6297b
[021222-raw1uho]: https://tests.stockfishchess.org/tests/stats/638a5275d2b9c924c4c62a3c
[021222-raw8]:    https://tests.stockfishchess.org/tests/stats/638a4ddfd2b9c924c4c6297e
[Stockfish 15.1]: https://github.com/official-stockfish/Stockfish/commit/758f9c9350abee36a5865ec701560db8ea62004d
[SF151RN]:        https://stockfishchess.org/blog/2022/stockfish-15-1/ "Release Notes"
[041222-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...758f9c9350
[191222-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...c2d507005c
[191222-elo1]:    https://tests.stockfishchess.org/tests/view/63a0c0d3586179db6eb3fce6
[191222-master]:  https://github.com/official-stockfish/Stockfish/commit/c2d507005c51145211a7963af7c41026bd759d08
[191222-raw1]:    https://tests.stockfishchess.org/tests/stats/63a0c0d3586179db6eb3fce6
[010123-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...be9bc420af
[010123-elo1]:    https://tests.stockfishchess.org/tests/view/63b16fcc9b0bd9e1091ceab3
[010123-elo1uho]: https://tests.stockfishchess.org/tests/view/63cd134d344bb01c191b48ae
[010123-elo8]:    https://tests.stockfishchess.org/tests/view/63b16fd69b0bd9e1091ceab9
[010123-master]:  https://github.com/official-stockfish/Stockfish/commit/be9bc420afa11314c886c0aede4c4ae3d76f8a50
[010123-raw1]:    https://tests.stockfishchess.org/tests/stats/63b16fcc9b0bd9e1091ceab3
[010123-raw1uho]: https://tests.stockfishchess.org/tests/stats/63cd134d344bb01c191b48ae
[010123-raw8]:    https://tests.stockfishchess.org/tests/stats/63b16fd69b0bd9e1091ceab9
[230123-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...596a528c6a
[230123-elo1]:    https://tests.stockfishchess.org/tests/view/63ce238dc93e8828d0f03aaa
[230123-elo1uho]: https://tests.stockfishchess.org/tests/view/63ce23bcc93e8828d0f03ab6
[230123-elo8]:    https://tests.stockfishchess.org/tests/view/63ce2398c93e8828d0f03ab0
[230123-master]:  https://github.com/official-stockfish/Stockfish/commit/596a528c6a9ace6fb1a8407c86d972d96653418d
[230123-raw1]:    https://tests.stockfishchess.org/tests/stats/63ce238dc93e8828d0f03aaa
[230123-raw1uho]: https://tests.stockfishchess.org/tests/stats/63ce23bcc93e8828d0f03ab6
[230123-raw8]:    https://tests.stockfishchess.org/tests/stats/63ce2398c93e8828d0f03ab0
[090223-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...05dea2ca46
[090223-elo1]:    https://tests.stockfishchess.org/tests/view/63e498e6b5f425d71f771dbc
[090223-elo1uho]: https://tests.stockfishchess.org/tests/view/63e49921b5f425d71f771dc7
[090223-elo8]:    https://tests.stockfishchess.org/tests/view/63e498f0b5f425d71f771dbe
[090223-master]:  https://github.com/official-stockfish/Stockfish/commit/05dea2ca4657dec10637bb53c4ad583f680e0677
[090223-raw1]:    https://tests.stockfishchess.org/tests/stats/63e498e6b5f425d71f771dbc
[090223-raw1uho]: https://tests.stockfishchess.org/tests/stats/63e49921b5f425d71f771dc7
[090223-raw8]:    https://tests.stockfishchess.org/tests/stats/63e498f0b5f425d71f771dbe
[180223-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...037ef3e18d
[180223-elo1]:    https://tests.stockfishchess.org/tests/view/63f0d381e74a12625bcc61e5
[180223-elo1uho]: https://tests.stockfishchess.org/tests/view/63f0d392e74a12625bcc61eb
[180223-master]:  https://github.com/official-stockfish/Stockfish/commit/037ef3e18dc7f5455cc671995ae38d5b4d1fce4a
[180223-raw1]:    https://tests.stockfishchess.org/tests/stats/63f0d381e74a12625bcc61e5
[180223-raw1uho]: https://tests.stockfishchess.org/tests/stats/63f0d392e74a12625bcc61eb
[240223-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...472e726bff
[240223-elo1]:    https://tests.stockfishchess.org/tests/view/63f90ecee74a12625bcdd191
[240223-elo1uho]: https://tests.stockfishchess.org/tests/view/63f90edce74a12625bcdd197
[240223-elo8]:    https://tests.stockfishchess.org/tests/view/63f90ee7e74a12625bcdd19c
[240223-master]:  https://github.com/official-stockfish/Stockfish/commit/472e726bff0d0e496dc8359cc071726a76317a72
[240223-raw1]:    https://tests.stockfishchess.org/tests/stats/63f90ecee74a12625bcdd191
[240223-raw1uho]: https://tests.stockfishchess.org/tests/stats/63f90edce74a12625bcdd197
[240223-raw8]:    https://tests.stockfishchess.org/tests/stats/63f90ee7e74a12625bcdd19c
[190323-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...02e4697055
[190323-elo1]:    https://tests.stockfishchess.org/tests/view/6416e54965775d3b539ebf93
[190323-elo1uho]: https://tests.stockfishchess.org/tests/view/6416e57365775d3b539ebf9e
[190323-elo8]:    https://tests.stockfishchess.org/tests/view/6416e55265775d3b539ebf96
[190323-master]:  https://github.com/official-stockfish/Stockfish/commit/02e4697055519ed206fa76e4ef9abb9f156cd1a0
[190323-raw1]:    https://tests.stockfishchess.org/tests/stats/6416e54965775d3b539ebf93
[190323-raw1uho]: https://tests.stockfishchess.org/tests/stats/6416e57365775d3b539ebf9e
[190323-raw8]:    https://tests.stockfishchess.org/tests/stats/6416e55265775d3b539ebf96
[010423-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...6a6e32dfc8
[010423-elo1]:    https://tests.stockfishchess.org/tests/view/6428409fdb43ab2ba6fa2e8d
[010423-elo1uho]: https://tests.stockfishchess.org/tests/view/642840b9db43ab2ba6fa2e97
[010423-elo8]:    https://tests.stockfishchess.org/tests/view/642840a8db43ab2ba6fa2e93
[010423-master]:  https://github.com/official-stockfish/Stockfish/commit/6a6e32dfc80488dfdcd6c23e6001063b47729e890
[010423-raw1]:    https://tests.stockfishchess.org/tests/stats/6428409fdb43ab2ba6fa2e8d
[010423-raw1uho]: https://tests.stockfishchess.org/tests/stats/642840b9db43ab2ba6fa2e97
[010423-raw8]:    https://tests.stockfishchess.org/tests/stats/642840a8db43ab2ba6fa2e93
[220423-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...ba06c480a7
[220423-elo1]:    https://tests.stockfishchess.org/tests/view/6443a560bc6f5930d1d36ba4
[220423-elo1uho]: https://tests.stockfishchess.org/tests/view/6443a581bc6f5930d1d36baa
[220423-elo8]:    https://tests.stockfishchess.org/tests/view/6443a569bc6f5930d1d36ba6
[220423-master]:  https://github.com/official-stockfish/Stockfish/commit/ba06c480a752458a8159db0c9110bd3b7e34145a
[220423-raw1]:    https://tests.stockfishchess.org/tests/stats/6443a560bc6f5930d1d36ba4
[220423-raw1uho]: https://tests.stockfishchess.org/tests/stats/6443a581bc6f5930d1d36baa
[220423-raw8]:    https://tests.stockfishchess.org/tests/stats/6443a569bc6f5930d1d36ba6
[070523-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...65e2150501
[070523-elo1]:    https://tests.stockfishchess.org/tests/view/64580c878ab4042ca7893e81
[070523-elo1uho]: https://tests.stockfishchess.org/tests/view/64580ca68ab4042ca7893e86
[070523-elo8]:    https://tests.stockfishchess.org/tests/view/64580c8e8ab4042ca7893e83
[070523-master]:  https://github.com/official-stockfish/Stockfish/commit/65e2150501b87e6ce00fae4e3f056444f39462fd
[070523-raw1]:    https://tests.stockfishchess.org/tests/stats/64580c878ab4042ca7893e81
[070523-raw1uho]: https://tests.stockfishchess.org/tests/stats/64580ca68ab4042ca7893e86
[070523-raw8]:    https://tests.stockfishchess.org/tests/stats/64580c8e8ab4042ca7893e83
[040623-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...8dea070538
[040623-elo1]:    https://tests.stockfishchess.org/tests/view/647d01b97cf638f0f53fa028
[040623-elo1uho]: https://tests.stockfishchess.org/tests/view/647d01c97cf638f0f53fa02b
[040623-elo8]:    https://tests.stockfishchess.org/tests/view/647d01db7cf638f0f53fa02e
[040623-master]:  https://github.com/official-stockfish/Stockfish/commit/8dea070538dcad790de3c5b9720bdbb836a32440
[040623-raw1]:    https://tests.stockfishchess.org/tests/stats/647d01b97cf638f0f53fa028
[040623-raw1uho]: https://tests.stockfishchess.org/tests/stats/647d01c97cf638f0f53fa02b
[040623-raw8]:    https://tests.stockfishchess.org/tests/stats/647d01db7cf638f0f53fa02e
[120623-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...38e61663d8
[120623-elo1]:    https://tests.stockfishchess.org/tests/view/64876b43713491385c8030ec
[120623-elo1uho]: https://tests.stockfishchess.org/tests/view/64876b6b713491385c8030f6
[120623-elo8]:    https://tests.stockfishchess.org/tests/view/64876b51713491385c8030f0
[120623-master]:  https://github.com/official-stockfish/Stockfish/commit/38e61663d836e062af0bc002814ad5149c4b7729
[120623-raw1]:    https://tests.stockfishchess.org/tests/stats/64876b43713491385c8030ec
[120623-raw1uho]: https://tests.stockfishchess.org/tests/stats/64876b6b713491385c8030f6
[120623-raw8]:    https://tests.stockfishchess.org/tests/stats/64876b51713491385c8030f0
[220623-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...a49b3ba7ed
[220623-elo1]:    https://tests.stockfishchess.org/tests/view/6494094adc7002ce609c99a4
[220623-elo1uho]: https://tests.stockfishchess.org/tests/view/6494097ddc7002ce609c99b7
[220623-elo8]:    https://tests.stockfishchess.org/tests/view/64940956dc7002ce609c99a7
[220623-master]:  https://github.com/official-stockfish/Stockfish/commit/a49b3ba7ed5d9be9151c8ceb5eed40efe3387c75
[220623-raw1]:    https://tests.stockfishchess.org/tests/stats/6494094adc7002ce609c99a4
[220623-raw1uho]: https://tests.stockfishchess.org/tests/stats/6494097ddc7002ce609c99b7
[220623-raw8]:    https://tests.stockfishchess.org/tests/stats/64940956dc7002ce609c99a7

[Stockfish 16]:   https://github.com/official-stockfish/Stockfish/commit/68e1e9b381
[SF16DP]:         https://github.com/official-stockfish/Stockfish/assets/63931154/5297318e-89fb-407f-a8a8-9e4278d90eda "Development Progress"
[SF16RN]:         https://stockfishchess.org/blog/2023/stockfish-16/ "Release Notes"
[290623-dif]:     https://github.com/official-stockfish/Stockfish/compare/e6e324eb28...68e1e9b381

[190723-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...5ea1cbc778
[190723-elo1]:    https://tests.stockfishchess.org/tests/view/64b83cd1dc56e1650abad318
[190723-elo8]:    https://tests.stockfishchess.org/tests/view/64b83cdbdc56e1650abad31a
[190723-master]:  https://github.com/official-stockfish/Stockfish/commit/5ea1cbc778508a9a7b720becaf22dd96a4472826
[190723-raw1]:    https://tests.stockfishchess.org/tests/stats/64b83cd1dc56e1650abad318
[190723-raw8]:    https://tests.stockfishchess.org/tests/stats/64b83cdbdc56e1650abad31a
[130823-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...9b80897657
[130823-elo1]:    https://tests.stockfishchess.org/tests/view/64d8af545b17f7c21c0e854c
[130823-elo8]:    https://tests.stockfishchess.org/tests/view/64d8af655b17f7c21c0e854f
[130823-master]:  https://github.com/official-stockfish/Stockfish/commit/9b80897657bde99cfb6568d8bd3386c3999f22c4
[130823-raw1]:    https://tests.stockfishchess.org/tests/stats/64d8af545b17f7c21c0e854c
[130823-raw8]:    https://tests.stockfishchess.org/tests/stats/64d8af655b17f7c21c0e854f
[110923-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...b9319c4fa4
[110923-elo1]:    https://tests.stockfishchess.org/tests/view/64ff804d2cd016da89ab747f
[110923-elo8]:    https://tests.stockfishchess.org/tests/view/64ff80602cd016da89ab7484
[110923-master]:  https://github.com/official-stockfish/Stockfish/commit/b9319c4fa4f42438f484d144be9a1306765cf998
[110923-raw1]:    https://tests.stockfishchess.org/tests/stats/64ff804d2cd016da89ab747f
[110923-raw8]:    https://tests.stockfishchess.org/tests/stats/64ff80602cd016da89ab7484
[220923-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...70ba9de85c
[220923-elo1]:    https://tests.stockfishchess.org/tests/view/650dcf1bfb151d43ae6d704f
[220923-elo8]:    https://tests.stockfishchess.org/tests/view/650dcf25fb151d43ae6d7052
[220923-master]:  https://github.com/official-stockfish/Stockfish/commit/70ba9de85cddc5460b1ec53e0a99bee271e26ece
[220923-raw1]:    https://tests.stockfishchess.org/tests/stats/650dcf1bfb151d43ae6d704f
[220923-raw8]:    https://tests.stockfishchess.org/tests/stats/650dcf25fb151d43ae6d7052
[081023-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...7a4de96159
[081023-elo1]:    https://tests.stockfishchess.org/tests/view/652244f53125598fc7eb225b
[081023-elo8]:    https://tests.stockfishchess.org/tests/view/652245013125598fc7eb225d
[081023-master]:  https://github.com/official-stockfish/Stockfish/commit/7a4de96159f76f2465d474d76e08a1c8ca3383b8
[081023-raw1]:    https://tests.stockfishchess.org/tests/stats/652244f53125598fc7eb225b
[081023-raw8]:    https://tests.stockfishchess.org/tests/stats/652245013125598fc7eb225d
[231023-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...49ece9f791
[231023-elo1]:    https://tests.stockfishchess.org/tests/view/6536be80cc309ae83955ad1a
[231023-elo8]:    https://tests.stockfishchess.org/tests/view/6536be88cc309ae83955ad1d
[231023-master]:  https://github.com/official-stockfish/Stockfish/commit/49ece9f791b84a261f2a8865d2de51c20a520bc6
[231023-raw1]:    https://tests.stockfishchess.org/tests/stats/6536be80cc309ae83955ad1a
[231023-raw8]:    https://tests.stockfishchess.org/tests/stats/6536be88cc309ae83955ad1d
[031123-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...b4b704e686
[031123-elo1]:    https://tests.stockfishchess.org/tests/view/65456b94136acbc573523e28
[031123-elo8]:    https://tests.stockfishchess.org/tests/view/65456b9e136acbc573523e2c
[031123-master]:  https://github.com/official-stockfish/Stockfish/commit/b4b704e6866bde21c69cd53457a6a91a15182b36
[031123-raw1]:    https://tests.stockfishchess.org/tests/stats/65456b94136acbc573523e28
[031123-raw8]:    https://tests.stockfishchess.org/tests/stats/65456b9e136acbc573523e2c
[021223-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...08cdbca56f
[021223-elo1]:    https://tests.stockfishchess.org/tests/view/656b4e3a136acbc573556df1
[021223-elo8]:    https://tests.stockfishchess.org/tests/view/656b4e3e136acbc573556df3
[021223-master]:  https://github.com/official-stockfish/Stockfish/commit/08cdbca56fac98513481683a92eb1ecdc00d3f6e
[021223-raw1]:    https://tests.stockfishchess.org/tests/stats/656b4e3a136acbc573556df1
[021223-raw8]:    https://tests.stockfishchess.org/tests/stats/656b4e3e136acbc573556df3
[311223-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...3cfaef7431
[311223-elo1]:    https://tests.stockfishchess.org/tests/view/6591bf1a79aa8af82b958776
[311223-elo8]:    https://tests.stockfishchess.org/tests/view/6591bf2c79aa8af82b95877a
[311223-master]:  https://github.com/official-stockfish/Stockfish/commit/3cfaef74311e943298a9a82bce5717d272338e66
[311223-raw1]:    https://tests.stockfishchess.org/tests/stats/6591bf1a79aa8af82b958776
[311223-raw8]:    https://tests.stockfishchess.org/tests/stats/6591bf2c79aa8af82b95877a
[070124-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...7c5e3f2865
[070124-elo1]:    https://tests.stockfishchess.org/tests/view/659b0cee79aa8af82b963dab
[070124-elo8]:    https://tests.stockfishchess.org/tests/view/659b0cf179aa8af82b963dae
[070124-master]:  https://github.com/official-stockfish/Stockfish/commit/7c5e3f28655607288a980645e6b2ce600a627b11
[070124-raw1]:    https://tests.stockfishchess.org/tests/stats/659b0cee79aa8af82b963dab
[070124-raw8]:    https://tests.stockfishchess.org/tests/stats/659b0cf179aa8af82b963dae
[210124-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...a6fd17f27d
[210124-elo1]:    https://tests.stockfishchess.org/tests/view/65ad061879aa8af82b979da1
[210124-elo8]:    https://tests.stockfishchess.org/tests/view/65ad061f79aa8af82b979da3
[210124-master]:  https://github.com/official-stockfish/Stockfish/commit/a6fd17f27d7675332166e9e6ea8210237281fc77
[210124-raw1]:    https://tests.stockfishchess.org/tests/stats/65ad061879aa8af82b979da1
[210124-raw8]:    https://tests.stockfishchess.org/tests/stats/65ad061f79aa8af82b979da3
[110224-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...7ccde25baf
[110224-elo1]:    https://tests.stockfishchess.org/tests/view/65c9391b1d8e83c78bfcdd46
[110224-elo8]:    https://tests.stockfishchess.org/tests/view/65c939221d8e83c78bfcdd48
[110224-master]:  https://github.com/official-stockfish/Stockfish/commit/7ccde25baf03e77926644b282fed68ba0b5ddf95
[110224-raw1]:    https://tests.stockfishchess.org/tests/stats/65c9391b1d8e83c78bfcdd46
[110224-raw8]:    https://tests.stockfishchess.org/tests/stats/65c939221d8e83c78bfcdd48
[170224-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...fc41f64dfd
[170224-elo1]:    https://tests.stockfishchess.org/tests/view/65d666051d8e83c78bfddbd6
[170224-elo8]:    https://tests.stockfishchess.org/tests/view/65d666051d8e83c78bfddbd8
[170224-master]:  https://github.com/official-stockfish/Stockfish/commit/fc41f64dfd8a61d0e275ddbecec292833458b86a
[170224-raw1]:    https://tests.stockfishchess.org/tests/stats/65d666051d8e83c78bfddbd6
[170224-raw8]:    https://tests.stockfishchess.org/tests/stats/65d666051d8e83c78bfddbd8

[Stockfish 16.1]: https://github.com/official-stockfish/Stockfish/commit/e67cc979fd2c0e66dfc2b2f2daa0117458cfc462
[SF161RN]:        https://stockfishchess.org/blog/2024/stockfish-16-1/ "Release Notes"
[240224-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...e67cc979fd

[120324-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...627974c99f
[120324-elo1]:    https://tests.stockfishchess.org/tests/view/65f0798e0ec64f0526c463e5
[120324-elo8]:    https://tests.stockfishchess.org/tests/view/65f079910ec64f0526c463e7
[120324-master]:  https://github.com/official-stockfish/Stockfish/commit/627974c99fcd5a3dcbd5a8e0eb12f2afeb2d0a9a
[120324-raw1]:    https://tests.stockfishchess.org/tests/stats/65f0798e0ec64f0526c463e5
[120324-raw8]:    https://tests.stockfishchess.org/tests/stats/65f079910ec64f0526c463e7
[290324-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...e13e4cfb83
[290324-elo1]:    https://tests.stockfishchess.org/tests/view/660688190ec64f0526c59e5a
[290324-elo8]:    https://tests.stockfishchess.org/tests/view/660688240ec64f0526c59e5c
[290324-master]:  https://github.com/official-stockfish/Stockfish/commit/e13e4cfb8340cdb26a00679681a0f163c6b4f0a9
[290324-raw1]:    https://tests.stockfishchess.org/tests/stats/660688190ec64f0526c59e5a
[290324-raw8]:    https://tests.stockfishchess.org/tests/stats/660688240ec64f0526c59e5c
[110424-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...249eec6715
[110424-elo1]:    https://tests.stockfishchess.org/tests/view/66184ce85a4693796d966cba
[110424-elo8]:    https://tests.stockfishchess.org/tests/view/66184cf15a4693796d966cbc
[110424-master]:  https://github.com/official-stockfish/Stockfish/commit/249eec67152d334d76c0f981907a6f5787289443
[110424-raw1]:    https://tests.stockfishchess.org/tests/stats/66184ce85a4693796d966cba
[110424-raw8]:    https://tests.stockfishchess.org/tests/stats/66184cf15a4693796d966cbc
[240424-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...49ef4c935a
[240424-elo1]:    https://tests.stockfishchess.org/tests/view/66293d2a3fe04ce4cefc7a5f
[240424-elo8]:    https://tests.stockfishchess.org/tests/view/66293d2e3fe04ce4cefc7a61
[240424-master]:  https://github.com/official-stockfish/Stockfish/commit/49ef4c935a5cb0e4d94096e6354caa06b36b3e3c
[240424-raw1]:    https://tests.stockfishchess.org/tests/stats/66293d2a3fe04ce4cefc7a5f
[240424-raw8]:    https://tests.stockfishchess.org/tests/stats/66293d2e3fe04ce4cefc7a61
[050524-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...070e564c38
[050524-elo1]:    https://tests.stockfishchess.org/tests/view/663787949819650825aa6773
[050524-elo8]:    https://tests.stockfishchess.org/tests/view/663787959819650825aa6777
[050524-master]:  https://github.com/official-stockfish/Stockfish/commit/070e564c389eb2c263f3982060ab5899b67d0a62
[050524-raw1]:    https://tests.stockfishchess.org/tests/stats/663787949819650825aa6773
[050524-raw8]:    https://tests.stockfishchess.org/tests/stats/663787959819650825aa6777
[130524-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...e608eab8dd
[130524-elo1]:    https://tests.stockfishchess.org/tests/view/6641a8bef9f4e8fc783cb991
[130524-elo8]:    https://tests.stockfishchess.org/tests/view/6641a8c8f9f4e8fc783cb993
[130524-master]:  https://github.com/official-stockfish/Stockfish/commit/e608eab8dd9f7bd68f192d56d742f621674b8fa8
[130524-raw1]:    https://tests.stockfishchess.org/tests/stats/6641a8bef9f4e8fc783cb991
[130524-raw8]:    https://tests.stockfishchess.org/tests/stats/6641a8c8f9f4e8fc783cb993
[180524-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...99f1bacfd6
[180524-elo1]:    https://tests.stockfishchess.org/tests/view/6648e29e02679895021d0594
[180524-elo8]:    https://tests.stockfishchess.org/tests/view/6648e2a602679895021d0596
[180524-master]:  https://github.com/official-stockfish/Stockfish/commit/99f1bacfd6864afca86ae74f33232b9cdfb3828c
[180524-raw1]:    https://tests.stockfishchess.org/tests/stats/6648e29e02679895021d0594
[180524-raw8]:    https://tests.stockfishchess.org/tests/stats/6648e2a602679895021d0596
[280524-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...a169c78b6d
[280524-elo1]:    https://tests.stockfishchess.org/tests/view/6656c2f46b0e318cefa8bbd8
[280524-elo8]:    https://tests.stockfishchess.org/tests/view/6656c30a6b0e318cefa8bbdb
[280524-master]:  https://github.com/official-stockfish/Stockfish/commit/a169c78b6d3b082068deb49a39aaa1fd75464c7f
[280524-raw1]:    https://tests.stockfishchess.org/tests/stats/6656c2f46b0e318cefa8bbd8
[280524-raw8]:    https://tests.stockfishchess.org/tests/stats/6656c30a6b0e318cefa8bbdb
[080624-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...e271059e08
[080624-elo1]:    https://tests.stockfishchess.org/tests/view/6664d56822234461cef58e71
[080624-elo8]:    https://tests.stockfishchess.org/tests/view/6664d56b22234461cef58e73
[080624-master]:  https://github.com/official-stockfish/Stockfish/commit/e271059e08c6258420af12897367ea2149220171
[080624-raw1]:    https://tests.stockfishchess.org/tests/stats/6664d56822234461cef58e71
[080624-raw8]:    https://tests.stockfishchess.org/tests/stats/6664d56b22234461cef58e73
[010724-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...6138a0fd0e
[010724-elo1]:    https://tests.stockfishchess.org/tests/view/6683a08cc4f539faa03268e3
[010724-elo8]:    https://tests.stockfishchess.org/tests/view/6683a096c4f539faa03268e5
[010724-master]:  https://github.com/official-stockfish/Stockfish/commit/6138a0fd0e43753a86e4a170a5f6e2b7b6752677
[010724-raw1]:    https://tests.stockfishchess.org/tests/stats/6683a08cc4f539faa03268e3
[010724-raw8]:    https://tests.stockfishchess.org/tests/stats/6683a096c4f539faa03268e5
[090724-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...362a77a345
[090724-elo1]:    https://tests.stockfishchess.org/tests/view/668d79a65034141ae5999e43
[090724-elo8]:    https://tests.stockfishchess.org/tests/view/668d79ae5034141ae5999e45
[090724-master]:  https://github.com/official-stockfish/Stockfish/commit/362a77a3450335e1940020c080bf3b7b361c594a
[090724-raw1]:    https://tests.stockfishchess.org/tests/stats/668d79a65034141ae5999e43
[090724-raw8]:    https://tests.stockfishchess.org/tests/stats/668d79ae5034141ae5999e45
[230724-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...b55217fd02
[230724-elo1]:    https://tests.stockfishchess.org/tests/view/669feadf4ff211be9d4ecaf4
[230724-elo8]:    https://tests.stockfishchess.org/tests/view/669feae74ff211be9d4ecaf6
[230724-master]:  https://github.com/official-stockfish/Stockfish/commit/b55217fd02d8e5bc0754e5f27bc84df7b01479a6
[230724-raw1]:    https://tests.stockfishchess.org/tests/stats/669feadf4ff211be9d4ecaf4
[230724-raw8]:    https://tests.stockfishchess.org/tests/stats/669feae74ff211be9d4ecaf6
[200824-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...9fb58328e3
[200824-elo1]:    https://tests.stockfishchess.org/tests/view/66c4f20021503a509c13b8b7
[200824-elo8]:    https://tests.stockfishchess.org/tests/view/66c4f21721503a509c13b8b9
[200824-master]:  https://github.com/official-stockfish/Stockfish/commit/9fb58328e363d84e3cf720b018e639b139ba95c2
[200824-raw1]:    https://tests.stockfishchess.org/tests/stats/66c4f20021503a509c13b8b7
[200824-raw8]:    https://tests.stockfishchess.org/tests/stats/66c4f21721503a509c13b8b9
[030924-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...38e0cc7b90
[030924-elo1]:    https://tests.stockfishchess.org/tests/view/66d738ba9de3e7f9b33d159a
[030924-elo8]:    https://tests.stockfishchess.org/tests/view/66d738c69de3e7f9b33d159c
[030924-master]:  https://github.com/official-stockfish/Stockfish/commit/38e0cc7b909796c1a71d9c07b636698b69420975
[030924-raw1]:    https://tests.stockfishchess.org/tests/stats/66d738ba9de3e7f9b33d159a
[030924-raw8]:    https://tests.stockfishchess.org/tests/stats/66d738c69de3e7f9b33d159c

[Stockfish 17]:   https://github.com/official-stockfish/Stockfish/commit/e0bfc4b69bbe928d6f474a46560bcc3b3f6709aa
[SF17DP]:         https://github.com/user-attachments/assets/9e3c74ea-93bf-4f4d-94ca-a344efbc2da6 "Development Progress"
[SF17RN]:         https://stockfishchess.org/blog/2024/stockfish-17/ "Release Notes"
[060924-dif]:     https://github.com/official-stockfish/Stockfish/compare/68e1e9b381...e0bfc4b69b

[121024-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...9766db8139
[121024-elo1]:    https://tests.stockfishchess.org/tests/view/670b8b7f86d5ee47d953c2c3
[121024-elo8]:    https://tests.stockfishchess.org/tests/view/670b8b8086d5ee47d953c2c5
[121024-master]:  https://github.com/official-stockfish/Stockfish/commit/9766db8139ce8815110c15bdde8381d0564a63fa
[121024-raw1]:    https://tests.stockfishchess.org/tests/stats/670b8b7f86d5ee47d953c2c3
[121024-raw8]:    https://tests.stockfishchess.org/tests/stats/670b8b8086d5ee47d953c2c5
[131124-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...82b092ca48
[131124-elo1]:    https://tests.stockfishchess.org/tests/view/6735001986d5ee47d953ea7c
[131124-elo8]:    https://tests.stockfishchess.org/tests/view/6735001986d5ee47d953ea7e
[131124-master]:  https://github.com/official-stockfish/Stockfish/commit/82b092ca48c2efeadf2108a8351bb1309c4b7780
[131124-raw1]:    https://tests.stockfishchess.org/tests/stats/6735001986d5ee47d953ea7c
[131124-raw8]:    https://tests.stockfishchess.org/tests/stats/6735001986d5ee47d953ea7e
[081224-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...a8b6bf1b1a
[081224-elo1]:    https://tests.stockfishchess.org/tests/view/6755ed2e86d5ee47d9541a2a
[081224-elo8]:    https://tests.stockfishchess.org/tests/view/6755ed2e86d5ee47d9541a2c
[081224-master]:  https://github.com/official-stockfish/Stockfish/commit/a8b6bf1b1a978775ad15ae677d8d425ccd05304b
[081224-raw1]:    https://tests.stockfishchess.org/tests/stats/6755ed2e86d5ee47d9541a2a
[081224-raw8]:    https://tests.stockfishchess.org/tests/stats/6755ed2e86d5ee47d9541a2c
[060125-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...c76c179361
[060125-elo1]:    https://tests.stockfishchess.org/tests/view/677b1aaf3b4d66d285666284
[060125-elo8]:    https://tests.stockfishchess.org/tests/view/677b1ab53b4d66d285666286
[060125-master]:  https://github.com/official-stockfish/Stockfish/commit/c76c1793615b17b97dd504f8c81c1ff2c63c232a
[060125-raw1]:    https://tests.stockfishchess.org/tests/stats/677b1aaf3b4d66d285666284
[060125-raw8]:    https://tests.stockfishchess.org/tests/stats/677b1ab53b4d66d285666286
[120125-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...c085670b84
[120125-elo1]:    https://tests.stockfishchess.org/tests/view/678429ab6ddf09c0b4b70de2
[120125-elo8]:    https://tests.stockfishchess.org/tests/view/678429b06ddf09c0b4b70de5
[120125-master]:  https://github.com/official-stockfish/Stockfish/commit/c085670b8474dd2137446ff278f6b73f4374cc68
[120125-raw1]:    https://tests.stockfishchess.org/tests/stats/678429ab6ddf09c0b4b70de2
[120125-raw8]:    https://tests.stockfishchess.org/tests/stats/678429b06ddf09c0b4b70de5
[250125-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...27e747d1d7
[250125-elo1]:    https://tests.stockfishchess.org/tests/view/67962374f6281b7d7b186dae
[250125-elo8]:    https://tests.stockfishchess.org/tests/view/6796237cf6281b7d7b186dc4
[250125-master]:  https://github.com/official-stockfish/Stockfish/commit/27e747d1d727386bec6eea01456fcbeae604bfe3
[250125-raw1]:    https://tests.stockfishchess.org/tests/stats/67962374f6281b7d7b186dae
[250125-raw8]:    https://tests.stockfishchess.org/tests/stats/6796237cf6281b7d7b186dc4
[040225-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...e852d9880a
[040225-elo1]:    https://tests.stockfishchess.org/tests/view/67a27b0ceb183d11c659458b
[040225-elo8]:    https://tests.stockfishchess.org/tests/view/67a27b0eeb183d11c659458d
[040225-master]:  https://github.com/official-stockfish/Stockfish/commit/e852d9880a6d3e25d92b6db8216f497ad98c2c57
[040225-raw1]:    https://tests.stockfishchess.org/tests/stats/67a27b0ceb183d11c659458b
[040225-raw8]:    https://tests.stockfishchess.org/tests/stats/67a27b0eeb183d11c659458d
[050225-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...d66e603070
[050225-elo1]:    https://tests.stockfishchess.org/tests/view/67a3a7df19f522d3866d2b68
[050225-elo8]:    https://tests.stockfishchess.org/tests/view/67a3a7ed19f522d3866d2b6a
[050225-master]:  https://github.com/official-stockfish/Stockfish/commit/d66e603070a4ae76dcc8aeae69882d7d10ac3846
[050225-raw1]:    https://tests.stockfishchess.org/tests/stats/67a3a7df19f522d3866d2b68
[050225-raw8]:    https://tests.stockfishchess.org/tests/stats/67a3a7ed19f522d3866d2b6a
[240225-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...93b966829b
[240225-elo1]:    https://tests.stockfishchess.org/tests/view/67bcb7fe28436466447786c7
[240225-elo8]:    https://tests.stockfishchess.org/tests/view/67bcb80028436466447786c9
[240225-master]:  https://github.com/official-stockfish/Stockfish/commit/93b966829bd7d2d9d9dce49f11e20125f48d0cfd
[240225-raw1]:    https://tests.stockfishchess.org/tests/stats/67bcb7fe28436466447786c7
[240225-raw8]:    https://tests.stockfishchess.org/tests/stats/67bcb80028436466447786c9
[210325-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...6ceaca4c7b
[210325-elo1]:    https://tests.stockfishchess.org/tests/view/67dd3f518c7f315cc372ac68
[210325-elo8]:    https://tests.stockfishchess.org/tests/view/67dd3f508c7f315cc372ac66
[210325-master]:  https://github.com/official-stockfish/Stockfish/commit/6ceaca4c7b2cc1fa87617b1b9e83d38d8e880924
[210325-raw1]:    https://tests.stockfishchess.org/tests/stats/67dd3f518c7f315cc372ac68
[210325-raw8]:    https://tests.stockfishchess.org/tests/stats/67dd3f508c7f315cc372ac66
[290325-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...aafc732bcb
[290325-elo1]:    https://tests.stockfishchess.org/tests/view/67e7d2fd6682f97da2178fbd
[290325-elo8]:    https://tests.stockfishchess.org/tests/view/67e7d2fd6682f97da2178fbf
[290325-master]:  https://github.com/official-stockfish/Stockfish/commit/aafc732bcbfbf847e2ce15bb5371902c1801de36
[290325-raw1]:    https://tests.stockfishchess.org/tests/stats/67e7d2fd6682f97da2178fbd
[290325-raw8]:    https://tests.stockfishchess.org/tests/stats/67e7d2fd6682f97da2178fbf

[Stockfish 17.1]: https://github.com/official-stockfish/Stockfish/commit/03e27488f3d21d8ff4dbf3065603afa21dbd0ef3
[SF171RN]:        https://stockfishchess.org/blog/2025/stockfish-17-1/ "Release Notes"
[300325-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...03e27488f3

[180425-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...3d18ad719b
[180425-elo1]:    https://tests.stockfishchess.org/tests/view/680246cbcd501869c669813e
[180425-elo8]:    https://tests.stockfishchess.org/tests/view/680246cfcd501869c6698140
[180425-master]:  https://github.com/official-stockfish/Stockfish/commit/3d18ad719b2e7103e27936561f8276fbed9a354b
[180425-raw1]:    https://tests.stockfishchess.org/tests/stats/680246cbcd501869c669813e
[180425-raw8]:    https://tests.stockfishchess.org/tests/stats/680246cfcd501869c6698140
[260425-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...27428a61c2
[260425-elo1]:    https://tests.stockfishchess.org/tests/view/680d45ef3629b02d74b1570e
[260425-elo8]:    https://tests.stockfishchess.org/tests/view/680d45fc3629b02d74b15710
[260425-master]:  https://github.com/official-stockfish/Stockfish/commit/27428a61c2fb6fd1ff1f8f0e88746e0680771730
[260425-raw1]:    https://tests.stockfishchess.org/tests/stats/680d45ef3629b02d74b1570e
[260425-raw8]:    https://tests.stockfishchess.org/tests/stats/680d45fc3629b02d74b15710
[130525-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...c4e2479a75
[130525-elo1]:    https://tests.stockfishchess.org/tests/view/6823945ca527315e07ccc9e6
[130525-elo8]:    https://tests.stockfishchess.org/tests/view/6823945ea527315e07ccc9e8
[130525-master]:  https://github.com/official-stockfish/Stockfish/commit/c4e2479a75ae34a620f68cfb686d04ce36709ab6
[130525-raw1]:    https://tests.stockfishchess.org/tests/stats/6823945ca527315e07ccc9e6
[130525-raw8]:    https://tests.stockfishchess.org/tests/stats/6823945ea527315e07ccc9e8
[250525-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...73c55e8949
[250525-elo1]:    https://tests.stockfishchess.org/tests/view/683371426ec7634154f9c312
[250525-elo8]:    https://tests.stockfishchess.org/tests/view/6833714c6ec7634154f9c314
[250525-master]:  https://github.com/official-stockfish/Stockfish/commit/73c55e894959b2dcd40c179ade6e1eafc9d952ea
[250525-raw1]:    https://tests.stockfishchess.org/tests/stats/683371426ec7634154f9c312
[250525-raw8]:    https://tests.stockfishchess.org/tests/stats/6833714c6ec7634154f9c314
[020625-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...5337edfdb6
[020625-elo1]:    https://tests.stockfishchess.org/tests/view/683e06426ec7634154f9db24
[020625-elo8]:    https://tests.stockfishchess.org/tests/view/683e064b6ec7634154f9db26
[020625-master]:  https://github.com/official-stockfish/Stockfish/commit/5337edfdb6c9593e224be58225907682903db1a9
[020625-raw1]:    https://tests.stockfishchess.org/tests/stats/683e06426ec7634154f9db24
[020625-raw8]:    https://tests.stockfishchess.org/tests/stats/683e064b6ec7634154f9db26
[240725-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...a516b517d3
[240725-elo1]:    https://tests.stockfishchess.org/tests/view/6881f16f6e17e7fa3939b47f
[240725-elo8]:    https://tests.stockfishchess.org/tests/view/6881f1976e17e7fa3939b481
[240725-master]:  https://github.com/official-stockfish/Stockfish/commit/a516b517d374bb9b4086dd2cc56be8f55d6aeba8
[240725-raw1]:    https://tests.stockfishchess.org/tests/stats/6881f16f6e17e7fa3939b47f
[240725-raw8]:    https://tests.stockfishchess.org/tests/stats/6881f1976e17e7fa3939b481
[280725-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...64e8e1b247
[280725-elo1]:    https://tests.stockfishchess.org/tests/view/6887bfe97b562f5f7b731a2b
[280725-elo8]:    https://tests.stockfishchess.org/tests/view/6887bff67b562f5f7b731a2d
[280725-master]:  https://github.com/official-stockfish/Stockfish/commit/64e8e1b247367018ebbce15f0d7cf5a56c7eaf56
[280725-raw1]:    https://tests.stockfishchess.org/tests/stats/6887bfe97b562f5f7b731a2b
[280725-raw8]:    https://tests.stockfishchess.org/tests/stats/6887bff67b562f5f7b731a2d
[040825-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...94175524b1
[040825-elo1]:    https://tests.stockfishchess.org/tests/view/6890b87c92fcad741b804a13
[040825-elo8]:    https://tests.stockfishchess.org/tests/view/6890b88692fcad741b804a15
[040825-master]:  https://github.com/official-stockfish/Stockfish/commit/94175524b1c06f1a4ce80a5640272a15120dcbbd
[040825-raw1]:    https://tests.stockfishchess.org/tests/stats/6890b87c92fcad741b804a13
[040825-raw8]:    https://tests.stockfishchess.org/tests/stats/6890b88692fcad741b804a15
[170825-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...7fe46b5a70
[170825-elo1]:    https://tests.stockfishchess.org/tests/view/68a240c0b6fb3300203bbd8c
[170825-elo8]:    https://tests.stockfishchess.org/tests/view/68a240ccb6fb3300203bbd8e
[170825-master]:  https://github.com/official-stockfish/Stockfish/commit/7fe46b5a70c7422e78bc0b484e772158b7fb4683
[170825-raw1]:    https://tests.stockfishchess.org/tests/stats/68a240c0b6fb3300203bbd8c
[170825-raw8]:    https://tests.stockfishchess.org/tests/stats/68a240ccb6fb3300203bbd8e
[240825-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...678d503d8f
[240825-elo1]:    https://tests.stockfishchess.org/tests/view/68ab560f75da51a345a5abd8
[240825-elo8]:    https://tests.stockfishchess.org/tests/view/68ab561e75da51a345a5abda
[240825-master]:  https://github.com/official-stockfish/Stockfish/commit/678d503d8f9c36e4087d7506f5d443c08f859c36
[240825-raw1]:    https://tests.stockfishchess.org/tests/stats/68ab560f75da51a345a5abd8
[240825-raw8]:    https://tests.stockfishchess.org/tests/stats/68ab561e75da51a345a5abda
[020925-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...adfddd2c98
[020925-elo1]:    https://tests.stockfishchess.org/tests/view/68b73b5b8f94a4e5a7fe76bd
[020925-elo8]:    https://tests.stockfishchess.org/tests/view/68b73b668f94a4e5a7fe76bf
[020925-master]:  https://github.com/official-stockfish/Stockfish/commit/adfddd2c984fac5f2ac02d87575af821ec118fa8
[020925-raw1]:    https://tests.stockfishchess.org/tests/stats/68b73b5b8f94a4e5a7fe76bd
[020925-raw8]:    https://tests.stockfishchess.org/tests/stats/68b73b668f94a4e5a7fe76bf
[280925-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...3073d82ccf
[280925-elo1]:    https://tests.stockfishchess.org/tests/view/68d98c28fa806e2e8393b79e
[280925-elo8]:    https://tests.stockfishchess.org/tests/view/68d98c39fa806e2e8393b7a1
[280925-master]:  https://github.com/official-stockfish/Stockfish/commit/3073d82ccf25a8ab31e0e0215a2a661d0dcdadd7
[280925-raw1]:    https://tests.stockfishchess.org/tests/stats/68d98c28fa806e2e8393b79e
[280925-raw8]:    https://tests.stockfishchess.org/tests/stats/68d98c39fa806e2e8393b7a1
[141025-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...75edbee01e
[141025-elo1]:    https://tests.stockfishchess.org/tests/view/68ee710528e6d77fcff9fd61
[141025-elo8]:    https://tests.stockfishchess.org/tests/view/68ee711328e6d77fcff9fd63
[141025-master]:  https://github.com/official-stockfish/Stockfish/commit/75edbee01e6f8cb53a2555499192ccaddb883577
[141025-raw1]:    https://tests.stockfishchess.org/tests/stats/68ee710528e6d77fcff9fd61
[141025-raw8]:    https://tests.stockfishchess.org/tests/stats/68ee711328e6d77fcff9fd63
[011125-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...bc9f08731f
[011125-elo1]:    https://tests.stockfishchess.org/tests/view/6905e3ddea4b268f1fac1ee7
[011125-elo8]:    https://tests.stockfishchess.org/tests/view/6905e3eaea4b268f1fac1ee9
[011125-master]:  https://github.com/official-stockfish/Stockfish/commit/bc9f08731f10896a306bcc34e30e5606087af79a
[011125-raw1]:    https://tests.stockfishchess.org/tests/stats/6905e3ddea4b268f1fac1ee7
[011125-raw8]:    https://tests.stockfishchess.org/tests/stats/6905e3eaea4b268f1fac1ee9
[121125-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...8e5392d79a
[121125-elo1]:    https://tests.stockfishchess.org/tests/view/6914597b7ca87818523316f8
[121125-elo8]:    https://tests.stockfishchess.org/tests/view/691459897ca87818523316fa
[121125-master]:  https://github.com/official-stockfish/Stockfish/commit/8e5392d79a36aba5b997cf6fb590937e3e624e80
[121125-raw1]:    https://tests.stockfishchess.org/tests/stats/6914597b7ca87818523316f8
[121125-raw8]:    https://tests.stockfishchess.org/tests/stats/691459897ca87818523316fa
[301125-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...9e2ee13e77
[301125-elo1]:    https://tests.stockfishchess.org/tests/view/692d41b5b23dfeae38d00ffe
[301125-elo8]:    https://tests.stockfishchess.org/tests/view/692d41c2b23dfeae38d01000
[301125-master]:  https://github.com/official-stockfish/Stockfish/commit/9e2ee13e775274ff5faab3fa12a7c0fd0370df3a
[301125-raw1]:    https://tests.stockfishchess.org/tests/stats/692d41b5b23dfeae38d00ffe
[301125-raw8]:    https://tests.stockfishchess.org/tests/stats/692d41c2b23dfeae38d01000
[231225-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...c475024be7
[231225-elo1]:    https://tests.stockfishchess.org/tests/view/694b8031572093c1986d6b25
[231225-elo8]:    https://tests.stockfishchess.org/tests/view/694b8041572093c1986d6b27
[231225-master]:  https://github.com/official-stockfish/Stockfish/commit/c475024be75c1d239b6410aa8ec3122fb5b4260c
[231225-raw1]:    https://tests.stockfishchess.org/tests/stats/694b8031572093c1986d6b25
[231225-raw8]:    https://tests.stockfishchess.org/tests/stats/694b8041572093c1986d6b27
[010126-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...28844fc697
[010126-elo1]:    https://tests.stockfishchess.org/tests/view/695690dbd844c1ce7cc7e651
[010126-elo8]:    https://tests.stockfishchess.org/tests/view/695690f2d844c1ce7cc7e653
[010126-master]:  https://github.com/official-stockfish/Stockfish/commit/28844fc6975b002150190464914e5b340a2c9209
[010126-raw1]:    https://tests.stockfishchess.org/tests/stats/695690dbd844c1ce7cc7e651
[010126-raw8]:    https://tests.stockfishchess.org/tests/stats/695690f2d844c1ce7cc7e653
[150126-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...71f53b92c7
[150126-elo1]:    https://tests.stockfishchess.org/tests/view/696a9e15cec152c6220c1d19
[150126-elo8]:    https://tests.stockfishchess.org/tests/view/696a9e4dcec152c6220c1d1b
[150126-master]:  https://github.com/official-stockfish/Stockfish/commit/71f53b92c7095f1f145b85d63b8ad49f9ef553f9
[150126-raw1]:    https://tests.stockfishchess.org/tests/stats/696a9e15cec152c6220c1d19
[150126-raw8]:    https://tests.stockfishchess.org/tests/stats/696a9e4dcec152c6220c1d1b

[Stockfish 18]:   https://github.com/official-stockfish/Stockfish/commit/cb3d4ee9b47d0c5aae855b12379378ea1439675c
[SF18DP]:         https://github.com/user-attachments/assets/48a7d32e-64f9-4eb9-942c-e2687ba88a09 "Development Progress"
[SF18RN]:         https://stockfishchess.org/blog/2026/stockfish-18/ "Release Notes"
[310126-dif]:     https://github.com/official-stockfish/Stockfish/compare/e0bfc4b69b...cb3d4ee9b47

[180226-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...a6d055d7e2
[180226-elo1]:    https://tests.stockfishchess.org/tests/view/699627cbd885742f179a7b3d
[180226-elo8]:    https://tests.stockfishchess.org/tests/view/699627d8d885742f179a7b3f
[180226-master]:  https://github.com/official-stockfish/Stockfish/commit/a6d055d7e27ab3e29a42e8b94215102824760057
[180226-raw1]:    https://tests.stockfishchess.org/tests/stats/699627cbd885742f179a7b3d
[180226-raw8]:    https://tests.stockfishchess.org/tests/stats/699627d8d885742f179a7b3f
[090426-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...bb4eb04a50
[090426-elo1]:    https://tests.stockfishchess.org/tests/view/69d806373ca80bdf151d442d
[090426-elo8]:    https://tests.stockfishchess.org/tests/view/69d806383ca80bdf151d442f
[090426-master]:  https://github.com/official-stockfish/Stockfish/commit/bb4eb04a50244442f2925f6dad3b1b2fb1f82236
[090426-raw1]:    https://tests.stockfishchess.org/tests/stats/69d806373ca80bdf151d442d
[090426-raw8]:    https://tests.stockfishchess.org/tests/stats/69d806383ca80bdf151d442f
[040526-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...5095cd16c9
[040526-elo1]:    https://tests.stockfishchess.org/tests/view/69f841803a3c3e525bb2b2dc
[040526-elo8]:    https://tests.stockfishchess.org/tests/view/69f8418c3a3c3e525bb2b2de
[040526-master]:  https://github.com/official-stockfish/Stockfish/commit/5095cd16c97e7596f2d2a02eb05ed8e030af991f
[040526-raw1]:    https://tests.stockfishchess.org/tests/stats/69f841803a3c3e525bb2b2dc
[040526-raw8]:    https://tests.stockfishchess.org/tests/stats/69f8418c3a3c3e525bb2b2de
[190526-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...133731f331
[190526-elo1]:    https://tests.stockfishchess.org/tests/view/6a0c93826524d21ee79b8864
[190526-elo8]:    https://tests.stockfishchess.org/tests/view/6a0c93906524d21ee79b8866
[190526-master]:  https://github.com/official-stockfish/Stockfish/commit/133731f33166afcde7fb7a76c41e47c3cddcee8b
[190526-raw1]:    https://tests.stockfishchess.org/tests/stats/6a0c93826524d21ee79b8864
[190526-raw8]:    https://tests.stockfishchess.org/tests/stats/6a0c93906524d21ee79b8866
[140626-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...74a0a73715
[140626-elo1]:    https://tests.stockfishchess.org/tests/view/6a2e6b300d5d4b19d08054b2
[140626-elo8]:    https://tests.stockfishchess.org/tests/view/6a2e6b3b0d5d4b19d08054b4
[140626-master]:  https://github.com/official-stockfish/Stockfish/commit/74a0a73715322608332038f7c0151ddf0609a59a
[140626-raw1]:    https://tests.stockfishchess.org/tests/stats/6a2e6b300d5d4b19d08054b2
[140626-raw8]:    https://tests.stockfishchess.org/tests/stats/6a2e6b3b0d5d4b19d08054b4
[270626-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...9d2ba2bed5
[270626-elo1]:    https://tests.stockfishchess.org/tests/view/6a3fd7803036e45021aebaeb
[270626-elo8]:    https://tests.stockfishchess.org/tests/view/6a3fd7843036e45021aebaed
[270626-master]:  https://github.com/official-stockfish/Stockfish/commit/9d2ba2bed507057425559aaefc5e1a14441e8d6d
[270626-raw1]:    https://tests.stockfishchess.org/tests/stats/6a3fd7803036e45021aebaeb
[270626-raw8]:    https://tests.stockfishchess.org/tests/stats/6a3fd7843036e45021aebaed
[030726-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...d5bbc6b67d
[030726-elo1]:    https://tests.stockfishchess.org/tests/view/6a48018ef97ff95f7879589d
[030726-elo8]:    https://tests.stockfishchess.org/tests/view/6a480199f97ff95f7879589f
[030726-master]:  https://github.com/official-stockfish/Stockfish/commit/d5bbc6b67d3184fc39fa87a18596e77e92af990c
[030726-raw1]:    https://tests.stockfishchess.org/tests/stats/6a48018ef97ff95f7879589d
[030726-raw8]:    https://tests.stockfishchess.org/tests/stats/6a480199f97ff95f7879589f
[160726-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...ebcea3efe9
[160726-elo1]:    https://tests.stockfishchess.org/tests/view/6a59016c5529b8472df80fae
[160726-elo8]:    https://tests.stockfishchess.org/tests/view/6a5901775529b8472df80fb0
[160726-master]:  https://github.com/official-stockfish/Stockfish/commit/ebcea3efe9c1b8748e080111c727c33c544d7e06
[160726-raw1]:    https://tests.stockfishchess.org/tests/stats/6a59016c5529b8472df80fae
[160726-raw8]:    https://tests.stockfishchess.org/tests/stats/6a5901775529b8472df80fb0
[260726-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...23cf5d8273
[260726-elo1]:    https://tests.stockfishchess.org/tests/view/6a65e918c054e285ae028cb8
[260726-elo8]:    https://tests.stockfishchess.org/tests/view/6a65e926c054e285ae028cba
[260726-master]:  https://github.com/official-stockfish/Stockfish/commit/23cf5d827388e84d4389b40025ef401db4925f25
[260726-raw1]:    https://tests.stockfishchess.org/tests/stats/6a65e918c054e285ae028cb8
[260726-raw8]:    https://tests.stockfishchess.org/tests/stats/6a65e926c054e285ae028cba
[190826-dif]:     https://github.com/official-stockfish/Stockfish/compare/43a2be0186...229f6339e5
[190826-elo1]:    https://tests.stockfishchess.org/tests/view/6a85df4c5b1b38ebda864ccd
[190826-elo8]:    https://tests.stockfishchess.org/tests/view/6a85df595b1b38ebda864ccf
[190826-master]:  https://github.com/official-stockfish/Stockfish/commit/229f6339e537a097a79831cd06dbfdb3e623d4ac
[190826-raw1]:    https://tests.stockfishchess.org/tests/stats/6a85df4c5b1b38ebda864ccd
[190826-raw8]:    https://tests.stockfishchess.org/tests/stats/6a85df595b1b38ebda864ccf

[graph-current]:  https://docs.google.com/spreadsheets/u/2/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=429149495&format=image
[graph-elo1]:     https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=1631702142&format=image
[graph-elo8]:     https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=991230633&format=image
[graph-nelo1]:    https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=1045014049&format=image
[graph-nelo8]:    https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=1302996667&format=image
[graph-gpr1]:     https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=65689441&format=image
[graph-gpr8]:     https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=1638166821&format=image
[graph-dve1]:     https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=699890902&format=image
[graph-dve8]:     https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=2097713806&format=image
[graph-thirty1]:  https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=291372362&format=image
[graph-thirty8]:  https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=1969585471&format=image
[graph-total]:    https://docs.google.com/spreadsheets/d/e/2PACX-1vQqw86SXD_-zzP39DzfjBQ1eLBGyZMPyVLPuZDTY7zSNxBvxxj9CUXpd_AHRKy1aCpCCXGsznolmMVs/pubchart?oid=2059970959&format=image
