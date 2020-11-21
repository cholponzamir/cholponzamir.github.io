
let url = "https://www.reddit.com/r/popular.json";
let chart = "";
console.log(url);
//const fetchPromise = fetch(url);

let settings = { method: "Get" };
let chartValues = [];

async function getData() {
    await fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            let listSize = json.data.children.length; //list size
            // Loop to pick 5 random entries
            for (x = 0; x < 5; x++) {
                num=Math.floor(Math.random()*listSize);
                mydata = json.data.children[num].data;
                subred= mydata.subreddit;
                auth= mydata.author;
                ti=mydata.title;
                up=mydata.ups;
                let message = "<b>Subreddit </b>: " + subred + " <b>Author</b>:" + auth + " <b>Title</b>:" + ti + " <b>Up votes</b>: " + up;
                let createli = document.createElement("li");//PUT MESSAGE IN LI
                createli.innerHTML = message;
                
                let FinalredditList = document.querySelector('#redditList');
                FinalredditList.append(createli);//ADD LI TO REDDITLIST
                
                /*
                    Get a random number within the size of the list
                    num=Math.floor(math.random()* Math.floor(max));
                    Get subreddit, author, title, and ups from record
                    Set the message to be:
                        let message = "<b>Subreddit </b>: " + subreddit + " <b>Author</b>:" + author + " <b>Title</b>:" + title + " <b>Up votes</b>: " + ups;
                   done
                   PUT MESSAGE IN LI
                   ADD LI TO REDDITLIST 
                        Add a new <li> element with the message to the 'redditList' element
                    Add a data entry to chartValues with author as the label and ups as the y component
                */
    

                /*.......*/
                
                let addToChart = {'label':auth,y:up}; // Gave this. This needs to be added to the 'chartValues'
                /*.......*/
                chartValues.push(addToChart);
            }
        })
        .then(values => console.log(chartValues));
        chart.render(); // Do you need to remove the comments from here in order to get it to work? YE. 
};

window.onload = async function makeChart() {
    getData();
    chart = new CanvasJS.Chart("chartContainer", {
        title: {
            text: "Upvotes"
        },

        data: [     
            { 
                type: "column",
                name: "Popular Reddit",
                dataPoints:chartValues // WHAT GOES HERE??? IDK LOL!!!!
            }
        ]
    });
    
    chart.render();
}

//window.onload = makeChart();