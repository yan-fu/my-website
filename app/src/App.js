import React from 'react';
import { NavLink, Route } from 'react-router-dom'

// NAVIGATION
import Todo from './Todo'
import Shopping from './Shopping'
import Home from './Home'

// ICON
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CheckIcon from '@material-ui/icons/Check';
import HomeIcon from '@material-ui/icons/Home';

// MATERIAL UI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const use_styles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
}))

const App = (props) => {
    const classes = use_styles()
    const navi_name = ["Home", "TODO", "Shopping"]
    const navi_icon = [
        <HomeIcon/>,
        <CheckIcon/>,
        <ShoppingCartIcon/>
    ]
    return (
        <div>
            <div className={classes.toolbar}>
                <List>
                    {navi_name.map((page_name, index) => (
                        <ListItem
                            button
                            key={page_name}
                            component={NavLink}
                            to={page_name.toLowerCase() === 'home' ? '/' : '/' + page_name.toLowerCase()}
                        >
                            <ListItemIcon>
                                {navi_icon[index]}
                            </ListItemIcon>
                            <ListItemText primary={page_name} />
                        </ListItem>
                    ))}
                    {/*<ListItem button key={navi_name[0]} component={NavLink} to='/home'>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <CheckIcon />*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary={navi_name[0]} />*/}
                    {/*</ListItem>*/}
                    {/*<ListItem button key={navi_name[0]} component={NavLink} to='/todo'>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <CheckIcon />*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary={navi_name[0]} />*/}
                    {/*</ListItem>*/}
                    {/*<ListItem button key={navi_name[1]} component={NavLink} to='/shopping'>*/}
                    {/*    <ListItemIcon>*/}
                    {/*        <ShoppingCartIcon />*/}
                    {/*    </ListItemIcon>*/}
                    {/*    <ListItemText primary={navi_name[1]} />*/}
                    {/*</ListItem>*/}
                </List>
            </div>
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/todo' component={Todo}/>
                <Route path='/shopping' component={Shopping}/>
            </div>
        </div>
    );
}

export default App;