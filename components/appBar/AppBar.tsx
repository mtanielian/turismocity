import MenuBar from './components/MenuBar'
import { AppBar, Toolbar, Avatar, Grid, IconButton, Tooltip } from '@mui/material'
import styles from './AppBar.module.css'

const AppBarMain = () => {
  return (
    <AppBar position="static" className={styles.appBarColor}>
      <Toolbar>
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={2}>
            <img src='brand-logo.png' className={styles.imgBrand} />
          </Grid>
          <Grid item xs={6} className={styles.containerMenuBar} >
            <MenuBar />
          </Grid>
          <Grid item xs={2} className={styles.containerIconLogin}>
            <Tooltip title="Login">
              <IconButton className={styles.iconLoginButton}>
                <Avatar className={styles.avatar} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
export default AppBarMain