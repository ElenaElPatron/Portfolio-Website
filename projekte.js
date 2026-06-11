/* ============================================================
   ELENA · GALERIE-INHALTE
   ------------------------------------------------------------
   HIER FÜLLST DU DEINE ARBEITEN EIN — sonst nichts ändern nötig.

   Jedes Projekt ist ein Block { ... } in der Liste PROJEKTE.
   Einfach kopieren, anpassen, fertig. Reihenfolge = Anzeige.

   Felder:
     bild         Pfad zum Bild, z. B. "assets/galerie/mein-bild.jpg"
                  (Bilder in den Ordner assets/galerie/ legen)
     titel        Überschrift, erscheint beim Drüberfahren
     kategorie    Schlüssel aus KATEGORIEN unten (für die Filter-Buttons)
     text         kurze Unterschrift / Bildunterzeile

   Tipp: Hochformat, Querformat & Quadrat dürfen gemischt werden –
   das Raster ordnet automatisch schön an.
   ============================================================ */

/* Die Filter-Buttons. Schlüssel = "kategorie" unten, Wert = Beschriftung.
   Du kannst Kategorien umbenennen, löschen oder neue ergänzen. */
const KATEGORIEN = {
  portrait:     "Portrait",
  studio:       "Studio Session",
  outdoorshoot: "Outdoor Shootings",
  outdoor:      "Outdoor"
  // DEAKTIVIERT (rechtliche Gründe – bei Bedarf wieder aktivieren):
  // , video:        "Einblick in die Videowelt"
};

