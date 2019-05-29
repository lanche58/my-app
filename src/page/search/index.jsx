import React from 'react';
import SearchHeader from '../../components/searchHeader';
import SearchHots from '../../components/searchHots';
import SearchRecords from '../../components/searchRecords';
import { SEARCHRECORDS } from '../../config/localStorageKey'
import localStorage from '../../util/localStorage';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRecord: false,
            recordsList: [],
            value: ""
        }
    }
    render() {
        let hots = ["烤肉", "串串", "火锅", "小龙坎", "春熙路", "银泰", "太古里", "环球中心", "一点点"];
        const value = this.state.value;
        return (
            <div>
                <SearchHeader value={value} changeFn={this.recordsShow.bind(this)} />
                <SearchHots clickSearchFn={this.clickSearch.bind(this)} changeFn={this.recordsShow.bind(this)} hots={hots}/>
                {
                    this.state.isShowRecord ? <SearchRecords clickSearchFn={this.clickSearch.bind(this)} clearClickHandle={this.clearHandle.bind(this)} records={this.state.recordsList}/> : ""
                }
            </div>            
        )
    }
    componentDidMount() {
        const records = localStorage.getItem(SEARCHRECORDS);
        if (records) {
            this.setState({
                isShowRecord: true,
                recordsList: records.split(',')
            })
        }
    }
    componentWillUnmount() {
        const records = this.state.recordsList;
        localStorage.setItem(SEARCHRECORDS, records);
    }
    recordsShow(value) {
        if (value) {
            this.setState({
                isShowRecord: true
            })
            let newRecords = this.state.recordsList;
            const index = newRecords.indexOf(value);
            if (index === -1) {
                newRecords.push(value);
                this.setState({
                    recordsList: newRecords
                })
            }
        }
    }
    clearHandle() {
        this.setState({
            recordsList: [],
            isShowRecord: false
        });
        localStorage.setItem(SEARCHRECORDS, '');
    }
    clickSearch(value) {
        this.setState({
            value: value
        });
        this.props.history.push(`/searchResult/all/${encodeURIComponent(value)}`);
    }
}

export default Search;