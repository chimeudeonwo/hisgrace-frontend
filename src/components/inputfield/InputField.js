import React from 'react'

interface InputProps extends React.HTMLProps<HTMLInputElement>{
    onClick: any;
    name: string;
    id?: string;
}

const InputField = (props: InputProps) => {
    return (
        <input name={props.name} value={props.value} type="text"/>
    )
}

export default InputField;