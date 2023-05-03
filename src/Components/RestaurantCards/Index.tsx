import * as C from "./styles";
import { Col, CardBody } from "reactstrap";
import { Rating } from "@mui/material";
import { useSelector } from "react-redux";
import Map from "./../Map/Index";
import ModalMap from "../ModalMap/Index";
import Searching from "../Searching/Index";
import { useState } from "react";

interface RestaurantProps {
  name: string;
  photos?: { getUrl(): string }[];
  icon: string;
  rating: number;
  user_ratings_total: number;
  formatted_address: string;
  place_id: number;
}

const RestaurantCards = () => {
  const [placeId, setPlaceId] = useState<unknown>(null);
  const { restaurants } = useSelector((state: any) => state.restaurants);
  return (
    <>
      <ModalMap />
      <C.Row>
        {restaurants.length === 0 && <Searching />}

        {restaurants.map((restaurant: RestaurantProps) => (
          <Col
            key={restaurant.place_id}
            onClick={() => {
              setPlaceId(restaurant.place_id);
            }}
          >
            <C.Card body outline color="dark">
              <img
                alt="Sample"
                src={
                  restaurant.photos
                    ? restaurant.photos[0].getUrl()
                    : restaurant.icon
                }
              />
              <CardBody>
                <C.Restaurant tag="h5">{restaurant.name}</C.Restaurant>
                <C.Local className="mb-2 text-muted" tag="h6">
                  {restaurant.formatted_address}
                </C.Local>
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={restaurant.rating}
                  readOnly
                />
                <C.Local>
                  Reviews {`(${restaurant.user_ratings_total})`}
                </C.Local>
              </CardBody>
            </C.Card>
          </Col>
        ))}
      </C.Row>
      <div style={{ display: "none" }}>
        <Map placeId={placeId} />
      </div>
    </>
  );
};

export default RestaurantCards;
