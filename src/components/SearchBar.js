import React from 'react';

function SearchBar(props) {
    const selectData = props.selectData.map((data) => {
        return (
            <option value={data.value} key={data.id}>{data.value}</option>
        );
    });

    const searchSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="search-bar-wrapper">
            <form className="searchForm" onSubmit={searchSubmit}>
                <select name="select-search" className="select-search" id="select-search" onChange={props.selectChange} required>
                    {selectData}
                </select>
                <input type="text" placeholder="enter search keyword or leave empty to show all result" className="search-field" value={props.searchValue}
                       onChange={props.inputSearchKeyword} style={props.inputStyle} required />
                <input type="submit" className="button-search"
                       onClick={props.triggerButtonSearch} value="search" />
            </form>
        </div>
    );
}

export default SearchBar;