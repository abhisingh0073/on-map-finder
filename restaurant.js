const restaurantList  = [
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.3812, 21.2103]
        },
        "properties": {
            "name": "Spice Garden",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Sector 10, Bhilai, Chhattisgarh, India",
            "phone": "9876543210",
            "menu": [
                {
                    "name": "Fry Momos",
                    "image": "https://media.istockphoto.com/id/1487745604/photo/white-bread-toasts-with-cream-cheese-avocado-cucumber-and-radish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=rKPTC59VpbNbd7NqaKTwW-fv9KAjlC1h5GsDLMK6jQs=",
                    "price": "80"
                },
                { "name": "Veg Biryani", 
                  "image": "https://media.istockphoto.com/id/1487745604/photo/white-bread-toasts-with-cream-cheese-avocado-cucumber-and-radish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=rKPTC59VpbNbd7NqaKTwW-fv9KAjlC1h5GsDLMK6jQs=",
                  "price": "100"
                },
                { "name": "Paneer Tikka",
                  "image": "https://media.istockphoto.com/id/1487745604/photo/white-bread-toasts-with-cream-cheese-avocado-cucumber-and-radish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=rKPTC59VpbNbd7NqaKTwW-fv9KAjlC1h5GsDLMK6jQs=",     
                  "price": "150" 
                },
                { "name": "Chilli Potato", 
                  "image": "https://media.istockphoto.com/id/1487745604/photo/white-bread-toasts-with-cream-cheese-avocado-cucumber-and-radish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=rKPTC59VpbNbd7NqaKTwW-fv9KAjlC1h5GsDLMK6jQs=",
                  "price": "90" 
                },
                { "name": "Veg Thali",
                  "image": "https://media.istockphoto.com/id/1487745604/photo/white-bread-toasts-with-cream-cheese-avocado-cucumber-and-radish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=rKPTC59VpbNbd7NqaKTwW-fv9KAjlC1h5GsDLMK6jQs=",
                  "price": "120" 
                },
                { "name": "Masala Dosa", 
                  "image": "https://media.istockphoto.com/id/1487745604/photo/white-bread-toasts-with-cream-cheese-avocado-cucumber-and-radish-in-a-plate.jpg?s=2048x2048&w=is&k=20&c=rKPTC59VpbNbd7NqaKTwW-fv9KAjlC1h5GsDLMK6jQs=",
                  "price": "70" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.6333, 21.2510]
        },
        "properties": {
            "name": "Raipur Tandoor",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Pandri Market, Raipur, Chhattisgarh, India",
            "phone": "9871234567",
            "menu": [
                { "name": "Chicken Tandoori", "price": "180" },
                { "name": "Butter Naan", "price": "40" },
                { "name": "Dal Makhani", "price": "120" },
                { "name": "Paneer Butter Masala", "price": "160" },
                { "name": "Lassi", "price": "50" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.5203, 21.1850]
        },
        "properties": {
            "name": "Royal Feast",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Supela, Bhilai, Chhattisgarh, India",
            "phone": "9123456789",
            "menu": [
                { "name": "Shahi Paneer", "price": "160" },
                { "name": "Kadai Mushroom", "price": "140" },
                { "name": "Veg Pulao", "price": "100" },
                { "name": "Roti", "price": "15" },
                { "name": "Gulab Jamun", "price": "40" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.6154, 21.2333]
        },
        "properties": {
            "name": "Biryani House",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Civil Lines, Raipur, Chhattisgarh, India",
            "phone": "7865432109",
            "menu": [
                { "name": "Chicken Biryani", "price": "150" },
                { "name": "Mutton Biryani", "price": "200" },
                { "name": "Veg Biryani", "price": "120" },
                { "name": "Egg Curry", "price": "100" },
                { "name": "Raita", "price": "30" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [81.5301, 21.1755]
        },
        "properties": {
            "name": "Taste of India",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Durg Road, Bhilai, Chhattisgarh, India",
            "phone": "9988776655",
            "menu": [
                { "name": "Pav Bhaji", "price": "80" },
                { "name": "Chole Bhature", "price": "90" },
                { "name": "Rajma Chawal", "price": "100" },
                { "name": "Tandoori Roti", "price": "20" },
                { "name": "Kheer", "price": "50" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [77.1025, 28.7041]
        },
        "properties": {
            "name": "Delhi Spice Hub",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Connaught Place, New Delhi, India",
            "phone": "9999999999",
            "menu": [
                { "name": "Chole Kulche", "price": "70" },
                { "name": "Rajma Rice", "price": "90" },
                { "name": "Butter Chicken", "price": "220" },
                { "name": "Paneer Roll", "price": "80" },
                { "name": "Aloo Tikki", "price": "60" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [72.8777, 19.0760]
        },
        "properties": {
            "name": "Mumbai Bites",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Bandra, Mumbai, Maharashtra, India",
            "phone": "8888888888",
            "menu": [
                { "name": "Vada Pav", "price": "30" },
                { "name": "Misal Pav", "price": "60" },
                { "name": "Bombay Sandwich", "price": "50" },
                { "name": "Sev Puri", "price": "40" },
                { "name": "Falooda", "price": "70" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [80.2707, 13.0827]
        },
        "properties": {
            "name": "Chennai Curry House",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "T Nagar, Chennai, Tamil Nadu, India",
            "phone": "7070106004",
            "menu": [
                { "name": "Idli Sambar", "price": "40" },
                { "name": "Medu Vada", "price": "50" },
                { "name": "Masala Dosa", "price": "70" },
                { "name": "Curd Rice", "price": "60" },
                { "name": "Filter Coffee", "price": "30" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [88.3639, 22.5726]
        },
        "properties": {
            "name": "Kolkata Flavors",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Park Street, Kolkata, West Bengal, India",
            "phone": "6666666666",
            "menu": [
                { "name": "Kathi Roll", "price": "80" },
                { "name": "Fish Curry", "price": "150" },
                { "name": "Luchi Aloo Dum", "price": "90" },
                { "name": "Mishti Doi", "price": "40" },
                { "name": "Sandesh", "price": "50" }
            ]
        }
    },
    {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [78.4867, 17.3850]
        },
        "properties": {
            "name": "Hyderabad Dine",
            "image": "https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "address": "Banjara Hills, Hyderabad, Telangana, India",
            "phone": "5555555555",
            "menu": [
                { "name": "Hyderabadi Biryani", "price": "180" },
                { "name": "Mirchi Ka Salan", "price": "90" },
                { "name": "Double Ka Meetha", "price": "70" },
                { "name": "Chicken 65", "price": "130" },
                { "name": "Thums Up", "price": "30" }
            ]
        }
    }
];
