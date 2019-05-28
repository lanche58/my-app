import React from 'react';
import { getDiscountData } from '../../../../fetch/home/home';
import DiscountItem from '../../../../components/discountItem';
import { Link } from 'react-router-dom';

import './style.css';

class HomeDiscount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        const data = this.state.data;
        return (
            <div className="discount-wrap">
                <div className="discount-title clearfix">
                    <Link to="/">
                        <span className="more">更多优惠 ></span>
                        <p className="title">超值特惠</p>
                    </Link>
                </div>
                <ul className="discount-list clearfix">
                    {
                        data.map((item, index) => {
                            return <li key={index}><DiscountItem data={item}/></li>
                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        const city = this.props.cityName;
        const result = getDiscountData(city);
        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                data: json
            });
        });
    }
}

export default HomeDiscount;