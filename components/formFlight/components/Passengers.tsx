import { useState } from 'react'
import usePassengers from '../../../hooks/usePassengers'
import AdultIcon from '@mui/icons-material/Man'
import BoyIcon from '@mui/icons-material/Boy'
import ChildIcon from '@mui/icons-material/ChildFriendly'
import { Divider, ListItemIcon, ListItemText, TextField, Grid, Stack, Menu } from '@mui/material'


const Passengers = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { passengers, setPassengers, totalPassengers } = usePassengers()


  const open = Boolean(anchorEl)
  const handleClickListItem = (event:any) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  
  return (
    <>
      <TextField
        fullWidth
        placeholder="Passengers"
        sx={{'.MuiOutlinedInput-root': { backgroundColor: 'white', cursor: 'pointer'}}} 
        onClick={handleClickListItem}
        value={totalPassengers}
        autoComplete='off'
        disabled
      />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        <Grid container sx={{display:'flex', flexDirection:'column', padding:'5px'}} spacing={2}>
          <Grid item>
            <Stack direction="row" sx={{alignItems: 'center'}}>
              <ListItemIcon>
                <AdultIcon  />
              </ListItemIcon>
              <ListItemText>Adult</ListItemText>
              <TextField
                sx={{width:'100px', ml: '20px'}}
                autoComplete='off'
                type='number'
                value={passengers.adult}
                onChange={(e) => { setPassengers({type: 'adult', value: parseInt(e.target.value)}) }}
                InputProps={{ inputProps: { min: 0, max:100 } }}
              />          
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" sx={{alignItems: 'center'}}>
              <ListItemIcon>
                <BoyIcon />
              </ListItemIcon>
              <ListItemText>Teen</ListItemText>
              <TextField
                sx={{width:'100px', ml: '20px'}}
                type='number'
                autoComplete='off'
                value={passengers.teen}
                InputProps={{ inputProps: { min: 0, max:100 } }}
                onChange={(e) => { setPassengers({type: 'teen', value: parseInt(e.target.value)}) }}
              />
            </Stack>
          </Grid>
          <Grid item>
            <Stack direction="row" sx={{alignItems: 'center'}}>
              <ListItemIcon>
                <ChildIcon />
              </ListItemIcon>
              <ListItemText>Children</ListItemText>
              <TextField
                sx={{width:'100px', ml: '20px'}}
                type='number'
                autoComplete='off'        
                InputProps={{ inputProps: { min: 0, max:100 } }}
                value={passengers.child}
                onChange={(e) => { setPassengers({type: 'child', value: parseInt(e.target.value)}) }}
              />
            </Stack>
          </Grid>
          <Divider />
          <Grid item>
            <Stack direction="row">
              <ListItemText>Done</ListItemText>
            </Stack>
          </Grid>
        </Grid>
      </Menu>
    </>
  )
}

export default Passengers