export class Listing {
    public id: number;
    public title: string;
    public location: string;
    public description: string;
    public numberOfPeople: number;
    public pricePerNight: number;
    public hostId: number;

    constructor(){
        this.id = 0;
        this.title = "";
        this.location = "";
        this.description = "";
        this.numberOfPeople = 0;
        this.pricePerNight = 0;
        this.hostId = 0;
    }
}
