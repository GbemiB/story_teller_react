
const footerContainer = {
    textAlign: "center",
    marginTop: "3rem"
}

const footerText = {
    marginTop: "1rem"
}

function StoryTellerFooter() {
    return (
        <div>
            <footer style={ footerContainer }>
                <hr/>
               <p style={ footerText }>  @2022 Story Teller International. All rights reserved | legal |contact</p>
            </footer>
        </div>

    )
}
export default StoryTellerFooter;

