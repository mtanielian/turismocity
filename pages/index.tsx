import MainLayout from '../components/layouts/MainLayout'
import { useAppSelector } from '../hooks/useRedux'
import { Container, Grid } from '@mui/material'
import WordsSlider from '../components/slider/WordsSlider'
import FormFlight from '../components/formFlight/FormFlight'

export default function HomePage() {
  const { backgroundImage } = useAppSelector(state => state.sliderImage)
  
  return (
    <MainLayout>
      <Grid container  sx={{backgroundImage:`url(backgroundForm/${backgroundImage})`, backgroundSize: 'cover', minHeight: '500px'}} >
        <Container style={{display: 'flex', alignItems: 'center'}}>
          <Grid item xs={8}>
            <FormFlight />
          </Grid>
          <Grid item xs={4}>
            <WordsSlider />           
          </Grid>
        </Container>
      </Grid>
    </MainLayout>
  )
}