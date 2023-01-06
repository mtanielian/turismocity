import PropTypes from 'prop-types'
import AppBarToolBar from '../appBar/AppBar'
import { Grid } from '@mui/material'


const MainLayout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <AppBarToolBar />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
    </Grid>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}


export default MainLayout