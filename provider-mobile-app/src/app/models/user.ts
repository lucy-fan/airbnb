export class User {
    public id: number;
    public name: string;
    public surname: string;
    public email: string;
    public password: string;
    public role: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.surname = "";
        this.email = "";
        this.password = "";
        this.role = "user";
    }


}