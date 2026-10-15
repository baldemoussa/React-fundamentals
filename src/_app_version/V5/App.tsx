import PostFetcher from "./components/PostFetcher";
import ScrollTriggered from "./components/ScrollTriggered";
import EffectPractice from "./components/EffectPractice";
import MyCustomHooks from "./components/MyCustomHooks";
import useFetch from "./hooks/useFetchData";

function App() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');
    return (
        <div className="App">
            <h1>React Fundamentals</h1>
            <p>Data fetched from API:</p>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <ul>{data.map((user: any) => <li key={user.id}>{user.name}</li>)}</ul>}
            <MyCustomHooks />
            <PostFetcher /> 
            <EffectPractice />
            <h2>Scroll-triggered cards</h2>
            <ScrollTriggered />
        </div>
    );
}

export default App;