interface Review {
  id: number;
  stars: number;
  text: string;
  authorName: string;
}

type ReviewState = {
  reviews: Review[];
};

type ReviewAction = {
  type: string;
  review: Review;
};

type DispatchType = (args: ReviewAction) => ReviewAction;

interface IRestaurant{
  name: string;
  year: Number;
  latitude: Number;
  longitude: Number;
  city: string;
  region: string;
  zipCode: Number;
  cuisine: string;
  price: string;
  url: string;
};

type RestaurantsAction = {
  type: string;
}

