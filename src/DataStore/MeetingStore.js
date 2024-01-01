import { observer } from "mobx-react-lite"
import { observable, makeObservable, action, computed } from 'mobx';
import Swal from "sweetalert2";
class Meetings {
    meetingList = [];

    constructor() {
        makeObservable(this,
            {
                meetingList: observable,
                PostMeeting:action,
                GetMeeting:action
            }
        )
    }
 
    PostMeeting = async (NewMeeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(NewMeeting),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 200) {
            this.meetingList = [...this.meetingList, {
                id: this.meetingList.length,
                clientName: NewMeeting.clientName,
                clientPhone: NewMeeting.clientPhone,
                clientEmail: NewMeeting.clientEmail,
                dateTime: NewMeeting.dateTime,
                serviceType: NewMeeting.serviceType
            }];
            Swal.fire({
                confirmButtonColor:'#2f4f4f',
                title: "Meeting Added",
                text: "The details have been successfully entered ",
                icon: "success"
              });
        }
        else{
            Swal.fire({
                confirmButtonColor:'#2f4f4f',
                title: 'Sorry, This date is taken',
                text: 'Please schedule another time',
                icon: "error"
              });
        }
    };
    GetMeeting = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const meetings = await response.json();
        this.meetingList = meetings;
    };

    get meetingList() {
        return this.meetingList
    }

}
export default new Meetings();