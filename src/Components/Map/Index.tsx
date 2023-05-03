import { FC, useEffect, useState, useCallback } from "react";
import { Map, Marker, GoogleApiWrapper, GoogleAPI } from "google-maps-react";
import { useForm } from "../../Context/QueryContext";
import { useDispatch, useSelector } from "react-redux";
import {
  setRestaurants,
  setRestaurant,
} from "./../../store/actions/restaraunts";

interface MapContainerProps {
  google: GoogleAPI;
  placeId?: GoogleAPI;
}

interface PlaceResult {
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
  name: string;
  place_id: string;
}

interface SearchByQueryProps {
  map: any;
  query?: string;
  getCenter: () => void;
}

interface Restaurant {
  place_id: string;
  name: string;
  geometry: {
    location: {
      lat: () => number;
      lng: () => number;
    };
  };
}

const MapContainer: FC<MapContainerProps> = ({ google, placeId }) => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state: any) => state.restaurants);
  const { useContext } = useForm();
  const [map, setMap] = useState(null);

  const searchByQuery = useCallback(
    (map: SearchByQueryProps, query: string) => {
      const service = new google.maps.places.PlacesService(map);
      dispatch(setRestaurants([]));

      const request = {
        location: map.getCenter(),
        radius: "200",
        type: ["restaurant"],
        query,
      };

      service.textSearch(request, (results: PlaceResult[], status: boolean) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurants(results));
        }
      });
    },
    [dispatch, google]
  );

  const searchNearby = useCallback(
    (map: SearchByQueryProps, center: any) => {
      const service = new google.maps.places.PlacesService(map);

      const request = {
        location: center,
        radius: "20000",
        type: ["restaurant"],
      };

      service.nearbySearch(
        request,
        (results: PlaceResult[], status: boolean) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            dispatch(setRestaurants(results));
          }
        }
      );
    },
    [dispatch, google]
  );

  const getDetails = useCallback(
    (placeId: any) => {
      const service = new google.maps.places.PlacesService(map);
      const request = {
        placeId,
        fields: [
          "name",
          "opening_hours",
          "formatted_address",
          "formatted_phone_number",
        ],
      };

      service.getDetails(request, (place: any, status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          dispatch(setRestaurant(place));
        }
      });
    },
    [dispatch, google, map]
  );

  const onMapReady = useCallback(
    (_, map: any) => {
      setMap(map);
      searchNearby(map, map.getCenter());
    },
    [searchNearby]
  );

  useEffect(() => {
    if (map) {
      searchByQuery(map, useContext);
    }
  }, [map, searchByQuery, useContext]);

  useEffect(() => {
    if (placeId) {
      getDetails(placeId);
    }
  }, [placeId, getDetails]);

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
    >
      {restaurants.map((restaurant: Restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};

const WrappedMapContainer = GoogleApiWrapper({
  apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  language: "pt-BR",
})(MapContainer);

export default WrappedMapContainer;
