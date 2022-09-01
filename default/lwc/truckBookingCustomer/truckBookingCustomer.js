import { LightningElement,track,api} from 'lwc';
import id from '@salesforce/user/Id';
//import getTruckList from '@salesforce/apex/FetchTruck.foobar';
export default class TruckBookingCustomer extends LightningElement {
    @track clickedButtonLabel = 'Show Available trucks';  
    @track boolVisible = false;
    @track edit = true;
    @track trucks;
    @track error;
    @track record = [];
    handleTruck(event) {
        const label = event.target.label;  
  
        if ( label === 'Show Available trucks' ) {  
  
            this.clickedButtonLabel = 'Hide Truck Details';  
            this.boolVisible = true;  
  
        } else if  ( label === 'Hide Truck Details' ) {  
              
            this.clickedButtonLabel = 'Show Available trucks';  
            this.boolVisible = false;  
  
        }     
  }
            
             handleSubmit(event) {
                console.log('onsubmit event recordEditForm'+ event.detail.fields);
                //const row = event.detail.row;
               // let { Id } = row;
              
            }
             handleSuccess(event) {
                console.log('onsuccess event recordEditForm',event.detail.id);               
                this.edit=false;
                console.log(this.edit);
                // const inputFields = event.detail.field;
                // if (inputFields) {
                //     inputFields.forEach(field => {
                //         console.log(field);
                //     });
                
                // }
                let row = event.detail;
                this.record = row;
                console.log(this.record.id);
                // recor = event.target.id;
                //console.log('onsuccess event row',event.detail.row);
                //recor=event.detail;
                //eval("$A.get('e.force:refreshView').fire();");
                
                //window.open('https://rishav-jais-dev-ed.lightning.force.com/lightning/n/Truck_load');
            }
            handleReset(event) {
                const inputFields = this.template.querySelectorAll(
                    'lightning-input-field'
                );
                if (inputFields) {
                    inputFields.forEach(field => {
                        field.reset();
                    });
                
                }
             }
            
            handleButton(event) {
                  window.open('https://rishav-jais-dev-ed.lightning.force.com/lightning/n/Truck_load');

             }
}



    //render() {
    //     return TruckBookingCustomer;
         //this.showTemplateOne ? templateOne : templateTwo
    //}
    