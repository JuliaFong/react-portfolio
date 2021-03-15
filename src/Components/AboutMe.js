import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        let project = this.props.project

        return (
            <section id="aboutme">
                <div className="row">
                    <h1>About Me</h1>
                </div>
            </section>
        )
    }
}