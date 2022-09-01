public with sharing class FetchTruck {
        @AuraEnabled(cacheable=true)
        public static List<Truck__c> foobar(){
            return [SELECT Id, Image__c, Name , Model__c , License_plate__c , Load_Capacity__c , cost__c FROM Truck__c WHERE Available__c = 'yes'];
        }
    
}
