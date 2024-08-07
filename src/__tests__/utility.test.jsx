const { sortByField } = require('../utility/utility');

// Mock data for testing
describe('utility function', () => {
    const data= JSON.parse(`[
        {
            "customer_id": "C00004",
            "reward": 5550,
            "customer_name": "Vignesh",
            "month": "June",
            "year": 2024
        },
        {
            "customer_id": "C00003",
            "reward": 2185,
            "customer_name": "Francis",
            "month": "June",
            "year": 2024
        },
        {
            "customer_id": "C00002",
            "reward": 4340,
            "customer_name": "Durga",
            "month": "June",
            "year": 2024
        },
        {
            "customer_id": "C00001",
            "reward": 3830,
            "customer_name": "Lakshmi",
            "month": "June",
            "year": 2024
        }
    ]`)
const data1 = JSON.parse(`[
    {
        "key": "C00004-2024-5",
        "reward": 650,
        "customer_id": "C00004",
        "customer_name": "Vignesh",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00003-2024-5",
        "reward": 235,
        "customer_id": "C00003",
        "customer_name": "Francis",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00002-2024-5",
        "reward": 1810,
        "customer_id": "C00002",
        "customer_name": "Durga",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00001-2024-5",
        "reward": 1410,
        "customer_id": "C00001",
        "customer_name": "Lakshmi",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00004-2024-6",
        "reward": 4900,
        "customer_id": "C00004",
        "customer_name": "Vignesh",
        "month": "June",
        "year": 2024
    },
    {
        "key": "C00001-2024-6",
        "reward": 2420,
        "customer_id": "C00001",
        "customer_name": "Lakshmi",
        "month": "June",
        "year": 2024
    },
    {
        "key": "C00003-2024-6",
        "reward": 1950,
        "customer_id": "C00003",
        "customer_name": "Francis",
        "month": "June",
        "year": 2024
    },
    {
        "key": "C00002-2024-6",
        "reward": 2530,
        "customer_id": "C00002",
        "customer_name": "Durga",
        "month": "June",
        "year": 2024
    }
]`)

const data2 = JSON.parse(`[
    {
        "transaction_id": "TXN085",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Surface Tablet",
        "price": 100,
        "purchased_date": "2024-03-01",
        "reward": 50,
        "month": 3,
        "year": 2024,
        "key": "C00001-2024-3"
    },
    {
        "transaction_id": "TXN048",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Coffee Maker",
        "price": 1120,
        "purchased_date": "2024-03-03",
        "reward": 2090,
        "month": 3,
        "year": 2024,
        "key": "C00002-2024-3"
    },
    {
        "transaction_id": "TXN050",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Microwave",
        "price": 150,
        "purchased_date": "2024-03-12",
        "reward": 150,
        "month": 3,
        "year": 2024,
        "key": "C00004-2024-3"
    },
    {
        "transaction_id": "TXN001",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Laptop",
        "price": 1200,
        "purchased_date": "2024-03-15",
        "reward": 2250,
        "month": 3,
        "year": 2024,
        "key": "C00002-2024-3"
    },
    {
        "transaction_id": "TXN051",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Oven",
        "price": 400,
        "purchased_date": "2024-03-17",
        "reward": 650,
        "month": 3,
        "year": 2024,
        "key": "C00003-2024-3"
    },
    {
        "transaction_id": "TXN002",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Smartphone",
        "price": 800,
        "purchased_date": "2024-03-18",
        "reward": 1450,
        "month": 3,
        "year": 2024,
        "key": "C00003-2024-3"
    },
    {
        "transaction_id": "TXN052",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Refrigerator",
        "price": 1200,
        "purchased_date": "2024-03-20",
        "reward": 2250,
        "month": 3,
        "year": 2024,
        "key": "C00002-2024-3"
    },
    {
        "transaction_id": "TXN053",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Washing Machine",
        "price": 800,
        "purchased_date": "2024-03-24",
        "reward": 1450,
        "month": 3,
        "year": 2024,
        "key": "C00001-2024-3"
    },
    {
        "transaction_id": "TXN003",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Headphones",
        "price": 150,
        "purchased_date": "2024-03-25",
        "reward": 150,
        "month": 3,
        "year": 2024,
        "key": "C00002-2024-3"
    },
    {
        "transaction_id": "TXN054",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Dryer",
        "price": 700,
        "purchased_date": "2024-03-27",
        "reward": 1250,
        "month": 3,
        "year": 2024,
        "key": "C00004-2024-3"
    },
    {
        "transaction_id": "TXN055",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Dishwasher",
        "price": 600,
        "purchased_date": "2024-04-01",
        "reward": 1050,
        "month": 4,
        "year": 2024,
        "key": "C00003-2024-4"
    },
    {
        "transaction_id": "TXN004",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Tablet",
        "price": 300,
        "purchased_date": "2024-04-05",
        "reward": 450,
        "month": 4,
        "year": 2024,
        "key": "C00004-2024-4"
    },
    {
        "transaction_id": "TXN056",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Air Conditioner",
        "price": 500,
        "purchased_date": "2024-04-06",
        "reward": 850,
        "month": 4,
        "year": 2024,
        "key": "C00002-2024-4"
    },
    {
        "transaction_id": "TXN018",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "External Hard Drive",
        "price": 95,
        "purchased_date": "2024-04-08",
        "reward": 45,
        "month": 4,
        "year": 2024,
        "key": "C00004-2024-4"
    },
    {
        "transaction_id": "TXN005",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Smartwatch",
        "price": 200,
        "purchased_date": "2024-04-10",
        "reward": 250,
        "month": 4,
        "year": 2024,
        "key": "C00001-2024-4"
    },
    {
        "transaction_id": "TXN057",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Heater",
        "price": 200,
        "purchased_date": "2024-04-11",
        "reward": 250,
        "month": 4,
        "year": 2024,
        "key": "C00001-2024-4"
    },
    {
        "transaction_id": "TXN019",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Portable Speaker",
        "price": 70,
        "purchased_date": "2024-04-15",
        "reward": 20,
        "month": 4,
        "year": 2024,
        "key": "C00003-2024-4"
    },
    {
        "transaction_id": "TXN058",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Fan",
        "price": 100,
        "purchased_date": "2024-04-16",
        "reward": 50,
        "month": 4,
        "year": 2024,
        "key": "C00004-2024-4"
    },
    {
        "transaction_id": "TXN020",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Webcam",
        "price": 60,
        "purchased_date": "2024-04-19",
        "reward": 10,
        "month": 4,
        "year": 2024,
        "key": "C00002-2024-4"
    },
    {
        "transaction_id": "TXN059",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Water Heater",
        "price": 300,
        "purchased_date": "2024-04-20",
        "reward": 450,
        "month": 4,
        "year": 2024,
        "key": "C00003-2024-4"
    },
    {
        "transaction_id": "TXN006",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Laptop",
        "price": 1100,
        "purchased_date": "2024-04-22",
        "reward": 2050,
        "month": 4,
        "year": 2024,
        "key": "C00003-2024-4"
    },
    {
        "transaction_id": "TXN061",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Vacuum Cleaner",
        "price": 250,
        "purchased_date": "2024-04-28",
        "reward": 350,
        "month": 4,
        "year": 2024,
        "key": "C00001-2024-4"
    },
    {
        "transaction_id": "TXN022",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Memory Card",
        "price": 80,
        "purchased_date": "2024-04-29",
        "reward": 30,
        "month": 4,
        "year": 2024,
        "key": "C00004-2024-4"
    },
    {
        "transaction_id": "TXN007",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Monitor",
        "price": 250,
        "purchased_date": "2024-05-03",
        "reward": 350,
        "month": 5,
        "year": 2024,
        "key": "C00004-2024-5"
    },
    {
        "transaction_id": "TXN023",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Laptop Bag",
        "price": 85,
        "purchased_date": "2024-05-04",
        "reward": 35,
        "month": 5,
        "year": 2024,
        "key": "C00003-2024-5"
    },
    {
        "transaction_id": "TXN008",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Keyboard",
        "price": 120,
        "purchased_date": "2024-05-11",
        "reward": 90,
        "month": 5,
        "year": 2024,
        "key": "C00001-2024-5"
    },
    {
        "transaction_id": "TXN065",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Rug",
        "price": 100,
        "purchased_date": "2024-05-11",
        "reward": 50,
        "month": 5,
        "year": 2024,
        "key": "C00001-2024-5"
    },
    {
        "transaction_id": "TXN025",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Microphone",
        "price": 70,
        "purchased_date": "2024-05-12",
        "reward": 20,
        "month": 5,
        "year": 2024,
        "key": "C00001-2024-5"
    },
    {
        "transaction_id": "TXN066",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Curtains",
        "price": 150,
        "purchased_date": "2024-05-15",
        "reward": 150,
        "month": 5,
        "year": 2024,
        "key": "C00004-2024-5"
    },
    {
        "transaction_id": "TXN026",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Camera Lens",
        "price": 150,
        "purchased_date": "2024-05-17",
        "reward": 150,
        "month": 5,
        "year": 2024,
        "key": "C00004-2024-5"
    },
    {
        "transaction_id": "TXN067",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Blinds",
        "price": 120,
        "purchased_date": "2024-05-18",
        "reward": 90,
        "month": 5,
        "year": 2024,
        "key": "C00003-2024-5"
    },
    {
        "transaction_id": "TXN009",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Mouse",
        "price": 130,
        "purchased_date": "2024-05-20",
        "reward": 110,
        "month": 5,
        "year": 2024,
        "key": "C00002-2024-5"
    },
    {
        "transaction_id": "TXN068",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Bed",
        "price": 900,
        "purchased_date": "2024-05-22",
        "reward": 1650,
        "month": 5,
        "year": 2024,
        "key": "C00002-2024-5"
    },
    {
        "transaction_id": "TXN027",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Printer",
        "price": 130,
        "purchased_date": "2024-05-23",
        "reward": 110,
        "month": 5,
        "year": 2024,
        "key": "C00003-2024-5"
    },
    {
        "transaction_id": "TXN069",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Sofa",
        "price": 700,
        "purchased_date": "2024-05-26",
        "reward": 1250,
        "month": 5,
        "year": 2024,
        "key": "C00001-2024-5"
    },
    {
        "transaction_id": "TXN028",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Scanner",
        "price": 100,
        "purchased_date": "2024-05-27",
        "reward": 50,
        "month": 5,
        "year": 2024,
        "key": "C00002-2024-5"
    },
    {
        "transaction_id": "TXN010",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Laptop",
        "price": 900,
        "purchased_date": "2024-06-01",
        "reward": 1650,
        "month": 6,
        "year": 2024,
        "key": "C00004-2024-6"
    },
    {
        "transaction_id": "TXN029",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Router",
        "price": 120,
        "purchased_date": "2024-06-05",
        "reward": 90,
        "month": 6,
        "year": 2024,
        "key": "C00001-2024-6"
    },
    {
        "transaction_id": "TXN074",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Desk",
        "price": 300,
        "purchased_date": "2024-06-06",
        "reward": 450,
        "month": 6,
        "year": 2024,
        "key": "C00004-2024-6"
    },
    {
        "transaction_id": "TXN011",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Smartphone",
        "price": 750,
        "purchased_date": "2024-06-07",
        "reward": 1350,
        "month": 6,
        "year": 2024,
        "key": "C00001-2024-6"
    },
    {
        "transaction_id": "TXN075",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Wardrobe",
        "price": 400,
        "purchased_date": "2024-06-08",
        "reward": 650,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN030",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Desktop PC",
        "price": 900,
        "purchased_date": "2024-06-10",
        "reward": 1650,
        "month": 6,
        "year": 2024,
        "key": "C00004-2024-6"
    },
    {
        "transaction_id": "TXN039",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Smart Lock",
        "price": 150,
        "purchased_date": "2024-06-11",
        "reward": 150,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN076",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Mattress",
        "price": 600,
        "purchased_date": "2024-06-11",
        "reward": 1050,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    },
    {
        "transaction_id": "TXN040",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Smart Doorbell",
        "price": 200,
        "purchased_date": "2024-06-13",
        "reward": 250,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    },
    {
        "transaction_id": "TXN031",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Gaming Console",
        "price": 400,
        "purchased_date": "2024-06-14",
        "reward": 650,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN012",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Headphones",
        "price": 150,
        "purchased_date": "2024-06-15",
        "reward": 150,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN041",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Action Camera",
        "price": 250,
        "purchased_date": "2024-06-15",
        "reward": 350,
        "month": 6,
        "year": 2024,
        "key": "C00001-2024-6"
    },
    {
        "transaction_id": "TXN042",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Electric Toothbrush",
        "price": 100,
        "purchased_date": "2024-06-18",
        "reward": 50,
        "month": 6,
        "year": 2024,
        "key": "C00004-2024-6"
    },
    {
        "transaction_id": "TXN079",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Duvet",
        "price": 100,
        "purchased_date": "2024-06-18",
        "reward": 50,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN032",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "VR Headset",
        "price": 300,
        "purchased_date": "2024-06-19",
        "reward": 450,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    },
    {
        "transaction_id": "TXN033",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Fitness Tracker",
        "price": 150,
        "purchased_date": "2024-06-20",
        "reward": 150,
        "month": 6,
        "year": 2024,
        "key": "C00001-2024-6"
    },
    {
        "transaction_id": "TXN080",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Quilt",
        "price": 70,
        "purchased_date": "2024-06-20",
        "reward": 20,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    },
    {
        "transaction_id": "TXN034",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Drone",
        "price": 500,
        "purchased_date": "2024-06-22",
        "reward": 850,
        "month": 6,
        "year": 2024,
        "key": "C00004-2024-6"
    },
    {
        "transaction_id": "TXN044",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Blender",
        "price": 60,
        "purchased_date": "2024-06-24",
        "reward": 10,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    },
    {
        "transaction_id": "TXN035",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Smart Thermostat",
        "price": 200,
        "purchased_date": "2024-06-25",
        "reward": 250,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN045",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Vacuum Cleaner",
        "price": 300,
        "purchased_date": "2024-06-26",
        "reward": 450,
        "month": 6,
        "year": 2024,
        "key": "C00001-2024-6"
    },
    {
        "transaction_id": "TXN036",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Electric Scooter",
        "price": 400,
        "purchased_date": "2024-06-27",
        "reward": 650,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    },
    {
        "transaction_id": "TXN037",
        "customer_name": "Lakshmi",
        "customer_id": "C00001",
        "purchased_product": "Wireless Earbuds",
        "price": 80,
        "purchased_date": "2024-06-28",
        "reward": 30,
        "month": 6,
        "year": 2024,
        "key": "C00001-2024-6"
    },
    {
        "transaction_id": "TXN046",
        "customer_name": "Vignesh",
        "customer_id": "C00004",
        "purchased_product": "Air Purifier",
        "price": 200,
        "purchased_date": "2024-06-29",
        "reward": 250,
        "month": 6,
        "year": 2024,
        "key": "C00004-2024-6"
    },
    {
        "transaction_id": "TXN047",
        "customer_name": "Francis",
        "customer_id": "C00003",
        "purchased_product": "Water Filter",
        "price": 100,
        "purchased_date": "2024-06-30",
        "reward": 50,
        "month": 6,
        "year": 2024,
        "key": "C00003-2024-6"
    },
    {
        "transaction_id": "TXN084",
        "customer_name": "Durga",
        "customer_id": "C00002",
        "purchased_product": "Bathrobe",
        "price": 125,
        "purchased_date": "2024-06-30",
        "reward": 100,
        "month": 6,
        "year": 2024,
        "key": "C00002-2024-6"
    }
]`)

//const sortedByReward = JSON.parse(``)
const sortedByCustName = JSON.parse(`[
    {
        "key": "C00002-2024-5",
        "reward": 1810,
        "customer_id": "C00002",
        "customer_name": "Durga",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00002-2024-6",
        "reward": 2530,
        "customer_id": "C00002",
        "customer_name": "Durga",
        "month": "June",
        "year": 2024
    },
    {
        "key": "C00003-2024-5",
        "reward": 235,
        "customer_id": "C00003",
        "customer_name": "Francis",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00003-2024-6",
        "reward": 1950,
        "customer_id": "C00003",
        "customer_name": "Francis",
        "month": "June",
        "year": 2024
    },
    {
        "key": "C00001-2024-5",
        "reward": 1410,
        "customer_id": "C00001",
        "customer_name": "Lakshmi",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00001-2024-6",
        "reward": 2420,
        "customer_id": "C00001",
        "customer_name": "Lakshmi",
        "month": "June",
        "year": 2024
    },
    {
        "key": "C00004-2024-5",
        "reward": 650,
        "customer_id": "C00004",
        "customer_name": "Vignesh",
        "month": "May",
        "year": 2024
    },
    {
        "key": "C00004-2024-6",
        "reward": 4900,
        "customer_id": "C00004",
        "customer_name": "Vignesh",
        "month": "June",
        "year": 2024
    }
]`)
//const sortedByPurDate = JSON.parse(``)
it('sortByField', () => {
   const type = "";
   const fieldName = "reward";
    const sortedTotal = sortByField(data, fieldName, type);
    const sortedCustomerName = sortByField(data1, "customer_name", "string")
    expect(sortedByCustName).toStrictEqual(sortedCustomerName); 
});
})