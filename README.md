# 🚨 Ikony Budynków — Operator Ratunkowy

![Version](https://img.shields.io/badge/wersja-2.2.1-blue)
![Icons](https://img.shields.io/badge/ikony-21-green)
![License](https://img.shields.io/badge/licencja-MIT-green)

Customowe ikony budynków podmieniane w grze **[Operator Ratunkowy](https://www.operatorratunkowy.pl/)** za pomocą skryptu Tampermonkey.

---

## 🎮 Jak zainstalować?

### 1. Zainstaluj Tampermonkey
- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Firefox](https://addons.mozilla.org/pl/firefox/addon/tampermonkey/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
- [Opera](https://addons.opera.com/pl/extensions/details/tampermonkey-beta/)

### 2. Zainstaluj skrypt
Kliknij poniższy link, aby zainstalować skrypt automatycznie:

👉 **[Zainstaluj Ikony Budynków](https://github.com/Adixx1337/ikonki/releases/tag/Ikonki)**

Tampermonkey powinien automatycznie rozpoznać skrypt i zaproponować instalację.

### 3. Gotowe!
Wejdź na [operatorratunkowy.pl](https://www.operatorratunkowy.pl/) — ikony budynków zostaną automatycznie podmienione! 🏗️

---

## 🏢 Lista ikon (21)

| # | Ikona | Nazwa | Plik |
|---|-------|-------|------|
| 1 | 📞 | Centrum Powiadamiania | `centrum_powiadamiania.png` |
| 2 | 🚒 | Jednostka Ratowniczo-Gaśnicza | `jrg.png` |
| 3 | 🏠 | Remiza OSP | `remiza.png` |
| 4 | 🎓 | Szkoła Pożarnicza | `szkola_pozarnicza.png` |
| 5 | 🚑 | Stacja Pogotowia Ratunkowego | `pogotowie.png` |
| 6 | 🏥 | Podstacja Pogotowia | `podstacja_pogotowia.png` |
| 7 | 🏨 | Szpital | `szpital.png` |
| 8 | 🚔 | Komenda Policji | `komenda_policji.png` |
| 9 | 👮 | Posterunek Policji | `posterunek_policji.png` |
| 10 | 🚦 | Komisariat Policji z WRD | `komisariat_wrd.png` |
| 11 | 🚁 | Stacja Helikopterów Policji | `heli_policja.png` |
| 12 | 🎓 | Akademia Policyjna | `akademia_policyjna.png` |
| 13 | 🎯 | Poligon Prewencji Policji | `poligon_policji.png` |
| 14 | 🛡️ | Stacja Straży Miejskiej | `straz_miejska.png` |
| 15 | ⚠️ | Koncentracja Sił i Środków | `koncentracja.png` |
| 16 | 🚁 | Helikoptery Medyczne (LPR) | `heli_medyczne.png` |
| 17 | 🌊 | Stacja WOPR | `wopr.png` |
| 18 | 🎓 | Akademia Ratownictwa Med. | `akademia_ratownictwa.png` |
| 19 | 🔒 | Zakład Karny | `zaklad_karny.png` |
| 20 | ✈️ | Stacja Samolotów Gaśniczych | `samoloty_gasnicze.png` |
| 21 | 🚗 | Pomoc Drogowa | `pomoc_drogowa.png` |

---

## 🗺️ Mapowanie ikon w grze

Skrypt automatycznie rozpoznaje ikony budynków na mapie gry i podmienia je na customowe:

| Ikona w grze | → | Nasza ikona |
|---|---|---|
| `building_fire` | → | JRG |
| `building_fire_small` | → | Remiza |
| `building_rescue_station` | → | Pogotowie |
| `building_hospital` | → | Szpital |
| `building_police` | → | Komenda Policji |
| `building_police_small` | → | Posterunek Policji |
| `spec_police_station_traffic_police_pc` | → | Komisariat z WRD |
| `building_water_rescue` | → | WOPR |
| `building_prison` | → | Zakład Karny |
| ... | → | i więcej! |

---

## 🌐 Strona internetowa

Odwiedź naszą stronę, aby zobaczyć i pobrać wszystkie ikony:

🔗 **[ikonyoperator.whf.bz](http://ikonyoperator.whf.bz)**

---

## 📁 Struktura repozytorium

```
icons/
├── ikony-engine.js              # Silnik podmienający ikony (zaobfuskowany)
├── akademia_policyjna.png       # Ikona: Akademia Policyjna
├── akademia_ratownictwa.png     # Ikona: Akademia Ratownictwa Med.
├── centrum_powiadamiania.png    # Ikona: Centrum Powiadamiania
├── heli_medyczne.png            # Ikona: Helikoptery Medyczne
├── heli_policja.png             # Ikona: Helikoptery Policji
├── jrg.png                      # Ikona: JRG
├── komenda_policji.png          # Ikona: Komenda Policji
├── komisariat_wrd.png           # Ikona: Komisariat z WRD 🆕
├── koncentracja.png             # Ikona: Koncentracja Sił
├── podstacja_pogotowia.png      # Ikona: Podstacja Pogotowia
├── pogotowie.png                # Ikona: Pogotowie Ratunkowe
├── poligon_policji.png          # Ikona: Poligon Prewencji
├── pomoc_drogowa.png            # Ikona: Pomoc Drogowa
├── posterunek_policji.png       # Ikona: Posterunek Policji
├── remiza.png                   # Ikona: Remiza OSP
├── samoloty_gasnicze.png        # Ikona: Samoloty Gaśnicze
├── straz_miejska.png            # Ikona: Straż Miejska
├── straz_pozarna.png            # Ikona: Straż Pożarna
├── szkola_pozarnicza.png        # Ikona: Szkoła Pożarnicza
├── szpital.png                  # Ikona: Szpital
├── wopr.png                     # Ikona: WOPR
└── zaklad_karny.png             # Ikona: Zakład Karny
```

---

## 📋 Changelog

### v2.2.1 (2026-02-25)
- ✅ Dodano ikonę **Komisariat Policji z WRD** (Wydział Ruchu Drogowego)
- ✅ Obsługa ikon `spec_*` z gry

### v2.2 (2026-02-24)
- ✅ 20 ikon budynków
- ✅ Ikony hostowane na GitHub
- ✅ Stały rozmiar ikon (32px)

---

## ⚠️ Uwagi

- Skrypt działa **tylko** na stronie [operatorratunkowy.pl](https://www.operatorratunkowy.pl/)
- Wymaga rozszerzenia **Tampermonkey** w przeglądarce
- Ikony są w formacie **PNG 32x32px** z przezroczystym tłem

---

## 👤 Autor

**Adixx1337**

- 🌐 Strona: [ikonyoperator.whf.bz](http://ikonyoperator.whf.bz)
- 🎮 Gra: [Operator Ratunkowy](https://www.operatorratunkowy.pl/)

---

© 2026 Adixx1337 — Wszelkie prawa zastrzeżone.
