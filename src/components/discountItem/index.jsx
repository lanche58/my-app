import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class DiscountItem extends React.Component{
    render() {
        const data = this.props.data;
        return (
            <div className="discount-item">
                <Link to="/">
                <div className="pic"><img src={data.img} alt=""/></div>
                <div className="desc">
                    <p className="title">{data.title}</p>
                    <p className="price"><ins className="current"><span>¥</span>{data.currentPrice}</ins><del className="old">¥{data.oldPrice}</del></p>
                </div>
                </Link>
            </div>
        )
    }
}

export default DiscountItem;