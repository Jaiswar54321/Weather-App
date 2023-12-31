const submitBtn = document.getElementById("submitBtn");
const cityName =  document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status")
const temp_real_val = document.getElementById("temp_real_val")
const data_hide =document.querySelector('.middle_layer')


const getInfo =async(event)=>{
    event.preventDefault();
    let cityval = cityName.value;
  
if(cityval === " ")
{
    city_name.innerText = `pls write something before searech`;
    data_hide.classList.add('data_hide');
}
else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=ab113b828b5ec4ad4ab07af637fa98b8`;
        const response = await fetch(url);
        const data = await response.json();
        const arrdata = [data];
        city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`;
        temp_real_val.innerText = arrdata[0].main.temp;
        const tempmood = arrdata[0].weather[0].main;


        if(tempmood == "clear")
        {
            temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68;'></i>"; 
        } 
        else if (tempmood == "Clouds")
         {
         temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>"; 
         }
       else if  (tempmood == "Rain") 
       {
        temp_status.innerHTML ="<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
       }
      else {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
          }
          data_hide.classList.remove('data_hide');

    }
   catch{
    city_name.innerText = `City name properly`;
    data_hide.classList.add('data_hide');

    }
   }

}
submitBtn.addEventListener("click", getInfo );

