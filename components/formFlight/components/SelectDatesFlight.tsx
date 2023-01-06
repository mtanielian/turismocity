import useSelectDateFlight from '../../../hooks/useSelectDateFlight'
import { TypeFlight } from '../../../ts-definitions/types'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { TextField } from '@mui/material'

interface Props {
  type: TypeFlight
}

const SelectDatesFlight = ({ type } : Props) => {
  const { label, date, handleDateChange } = useSelectDateFlight({type})

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={date}
        views={['year', 'month', 'day']}
        onChange={(newValue) => {
          handleDateChange(newValue)
        }}
        renderInput={(params) => 
          <TextField 
            sx={{ width: '100%', '.MuiOutlinedInput-root': { backgroundColor: 'white'}}} 
            {...params}
            inputProps={{ ...params.inputProps, placeholder: label, autoComplete: 'off' }}
          />
        }
      />
    </LocalizationProvider>
  )
}


export default SelectDatesFlight