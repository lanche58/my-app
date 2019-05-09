import React from 'react';

import './style.css';

function CurrentCity(props) {
    return (
        <div className="currentCity">
            <h2 className="title">{props.cityName}</h2>
        </div>
    )
}

// class CurrentCity extends React.Component {
//     render() {
//         return (
//             <div className="currentCity">
//                 <h2 className="title">{this.props.cityName}</h2>
//             </div>
//         )
//     }
// }

export default CurrentCity; 