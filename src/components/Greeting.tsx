interface GreetingProps {
    message: string
}

function Greeting({message}: GreetingProps) {
    console.log(message);

    return <h2>{message}</h2>
}


export default Greeting;