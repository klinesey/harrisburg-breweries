import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { Brewery } from "../Brewery";
import { BreweryList } from "../BreweryList";
import BreweryDetails from "./brewerydetails";

const Breweries = () => {
    const [breweries, setBreweries] = useState([]);
    const [selectedBrewery, setSelectedBrewery] = useState<Brewery | null>(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=harrisburg`);
            const json = await response.json();

            setBreweries(json);
        })();
    }, []);

    return (
        <div className="container">
            <h1 className="header">Harrisburg Breweries</h1>
            <div className="left">
                {breweries.map((brewery:Brewery) => (
                    <div className="card" onClick={() => setSelectedBrewery(brewery)}>
                        <div className="card-body">
                            <div className="card-title">{brewery.name}</div>
                            <div className="card-subtitle mb-2 text-muted">{brewery.brewery_type}</div>
                            <div className="card-subtitle mb-2 text-muted">
                                {brewery.street}<br/>
                                {brewery.city}, {brewery.state} {brewery.postal_code}
                            </div>
                            <div className="card-text"><a href={brewery.website_url} target='_blank'>{brewery.website_url}</a></div>
                        </div>
                    </div>
            ))}
            </div>
            <div className="right">
                {selectedBrewery !== null ? <BreweryDetails key={selectedBrewery.id} brewery={selectedBrewery} /> : <div>Select a Brewery</div> }
            </div>
        </div>
    )
}

/*
const Breweries: React.FC<BreweryList> = ({breweries}: BreweryList) => {
    return (
        <div>
          {breweries.map((brewery:Brewery) => (
            <div className="card">
              <div className="card-body">
                <div className="card-title">{brewery.name}</div>
                <div className="card-subtitle mb-2 text-muted">{brewery.brewery_type}</div>
                <div className="card-subtitle mb-2 text-muted">
                    {brewery.street}<br/>
                    {brewery.city}, {brewery.state} {brewery.postal_code}
                </div>
                <div className="card-text"><a href={brewery.website_url} target='_blank'>{brewery.website_url}</a></div>
              </div>
            </div>
          ))}
// Section below commented out.
          <div>
          <h1>Harrisburg Breweries</h1>
          <table width='100%' cellPadding="2">
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Address</th>
                      <th>Website</th>
                  </tr>
              </thead>
              <tbody>
              {breweries.map((brewery:Brewery) => (
                  <tr>
                      <td valign='top'>{brewery.name}</td>
                      <td valign='top'>{brewery.brewery_type}</td>
                      <td valign='top'>
                          {brewery.street}<br />
                          {brewery.city}, {brewery.state} {brewery.postal_code}
                      </td>
                      <td valign='top'><a href={brewery.website_url} target='_blank'>{brewery.website_url}</a></td>
                  </tr>
          ))}
              </tbody>
          </table>
        </div>
// end commented section
         </div>
    )
}
 */

export default Breweries