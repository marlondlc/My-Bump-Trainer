import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    water: {
      backgroundColor: blue[500],
      color: grey[50],
    },
    food: {
        backgroundColor: red[500],
        color: grey[50],
    },
    exercise: {
        backgroundColor: amber[500],
        color: grey[50],
    }

  });

  export default styles;