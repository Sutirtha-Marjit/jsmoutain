function DatePicker(){
	
	var currentMonth,self = this;
	self.today = new Date();
	self.days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
	
	currentMonth = self.today.getMonth();
	
	self.generateMonth = function(month,year){
		var fullMonth=[],crDate=null;
		for(var i=1;i<=32;i++){	
			crDate = new Date();
			crDate.setFullYear(year);
			crDate.setMonth(month);
			crDate.setDate(i);
			fullMonth.push(crDate);
			console.log(crDate);
	    }
		return fullMonth;
	};
	
	
	self.generateCalHTML = function(container,month,year){
		
	   var i,m,fullMonth,theadHTML = '<thead><tr>',tbodyHTML='<tbody>';
	   fullMonth = self.generateMonth(month,year);
	   
	   for(i=0;i<self.days.length;i++){
		theadHTML +='<th>'+<self.days[i]+'</th>';
        }
		theadHTML +='</thead></tr>';	
		
		for(m=1;m<=31;m++){
			if(m%7==0){
				tbodyHTML +='<tr>';
			}
		
		}
	
	}




}