
const headerTitle = {
    lineHeight: "1.5em",
    fontWeight: "100",
    padding: "1rem",
    color:  "#3fffd2",
    textTransform: "uppercase",
    textAlign: "center",
}

function StoryTellerHeader() {
    return (
        <div className="header-container">
            <header >
                <h1 style={ headerTitle }>INTENATIONAL STORY TELLERS</h1>
            </header>
        </div>

    )
}
export default StoryTellerHeader;

