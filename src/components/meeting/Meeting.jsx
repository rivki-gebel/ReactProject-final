import MeetingStore from "../../DataStore/MeetingStore"
import { observer } from "mobx-react"
import '../meeting/Meeting.css'
import { Paper } from "@mui/material";
const Meeting = (observer(({ id }) => {
  const getMeetingColor = (dateTime) => {
    const today = new Date();
    const meetingDate = new Date(dateTime);
    const timeDiff = Math.abs(meetingDate.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    if (diffDays < 0)
      return 'non'
    else
      if (diffDays === 1) {
        return 'red'; // היום
      } else if (diffDays <= 7) {
        return 'orange'; //השבוע
      }
      else if (diffDays >= 7) {
        return 'green'; // עתיד

      }

  };
  return (
    <>
      <div className="showMeeting">
        <Paper
          elevation={3}
          sx={{
            width: '300px',
            border: '3px solid gray',
            background: 'white',
            color: '#000',
            padding: '10px',
            marginBottom: '10px',

          }}
        >
          <div>
            ClientName: {MeetingStore.meetingList[id].clientName}
          </div>
          <div>
            Se: {MeetingStore.meetingList[id].serviceType}
          </div>
          <div className={`SingleMeeting-date ${getMeetingColor(MeetingStore.meetingList[id].dateTime)}`}>
            {MeetingStore.meetingList[id].dateTime}
          </div>
        </Paper>
      </div>
    </>
  )
}))

export default Meeting