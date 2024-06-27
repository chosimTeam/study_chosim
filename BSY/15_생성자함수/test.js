function cafe (menu, price) {
    // this = {};
    
    this.menu = menu;
    this.price = price;
    this.serve = function () {
        console.log(`주문하신 ${menu}가 준비되었습니다. 가격은 ${price}원 입니다.`);
    };
    // return this;
}

const order_1 = new cafe("에스프레소", 3000);
const order_2 = new cafe("카푸치노", 5000);
const order_3 = new cafe("라떼", 6000);

console.log(order_1, order_2, order_3);

order_1.serve();