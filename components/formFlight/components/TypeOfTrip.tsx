import { FormControl, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material'
import useTypeOfTrip from '../../../hooks/useTypeOfTrip'


const trips = [
  {label: 'Ida y vuelta', value: 'ida_vuelta'},
  {label: 'Solo ida', value: 'solo_ida'}
]

const TypeOfTrip = () => {
  const {typeOfTrip, setTypeOfTrip} = useTypeOfTrip()
  
  return (
    <FormControl>
      <RadioGroup
        name="radio-buttons-group"
        row
        onChange={(e) => setTypeOfTrip(e)}
        value={typeOfTrip === '' ? trips[0].value : typeOfTrip }
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