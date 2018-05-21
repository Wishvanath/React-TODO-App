import React from 'react';
import '../App.css';
class Header extends React.Component{
    render(){
        return(
            <div className ="todo-header">
                <h2>React TODO Application</h2>
                <hr className = "header_line"/>
            </div>
        );
    }
}
export default Header;