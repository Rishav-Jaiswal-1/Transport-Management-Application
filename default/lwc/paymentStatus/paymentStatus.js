import { LightningElement,api, track } from 'lwc';
import getItemList from '@salesforce/apex/FetchBookings.search';
export default class PaymentStatus extends LightningElement {
@api rec;
@track recordi;
@track recod = [];
edi=false;
@track val;
@track eid;
complete=false;
    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id)
        let row = event.detail.id;
        this.recod.push(row);
        this.complete=true;
        console.log(' A '+this.recod);
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handlesetedit(event)
    {
        this.val=event.target.value;
    }
    handleedit(){
        //window.blur();
        console.log(this.val);
        this.edi=true;
        }
@track MyItems;
@track error;
connectedCallback() {
    this.recordi=this.rec;        
    //var sText = this.rec;
    getItemList()
        .then(result => {
            this.MyItems = result;
            this.MyItems.forEach(element => {
                element.forEach(elem => {
                console.log(elem);});
            });
})  
.catch(error => {
    this.error = error;
});       
}
handleSuccess1(event) {
    this.edi=false;
}
handleSubmit1(event) {
}
handleButton(){
window.open('https://rishav-jais-dev-ed--c.visualforce.com/apex/PDF');
}
}