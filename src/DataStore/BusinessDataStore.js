import { observable, makeObservable, action, runInAction } from 'mobx';
import Swal from 'sweetalert2';
class BusinessDataStore {
    businessData
        = {
            name: "Photo-Graphy",
            address: "Shefala 3 Tel Aviv",
            phone: "050-7387755",
            owner: "Tekno Art",
            logo: "../../../images/logo.jpg",
            description: "The Best Photographer for your event!",
        }
    isEditing = false;
    isLogin=false;
    constructor() {
        makeObservable(this,
            {
                isLogin:observable,
                isEditing: observable,
                businessData: observable,
                setIsLogin:action,
                UpdateData: action,
                PostData:action,
                GetData:action,
            }
        )
        //הצגת המידע הראשוני- לתצוגה יפה בלבד ניתן להסיר
        if(this.GetData().name===undefined)
        {
            this.PostData(this.businessData)
        }
    }
   
    setIsEditing() {
        this.isEditing = !this.isEditing;
    }
    setIsLogin(val) {
        this.isLogin =val;
    }
    PostData = async (details) => {
        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            this.businessData = details;
        }
    };
    GetData = async () => {
        const response = await fetch("http://localhost:8787/businessData");
        const data = await response.json();
        this.businessData = data;
    };

    UpdateData = async (details) => {
        const response = await fetch("http://localhost:8787/businessData", {
          method: "PUT",
          body: JSON.stringify(details),
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        if (response.status === 200) {
          this.businessData = details;
             
          Swal.fire({
            confirmButtonColor:'#2f4f4f',
            title: "The details have been saved",
            text: "Your details have been successfully entered",
            icon: "success",
          });
        }
      };
    get businessData() {
        return this.businessData
    }
    get isEditing() {
        return this.isEditing
    }

}
export default new BusinessDataStore();