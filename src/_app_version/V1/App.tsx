import Greeting from "./components/Greeting";
import Header from "./components/Header";
import { WelcomeMessage, SayHello } from "./components/WelcomeMessage";

function App() {
  return (
    <div>
      <Header />
      <Greeting />
      <WelcomeMessage />
      <SayHello />
    </div>
  );
}

export default App;