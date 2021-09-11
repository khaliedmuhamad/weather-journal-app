/* Global Variables */
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?',
      apiKey = '6540ef511a113fdb6d2d31fc378cc985',
      zipInput = document.getElementById("zip"),
      btt = document.getElementById("generate"),
      infocontainer = document.getElementById("entryHolder");
     



      
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Event listener to add function to existing HTML DOM element


/* Function called by event listener */


/* Function to GET Web API Data*/
const getWeather = async (zip) => {
    const request = await fetch(`${apiUrl}zip=${zip}&units=metric&appid=${apiKey}`)
    try {
        const newData = await request.json();
         console.log('temp',newData.main.temp)
        let temer = newData.main.temp;
        return temer;
    } catch (e) {
        return console.log("err get weather", e)
    }
}

/* update function */
const updateUi = async (data) => {
    return    data.slice(4 ,10).map(el => {     
            `
            <div id = "container">
            <div id = "zip">zip code:📅 ${el.zip}</div> 
            <div id = "date">date:📅 ${el.date}</div> 
            <div id = "temp">temperture:🥵 ${el.temperture}</div>
            <div id = "content">feel:🎃 ${el.feeling}</div>
            </div>
            `
        })
}
/* generate function */
const getData = async () => {
        const request = await fetch('/idea');
    try { 
        let data = await request.json();
        console.log(data);
        return data;
    } catch (err) { 
      return console.log("error from GET  app.js >>>>", err) ;
    }
}

btt.addEventListener('click',async (e) =>{
    const feelingInput = document.getElementById("feelings").value;

     if(!zipInput.value) {
        alert("please write the zip code for you")
    }else{
        e.preventDefault();
        var zKey =  zipInput.value;
    getWeather(zKey).then(data =>{
    postData('/idea', {
        zip:zKey,
        date:newDate,
        temperture:data,
        feeling:feelingInput
    })}).then(getData).then(data =>{ 
        
         data.map((el) => {  
            infocontainer.innerHTML = `
            <div id = "container">
            <div id = "zip">zip code:🌍 ${el.zip}</div> 
            <div id = "date">date:📅 ${el.date}</div> 
            <div id = "temp">temperture:🥵 ${el.temperture}</div>
            <div id = "content">feel:🎃 ${el.feeling}</div>
            </div>
            `
        });
 })
                                                                                                     
}});
/* Function to POST data */
const postData = async (url = "", data = {}) => {
    await fetch(url,{
        "method":"POST",
        "credentials":"same-origin",
        "headers":{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(data)
    })
    try { 
        const response = await response.json();
        console.log(response);
        return response;
    } catch (err) { 
        return console.log("error from post app.js", err) 
    }
}

/* Function to GET Project Data */



/* algorathms */




