import React, { Component } from 'react';
import '../App.css';

class Table extends Component {

    render() {
        return(
            <div>
                <h1>Recipes</h1>

                <table class="table-layout">
                <tr>
                    <th>Recipe Name</th>
                    <th>Link to Recipe</th>
                    <th>My Rating</th>
                </tr>
                <tr>
					<td>Pesto Lasagna Rolls</td>
					<td><a href="https://www.foodnetwork.com/recipes/food-network-kitchen/pesto-lasagna-rolls-3696449">Food Network</a></td>
					<td>10/10</td>
				</tr>
				<tr>
					<td>Pasta with Tomato Sauce and Ricotta</td>
					<td><a href="https://cooking.nytimes.com/recipes/1017651-pasta-with-fresh-tomato-sauce-and-ricotta">NY Times Cooking</a></td>
					<td>9/10</td>
				</tr>
				<tr>
					<td>Slow-Cooker Creamy Chicken</td>
					<td><a href="https://www.tablespoon.com/recipes/slow-cooker-cream-cheese-chicken/436ac4b4-550d-4338-98d7-57a7064151bf">Tablespoon</a></td>
					<td>4/10</td>
				</tr>
                </table>
            </div>
        )
    }
}
export default Table;