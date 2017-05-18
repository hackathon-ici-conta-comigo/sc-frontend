import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import idgen from 'react-materialize/lib/idgen';

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.renderFormat = 'dd !de mmmm !de yyyy';
        this.state = {
            value: this.props.defaultValue,
            renderedValue: this.props.defaultValue
        }
    }
    componentDidMount() {
        let diaSemana = [ 'Domingo', 'Segunda-Feira', 'Terca-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado' ];
        let mesAno = [ 'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro' , 'Dezembro' ];
        const component = this;

        window.$(this.refs.datepicker).pickadate({
            monthsFull: mesAno,
            weekdaysFull: diaSemana,
            monthsShort: [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez' ],
            weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
            weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
            selectMonths: true,
            selectYears: true,
            clear: false,
            hiddenName: true,
            format: this.renderFormat,
            today: "Hoje",
            close: "Fechar",
            onStart:function(){
                this.set( 'select', component.state.value);
            },
            onSet: function(e) {   
                component.onChange({target: {value: new Date(e.select), renderedValue: this.get(this.renderFormat)}});
                this.close();
            }, 
            onClose(e) {
                window.$(document.activeElement).blur();
            }
        });
    }

    renderIcon() {
        const {children} = this.props;
        let icon = null;
        if (React.Children.count(children) === 1) {
            icon = React
                .Children
                .only(children);
        }
        return icon === null
            ? null
            : React.cloneElement(icon, {className: 'prefix'});
    }

    renderLabelIfExists(id) {
        if (this.props.label) {
            return <label htmlFor={id}>{this.props.label}</label>
        }
    }

    appendSizeClassNames(classNames) {
         if(this.props.s) {
            classNames.push(['s' + this.props.s]);
        } 

        if(this.props.l) {
            classNames.push(['l' + this.props.l]);
        } 

        if(this.props.m) {
            classNames.push(['m' + this.props.m]);
        } 
    }

    triggerComponentOnChange(event) {
        delete event.target.renderedValue;
        event.target.name = this.props.name;
        this.props.onChange(event);
    }

    onChange(event) {
         this.setState({value: event.target.value, renderedValue: event.target.renderedValue});
         this.triggerComponentOnChange(event);    
    }

    render() {       
        let classNames = ['col', 'input-field'];
        this.appendSizeClassNames(classNames);

        const _id = 'datepicker-' + idgen();

        return (
            <div className={cx(classNames)}>
                {this.renderIcon()}
                <input type="text" id={_id} ref="datepicker" value={this.state.renderedValue} onChange={(event) => this.onChange(event)}/> 
                {this.renderLabelIfExists(_id)}
            </div>
        )
    }
}

DatePicker.propTypes = {
    s: PropTypes.number,
    m: PropTypes.number,
    l: PropTypes.number,
    className: PropTypes.string,
    label: PropTypes.node,
    error: PropTypes.string,
    success: PropTypes.string,
    defaultValue: PropTypes.instanceOf(Date),
    placeholder: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string,
    validate: PropTypes.bool,
    multiple: PropTypes.bool,
    browserDefault: PropTypes.bool,
    onLabel: PropTypes.string,
    offLabel: PropTypes.string,
    onChange: PropTypes.func
};