import React from 'react';
import ReactSwipe from 'react-swipe';
import { getCarouselData } from '../../../../fetch/home/carousel';
import { Link } from 'react-router-dom';

import './style.css';

class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            curr: 0
        };
    }
    render() {
        let reactSwipeEl;
        let data = this.state.data;
        let opt = {
            auto: 5000,
            callback: function(index) {
                this.setState({
                    curr: index
                })
            }.bind(this)
        };
        return (
            <div id="home-carousel">
                <ReactSwipe ref={el => (reactSwipeEl = el)} swipeOptions={opt}>
                    {
                        data.map((item, index) => 
                            <div className="carousel-item" key={`a${index}`}>
                                <ul className="clearfix">
                                {
                                    item.map((item1, index1) => 
                                        <li key={`b${index1}`}>
                                            <Link to={"/searchResult/" + encodeURIComponent(item1.title)}>
                                                <div className="img-wrap"><img src={item1.img} alt=""/></div>
                                                <p className="title">{item1.title}</p>
                                            </Link>
                                        </li>
                                    )
                                }
                                </ul>
                            </div>
                        )
                    }
                </ReactSwipe>
                <div className="carousel-control">
                {
                    data.map((item, index) => 
                        <span key={`c${index}`} className={this.state.curr === index ? "act" : ""}>{index+1}</span>
                    )
                }
                </div>
            </div>
        )
    }
    componentDidMount() {
        let result = getCarouselData();
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                data: json
            });
        });
    }
}

export default HomeCarousel;
