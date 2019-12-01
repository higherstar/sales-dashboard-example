import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper/Paper";
import Button from "@material-ui/core/Button/Button";
import DeleteIcon from "@material-ui/core/SvgIcon/SvgIcon";
import CustomTable from "../components/CustomTable";
import { FilterIcon, DownloadIcon, ThreeDots } from "../components/SvgIcons";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    color: '#414142',
    fontFamily: 'Avenir, Avenir',
  },
  mainTitle: {
    padding: theme.spacing(1, 3),
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& button': {
      backgroundColor: 'white',
      border: 'solid 1px #D8DCE6',
      boxShadow: '0px 1px 2px #00000014',
      fontSize: 14,
      textTransform: 'none',
      color: '#3E3F42',
      '&:hover': {
        backgroundColor: 'white'
      }
    }
  },
  titleLeft: {
    '& > span:first-child': {
      fontSize: 26,
      marginRight: 10
    },
    '& > span:last-child': {
      fontSize: 14,
      color: '#9EA0A5'
    }
  },
  titleRight: {

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
        <div className={classes.titleLeft}>
          <span>Distributors</span>
          <span>(788)</span>
        </div>
        <div className={classes.titleRight}>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<FilterIcon/>}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            className={classes.button}
            startIcon={<DownloadIcon />}
          >
            Export
          </Button>
        </div>
      </Paper>
      <Paper className={classes.mainTitle}>
        <CustomTable />
      </Paper>
    </main>
  )
}

export default Distributors;