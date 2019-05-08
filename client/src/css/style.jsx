import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import yellow from '@material-ui/core/colors/yellow';
// import teal from '@material-ui/core/colors/teal';

const styles = theme => ({
    card: {
      marginTop: 80,
      maxWidth: 400,
      marginBottom: 80,
    },
    list: {
      width: 600,
    },
    fullList: {
      width: 'auto',
    },
    Esme: {
      // backgroundColor: teal[600],
      color: grey[50],
      borderColor: grey[50]
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
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      // backgroundColor: yellow[200],
    },
    rec: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      backgroundColor: yellow[100],
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
    },
    chip: {
      margin: theme.spacing.unit,
    },
    buttons: {
      display: 'flex',
      justifyContent: 'center',  
    }
  });

  export default styles;