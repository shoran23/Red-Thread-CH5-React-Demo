import React from 'react'

class SettingsFetch extends React.Component {
    state = {
        breweries: []
    }
    getTest = () => {
        fetch("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=New%20York", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b23d5fc7acmsh72f6c5cdd0d0545p1c4890jsndc70e71ceed2",
                "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            this.setState({breweries: resJson})
        })
        .catch(err => {
            console.error(err);
        });
    }
    clearTest = () => {
        this.setState({breweries: []})
    }
    render() {
        console.log('breweries state = ',this.state.breweries)
        return (
            <div id='settings-fetch'>
                <button onClick={this.getTest}>Fetch</button>
                <button onClick={this.clearTest}>Clear</button>
                <ul>
                    {this.state.breweries.map(brewery => (
                        <li key={brewery.name}>{brewery.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default SettingsFetch