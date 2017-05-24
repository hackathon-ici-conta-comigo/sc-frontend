import React from 'react';
import PropTypes from 'prop-types';
import FormAutoCompleteSelect from './FormAutoCompleteSelect';
import CountryDataSource from '../country/CountryDataSource';

import {mount} from 'enzyme';

describe('<FormAutoCompleteSelect />', () => {

    it('shouldThrowErrorWhenWrongLabelAttributeProvided', () => {
        try {
            mount(<FormAutoCompleteSelect
                options={new CountryDataSource().states}
                labelAttribute={"thisdoesntexists"}/>);
        } catch (error) {
            expect(error.message).toBe("FormAutoCompleteSelect: Mapped label attribute not found in provided options");
        }
    });

    it('shouldThrowErrorWhenNoOptionsProvided', () => {
        let errMessage = '';
        try {
            mount(<FormAutoCompleteSelect labelAttribute={"thisdoesntexists"}/>);
        } catch (error) {
            errMessage = error.message;
        }
        expect(errMessage).toBe("FormAutoCompleteSelect: No options provided");
    });
});