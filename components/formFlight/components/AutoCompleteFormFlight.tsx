import useAutocompleteFormFlight from '../../../hooks/useAutocompleteFormFlight'
import { Autocomplete, Box, TextField } from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight'
import { Flight } from '../../../ts-definitions/interfaces'
import { HTMLAttributes } from 'react'
import { TypeFlight } from '../../../ts-definitions/types'

const getLabel = (flight: Flight) => `
Origen: ${flight.origin} Destino: ${flight.destination} 
Lugares: ${flight.availability} Precio: $${flight.price} Fecha: ${flight.date}
`
interface PropsItem {
  props: HTMLAttributes<HTMLLIElement>,
  flight: Flight
}

const Item = ({ props, flight } : PropsItem) => (
  <Box component="li" sx={{ fontSize: 12, '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
    <FlightIcon sx={{mr:2}} /> 
    {getLabel(flight)}
  </Box>
)

interface PropsAutocompleteFormFlight {
  label: string,
  type: TypeFlight
}

const AutocompleteFormFlight = ({ label, type }: PropsAutocompleteFormFlight) => {
  const { setFlight, flights } = useAutocompleteFormFlight({type})
  
  return (
    <Autocomplete
      sx={{ width: '100%', '.MuiOutlinedInput-root': {background: 'white'}}}
      options={flights || []}
      autoHighlight
      onChange={(event, flight) => {flight && Object.keys(flight).length > 0 ? setFlight(flight) : []}}
      getOptionLabel={(flight: Flight) => getLabel(flight)}
      renderOption={(props, flight) => (
        <Item key={flight._id} props={props} flight={flight} />
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={label}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'off',
            style:{fontSize: '14px'}
          }}
        />
      )}
    />
  )
}

export default AutocompleteFormFlight

