
        function loadmsg() {
            document.getElementById('notify').style.display = ''
            document.getElementById('notify').className = 'notification'
            document.getElementById('log').innerHTML = ShowMSG
            setTimeout(ani2, 10000)
        }
        function ani2() {
            document.getElementById('notify').className = 'notification2'
            setTimeout(hide, 400)
        }
        function hide() {
            document.getElementById('notify').style.display = 'none'
        }
        // Jailbreak
        function Jailbreak() {
            var checklocalStorage = localStorage.getItem("CheckBox1")
            if (checklocalStorage == "true") {
                ShowMSG = 'Please Wait...Triggering Exploit!'
                loadmsg()
            }else {
                ShowMSG = 'Insert USB Now...Triggering Exploit!'
                loadmsg()
            }
        }
        function checkthebox() {
          var chkBox = document.getElementById("autoPhenbox")
          if (chkBox.checked == true){
            var checkbox_on = document.getElementById("autoPhenbox").checked = true
            localStorage.setItem("CheckBox", checkbox_on)
            ShowMSG = "Auto Load PlatinumHEN ON!"
            loadmsg()
          }else if (chkBox.checked == false) {
            var checkbox_off = document.getElementById("autoPhenbox").checked = false
            localStorage.setItem("CheckBox", checkbox_off)
            ShowMSG = "Auto Load PlatinumHEN OFF!"
            loadmsg()
          }
        }
        function checkthebox0() {
          var chkBox = document.getElementById("autoGhenbox")
          if (chkBox.checked == true){
            var checkbox_on = document.getElementById("autoGhenbox").checked = true
            localStorage.setItem("CheckBox0", checkbox_on)
            ShowMSG = "Auto Load GoldHEN ON!"
            loadmsg()
          }else if (chkBox.checked == false) {
            var checkbox_off = document.getElementById("autoGhenbox").checked = false
            localStorage.setItem("CheckBox0", checkbox_off)
            ShowMSG = "Auto Load GoldHEN OFF!"
            loadmsg()
          }
        }
        function checkthebox1() {
          var chkBox = document.getElementById("autousbbox")
          if (chkBox.checked == true){
            var checkbox_on = document.getElementById("autousbbox").checked = true
            localStorage.setItem("CheckBox1", checkbox_on)
            ShowMSG = "Auto USB for ESP8266 ON!"
            loadmsg()
          }else if (chkBox.checked == false) {
            var checkbox_off = document.getElementById("autousbbox").checked = false
            localStorage.setItem("CheckBox1", checkbox_off)
            ShowMSG = "Auto USB for ESP8266 OFF!"
            loadmsg()
          }
        }



        function load_platinum() {
            ShowMSG = "Loading PlatinumHEN 2.0b!"
            loadmsg()
            PLfile = "henplatinum2.bin"
            setTimeout(loadBIN, 0)
        }
        function load_goldhen2b2() {
            ShowMSG = "Loading GoldHEN 2.2.5b6!"
            loadmsg()
            PLfile = "goldhen_2.2.5b6.bin"
            setTimeout(loadBIN, 0)
        }


        function load_gtabeef138() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "BeefQueefMod138.bin"
            loadBIN()
        }function load_wildemodz13816() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "expulsion138.bin"
            loadBIN()
        }function load_expulsion138() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "expulsion138.bin"
            loadBIN()
        }
        function load_rdr2129() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "OystersMenu129.bin"
            loadBIN()
        }
        function load_otoolbox() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "OrbisToolbox.bin"
            loadBIN()
        }
        function load_pkg() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "pkgbackup.bin"
            loadBIN()
        }
        function load_dumper() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "gamedumper.bin"
            loadBIN()
        }
        function load_webrte() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "webrte.bin"
            loadBIN()
        }
        function load_cacheinstall2() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "backup.bin"
            loadBIN()
        }
        function load_cacheinstall() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "restore.bin"
            loadBIN()
        }
        function load_linux4gb() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "linux4gbPhat.bin"
            loadBIN()
        }
        function load_linux4gbp() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "linux4gbpro.bin"
            loadBIN()
        }
        function ftp() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "ftp.bin"
            loadBIN()
        }
        function ftp() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "ftp.bin"
            loadBIN()
        }
        function ftp() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "ftp.bin"
            loadBIN()
        }
        function ftp() {
            ShowMSG = "Please wait...Sending Payload!"
            loadmsg()
            PLfile = "ftp.bin"
            loadBIN()
        }