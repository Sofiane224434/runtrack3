function jsonValueKey(jsonString, key) {
    const jsonObject = JSON.parse(jsonString);
    return jsonObject[key];
}

const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

const value = jsonValueKey(jsonString, "city");
console.log(value); 