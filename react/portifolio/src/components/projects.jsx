import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu } from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 }
    }
    toogleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Cadastro de Usuario */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.dankicode.com/wp-content/uploads/2019/07/o-que-e%CC%81-react-js-650x350.png) center / cover' }}>Cadastro de Usuario</CardTitle>
                        <CardText>
                            Cadastro de usuario utilizando o framework react, desenvolvido a partir de aulas da Udemy
                 </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Lilzizo/WebCurso/tree/master/react/crud" colored target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Calculadora Mac */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://blog.dankicode.com/wp-content/uploads/2019/07/o-que-e%CC%81-react-js-650x350.png) center / cover' }}>Calculadora</CardTitle>
                        <CardText>
                            Calculadora baseada no app de calculadora do Mac, desenvolvido a partir de aulas da Udemy
             </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Lilzizo/WebCurso/tree/master/react/crud" colored target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Galeria */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://becode.com.br/wp-content/uploads/2017/12/Bootstrap-1.png) center / cover' }}>Projeto Galeria</CardTitle>
                        <CardText>
                            Galeria desenvolvida com bootstrap
             </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Lilzizo/WebCurso/tree/master/react/crud" colored target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Calculadora em VueJS */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://sergeydotnet.com/content/images/size/w2000/2019/02/form-with-vuejs.jpg) center / cover' }}>Projeto Galeria</CardTitle>
                        <CardText>
                            Calculadora do mac desenvolvida em VueJS.
             </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Lilzizo/WebCurso/tree/master/react/crud" colored target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* MontyHall */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://sergeydotnet.com/content/images/size/w2000/2019/02/form-with-vuejs.jpg) center / cover' }}>Projeto Galeria</CardTitle>
                        <CardText>
                            Desafio MontyHall
             </CardText>
                        <CardActions border>
                            <Button href="https://github.com/Lilzizo/WebCurso/tree/master/react/crud" colored target="_blank">GitHub</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div><h1>Angular</h1></div>
            )
        }
        else if (this.state.activeTab === 4) {
            return (
                <div><h1>WordPress</h1></div>
            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Bootstrap</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>Angular</Tab>
                    <Tab>Wordpress</Tab>
                </Tabs>

                <section >
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toogleCategories()}</div>
                        </Cell>
                    </Grid>

                </section>
            </div>
        )
    }
}

export default Projects