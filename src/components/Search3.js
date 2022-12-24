import React from "react";

class Search3 extends React.Component{

    handleKeyDown = e => {

        if (e.keyCode === 13) {
            
        const value = e.target.value

        alert(`The value is ${value}`)
        }

    }

    render(){

        return <div>
            <input type="text" name="username" onKeyDown={this.handleKeyDown} 
          placeholder="Enter Username" />
         </div>
        
    }
}

export default Search3