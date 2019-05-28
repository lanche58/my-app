import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

class LikeItem extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div className="like-item clearfix">
                <Link to="/">
                    <div className="pic">
                        <img src={data.img} alt={data.title}/>
                        { data.noAppointment ? <div className="tag">免预约</div> : "" }
                    </div>
                    <div className="desc">
                        <p className="title">{data.title}</p>
                        <p className="text">{data.text}</p>
                        <div className="clearfix wrap">
                            <p className="sales-volume">已售{data.num}</p>
                            <p className="price">
                                <ins className="current"><span>¥</span>&nbsp;{data.currentPrice}</ins>&nbsp;
                                <del className="old">¥{data.oldPrice}</del>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default LikeItem;