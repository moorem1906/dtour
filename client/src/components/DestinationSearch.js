import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import '../css/destination.css'

import { searchDestinations } from '../actions'

export class DestinationSearch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            longitude: 33.660297,
            latitude: -117.9992265,
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
        return (
            <div style={{textAlign: 'center'}}>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.dispatch(searchDestinations({
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        radius: this.state.radius,
                        price_range: this.state.price_range
                    }))
                }

                }>
                    <label>Longitude: </label><input className="destination-distance" type="number" min="-180" max="180" step="0.0000001" name="latitude" id="latitude" value={this.state.latitude} onChange={ e => { this.handleFormChange('latitude', e.target.value)}}/>
                    <label>Latitude: </label><input type="number" step="0.0000001" min="-90" max="90"  name="latitude" id="longitude" value={this.state.longitude} onChange={ e => { this.handleFormChange('longitude', e.target.value)}}/>
                    <label>Radius: </label><input type="number" min="0.000" step="0.001" name="radius" id="radius" value={this.state.radius} onChange={ e => { this.handleFormChange('radius', e.target.value)}}/>

                    <hr />

                    <div className="pricesDiv">
                        <Typography id="range-slider" gutterBottom>
                            Price Range
                        </Typography>
                        <Slider
                            value={this.state.price_range}
                            onChange={this.handlePriceChange}
                            valueLabelDisplay="auto"
                            aria-labelledby="range-slider"
                            getAriaValueText={this.moneyText}
                        />
                    </div>
                    <input
                    type="submit"
                    className="btn-primary yay"
                    value="Search Destinations" />
                </form>
            </div>


        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    dispatch: dispatch
});

export default connect(mapDispatchToProps)(DestinationSearch)
