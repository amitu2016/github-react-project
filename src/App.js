import './App.css';
import React from 'react';
import Search from './components/Search';

class App extends React.Component {

  state = {
    user: null
  }

  fetchUserData = async username => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`)

      if (res.ok) {
        const data = await res.json()

        return this.setState({
          user: data
        })
      }

    } catch (error) {
      console.log(error)
    }
  
  }

  render(){
    return (
    <Search fetchData={this.fetchUserData} />
  );
  }

  
}

export default App;

