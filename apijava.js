const baseURL = 'https://api.spacexdata.com/v2/rockets';

 const searchForm = document.querySelector('form');
 const spaceShips = document.querySelector('.api');

 const btn = document.querySelector('.button1');
 const btnone = document.querySelector('.button2');
 const btntwo = document.querySelector('.button3');
 const btnthree = document.querySelector ('.button4');






btnthree.addEventListener('click', Falcon);

btntwo.addEventListener('click', Falcon);

btnone.addEventListener('click', Falcon);

btn.addEventListener('click', Falcon);




function Falcon(e){
    e.preventDefault();
    fetch(baseURL)
        .then(result => {
           // console.log(result);
            return result.json();
        })
        .then(json =>{
             {
                 console.log(json);

                    if(e.target==btn){
                        displayRockets(json[0]);
                    }else if(e.target==btnone){
                        displayRockets(json[1]);
                    }else if (e.target==btntwo){
                        displayRockets(json[2]);
                    }else if (e.target==btnthree) {
                        displayRockets(json[3]);
                    }
                



               // displayRockets(json[0]); // display results is called
              }
           // console.log(json);
            //console.log(json);
            //console.log(json[0]);
            console.log(json[0].name);
        })
}






// fetchSpace();

 function displayRockets(json){
         console.log('Results:', json);
         console.log('name', json.name);

         while (spaceShips.firstChild) { 
            spaceShips.removeChild(spaceShips.firstChild); 
          }

  
         let rocket = document.createElement('h1');
             rocket.innerText = json.name;
             spaceShips.appendChild(rocket);

             let cost = document.createElement('p');
             cost.innerText = 'Cost Per Launch: ' + '$' + json.cost_per_launch;
             spaceShips.appendChild(cost);

             let success = document.createElement('p');
             success.innerText = 'Success Rate Percentage: ' + json.success_rate_pct + '%';
             spaceShips.appendChild(success);


             let mass = document.createElement('p');
             mass.innerText = 'Mass: ' + json.mass.lb +' lb';
             spaceShips.appendChild(mass);

             let tall = document.createElement('p');
             tall.innerText = 'Height: ' + json.height.feet +' feet';
             spaceShips.appendChild(tall);

             let noe = document.createElement('p');
             noe.innerText = 'Number of Engines: ' + json.engines.number;
             spaceShips.appendChild(noe);

  
    }
     
