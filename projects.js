import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab :0 };
    }

    toogleCategories() {

        if (this.state.activeTab === 0){
            return(
                <div  className="projects-grid">
                     {/*Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff',height: '176px', background: 'url(https://novemberfive.co/images/2018/04/26/010-010-header-1.png) center/cover'}}>React Project #1</CardTitle>
                    <CardText>
                        A short description of project. A short description of project.A short description of project.
                        
                        
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://google.com">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                     {/*Project 1*/}
                     <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff',height: '176px', background: 'url(https://novemberfive.co/images/2018/04/26/010-010-header-1.png) center/cover'}}>React Project #1</CardTitle>
                    <CardText>
                        A short description of project. A short description of project.A short description of project.
                        
                        
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://google.com">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 {/*Project 1*/}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff',height: '176px', background: 'url(https://novemberfive.co/images/2018/04/26/010-010-header-1.png) center/cover'}}>React Project #1</CardTitle>
                    <CardText>
                        A short description of project. A short description of project.A short description of project.
                        
                        
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://google.com">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                 {/*Project 1*/}
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff',height: '176px', background: 'url(https://novemberfive.co/images/2018/04/26/010-010-header-1.png) center/cover'}}>React Project #1</CardTitle>
                    <CardText>
                        A short description of project. A short description of project.A short description of project.
                        
                        
                    </CardText>
                    <CardActions border>
                        <Button colored href="https://google.com">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

               
                </div>



               
            )
        }

        else if (this.state.activeTab === 1){
            return(
            <div><h1>This is Angular</h1></div>
            )
        }
    }
    
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                </Tabs>

               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                            {this.toogleCategories()}
                            </div>
                        </Cell>
                    </Grid>
           
            </div>
        )
    }
}


export default Projects;