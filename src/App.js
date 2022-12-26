import './App.css';
import React from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';

class App extends React.Component {

  state = {
    user: null,
    userDataError: null,
    reposError: null,
    repos: [],
    loading: false
  };

  fetchUserData = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`)

    if (res.ok) {
      const data = await res.json()
      return { data }
    }
     const error = (await res.json()).message;
     return {error}
  }

  fetchRepos = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}/repos?page=1`)

    if (res.ok) {
      const data = await res.json()
      return { data }
    }
     const error = (await res.json()).message;
     return {error}
  }


  fetchData = async username => {

    const [user, repos] = await Promise.all([
      this.fetchUserData(username),
      this.fetchRepos(username)
    ])
    

    if (user.data !== undefined && repos.data !== undefined) {
     return this.setState({
        user: user.data,
        repos: repos.data,
        loading: false
      })
    }

    this.setState({
      loading: true
    }, async () => {

       try {
     
      this.setState({
        userDataError: user.error,
        reposError: repos.error,
        loading: false
      })

    } catch (err) {
        this.setState({
        error: "There was some error"
      })
    }

    })  
  }

  render(){
    const { userDataError, reposError , loading, user} = this.state;
    return (

      <div>
           <Search fetchData={this.fetchData} />
          <div className='container'>
           <div className='text-center pt-5'> 
             {loading && <p>Loading User Data......</p>}
             {userDataError && <p className='text-danger'>{userDataError}</p>}
             <div/>
             {!loading && !userDataError && user && <UserCard user={user}/>}

             {reposError && <p className='text-danger'>{reposError}</p>}
           </div>
           </div>
      </div>

   
  );
  }

  
}

export default App;

