import { useEffect, useMemo, useRef, useState } from "react";
import Footer from "../../componets/UI/Footer/Footer";
import Navbar from "../../componets/UI/Navbar/Navbar";
import "./EventsNearMePage.css";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { events } from "../../dummyData";
import useApi from "../../hooks/apiHook";
interface ILocationCoords {
  location?: string;
  lat: number;
  lng: number;
}
interface INearbyEvent {
  title: string;
  location: string;
  distance: string;
}
const EventsNearMePage = () => {
  const [locationCoords, setLocationCoords] = useState<ILocationCoords>({
    location: "",
    lat: 0,
    lng: 0,
  });
  const [nearbyCoords, setNearbyCoords] = useState<ILocationCoords[]>([]);
  const [nearbyEvents, setNearbyEvents] = useState<INearbyEvent[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const { addressSearch } = useApi();

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY as string;
  const map = useRef<any>();
  const mapElement = useRef<any>();
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position: any) => {
    setLocationCoords({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const center = useMemo(() => {
    return { lat: locationCoords.lat, lng: locationCoords.lng };
  }, [locationCoords]);
  console.log(center);
  const calculateDistance = (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // in meters
    return distance;
  };
  useEffect(() => {
    events.map((event) => {
      setLocations((prev) => [...prev, event.details.location]);
    });

    getLocation();
  }, []);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapElement.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [center.lng, center.lat],
      zoom: 2,
    });
    map.current.addControl(new mapboxgl.NavigationControl());
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );
  }, [center]);
  useEffect(() => {
    if (locations.length > 0) {
      locations.map((location) => {
        addressSearch(location).then((res) => {
          console.log(res);

          setNearbyCoords((prev) => [
            ...prev,
            {
              location: location,
              lat: res[0].center[1],
              lng: res[0].center[0],
            },
          ]);
        });
      });
    }
  }, [locations]);
  useEffect(() => {
    let radius = 6000;
    setNearbyEvents([]);
    nearbyCoords
      .filter((event) => {
        let distance = calculateDistance(
          event.lat,
          event.lng,
          center.lat,
          center.lng
        );
        console.log(distance, event.location, center.lat, center.lng);

        return distance < radius;
      })
      .map((coord) => {
        events
          .filter((event) => event.details.location === coord.location)
          .map((event) => {
            console.log(event.title, event.details.location, coord.location);

            setNearbyEvents((prev) => [
              ...prev,
              {
                title: event.title,
                location: event.details.location,
                distance: `${(
                  calculateDistance(
                    coord.lat,
                    coord.lng,
                    center.lat,
                    center.lng
                  ) / 1000
                ).toFixed(2)}km`,
              },
            ]);
          });
      });
  }, [nearbyCoords, center]);
  useEffect(() => {
    if (!map.current) return;
    const marker = new mapboxgl.Marker({
      color: "blue",
    })
      .setLngLat([center.lng, center.lat])
      .addTo(map.current);

    map.current.flyTo({
      center: [center.lng, center.lat],
      zoom: 14,
    });
    nearbyCoords
      .filter((coord) => {
        let radius = 50;
        let distance = Math.sqrt(
          Math.pow(coord.lat - center.lat, 2) +
            Math.pow(coord.lng - center.lng, 2)
        );
        return distance < radius;
      })
      .map((coord) => {
        let markerElement = document.createElement("div");
        markerElement.className = "marker";
        return new mapboxgl.Marker(markerElement)
          .setLngLat([coord.lng, coord.lat])
          .addTo(map.current);
      });
    return () => {
      marker.remove();
    };
  }, [locationCoords]);

  console.log(nearbyEvents);

  return (
    <>
      <Navbar />
      <div className="events-near-me-page-container">
        <h1>Events Near Me</h1>
        <div className="main-events-nearby-container-container">
          <div className="nearby-events-sidebar">
            {nearbyEvents.map((event) => {
              return (
                <div className="nearby-event" key={event.title}>
                  <h2>{event.title}</h2>
                  <p>{event.location}</p>
                  <p>{event.distance}</p>
                </div>
              );
            })}
          </div>
          <div className="map-container" ref={mapElement} />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default EventsNearMePage;
