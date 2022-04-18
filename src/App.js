import SearchBar from './components/SearchBar';
import React from "react";
import { nanoid } from 'nanoid';
import starWarsLogo from './images/icons/star-wars-logo.png';
import SearchList from './components/SearchList';
import SearchView from './components/SearchView';

function App() {
    const [selectData, setSelectData] = React.useState([]);
    const [searchParams, setSearchParams] = React.useState({initialValue: '', searchValue: '', selectValue: '', triggerSearch: false})
    const [triggerSearch, setTriggerSearch] = React.useState(false);
    const [firstSearchTriggered, setFirstSearchTriggered] = React.useState(false);
    const [infoData, setInfoData] = React.useState([]);
    const [dataIsLoading, setDataIsLoading] = React.useState(false);
    const [dataView, setDataView] = React.useState({display: '', url: ''});
    let inputStyle = {};

    React.useEffect( () => {
        const getData = async () => {
            const getData = await fetch('https://swapi.dev/api');
            const dataResult = await getData.json();
            const selectDataArray = [];

            for (const property in dataResult) {
                selectDataArray.push({id: nanoid(), value: property});
            }

            setSearchParams(oldParams => {
                return ({
                    ...oldParams,
                    initialValue: selectDataArray[0].value
                });
            })

            setSelectData(selectDataArray);
        }

        getData();

        return () => {};
    }, []);

    React.useEffect( () => {
        if (searchParams.selectValue) {
            setDataIsLoading(true);

            const getInfoData = async () => {
                let getData;

                if (dataView.display === 'list') {
                    if (searchParams.searchValue !== '') {
                        getData = await fetch(`https://swapi.dev/api/${searchParams.selectValue}/?search=${searchParams.searchValue}`);
                    } else {
                        getData = await fetch(`https://swapi.dev/api/${searchParams.selectValue}`);
                    }

                    const dataResult = await getData.json();
                    setInfoData(dataResult.results);
                } else {
                    getData = await fetch(`${dataView.url}`);

                    const dataResult = await getData.json();
                    setInfoData(dataResult);
                }


                setDataIsLoading(false);
            }

            getInfoData();
        }

        return () => {};
    }, [triggerSearch]);

    const selectChange = (e) => {
        setSearchParams(oldParams => {
            return ({
                ...oldParams,
                initialValue: e.target.value,
            });
        })
    }

    const inputSearchKeyword = (e) => {
        setSearchParams(oldParams => {
            return ({
                ...oldParams,
                searchValue: e.target.value
            });
        })
    }

    const triggerButtonSearch = (e) => {
        e.preventDefault();

        setInfoData([]);

        setDataIsLoading(true);

        setDataView((oldState => {
            return ({
                ...oldState,
                display: 'list'
            });
        }));

        setTriggerSearch(oldState => {
            return !oldState;
        });

        setSearchParams(oldParams => {
            return ({
                ...oldParams,
                selectValue: oldParams.initialValue,
            });
        })

        if (!firstSearchTriggered) {
            setFirstSearchTriggered(true);
        }
    }

    const viewSelected = (e) => {
        setDataIsLoading(true);
        const url = e.currentTarget.getAttribute('data-url');

        setDataView((oldState => {
            return ({
                ...oldState,
                url: url,
                display: 'view'
            });
        }));

        setTriggerSearch(oldState => {
            return !oldState;
        });
    }

    const mainContainerClass = 'App main-container' + (firstSearchTriggered ? ' first-interaction-triggered' : '');

    return (
        <div className={mainContainerClass}>
           <div className="content-container">
               <SearchBar selectData={selectData} selectChange={selectChange} triggerButtonSearch={triggerButtonSearch}
                          inputSearchKeyword={inputSearchKeyword} searchValue={searchParams.searchValue}
                          inputStyle={inputStyle} />
               <div className="powered-by-wrapper">
                   <img src={starWarsLogo} alt="star wars logo" />
                   <p> wiki - powered by <a href="https://swapi.dev/" target="_blank" title="swapi">SWAPI</a></p>
               </div>
           </div>

            {(firstSearchTriggered && dataView.display === 'list') && (
                <SearchList infoData={infoData} dataIsLoading={dataIsLoading} selectValue={searchParams.selectValue}
                            triggerSearch={searchParams.triggerSearch} viewSelected={viewSelected} />
            )}

            {(firstSearchTriggered && dataView.display === 'view') && (
                <SearchView infoData={infoData} selectValue={searchParams.selectValue} />
            )}
        </div>
    );
}

export default App;
