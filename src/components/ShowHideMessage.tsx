import { useState, type ReactNode } from 'react';

interface MessageType {
    message: string;
    children?: ReactNode;
}

function ShowHideMessage({ message, children }: MessageType) {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="show-hide-message">
            <h1>Toggle Visibility</h1>
            {children}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Message" : "Show Message"}
            </button>
            {isVisible && (                
                    <p>{message}</p>                
            )}
        </div>
    );
}

export default ShowHideMessage;