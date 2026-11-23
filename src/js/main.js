function initMap () {
    const mapLat = 52.1260546;
    const mapLng = 11.6406331;
    const markerObjs = [
        {header: 'Gemeinschaftsgarten Stadtfeld', content: 'Zwischen Hochbeeten und Kieswegen wächst hier alles, was die Nachbarschaft braucht. Olli und seine NachbarnInnen pflanzen hier regelmäßig Tomaten, Zucchini, Salat und frische Kräuter an. Im Sommer gibt es auch mal Kuchen mit selbst angebauten Erdbeeren.', img: 'public/pictures/pic3.jpg', positons: [11.607258,52.138522]},
        {header: 'Der Garten auf dem Dach', content: 'Ein Gewächshaus, Hochbeete und eine Handvoll engagierter Nachbarn. Hier wird das ganze Jahr über gepflanzt, gehegt und gepflegt. Von Gurken über Kohl bis hin zu Kürbissen ist alles dabei.', img: 'public/pictures/pic4.jpg', positons: [11.607166,52.124674]},
        {header: 'Gemeinschaftsgarten Buckau', content: 'Entlang des schmalen Kieswegs reihen sich bunte Beete, Sonnenblumen und eine kleine Laube zum Verschnaufen. Familie Muster sowie NachbarnInnen bauen hier Bohnen, Rote Bete, Blumen und Kräuter an und teilen diese gerne über den Gartenzaun.', img: 'public/pictures/pic5.jpg', positons: [11.626577,52.113722]},
        {header: 'Der Garten an der Leipziger Straße', content: 'Hier darf es auch mal wild wachsen: Zwischen Mohnblumen, Kräutern und Gemüse sammeln blaue Regentonnen jeden Tropfen für die nächste Gießrunde. Die Nachbarn setzen auf naturnahes Gärtnern und lassen Platz für Bienen, Schmetterlinge und Blumen.', img: 'public/pictures/pic6.jpg', positons: [11.621069,52.109050]}
    ];
    const map = L.map('map',{zoomSnap: 0.15}).setView([mapLat, mapLng], 13.2);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 12
    }).addTo(map);

    const fenceIcon = L.icon({
        iconUrl: 'public/assets/fence.svg',
        shadowUrl: 'public/assets/fence_shadow.svg',
        iconSize: [80, 80],
        shadowSize: [120, 120],
        iconAnchor: [43, 43],
        shadowAnchor: [52, 72],
        popupAnchor:  [0, -30]
    });

    markerObjs.forEach(marker => {
        L.marker([marker.positons[1], marker.positons[0]], {icon:fenceIcon}).addTo(map).bindPopup(`<h3>${marker.header}</h3><p>${marker.content}</p><img src="${marker.img}"/>`);
    });
}

function handleScrollContainer() {
  const container = document.querySelector('.scroll__container');
  const items = document.querySelectorAll('.scroll__item');

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateStage(container, items);
        ticking = false;
      });
    },
    { passive: true },
  );

  updateStage(container, items);
}

function updateStage(container, items) {
  const rect = container.getBoundingClientRect();

  const total = rect.height - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / total, 0), 1);

  const index = Math.min(Math.floor(progress * items.length), items.length - 1);

  items.forEach((item, i) =>
    item.classList.toggle('scroll__item--active', i === index),
  );
}

handleScrollContainer();
initMap();