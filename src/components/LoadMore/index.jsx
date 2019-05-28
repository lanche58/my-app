import React from 'react';
import '../style.css';

class LoadMore extends React.Component{
    render() {
        return (
            <div className="load-more-wrap" ref="wrapper">
                {this.props.isLoadingMore ? <span>正在加载中。。。</span> : <span onClick={this.props.loadMoreHandle}>加载更多</span>}
            </div>
        )
    }
    componentDidMount() {
        const wrapper = this.refs.wrapper;
        const loadMoreFn = this.props.loadMoreHandle;
        let timeoutId;

        function callback() {
            const top = wrapper.getBoundingClientRect().top;
            const w_height = window.screen.height;
            if (top && top < w_height) {
                loadMoreFn();
            }
        }

        window.addEventListener('scroll', function() {
            if (this.props.isLoadingMore) { return; }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(callback, 50);
        }.bind(this), false);
    }
}

export default LoadMore;