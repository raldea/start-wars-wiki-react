import React from 'react';

function SearchView(props) {
    const individualInfo = props.infoData;

    console.log(individualInfo);

    return (
        <div className="search-view">
            {props.selectValue === 'people' && (
                <>
                    <h1 className="view-title">{individualInfo.name}</h1>
                    <div className="individual-info"><strong>Birth Year: </strong> {individualInfo.birth_year}</div>
                    <div className="individual-info"><strong>Eye Color: </strong> {individualInfo.eye_color}</div>
                    <div className="individual-info"><strong>Gender: </strong> {individualInfo.gender}</div>
                    <div className="individual-info"><strong>Hair Color: </strong> {individualInfo.hair_color}</div>
                    <div className="individual-info"><strong>Height: </strong> {individualInfo.height}</div>
                    <div className="individual-info"><strong>Mass: </strong> {individualInfo.mass}</div>
                </>
            )}

            {props.selectValue === 'planets' && (
                <>
                    <h1 className="view-title">{individualInfo.name}</h1>
                    <div className="individual-info"><strong>Climate: </strong> {individualInfo.climate}</div>
                    <div className="individual-info"><strong>Diameter: </strong> {individualInfo.diameter}</div>
                    <div className="individual-info"><strong>Gravity: </strong> {individualInfo.gravity}</div>
                    <div className="individual-info"><strong>Orbital Period: </strong> {individualInfo.orbital_period}</div>
                    <div className="individual-info"><strong>Rotation Period: </strong> {individualInfo.rotation_period}</div>
                    <div className="individual-info"><strong>Surface Water: </strong> {individualInfo.surface_water}</div>
                    <div className="individual-info"><strong>Terrain: </strong> {individualInfo.terrain}</div>
                </>
            )}

            {props.selectValue === 'films' && (
                <>
                    <h1 className="view-title">{individualInfo.title}</h1>
                    <div className="individual-info"><strong>director: </strong> {individualInfo.director}</div>
                    <div className="individual-info"><strong>Episode: </strong> {individualInfo.episode_id}</div>
                    <div className="individual-info"><strong>Opening Crawl: </strong> {individualInfo.opening_crawl}</div>
                    <div className="individual-info"><strong>Producer: </strong> {individualInfo.producer}</div>
                    <div className="individual-info"><strong>Rotation Period: </strong> {individualInfo.rotation_period}</div>
                    <div className="individual-info"><strong>Surface Water: </strong> {individualInfo.surface_water}</div>
                    <div className="individual-info"><strong>Terrain: </strong> {individualInfo.terrain}</div>
                </>
            )}

            {props.selectValue === 'species' && (
                <>
                    <h1 className="view-title">{individualInfo.name}</h1>
                    <div className="individual-info"><strong>Average Height: </strong> {individualInfo.average_height}</div>
                    <div className="individual-info"><strong>Average Lifespan: </strong> {individualInfo.average_lifespan}</div>
                    <div className="individual-info"><strong>Classification: </strong> {individualInfo.classification}</div>
                    <div className="individual-info"><strong>Designation: </strong> {individualInfo.designation}</div>
                    <div className="individual-info"><strong>Eye Colors: </strong> {individualInfo.eye_colors}</div>
                    <div className="individual-info"><strong>Hair Colors: </strong> {individualInfo.hair_colors}</div>
                    <div className="individual-info"><strong>Language: </strong> {individualInfo.language}</div>
                    <div className="individual-info"><strong>Skin Colors: </strong> {individualInfo.skin_colors}</div>
                </>
            )}

            {props.selectValue === 'vehicles' && (
                <>
                    <h1 className="view-title">{individualInfo.name}</h1>
                    <div className="individual-info"><strong>Cargo Capacity: </strong> {individualInfo.cargo_capacity}</div>
                    <div className="individual-info"><strong>Consumables: </strong> {individualInfo.consumables}</div>
                    <div className="individual-info"><strong>Cost in Credits: </strong> {individualInfo.cost_in_credits}</div>
                    <div className="individual-info"><strong>Crew: </strong> {individualInfo.crew}</div>
                    <div className="individual-info"><strong>Length: </strong> {individualInfo.length}</div>
                    <div className="individual-info"><strong>Manufacturer: </strong> {individualInfo.manufacturer}</div>
                    <div className="individual-info"><strong>Max Atmosphering Speed: </strong> {individualInfo.max_atmosphering_speed}</div>
                    <div className="individual-info"><strong>Model: </strong> {individualInfo.model}</div>
                    <div className="individual-info"><strong>Passengers: </strong> {individualInfo.passengers}</div>
                    <div className="individual-info"><strong>Vehicle Class: </strong> {individualInfo.vehicle_class}</div>
                </>
            )}

            {props.selectValue === 'starships' && (
                <>
                    <h1 className="view-title">{individualInfo.name}</h1>
                    <div className="individual-info"><strong>MGLT: </strong> {individualInfo.MGLT}</div>
                    <div className="individual-info"><strong>Cargo Capacity: </strong> {individualInfo.cargo_capacity}</div>
                    <div className="individual-info"><strong>Consumables: </strong> {individualInfo.consumables}</div>
                    <div className="individual-info"><strong>Cost in Credits: </strong> {individualInfo.cost_in_credits}</div>
                    <div className="individual-info"><strong>Crew: </strong> {individualInfo.crew}</div>
                    <div className="individual-info"><strong>Hyperdrive Rating: </strong> {individualInfo.hyperdrive_rating}</div>
                    <div className="individual-info"><strong>Length: </strong> {individualInfo.length}</div>
                    <div className="individual-info"><strong>Manufacturer: </strong> {individualInfo.manufacturer}</div>
                    <div className="individual-info"><strong>Max Atmosphering Speed: </strong> {individualInfo.max_atmosphering_speed}</div>
                    <div className="individual-info"><strong>Model: </strong> {individualInfo.model}</div>
                    <div className="individual-info"><strong>Passengers: </strong> {individualInfo.passengers}</div>
                    <div className="individual-info"><strong>Starship Class: </strong> {individualInfo.starship_class}</div>
                </>
            )}
        </div>
    );
}

export default SearchView;