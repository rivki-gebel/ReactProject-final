import AddMeeting from '../../components/addMeeting/AddMeeting'
import BusinessDetails from '../businessDetails/BusinessDetails'
import Meetings from '../meeting/Meetings'
import Services from '../service/Services'
import './User.css'
function User() {

  return (
    <>
      <BusinessDetails></BusinessDetails>
      <div id="AddMeeting">
        <AddMeeting></AddMeeting>
      </div>
      <div id="Services">
        <Services></Services>
      </div>
    </>
  )
}

export default User