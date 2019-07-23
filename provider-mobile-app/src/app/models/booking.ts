export class Booking {
    public id: number;
    public listingId: number;
    public userId: number;
    public status: string;
    public dateStart: string;
    public dateEnd: string;

    constructor(){
        this.id = 0;
        this.listingId = 0;
        this.userId = 0;
        this.status = "";
        this.dateStart = "";
        this.dateEnd = "";
    }
}