import React, { useState } from 'react';
import Button from '../../components/Button';

const Contact = () => {
    const [showContact, setShowContact] = useState(false);

    const handleClick = () => {
        {
            showContact ? setShowContact(false) : setShowContact(true)
        }
    }


    return (
        <div>
            <Button onClick={handleClick} name={Contact} />

            {showContact && (
                <p>This is the contact page.</p>
            )}
        </div>
    )
}

export default Contact;