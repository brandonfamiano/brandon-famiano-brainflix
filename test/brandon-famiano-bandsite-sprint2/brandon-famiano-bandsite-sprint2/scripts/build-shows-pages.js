const showsArray = [
    {
        date:"Mon Sep 06 2023",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
        link:""
    },
    {
        date:"Tue Sep 21 2023",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
        link:""
    },
    {
        date:"Fri Oct 15 2023",
        venue: "View Lounge",
        location: "San Francisco, CA",
        link:""
    },
    {
        date:"Fri Nov 06 2023",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
        link:""
    },
    {
        date:"Fri Nov 26 2023",
        venue: "Moscow Center",
        location: "San Francisco, CA",
        link:""
    },
    {
        date:"Fri Dec 15 2023",
        venue: "Press Club",
        location: "San Francisco, CA",
        link:""
    }
    ];


let container = document.getElementById("shows__container");
let datelabel = document.createElement('h5')
let venuelabel = document.createElement('h5')
let locationlabel = document.createElement('h5')
datelabel.innerText = "Date";
venuelabel.innerText = "Venue";
locationlabel.innerText = "Location";
let tablet = document.createElement("div");
tablet.appendChild(datelabel);
tablet.appendChild(venuelabel);
tablet.appendChild(locationlabel);
container.appendChild(tablet);
    let showsHeader = document.createElement("h1");
    showsArray.forEach((show, index) => {
        let shows = document.createElement("li");
        let datelabel = document.createElement('h5')
        let date = document.createElement('h4')
        let venuelabel = document.createElement('h5')
        let venue = document.createElement('h3');
        let locationlabel = document.createElement('h5')
        let location = document.createElement('h2');
        let link = document.createElement('button');
        
        date.innerText = show.date;
        venue.innerText = show.venue;
        location.innerText = show.location;
        link.innerText = "BUY TICKETS";
        link.style.cursor="pointer";
        link.onclick = function(){
            window.open("https://www.ticketmaster.com");
        }
        datelabel.innerText = "Date";
        venuelabel.innerText = "Venue";
        locationlabel.innerText = "Location";
        shows.appendChild(datelabel);
        shows.appendChild(date);
        shows.appendChild(venuelabel);
        shows.appendChild(venue);
        shows.appendChild(locationlabel);
        shows.appendChild(location);
        shows.appendChild(link);
        container.appendChild(shows);
    })

let graySelect = document.querySelectorAll('li');
graySelect.forEach((element) => {
    element.onclick = function(e) {
      graySelect.forEach((el) => {
        el.classList.remove("selected");
      });
      element.classList.add("selected");
    };
});