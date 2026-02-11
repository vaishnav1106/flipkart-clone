import { React } from 'react';
import CheckBox from '../CheckBox';

function OffersFilterOptions() {
    return (
        <>
            <div>
                <CheckBox name="Special Price"/>
                <CheckBox name="Buy More, Save More"/>
            </div>
        </>
    );
}

export default OffersFilterOptions;