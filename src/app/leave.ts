export class Leave {

id: number;
employeeName: string;
startDate: string;
endDate: string;
reason: string;
approved: boolean;  

constructor(){
  this.id=0; 
  this.employeeName=this.startDate=this.endDate=this.reason=''; 
  this.approved=false;
}
}