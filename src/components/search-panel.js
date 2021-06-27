import React from 'react';

const SearchPanel = () => {
    const searchStyle = {
        fontSize:'25px'
    };

    const searchText = 'Type here to search';
    return <input
        style={searchStyle}
        className='mi'
        placeholder={ searchText}
        disabled
    />;
};

export default SearchPanel;