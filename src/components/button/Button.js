import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
    onClick: any;
    name: string;
    id?: string;
}

const Button = (props: ButtonProps) => {
    return (
        <button onClick={props.onClick}>{props.name}</button>
    )
}

export default Button;