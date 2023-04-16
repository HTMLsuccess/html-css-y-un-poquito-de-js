var users = [ 
    { 
        name: 'Jhon',
        gender: 'M',
        hobby: 'pets',
        avatar: 'avatar0.jpg'
    },
    { 
        name: 'Park',
        gender: 'M',
        hobby: 'Games',
        avatar: 'avatar1.jpg'
    },
    { 
        name: 'Dabi',
        gender: 'M',
        hobby: 'movies',
        avatar: 'avatar2.jpg'
    },
    { 
        name: 'Lulu',
        gender: 'F',
        hobby: 'movies',
        avatar: 'avatar3.jpg'
    },
    { 
        name: 'ochako',
        gender: 'F',
        hobby: 'movies',
        avatar: 'avatar4.jpg'
    },
    { 
        name: 'Fin',
        gender: 'M',
        hobby: 'sports',
        avatar: 'avatar5.jpg'
    },
    { 
        name: 'Rey',
        gender: 'M',
        hobby: 'sport',
        avatar: 'avatar6.jpg'
    },
    { 
        name: 'Derflin',
        gender: 'M',
        hobby: 'Games',
        avatar: 'avatar7.jpg'
    },
    { 
        name: 'Sory',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar8.jpg'
    },
    { 
        name: 'Marcos',
        gender: 'M',
        hobby: 'Games',
        avatar: 'avatar9.jpg'
    },
    { 
        name: 'Mei',
        gender: 'F',
        hobby: 'pets',
        avatar: 'avatar10.jpg'
    },

];


window.addEventListener('load' , function() { 

    function search() {   
        
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
 
        //get gender
        var genderField = document.getElementById('gender');
        var selected = genderField.selectedIndex;
        var gender = genderField.options[selected].value;
        console.log(gender);
 
        var resultsHTML = '';
        var numUsers = users.length;
 
        for (var i = 0;  i < numUsers; i++) {

            if (gender == 'A' || gender == users[i].gender) {
                
               if (hobby == '' || hobby == users[i].hobby) {
    


            resultsHTML += '<div class= "person-row">\
            <img src="./Avatares/' + users[i].avatar + '" />\
            <div class="person-info">\
            <div>' + users[i].name + '</div>\
            <div>' + users[i].hobby + '</div></div>\
             <button>Add as friend</button></div>';
 
               }

            }
        
        }
        results.innerHTML = resultsHTML;
    }

        
        var results = document.getElementById('results');
        var searchBtn = document.getElementById('searchBtn');
        searchBtn.addEventListener('click', search );

            
}); 