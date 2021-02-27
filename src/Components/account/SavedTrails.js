import React, {useState, useEffect} from "react";
import './SavedTrails.css'
import ListItem from "../shared/ListItem";
import Header from "../shared/Header";

const id = '6002d4fe60075a2e14bfa282';
const MyTrails = (props) => {
    const [trailList, setTrailList] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3000/api/users/${id}`, {
            credentials: 'include',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(result => {
                console.log(result.savedTrails)
                setUser(result)
                result.savedTrails.forEach((trail) => {

                    fetch(`http://localhost:3000/api/trails/${trail}`, {
                        credentials: 'include',
                        headers: {'Content-Type': 'application/json'}
                    })
                        .then(response => response.json())
                        .then(result => {
                            setTrailList(oldArray => [...oldArray, result]);
                        })
                })
            })
    }, [])

    const eachItem = (item, index) => {
        return (<ListItem key={index} item={item}/>)
    }

    return (
        <>
            <Header/>
            <div className={'my-trails'}>
                <h2>My Trails</h2>
                <div className={'result-list'}>
                    {trailList.map(eachItem)}
                </div>
            </div>
        </>
    )

}

export default MyTrails