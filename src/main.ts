import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const map: Map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

const zoomOutButton: HTMLButtonElement | null = document.getElementById('zoom-out') as HTMLButtonElement;
if (zoomOutButton) {
  zoomOutButton.addEventListener('click', function () {
    const view = map.getView();
    const currentZoom = view?.getZoom(); // Optional chaining here
    if (currentZoom !== undefined) {
      view.setZoom(currentZoom - 1);
    }
  });
}

const zoomInButton: HTMLButtonElement | null = document.getElementById('zoom-in') as HTMLButtonElement;
if (zoomInButton) {
  zoomInButton.addEventListener('click', function () {
    const view = map.getView();
    const currentZoom = view?.getZoom(); // Optional chaining here
    if (currentZoom !== undefined) {
      view.setZoom(currentZoom + 1);
    }
  });
}
