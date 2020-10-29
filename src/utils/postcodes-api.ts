import fetch from 'node-fetch';

export interface Codes {
  admin_district: string;
  admin_county: string;
  admin_ward: string;
  parish: string;
  parliamentary_constituency: string;
  ccg: string;
  ccg_id: string;
  ced: string;
  nuts: string;
}

export interface LatLonResult extends PostcodeResult {
  distance: number;
}

export interface PostcodeResult {
  postcode: string;
  quality: number;
  eastings: number;
  northings: number;
  country: string;
  nhs_ha: string;
  longitude: number;
  latitude: number;
  european_electoral_region: string;
  primary_care_trust: string;
  region?: any;
  lsoa: string;
  msoa: string;
  incode: string;
  outcode: string;
  parliamentary_constituency: string;
  admin_district: string;
  parish?: any;
  admin_county?: any;
  admin_ward: string;
  ced?: any;
  ccg: string;
  nuts: string;
  codes: Codes;
}

export interface PostcodeResponse {
  status: number;

  result: PostcodeResult;
}

export interface LatLonResponse {
  status: number;
  result: LatLonResult[];
}

export interface QueryPostcodesResponse {
  status: number;

  result: PostcodeResult[] | null;
}

export const postcodeToInfo = async (
  postcode: string,
): Promise<PostcodeResponse> => {
  const res = await fetch(
    `https://postcodes.ecoeats.uk/postcodes/${postcode}`,
  ).then((r) => r.json());

  return res;
};

export const latLngToPostcode = async (
  latlng: [number, number],
  radius = 1000,
): Promise<LatLonResponse> => {
  const res = await fetch(
    `https://postcodes.ecoeats.uk/postcodes?lon=${latlng[1]}&lat=${latlng[0]}&limit=1&radius=${radius}`,
  ).then((r) => r.json());

  return res;
};

export const queryPostcodes = async (
  postcode: string,
): Promise<QueryPostcodesResponse> => {
  const res = await fetch(
    `https://postcodes.ecoeats.uk/postcodes?q=${postcode}`,
  ).then((r) => r.json());

  return res;
};
