public with sharing class FetchBookings {
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking__c> foobar(){
        return [SELECT Id, Start_Date_and_Time__c,End_Date_and_Time__c, Name , From__c , To__c ,Total_Amount__c, Trip_Status__c , Truck_Driver__c,Total_Weight__c FROM Truck_Booking__c];
    }
    @AuraEnabled(cacheable=true)
    public static List<Truck_load__c> search(){
        // List<Truck_Booking__c> ac= new List<Truck_Booking__c>();
        // List<Truck_load__c> acc= new List<Truck_load__c>();
        // ac=[SELECT id,Name,Distance__c,End_Date_and_Time__c,From__c,Truck__c,Start_Date_and_Time__c,To__c,Total_Amount__c,Total_Weight__c,Trip_Status__c,Truck_Driver__c,(SELECT Id,Name,Item_Name__c, Item_Type__c, Weight__c FROM Trucks_load__r) FROM Truck_Booking__c where Truck_Booking__c =:stext];
        // [SELECT Id, Name, Item_Name__c, Item_Type__c, Weight__c FROM Truck_load__c WHERE Truck_Booking__c =:stext];
		// acc.add(ac.Trucks_load__r);
        // return acc;

        List<Truck_Booking__c> alist = [SELECT Id, Name,Distance__c,End_Date_and_Time__c,From__c,Truck__c,Start_Date_and_Time__c,To__c,Total_Amount__c,Total_Weight__c,Trip_Status__c,Truck_Driver__c FROM Truck_Booking__c order by createdDate DESC limit 1];
        List<Truck_load__c> clist = [SELECT Id, Name,Item_Name__c, Item_Type__c, Weight__c FROM Truck_load__c WHERE Truck_load__c.Truck_Booking__c IN :alist];
        return clist;

    }
    @AuraEnabled(cacheable=true)
    public static List<Truck_Booking__c> search2(){
        return [SELECT Id,Account__c,Name,Distance__c,End_Date_and_Time__c,From__c,Truck__c,Start_Date_and_Time__c,To__c,Total_Amount__c,Total_Weight__c,Trip_Status__c,Truck_Driver__c FROM Truck_Booking__c order by createdDate DESC limit 1];

    }
    @AuraEnabled(cacheable=true)
    public static List<Payment__c> search1(){
        List<Truck_Booking__c> alist = [SELECT Id, Name,Distance__c,End_Date_and_Time__c,From__c,Truck__c,Start_Date_and_Time__c,To__c,Total_Amount__c,Total_Weight__c,Trip_Status__c,Truck_Driver__c FROM Truck_Booking__c order by createdDate DESC limit 1];
        List<Payment__c> plist = [SELECT Id, Name,Mode_of_Payment__c, Total_Amount__c, Case__c FROM Payment__c WHERE Payment__c.Truck_Booking__c IN :alist];
        return plist;
    }
    @AuraEnabled(cacheable=true)
    public static string getbrecordid(){
        List<Truck_Booking__c> lbri=[SELECT Id FROM Truck_Booking__c order by createdDate DESC limit 1];
        string s=''+lbri[0].Id;
        return s;
    }

}