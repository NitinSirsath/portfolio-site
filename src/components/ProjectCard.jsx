import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { CardLinks } from '../styles/ProjectStyles';

export default function ProjectCard({element}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={element.image}
          alt={element.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {element.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardLinks>
      <CardActions>
        <a target='_blank' rel="noreferrer"  href={element.github}><GitHubIcon /></a>
      </CardActions>
      <CardActions>
        <a target='_blank' rel="noreferrer"  href={element.deployed}><PreviewIcon /></a>
      </CardActions>
      </CardLinks>
    </Card>
  );
}
