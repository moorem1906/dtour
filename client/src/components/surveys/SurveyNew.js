//SurveyNew shows SurveyForm and SurveyForm Review

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import sendGrid from 'sendgrid';

class SurveyNew extends Component {
    // //making use of state
    // constructor(props) {
    //     sendGrid(props);
    //     this.state = { new: true };
    // }
    state = { showFormReview: false };
    renderContent() {
        if (this.state.showFormReview) {
            return ( 
            <SurveyFormReview 
            onCancel={() => this.setState({ showFormReview: false})}
            />
            );
        }
            return  (
                 <SurveyForm
            onSurveySubmit={() => this.setState({ showFormReview: true})} 
                />
        );

    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form:'surveyForm'
})(SurveyNew);