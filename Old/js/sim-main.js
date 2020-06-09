var publicWoWSpreadsheet = 'https://docs.google.com/spreadsheets/d/1MBf8yFVXd6jt9378Sp9ILK10yJ7TaaGahJKyR6UgVPw/edit?usp=sharing';

    function init() {
        Tabletop.init( {
          key: publicWoWSpreadsheet,
          callback: showInfo,
          simpleSheet: true 
        });
    }

    function showInfo(data, tabletop){
        /* Pull in DPS and create elements to display it */
        data.forEach(function (data){
            var header = document.querySelector('.header');
            var newDamageDiv = document.createElement('h2');
            header.append(newDamageDiv);
            if(data.DPS != ''){
                newDamageDiv.innerHTML = 'Calculated DPS - ' + data.DPS;
            }
        });
        
        /* Pull in the left side gear and create dropdown for each */
        data.forEach(function LeftGear(data){
            var leftGear = document.querySelector('.left-gear');
            var newSelect = document.createElement('select');
            var defaultOption = document.createElement('option');
            newSelect.classList.add('gear-selects');
            defaultOption.text = data.GearLeft;
            if(data.GearLeft != ''){
                leftGear.appendChild(newSelect);
                newSelect.appendChild(defaultOption);
            };
        });
        
        /* Pull in middle gear */
        data.forEach(function(data){
            var rightGear = document.querySelector('.right-gear');
            var newDiv = document.createElement('div');
            newDiv.classList.add('gear-spacing');
            rightGear.append(newDiv);
            newDiv.innerHTML = data.GearRight;
        });
        
        /* Pull in the right side gear */
        data.forEach(function(data){
            var middleGear = document.querySelector('.middle-gear');
            var newDiv = document.createElement('div');
            newDiv.classList.add('gear-spacing');
            middleGear.append(newDiv);
            newDiv.innerHTML = data.GearMiddle;
        });
    }

window.addEventListener('DOMContentLoaded', init);