/* ====================== DEINE ARBEITEN ====================== */
/* titel = Art der Aufnahme · text = oranger Untertitel ("Shot by Elena") */
const PROJEKTE = [
  { bild: "assets/galerie/os-livia-1-3-photoshop.jpg", titel: "Outdoor Shootings", kategorie: "outdoorshoot", text: "Shot by Elena" },
  { bild: "assets/galerie/dsc9498.jpg",     titel: "Portrait",          kategorie: "portrait", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img4654.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/ss-douglas-4.jpg",           titel: "Studio Session", kategorie: "studio", text: "Shot by Elena" },
  { bild: "assets/galerie/douglas-1.jpg",   titel: "Outdoor Shootings", kategorie: "outdoorshoot",  text: "Shot by Elena" },
  { bild: "assets/galerie/dsc0749-2.jpg",   titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0741.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/douglas-1-6.jpg", titel: "Portrait",          kategorie: "portrait", text: "Shot by Elena" },
  { bild: "assets/galerie/os-livia-1.jpg",             titel: "Outdoor Shootings", kategorie: "outdoorshoot", text: "Shot by Elena" },
  { bild: "assets/galerie/dsc9179.jpg",     titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img8819.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/os-livia-3.jpg",             titel: "Outdoor Shootings", kategorie: "outdoorshoot", text: "Shot by Elena" },
  { bild: "assets/galerie/ss-douglas-1.jpg",           titel: "Studio Session", kategorie: "studio", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img4652.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/dsc0783-2.jpg",   titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/dsc9483.jpg",     titel: "Portrait",          kategorie: "portrait", text: "Shot by Elena" },
  { bild: "assets/galerie/dsc9238.jpg",     titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/dsc0691.jpg",     titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/douglas-3.jpg",   titel: "Outdoor Shootings", kategorie: "outdoorshoot",  text: "Shot by Elena" },
  { bild: "assets/galerie/dsc8903.jpg",     titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/douglas-1-8.jpg", titel: "Portrait",          kategorie: "portrait", text: "Shot by Elena" },
  { bild: "assets/galerie/dsc0754-4.jpg",   titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/dsc9055-3.jpg",   titel: "Studio Session",    kategorie: "studio",   text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0732.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0733.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0736.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0737.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0740-2.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0748.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0749.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0753.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0754.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img0756.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img4653.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img4658.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img8818.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/outdoor-img8821.jpg", titel: "Outdoor", kategorie: "outdoor", text: "Shot by Elena" },
  { bild: "assets/galerie/os-livia-1-4.jpg",           titel: "Outdoor Shootings", kategorie: "outdoorshoot", text: "Shot by Elena" },
  { bild: "assets/galerie/ss-douglas-3.jpg",           titel: "Studio Session", kategorie: "studio", text: "Shot by Elena" },
  { bild: "assets/galerie/ss-douglas-5.jpg",           titel: "Studio Session", kategorie: "studio", text: "Shot by Elena" },
  /* ---- Einblick in die Videowelt – DEAKTIVIERT (rechtliche Gründe). Zum Reaktivieren: diese Zeilen + KATEGORIEN-video einkommentieren und Bilder zurück nach assets/galerie/ legen. ---- */
  // { bild: "assets/galerie/vid-praesidial-01.jpg", titel: "Ein Tag in der Präsidialdirektion", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-praesidial-02.jpg", titel: "Ein Tag in der Präsidialdirektion", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-praesidial-03.jpg", titel: "Ein Tag in der Präsidialdirektion", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-praesidial-04.jpg", titel: "Ein Tag in der Präsidialdirektion", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-praesidial-05.jpg", titel: "Ein Tag in der Präsidialdirektion", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-praesidial-06.jpg", titel: "Ein Tag in der Präsidialdirektion", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-brandschutz-01.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-02.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-03.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-04.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-05.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-06.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-07.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-brandschutz-08.jpg", titel: "Brandschutzvideo im Erlacherhof", kategorie: "video", text: "Abschlussarbeit · Schutz & Rettung Bern" },
  // { bild: "assets/galerie/vid-kawede-01.jpg", titel: "KaWeDe – Sanierung", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-kawede-02.jpg", titel: "KaWeDe – Sanierung", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-kawede-03.jpg", titel: "KaWeDe – Sanierung", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-kawede-04.jpg", titel: "KaWeDe – Sanierung", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-kawede-05.jpg", titel: "KaWeDe – Sanierung", kategorie: "video", text: "Videoprojekt" },
  // { bild: "assets/galerie/vid-kawede-06.jpg", titel: "KaWeDe – Sanierung", kategorie: "video", text: "Videoprojekt" },
];

/* ============================================================
   AB HIER NICHTS MEHR ÄNDERN — Aufbau der Galerie (automatisch)
   ============================================================ */
(function renderGalerie(){
  const grid = document.getElementById("galleryGrid");
  const filters = document.getElementById("galleryFilters");
  if(!grid || !filters) return;

  // Leerer Zustand: noch keine Arbeiten eingetragen
  if(!PROJEKTE.length){
    grid.style.columns = "auto";
    grid.innerHTML = '<p class="gallery__empty">Hier erscheinen bald Elenas Arbeiten.</p>';
    filters.style.display = "none";
    return;
  }

  // Nur Kategorien anzeigen, die auch wirklich vorkommen
  const benutzt = [...new Set(PROJEKTE.map(p => p.kategorie))];

  // Filter-Buttons bauen ("Alle" + vorhandene Kategorien)
  let chips = '<button class="chip is-active" data-filter="all">Alle</button>';
  benutzt.forEach(k => {
    if(KATEGORIEN[k]) chips += `<button class="chip" data-filter="${k}">${KATEGORIEN[k]}</button>`;
  });
  filters.innerHTML = chips;

  // Galerie-Kacheln bauen
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  grid.innerHTML = PROJEKTE.map(p => `
    <figure class="gitem reveal" data-cat="${esc(p.kategorie)}">
      <img src="${esc(p.bild)}" alt="${esc(p.titel)}" loading="lazy" />
      <figcaption><h4>${esc(p.titel)}</h4><span>${esc(p.text)}</span></figcaption>
    </figure>`).join("");
})();