import React from "react";
import './ListItem.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardActionArea} from "@material-ui/core";

const ListItem = (props) => {
    return (
        <div className={'list-item'}>
            <Card className={'card'} elevation={5}>
                <CardActionArea className={'card-item'} style={{display: 'flex'}} onClick={() => {}}>
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
                               image='https://bstatic.com/xdata/images/xphoto/1182x887/82877075.jpg?k=db9e00135b7b8f038aad88a7676235667ca249a5eed997a499677812fa332833&o=?size=S'
                               title="image of trail"
                    />
                </CardActionArea>
            </Card>
        </div>
    )

}

export default ListItem