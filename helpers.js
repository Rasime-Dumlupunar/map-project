//* tipi analiz edip ona göre fonksiyonun çağrıldığı yere
//* tipe denk gelen açıklamayı gönderir.

export const detecType = (type) => {
    switch (type) {
        case "park":            
            return "Park Yeri";
        case "home":            
            return "Ev";
        case "job":            
            return "İş";
        case "goto":            
            return "Ziyaret";
    }
};
// Local Storage 1 güncelleyecek fonsiyon  
export const setStorage = (data) =>{
    // veriyi locale göndermek için stringe çevirme
    const strData =  JSON.stringify(data);
    // localstorage veriyi gönderdik.
    localStorage.setItem("notes", strData);
};

var carIcon = L.icon({
    iconUrl: "car.png",
    iconSize: [50, 60],   
});
var homeIcon = L.icon({
    iconUrl: "home-marker.png",
    iconSize:[50, 60],
});
var jobIcon = L.icon({
    iconUrl: "job.png",
    iconSize:[50, 60],
});
var visitIcon = L.icon({
    iconUrl: "visit.png",
    iconSize:[50, 60],
});

export const detecIcon = (type) => {
    switch (type) {
    case "park":
        return carIcon;
    case "home":
        return homeIcon;
    case "job":
        return jobIcon;
    case "goto":
        return visitIcon;
    }
};