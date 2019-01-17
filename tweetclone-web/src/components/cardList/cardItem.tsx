import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { postItem } from './postItem';

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function CardItem(props: any) {
  const post: postItem = props.post;
  //   const bull = <span className='test'>•</span>;

  return (
    <Card className="card">
      <CardContent>
        <Typography className="test" color="textSecondary" gutterBottom>
          Post - {post.Id}
        </Typography>
        <Typography variant="h5" component="h2">
          {post.Text}
        </Typography>
        {/* <Typography className="test" color="textSecondary">
          adjective
        </Typography> */}
        <Typography component="p">
          Created At: {post.CreatedDate?post.CreatedDate.toString():''} - Created By: {post.CreatedBy}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

CardItem.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CardItem);
