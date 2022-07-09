
const headerStyle = {
    padding: "0",
    lineHeight: "1.5em",
    fontSize: "1rem",
    fontWeight: "600",
    marginBottom: "2rem",
    marginTop: "2rem",
    lineHeight: "1em",
    color: "#d87093",
    textTransform: "uppercase",
    textAlign: "center",
    backgroundColor: '#FFFFFF'
}

const headerLine = {
    color: '#000000',
    backgroundColor: '#000000',
    height: 0.5,
    borderColor: '#000000'
}

function StoryTellerHeader() {
    return (
        <div>
            <header style={ headerStyle }>
                <h1>THE STORY TELLERS</h1>
            </header>
            <hr style={ headerLine } />
        </div>

    )
}
export default StoryTellerHeader;

