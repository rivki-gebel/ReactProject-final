import { useState } from 'react'
import { Outlet, Link } from "react-router-dom"
import {
  Button, TextField, Grid, Typography, Box, Container, FormControl, FormLabel,
} from '@mui/material'
import { observer } from "mobx-react";
import Swal from 'sweetalert2';
import BusinessDataStore from '../../DataStore/BusinessDataStore';
import BusinessDetails from '../businessDetails/BusinessDetails';
import ServicesStore from '../../DataStore/ServicesStore';
import './Admin.css';

const AdminLogin = observer(() => {

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok)
      BusinessDataStore.setIsLogin(true)
    else {

      Swal.fire('Error', 'Entrance for manager only!', 'error', 'Try again');
      setName("")
      setPassword("")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <div style={{ display: 'flex',position:'relative', flexDirection: 'column', alignItems: 'center'}}>

        {!BusinessDataStore.isLogin ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom textAlign='center' marginTop='30%'>
                Admin Login
              </Typography>
              <FormControl fullWidth>
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  margin="normal"
                  fullWidth
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} >
              <Button variant="contained" onClick={handleLogin} margin="normal" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        ) : (
          <>
            <BusinessDetails />
           {!BusinessDataStore.isEditing?(
            <div className='links' style={{ gap: '2cm', width:'90%'}}>
                
                <Button variant="outlined" style={{ borderColor: 'gold', color: 'gold', zIndex: 999, }}>
                  <Link to="./services" style={{ textDecoration: 'none', color: 'gold' }}>Services</Link>
                </Button>
                <Button variant="outlined" style={{ borderColor: 'gray', color: 'gray', zIndex: 999, }}>
                  <Link to="./meetings" style={{ textDecoration: 'none', color: 'gray' }}>Events</Link>
                </Button>
                <Outlet />
              </div>
           ):(null)}
                        

          </>
        )}
      </div>
    </Container>
  )
})

export default AdminLogin;
