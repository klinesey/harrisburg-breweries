import React from 'react';
import Breweries from './components/breweries';
import './App.css';

class App extends React.Component {
  state = { breweries:[]};

  
/*   componentDidMount()
  {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=harrisburg`)
    .then(res => res.json())
    .then((data) => {
      this.setState({breweries: data})
    })
    .catch(console.log)
  } */

  render() {
    return (
/*       <div className="container">
        <h1 className="header">Harrisburg Breweries</h1>
        <div className="left">
           <Breweries breweries={this.state.breweries} />
          <Breweries />
        </div>
        <div className="right">
          Details here
        </div>
      </div>
 */
      <Breweries />
    );
  }
}

export default App;
