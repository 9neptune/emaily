import React, {Component} from 'react'
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

export class SurveyForm extends Component{
    render(){
        return(
            <div>
                <form >
                <input />
                <button> Submit </button>
                {/* <Field type="text" name="SurveyTitle" component="input" /> */}
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'SurveyForm'
})(SurveyForm);