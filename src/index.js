import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        }
        window.navigator.geolocation.getCurrentPosition(
            latitute => {
                this.setState({
                    lat: latitute.coords.latitude
                })
            },
            err => {
                this.setState({
                    errorMessage: err.message
                })
            }
        );
    }

    render() {

        if (this.state.lat && !this.state.errorMessage) {
            return (
                <div>
                    Hi Bro
                    my latituet is : {this.state.lat}
                    <br />
                </div>
            )
        } else if (! this.state.lat && this.state.errorMessage){
            return (
                <div>
                    Hi Bro
                    error Message : {this.state.errorMessage}
                    <br />
                </div>
            )

        }
        return <div> Loading !!! </div>
    }

}

export default App;
ReactDOM.render(<App />, document.getElementById('root'));

