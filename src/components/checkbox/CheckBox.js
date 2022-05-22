import React from 'react';

export interface CheckBoxProps extends React.HTMLProps<HTMLInputElement>{
    id?: string;
    name?: string;
    value: any;
    register?: any;
    onChange?: any;
}

const CheckBox = (props: CheckBoxProps) => {

    return (
        <div>
            <label>{props.label}</label>
            <input type="checkBox" id={props.id} value={props.value} size={props.size}
                   onChange={props.onChange} />
        </div>
    )
}

export default CheckBox;