import { useState, type ReactNode } from "react";
import reactLogo from '../assets/react.svg';

type CT = "text" | "image" | "video"

function ContentSwitcher() {

    const [contentType, setContentType] = useState<CT>("text");

    let contentElement: ReactNode;

    if (contentType === "text") {
        contentElement = <p>This is some text content.</p>;
    } else if (contentType === "image") {
        contentElement = <img src={reactLogo} alt="Placeholder" />;
    } else {
        contentElement = <p>Imagine a video player here.</p>;
    }

    return (
        <div>
            <div>
                <button onClick={() => setContentType("text")}>Show Text</button>
                <button onClick={() => setContentType("image")}>Show Image</button>
                <button onClick={() => setContentType("video")}>Show Video</button>
            </div>
            <div>{contentElement}</div>
        </div>
    )
}

export default ContentSwitcher