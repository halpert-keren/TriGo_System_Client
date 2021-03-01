import React from "react";
import './ListItem.css'
import image from '../shared/imagePlaceholder.png'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActionArea} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const ListItem = (props) => {
    let history = useHistory();

    const itemAction = () => {
        history.push({
            pathname: props.path,
            data: props.item._id
        })
    }

    return (
        <div className={'list-item'}>
            <Card className={'card'} elevation={5}>
                <CardActionArea className={'card-item'} style={{display: 'flex'}} onClick={itemAction}>
                    <CardContent className={'card-content'}>
                        <Typography variant="h5">
                            {props.item.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {props.item.description}
                        </Typography>
                    </CardContent>
                     <CardMedia className={'card-img'}
                               component="img"
                               image={props.images && props.images[0] ? props.images[0] : image}
                               title="image of trail"
                    />
                </CardActionArea>
            </Card>
        </div>
    )

}

export default ListItem