let movieData = [
    {
        "adult": false,
        "backdrop_path": "./images/santa.jpg",
        "id": 845781,
        "original_title": "Red One",
        "overview": "After Santa Claus (codename: Red One) is kidnapped, the North Pole's Head of Security must team up with the world's most infamous tracker in a globe-trotting, action-packed mission to save Christmas.",
        "poster_path": "./images/santap.jpg",
        "release_date": "2024-10-31",
        "title": "Red One",
        "video": "XaQiGRmJ_N0",
        "vote_average": 7.01,
        "vote_count": 1417
    },
    {
        "adult": false,
        "backdrop_path": "./images/sonic.jpg",
        "id": 939243,
        "original_language": "en",
        "original_title": "Sonic the Hedgehog 3",
        "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
        "popularity": 3663.337,
        "poster_path": "./images/sonicp.jpg",
        "release_date": "2024-12-19",
        "title": "Sonic the Hedgehog 3",
        "video": "LH1J1EbqCaI",
        "vote_average": 7.9,

    },
    {
        "adult": false,
        "backdrop_path": "./images/mufasa.jpg",
        "id": 762509,
        "original_language": "en",
        "original_title": "Mufasa: The Lion King",
        "overview": "Told in flashbacks, Mufasa is an orphaned cub, lost and alone until he meets a sympathetic lion named Taka—the heir to a royal bloodline. The chance meeting sets in motion a journey of misfits searching for their destiny and working together to evade a threatening and deadly foe.",
        "popularity": 3478.204,
        "poster_path": "./images/mufasap.jpg",
        "release_date": "2024-12-18",
        "title": "Mufasa: The Lion King",
        "video": "lMXh6vjiZrI",
        "vote_average": 7.054,
        "vote_count": 221
    },
    {
        "adult": false,
        "backdrop_path": "./images/moana.jpg",
        "id": 1241982,
        "original_language": "en",
        "original_title": "Moana 2",
        "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
        "popularity": 3176.216,
        "poster_path": "./images/moanap.jpg",
        "release_date": "2024-11-21",
        "title": "Moana 2",
        "video": "hDZ7y8RP5HE",
        "vote_average": 6.9,
        "vote_count": 604
    },
    {
        "adult": false,
        "backdrop_path": "./images/carryOn.jpg",
        "id": 1005331,
        "original_language": "en",
        "original_title": "Carry-On",
        "overview": "An airport security officer races to outsmart a mysterious traveler forcing him to let a dangerous item slip onto a Christmas Eve flight.",
        "popularity": 2430.202,
        "poster_path": "./images/carryOnp.jpg",
        "release_date": "2024-12-05",
        "title": "Carry-On",
        "video": "KS0XacjMmOc",
        "vote_average": 6.981,
        "vote_count": 1007
    },
    {
        "adult": false,
        "backdrop_path": "./images/gradiator.jpg",
        "id": 558449,
        "original_language": "en",
        "original_title": "Gladiator II",
        "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
        "popularity": 2996.003,
        "poster_path": "./images/gradiatorp.jpg",
        "release_date": "2024-11-05",
        "title": "Gladiator II",
        "video": "TQwSz88ITAE",
        "vote_average": 6.7,
        "vote_count": 1411
    },
    {
        "adult": false,
        "backdrop_path": "./images/culpa.jpg",
        "id": 1156593,
        "original_language": "es",
        "original_title": "Culpa tuya",
        "overview": "The love between Noah and Nick seems unwavering despite their parents' attempts to separate them. But his job and her entry into college open up their lives to new relationships that will shake the foundations of both their relationship and the Leister family itself.",
        "popularity": 2019.632,
        "poster_path": "./images/culpaP.jpg",
        "release_date": "2024-12-26",
        "title": "Culpa tuya",
        "video": "m_TWESxP_DE",
        "vote_average": 8.3,
        "vote_count": 18
    },
    {
        "adult": false,
        "backdrop_path": "./images/angel.jpg",
        "id": 1043905,
        "original_language": "en",
        "original_title": "Dirty Angels",
        "overview": "During the United States' 2021 withdrawal from Afghanistan, a group of female soldiers posing as medical relief are sent back in to rescue a group of kidnapped teenagers caught between ISIS and the Taliban.",
        "popularity": 2073.9,
        "poster_path": "./images/angelP.jpg",
        "release_date": "2024-12-11",
        "title": "Dirty Angels",
        "video": "YBwoSa3n8Yc",
        "vote_average": 6.6,
        "vote_count": 37
    },
    {
        "adult": false,
        "backdrop_path": "./images/elevation.jpg",
        "id": 1035048,
        "original_language": "en",
        "original_title": "Elevation",
        "overview": "A single father and two women venture from the safety of their homes to face monstrous creatures to save the life of a young boy.",
        "popularity": 1680.289,
        "poster_path": "./images/elevationP.jpg",
        "release_date": "2024-11-07",
        "title": "Elevation",
        "video": "kt0V2rpEouE",
        "vote_average": 6.3,
        "vote_count": 192
    },
    {
        "adult": false,
        "backdrop_path": "./images/xmas.jpg",
        "id": 645757,
        "original_language": "en",
        "original_title": "That Christmas",
        "overview": "It's an unforgettable Christmas for the townsfolk of Wellington-on-Sea when the worst snowstorm in history alters everyone's plans — including Santa's.",
        "popularity": 731.989,
        "poster_path": "./images/xmasP.jpg",
        "release_date": "2024-11-27",
        "title": "That Christmas",
        "video": "SiCTXSwqzkw",
        "vote_average": 7.23,
        "vote_count": 244
    }

]

let bgImg = document.getElementById("container2")
let title2 = document.getElementById("title2")
let title3=  document.getElementById("title3")
let pic = document.getElementById("pic")
let pic2 = document.getElementById("pic2")
let rating = document.getElementById("rating2")
let rDate = document.getElementById("release2")
let desc = document.getElementById("description2")
let desc2 = document.getElementById("description3")
let postD = document.getElementById("posterContainer")
let vidD = document.getElementById("vidContainer")
let vid = document.getElementById("vid")
let watchBut = document.getElementsByClassName("watch")
let list = document.getElementsByClassName('list')

const handleScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight < 200) {
        header.style.backgroundColor = '';
        header.style.backdropFilter = ''
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        header.style.backdropFilter = 'blur(5px)'
    }
}
window.addEventListener('scroll', handleScroll);

const handleFetch = () => {
    let queryString = decodeURIComponent(window.location.search);
    queryString = queryString.substring(1);


    let bg = queryString.split(":")[1];
    console.log(bg);
    let todisp = movieData.find(ele => ele.backdrop_path == bg || ele.poster_path == bg)
    console.log(todisp);
    bgImg.style.background = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 1)), url(${todisp.backdrop_path}) center/cover no-repeat`
    pic.src = todisp.poster_path
    pic2.src = todisp.poster_path
    title2.innerText = todisp.title
    title3.innerText = todisp.title
    rating.innerText = todisp.vote_average
    rDate.innerText = todisp.release_date
    desc.innerText = todisp.overview
    desc2.innerText = todisp.overview
    vid.src = `https://www.youtube.com/embed/${todisp.video}`

}
handleFetch()




let a = [...list]
console.log(a);

a.map(ele => {
    ele.addEventListener('click', function (e) {
        e.preventDefault()
        let c = e.target
        console.log(c.dataset.bg)
        window.location.href = 'nowshowing.html' + `?bg:${c.dataset.bg}`;
    })
});

[...watchBut].map(ele => ele.addEventListener("click", (e) => {
    postD.style.display = "none"
    vidD.style.display = "flex"
}))

