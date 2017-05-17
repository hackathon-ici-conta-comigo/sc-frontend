import React from 'react';
import {Input} from 'react-materialize';

export default class DatePicker extends React.Component {

    componentDidMount() {
        let diaSemana = [ 'Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado' ];
        let mesAno = [ 'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro' , 'Dezembro' ];
       
        window.$('.datepicker').pickadate({
                monthsFull: mesAno,
                weekdaysFull: diaSemana,
                monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
                weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
                weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
                selectMonths: true,
                selectYears: true,
                clear: false,
                format: 'dd !de mmmm !de yyyy',
                today: "Hoje",
                close: "Fechar",
                closeOnSelect: true,
                onSet: function( arg ){
                    if ( 'select' in arg ){ 
                        this.close();
                    }
                }
        });
    }

    render() {
        return (
            <Input type="date" className="datepicker" s={12} label="Informe sua data de nascimento" ref={input => this.node = input}>
                {this.props.children}
            </Input>);
    }

}