export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmFpaGFubXVoYW1tYWQiLCJhIjoiY2s4c2JsNnFxMGwzYjNocTVmanB6enZxaCJ9.o8UUzrOGDYjKQ7tvF5Kxtw';
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/raihanmuhammad/ckaz9jyr311ox1jqugmgkxorh',
    center: [-118.113491, 34.111745],
    zoom: 10,
    interactive: false,
  });
};
