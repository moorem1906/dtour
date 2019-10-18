import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import '../css/destination.css'
import {bookTrip} from "../actions";

import { searchDestinations } from '../actions'
import {constants} from "../constants";

export class Trip extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        console.log('trip_destinations', this.props.trip_destinations);

        var trips_main = null;

        if (this.props.trip_destinations.length === 0) {
            trips_main = <span>Add destinations to your trip</span>;
        }
        else {
            trips_main =
                <div>
                <table className="trip-destinations-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.trip_destinations.map((destination, index) => (
                        <tr key={destination.id}>
                            <td>{destination.name}</td>
                            <td>{destination.price}</td>
                            <td>
                                <button onClick={() => {
                                    this.props.dispatch({
                                        type: constants.REMOVE_TRIP_DESTINATION,
                                        payload: {
                                            index: index,
                                            destination: destination
                                        }
                                    })
                                }
                                }>Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td style={{textAlight: 'right'}}><b>Total</b></td>
                        <td>{this.props.trip_total}</td>
                        <td/>
                    </tr>
                    </tbody>
                </table>
                    <div style={{textAlign: 'center', marginTop: '15px'}}>
                        <button onClick={() => {
                            let params = {
                                user_id: 1,
                                destinations: this.props.trip_destinations,
                                total_price: this.props.trip_total
                            }
                            this.props.dispatch(bookTrip(params))
                        }}>Book It</button>
                    </div>
                </div>
        }

        return (

            <div style={{textAlign: 'center'}}>
                <h4>Trip</h4>
                {trips_main}
            </div>


        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        destinations: state.destinations,
        trip_destinations: state.trip_destinations,
        trip_total: state.trip_total

    };
};
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Trip)
