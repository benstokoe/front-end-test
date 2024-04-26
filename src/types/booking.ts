export interface BookingRequest {
  bookingType: string;
  location: string;
  direct: boolean;
  departureDate: string;
  duration: string;
  gateway: string;
  partyCompositions: PartyComposition[];
}

export interface Destination {
  name: string;
  gateway: string;
}

export interface BookingResponse {
  holidays: Holiday[];
  destination: Destination;
}

export interface Holiday {
  totalPrice: number;
  pricePerPerson: number;
  flyingClubMiles: number;
  virginPoints: number;
  tierPoints: number;
  departureDate: string;
  selectedDate: string;
  hotel: Hotel;
}

export interface PartyComposition {
  adults: number;
  childAges: number[];
  infants: number;
}

export interface Hotel {
  id: string;
  name: string;
  boardBasis: string;
  content: HotelContent;
}

export interface HotelContent {
  name: string;
  vRating: number | string;
  hotelDescription: string;
  atAGlance: string[];
  parentLocation: string;
  images: HotelImage[];
  holidayType: string[];
  boardBasis: string[];
  hotelLocation: string[];
  accommodationType: string[];
  hotelFacilities: string[];
  starRating: number | string;
  propertyType: string;
}

export interface HotelImage {
  RESULTS_CAROUSEL: Image;
}

export interface Image {
  url: string;
}

