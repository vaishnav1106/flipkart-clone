import CheckBox from '../CheckBox.jsx';
import { discountFilterValueContext } from '../../../../../App.jsx';
import { useContext } from 'react';

function DiscountFilterOptions() {

    const {discountFilterInputValue, setDiscountFilterInputValue} = useContext(discountFilterValueContext)

    function discountFilter(e) {
        let discountValue;
        if (e.currentTarget.checked) {
            discountValue = Number(e.currentTarget.value);
            setDiscountFilterInputValue(discountValue)
        }
    }

    

    return (
        <>
            <div>
                <CheckBox name="70% or more" value={70} onChange={discountFilter}/>
                <CheckBox name="60% or more" value={60} onChange={discountFilter}/>
                <CheckBox name="50% or more" value={50} onChange={discountFilter}/>
                <CheckBox name="40% or more" value={40} onChange={discountFilter}/>
                <CheckBox name="30% or more" value={30} onChange={discountFilter}/>
            </div>
        </>
    );
}

export default DiscountFilterOptions;