import ServicesStore from "../../DataStore/ServicesStore"
import Service from "./Service"
import Swal from 'sweetalert2';
import { Button } from "@mui/material"
import { observer } from "mobx-react";
import { useEffect } from "react";
import BusinessDataStore from "../../DataStore/BusinessDataStore";

const Services = observer(() => {
  //ברגע שמתרענן מובא המידע מהשרת
  useEffect(() => {
    ServicesStore.GetServices()
  }, []);
  //פוקציית הקפצת טופס הוספת שירות
  const popAddService = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Add Service',
      html:
        '<label for="name">Service-Name:</label>' +
        '<input id="name" class="swal2-input">' + '<br/>' +
        '<label for="description">Description:</label>' + '<br/>' +
        '<input id="description" type="textarea" class="swal2-input">' + '<br/>' +
        '<label for="price">Price:</label>' + '<br/>' +
        '<input id="price" class="swal2-input">' + '<br/>' +
        '<label for="duration">Duration:</label>' + '<br/>' +
        '<input id="duration" type="time" class="swal2-input">',

      color: '#2f4f4f',
      confirmButtonColor: '#2f4f4f',
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const price = document.getElementById('price').value;
        const duration = document.getElementById('duration').value;

        if (name === '' || description === '' || price === '' || duration === '') {
          Swal.showValidationMessage('Please fill in all fields');
          return false;
        }

        return {
          name,
          description,
          price,
          duration,
        };
      },
    });

    if (formValues) {
      ServicesStore.PostService(formValues);
      const Toast = Swal.mixin({
        position: "top-end",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Service Added successfully"
      });
    }
  };

  return (
    <>
      {!BusinessDataStore.isEditing ? (
        <div style={{ display: 'flex', gap: '1cm', width: '80%', flexDirection: 'row', flexWrap: 'wrap', height: "200px" }}>
          {ServicesStore.servicesList.map(
            (_, id) => <Service key={id} id={id} />
          )}
        </div>
      ) : (null)}

      {BusinessDataStore.isLogin && !BusinessDataStore.isEditing ?
        (
          <Button style={{ borderColor: 'gold', color: 'gold',marginTop:'-33%',marginLeft:'15%'}} onClick={popAddService}>add Service</Button>
        ) : (null)
      }
    </>
  )
})

export default Services