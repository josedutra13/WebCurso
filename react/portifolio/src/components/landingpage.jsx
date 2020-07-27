import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://scontent.fbsb19-1.fna.fbcdn.net/v/t1.0-9/86192171_2511147349008128_5873437587678429184_o.jpg?_nc_cat=107&_nc_sid=84a396&_nc_eui2=AeFNIJA-eVDbcwiyw2j1dvrNUamAnrwRludRqYCevBGW52EeeUuSt6gzJAv0vMs189h6xKI5IAA3Dxk62zt3j9JK&_nc_ohc=-PPwVGJWl6cAX-l5c41&_nc_ht=scontent.fbsb19-1.fna&oh=abc6081d3e1e20b7e3a873a7ce9ba7d8&oe=5F322367"
                            alt="avatar"
                            className="avatar-img" />
                        <div className="banner-text">
                            <h1>Desenvolvedor Web</h1>
                            <hr />

                        <p>HTML/CSS | Bootstrap | React | Angular 9 | JavaScript | Vue | MySQL | </p>
                        <div className="social-links">

                             {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/jos%C3%A9-henrique-dutra-5719281a0/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin"  aria-hidden="true"></i>
                            </a>
                            
                            {/* Instagram */}
                            <a href="https://www.instagram.com/lilze137/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram"  aria-hidden="true"></i>
                            </a>

                            {/* Git */}
                            <a href="https://github.com/Lilzizo" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github"  aria-hidden="true"></i>
                            </a>
                        </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage