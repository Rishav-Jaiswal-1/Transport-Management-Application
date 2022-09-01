import { LightningElement,track } from 'lwc';
import getTruckList from '@salesforce/apex/FetchTruck.foobar';

export default class Truck extends LightningElement {
    
   
    @track trucks;
    @track error;
    @track imag="";
    connectedCallback() {
        getTruckList()
        .then(result => {
            this.trucks = result;
            this.trucks.forEach(element => {
               this.imag=element.Image__c;
                if (this.imag) {
                   console.log(this.imag);
                }
                
             });
        })
        .catch(error => {
            this.error = error;
        });            
}

removeItem(event) {
    var ctarget = event.currentTarget;
    var id_str = ctarget.dataset.value;
    window.location.assign('https://rishav-jais-dev-ed.lightning.force.com/lightning/r/Truck__c/'+id_str+'/view');
}

}

