    mapboxgl.accessToken = mapToken;

    const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: coordinates,
    zoom: 9,
    });

    console.log(coordinates)
    
    const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(coordinates)
    .addTo(map);