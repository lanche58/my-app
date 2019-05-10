import React from 'react';
import SearchHeader from '../../components/searchHeader';
import SearchHots from '../../components/searchHots';
import SearchRecords from '../../components/searchRecords';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRecord: false,
            recordsList: []
        }
    }
    render() {
        let hots = ["烤肉", "串串", "火锅", "小龙坎", "春熙路", "银泰", "太古里", "环球中心", "一点点"];
        return (
            <div>
                <SearchHeader changeFn={this.recordsShow.bind(this)} />
                <SearchHots hots={hots}/>
                {
                    this.state.isShowRecord ? <SearchRecords clearClickHandle={this.clearHandle.bind(this)}  records={this.state.recordsList}/> : null
                }
                
            </div>            
        )
    }
    recordsShow(value) {
        if (value) {
            if (this.state.isShowRecord === false) {
                this.setState({
                    isShowRecord: true
                })
            }

            var newRecords = this.state.recordsList;
            newRecords.push(value);
            
            this.setState({
                recordsList: newRecords
            })
        }
    }
    clearHandle() {
        this.setState({
            recordsList: [],
            isShowRecord: false
        })
    }
}

export default Search;