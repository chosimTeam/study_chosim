const order = 5;
let result;

switch (order) {
    case 1 :
        result = 'Americano';
        break;
    case 2 :
        result = 'Cappuccino';
        break;
    case 3 :
        result = 'Latte';
        break;

    case 4 :  case 5 :
        result = 'Water';   
        break;

    default :
        result = "error";
}

console.log(result);