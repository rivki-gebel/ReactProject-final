import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { observer } from "mobx-react-lite";
import ServicesStore from '../../DataStore/ServicesStore';
import MeetingStore from '../../DataStore/MeetingStore';
import {Button} from '@mui/material';

const Customer = observer(() => {

  const popAddMeeting = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Add Meeting',
      html:
        '<label for="name">Name:</label>' +
        '<input id="name" class="swal2-input">' +
        '<label for="phone">Phone:</label>' +
        '<input id="phone" class="swal2-input">' +
        '<label for="mail">Email:</label>' +
        '<input id="mail" type="email" class="swal2-input">' +
        '<br>' +
        '<label for="date">Date</label>' +
        '<input type="datetime-local" id="dateTime" class="swal2-input">' +
        '<br>' +
        '<label for="kindMeeting">Meeting kind:</label>' +
        `<div class="swal2-select">` +
        `<select id="kindMeeting" class="swal2-input">` +
        ServicesStore.servicesList.map((service) => `<option value="${service.name}">${service.name}</option>`).join('') +
        `</select>` +
        `</div>`,

      confirmButtonColor: '#2f4f4f',
      focusConfirm: false,
      preConfirm: () => {
        const clientName = document.getElementById('name').value;
        const clientPhone = document.getElementById('phone').value;
        const clientEmail = document.getElementById('mail').value;
        const dateTime = document.getElementById('dateTime').value;
        const serviceType = document.getElementById('kindMeeting').value;

        if (clientName === '' || clientPhone === '' || clientEmail === '' || dateTime === '' || serviceType === '') {
          Swal.showValidationMessage('Please fill in all fields');
          return false;
        }

        return {
          serviceType,
          dateTime,
          clientName,
          clientEmail,
          clientPhone
        };
      },
    });

    if (formValues) {
      MeetingStore.PostMeeting(formValues);

    }
  };

  return (
    <>
      <Button style={{ textDecoration: 'none', color: 'gold'}} onClick={popAddMeeting}>
        Add Event
      </Button>
      
    </>
  );
});

export default Customer