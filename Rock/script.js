// ===== БАЗА ДАННЫХ ГРУПП =====
const bandsData = {
    arcticmonkeys: {
        name: "Arctic Monkeys",
        genre: "Indie Rock / Alternative",
        theme: "theme-arcticmonkeys",
        image: "images/arcticmonkeys.jpg",
        description: "Arctic Monkeys — британская инди-рок группа из Шеффилда, образованная в 2002 году. Известна своим уникальным звучанием и текстами, которые сочетают остроумие и социальную критику. Группа стала одной из самых влиятельных в современной рок-музыке.",
        songs: [
            { name: "Do I Wanna Know?", duration: "4:32", url: "https://u.pone.rs/bnujqrjd.mp3" },
            { name: "505", duration: "4:13", url: "https://u.pone.rs/lozcywmi.mp3" },
            { name: "R U Mine?", duration: "3:21", url: "https://u.pone.rs/jfoqvutl.mp3" },
            { name: "Arabella", duration: "3:27", url: "https://u.pone.rs/gifjffot.mp3" },
            { name: "Knee Socks", duration: "4:17", url: "https://u.pone.rs/gvobznbu.mp3" },
            { name: "Party Anthem", duration: "4:03", url: "https://u.pone.rs/ankrrxek.mp3" },
            { name: "I Wanna Be Yours", duration: "3:00", url: "https://u.pone.rs/vsqqtdvn.mp3" },
            { name: "Why'd You Only Call Me When You're High", duration: "2:42", url: "https://u.pone.rs/edbusskm.mp3" }
        ],
        albums: [
            { name: "AM", year: "2013", cover: "albums/am.jpg" },
            { name: "Whatever People Say...", year: "2006", cover: "albums/whatever-people-say.jpg" },
            { name: "Humbug", year: "2009", cover: "albums/humbug.jpg" }
        ],
    },
    scorpions: {
        name: "Scorpions",
        genre: "Hard Rock / Heavy Metal",
        theme: "theme-scorpions",
        image: "images/scorpions.jpg",
        description: "Scorpions — легендарная немецкая рок-группа, основанная в 1965 году в Ганновере. Одна из самых успешных рок-групп в истории, известная своими мощными балладами и хард-роковыми хитами. Их песня 'Wind of Change' стала гимном целого поколения.",
        songs: [
            { name: "Wind of Change", duration: "5:10", url: "https://u.pone.rs/jvtnktyb.mp3" },
            { name: "Still Loving You", duration: "6:40", url: "https://u.pone.rs/hqscggto.mp3" },
            { name: "Rock You Like a Hurricane", duration: "4:13", url: "https://u.pone.rs/bspgfmyb.mp3" },
            { name: "The Scratch", duration: "3:41", url: "https://u.pone.rs/vgkrmoov.mp3" },
            { name: "We Built This House", duration: "3:54", url: "https://u.pone.rs/lqcnwwah.mp3" },
            { name: "Rock n Roll Band", duration: "3:54", url: "https://u.pone.rs/udxdwxtx.mp3" },
            { name: "Tin Soldier", duration: "3:14", url: "https://u.pone.rs/ceidxfdx.mp3" },
            { name: "Always somewhere", duration: "4:56", url: "https://u.pone.rs/fpofkgll.mp3" }
        ],
        albums: [
            { name: "Crazy World", year: "1990", cover: "albums/crazy-world.jpg" },
            { name: "Love at First Sting", year: "1984", cover: "albums/love-at-first-sting.jpg" },
            { name: "Blackout", year: "1982", cover: "albums/blackout.jpg" }
        ]
    },
    nirvana: {
        name: "Nirvana",
        genre: "Grunge / Alternative Rock",
        theme: "theme-nirvana",
        image: "images/nirvana.jpg",
        description: "Nirvana — американская рок-группа, основанная Куртом Кобейном и Кристом Новоселичем в 1987 году. Стала символом гранж-движения и поколения X. Их альбом 'Nevermind' изменил лицо рок-музыки навсегда.",
        songs: [
            { name: "Smells Like Teen Spirit", duration: "5:00", url: "https://u.pone.rs/rhwcgyhu.mp3" },
            { name: "Come As You Are", duration: "3:39", url: "https://u.pone.rs/qmwhafte.mp3" },
            { name: "Lithium", duration: "3:44", url: "https://u.pone.rs/lweagdaz.mp3" },
            { name: "Rape me", duration: "2:49", url: "https://u.pone.rs/ekdcvoqi.mp3" },
            { name: "Something in the Way", duration: "3:42", url: "https://u.pone.rs/kykshimw.mp3" },
            { name: "Heart-Shaped Box", duration: "4:38", url: "https://u.pone.rs/vztjdvdk.mp3" },
            { name: "In Bloom", duration: "4:13", url: "https://u.pone.rs/wsgvljcx.mp3" },
            { name: "About a Girl", duration: "2:49", url: "https://u.pone.rs/rkcpuhgk.mp3" },
        ],
        albums: [
            { name: "Nevermind", year: "1991", cover: "albums/nevermind.jpg" },
            { name: "In Utero", year: "1993", cover: "albums/in-utero.jpg" },
            { name: "Bleach", year: "1989", cover: "albums/bleach.jpg" }
        ]
    },
    acdc: {
        name: "AC/DC",
        genre: "Hard Rock / Rock'n'Roll",
        theme: "theme-acdc",
        image: "images/acdc.jpg",
        description: "AC/DC — австралийская рок-группа, основанная братьями Ангусом и Малкольмом Янг в 1973 году. Одна из самых продаваемых групп в истории музыки. Их энергичный хард-рок и незабываемые риффы сделали их иконами жанра.",
        songs: [
            { name: "Back in Black", duration: "4:15", url: "https://u.pone.rs/gywypkgn.mp3" },
            { name: "Thunderstruck", duration: "4:52", url: "https://u.pone.rs/oaceeddf.mp3" },
            { name: "Highway to Hell", duration: "3:29", url: "https://u.pone.rs/rdflptyq.mp3" },
            { name: "T.N.T.", duration: "3:34", url: "https://u.pone.rs/exqnuuve.mp3" },
            { name: "For Those About To Rock", duration: "5:44", url: "https://u.pone.rs/ttrgwfsd.mp3" },
            { name: "Whole Lotta Rosie", duration: "5:33", url: "https://u.pone.rs/yuamxguf.mp3" },
            { name: "You Shook Me All Night Long", duration: "3:30", url: "https://u.pone.rs/kgnycwyk.mp3" },
            { name: "Money Made", duration: "4:15", url: "https://u.pone.rs/olryinvj.mp3" },
        ],
        albums: [
            { name: "Back in Black", year: "1980", cover: "albums/back-in-black.jpg" },
            { name: "Highway to Hell", year: "1979", cover: "albums/highway-to-hell.jpg" },
            { name: "The Razors Edge", year: "1990", cover: "albums/the-razors-edge.jpg" }
        ]
    },
    rammstein: {
        name: "Rammstein",
        genre: "Industrial Metal / Neue Deutsche Härte",
        theme: "theme-rammstein",
        image: "images/rammstein.jpg",
        description: "Rammstein — немецкая индастриал-метал группа, основанная в 1994 году в Берлине. Известна своим мощным звучанием, провокационными текстами и впечатляющими живыми выступлениями с использованием пиротехники. Одна из самых успешных немецких групп в мире.",
        songs: [
            { name: "Du Hast", duration: "3:57", url: "https://u.pone.rs/vkdbhror.mp3" },
            { name: "Sonne", duration: "4:31", url: "https://u.pone.rs/edsxndxw.mp3" },
            { name: "Deutschland", duration: "5:22", url: "https://u.pone.rs/dbosuewj.mp3" },
            { name: "Ich Will", duration: "3:37", url: "https://u.pone.rs/ubvssodz.mp3" },
            { name: "Amerika", duration: "3:46", url: "https://u.pone.rs/euyuunbn.mp3" },
            { name: "Rein Raus", duration: "3:10", url: "https://u.pone.rs/jzxafokg.mp3" },
            { name: "Angel", duration: "4:24", url: "https://u.pone.rs/ntycirxi.mp3" },
            { name: "RADIO", duration: "4:37", url: "https://u.pone.rs/zesjeugp.mp3" }
        ],
        albums: [
            { name: "Mutter", year: "2001", cover: "albums/mutter.jpg" },
            { name: "Sehnsucht", year: "1997", cover: "albums/sehnsucht.jpg" },
            { name: "Rammstein", year: "2019", cover: "albums/rammstein.jpg" }
        ]
    },
    maneskin: {
        name: "Måneskin",
        genre: "Alternative Rock / Glam Rock",
        theme: "theme-maneskin",
        image: "images/maneskin.jpg",
        description: "Måneskin — итальянская рок-группа, основанная в Риме в 2016 году. Получила мировую известность после победы на Евровидении 2021. Их энергичный стиль и харизма возродили интерес к рок-музыке среди молодого поколения.",
        songs: [
            { name: "Beggin'", duration: "3:31", url: "https://u.pone.rs/kmvqmbol.mp3" },
            { name: "Zitti e buoni", duration: "3:12", url: "https://u.pone.rs/vriaxxmh.mp3" },
            { name: "I Wanna Be Your Slave", duration: "2:53", url: "https://u.pone.rs/melnmeqi.mp3" },
            { name: "L'altra dimensione", duration: "2:06", url: "https://u.pone.rs/xerpucvv.mp3" },
            { name: "OFF MY FACE", duration: "2:29", url: "https://u.pone.rs/yrcryzwp.mp3" },
            { name: "Torna a casa", duration: "3:50", url: "https://u.pone.rs/niawbwir.mp3" },
            { name: "SUPERMODEL", duration: "2:28", url: "https://u.pone.rs/hgjgqqfm.mp3" },
            { name: "MAMMAMIA", duration: "3:06", url: "https://u.pone.rs/mqauczjv.mp3" }
        ],
        albums: [
            { name: "Teatro d'ira: Vol. I", year: "2021", cover: "albums/teatro.jpg" },
            { name: "Rush!", year: "2023", cover: "albums/rush.jpg" },
            { name: "Il ballo della vita", year: "2018", cover: "albums/il-ballo-della-vita.jpg" }
        ]
    },
    "5sos": {
        name: "5 Seconds of Summer",
        genre: "Pop Rock / Pop Punk",
        theme: "theme-5sos",
        image: "images/5sos.jpg",
        description: "5 Seconds of Summer — австралийская поп-рок группа, основанная в Сиднее в 2011 году. Начинали как YouTube-кавер-группа, а затем стали мировыми звёздами. Их звучание эволюционировало от поп-панка к более зрелому альтернативному року.",
        songs: [
            { name: "Youngblood", duration: "3:23", url: "https://u.pone.rs/sukqgoyl.mp3" },
            { name: "She Looks So Perfect", duration: "3:22", url: "https://u.pone.rs/yxyjcgfv.mp3" },
            { name: "Teeth", duration: "3:24", url: "https://u.pone.rs/jlkovmac.mp3" },
            { name: "Empty Wallets", duration: "3:07", url: "https://u.pone.rs/zjwtqnaf.mp3" },
            { name: "Money", duration: "2:54", url: "https://u.pone.rs/nnimadja.mp3" },
            { name: "More", duration: "3:14", url: "https://u.pone.rs/qvtnokbe.mp3" },
            { name: "Independence Day", duration: "3:37", url: "https://u.pone.rs/kdsoalpv.mp3" },
            { name: "Easier", duration: "2:37", url: "https://u.pone.rs/iwyzhgem.mp3" }
        ],
        albums: [
            { name: "Youngblood", year: "2018", cover: "albums/youngblood.jpg" },
            { name: "Calm", year: "2020", cover: "albums/calm.jpg" },
            { name: "5SOS5", year: "2022", cover: "albums/5SOS5.jpg" }
        ]
    },
    aria: {
        name: "Ария",
        genre: "Heavy Metal / Hard Rock",
        theme: "theme-aria",
        image: "images/aria.jpg",
        description: "Ария — легендарная российская хэви-метал группа, основанная в 1985 году в Москве. Одна из самых значимых рок-групп на постсоветском пространстве. Их мощные риффы и философские тексты сделали их культовыми для миллионов фанатов.",
        songs: [
            { name: "Штиль", duration: "5:35", url: "https://u.pone.rs/wcrxixha.mp3" },
            { name: "Улица роз", duration: "6:08", url: "https://u.pone.rs/vzrtptnh.mp3" },
            { name: "Беспечный ангел", duration: "3:58", url: "https://u.pone.rs/hkyeilyh.mp3" },
            { name: "Потерянный рай", duration: "5:56", url: "https://u.pone.rs/sjqucnam.mp3" },
            { name: "Грязь", duration: "4:43", url: "https://u.pone.rs/zuwvwvhl.mp3" },
            { name: "Колизей", duration: "6:32", url: "https://u.pone.rs/mdhxrjss.mp3" },
            { name: "Осколок льда", duration: "5:25", url: "https://u.pone.rs/bhthitsz.mp3" },
            { name: "Воля и разум", duration: "4:34", url: "https://u.pone.rs/mywqblgs.mp3" }
        ],
        albums: [
            { name: "Герой асфальта", year: "1987", cover: "albums/hero.jpg" },
            { name: "Кровь за кровь", year: "1991", cover: "albums/blood.jpg" },
            { name: "Ночь короче дня", year: "1995", cover: "albums/night.jpg" }
        ]
    },
    linkinpark: {
        name: "Linkin Park",
        genre: "Nu Metal / Alternative Rock",
        theme: "theme-linkinpark",
        image: "images/linkinpark.jpg",
        description: "Linkin Park — американская рок-группа, основанная в 1996 году в Калифорнии. Сочетая ню-метал, альтернативный рок и электронику, они создали уникальное звучание, которое принесло им мировую славу. Их дебютный альбом 'Hybrid Theory' стал одним из самых продаваемых в истории.",
        songs: [
            { name: "In the End", duration: "3:36", url: "https://u.pone.rs/vmsamncu.mp3" },
            { name: "Numb", duration: "3:08", url: "https://u.pone.rs/dkyqanis.mp3" },
            { name: "Faint", duration: "2:42", url: "https://u.pone.rs/hevukfmz.mp3" },
            { name: "Given Up", duration: "3:09", url: "https://u.pone.rs/pqrflffu.mp3" },
            { name: "Keys to the Kingdom", duration: "3:38", url: "https://u.pone.rs/xkgbmrnd.mp3" },
            { name: "Rebellion", duration: "3:44", url: "https://u.pone.rs/dwlslwwy.mp3" },
            { name: "One Step Closer", duration: "2:34", url: "https://u.pone.rs/ivpdnanu.mp3" },
            { name: "Don t Stay", duration: "3:07", url: "https://u.pone.rs/vpcxfjyr.m4a" }
        ],
        albums: [
            { name: "Hybrid Theory", year: "2000", cover: "albums/hybrid-theory.jpg" },
            { name: "Meteora", year: "2003", cover: "albums/meteora.jpg" },
            { name: "Minutes to Midnight", year: "2007", cover: "albums/minutes-to-midnight.jpg" }
        ]
    },
    imaginedragons: {
        name: "Imagine Dragons",
        genre: "Alternative Rock / Pop Rock",
        theme: "theme-imaginedragons",
        image: "images/imaginedragons.jpg",
        description: "Imagine Dragons — американская рок-группа, основанная в 2008 году в Лас-Вегасе. Известна своим эпичным звучанием, мощными барабанами и запоминающимися мелодиями. Их музыка сочетает альтернативный рок, поп и электронику.",
        songs: [
            { name: "Believer", duration: "3:23", url: "https://u.pone.rs/edvahdsu.mp3" },
            { name: "Radioactive", duration: "3:08", url: "https://u.pone.rs/qlhjkqjb.mp3" },
            { name: "Thunder", duration: "3:08", url: "https://u.pone.rs/xfaihmzj.mp3" },
            { name: "Enemy", duration: "2:55", url: "https://u.pone.rs/qsbrrptv.mp3" },
            { name: "I'm So Sorry", duration: "3:50", url: "https://u.pone.rs/muqnomqd.mp3" },
            { name: "Wrecked", duration: "4:04", url: "https://u.pone.rs/mzihktdg.mp3" },
            { name: "Impossible", duration: "3:29", url: "https://u.pone.rs/shcxknrr.mp3" },
            { name: "Giants", duration: "3:30", url: "https://u.pone.rs/ddmapljo.mp3" }
        ],
        albums: [
            { name: "Night Visions", year: "2012", cover: "albums/night-visions.jpg" },
            { name: "Evolve", year: "2017", cover: "albums/evolve.jpg" },
            { name: "Origins", year: "2018", cover: "albums/origins.jpg" }
        ]
    },
    kiss: {
        name: "Kiss",
        genre: "Hard Rock / Glam Metal",
        theme: "theme-kiss",
        image: "images/kiss.jpg",
        description: "Kiss — легендарная американская рок-группа, основанная в Нью-Йорке в 1973 году. Известна своим сценическим образом — гримом, костюмами и эффектными шоу с пиротехникой. Одна из самых узнаваемых и коммерчески успешных рок-групп в истории.",
        songs: [
            { name: "I Was Made for Lovin' You", duration: "4:42", url: "https://u.pone.rs/ptbnkmty.mp3" },
            { name: "Detroit Rock City", duration: "4:31", url: "https://u.pone.rs/aotzhzat.mp3" },
            { name: "Rock and Roll All Nite", duration: "2:56", url: "https://u.pone.rs/vwozvoju.mp3" },
            { name: "I Love It Loud", duration: "4:15", url: "https://u.pone.rs/wwtyovcd.mp3" },
            { name: "Love Gun", duration: "3:15", url: "https://u.pone.rs/ydkdwvvr.mp3" },
            { name: "Heaven's On Fire", duration: "3:23", url: "https://u.pone.rs/dfvmlmty.mp3" },
            { name: "Magic Touch", duration: "4:42", url: "https://u.pone.rs/pvdvegkp.mp3" },
            { name: "Domino", duration: "4:01", url: "https://u.pone.rs/mevrjxqf.mp3" },
        ],
        albums: [
            { name: "Destroyer", year: "1976", cover: "albums/destroyer.jpg" },
            { name: "Love Gun", year: "1977", cover: "albums/love-gun.jpg" },
            { name: "Dynasty", year: "1979", cover: "albums/dynasty.jpg" }
        ]
    },
    metallica: {
        name: "Metallica",
        genre: "Thrash Metal / Heavy Metal",
        theme: "theme-metallica",
        image: "images/metallica.jpg",
        description: "Metallica — легендарная американская трэш-метал группа, основанная в Лос-Анджелесе в 1981 году. Одна из «большой четвёрки» трэш-метала наряду с Megadeth, Slayer и Anthrax. Одна из самых коммерчески успешных и влиятельных метал-групп в истории музыки.",
        songs: [
            { name: "Enter Sandman", duration: "5:40", url: "https://u.pone.rs/yepkmbzm.mp3" },
            { name: "Nothing Else Matters", duration: "6:27", url: "https://u.pone.rs/crgjgpph.mp3" },
            { name: "Master of Puppets", duration: "8:36", url: "https://u.pone.rs/vwxnsxwg.mp3" },
            { name: "Die, Die My Darling", duration: "2:28", url: "https://u.pone.rs/ucuqzfys.mp3" },
            { name: "The Unforgiven", duration: "6:27", url: "https://u.pone.rs/njlqimqv.mp3" },
            { name: "Dyers Eve", duration: "5:13", url: "https://u.pone.rs/ipnipbav.mp3" },
            { name: "Sad But True", duration: "5:24", url: "https://u.pone.rs/msardtxq.mp3" },
            { name: "Turn the page", duration: "6:06", url: "https://u.pone.rs/oaaptmxz.mp3" },
        ],
        albums: [
            { name: "Metallica (Black Album)", year: "1991", cover: "albums/black-album.jpg" },
            { name: "Master of Puppets", year: "1986", cover: "albums/master-of-puppets.jpg" },
            { name: "Ride the Lightning", year: "1984", cover: "albums/ride-the-lightning.jpg" }
        ]
    }
};

