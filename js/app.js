'use strict';
var table = document.getElementById('devicesTable');
var devicesSection = document.getElementById('"devicesSection')
var allDevices = [];
var header = ['Device name','quantity','unit Price','catigory'];
var  deviceArray = [];




//constructor 
function Device(deviceName,quantity,catigory){
    this.deviceName = deviceName,
    this.quantity = quantity,
    this.catigory = catigory,
    this.unitPrice = 0 ,
    allDevices.push(this)

}
//random function
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

Device.prototype.getUnitPrice = function(){
    this.unitPrice = getRandom(350,750);
}




Device.prototype.render = function(){
    var row = document.createElement('tr');
    table.appendChild(row);
    var td1El = document.createElement('td');
    row.appendChild(td1El);
    td1El.textContent = this.deviceName;

    var td2El = document.createElement('td');
    row.appendChild(td2El);
    td2El.textContent = this.quantity;

    var td3El = document.createElement('td');
    row.appendChild(td3El);
    td3El.textContent = this.unitPrice;

    var td4El = document.createElement('td');
    row.appendChild(td4El);
    td4El.textContent = this.catigory;

    





}

function creatHeader(){
    var headerRow = document.createElement('tr');
    table.appendChild(headerRow);

    for(var i =0 ; i<header.length; i++){
        var tdEl = document.createElement('td');
        headerRow.appendChild(tdEl);
        tdEl.textContent = header[i];
    }

}
creatHeader();





var Device1 = new Device('iphon 11',2,'Mobile');
var Device2 = new Device('Lenovo',2,'laptop');
var Device3 = new Device('Samsung Note',4,'Mobile');
var Device4 = new Device('i Pad',7,'tablet');
var Device5 = new Device('HP pavilion',7,'laptop');
var Device6 = new Device('nokia 3310',7,'Mobile');
var Device7 = new Device('Dell G3 15',2,'laptop');
var Device8 = new Device('Sony Xperia Xz',2,'Mobile');

Device1.getUnitPrice();
Device2.getUnitPrice();
Device3.getUnitPrice();
Device4.getUnitPrice();
Device5.getUnitPrice();
Device6.getUnitPrice();
Device7.getUnitPrice();
Device8.getUnitPrice();

console.log(allDevices);

Device1.render();
Device2.render();
Device3.render();
Device4.render();
Device5.render();
Device6.render();
Device7.render();
Device8.render();






//form 
var devicesForm = document.getElementById('devicesForm');
devicesForm.addEventListener('submit',addNewDevice)
function addNewDevice(event){
    event.preventDefault();

    var deviceName = event.target.ItemName.value;
    var catigory =  event.target.catigory.value;
    var quantitye = event.target.quantitye.value;

    var newDevice = new Device(deviceName,quantitye,catigory)
    newDevice.getUnitPrice();
    deviceArray.push(newDevice);

    localStorage.setItem('device',JSON.stringify(deviceArray));
}

//to get items from local storage 
if(localStorage.getItem('device')){
    var storedData = JSON.parse(localStorage.getItem('device'));
    for(var i = 0 ; i<storedData.length; i++){
        var storedDevice = new Device(storedData[i].deviceName,storedData[i].quantity,storedData[i].catigory);
        storedDevice.getUnitPrice();
        storedDevice.render();

    }
}

function totals(){
    var totals = 0;
    for(var i =0 ; i<allDevices.length;i++){
        totals += allDevices[i].unitPrice;
    }



    var totalPar = document.createElement('p');
    table.appendChild(totalPar);
    totalPar.textContent= 'totals = '+totals;

}
totals()