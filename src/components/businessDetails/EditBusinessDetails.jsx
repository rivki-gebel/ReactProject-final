import { Button, Card, TextField, Grid, Typography } from '@mui/material';
import BusinessDataStore from '../../DataStore/BusinessDataStore';
import { observer } from 'mobx-react';
import { useState } from 'react';
import BusinessDetails from './BusinessDetails';

const EditBusinessDetails = observer(() => {
  const [Name, setName] = useState(BusinessDataStore.businessData.name)
  const [Adress, setAddress] = useState(BusinessDataStore.businessData.address)
  const [Phone, setPhone] = useState(BusinessDataStore.businessData.phone)
  const [Owner, setOwner] = useState(BusinessDataStore.businessData.owner)
  const [Logo, setLogo] = useState(BusinessDataStore.businessData.logo)
  const [Description, setDescription] = useState(BusinessDataStore.businessData.description)
  
  const handleEdit = () => {

    const UpdatedData = {
      name: Name,
      address: Adress,
      phone: Phone,
      owner: Owner,
      logo: Logo,
      description: Description,
    };
    BusinessDataStore.UpdateData(UpdatedData);
    BusinessDataStore.setIsEditing();
  };


  return (
    <>
      <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', marginTop:'5%'}}>
        <Typography variant="h5" gutterBottom>
          Edit Business Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              defaultValue={BusinessDataStore.businessData.name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              defaultValue={BusinessDataStore.businessData.address}
              onChange={(e) => setAddress(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="phone"
              defaultValue={BusinessDataStore.businessData.phone}
              onChange={(e) => setPhone(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="owner"
              defaultValue={BusinessDataStore.businessData.owner}
              onChange={(e) => setOwner(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="logo"
              type='url'
              defaultValue={BusinessDataStore.businessData.logo}
              onChange={(e) => setLogo(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="description"
              defaultValue={BusinessDataStore.businessData.description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained"  onClick={handleEdit}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>

      
    </>
  );
});
export default EditBusinessDetails;