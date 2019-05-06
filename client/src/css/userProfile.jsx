const styles = theme => ({
    card: {
      maxWidth: 800,
      marginTop: 30,
    },
    media: {
      height: 0,
      paddingTop: '5%', // 16:9
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
    avatar: {
      maxWidth: 100,
      maxHeight: 100,
      margin: 10,
      width: 60,
      height: 60,
    }

});

export default styles