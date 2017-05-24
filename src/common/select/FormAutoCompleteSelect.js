import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

export default class FormAutoCompleteSelect extends React.Component {
    componentWillMount() {
        if (!this.props.options) {
            throw new Error("FormAutoCompleteSelect: No options provided");
        }
        this.setState({
            options: this.parseOptionsIfLabelAttributeExists()
        });
    }

    parseOptionsIfLabelAttributeExists() {
        let options = [];
        const labelAttribute = this.props.labelAttribute;
        if (this.props.options && labelAttribute) {
            this
                .props
                .options
                .forEach((originalOption, index) => {
                    if (!originalOption[labelAttribute]) 
                        throw new Error("FormAutoCompleteSelect: Mapped label attribute not found in provided options");
                    
                    options.push({value: index, label: originalOption[labelAttribute]});
                });
        }
        return options;
    }

    render() {
        return (<Select {...this.props} options={this.state.options}/>)
    }

}

FormAutoCompleteSelect.propTypes = {
    labelAttribute: PropTypes.string
}
