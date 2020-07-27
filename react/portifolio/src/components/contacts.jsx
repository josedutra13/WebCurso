import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

class Contacts extends Component {
    render() {
        return (
            <div className="contact-body" >
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>José Henrique</h2>
                        <img src="https://i.pinimg.com/originals/b5/16/30/b51630e774ccf7a604a252da4477c5f8.png"
                            alt="avatar" style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Um pouco sobre meu trabalho</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Entre em contato</h2>
                        <hr />
  
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px' , fontFamily: 'Anton' }} > 
                                <i className="fa fa-phone-square" aria-hidden="true"/>(61) 99324-0442
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px' , fontFamily: 'Anton' }} > 
                                <i className="fa fa-envelope" aria-hidden="true"/>(61) 99324-0442
                                </ListItemContent>
                            </ListItem>
                            
                           
                        </List>
                        </div>

                       

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contacts