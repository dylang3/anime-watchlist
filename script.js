// This code will need to be updated to pull anime data in from the API
// What I have so far is what will be the basic functionality for each anime card

let episodesWatched = 0
let totalEpisodes = 11

// initialize the innerText to have 0 / totalEpisodes
document.getElementById('episodes-eightysix').innerText = `0 / ${totalEpisodes}`

function decrease() {
    switch (true) {
        case (episodesWatched === totalEpisodes):
            episodesWatched--
            document.getElementById('plus').style.visibility = "visible"
            document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`
            break

        case (episodesWatched === 1):
            episodesWatched--
            document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`
            document.getElementById('minus').style.visibility = "hidden"
            break

        case (episodesWatched > 0):
            episodesWatched--
            document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`
            break

        default: return
    }
}

function increase() {
    switch (true) {
        case (episodesWatched === totalEpisodes - 1):
            episodesWatched++
            document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`
            document.getElementById('plus').style.visibility = "hidden"
            break

        case (episodesWatched === 0):
            document.getElementById('minus').style.visibility = "visible"
            episodesWatched++
            document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`
            break
        
        case (episodesWatched < totalEpisodes):
            episodesWatched++
            document.getElementById('episodes-eightysix').innerText = `${episodesWatched} / ${totalEpisodes}`
            break

        default: return
    }
}