import { useEffect, useState } from "react"



function EffectPractice() {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    useEffect(() => {
        // ==== Sets the page title
        document.title = "Effect Practice"

        // === Add an event listener on the window size
        const handleResize = () => {
            console.log('Height', window.innerHeight);
            console.log('Width', window.innerWidth);
            setWindowSize(({
                width: window.innerWidth,
                height: window.innerHeight
            }));

        }
        window.addEventListener('resize', handleResize);

        // ===== Event listener for keydown
        const handleKeyDown = (e) => console.log(e.key);
        document.addEventListener("keydown", handleKeyDown)


        // ===== Event listener for mousemove
        const timeoutId = setTimeout(() => {
           document.addEventListener('mousemove', (e) => {
            console.log('move');
            console.log(e.clientY)

            if (e.clientY <= 0) {
                alert("Please don't go!")
            }
        })
        }, 5000);

        // ==== Cleanup function ================
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("mousemove", () => {});
            clearTimeout(timeoutId);
        }
    }, []);

    return (
        <div>
            <h1>Effect Practice</h1>
            <h3>Height: {windowSize.height}</h3>
            <h3>Width: {windowSize.width}</h3>
        </div>
    )
}

export default EffectPractice