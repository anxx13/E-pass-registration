var citiesByState = {
AP: [ "Anantapur","Chittoor","East Godavari","Guntur","Krishna","Kurnool","S.P.S. Nellore","Prakasam","Srikakulam","Visakhapatnam","Vizianagaram","West Godavari","Y.S.R. Kadapa"],
AR: ["Anjaw","Changlang","East Kameng","East Siang","Kamle","Kurung Kumey","Lohit","Longding","Lower Dibang Valley","Lower Siang","Lower Subansiri","Namsai","Papum Pare","Shi Yomi","Siang","Tawang","Tirap","Upper Dibang Valley","Upper Siang","Upper Subansiri","West Kameng","West Siang"],
BR: ["Araria","Arwal","Aurangabad","Banka","Begusarai","Bhagalpur","Bhojpur","Buxar","Darbhanga","East Champaran",
     "Gaya","Gopalganj","Jamui","Jehanabad","Kaimur","Katihar","Khagaria","Kishanganj","Lakhisarai","Madhepura",
     "Muzaffarpur","Nalanda","Nawada","Patna","Purnia","Rohtas","Saharsa","Samastipur","Saran",
     "Sheikhpura","Sheohar","Sitamarhi","Siwan","Supaul","Vaishali","West Champaran"],
CH: ["Chandigarh"],
CT: ["Balod","Baloda Bazar","Balrampur","Bastar","Bemetara","Bijapur","Bilaspur","Dakshin Bastar Dantewada","Dhamtari","Durg", "Gariaband","Janjgir Champa",
     "Jashpur","Kabeerdham","Kondagaon","Korba","Koriya","Mahasamund","Mungeli","Narayanpur","Raigarh","Raipur","Rajnandgaon","Sukma",
     "Surajpur","Surguja","Uttar Bastar Kanker"],
DL: ["Delhi"],
DN: ["Dadra and Nagar Haveli","Daman","Diu"],
GJ: ["Ahmedabad","Aravalli","Bhavnagar","Chhota Udaipur","Devbhumi Dwarka","Gandhinagar","Gir Somnath",
     "Narmada","Panchmahal","Porbandar","Rajkot","Surat","Tapi","Vadodara"
    ],
HP: ["Bilaspur","Chamba","Kullu","Shimla","Una"],
HR: ["Ambala","Faridabad","Fatehabad","Hisar","Kurukshetra","Palwal","Panipat","Yamunanagar"],
JH: ["Ranchi","Bokaro","Dumka","Garhwa","Hazaribagh","Khunti","Pakur",],
JK: ["Srinagar","Jammu","Bandipora","Kishtwar","Punch","Udhampur"],
KA: ["Bengaluru Rural","Bengaluru Urban","Mysuru","Raichur","Bidar","Chikkaballapura","Dakshina Kannada","Davanagere","Hassan","Haveri","Udupi","Uttara Kannada","Yadgir"],
KL: ["Thiruvananthapuram",Ernakulam,"Kannur",Kollam,"Malappuram","Wayanad"],
LD: ["Lakshadweep"],
MH: ["Ahmednagar","Amravati","Aurangabad","Bhandara","Mumbai","Nagpur","Nashik","Pune","Solapur","Thane"],
//TG: ["Adilabad","Bhadradri Kothagudem","Hyderabad","Jagtial","Jangaon","Jayashankar Bhoopalpally",
//     "Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Komaram Bheem Asifabad","Mahabubabad",
//     "Mahabubnagar","Mancherial","Medak","Medchal","Nagarkurnool","Nalgonda","Nirmal","Nizamabad",
//     "Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad",
//     "Wanaparthy","Warangal (Rural)","Warangal (Urban)","Yadadri Bhuvanagiri"
//     ],
}
function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
        for(cityId in citiesByState[value]) {
        citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
        }
        document.getElementById("citySelect").innerHTML = citiesOptions;
    }
}
function resetSelection() {
    document.getElementById("countrySelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
}
function makeSubmenu1(value) {
    if(value.length==0) document.getElementById("citySelect1").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for(cityId in citiesByState[value]) {
            citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
        }
        document.getElementById("citySelect1").innerHTML = citiesOptions;
    }
}
function resetSelection1() {
    document.getElementById("countrySelect1").selectedIndex = 0;
    document.getElementById("citySelect1").selectedIndex = 0;
}
