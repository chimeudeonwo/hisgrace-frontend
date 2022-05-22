import React, { useState, useEffect } from 'react';
import CheckBox from '../../components/checkbox/CheckBox'
import Button from '../../components/button/Button'

const Contact = () => {
    const [showContact, setShowContact] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        isCheckedEvent.bind(this);
    })

    const handleClick = () => {
        showContact ? setShowContact(false) : setShowContact(true)
    }

    const isCheckedEvent = (e) => {
        const target = e.target
        console.log('target.checked', target.checked);
        if(target.checked){
            console.log('target is checked');
            setIsChecked(target.checked)
            return
        }
        else console.log('checkbox not checked');
        setIsChecked(target.checked)
    }

    return (
        <div>
            <Button onClick={handleClick} name={Contact} />

            {showContact && (
                <p>This is the contact page.</p>
            )}
            <CheckBox label={"this is the contact checkbox"} value={isChecked} onChange={isCheckedEvent}/>
        </div>
    )
}

export default Contact;