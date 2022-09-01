import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
export default class RegisterAccount extends LightningElement {
    account=true;    
    orderObject = ACCOUNT_OBJECT;
        orderObject1 = CONTACT_OBJECT;
        AccountFormSubmitted(event){
            this.account=false;
           // }
        //  handleButton(event){
         
         }
        ContactFormSubmitted(event){
            window.location.assign('https://rishav-jais-dev-ed.lightning.force.com/lightning/n/Truck_Booking');
        
        }
}
