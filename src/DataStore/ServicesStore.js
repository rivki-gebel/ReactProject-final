import { observable, makeObservable, action, computed } from 'mobx';

class ServicesStore {
    servicesList = [
        {
            id: "0",
            name: "פגישת ייעוץ פרונטלית",
            description: "פגישת ייעוץ פרטנית בקליניקה",
            price: 500,
            duration: 60,
        }

    ];

    constructor() {
        makeObservable(this,
            {
                servicesList: observable,
                PostService:action,
                GetServices: action
            }
        )
    }
     PostService = async (NewService) => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(NewService),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            this.servicesList = [...this.servicesList, {
                        id:this.servicesList.length,
                        name: NewService.name,
                        description: NewService.description,
                        price:NewService.price,
                        duration:NewService.duration
                    }];
        }
    };
    GetServices = async () => {
        const response = await fetch("http://localhost:8787/services");
        const services = await response.json();
        this.servicesList = services;
    };

    
    get servicesList() {
        return this.servicesList
    }

}
export default new ServicesStore();