export class Employee {
    id: number;
    name: string;
    email: string;
    address: string;
    phonenumber: number;
    
    constructor(
        id: number,
        name: string,
        email: string,
        address: string,
        phonenumber: number,
    ){
            this.id= id;
            this.name = name;
            this.email = email;
            this.address = address;
            this.phonenumber = phonenumber;
    }
    
}
