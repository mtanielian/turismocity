import { useAppSelector } from '../../hooks/useRedux'
import AutocompleteFormFlight from './components/AutoCompleteFormFlight'
import TypeOfTrip from './components/TypeOfTrip'
import SelectDatesFlight from './components/SelectDatesFlight'
import Passengers from './components/Passengers'
import { Button, Container, Divider, Grid } from '@mui/material'

const FormFlight = () => {
  const { dateOutbound, dateReturn, typeOfTrip } = useAppSelector(state => state.formFlight)
  return (
    <Container>
      <Grid container style={{display:'flex', flexDirection:'column', backgroundColor: 'rgba(29,77,139, 0.82)', maxWidth: '600px', borderRadius: '12px', padding: '20px'}} >
        <Grid item>
          <TypeOfTrip />
        </Grid>
        {!dateOutbound && !dateReturn && 
        <>
          <Grid item mt={2}>
            <AutocompleteFormFlight type='outbound' label='Vuelo de ida' /> 
          </Grid>
          {typeOfTrip !== 'solo_ida' && 
          <Grid item mt={2}>
            <AutocompleteFormFlight type='return' label='Vuelo de vuelta' /> 
          </Grid>
          } 
          <Divider sx={{marginY: '15px', backgroundColor: 'white'}} />
        </>
        }
        <Grid sx={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}} >
          <Grid item>
            <SelectDatesFlight type='outbound' />
          </Grid>
          <Grid item>
            <SelectDatesFlight type='return' />
          </Grid>
        </Grid>
        <Divider sx={{marginY: '15px', backgroundColor: 'white'}} />
        <Grid item>
          <Passengers  />
        </Grid>
        <Grid item mt={2}>
          <Button fullWidth sx={{paddingY: '10px'}} variant="contained">Continue</Button>
        </Grid>
        
      </Grid>
    </Container>
  )
}

export default FormFlight