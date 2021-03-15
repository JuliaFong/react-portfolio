import React, { Component } from 'react'

export default class AboutMe extends Component {
    render() {
        let projectPg = this.props.projectPg

        return (
            <section id="aboutme">
                <div className="row">
                    <div className="col">
                        <img className="" src="" alt="" />
                    </div>
                    <h1>About Me</h1>
                    <p> { projectPg.aboutme } </p>
                </div>
            </section>
        )
    }
}