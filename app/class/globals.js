/**
 * Created by Tcho on 07/08/2018.
 */
Ext.define('B2CApp.class.Globals', {
    singleton:true,
    siteURL:'http://bornestocatch.dahultimate.com',
    APIUrl:'/restAPI/',
    constructor:function(){
        this.APIUrl=this.siteURL+'/restAPI/';

}


});