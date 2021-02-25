import React, { Component } from 'react';

class Text extends Component {
    
    render() {
        console.log("text")
        return (
            <div>
                <h1>Text Example</h1>
                <div className="container">
                <form>
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/><br/>

                    <label for="grade">Favorite Movie:</label><br/>

                    
                    <input type="radio" id="movie" name="movie"value="aquamarine"/>
                    <label for="movie">Aquamarine</label><br/>
                    <input type="radio" id="movie" name="movie" value="eldorado"/>
                    <label for="movie">The Road to El Dorado</label><br/>
                    <input type="radio" id="movie" name="movie"value="mulan"/>
                    <label for="movie">Mulan</label><br/><br/>
                    <input type="submit" value="Submit"/>
                </form>
                </div>
            </div>
        )
    }
}
export default Text;