let url ="./data.json"
const myCv = document.querySelector(".education");
const myCv2 = document.querySelector(".education2");
const cvBtn = document.querySelector(".cvKnapp");
const content = document.querySelector(".content");
const educationContent = document.querySelector(".educationContent");
async function myResume(){
    let response = await fetch(url);

    if(response.ok){
        
         
        let data = await response.json();
        let resume = data.mittCV;
        let education = data.education;
        console.log(data);
        for(i=0; i<resume.length; i++){
            const myTitles = document.createElement("h1");
            const myOccupations = document.createElement("h2");
            const descr = document.createElement("p");
            myTitles.textContent = resume[i].name;
            myOccupations.textContent = resume[i].occupation + ' | ' + resume[i].period;
            descr.textContent =' - ' + resume[i].desc;
            
            
            
            console.log(myTitles);
            content.appendChild(myTitles);
            content.appendChild(myOccupations);
            content.appendChild(descr);
        }
        for(i=0; i<education.length; i++){
            const myEducation = document.createElement("h1");
            const eduPeriod = document.createElement("h2");
            const eduDesc = document.createElement("p");
            myEducation.textContent = education[i].name;
            eduPeriod.textContent = education[i].period;
            eduDesc.textContent = ' - ' + education[i].desc;
            
            educationContent.appendChild(myEducation);
            educationContent.appendChild(eduPeriod);
            educationContent.appendChild(eduDesc);
            
        }
        //hämta vald data (objekt, array)
        
        //Lägg till i DOM:en efter preferenser

        console.log("async function");
    }else {
        console.log("HTTP-Error: " + response.status);
    
    }
    
}
//cvBtn.addEventListener('click',myResume);
myResume();
