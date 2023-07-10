const data = [
    {
        id: 1,
        type: 'car',
        brand: 'Audi',
        doors: 4,
        price: 4300000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
    },
    {
        id: 2,
        type: 'car',
        brand: 'Mercedes-Benz',
        doors: 4,
        price: 2800000,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
    },
    {
        id: 3,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 210,
        price: 1300000,
        image: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg'
    },
    {
        id: 4,
        type: 'bike',
        brand: 'Harley-Davidson',
        maxSpeed: 220,
        price: 1400000,
        image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
    }
];

class Transport {
    constructor(price, brand, image) {
        this.type = null;
        this.price = price;
        this.brand = brand;
        this.image = image;
    }

    getInfo() {
        return {
            type: this.type,
            brand: this.brand,
            image: this.image,}
    }

    getPrice() {
        return this.price;
    }
}

class Car extends Transport {
    constructor(price, brand, image, doors) {
        super(price, brand, image);
        this.type = 'car';
        this.doors = doors;
    }

    getDoorsCount() {
        return this.doors;
    }
}

class Bike extends Transport {
    constructor(price, brand, image, maxSpeed) {
        super(price, brand, image);
        this.type = 'bike';
        this.maxSpeed = maxSpeed;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }
}

const arrayCars = [];
const arrayBikes = [];


for (el of data) {
    if (el.type === 'car') arrayCars.push(new Car(el.price, el.brand, el.image, el.doors));
    if (el.type === 'bike') arrayBikes.push(new Bike(el.price, el.brand, el.image, el.maxSpeed));
}

function renderElement(el, parent) {
    const container = document.createElement('div');
    container.classList.add('container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
    const image = document.createElement('img');
    image.src = el.getInfo().image;
    image.classList.add('img');
    imageContainer.appendChild(image);
    container.appendChild(imageContainer);

    const description = document.createElement('p');
    description.innerText = `${el.getInfo().brand}\nPrice: ${el.getPrice()}$`;
    container.appendChild(description);

    const extra = document.createElement('span');
    if (el.type === 'car') extra.textContent = `Doors: ${el.getDoorsCount()}`;
    if (el.type === 'bike') extra.textContent = `Speed: ${el.getMaxSpeed()} km/h`;
    description.appendChild(extra);

    parent.appendChild(container);
}

arrayCars.forEach(el => renderElement(el, document.getElementById('car')));
arrayBikes.forEach(el => renderElement(el, document.getElementById('bike')));