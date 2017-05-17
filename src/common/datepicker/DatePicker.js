import React from 'react';
import {Input} from 'react-materialize';

export default class DatePicker extends React.Component {

    componentDidMount() {
        window.$('.datepicker').pickadate({
            selectMonths: true,
            selectYears: 15
        });
    }
    render() {
        return (
            <Input type="date" className="datepicker"
            s={12} label="Informe sua data de nascimento"/>);
    }

}