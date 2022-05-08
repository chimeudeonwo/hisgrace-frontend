import MainContentBox from '../mainContentBox/MainContentBox';
import SideContentBox from '../sideContentBox/SideContentBox';
import './ContentComponent.css';
import React, { useState } from 'react';

const ContentComponent = (props) => {

    const childrenWithExtraProp = React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            sideBar: child.props,
        });
    });

    return (
        <div className='contentComponentStyle'>
            <div>
                <MainContentBox />
            </div>
            <div>
                <SideContentBox>
                    {props.children}
                    {/*childrenWithExtraProp*/}
                </SideContentBox>

            </div>
        </div>
    )
}

export default ContentComponent;