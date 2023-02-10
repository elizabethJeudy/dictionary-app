import "./App.css";

import Footer from "./components/Footer";
import Search from "./components/Search";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<Search defaultKeyword="book" />
				<Footer />
			</div>
		</div>
	);
}
