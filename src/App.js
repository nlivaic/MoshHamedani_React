import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	constructor() {
		super();
		console.log("App - Ctor");
	}

	componentDidMount() {
		console.log("App - Mounted");
	}

	handleDelete = counterId => {
		const { counters } = this.state;
		let indexToDelete = counters.findIndex(c => c.id === counterId);
		counters.splice(indexToDelete, 1);
		console.log(counters);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			return { id: c.id, value: 0 };
		});
		this.setState({ counters });
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];
		let counterIndex = counters.indexOf(counter);
		counters[counterIndex] = { ...counter };
		counters[counterIndex].value++;
		this.setState({ counters });
	};

	render() {
		console.log("App - Rendered");
		return (
			<React.Fragment>
				<NavBar
					totalCounters={this.state.counters.filter(c => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onDelete={this.handleDelete}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
