import React from 'react';
import { nanoid } from 'nanoid';
import Loader from './../images/icons/loader.svg';

function SearchList(props) {
    const results = props.infoData;

    const buildResult = results.map(result => {
        switch (props.selectValue) {
            case 'people':
                return (
                    <div onClick={props.viewSelected} data-url={result.url} className="list film" key={nanoid()}>
                        <h1>{result.name}</h1>
                        <div className="list-info"><strong>Birth Year: </strong> {result.birth_year}</div>
                        <div className="list-info"><strong>Eye Color: </strong> {result.eye_color}</div>
                        <div className="list-info"><strong>Gender: </strong> {result.gender}</div>
                    </div>
                )
            case 'planets':
                return (
                    <div onClick={props.viewSelected} data-url={result.url} className="list" key={nanoid()}>
                        <h1>{result.name}</h1>
                        <div className="list-info"><strong>Population: </strong> {result.population}</div>
                        <div className="list-info"><strong>Terrain: </strong> {result.terrain}</div>
                        <div className="list-info"><strong>Climate: </strong> {result.climate}</div>
                    </div>
                )
            case 'films':
                return (
                    <div  onClick={props.viewSelected} data-url={result.url} className="list" key={nanoid()}>
                        <h1>{result.title}</h1>
                        <div className="list-info"><strong>Director: </strong> {result.director}</div>
                        <div className="list-info"><strong>Producer: </strong> {result.producer}</div>
                        <div className="list-info"><strong>Episode: </strong> {result.episode_id}</div>
                    </div>
                )
            case 'species':
                return (
                    <div  onClick={props.viewSelected} data-url={result.url} className="list" key={nanoid()}>
                        <h1>{result.name}</h1>
                        <div className="list-info"><strong>Classification: </strong> {result.classification}</div>
                        <div className="list-info"><strong>Average Height: </strong> {result.average_height}</div>
                        <div className="list-info"><strong>Designation: </strong> {result.designation}</div>
                    </div>
                )
            case 'vehicles':
                return (
                    <div  onClick={props.viewSelected} data-url={result.url} className="list" key={nanoid()}>
                        <h1>{result.name}</h1>
                        <div className="list-info"><strong>Model: </strong> {result.model}</div>
                        <div className="list-info"><strong>Manufacturer: </strong> {result.manufacturer}</div>
                        <div className="list-info"><strong>Vehicle Class: </strong> {result.vehicle_class}</div>
                    </div>
                )
            case 'starships':
                return (
                    <div  onClick={props.viewSelected} data-url={result.url} className="list" key={nanoid()}>
                        <h1>{result.name}</h1>
                        <div className="list-info"><strong>Model: </strong> {result.model}</div>
                        <div className="list-info"><strong>Manufacturer: </strong> {result.manufacturer}</div>
                        <div className="list-info"><strong>Starship Class: </strong> {result.starship_class}</div>
                    </div>
                )
            default:
                return (
                    <div onClick={props.viewSelected} data-url={result.url} className="list" key={nanoid()}>
                        <h1>{result.name}</h1>
                        <div className="list-info"><strong>Birth Year: </strong> {result.birth_year}</div>
                        <div className="list-info"><strong>Eye Color: </strong> {result.eye_color}</div>
                        <div className="list-info"><strong>Gender: </strong> {result.gender}</div>
                    </div>
                )
        }
    })

    return (
        <div className={"content-information-container" + (props.dataIsLoading ? ' loading' : '')}>
            {props.dataIsLoading && <div className="loader"><img src={Loader} alt="Loader"/></div>}

            {(results.length) ? (<div className="list-container">{buildResult}</div>) : (
                <div className={"no-result-found" + (props.dataIsLoading ? ' loading' : '')}>No results found.</div>
            )}
        </div>
    );
}

export default SearchList;