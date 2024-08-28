const song = document.getElementById('song');
const toggleButton = document.getElementById('toggle-button');
const lyricsDiv = document.getElementById('lyrics');
const lyricsLines = lyricsDiv.querySelectorAll('p');

toggleButton.addEventListener('click', function() {
    if (lyricsDiv.style.display === 'none' || lyricsDiv.style.display === '') {
        lyricsDiv.style.display = 'block';
        this.innerText = 'Hide Lyrics';
        song.play();
    } else {
        lyricsDiv.style.display = 'none';
        this.innerText = 'Show Lyrics';
        song.pause();
    }
});

const lyricsTiming = [
    { time: 22, line: 'line1' },
    { time: 24.5, line: 'line2' },
    { time: 26.5, line: 'line3' },
    { time: 31.5, line: 'line4' },
    { time: 35, line: 'line5' },
    { time: 36.5, line: 'line6' },
    { time: 43, line: 'line7' },
    { time: 46.8, line: 'line8' },
    { time: 52.8, line: 'line9' },
    { time: 58.3, line: 'line10' },
    { time: 64.1, line: 'line11' },
    { time: 67.2, line: 'line12' },
    { time: 70, line: 'line13' },
    { time: 75, line: 'line14' },
    { time: 77.5, line: 'line15' },
    { time: 79.5, line: 'line16' },
    { time: 85.2, line: 'line17' },
    { time: 89.3, line: 'line18' },
    { time: 95.2, line: 'line19' },
    { time: 101.2, line: 'line20' },
    { time: 109.5, line: 'line21' },
    { time: 112.2, line: 'line22' },
    { time: 114.5, line: 'line23' },
    { time: 118, line: 'line24' },
    { time: 120, line: 'line25' },
    { time: 123, line: 'line26' },
    { time: 126 , line: 'line27' },
    { time: 131, line: 'line28' },
    { time: 133.3, line: 'line29' },
    { time: 135.9, line: 'line30' },
    { time: 141.9, line: 'line31' },
    { time: 144.3, line: 'line32' },
    { time: 146.7, line: 'line33' },
    { time: 152, line: 'line34' },
    { time: 156, line: 'line35' },
    { time: 162, line: 'line36' },
    { time: 167.8, line: 'line37' },
    { time: 173.2, line: 'line38' },
    { time: 177.4, line: 'line39' },
    { time: 183.2, line: 'line40' },
    { time: 189.6, line: 'line41' },
    { time: 195.4, line: 'line42' },
    { time: 199.2, line: 'line43' },
    { time: 205, line: 'line44' },
    { time: 210.1, line: 'line45' }
    // Sesuaikan timing dengan lirik lainnya di sini
];

song.addEventListener('timeupdate', function() {
    const currentTime = song.currentTime;
    lyricsTiming.forEach((lyric) => {
        const lineElement = document.getElementById(lyric.line);
        if (currentTime >= lyric.time) {
            lineElement.classList.add('lyric-line-visible');
        } else {
            lineElement.classList.remove('lyric-line-visible');
        }
    });
});

lyricsLines.forEach((line) => {
    line.classList.add('lyric-line');
});