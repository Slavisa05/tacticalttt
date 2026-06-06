import type { Locale } from "@/i18n.config";

export interface Course {
    key?: string;
    type: "basic" | "advanced" | "special" | "medical";
    heading: string,
    image: string,
    alt: string,
    desc: string,
}

export const Courses: Course[] = [
    {
        type: "basic",
        heading: "PIŠTOLJ/REVOLVER – OSNOVNI KURS(Jedan dan)",
        image: "basic-pistol.jpg",
        alt: "devojka sa roze antifonima puca",
        desc: `**Sistem rada:** Tim za Taktički Trening

**Neophodno predznanje:** nije neophodno

**Broj polaznika u klasi:** 12 učesnika

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnom sektoru. Forma, sadržaj i dinamika prilagođeni su potrebi progresivnog napredovanja i pripremi pojedinca za učešće u složenijim oblicima taktičke obuke.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem
- nošenje oružja i municije
- potezanje, nišanjenje i gađanje
- osnovne tehnike gađanja
- upotreba dominantne i nedominantne ruke za gađanje
- položaji/stavovi za gađanje
- kretanje sa oružjem
- prelazak iz jednog stava/položaja u drugi
- korišćenje zaklona
- gađanje u pokretu
- gađanje pokretnih meta
- zastoji, tipovi, otklanjanje
- promena/zamena magacina (brza/hitna, taktička, taktička sa zadrškom)

**Neophodna oprema:**
- 300 metaka
- lično oružje pištolj/revolver 
- taktički remnik
- futrola/nosač za pištolj/revolver 
- rezervni magacin/punjači za pištolj/revolver (2+1)
- nosač rezervnih magacina za pištolj/brzopunjač za revolver 

**Radna odeća:**
- uniforma/odelo /neformalna odeća 
- obuća

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- taktički kačket
- jakna otporna na vetar
- zaštita za kolena i laktove (preporučuje se)
- komplet za čišćenje oružja
- flaša/tremos/camelback za vodu
- sveska i olovka (preporučuje se)
- mali taktički leđni ranac (preporučuje se )
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 40.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora
- iznajmljivanje/korišćenje pištolja/revolvera, municije, magacina/brzih punjača, futrole/nosača za pištolj/revolver, nosača rezervnih magacina za pištolj i brzopunjača za revolver
- taktički kačket sa znakom/vezom TTT
- učesnički sertifikat/diploma

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        heading: "PUŠKA – OSNOVNI KURS (Jedan dan)",
        image: "basic-rifle.jpg",
        alt: "muškarac nišani sa AK47",
        desc: `**Sistem rada:** Tim za Taktički Trening

**Neophodno predznanje:** nije neophodno

**Broj polaznika u klasi:** 12 učesnika

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnom sektoru. Forma, sadržaj i dinamika prilagođeni su potrebi progresivnog napredovanja i pripremi pojedinca za učešće u složenijim oblicima taktičke obuke u korišćenju puške.

**Kurs ima za cilj:** kurs je dizajniran da pruži znanja i veštine u sigurnom, taktički ispravnom i veštom korišćenju puške.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem
- nošenje puške i municije
- nanošenje, nišanjenje i gađanje
- osnovne tehnike gađanja
- upotreba dominantne i nedominantne ruke/ramena za gađanje 
- položaji/stavovi za gađanje
- kretanje sa oružjem
- prelazak iz jednog stava/položaja u drugi
- korišćenje zaklona
- gađanje u pokretu
- gađanje pokretnih meta
- zastoji, tipovi, otklanjanje
- promena/zamena magacina (brza/hitna, taktička, taktička sa zadrškom)

**Neophodna oprema:**
- 300 metaka
- puška AK47/M70/M4 
- magacin za pušku 
- taktički remnik
- nosač rezervnih magacina/taktički prsluk  

**Radna odeća:**
- uniforma/odelo /neformalna odeća 
- obuća

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- taktički kačket
- jakna otporna na vetar
- zaštita za kolena i laktove (preporučuje se)
- komplet za čišćenje oružja
- flaša/tremos/camelback za vodu
- sveska i olovka (preporučuje se)
- mali taktički leđni ranac (preporučuje se )
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 65.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora
- iznajmljivanje/korišćenje puške, municije, magacina, taktički remnik, taktički prsluk
- taktički kačket sa znakom/vezom TTT
- učesnički sertifikat/diploma

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        heading: "TAKTIČKA PUŠKA SAČMARICA – OSNOVNI KURS (Jedan dan)",
        image: "basic-shotgun.jpg",
        alt: "muškarac puca iz sačmarice",
        desc: `**Sistem rada:** Tim za Taktički Trening

**Neophodno predznanje:** nije neophodno

**Broj polaznika u klasi:** 12 učesnika

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnom sektoru. Forma, sadržaj i dinamika prilagođeni su potrebi progresivnog napredovanja i pripremi pojedinca za učešće u složenijim oblicima taktičke obuke u korišćenju taktičke puške sačmarice.

**Kurs ima za cilj:** kurs je dizajniran da pruži znanja i veštine u sigurnom, taktički ispravnom i veštom korišćenju taktičke puške sačmarice.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem
- nošenje taktičke puške sačmarice i municije
- nanošenje, nišanjenje i gađanje
- osnovne tehnike gađanja
- upotreba dominantne i nedominantne ruke/ramena za gađanje 
- položaji/stavovi za gađanje
- kretanje sa oružjem
- prelazak iz jednog stava/položaja u drugi
- korišćenje zaklona
- gađanje u pokretu
- gađanje pokretnih meta
- zastoji, tipovi, otklanjanje 
- punjenje i prepunjavanje puške manuleno/brzim punjačem

**Neophodna oprema:**
- 150 metaka (100 TRAP; 30 .00; 20 SLUG)
- taktička puška sačmarica pump-gun/semi-auto 
- taktički remnik
- brzi punjač/nosač municije  

**Radna odeća:**
- uniforma/odelo /neformalna odeća 
- obuća

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- taktički kačket
- jakna otporna na vetar
- zaštita za kolena i laktove (preporučuje se)
- komplet za čišćenje oružja
- flaša/tremos/camelback za vodu
- sveska i olovka (preporučuje se)
- mali taktički leđni ranac (preporučuje se )
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 45.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora
- iznajmljivanje/korišćenje puške, municije, magacina, taktički remnik
- brzi punjač/nosač municije
- taktički kačket sa znakom/vezom TTT
- učesnički sertifikat/diploma

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        heading: "IDPA Osnovni + Klasifikacioni Kurs (Jedan dan)",
        image: "basic-idpa.jpg",
        alt: "muškarac puca iz pištolja dok je instruktor iza njega",
        desc: `**Sistem rada:** Tim za Taktički Trening - IDPA

**Neophodno predznanje:** osnovni kurs pištolj/revolver/PCC

**Broj polaznika u klasi:** 8 do 10 učesnika    

**Kurs je namenjen:** kurs je svojom formom, sadržajem i dinamikom namenjen polaznicima, strelcima koji žele da steknu osnovna znanja i veštine o IDPA kao defanzivnom-streljačkom sportu i veštini defanzivne upotrebe oružja, u cilju bavljenja takmičarskim aktivnostima ili podizanju sopstvenog ličnog znanja i veštine defanzivne upotrebe oružja.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem
- oprema vrste i načini nošenja i upotrebe 
- IDPA istorijat, nastanak, razvoj, pravila 
- test osnovnih streljačkih veština 
- stavovi/pozicije
- jača/slabija ruka 
- gađanje statičnih/pokretnih meta 
- gađanje u pokretu 
- zamena magacina 
- taktički scenario 
- gađanje zvaničnog Klasifikacionog kursa

**Neophodna oprema:**
- 200 metaka
- oružje pištolj/revolvre/PCC 
- nosač za pištolj/revolver
- nosač magacina, magacin za pištolj/PCC  
- brzi punjač za revolver (2+1)  

**Radna odeća:**
- radna odeća
- obuća
- IDPA prsluk

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- taktički kačket
- jakna otporna na vetar
- zaštita za kolena i laktove (preporučuje se)
- komplet za čišćenje oružja
- flaša/tremos/camelback za vodu
- sveska i olovka (preporučuje se)
- mali taktički leđni ranac (preporučuje se )
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 30.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora
- iznajmljivanje/korišćenje pištolja/revolvera/PCC, municije, magacina/brzih punjača, futrole/nosača za pištolj/revolver, nosača rezervnih magacina za pištolj, brzopunjača za revolver, PCC
- zaštitu za uši/aktivni antifoni PELTOR i zaštitne naočare
- osveženje (kafa, čaj, sok...)
- taktički kačket sa znakom/vezom TTT
- registraciju postignute klase na [www.idpa.com](https://idpa.com/) i učesnički sertifikat/diploma

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        heading: "OSNOVNI SNAJPERSKI KURS (Tri dana)",
        image: "basic-sniper.jpg",
        alt: "muškarac ležeći nišani snajperom",
        desc: `**Sistem rada:** Tim za Taktički Trening 

**Neophodno predznanje:** preporuka kurs PUŠKA PRECIZNI STRELAC, nije neophodno

**Broj polaznika u klasi:** 12 učesnika    

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnom sektora. Forma, sadržaj i dinamika su prilagođeni potrebama pojedincu sticanju bazičnih opštih i specijalističkih znanja, informacija, podataka i praktičnih veština u rukovanju snajperskim sistemom, u cilju stvaranja stručne osnove za daljim progresivnim napredovanjem i pripremi pojedinca za učešće u složenijim oblicima obuke i treninga u primeni snajperskog sistema.

**Sadržaj:**
- Istorija razvoja snajperske doktrine/oružja/sistema 
- Organizacija snajperskog tima u vojnoj/policijskoj doktrini 
- Snajperski tim (organizacija, dužnosti, odgovornosti) 
- Snajperska puška (lake, srednje, teške) 
- Optički nišan (vrste, karakteristike, upotreba...) 
- Durbin, dvogled, lasreki merač daljine 
- Končanica (vrsta, karakteristike, upotreba, FFP/SFP) 
- MIL/MOA -Balistička meteo stanica - Municija (vrste, karakteristike, upotreba...) 
- Retifikacija puške(tehnička/taktička) 
- Balistika metka (interna, eksterna, termalna) 
- Primenjena balistika (linija nišanjenja, linija polaska zrna, trajektorija, pad zrna, efikasna daljina, krajnja daljina, ubitačna daljina, vreme leta zrna, gravitacija, spin drift, temperatura, barometrijski pritisak, nadmoska visina, vlažnost vazduha, elevacija, depresija, vetar, čitanje balističkih tablica..) 
- Retifikacija puške (tehnička/taktička) 
- Test mehaničke kalibracije optičkog nišana (Tall Target Test) 
- Snajperski administrativni alat (Dnevnik osmatranja/Observation logbooks; Snajperska knjiga podataka/Sniper data book; Karta za pokazivanje daljine/Range cards; alat za univerzalno crtanje i dokumentovanje 
- Određivanje daljine do cilja, veličine cilja 
- Hold-over 
- Upotreba prigušivača/razbijača zvuka u snajperskim dejstvima 
- Snajperska puška velikog kalibra(12,7mm), vrste , karakteristike, koncept upotrebe 
- Upotreba računarskih balističkih programa- Praktične vežbe sa gađanjem
- Aktulena dešavanja i primena snajperske doktrine u Ukrajni, Gazi, Iraqu, Siriji, Africi

**Neophodna oprema:**
- Snajperska puška u kalibru 7,62x51 ili ekvivalentnom srednjem kalibru
- Snajperska puška velikog kalibra 12,7mm 
- Metak 7,62x51 M118; 12,7 M09 ili ekvivalentni kalibri, snajperskog/meč tipa 
- Osmatrački taktički durbin HENSOLDT 20-60X 
- Balistička metostanica KESTREL 5700 
- Balistički računar GARMIN SCAUT 
- Laserski merač daljine VECTOR LEICA
- Ručni digitron sa osvetljenjem 
- Oprema za kamuflažu 

**Radna odeća:**
- radna odeća
- obuća

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- rukavice
- taktički kačket
- taktička lampa sa setom rezervnih baterija 
- Ručna radio stanica sa rezervnom baterijom 
- jakna otporna na vetar, kišu
- komplet za čišćenje oružja
- spremište za vodu
- Sveska i olovka, pribor za taktičko crtanje 
- mali taktički ranac 

**Cena: 240.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- Oružje, municija i sva neophodna oprema za učešće na kursu 
- Isharana i smeštaj, voće, voda, sokovi… 
- Aktivno prisustvo TTT osoblja 
- Potpuna podrška u kontaktima i komunikaciji sa lokalnim i državnim predstavnicima administracije i službi bezbednosti 
- Sertifikat o učešću 
- DVD/fotografije 
- Završna večera

**Način plaćanja:** avansno 100%, prilikom prijave na kurs

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "advanced",
        heading: "PIŠTOLJ/REVOLVER – NAPREDNI TAKTIČKI KURS (Jedan dan)",
        image: "advanced-pistol.jpg",
        alt: "muškarac repertira pištolj iza bureta",
        desc: `**Sistem rada:** Tim za Taktički Trening 

**Neophodno predznanje:** PIŠTOLJ/REVOLVER Osnovni Kurs

**Broj polaznika u klasi:** 12 učesnika    

**Način rada:** individualni, timski

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnom sektoru. Kurs je projektovan da ponudi informacije i da razvije progresivne veštine u taktičkoj upotrebi pištolja/revolvera u različitim taktičkim situacijama. Učesnici stiču napredna znanja i taktičku rutinu u upotrebi oružja, primenjujući taktička pravila i procedure.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem 
- napredne tehnike nošenje oružja i municije 
- izbor odeće i opreme i njeno prilagođavanje taktičkim situacijama 
- upotreba vozila kao zaklona 
- gađanje iz vozila 
- gađanje u uslovima smanjene vidljivosti 
- gađanje podzaštitnom hemijskom maskom 
- taktičke vežbe 
- gađanje sa partnerom/timom

**Neophodna oprema:**
- 800 metaka 
- lično oružje pištolj/revolver 
- futrola/nosač za pištolj/revolver 
- rezervni magacini/punjači za pištolj/revolver (2+1) 
- nosač rezervnih magacina za pištolj/brzopunjač za revolver 
- taktička ručna lampa sa rezervnim baterijama 
- hemijska zaštitna maska 
- hemijsko svetlo

**Radna odeća:**
- uniforma/odelo /neformalna odeća
- obuća

**Zaštitna oprema:**
- naočare
- zaštita sluha/antifoni
- taktički kačket
- jakna otporna na vetar
- zaštita za kolena i laktove (preporučuje se)
- komplet za čišćenje oružja
- flaša/tremos/camelback za vodu 
- Sveska i olovka, pribor za taktičko crtanje 
- sveska i olovka (preporučuje se) 
- mali taktički leđni ranac(preporučuje se) 
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 80.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora 
- iznajmljivanje/korišćenje pištolja/revolvera, municije, magacina/brzih punjača, futrole/nosača zapištolj/revolver, nosača rezervnih magacina za pištolj i brzopunjača za revolver
- zaštitu sluha/aktivni antifoni PELTOR i zaštitne naočare
- osveženje(kafa, čaj, sok...)
- taktički kačket sa znakom/vezom TTT 
- učesnički sertifikat/diploma i sva ostala MTS koja su neophodna za bezbedan i produktivan rad  na kursu 

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
]

const CoursesEng: Course[] = [

]

export const coursesByLocale: Record<Locale, Course[]> = {
    sr: Courses,
    // TODO: Replace with translated English course content.
    en: CoursesEng,
};

export const getCourses = (lang: Locale): Course[] => {
    return coursesByLocale[lang] ?? coursesByLocale.sr;
};