import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import '../css/destination.css'

import { searchDestinations } from '../actions'
import {constants} from "../constants";

export class DestinationSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: 38.9072,
            longitude: 77.0369,
            radius: 0.005,
            price_range: [0,200]
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.moneyText = this.moneyText.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handlePriceChange(e, newValue) {
        this.setState({
            price_range: newValue
        })

    }

    handleFormChange(id, e) {
        switch (id) {
            case 'latitude':
                this.setState({
                    latitude: e
                });
                break;
            case 'longitude':
                this.setState({
                    longitude: e
                });
                break;
            case 'radius':
                this.setState({
                    radius: e
                });
                break;
        }
    }

    moneyText(value) {
        return `\$${value}`;
    }

    render() {
        console.log('destinations', this.props.destinations);

        var destinations = null;

        if (this.props.destinations.length === 0) {
            destinations = <span>No destinations found.</span>
        }
        else {
            destinations = <span style={{overflow: 'auto', display: 'inline-block', height: '255px', width: '100%'}}>
                <table className="destinations-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th />
                </tr>
                </thead>
                <tbody>
                {this.props.destinations.map((destination) => (
                    <tr key={destination.id}>
                        <td>{destination.name}</td>
                        <td>{destination.price}</td>
                        <td><button onClick={() => {
                            this.props.dispatch({
                                type: constants.ADD_TRIP_DESTINATION,
                                payload: destination
                            })
                        }}>Add</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
                </span>
        }

        return (

            <div style={{textAlign: 'center', overflow: 'auto'}}>
                <h5>Destinations</h5>
                {destinations}
            </div>


        );
    }
};

const mapStateToProps = (state, props) => {
    return {
        destinations: state.destinations,
        trip_destinations: state.trip_destinations
    };
};
const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(DestinationSearch)
