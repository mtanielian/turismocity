import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material'
import useTypeOfTrip from '../../../hooks/useTypeOfTrip'
import { Trip } from '../../../ts-definitions/interfaces'

const trips: Trip[] = [
  {label: 'Ida y vuelta', value: 'ida_vuelta'},
  {label: 'Solo ida', value: 'solo_ida'},
  {label: 'Por fechas', value: 'dates'}

]

const TypeOfTrip = () => {
  const {setTypeOfTrip} = useTypeOfTrip()
  
  return (
    <FormControl>
      <RadioGroup
        name="radio-buttons-group"
        row
        onChange={(e) => setTypeOfTrip(e)}
        
      >
        {trips.map( ({label, value}) =>
          <FormControlLabel 
            key={value} 
            value={value} sx={{color:'white'}} 
            control={<Radio sx={{color: 'white', '&.Mui-checked': { color: 'white'}}}  />} 
            label={<Typography sx={{fontSize: '14px'}}>{label}</Typography>} 
          />
        )}
      </RadioGroup>
    </FormControl>
  )
}


export default TypeOfTrip