import MeetingStore from "../../DataStore/MeetingStore";
import Meeting from "./Meeting"
import { useEffect } from "react";

function Meetings() {

  useEffect(() => {
    MeetingStore.GetMeeting()
}, []);

    return (
      <>
       <div style={{ display: 'flex', gap: '1cm', width: '80%', flexDirection: 'row', flexWrap: 'wrap' }}>
          {MeetingStore.meetingList.map(
                            (_, id) => <Meeting key={id} id={id} />
                     )}
        </div>
      </>
    )
  }
  
  export default Meetings