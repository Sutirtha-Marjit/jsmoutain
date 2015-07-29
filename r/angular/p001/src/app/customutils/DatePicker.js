function DatePicker(){
	
	var currentMonth,self = this;
	self.today = new Date();
	self.containerID = '#calendar-container-div';
	self.maxCompartments = 42;
    self.months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
	self.days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	
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
	
	self.getContainerDiv = function(){
		var div = $(self.containerID);
		
		if(div.length==0){
			div = $('<div class="dateW" id="'+self.containerID.split('#')[1]+'"/>');
            div.html(self.generateEmptyCalHTML());
		}		
		return div;
	}
    
    self.generateASpecificDate = function(date,month,year){
        var newDate = new Date();
        newDate.setDate(date);
        newDate.setMonth(month);
        newDate.setYear(year);
        
        return newDate;
    };
	
	self.getDefaultDate = function(){
		var d = new Date();
		return { month:d.getMonth(), year:d.getFullYear()}	
	};
	
	self.commonInvoke = function(){
		$('*[data-prop="date"]')
	
	}
	
	self.makeCalendar = function(month,year){
		var i,totalTDs=0,firstPos,containerDiv,tempDate=null,tempTitle='',fullMonth,dateSeris=0;
		if(month==null || year==null){
			var defaultDate = self.getDefaultDate();
			month = defaultDate.month;
			year = defaultDate.year;
		}
		fullMonth = self.generateMonth(month,year)
		containerDiv = self.getContainerDiv();        
		$('body').append(containerDiv);
		firstPos = fullMonth[0].getDay();
        console.log(self.generateASpecificDate(1,month,year));
		console.log(containerDiv.find('td[data-index="'+firstPos+'"]'));
        i=firstPos;
        containerDiv.find('td[data-index]').text('');
        totalTDs = containerDiv.find('td[data-index]').length;
        containerDiv.find('*[data-id="crPhase"]').text(self.months[month]+","+year);
        
		while(i<self.maxCompartments){
          tempDate = fullMonth[dateSeris];
		  if(typeof tempDate!='undefined'){ 
			  if(tempDate.getMonth()== month){
			  tempTitle = self.days[tempDate.getDay()]+" "+tempDate.getDate()+" "+self.months[tempDate.getMonth()]+" "+year;
			  containerDiv.find('td[data-index="'+i+'"]').html('<a data-toggle="tooltip" data-placement="top" class="btn btn-default btn-sm btn-block" title="'+tempTitle+'">'+tempDate.getDate()+'</a>');
			  }
		  }
          dateSeris++;
          i++;          
        } 
		if(typeof $('*').tooltip != 'undefined'){
		$('[data-toggle="tooltip"]').tooltip();
		}
    };	
    
    self.getHeaderDiv = function(){
               
        return '<div><div class="btn-group" style="display:block; width:200px; margin:0 auto;"><a class="btn btn-success btn-sm"><span class="glyphicon glyphicon-chevron-left"></span></a><a data-id="crPhase" class="btn btn-sm btn-default">Jul 2014</a><a class="btn btn-success btn-sm"><span class="glyphicon glyphicon-chevron-right"></span></a></div></div>';
    };
	
	self.generateEmptyCalHTML = function(){		
	   var i,m,theadHTML = '<thead><tr>',tbodyHTML='<tbody>\n<tr>\n'; 	   
	   for(i=0;i<self.days.length;i++){
		theadHTML +='<th>'+self.days[i]+'</th>';
        }
		theadHTML +='</thead></tr>';	
		
		for(m=1;m<=self.maxCompartments;m++){
			var endOf7days = (m%7==0);			
			tbodyHTML += '<td data-index="'+(m-1)+'">'+(m-1)+'</td>\n';
			if(endOf7days){tbodyHTML +='</tr>\n';}	
			if(endOf7days){tbodyHTML +='<tr>\n';} 	
		}
		
		tbodyHTML += '</tr>\n</tbody>';
	    return self.getHeaderDiv()+'<table class="table table-striped">'+theadHTML+tbodyHTML+'</table>';
	}

}