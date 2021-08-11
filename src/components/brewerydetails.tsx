import React, { useEffect, useState } from "react";
import { Brewery } from "../Brewery";
import GoogleMapReact from 'google-map-react';

interface Props {
    brewery: Brewery;
}

const BreweryDetails: React.FC<Props> = ({brewery}:Props) => {
    const [breweryDetails, setBreweryDetails] = useState<Brewery | null>(null);
    const [center, setCenter] = useState(
        {
            center:
                {
                    lat: brewery.longitude, 
                    lng: brewery.latitude
                }
            }
        )

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries/${brewery.id}`);
            const json = await response.json();

            setBreweryDetails(json);
        })();
    }, [brewery]);

    if(!breweryDetails) {
        return <div>Please wait while we retrieve the brewery.</div>
    }

    return (
        <div>
            {
                breweryDetails && (
                    <div className="rightCard">
                        <div className="breweryName">{breweryDetails.name}</div>
                        <div className="breweryAddress">
                            {breweryDetails.street}<br />
                            {breweryDetails.city}, {breweryDetails.state} {breweryDetails.postal_code}                            
                        </div>
                        <div className="breweryMap">
                            <GoogleMapReact 
                                bootstrapURLKeys={{key: "AIzaSyBoiheG8CxdLeTol6LjopAOegYL5M0COs8"}} 
                                defaultCenter={{ lat: brewery.latitude, lng: brewery.longitude }} 
                                center={{ lat: brewery.latitude, lng: brewery.longitude }}
                                defaultZoom={11} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BreweryDetails