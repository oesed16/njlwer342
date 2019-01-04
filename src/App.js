import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      alltasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"]
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.setState({
        alltasks: this.state.alltasks.concat(this.state.task),
        task: "",
      });
    }
  }

  handleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.alltasks.map(alltask =>
              <li key={alltask}>{alltask}</li>
            )}
          </ul>
          <div>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.task}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
