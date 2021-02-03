//Classes
class Country {

    //Constant data
    country_name;
    country_code;
    country_long;
    country_lat;

    //Calculated data
    country_connected_countries = [];
    country_pioneers = [];
    country_jobs = [];

    constructor(name, code, long, lat) {
        this.country_name = name;
        this.country_code = code;
        this.country_long = long;
        this.country_lat = lat;
    }
}

class Pioneer {

    pioneer_name;
    pioneer_image;
    pioneer_link;
    pioneer_worked_in = [];
    pioneer_worked_as = [];

    constructor(name, image, link, worked_in, worked_as) {
        this.pioneer_name = name;
        this.pioneer_image = image;
        this.pioneer_link = link;
        this.pioneer_worked_in = worked_in;
        this.pioneer_worked_as = worked_as;
    }
}

//Functions
function createAllCountries(){
    let countries = [];
    countries.push(new Country("Great Britain", "GBR", "955", "360"));
    countries.push(new Country("United States", "USA", "550", "450"));
    countries.push(new Country("Argentina", "ARG", "690", "780"));
    countries.push(new Country("Australia", "AUS", "1600", "750"));
    countries.push(new Country("New Zealand", "NZL", "1685", "835"));
    countries.push(new Country("Austria", "AUT", "1025", "395"));
    countries.push(new Country("China", "CHN", "1400", "450"));
    countries.push(new Country("Germany", "DEU", "1010", "355"));
    countries.push(new Country("Hungary", "HUN", "1045", "395"));
    countries.push(new Country("Brazil", "BRA", "750", "680"));
    countries.push(new Country("Canada", "CAN", "500", "300"));
    countries.push(new Country("Italy", "ITA", "1010", "420"));
    countries.push(new Country("France", "FRA", "970", "400"));
    countries.push(new Country("Chile", "CHL", "645", "845"));
    countries.push(new Country("Japan", "JPN", "1555", "455"));
    countries.push(new Country("Colombia", "COL", "645", "615"));
    countries.push(new Country("Czechoslovakia", "CZE", "1025", "380"));
    countries.push(new Country("Denmark", "DNK", "1000", "330"));
    countries.push(new Country("Norway", "NOR", "990", "290"));
    countries.push(new Country("Sweden", "SWE", "1020", "290"));
    countries.push(new Country("Ireland", "IRL", "925", "355"));
    countries.push(new Country("Finland", "FIN", "1070", "280"));
    countries.push(new Country("Portugal", "PRT", "925", "435"));
    countries.push(new Country("Croatia", "HRV", "1030", "405"));
    countries.push(new Country("Mexico", "MEX", "520", "520"));
    countries.push(new Country("Peru", "PER", "635", "655"));
    countries.push(new Country("Poland", "POL", "1040", "360"));
    countries.push(new Country("Russia and former Soviet Union", "RUS", "1170", "300"));
    countries.push(new Country("Spain", "ESP", "940", "430"));
    countries.push(new Country("The Netherlands", "NLD", "985", "360"));
    countries.push(new Country("The Philippines", "PHL", "1485", "580"));
    countries.push(new Country("Tunisia", "TUN", "1000", "470"));
    countries.push(new Country("Turkey", "TUR", "1120", "440"));

    return countries;
}

function settings_button_onclick(){
    document.cookie = "map_settings_min_year=" + document.getElementById('settings_min_year').value;
    document.cookie = "map_settings_max_year=" + document.getElementById('settings_max_year').value;
    document.cookie = "map_settings_checkbox_unknown=" + document.getElementById('settings_checkbox_unknown').checked;

    location.reload();
}


//Help Functions
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

function image_load_error(){
    document.getElementById('pioneers_ex_image').src = "../Images/Pioneer-Placeholder.png";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }