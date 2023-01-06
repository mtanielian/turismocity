import { MenuItems } from '../../../ts-definitions/interfaces'
import FlightIcon from '@mui/icons-material/Flight'
import HotelIcon from '@mui/icons-material/Hotel'
import HouseIcon from '@mui/icons-material/House'
import LuggageIcon from '@mui/icons-material/Luggage'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'


const menuItems: MenuItems[] = [
  { label: 'Vuelos', Icon: <FlightIcon />, link: '/' },
  { label: 'Hoteles', Icon: <HotelIcon />, link: '/tickets/history' },
  { label: 'Alquileres', Icon: <HouseIcon />},
  { label: 'Paquetes', Icon: <LuggageIcon />},
  { label: 'Actividades', Icon: <ConfirmationNumberIcon />},
  { label: 'Autos', Icon: <TimeToLeaveIcon />},
  { label: 'Micros', Icon: <DirectionsBusIcon />},
  { label: 'Asistencia al viajero', Icon: <MedicalServicesIcon />},
]

export default menuItems