export interface IBreweries {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: null;
  address_3: null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: null;
  state: string;
  street: string;
}

export class Breweries {
  id: string;
  name: string;
  brewery_type: string;
  address_1: string;
  address_2: null;
  address_3: null;
  city: string;
  state_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: null;
  state: string;
  street: string;

  constructor(breweries: IBreweries) {
    this.id = breweries.id;
    this.name = breweries.name;
    this.brewery_type = breweries.brewery_type;
    this.address_1 = breweries.address_1;
    this.address_2 = breweries.address_2;
    this.address_3 = breweries.address_3;
    this.city = breweries.city;
    this.state_province = breweries.state_province;
    this.postal_code = breweries.postal_code;
    this.country = breweries.country;
    this.longitude = breweries.longitude;
    this.latitude = breweries.latitude;
    this.phone = breweries.phone;
    this.website_url = breweries.website_url;
    this.state = breweries.state;
    this.street = breweries.street;
  }
}

