import { useAppSelector } from '../../hooks/useRedux'
import AutocompleteFormFlight from './components/AutoCompleteFormFlight'
import TypeOfTrip from './components/TypeOfTrip'
import SelectDatesFlight from './components/SelectDatesFlight'
import Passengers from './components/Passengers'
import { Button, Container, Divider, Grid } from '@mui/material'
import useFormContinueFlights from '../../hooks/useFormContinueFlights'
import Swal from 'sweetalert2'

const FormFlight = () => {
  const { typeOfTrip } = useAppSelector(state => state.formFlight)
  const {handleContinueFlights, error, setError, errorTitle, errorMessage} = useFormContinueFlights()

  if (error) {
    Swal.fire({
      icon: 'error',
      title: errorTitle,
      text:  errorMessage
    })
    setError(false)
  }

  return (
    <Container>
      <Grid container style={{display:'flex', flexDirection:'column', backgroundColor: 'rgba(29,77,139, 0.82)', maxWidth: '600px', borderRadius: '12px', padding: '20px'}} >
        <Grid item>
          <TypeOfTrip />
        </Grid>
        {(typeOfTrip === '' || typeOfTrip !== 'dates') &&
        <>
          <Grid item mt={2}>
            <AutocompleteFormFlight type='outbound' label='Vuelo de ida' /> 
          </Grid>
          {typeOfTrip !== 'solo_ida' && 
          <Grid item mt={2}>
            <AutocompleteFormFlight type='return' label='Vuelo de vuelta' /> 
          </Grid>
          } 
        </>
        }
        {typeOfTrip === '' && <Divider sx={{marginY: '15px', backgroundColor: 'white'}} />}
        {(typeOfTrip === '' || typeOfTrip === 'dates') &&
        <Grid sx={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}} >
          <Grid item>
            <SelectDatesFlight type='outbound' />
          </Grid>
          <Grid item>
            <SelectDatesFlight type='return' />
          </Grid>
        </Grid>
        }
        <Divider sx={{marginY: '15px', backgroundColor: 'white'}} />
        <Grid item>
          <Passengers  />
        </Grid>
        <Grid item mt={2}>
          <Button onClick={handleContinueFlights} fullWidth sx={{paddingY: '10px'}} variant="contained">Continue</Button>
        </Grid>        
      </Grid>
    </Container>
  )
}

export default FormFlight