import { observer } from "mobx-react";
import BusinessDataStore from "../../DataStore/BusinessDataStore";
import EditBusinessDetails from "./EditBusinessDetails";
import { Button, Card, Grid, Typography } from '@mui/material';
import { useEffect } from "react";
import './BusinessDetails.css'

const BusinessDetails = observer(() => {
    const handleEdit = () => {
        BusinessDataStore.setIsEditing();
    };

    useEffect(() => {
        BusinessDataStore.GetData()
    }, []);

    return (
        <>
        {BusinessDataStore.isEditing ? (
            <EditBusinessDetails />
        ) : (
            <header sx={{ padding: "1rem", marginBottom: "1rem" }}>
                <div>
                    <Grid item xs={12}>
                        <img src={BusinessDataStore.businessData.logo} alt="Logo" />
                    </Grid>
                </div>
                <div id="details">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="body1" className="details" >
                                {BusinessDataStore.businessData.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className="details">
                                {BusinessDataStore.businessData.address}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className="details">
                                {BusinessDataStore.businessData.phone}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" className="details">
                                {BusinessDataStore.businessData.owner}
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="body1" className="details">
                                {BusinessDataStore.businessData.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                <div id="edit">
                    {BusinessDataStore.isLogin ?
                        (
                            <Button variant="outlined" style={{ borderColor: 'gold', color: 'gold' }} onClick={handleEdit}>
                                Edit
                            </Button>
                        ) : (null)
                    }</div>

            </header>
        )
        }
    </>
    )
}
)

export default BusinessDetails