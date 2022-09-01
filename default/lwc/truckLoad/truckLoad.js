import { LightningElement,track,api,wire} from 'lwc';
import getTruckList from '@salesforce/apex/FetchBookings.search2';
//to display booking in data table form
const table_columns = [{
    label: 'View',
        type: 'button-icon',
        initialWidth: 75,
        typeAttributes: {
            iconName: 'action:preview',
            title: 'Preview',
            variant: 'border-filled',
            alternativeText: 'View'
        }},             {label:'Account Id', fieldName:'Account__c', type:'text'},
                        {label:'Booking Id', fieldName:'Id', type:'text'},
                        {label:'Name', fieldName:'Name', type:'text'},
                        {label:'Booking time from', fieldName:'Start_Date_and_Time__c', type:'dateTime' },
                        {label:'Booking time to', fieldName:'End_Date_and_Time__c', type:'dateTime' },
                        {label:'From', fieldName:'From__c', type:'text'},
                        {label:'To', fieldName:'To__c', type:'text'},
                        {label:'Amount', fieldName:'Total_Amount__c', type:'number'},
                        {label:'Truck', fieldName:'Truck__c', type:'text'},
                        {label:'Maximum load weight', fieldName:'Total_Weight__c', type:'number'},
                        ];
//to display booking in data table form

export default class RecordEditFormCreateExampleLWC extends LightningElement {
//to display booking in data table form
    
                            @track columns = table_columns;
                            @track record = {};
                            @track data = {};
                            @wire(getTruckList) truckss;
                            @track editr=false;
                            @track error;
                            //Handling errors
                                wiredTruckss(result) {
                                if (result.data) {
                                    this.truckss = result.data;
                                    this.error = undefined;
                                    console.log(this.truckss);
                                } else if (error) {
                                    this.error = result.error;
                                    this.truckss = undefined;
                                }
                            }
                        
     //to display booking in data table form                      
     callRowaction(event){
        var count=0;
        const row = event.detail.row;
        this.record = row;
        console.log(this.record.Id);
        this.editr=true;
        
        //this.bShowModal = true;
       // alert("Booked:" + row.Booked__c);
}
handleSuccesss(event) {
    this.editr=false;
}
handleResets(event) {
    this.editr=false;
    // const inputFields = this.template.querySelectorAll(
    //     'lightning-input-field'
    // );
    // if (inputFields) {
    //     inputFields.forEach(field => {
    //         field.reset();
    //     });
    
    // }
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

    @api recd;
    fla;
    @track load = true;
    @track recorded;

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm',event.detail.id);
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            this.fla=true;
            inputFields.forEach(field => {
                if(this.fla==true){
                    this.fla=false;}
                else if(this.fla==false){
                field.reset();}
            });
        
        }
    }
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }
    handleButton(event){
        this.load=false;
        this.recorded=this.recd;
        console.log(this.recorded);
        //window.close();
        //window.location.assign('https://rishav-jais-dev-ed.lightning.force.com/lightning/n/Payment');
        
    }
}