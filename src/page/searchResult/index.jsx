import React from 'react';
import SearchResultHeader from '../../components/searchResultHeader';

class SearchResult extends React.Component {
    
    render() {
        const params = this.props.match.params;
        return (
            <div>
                <SearchResultHeader keyword={params.keyword}/>
            </div>
        )
    }
}

export default SearchResult;