import React from 'react'
import ChronoService from '../../services/chrono.service'
import './Chrono.css'

class Chrono extends React.Component {
    constructor(props){
        super(props)
        this.state = { live: 0};
        this.timer = null;
        this.chronoService = new ChronoService()
    }

    // componentDidMount() {
    //     this.timer = window.setInterval(this.updateChrono.bind(this), 1000)
    // }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    updateChrono() {
        this.setState({live: this.state.live + 1})
    }

    reset(e) {
        this.setState({live: 0})
    }

    start(e) {
        this.timer = window.setInterval(this.updateChrono.bind(this), 1000)
    }

    stop(e) {
        window.clearInterval(this.timer)
        this.timer = null;
    }

    render() {
        return <div className="Chrono">
            <div>{this.chronoService.toHHMMSS(this.state.live)}</div>
            <button onClick={this.start.bind(this)} className="btn btn-light mx-5">Start</button>
            <button onClick={this.stop.bind(this)} className="btn btn-light mx-5">Stop</button>
            <button onClick={this.reset.bind(this)} className="btn btn-light mx-5">Reset</button>
        </div>
    }
}

export default Chrono