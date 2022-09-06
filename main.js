// var x=document.getElementById('wakeup-button');

    /* ################
        Selecting DOM
    ################ */
      
    const currentTimeSpan=document.getElementById('current-time');
    const lunchTimeButton=document.getElementById('lunch-button');
    const wakeupTimeButton=document.getElementById('wakeup-button');
    const lunchTimeSelector=document.getElementById('lunchTimeSelector');
    const wakeupTimeSelector=document.getElementById("wakeUpTimeSelector");
    const bodyBackground=document.getElementsByTagName('body');
    const wakeupRingtone=document.getElementById('timeover');
    const lunchRingtone=document.getElementById('timeover2');
    const stopLunch=document.getElementById('stop-lunch');
    const stopWakeup=document.getElementById('stop-wakeup');
        
    /* ################
        Global Variables
    ################ */

    let lunchTime;
    let wakeupTime;
    const noon=12;


 /* ################
     Show Current Time
################ */

    const showCurrentTime=()=>{
        midrian='Am';
        const currentTime=new Date();
        let hours=currentTime.getHours();
        let minutes=currentTime.getMinutes();
        let seconds=currentTime.getSeconds();
        if(hours>=noon){

            midrian='PM';
        }
        if(hours>noon){
            hours=hours-12;
        }
    if(hours===00){
        hours=hours+12;
    }
    if(minutes<10){
        minutes= '0' + minutes;
    }
    if(seconds<10){
        seconds='0' + seconds;
    }
    currentTimeSpan.innerText=`${hours} : ${minutes} : ${seconds} ${midrian}`;

    }

    
    /* ################
        Update Time
    ################ */

    const updateTime=()=>{
        let time=new Date().getHours();
        console.log(time);
        if(time==0){
            time=time+24;
        }
		if(time===lunchTime){
            lunchRingtone.play().loop=true;
            stopLunch.style.display='inline-block';
            lunchTimeButton.style.display='none';
            
        } else if(time===wakeupTime){
            wakeupRingtone.play();
            wakeupRingtone.loop=false;
            stopWakeup.style.display='inline-block';
            wakeupTimeButton.style.display='none';
        }
        showCurrentTime();
       
    }

setInterval(updateTime,1000);




 /* ################
     Event Listerners
################ */
    lunchTimeButton.addEventListener('click',function(){
        lunchTime=parseInt(lunchTimeSelector.value);
        console.log(lunchTime);
    })

    wakeupTimeButton.addEventListener('click',function(){
        wakeupTime=parseInt(wakeupTimeSelector.value);
    })
    defaultUrl='./img/default.jpg';
    stopWakeup.addEventListener('click',function(){
        wakeupTime=0;
        wakeupRingtone.pause();
        stopWakeup.style.display='none';
        wakeupTimeButton.style.display='inline-block';
    })
    stopLunch.addEventListener('click',function(){
        lunchTime=0;
        lunchRingtone.pause();
        stopLunch.style.display='none';
        lunchTimeButton.style.display='inline-block';
        bodyBackground[0].style.backgroundImage='url(./img/default.jpg)';
    })

// utilizando jQuery


// mostrar icon hamburguer em ecrãs pequenos
function showMenu(){
	$('.menu-mobile2').fadeIn(1000, function(){

	// trocar icon hamburguer por icon cruz  	
	$('.menu-mobile').html('<i class="fa fa-times" aria-hidden="true" onclick="closeMenu()"></i>'); 
	}); 	
}	


// esconder menu mobile no desktop
function escondeMenuMobile(){
	var largura = window.innerWidth; 

	if(largura>1024){
    $('.menu-mobile2').fadeOut(1000); 
	}
}


// fechar o icon cruz 
function closeMenu(){
	$('.menu-mobile2').fadeOut(1000); 
		$('.menu-mobile').html('<i class="fa fa-bars" aria-hidden="true" onclick="showMenu()"></i>');
}	
