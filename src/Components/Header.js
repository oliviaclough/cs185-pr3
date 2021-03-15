import "./Zoom.css"

const Header = ({showFullSchedule, setShowFullSchedule, setShowUpdate}) => {

    const onClick = () => {
        setShowFullSchedule()
        setShowUpdate()
    }
    return (
        <header className="header">
            <h1>
                Zoom Meeting Manager
            </h1>
            <button className="btn" onClick={onClick}>
            {showFullSchedule ? "Create Meeting" : "Full Schedule"}
            </button>
        </header>
    )
}
export default Header