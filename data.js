//Punti principali del festival, tutti praticamente a Settimo
const puntiFestival = [
            {
                titolo: "Spazio Silicio",
                nome: "Palco Piazza della Libertà",
                lat: 45.137213,
                lng: 7.771170,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "11:00", evento: "Quando tutto cambia. Le reazioni umane tra emozioni, conflitti e violenza", relatore: "Roberta Bruzzone", noprenot: "INGRESSO LIBERO" },
                    { giorno: "10/10", ora: "15:00", evento: "Questione di millesimi", relatore: "Filippo Tortu e Alessia Succo", noprenot: "INGRESSO LIBERO" },
                    { giorno: "10/10", ora: "17:00", evento: "Presentazione libro 'Caro Sapiens'", relatore: "Mario Tozzi", noprenot: "INGRESSO LIBERO" }
                ]
            },
            {
                titolo: "Spazio Mercurio",
                nome: "Cortile dell'Angelo",
                lat: 45.138108,
                lng: 7.771339,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "10:30", evento: "L'ora del racconto - Reazioni a Catena", relatore: "Associazione Teatrulla" },
                    { giorno: "10/10", ora: "12:00", evento: "L'immaginario artificiale", relatore: "Donatella Della Ratta e Antonio Santangelo" },
                    { giorno: "10/10", ora: "15:00", evento: "Ci vuole coraggio per raccontare la verità", relatore: "Giulia Bosetti, Elisa Marincola e Filippi Morrione" },
                    { giorno: "10/10", ora: "17:00", evento: "Piante in Movimento", relatore: "Francesco Tomasinelli e Maria Consolata Sinsalco" }
                ]
            },
            {
                titolo: "Spazio Azoto",
                nome: "Cortile Via Italia 36",
                lat: 45.1371423,
                lng: 7.7700553,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "11:00", evento: "Reazioni Nucleari, Il futuro del atomo", relatore: "Roberto Zanino e Andrea Barbensi" },
                    { giorno: "10/10", ora: "15:30", evento: "Reazioni a Tavola", relatore: "Franco Fassio e Roberto Moncalvo" },
                    { giorno: "10/10", ora: "17:30", evento: "La Chimica dell' Ironia", relatore: "Francesco Muzzopappa" }
                ]
            },
            {
                titolo: "Spazio Fosforo",
                nome: "Via Don Sales",
                lat: 45.137061,
                lng: 7.769619,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "11:30", evento: "Reagire insieme", relatore: "Ona Sharka e Dario Russo" },
                    { giorno: "10/10", ora: "15:30", evento: "La miniera che hai in tasca", relatore: "Annalisa Abdel Azim e Chiara Magrini" },
                    { giorno: "10/10", ora: "17:30", evento: "Il futuro che non c'era", relatore: "Enrica Maria Porcari" }
                ]
            },
            {
                titolo: "Piazza degli Alpini",
                nome: "Pieve",
                lat: 45.138997,
                lng: 7.768487,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "11:30", evento: "Evento istituzionale con camera di commercio" },
                    { giorno: "10/10", ora: "15:00", evento: "Lo Spazio che diventa Industria", relatore: "Giuseppe Santangelo" },
                    { giorno: "10/10", ora: "16:30", evento: "La Cura Intelligente", relatore: "Alessandro Vercelli, Marco Bazzani" },
                    { giorno: "10/10", ora: "18:00", evento: "SETA?" }
                ]
            },
            {
                // da tenere a mente: potrei o non potrei tenerlo così, non mi piace cosi tanto tenere avvisomaltempo, ma mo vedo dai
                titolo: "Piazza Campidoglio 50",
                nome: "Biblioteca Archimede",
                lat: 45.1358717,
                lng: 7.7662564,
                linkAgenda: "https://www.innova7.it",
                avvisoMaltempo: "⚠️ TUTTI GLI EVENTI DI SABATO SARANNO QUI IN CASO DI MALTEMPO!",
                programma: [
                    { giorno: "06/10", ora: "18:30", evento: "L'asimetria e la vita", relatore: "Antonio Calabrò, Ilaria Gasparri, Simone Arcagni" },
                    { giorno: "09/10", ora: "18:00", evento: "Reazioni al Futuro", relatore: "Barbara Galavotti" },
                    { giorno: "09/10", ora: "21:00", evento: "Il pianeta Inquieto", relatore: "Dario Fabbri" },
                    { giorno: "10/10", ora: "Tutti gli orari", evento: "SEDE ALTERNATIVA MALTEMPO" },
                    { giorno: "11/10", ora: "Tutti gli orari", evento: "Per maggiori info, vai sul sito di Innova7 in basso" }
                ]
            },
            {
                titolo: "Via Ludovico Ariosto 36/BIS",
                nome: "Ecomuseo del Freidano",
                lat: 45.1369476,
                lng: 7.7803988,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "dalle 09:45 alle 11:15", evento: "Workshop di degustazione del acqua", relatore: "SMAT"},
                    { giorno: "dal 04/10 al 11/10", ora: "dalle 15:00 alle 18:00", evento: "Piante Guerriere: Viaggio tra i vegetali che pensano di essere animali.", relatore: "Raffaella Fiore e Francesco Tomasinelli", noprenot: "INGRESSO LIBERO" }
                ]
            },
            {
                titolo: "Via Partigiani 4",
                nome: "Teatro Garybaldi",
                lat: 45.1429134,
                lng: 7.7767043,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "10/10", ora: "21:00", evento: "Spettacolo 50 Sfumature di Sapiens", relatore: "Mario Tozzi" }
                ]
            },
            {
                titolo: "Via Torino 160",
                nome: "Torino Outlet Village",
                lat: 45.128189,
                lng: 7.737677,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "04/10", ora: "11:00", evento: "SCIENCE DEMO", relatore: "MU-CH", noprenot: "INGRESSO LIBERO" },
                    { giorno: "04/10", ora: "16:30", evento: "REAZIONI IN CORSO: VIETATO NON CURIOSARE", relatore: "Junior Science", noprenot: "INGRESSO LIBERO" }
                ]
            }
        ];

        // questi sono i punti fuori dal festival
        const puntiFuori = [
            {
                titolo: "via IV Novembre, 19 - AVIGLIANA",
                nome: "Spazio Giovani del Comune di Avigliana",
                lat: 45.085256,
                lng: 7.395161,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "07/10", ora: "11:00", evento: "Lascia scorrere", relatore: "Riccardo Maria Degiovanni" }]
            },
            {
                titolo: "via IV Novembre, 19 - AVIGLIANA",
                nome: "Biblioteca 'Primo Levi'",
                lat: 45.085157,
                lng: 7.395287,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "09/10", ora: "16:30", evento: "Videogiochi e gioco d'azzardo", relatore: "Mauro Maurino, Marta Gullone" },
                    { giorno: "10/10", ora: "10:30", evento: "SABATI FAVOLOSI: Colori e colori", relatore: "Ilaria Franco" }
                ]
            },
            {
                titolo: "Piazza Carlo Ala, 5 - BRANDIZZO",
                nome: "Sala del Consiglio Comunale",
                lat: 45.1770235,
                lng: 7.8422854,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "04/10", ora: "11:00", evento: "Scienziatə sarai tu!", relatore: "Andrea Vico" },
                    { giorno: "04/10", ora: "15:30", evento: "Donne sulla Luna", relatore: "Ilaria Franco" },
                    { giorno: "04/10", ora: "16:30", evento: "Cosmo Hunters", relatore: "Gabriella Bernardi e Monia Othmani" }
                ]
            },
            {
                titolo: "Piazza Carlo Ala, 6 - BRANDIZZO",
                nome: "Biblioteca Civica 'Cesare Pavese'",
                lat: 45.177246,
                lng: 7.842712,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "04/10", ora: "15:30", evento: "Un cervello dell’età della pietra nell’era digitale", relatore: "Andrea Vico" }]
            },
            {
                titolo: "Via IV Novembre, 7 - CASTIGLIONE",
                nome: "Salone Polivalente",
                lat: 45.1205369,
                lng: 7.8153922,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "06/10", ora: "21:00", evento: "Reazioni nucleari che fanno bene alla salute", relatore: "Anna Vigniati" },
                    { giorno: "09/10", ora: "21:00", evento: "Reazioni: non è solo cibo", relatore: "Dott.ssa Alessandra Totaro" }
                ]
            },
            {
                titolo: "Via Po, 2 - CASTIGLIONE",
                nome: "Impianto di depurazione SMAT",
                lat: 45.132917,
                lng: 7.789323,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "04/10", ora: "Visite dalle 10:00 alle 17:00", evento: "VISITE GUIDATE ALL’IMPIANTO DI DEPURAZIONE SMAT", relatore: "SMAT" }]
            },
            {
                titolo: "Via Vittorio Emanuele II, 1 - CHIERI",
                nome: "Biblioteca Civica 'Nicolò e Paola Francone'",
                lat: 45.015165,
                lng: 7.819626,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "06/10", ora: "21:00", evento: "Mostra - 1925 2025 Payne e Leavitt", relatore: "Infini.to - Planetario di Torino" }]
            },
            {
                titolo: "Corso Francia, 275 - COLLEGNO",
                nome: "Biblioteca Civica di Collegno",
                lat: 45.071363,
                lng: 7.561855,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "10/10", ora: "10:30", evento: "Truffe online: conoscere per prevenire", relatore: "Polizia Municipale Collegno" }]
            },
            {
                titolo: "Piazza Vittorio Emanuele II, 1 - LEINI'",
                nome: "Teatro civico 'L. Pavarotti'",
                lat: 45.183748,
                lng: 7.715345,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "09/10", ora: "21:00", evento: "L'Intelligenza Artificiale e il futuro della democrazia", relatore: "Sergio Bellucci" }]
            },
            {
                titolo: "Via Cavour, 31 - MONCALIERI",
                nome: "Biblioteca Civica 'A. Arduino'",
                lat: 44.999583,
                lng: 7.686653,
                linkAgenda: "https://www.innova7.it",
                programma: [{ giorno: "08/10", ora: "18:00", evento: "La scienza dell'umore", relatore: "Marina Boido e Filippo Tempia" }]
            },
            {
                titolo: "Via A. Azzolina, 4 - NICHELINO",
                nome: "Biblioteca Civica 'G. Arpino'",
                lat: 44.994686,
                lng: 7.638140,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "05/10", ora: "20:45", evento: "Sensi, sinapsi e seduzione", relatore: "Stefano Zucca" },
                    { giorno: "09/10", ora: "20:45", evento: "La fabbrica del corpo", relatore: "Annalisa Buffo" }
                ]
            },
            {
                titolo: "Via Piave, 4 - SAN GILLIO",
                nome: "Biblioteca Civica 'Dario Guzzon'",
                lat: 45.141146,
                lng: 7.531756,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "06/10", ora: "15:00", evento: "Reazioni chimiche nel trattamento acque", relatore: "Dott.ssa Stefania De Pandis" },
                    { giorno: "08/10", ora: "15:00", evento: "Psiche e Reazioni", relatore: "Dott.ssa Bruna Costadone" },
                    { giorno: "10/10", ora: "10:00", evento: "Passaporto da scienziato", relatore: "Dott.ssa Carola Lauritano e Dott.ssa Renata Vai" }
                ]
            },
            {
                titolo: "Via XXV Aprile, 66 - SAN MAURO",
                nome: "Biblioteca Civica 'Germana Bocca'",
                lat: 45.105591,
                lng: 7.770475,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "05/10", ora: "17:00", evento: "Reazioni a catena: storie per crescere" },
                    { giorno: "09/10", ora: "15:30", evento: "Reagire all'esistenza", relatore: "Maria Giuseppa Lo Santo" }
                ]
            },
            {
                titolo: "Via Giuseppe Verdi, 18 - VENARIA REALE",
                nome: "Biblioteca Civica 'Tancredi Milone'",
                lat: 45.131597,
                lng: 7.627851,
                linkAgenda: "https://www.innova7.it",
                programma: [
                    { giorno: "09/10", ora: "19:00", evento: "Reazioni Culturali: Insieme in carcere", relatore: "DOC APS" },
                    { giorno: "10/10", ora: "11:30", evento: "La fantastica Reazione", relatore: "Antonio Argenio" }
                ]
            }
        ];

        // i punti delle bancarelle di Via Italia + i punti infopoint
        const puntiBancarelle = [
            { numero: 20, desc: "Stand n°20", lat: 45.137915, lng: 7.771674 },
            { numero: 19, desc: "Stand n°19", lat: 45.137875, lng: 7.771548 },
            { numero: 18, desc: "Stand n°18", lat: 45.137839, lng: 7.771451 },
            { numero: 17, desc: "Stand n°17", lat: 45.137748, lng: 7.771255 },
            { numero: 16, desc: "Stand n°16", lat: 45.137653, lng: 7.770875 },
            { numero: 15, desc: "Stand n°15", lat: 45.137597, lng: 7.770773 },
            { numero: 14, desc: "Stand n°14", lat: 45.137538, lng: 7.770601 },
            { numero: 13, desc: "Stand n°13", lat: 45.137426, lng: 7.770325 },
            { numero: 12, desc: "Stand n°12", lat: 45.137358, lng: 7.770322 },
            { numero: 11, desc: "Stand n°11", lat: 45.137059, lng: 7.770445 },
            { numero: 10, desc: "Stand n°10", lat: 45.137226, lng: 7.770290 },
            { numero: 9, desc: "Stand n°9", lat: 45.137298, lng: 7.770247 },
            { numero: 8, desc: "Stand n°8", lat: 45.137402, lng: 7.770123 },
            { numero: 7, desc: "Stand n°7", lat: 45.137332, lng: 7.770030 },
            { numero: 6, desc: "Stand n°6", lat: 45.137326, lng: 7.769879 },
            { numero: 5, desc: "Stand n°5", lat: 45.137273, lng: 7.769716 },
            { numero: 4, desc: "Stand n°4", lat: 45.137175, lng: 7.769507 },
            { numero: 3, desc: "Stand n°3", lat: 45.137065, lng: 7.769265 },
            { numero: 2, desc: "Stand n°2", lat: 45.136738, lng: 7.769198 },
            { numero: 1, desc: "Stand n°1", lat: 45.136812, lng: 7.769241 }
        ];

        const puntiInfo = [
            { desc: "Stand INFOPOINT (Via Italia)", lat: 45.137691, lng: 7.771094 },
            { desc: "Stand INFOPOINT (Dentro Torre)", lat: 45.136766, lng: 7.771470 }
        ];
