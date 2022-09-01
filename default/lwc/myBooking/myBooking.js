import { LightningElement,track, api } from 'lwc';
import getBookingList from '@salesforce/apex/FetchBookings.foobar';
import getItemList from '@salesforce/apex/FetchBookings.search';
import getPayment from '@salesforce/apex/FetchBookings.search1';
export default class MyBooking extends LightningElement {
    // handleSuccess(event) {
    //     console.log('onsuccess event recordEditForm',event.detail.id)
    //     eval("$A.get('e.force:refreshView').fire();");

    //     //window.reload();
    // }
    // handleSubmit(event) {
    //     console.log(getTruckList);
    // }
    @track MyBookings;
    @track error;
    @api recid;
    connectedCallback() {
        getBookingList()
        .then(result => {
            this.MyBookings = result;
            })
        .catch(error => {
            this.error = error;
        });            
}

@track MyItems;
@track error;
handleSearch (){
            
    getItemList()
        .then(result => {
            this.MyItems = result;
})
.catch(error => {
    this.error = error;
});       
}

@track Pay;
@track error;
handleSearch1(){
           
    getPayment()
        .then(result => {
            this.Pay = result;
})
.catch(error => {
    this.error = error;
});       
}

}