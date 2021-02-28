import React, {useEffect, useRef, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";
import {Avatar, MenuItem, MenuList, Grow, Popper, ClickAwayListener, Paper, ButtonBase} from "@material-ui/core";
import './Header.css'

const Header = () => {
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [cookies, setCookie] = useCookies(['user']);

    useEffect(() => {
        console.log('hi')
    }, [cookies.user])

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
        setOpen(false);
    };

    const logout = () => {
        fetch(`http://localhost:3000/auth/logout`, {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'user': cookies.user.googleID
            }
        })
            .then(result => {
                setCookie('user', '')
                history.push('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={"header"}>
            <div className={'header-content'}>
                {cookies.user && cookies.user.googleID ?
                    <NavLink exact to="/home" className={'logo'}/>
                    :
                    <NavLink exact to="/" className={'logo'}/>
                }
                {cookies.user && cookies.user.googleID ? (
                    <div>
                        <Avatar className={'user-avatar'}
                                ref={anchorRef} aria-controls={open ? 'menu-list-grow' : undefined}
                                src={cookies.user.avatar}
                                aria-haspopup="true" onClick={handleToggle}>
                        </Avatar>
                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement={'bottom-end'}
                                transition disablePortal>
                            {({TransitionProps, placement}) => (
                                <Grow {...TransitionProps}
                                      style={{transformOrigin: placement === 'bottom-end' ? 'right top' : 'right bottom'}}>
                                    <Paper style={{backgroundColor: '#D8E8CE'}}>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="menu-list-grow">
                                                <MenuItem><NavLink className={'menu-list-text'} to='/saved-Trails'>Saved
                                                    Trails</NavLink></MenuItem>
                                                <MenuItem><NavLink className={'menu-list-text'} to='/my-groups'>My
                                                    Groups</NavLink></MenuItem>
                                                <MenuItem><NavLink className={'menu-list-text'} to='/requests'>Pending
                                                    Requests</NavLink></MenuItem>
                                                <MenuItem>
                                                    <ButtonBase className={'menu-list-text'}
                                                                onClick={logout}>Logout</ButtonBase>
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>)}
                        </Popper>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Header