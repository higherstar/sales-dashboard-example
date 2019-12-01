import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  mainTitle: {
    padding: theme.spacing(3, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function Distributors() {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper className={classes.mainTitle}>
        <div>
          <span>Distributors</span>
          <span>(788)</span>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Export
          </Button>
        </div>
      </Paper>
    </main>
  )
}

export default Distributors;