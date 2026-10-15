import ContentSwitcher from "./components/Contentwitcher";
import ShowHideMessage from "./components/ShowHideMessage";

function App() {
    return (
        <div>
            <ShowHideMessage message="Secret message revealed!">
                    <div>Confidential, click to reveal</div>
            </ShowHideMessage>
            <ShowHideMessage message="Bingo the secret message is revealed!"/>
            <ContentSwitcher />
        </div>
    );
}

export default App;