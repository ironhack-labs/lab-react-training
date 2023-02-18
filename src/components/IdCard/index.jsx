import "./styles.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';






export default function MediaCard({firstName,lastName,gender,height,birth,picture}) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={picture}
        title="picture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <strong>{firstName}</strong> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <ul>
                    <li> <strong>Last Name: {lastName}</strong> </li>
                    <li> <strong>Gender: {gender} </strong> </li>
                    <li> <strong>Height: {height}</strong> </li>
                    <li> <strong>Birth: </strong>{birth} </li>
                </ul>
        </Typography>
      </CardContent>
    </Card>
  );
}



