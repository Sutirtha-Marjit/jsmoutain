function DatePicker(){
	
	var currentMonth,self = this;
	self.today = new Date();
	self.containerID = '#calendar-container-div';
	self.days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
	
	currentMonth = self.today.getMonth();
	
	self.generateMonth = function(month,year){
		var fullMonth=[],crDate=null;
		
		if(typeof month == 'undefined'){ month = new Date().getMonth(); }
		if(typeof year == 'undefined'){ year = new Date().getFullYear(); }
		
		for(var i=1;i<=32;i++){	
			crDate = new Date();
			crDate.setFullYear(year);
			crDate.setMonth(month);
			crDate.setDate(i);
			fullMonth.push(crDate);
		}
		return fullMonth;
	};
	
	self.createContainerDiv = function(){
		var div = $(self.containerID);
		
		if(div.length==0){
			div = $('<div id="'+self.containerID.split('#')[1]+'"/>');
		}
		
		return div;
	}
	
	self.makeCalendar = function(month,year){		
		var firstPos,containerDiv,fullMonth = self.generateMonth(month,year);
		containerDiv = self.createContainerDiv();
        containerDiv.html(self.generateEmptyCalHTML());
		$('body').append(containerDiv);
		firstPos = fullMonth[0].getDay();
		console.log(containerDiv.find('td[data-index="'+firstPos+'"]'));
		
    };	
	
	self.generateEmptyCalHTML = function(){		
	   var i,m,theadHTML = '<thead><tr>',tbodyHTML='<tbody>\n<tr>\n'; 	   
	   for(i=0;i<self.days.length;i++){
		theadHTML +='<th>'+self.days[i]+'</th>';
        }
		theadHTML +='</thead></tr>';	
		
		for(m=1;m<=35;m++){
			var endOf7days = (m%7==0);			
			tbodyHTML += '<td data-index="'+m+'">'+m+'</td>\n';
			if(endOf7days){tbodyHTML +='</tr>\n';}	
			if(endOf7days){tbodyHTML +='<tr>\n';} 	
		}
		
		tbodyHTML += '</tr>\n</tbody>';
	    return '<table class="table">'+theadHTML+tbodyHTML+'</table>';
	}

}