import './SideContentBox.css';
import React, { useState } from 'react';

const SideContentBox = (props) => {
    const currentPlayingTitle = 'Mad Max: Fury Road';
    const childrenWithExtraProp = React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            sideBar: child.props
        });
    });

    return (
        <div className='sideBarContentBoxStyle'>
            <div>
                {true && (
                    <p>This is the sideBox Menu</p>
                )}
                {childrenWithExtraProp}
            </div>
        </div>
    )
}

export default SideContentBox;