import React from 'react';
import SearchHeader from '../../components/searchHeader';
import SearchHots from '../../components/searchHots';
import SearchRecords from '../../components/searchRecords';

class Search extends React.Component {
    render() {
        return (
            <div>
                <SearchHeader/>
                <SearchHots/>
                <SearchRecords/>
            </div>            
        )
    }
}

export default Search;