import React from 'react';
import './style.css';
import { getLikeData } from '../../../../fetch/home/home';
import LoadMore from '../../../../components/LoadMore';
import LikeItem from '../../../../components/likeItem';

class YouLike extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
        return (
            <div className="like-wrap">
                <p className="like-title">猜你喜欢</p>
                <ul className="likeList">
                {
                    this.state.data.map((item, index) => 
                        <li key={index}><LikeItem data={item}/></li>
                    )
                }
                </ul>
                {
                    this.state.hasMore ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreHandle={this.loadMoreHandle.bind(this)}/> : ''
                }
            </div>
        )
    }
    componentDidMount() {
        const city = this.props.cityName;
        const result = getLikeData(city, 0);
        this.handleResult(result);
    }
    handleResult(result) {
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json.data;
            const more = json.hasMore;
            this.setState((prevState, props) => {
                return {
                    data: prevState.data.concat(data),
                    hasMore: more
                }
            })
        });
    }
    loadMoreHandle() {
        const currentPage = this.state.page + 1;
        const city = this.props.cityName;
        const result = getLikeData(city, currentPage);
        // 正在加载中。。。
        this.setState({
            isLoadingMore: true
        });
        this.handleResult(result);
        // 数据加载完毕
        this.setState({
            isLoadingMore: false,
            page: currentPage
        });
    }
}

export default YouLike;