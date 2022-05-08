import './MainContentBox.css';

const MainContentBox = (props) => {
    return (
        <div className="mainContentBoxStyle">
            <div>
                {true && (
                    <p>This is the mainBox</p>
                )}
                {props.children}
            </div>
        </div>
    )
}

export default MainContentBox;