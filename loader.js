
        if (!usbWaitTime){
            usbWaitTime = 10000; //default if empty
        }   
  
        //ESP8266 usb functions - stooged
        function disableUSB() {
            var getpl = new XMLHttpRequest();
            getpl.open("POST", "./usboff", true);
            getpl.send(null);
        }        
        function enableUSB() {
            var getpl = new XMLHttpRequest();
            getpl.open("POST", "./usbon", true);
            getpl.send(null);
        }    
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }    
        function jbdone() {
        goldhen()
        }  
          
        function HenSet() {
            ShowMSG = "You're all Set!"
            loadmsg()
        }
        function goldhen(){
            ShowMSG = "USB Exfat_hax Loaded Successfully!"
            loadmsg()
            var checkout = localStorage.getItem("CheckBox")
            var checkout2 = localStorage.getItem("CheckBox0")
            if (checkout == "true") {
                load_platinum()
            }else if (checkout2 == "true") {
                load_goldhen2b2()
            }else {
                ShowMSG = "Jailbreak Done, Now Load HEN Manually!"
                loadmsg()
            }
        }

        function SendPayload() {
                var payload_buffer = chain.syscall(477, new int64(0x26200000, 0x9), 0x300000, 7, 0x41000, -1, 0);
                var bufLen = payload.length;
                var payload_loader = p.malloc32(bufLen);
                var loader_writer = payload_loader.backing;
                for(var i=0;i<bufLen/4;i++){
                    var hxVal = payload.slice(i*4,4+(i*4)).split("").reverse().join("").split("").map(function(s){return("0000" + s.charCodeAt(0).toString(16)).slice(-2);}).join("");
                    loader_writer[i] = parseInt(hxVal, 16);
                }
                chain.syscall(74, payload_loader, bufLen, (0x1 | 0x2 | 0x4));
                var pthread = p.malloc(0x10);
                chain.call(libKernelBase.add32(OFFSET_lk_pthread_create), pthread, 0x0, payload_loader, payload_buffer);
            }  
 
        function loadBIN(){
            var xhr = new XMLHttpRequest();
            xhr.open('GET', PLfile, true);
            xhr.overrideMimeType('text/plain; charset=x-user-defined');
            xhr.onload = function(e) {
            if (this.status == 200) {
                payload = this.response;
                SendPayload();
                HenSet();
            }
            else{
                alert("Failed to load " + PLfile + " - " + this.status);
                return;
            }};
            xhr.send();
        }   
       
function CalcTime(dur){hrs=Math.floor(dur/1000/60/60);min=Math.floor(dur/1000/60-hrs*60);sec=Math.floor(dur/1000-min*60);mil=dur.toString().slice(-3);if (min!=0){ShowDuration=" - Webkit Exploited In : "+min+" minute"+(min==1?"":"s")+", "+sec+" second"+(sec==1?"":"s");}else {ShowDuration=" - WK Exploited In: "+sec+" second"+(sec==1?"":"s");}}
function StartTimer(){StartTime=Date.now();}
function EndTimer(){EndTime=Date.now();CalcTime(EndTime=Date.now()-StartTime);top.document.title+=ShowDuration;}       