import ServicesStore from "../../DataStore/ServicesStore"
import { observer } from "mobx-react"
import './Service.css';
import { Paper, Typography } from '@mui/material';
const Service = (observer(({ id }) => {

  return (
    <>
       <>
      <div id="services">
        <Paper
          elevation={3}
          sx={{
            width: '300px',
            border: '3px solid #FDC72F',
            background: 'white',
            color: '#000',
            padding: '10px',
            marginBottom: '10px',
            
          }}
        >
          <div style={{ paddingRight: '10px', marginRight: '10px' }}>
            <Typography variant="subtitle2">
              <p>name: {ServicesStore.servicesList[id].name}</p>
            </Typography>
            <Typography variant="subtitle2">
              <p>Description:  {ServicesStore.servicesList[id].description}</p>
            </Typography>
            <Typography variant="subtitle2">
              <p>ID:  {ServicesStore.servicesList[id].id}</p>
            </Typography>
            <Typography variant="subtitle2">
              <p>Price: {ServicesStore.servicesList[id].price}</p>
            </Typography>
            <Typography variant="subtitle2">
              <p>Duration:{ServicesStore.servicesList[id].duration}</p>
            </Typography>
            <img className="logo" src="../../../images/wlogo.png" alt="Logo" />
          </div>
        </Paper>
      </div>
    </>
    </>
  )
}))

export default Service