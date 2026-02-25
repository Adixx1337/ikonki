/**
 * (c) 2026 Adixx1337 - Wszelkie prawa zastrzeżone
 * Ikony Budynkow - Operator Ratunkowy
 * Nieautoryzowane kopiowanie, modyfikowanie lub dystrybucja tego kodu jest zabroniona.
 */
(function () {
    'use strict';
    var _0xa = 'https://raw.githubusercontent.com/Adixx1337/ikonki/main/icons/';
    var _0xb = '32px';
    var _0xc = function (n) { return _0xa + n + '.png' };
    var _0xd = {};
    var _0xe = [
        ['building_fire', 'jrg'], ['building_fire_small', 'remiza'],
        ['building_fireschool_other', 'szkola_pozarnicza'], ['building_fire_airport', 'samoloty_gasnicze'],
        ['building_feuerwache', 'jrg'], ['building_feuerwache_klein', 'remiza'],
        ['building_feuerwehrschule', 'szkola_pozarnicza'], ['building_feuerwache_flughafen', 'samoloty_gasnicze'],
        ['building_rescue_station', 'pogotowie'], ['building_rescue_small', 'podstacja_pogotowia'],
        ['building_hospital', 'szpital'], ['building_helipad', 'heli_medyczne'],
        ['building_rettungsschule', 'akademia_ratownictwa'], ['building_rettungswache', 'pogotowie'],
        ['building_rettungswache_klein', 'podstacja_pogotowia'], ['building_krankenhaus', 'szpital'],
        ['building_rettungshelikopter', 'heli_medyczne'],
        ['policechief_building_polizeiwache', 'komenda_policji'],
        ['policechief_building_polizeiwache_other', 'posterunek_policji'],
        ['policechief_building_polizeischule', 'akademia_policyjna'],
        ['policechief_building_bereitschaftspolizei', 'poligon_policji'],
        ['policechief_building_polizei_helipad', 'heli_policja'],
        ['building_police', 'komenda_policji'], ['building_police_small', 'posterunek_policji'],
        ['building_police_helipad', 'heli_policja'], ['building_police_school', 'akademia_policyjna'],
        ['building_polizeiwache', 'komenda_policji'], ['building_polizeiwache_klein', 'posterunek_policji'],
        ['building_leitstelle', 'centrum_powiadamiania'], ['building_dispatch', 'centrum_powiadamiania'],
        ['building_municipal_police', 'straz_miejska'], ['building_ordnungsamt', 'straz_miejska'],
        ['building_tow_trucks', 'pomoc_drogowa'], ['building_abschleppunternehmen', 'pomoc_drogowa'],
        ['building_staging_area', 'koncentracja'], ['building_bereitstellungsraum', 'koncentracja'],
        ['building_water_rescue', 'wopr'], ['building_wasserrettung', 'wopr'],
        ['building_prison', 'zaklad_karny'], ['building_gefaengnis', 'zaklad_karny'],
        ['building_riot_police', 'poligon_policji'],
        ['spec_police_station_traffic_police_pc', 'komisariat_wrd']
    ];
    for (var _0xi = 0; _0xi < _0xe.length; _0xi++) { _0xd[_0xe[_0xi][0]] = _0xc(_0xe[_0xi][1]); }
    var _0xf = document.createElement('style');
    _0xf.innerHTML = '.leaflet-marker-icon[src*="raw.githubusercontent.com"]{width:' + _0xb + ' !important;height:' + _0xb + ' !important;margin-left:-16px !important;margin-top:-16px !important}';
    document.head.appendChild(_0xf);
    var _0xg = /\/images\/((?:policechief_)?(?:building|spec)_[a-z_0-9]+)/i;
    function _0xh(img) { if (img.src.includes(_0xa)) return !1; var m = (img.getAttribute('src') || '').match(_0xg); if (!m || !_0xd[m[1]]) return !1; img.src = _0xd[m[1]]; return !0; }
    function _0xj() { var i = document.querySelectorAll('img[src*="/images/building_"],img[src*="/images/policechief_"],img[src*="/images/spec_"]'); i.forEach(_0xh); }
    console.log('\u{1F3D7}\uFE0F Ikony Budynk\u00F3w v2.2.1');
    function _0xk() { _0xj(); var p = document.querySelector('.leaflet-marker-pane'); if (p) { var t = null; new MutationObserver(function () { if (t) clearTimeout(t); t = setTimeout(_0xj, 300); }).observe(p, { childList: !0, subtree: !0 }); } }
    if (document.readyState === 'complete') { setTimeout(_0xk, 500); } else { window.addEventListener('load', function () { setTimeout(_0xk, 500); }); }
})();
