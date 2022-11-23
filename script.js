// This code will need to be updated to pull anime data in from the API
// What I have so far is what will be the basic functionality for each anime card

let episodesWatched = 0
let totalEpisodes = 11

// initialize the innerText to have 0 / totalEpisodes
document.getElementById('episodes-eightysix').innerText = `0 / ${totalEpisodes}`

function decrease() {
    // prevents negative values
    if (episodesWatched >= 1) {
        episodesWatched--
    } else {
        return
    }
    
    document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`

    console.log("User decreased episodes watched.")
}

function increase() {
    // prevents values above the total number of episodes 
    if (episodesWatched < totalEpisodes) {
        episodesWatched++
    } else {
        return
    }

    document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`

    console.log("User increased episodes watched.")
}