// ===== ФУНКЦИИ ГЛАВНОЙ СТРАНИЦЫ =====
function createBandCards() {
    const grid = document.getElementById('bandsGrid');
    if (!grid) return;

    Object.keys(bandsData).forEach(bandId => {
        const band = bandsData[bandId];
        const card = document.createElement('div');
        card.className = 'band-card';
        card.onclick = () => {
            window.location.href = `band.html?band=${bandId}`;
        };

        card.innerHTML = `
            <div class="band-card-image" style="background-image: url('${band.image}');"></div>
            <div class="band-card-info">
                <h3>${band.name}</h3>
                <p class="genre">${band.genre}</p>
                <ul class="songs-preview">
                    ${band.songs.slice(0, 2).map(s => `<li>${s.name}</li>`).join('')}
                </ul>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ===== АУДИОПЛЕЕР =====
let audioPlayer = {
    element: null,
    currentSong: null,
    isPlaying: false,

    init() {
        this.element = document.getElementById('audioElement');
        this.playBtn = document.getElementById('playBtn');
        this.progressBar = document.getElementById('progressBar');
        this.progressContainer = document.getElementById('progressContainer');
        this.timeDisplay = document.getElementById('playerTime');
        this.trackName = document.getElementById('playerTrackName');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.vinyl = document.getElementById('vinyl');   // ← добавляем

        if (!this.element) return;

        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.element.addEventListener('timeupdate', () => this.updateProgress());
        this.element.addEventListener('ended', () => this.onEnded());
        this.progressContainer.addEventListener('click', (e) => this.seek(e));

        this.element.addEventListener('play', () => {
            if (this.vinyl) this.vinyl.classList.add('spinning');
            this.playBtn.classList.add('playing');
        });
        this.element.addEventListener('pause', () => {
            if (this.vinyl) this.vinyl.classList.remove('spinning');
            this.playBtn.classList.remove('playing');
        });
        this.element.addEventListener('ended', () => {
            if (this.vinyl) this.vinyl.classList.remove('spinning');
            this.playBtn.classList.remove('playing');
        });

        if (this.volumeSlider) {
            this.volumeSlider.addEventListener('input', (e) => {
                this.element.volume = e.target.value;
            });
            this.element.volume = this.volumeSlider.value;
        }
    },

    playSong(songName, url, artistName) {
        if (!this.element) return;

        if (!url) {
            this.trackName.textContent = `${artistName} — ${songName}`;
            this.playBtn.classList.remove('playing');
            this.isPlaying = false;
            this.element.src = '';
            return;
        }

        this.currentSong = songName;
        this.trackName.textContent = `${artistName} — ${songName}`;
        this.element.src = url;
        this.element.play()
            .then(() => {
                this.isPlaying = true;
                this.playBtn.classList.add('playing');
                document.getElementById('audioPlayer').classList.add('active');
            })
            .catch(err => {
                console.log('Ошибка воспроизведения:', err);
            });
    },

    togglePlay() {
        if (!this.element.src || this.element.src === '') return;

        if (this.isPlaying) {
            this.element.pause();
            this.playBtn.classList.remove('playing');
            if (this.vinyl) this.vinyl.classList.remove('spinning');  // ← стоп
            this.isPlaying = false;
        } else {
            this.element.play();
            this.playBtn.classList.add('playing');
            if (this.vinyl) this.vinyl.classList.add('spinning');     // ← старт
            this.isPlaying = true;
        }
    },

    updateProgress() {
        if (!this.element.duration) return;
        const percent = (this.element.currentTime / this.element.duration) * 100;
        this.progressBar.style.width = percent + '%';

        const mins = Math.floor(this.element.currentTime / 60);
        const secs = Math.floor(this.element.currentTime % 60);
        this.timeDisplay.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    seek(e) {
        if (!this.element.duration) return;
        const rect = this.progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        this.element.currentTime = percent * this.element.duration;
    },

    onEnded() {
        this.isPlaying = false;
        this.playBtn.classList.remove('playing');
        if (this.vinyl) this.vinyl.classList.remove('spinning');   // ← стоп
        this.progressBar.style.width = '0%';
        this.timeDisplay.textContent = '0:00';
    },
};

// ===== ФУНКЦИИ СТРАНИЦЫ ГРУППЫ =====
function loadBandPage(bandId) {
    const band = bandsData[bandId];
    if (!band) {
        window.location.href = 'index.html';
        return;
    }

    document.body.className = 'band-page ' + band.theme;
    document.title = band.name + ' - ROCK ZONE';

    document.getElementById('bandName').textContent = band.name;
    document.getElementById('bandGenre').textContent = band.genre;

    const hero = document.getElementById('bandHero');
    if (band.image) {
        hero.style.backgroundImage = `url('${band.image}')`;
    }

    document.getElementById('bandDescription').textContent = band.description;

    const albumsGrid = document.getElementById('albumsGrid');
    albumsGrid.innerHTML = '';
    band.albums.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.className = 'album-card';
        albumCard.innerHTML = `
        <div class="album-cover" style="background-image: url('${album.cover}');"></div>
        <div class="album-info">
            <h3>${album.name}</h3>
            <span>${album.year}</span>
        </div>
    `;
        albumsGrid.appendChild(albumCard);
    });

    const songsList = document.getElementById('songsList');
    songsList.innerHTML = '';
    band.songs.forEach(song => {
        const songItem = document.createElement('div');
        songItem.className = 'song-item';
        songItem.innerHTML = `
            <div class="song-name-wrapper">
                <span class="play-indicator">▶</span>
                <span class="song-name">${song.name}</span>
            </div>
            <span class="song-duration">${song.duration}</span>
        `;

        songItem.addEventListener('click', () => {
            audioPlayer.playSong(song.name, song.url, band.name);
        });

        songsList.appendChild(songItem);
    });

    audioPlayer.init();
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', () => {
    createBandCards();
});