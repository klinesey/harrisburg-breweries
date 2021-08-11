import React from "react";

export interface Brewery {
    id: number;
    name?: string;
    brewery_type?: string;
    street?: string;
    address_2?: string;
    address_3?: string;
    city?: string;
    state?: string;
    county_province?: string;
    postal_code?: string;
    country?: string;
    longitude: number;
    latitude: number;
    phone?: string;
    website_url?: string;
}
