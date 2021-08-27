import React from "react";
import {
  Paper,
  makeStyles,
  TextField,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import Layout from "./index";

const Login = () => {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.PaperWrapper}>
        <Paper elevation={3} variant="outlined" className={classes.FormPaper}>
          <Grid container justifyContent="center" spacing={6}>
            <Grid item container spacing={2}>
              <Grid item container justifyContent="center">
                <div className={classes.LockIconWrapper}>
                  <LockIcon fontSize="large" />
                </div>
              </Grid>
              <Grid item xs={12} container justifyContent="center">
                <Typography variant="h5">Sign in</Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <form>
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <TextField label="Email" />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField label="Password" />
                  </Grid>

                  <Grid
                    item
                    container
                    xs={12}
                    direction="row"
                    justifyContent="space-between"
                    className={classes.Actions}
                  >
                    <Grid item>
                      <Button variant="text">Create account</Button>
                    </Grid>
                    <Grid item>
                      <Button variant="contained">Sign in</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Layout>
  );
};

export default Login;

const useStyles = makeStyles((theme) => ({
  PaperWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: theme.spacing(
      theme.typography.pxToRem(60),
      theme.typography.pxToRem(40)
    ),
  },
  FormPaper: {
    maxWidth: theme.typography.pxToRem(600),
    padding: theme.spacing(
      theme.typography.pxToRem(50),
      theme.typography.pxToRem(40)
    ),
  },
  LockIconWrapper: {
    borderRadius: "50%",
    width: theme.typography.pxToRem(80),
    height: theme.typography.pxToRem(80),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Actions: {
    paddingTop: `${theme.typography.pxToRem(40)} !important`,
  },
}));
