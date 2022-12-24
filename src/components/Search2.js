import React from "react";

class Search2 extends React.Component{
    inputRef = React.createRef()

    handleClick = () => {
        const value = this.inputRef.current.value

        alert(`The value of input field is ${value}`)
    }

    render(){

        return <div>
            <input ref={this.inputRef} type="text" name="username" 
          placeholder="Enter Username" />
          <button onClick={this.handleClick}>Click Me</button>
        </div>
        
    }
}

export default Search2