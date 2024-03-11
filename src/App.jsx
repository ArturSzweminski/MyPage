import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

function App() {
	return (
		<>
			<Header />
			<Main />
			<Contact/>
			<Footer />
		</>
	);
}

export default App;
