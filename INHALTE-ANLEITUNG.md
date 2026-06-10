# 📋 Anleitung – Inhalte einfüllen

Hallo Elena! Deine Portfolio-Website ist fertig aufgebaut. Du musst nur noch
deine eigenen Inhalte einsetzen. Hier steht **genau, wo was reinkommt**.
Du brauchst dafür keine Programmierkenntnisse – nur Text zwischen die
Anführungszeichen schreiben und Bilder in die richtigen Ordner legen.

> Zum Anschauen: Datei `index.html` einfach im Browser öffnen
> (oder Doppelklick). Änderungen werden nach dem Speichern + neu Laden sichtbar.

---

## 1. ⭐ Deine Arbeiten / Projekte (das Wichtigste)

**Datei:** `projekte.js`

1. Bild in den Ordner `assets/galerie/` legen.
2. In `projekte.js` einen Block ergänzen oder ein Beispiel überschreiben:

```js
{
  bild: "assets/galerie/mein-bild.jpg",
  titel: "Titel der Arbeit",
  kategorie: "foto",        // foto | tiere | design | video
  text: "kurze Beschreibung"
},
```

Die Filter-Buttons (Alle / Fotografie / Tiere …) entstehen **automatisch**
aus den verwendeten Kategorien. Die 8 vorhandenen Einträge sind nur Beispiele
mit Platzhalter-Bildern – einfach Schritt für Schritt ersetzen.

---

## 2. 📷 Porträtfoto (Über mich)

**Ordner:** `assets/fotos/`  →  Foto als `portrait.jpg` ablegen
**Datei:** `index.html`, Abschnitt `<!-- ÜBER MICH -->`

Den Bild-Pfad ersetzen durch:
```html
<img src="assets/fotos/portrait.jpg" alt="Elena" loading="lazy" />
```

---

## 3. 📄 Lebenslauf (CV-Download)

**Ordner:** `assets/`

Deine PDF dort ablegen und exakt so benennen: **`Lebenslauf-Elena.pdf`**
(ersetzt die Platzhalter-Datei). Dann funktionieren beide Download-Buttons
automatisch.

---

## 4. ✉️ E-Mail-Adresse

**Datei:** `index.html`, Abschnitt `<!-- CV / KONTAKT -->`

`elena@example.com` durch deine echte Adresse ersetzen (kommt einmal vor).

---

## 5. ✍️ Texte anpassen (optional)

Alles in `index.html`, jeweils zwischen den Tags den Text ändern:

| Bereich | Suchbegriff im Code | Inhalt |
|---|---|---|
| Über mich | `<!-- ÜBER MICH -->` | Text über dich, Hund, Fotografie, Tiere |
| Werdegang | `<!-- WERDEGANG -->` | Stationen deines Wegs (Jahre/Schulen ergänzen) |
| Fähigkeiten | `<!-- FÄHIGKEITEN -->` | Skills + Balken (`--lvl:90%` anpassen) |
| Motivation | `<!-- INTERESSEN & MOTIVATION -->` | Warum Mediamatik, Interessen-Tags |

> **Tipp Werdegang:** Die Jahres-Platzhalter `20XX` durch deine echten
> Jahre ersetzen (z. B. `2021 – 2024`). Neue Station? Einen kompletten
> `<div class="tl-item reveal"> … </div>`-Block kopieren.

> **Galerie-Lightbox:** Beim Klick auf ein Bild öffnet es sich gross
> (mit Pfeiltasten ◀ ▶ blättern, Esc oder Klick daneben schliesst).
> Funktioniert automatisch – du musst nichts einstellen.

---

## ✅ Checkliste vor dem Versenden / Veröffentlichen

- [ ] Eigene Arbeiten in `projekte.js` eingetragen
- [ ] Porträtfoto eingefügt
- [ ] `Lebenslauf-Elena.pdf` ersetzt
- [ ] E-Mail-Adresse angepasst
- [ ] Werdegang mit echten Stationen/Jahren ergänzt
- [ ] Im Browser kontrolliert (Handy + Computer)

Viel Erfolg mit der Bewerbung! 🎉
