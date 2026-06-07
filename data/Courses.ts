import type { Locale } from "@/i18n.config";

export interface Course {
    key?: string;
    type: "basic" | "advanced" | "special" | "medical";
    label: string,
    heading: string,
    image: string,
    alt: string,
    desc: string,
}

export const Courses: Course[] = [
    {
        type: "basic",
        label: "pištolj",
        heading: "PIŠTOLJ/REVOLVER – OSNOVNI KURS (Jedan dan)",
        image: "/basic-pistol.jpg",
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
        label: "puška",
        heading: "PUŠKA – OSNOVNI KURS (Jedan dan)",
        image: "/basic-rifle.jpg",
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
        label: "sačmarica",
        heading: "TAKTIČKA PUŠKA SAČMARICA – OSNOVNI KURS (Jedan dan)",
        image: "/basic-shotgun.jpg",
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
        label: "idpa",
        heading: "IDPA Osnovni + Klasifikacioni Kurs (Jedan dan)",
        image: "/basic-idpa.jpg",
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
        label: "snajper",
        heading: "OSNOVNI SNAJPERSKI KURS (Tri dana)",
        image: "/basic-sniper.jpg",
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
        label: "pištolj",
        heading: "PIŠTOLJ/REVOLVER – NAPREDNI TAKTIČKI KURS (Jedan dan)",
        image: "/advanced-pistol.jpg",
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
    {
        type: "advanced",
        label: "puška",
        heading: "PUŠKA – NAPREDNI TAKTIČKI KURS (Jedan dan)",
        image: "/advanced-rifle.jpg",
        alt: "muškarac stoji sa puškom i gas maskom",
        desc: `**Sistem rada:** Tim za Taktički Trening 

**Neophodno predznanje:** PUŠKA Osnovni Kurs

**Broj polaznika u klasi:** 12 učesnika    

**Način rada:** individualni, timski

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnom sektoru. Kurs je projektovan da ponudi informacije i da razvije progresivne veštine u taktičkoj upotrebi puške u različitim taktičkim situacijama. Učesnici stiču napredna znanja i taktičku rutinu u upotrebi puške, primenjujući taktička pravila i procedure.

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
- puška AK47/M70/M92/M21/M4 
- magacin za pušku 
- taktički remnik 
- nosač rezervnih magacina/taktički prsluk 
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
- sveska i olovka (preporučuje se) 
- mali taktički leđni ranac(preporučuje se) 
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 130.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora 
- iznajmljivanje/korišćenje puške, municije, magacina, taktički remnik, taktički prsluk
- zaštitu sluha/aktivni antifoni PELTOR i zaštitne naočare
- osveženje(kafa, čaj, sok...)
- taktički kačket sa znakom/vezom TTT 
- učesnički sertifikat/diploma i sva ostala MTS koja su neophodna za bezbedan i produktivan rad  na kursu 

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "advanced",
        label: "sačmarica",
        heading: "TAKTIČKA PUŠKA SAČMARICA – NAPREDNI TAKTIČKI KURS (Jedan dan)",
        image: "/advanced-shotgun.jpg",
        alt: "muškarac sedeći iz auta nišani sačmaricom",
        desc: `**Sistem rada:** Tim za Taktički Trening 

**Neophodno predznanje:** TAKTIČKA PUŠKA SAČMARICA Osnovni Kurs

**Broj polaznika u klasi:** 12 učesnika    

**Način rada:** individualni, timski

**Kurs je namenjen:** aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama i civilnog sektora. Kurs je projektovan da ponudi informacije i da razvije progresivnu veštinu u taktičkoj upotrebi taktičke puške sačmarice u različitim taktičkim situacijama. Učesnici stiču napredna znanja i taktičku rutinu u upotrebi taktičke puške sačmarice primenjujući taktička pravila i procedure.

**Sadržaj:**
- bezbednosne procedure u radu sa vatrenim oružjem, taktičkom puškom sačmaricom
- napredne tehnike nošenje oružja i municije 
- izbor odeće i opreme i njeno prilagođavanje taktičkim situacijama 
- tehnike punjenja i prepunjavanja
- upotreba vozila kao zaklona 
- gađanje iz vozila 
- gađanje u uslovima smanjene vidljivosti
- balistički efekat sačmene municije na meti  
- gađanje podzaštitnom hemijskom maskom 
- taktičke vežbe 
- gađanje sa partnerom/timom

**Neophodna oprema:**
- 350 metaka (250 Trap, 50 Slug, 50 .00) 
- taktička puška sačmarica pump-gun/semi-auto 
- taktički remnik 
- nosač municije

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
- mali taktički leđni ranac(preporučuje se) 
- IFAK – komplet prve pomoći (preporučuje se)

**Cena: 70.000,00 dinara (uključen PDV 20%)**

**Cena uključuje:**
- angažovanje instruktora 
- iznajmljivanje/korišćenje puške, municije, magacina, taktički remnik, taktički prsluk
- zaštitu sluha/aktivni antifoni PELTOR i zaštitne naočare
- osveženje(kafa, čaj, sok...)
- taktički kačket sa znakom/vezom TTT 
- učesnički sertifikat/diploma i sva ostala MTS koja su neophodna za bezbedan i produktivan rad  na kursu 

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "special",
        label: "taktički operativac",
        heading: "TAKTIČKI OPERATIVAC (6 – 8 dana/noć)",
        image: "/special-course.jpg",
        alt: "3 muškaraca iza auta sa puškama",
        desc: `**Sistem rada:** Tim za Taktički Trening 

**Neophodno predznanje:** PIŠTOLJ, PUŠKA Napredni Taktički Kurs

**Broj polaznika u klasi:** 12 učesnika    

**Način rada:** individualni, timski

**Kurs je namenjen:** ovo je intenzivan kurs u trajanju od 6-8 dana, uključujući i noćne vežbe, projektovan je da pripremi pojedinca kao člana tima za izvođenje operacija u uslovima visokog rizika i da pruži informacije, znanja i praktičan trening za te ekstremne uslove boravka i rada u regionima visokog rizika. Kurs je namenjen pojedincima, privatnim kontarktorima, pripadnicima vojnih/policijskih/diplomatskih službi.

**Sadržaj:**
- Dužnosti i odgovornosti operativaca 
- Organizacija tima, dužnosti, zadaci, raspodela dužnosti, odgovornost 
- Prezentovanje informacija i uvidu trenutno stanje u regionima visokog rizika (Avganistan, Irak, Afrika, …) sa aspekta bezbednosnih, kulturnih, verskih i društveno-političkih prilika 
- Prijateljski elementi (lokalne vlasti, međunarodne organizacije, drugi timovi, protokoli o saradnji, podršci, razmeni informacija i zajedničkom radu) 
- Neprijateljski elementi ( teroristi, fundamentalisti, organizovane grupe „pokreta otpora“, organizovani kriminal, plemenska/seoska milicija)
- Kapaciteti,organizacija, hijerarhija, taktika, naoružanje (video prezentacije, analiza konkretnih incidenata, autentično svedočenje učesnika, diskusija, pitanja/odgovori 
- Mere prevencije (kontraobaveštajna zaštita, plasiranje dezinoformacija, kontrola i zaštita bitnih podataka, prikupljanje informacija, analiza, korišćenje/arhiviranje bitnih informacija) 
- Mere ranog otkrivanja/detekcije napada 
- Reaktivne mere (zaštita VIP, transport,patrola,…) 
- Taktička vožnja, konvoj, izbor ruta 
- Evakuacije vozila i spašavanje na otvorenom 
- IED/VBIED prepoznavanje i karakteristike 
- Upoznavanje sa stranim oružjem 
- Visokorizične Pešačke formacije 
- Timski rad u uslovima visokog rizika 
- Borba u urbanoj sredini 
- Radio procedure, savremena sredstva komunikacije, karakteristike i taktička upotreba 
- Operacije u uslovima slabe vidljivosti/noć 
- Taktička medicina (savremena praksa ratne medicine , BLS, Quick Clot, Chest Seal, mobilni deflibrator, prvi zavoj,…)

**Neophodna oprema:**
- lično oružje, puška AK47/M70/M92/M21/M4, taktička puška sačmarica kalibra .12, pištolj Glock 17/19, M9, SIG,...ili drugo oružje u operativnoj upotrebi 
- Municija: 1.000 metaka pištoljske municije; 1.500 metaka puščane municije i 100 metaka sačmene municije 
- Magacin za pušku 8 komada, za pištolj 4 
- Ručne dimne i CS bombe

**Radna odeća:**
- Uniforma/radna odeća (terenske pantalone i majice sa dugim rukavima)
- obuća

**Zaštitna oprema:**
- Sportska oprema 
- Balistički prsluk, Taktički šlem 
- Taktički prsluk 
- Zaštita kolena i laktova 
- Prva pomoć IFAK/prvi zavoj 
- Flaša za vodu 
- Radio komunikacija 
- Zaštita sluha/antifoni 
- Zaštitne naočare 
- GPS 
- Taktička lampa 
- Oprema za kišu, vetar i hladnoću, šešir , kapa,… 
- Sveska i olovka

**Cena: KONTAKTIRAJTE NAS**

**Cena uključuje:**
- angažovanje instruktorskog tima
- hotelski smeštaj i ishranu 
- tri obroka dnevno 
- prevoz učesnika kursa od aerodroma do hotela 
- tokom celog kursa i nazad od hotela do aerodroma 
- oružje, municija i sva neophodna oprema 
- vozila za trening 
- lekarski pregled učesnika kursa pre početka kursa i praćenjetokom kursa
- medicinska podrška tokom celog kursa (24 sata)
- kompletna podrška u kontaktima i komunikaciji sa državnim/lokalnim predstavnicima administrativne uprave i službi bezbednosti
- 24 sata prisustvo i aktivno učešće prevodioca (engleski, francuski, ruski,…) 
- osveženje (kafa, čaj, sok...)
- učesnička majca i taktički kačket
- završna svečana večera 
- ceremonija dodele sertifikata o učešću na kursu i sva ostala MTS koja su neophodna za bezbedan i produktivan rad na kursu

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 30 dana pre početka kursa

**VAŽNO OBAVEŠTENJE:** učesnici kursa mogu da koriste sopstveno ili kompanijsko, službeno naoružanje, municiju i drugu opremu, uz prethodno dostavljeno pismeno obaveštenje/potvrdu o zakonitom vlasništvu oružja i municije, u skladu sa važećim Zakonskim propisima Republike Srbije, i drugim međunarodnim aktima koji se odnose na vlasništvo i upotrebu oružja i municije.

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
    {
        type: "medical",
        label: "BLS + AED",
        heading: "Kurs Osnovne Životne Potpore + Spoljašnja Defibrilacija (4-5 sati)",
        image: "/medical-course.jpg",
        alt: "demonstracija izvođenja cpr-a",
        desc: `**Sistem rada:** Evropski Resuscitacioni Savet-ERC – Tactical Training Team – Authorized Training Center 

**Neophodno predznanje:** BLS - nije neophodno; AED – završen kurs, važeći BLS sertifikat

**Broj polaznika u klasi:** 12 učesnika    

**Kurs je namenjen:** civilnom sektoru, svakom pojedincu koji se može naći u situaciju da osoba u njegovoj neposrednoj blizini doživi srčani zastoj, izgubi svest i prestane da diše, aktivnom osoblju policije, vojske, privatnim vojnim/bezbednosnim kompanijama, koji po prirodi svog posla se mogu češće naći u situacijama, gde pravovremena stručna pomoć može spasiti život kolege, štićene osobe, klijenta.

**Sadržaj:** program kusra čine dva nezavisna kursa, koja zajedno čine integralnu celinu:

**1. Kurs Osnovne Životne Potpore (BLS)**
sadrži interaktivna predavanja, demonstracije veština, video prikaz, ima izrazit akcenat na uvežbavanju manuelnih veština i praktičnom radu na lutkama – manekenima. Sadržaj kursa baziran je na trenutno važećim Preporukama ERC-a koje se odnose na osnovnu životnu potporu. 
Uvežbava se primena protokola sa jednim spasiocem – sprovodiocem kardiopulmonalne resuscitacije kao i rad u timu od dva, tri spasioca uz primenu odgovarajućih sredstava za obezbedjivanje disajnog puta i ventilaciju.Međunarodni sertifikat BLS AED Provider Certifikat se dodeljuje učesnicima kursa  koji prisustvuju predvidjenom i definisanom fondu časova i uspešno polože test koji se odnosi na praktičan rad. 
Sertifikat ima rok važenja od jedne godine, u kom period je neophodno uraditi retrening, recertifikacija u cilju produženja važnosti. ERC obezbeđuje vrlo jednostavan i brz način provere validnosti sertifikata, putem ličnog ID koda i usluge interneta.

**2. Kurs Spoljašnja Defibrilacija (AED)**
kurs primene Automatskih spoljašnjih defibrilatora – ERC AED  pruža zdravstvenim profesionalcima i osobama – spasiocima koje imaju pravo da tokom resuscitacije primene automatski spoljašnji defibrillator, odgovarajuće znanje omogučuje savladavanje potrebnih praktičnih veština za njegovu primenu kod pacijenata sa zastojem rada srca. 
Kurs sadrži kratki teoretski deo ali je njegova osnova praktično uvežbavanje primene automatskog spoljašnjeg defibrilataora kroz savladavanje različitih scenarija. Kurs se odvija kroz rad u maloj grupi, svaki pojedinac ima obavezu i mogučnosti da usvoji potrebna znanja i veštine. Uvežbava se primena AED protokola sa jednim sprovodiocem mera kardiopulmonalne resuscitacije na početku kursa da bi se potom uvežbavao rad sa u timu od dva, tri spasioca. 
Sertifikat ima rok važenja od jedne godine, u kom period je neophodno uraditi retrening, recertifikacija u cilju produženja važnosti. ERC obezbeđuje vrlo jednostavan i brz način provere validnosti sertifikata, putem ličnog ID koda i usluge interneta.

**Neophodna oprema:** kompletnu opremu obezbeđuje TTT

**Cena: KONTAKTIRAJTE NAS**

**Cena uključuje:**
angažovanje sertifikovanog instruktorskog tima, medicinska i nemedicinska sredstva i opremu neophodnu za realizaciju kursa, izdavanje međunardonog sertifikata

**Način plaćanja:** 100% unapred, prilikom prijave na kurs, minimalno 15 dana pre početka kursa, putem tekućeg računa

**Vreme održavanja kursa:** po zahtevu učesnika

**Informacije, prijava i registracija:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Telefon:** 060/ 07 27 032`,
    },
]

const CoursesEng: Course[] = [
    {
        type: "basic",
        label: "pistol",
        heading: "PISTOL/REVOLVER – BASIC COURSE (One day)",
        image: "/basic-pistol.jpg",
        alt: "girl with pink headphones shooting",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** not necessary

**Number of participants in class:** 12 participants

**Course is intended for:** active police personnel, military, private military/security companies and the civilian sector. The form, content and dynamics are adapted to meet the needs of progressive advancement and preparation of individuals for participation in more complex forms of tactical training.

**Content:**
- safety procedures in handling firearms
- carrying weapons and ammunition
- drawing, aiming and shooting
- basic shooting techniques
- use of dominant and non-dominant hand for shooting
- shooting positions/stances
- movement with weapons
- transition from one stance/position to another
- use of cover
- shooting while moving
- shooting moving targets
- malfunctions, types, elimination
- magazine change/replacement (fast/emergency, tactical, tactical with retention)

**Required Equipment:**
- 300 rounds
- personal pistol/revolver
- tactical belt
- holster/carrier for pistol/revolver
- spare magazines/loaders for pistol/revolver (2+1)
- carrier for spare magazines for pistol/fast loader for revolver

**Work Clothes:**
- uniform/suit/casual clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 40,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of pistol/revolver, ammunition, magazines/fast loaders, holster/carrier for pistol/revolver, carrier for spare magazines for pistol and fast loader for revolver
- tactical cap with TTT sign/logo
- participant certificate/diploma

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        label: "rifle",
        heading: "RIFLE – BASIC COURSE (One day)",
        image: "/basic-rifle.jpg",
        alt: "man aiming with AK47",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** not necessary

**Number of participants in class:** 12 participants

**Course is intended for:** active police personnel, military, private military/security companies and the civilian sector. The form, content and dynamics are adapted to meet the needs of progressive advancement and preparation of individuals for participation in more complex forms of tactical training in rifle use.

**Course aims:** the course is designed to provide knowledge and skills in safe, tactically correct and skillful use of the rifle.

**Content:**
- safety procedures in handling firearms
- carrying rifle and ammunition
- drawing, aiming and shooting
- basic shooting techniques
- use of dominant and non-dominant hand/shoulder for shooting
- shooting positions/stances
- movement with weapons
- transition from one stance/position to another
- use of cover
- shooting while moving
- shooting moving targets
- malfunctions, types, elimination
- magazine change/replacement (fast/emergency, tactical, tactical with retention)

**Required Equipment:**
- 300 rounds
- rifle AK47/M70/M4
- rifle magazine
- tactical belt
- carrier for spare magazines/tactical vest

**Work Clothes:**
- uniform/suit/casual clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 65,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of rifle, ammunition, magazines, tactical belt, tactical vest
- tactical cap with TTT sign/logo
- participant certificate/diploma

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        label: "shotgun",
        heading: "TACTICAL SHOTGUN – BASIC COURSE (One day)",
        image: "/basic-shotgun.jpg",
        alt: "man shooting from shotgun",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** not necessary

**Number of participants in class:** 12 participants

**Course is intended for:** active police personnel, military, private military/security companies and the civilian sector. The form, content and dynamics are adapted to meet the needs of progressive advancement and preparation of individuals for participation in more complex forms of tactical training in tactical shotgun use.

**Course aims:** the course is designed to provide knowledge and skills in safe, tactically correct and skillful use of the tactical shotgun.

**Content:**
- safety procedures in handling firearms
- carrying tactical shotgun and ammunition
- drawing, aiming and shooting
- basic shooting techniques
- use of dominant and non-dominant hand/shoulder for shooting
- shooting positions/stances
- movement with weapons
- transition from one stance/position to another
- use of cover
- shooting while moving
- shooting moving targets
- malfunctions, types, elimination
- loading and reloading shotgun manually/with fast loader

**Required Equipment:**
- 150 rounds (100 TRAP; 30 .00; 20 SLUG)
- tactical shotgun pump-gun/semi-auto
- tactical belt
- fast loader/ammunition carrier

**Work Clothes:**
- uniform/suit/casual clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 45,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of shotgun, ammunition, magazines, tactical belt
- fast loader/ammunition carrier
- tactical cap with TTT sign/logo
- participant certificate/diploma

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        label: "idpa",
        heading: "IDPA Basic + Classification Course (One day)",
        image: "/basic-idpa.jpg",
        alt: "man shooting from pistol while instructor is behind him",
        desc: `**Working System:** Tactical Training Team - IDPA

**Required Knowledge:** basic pistol/revolver/PCC course

**Number of participants in class:** 8 to 10 participants

**Course is intended for:** the course, through its form, content and dynamics, is intended for participants, shooters who want to gain basic knowledge and skills about IDPA as a defensive-shooting sport and skill of defensive weapon use, with the aim of engaging in competitive activities or improving their own personal knowledge and skill of defensive weapon use.

**Content:**
- safety procedures in handling firearms
- equipment types and methods of carrying and use
- IDPA history, origin, development, rules
- test of basic shooting skills
- stances/positions
- strong/weak hand
- shooting stationary/moving targets
- shooting while moving
- magazine change
- tactical scenario
- shooting official Classification course

**Required Equipment:**
- 200 rounds
- pistol/revolver/PCC
- holster for pistol/revolver
- magazine carrier, magazine for pistol/PCC
- fast loader for revolver (2+1)

**Work Clothes:**
- work clothes
- footwear
- IDPA vest

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 30,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of pistol/revolver/PCC, ammunition, magazines/fast loaders, holster/carrier for pistol/revolver, carrier for spare magazines for pistol, fast loader for revolver, PCC
- hearing protection/active PELTOR headphones and protective glasses
- refreshments (coffee, tea, juice...)
- tactical cap with TTT sign/logo
- registration of achieved class on [www.idpa.com](https://idpa.com/) and participant certificate/diploma

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "basic",
        label: "sniper",
        heading: "BASIC SNIPER COURSE (Three days)",
        image: "/basic-sniper.jpg",
        alt: "man lying aiming with sniper rifle",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** recommendation RIFLE PRECISION SHOOTER course, not necessary

**Number of participants in class:** 12 participants

**Course is intended for:** active police personnel, military, private military/security companies and the civilian sector. The form, content and dynamics are adapted to meet individual needs to acquire basic general and specialist knowledge, information, data and practical skills in handling sniper systems, with the aim of creating a professional foundation for further progressive advancement and preparation of individuals for participation in more complex forms of training and practice in sniper system application.

**Content:**
- History of sniper doctrine/weapons/systems development
- Organization of sniper team in military/police doctrine
- Sniper team (organization, duties, responsibilities)
- Sniper rifle (light, medium, heavy)
- Optical sight (types, characteristics, use...)
- Telescope, binoculars, laser rangefinder
- Reticle (type, characteristics, use, FFP/SFP)
- MIL/MOA - Ballistic weather station - Ammunition (types, characteristics, use...)
- Rifle rectification (technical/tactical)
- Bullet ballistics (internal, external, thermal)
- Applied ballistics (line of sight, line of bullet departure, trajectory, bullet drop, effective range, maximum range, lethal range, bullet flight time, gravity, spin drift, temperature, barometric pressure, elevation, humidity, elevation, depression, wind, reading ballistic tables...)
- Rifle rectification (technical/tactical)
- Mechanical calibration test of optical sight (Tall Target Test)
- Sniper administrative tools (Dnevnik osmatranja/Observation logbooks; Sniper data book; Range cards; universal drawing and documentation tool
- Determining distance to target, target size
- Hold-over
- Use of suppressors/sound reducers in sniper operations
- Large caliber sniper rifle (12.7mm), types, characteristics, concept of use
- Use of computer ballistic programs
- Practical shooting exercises
- Current events and application of sniper doctrine in Ukraine, Gaza, Iraq, Syria, Africa

**Required Equipment:**
- Sniper rifle in 7.62x51 caliber or equivalent medium caliber
- Large caliber sniper rifle 12.7mm
- Ammunition 7.62x51 M118; 12.7 M09 or equivalent caliber, sniper/match type
- Tactical observation telescope HENSOLDT 20-60X
- Ballistic weather station KESTREL 5700
- Ballistic computer GARMIN SCOUT
- Laser rangefinder VECTOR LEICA
- Hand calculator with illumination
- Camouflage equipment

**Work Clothes:**
- work clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- gloves
- tactical cap
- tactical lamp with set of spare batteries
- Hand radio station with spare battery
- wind and water resistant jacket
- weapon cleaning kit
- water container
- Notebook and pen, tactical drawing supplies
- small tactical backpack

**Price: 240,000.00 RSD (VAT 20% included)**

**Price Includes:**
- Weapons, ammunition and all necessary equipment for course participation
- Food and accommodation, fruit, water, juices…
- Active presence of TTT personnel
- Complete support in contacts and communication with local and state representatives of administration and security services
- Certificate of participation
- DVD/photographs
- Closing dinner

**Payment Method:** 100% in advance, upon course registration

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "advanced",
        label: "pistol",
        heading: "PISTOL/REVOLVER – ADVANCED TACTICAL COURSE (One day)",
        image: "/advanced-pistol.jpg",
        alt: "man repeating pistol behind barricade",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** PISTOL/REVOLVER Basic Course

**Number of participants in class:** 12 participants

**Course method:** individual, team

**Course is intended for:** active police personnel, military, private military/security companies and the civilian sector. The course is designed to provide information and develop progressive skills in tactical use of pistol/revolver in various tactical situations. Participants acquire advanced knowledge and tactical routine in weapon use, applying tactical rules and procedures.

**Content:**
- safety procedures in handling firearms
- advanced techniques of carrying weapons and ammunition
- selection of clothing and equipment and its adaptation to tactical situations
- use of vehicles as cover
- shooting from vehicles
- shooting in conditions of reduced visibility
- shooting with protective chemical mask
- tactical exercises
- shooting with partner/team

**Required Equipment:**
- 800 rounds
- personal pistol/revolver
- holster/carrier for pistol/revolver
- spare magazines/loaders for pistol/revolver (2+1)
- carrier for spare magazines for pistol/fast loader for revolver
- tactical hand lamp with spare batteries
- chemical protective mask
- chemical light

**Work Clothes:**
- uniform/suit/casual clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 80,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of pistol/revolver, ammunition, magazines/fast loaders, holster/carrier for pistol/revolver, carrier for spare magazines for pistol and fast loader for revolver
- hearing protection/active PELTOR headphones and protective glasses
- refreshments (coffee, tea, juice...)
- tactical cap with TTT sign/logo
- participant certificate/diploma and all other materials necessary for safe and productive work on the course

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "advanced",
        label: "rifle",
        heading: "RIFLE – ADVANCED TACTICAL COURSE (One day)",
        image: "/advanced-rifle.jpg",
        alt: "man standing with rifle and gas mask",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** RIFLE Basic Course

**Number of participants in class:** 12 participants

**Course method:** individual, team

**Course is intended for:** active police personnel, military, private military/security companies and the civilian sector. The course is designed to provide information and develop progressive skills in tactical use of rifle in various tactical situations. Participants acquire advanced knowledge and tactical routine in weapon use, applying tactical rules and procedures.

**Content:**
- safety procedures in handling firearms
- advanced techniques of carrying weapons and ammunition
- selection of clothing and equipment and its adaptation to tactical situations
- use of vehicles as cover
- shooting from vehicles
- shooting in conditions of reduced visibility
- shooting with protective chemical mask
- tactical exercises
- shooting with partner/team

**Required Equipment:**
- 800 rounds
- rifle AK47/M70/M92/M21/M4
- rifle magazine
- tactical belt
- carrier for spare magazines/tactical vest
- carrier for spare magazines for pistol/fast loader for revolver
- tactical hand lamp with spare batteries
- chemical protective mask
- chemical light

**Work Clothes:**
- uniform/suit/casual clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 130,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of rifle, ammunition, magazines, tactical belt, tactical vest
- hearing protection/active PELTOR headphones and protective glasses
- refreshments (coffee, tea, juice...)
- tactical cap with TTT sign/logo
- participant certificate/diploma and all other materials necessary for safe and productive work on the course

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "advanced",
        label: "shotgun",
        heading: "TACTICAL SHOTGUN – ADVANCED TACTICAL COURSE (One day)",
        image: "/advanced-shotgun.jpg",
        alt: "man sitting from car aiming shotgun",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** TACTICAL SHOTGUN Basic Course

**Number of participants in class:** 12 participants

**Course method:** individual, team

**Course is intended for:** active police personnel, military, private military/security companies and civilian sector. The course is designed to provide information and develop progressive skill in tactical use of tactical shotgun in various tactical situations. Participants acquire advanced knowledge and tactical routine in tactical shotgun use, applying tactical rules and procedures.

**Content:**
- safety procedures in handling firearms, tactical shotgun
- advanced techniques of carrying weapons and ammunition
- selection of clothing and equipment and its adaptation to tactical situations
- loading and reloading techniques
- use of vehicles as cover
- shooting from vehicles
- shooting in conditions of reduced visibility
- ballistic effects of shotgun ammunition on target
- shooting with protective chemical mask
- tactical exercises
- shooting with partner/team

**Required Equipment:**
- 350 rounds (250 Trap, 50 Slug, 50 .00)
- tactical shotgun pump-gun/semi-auto
- tactical belt
- ammunition carrier

**Work Clothes:**
- uniform/suit/casual clothes
- footwear

**Protective Equipment:**
- glasses
- hearing protection/headphones
- tactical cap
- wind-resistant jacket
- knee and elbow protection (recommended)
- weapon cleaning kit
- water bottle/thermos/camelback
- notebook and pen (recommended)
- small tactical backpack (recommended)
- IFAK – first aid kit (recommended)

**Price: 70,000.00 RSD (VAT 20% included)**

**Price Includes:**
- instructor engagement
- rental/use of shotgun, ammunition, magazines, tactical belt, tactical vest
- hearing protection/active PELTOR headphones and protective glasses
- refreshments (coffee, tea, juice...)
- tactical cap with TTT sign/logo
- participant certificate/diploma and all other materials necessary for safe and productive work on the course

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "special",
        label: "tactical operator",
        heading: "TACTICAL OPERATOR (6 – 8 Day/Nights)",
        image: "/special-course.jpg",
        alt: "3 men behind car with rifles",
        desc: `**Working System:** Tactical Training Team

**Required Knowledge:** PISTOL, RIFLE Advanced Tactical Course

**Number of participants in class:** 12 participants

**Course method:** individual, team

**Course is intended for:** this is an intensive course lasting 6-8 days, including night exercises, designed to prepare an individual as a team member for conducting operations in high-risk conditions and to provide information, knowledge and practical training for those extreme conditions of stay and work in high-risk regions. The course is intended for individuals, private contractors, members of military/police/diplomatic services.

**Content:**
- Duties and responsibilities of operatives
- Team organization, duties, tasks, distribution of duties, responsibility
- Presentation of information and insight into current conditions in high-risk regions (Afghanistan, Iraq, Africa, …) from the aspect of security, cultural, religious and socio-political situations
- Friendly elements (local authorities, international organizations, other teams, cooperation protocols, support, information exchange and joint work)
- Hostile elements (terrorists, fundamentalists, organized "resistance movement" groups, organized crime, tribal/village militia)
- Capacities, organization, hierarchy, tactics, weapons (video presentations, analysis of specific incidents, authentic testimony of participants, discussion, questions/answers)
- Preventive measures (counter-intelligence protection, disinformation dissemination, control and protection of critical data, information gathering, analysis, use/archiving of critical information)
- Early detection/detection measures of attacks
- Reactive measures (VIP protection, transport, patrol,…)
- Tactical driving, convoy, route selection
- Vehicle evacuation and rescue in open areas
- IED/VBIED recognition and characteristics
- Familiarization with foreign weapons
- High-risk pedestrian formations
- Team work in high-risk conditions
- Combat in urban environments
- Radio procedures, modern means of communication, characteristics and tactical use
- Operations in conditions of poor visibility/night
- Tactical medicine (modern practice of war medicine, BLS, Quick Clot, Chest Seal, mobile defibrillator, first bandage,…)

**Required Equipment:**
- personal weapons, rifle AK47/M70/M92/M21/M4, tactical shotgun caliber .12, pistol Glock 17/19, M9, SIG, ... or other weapons in operational use
- Ammunition: 1,000 pistol ammunition rounds; 1,500 rifle ammunition rounds and 100 shotgun ammunition rounds
- Rifle magazine 8 pieces, for pistol 4
- Hand smoke and CS bombs

**Work Clothes:**
- Uniform/work clothes (field pants and long-sleeved shirts)
- footwear

**Protective Equipment:**
- Sports equipment
- Ballistic vest, Tactical helmet
- Tactical vest
- Knee and elbow protection
- First aid IFAK/first bandage
- Water bottle
- Radio communication
- Hearing protection/headphones
- Protective glasses
- GPS
- Tactical lamp
- Equipment for rain, wind and cold, hat, cap,…
- Notebook and pen

**Price: CONTACT US**

**Price Includes:**
- engagement of instructor team
- hotel accommodation and meals
- three meals daily
- transportation of course participants from airport to hotel
- throughout the entire course and back from hotel to airport
- weapons, ammunition and all necessary equipment
- training vehicles
- medical examination of course participants before course start and monitoring during course
- medical support throughout the course (24 hours)
- complete support in contacts and communication with state/local representatives of administrative government and security services
- 24 hour presence and active participation of interpreter (English, French, Russian,…)
- refreshments (coffee, tea, juice...)
- participant t-shirt and tactical cap
- closing ceremonial dinner
- certificate ceremony of course participation and all other materials necessary for safe and productive work on the course

**Payment Method:** 100% in advance, upon course registration, minimum 30 days before course start

**IMPORTANT NOTICE:** course participants may use their own or company, official weapons, ammunition and other equipment, upon prior written notice/confirmation of lawful ownership of weapons and ammunition, in accordance with valid Legal regulations of the Republic of Serbia, and other international acts related to weapons and ammunition ownership and use.

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
    {
        type: "medical",
        label: "BLS + AED",
        heading: "Basic Life Support Course + External Defibrillation (4-5 hours)",
        image: "/medical-course.jpg",
        alt: "demonstration of CPR execution",
        desc: `**Working System:** European Resuscitation Council-ERC – Tactical Training Team – Authorized Training Center

**Required Knowledge:** BLS - not necessary; AED – completed course, valid BLS certificate

**Number of participants in class:** 12 participants

**Course is intended for:** civil sector, any individual who may find themselves in a situation where a person in their immediate vicinity suffers cardiac arrest, loses consciousness and stops breathing, active police personnel, military, private military/security companies, who by the nature of their work may more often find themselves in situations where timely professional help can save the life of a colleague, protected person, client.

**Course content:** the course program consists of two independent courses, which together form an integral whole:

**1. Basic Life Support Course (BLS)**
contains interactive lectures, skill demonstrations, video presentation, has a pronounced emphasis on practicing manual skills and practical work on dummies – mannequins. The course content is based on currently valid ERC Recommendations regarding basic life support.
Protocols are practiced with one rescuer – performing cardiopulmonary resuscitation as well as work in a team of two, three rescuers using appropriate means to secure the airway and ventilation. International BLS AED Provider Certificate is awarded to course participants who attend the prescribed and defined number of hours and successfully pass the test related to practical work.
The certificate is valid for one year, during which time it is necessary to undergo retraining, recertification in order to extend its validity. ERC provides a very simple and fast way to verify certificate validity, via personal ID code and internet service.

**2. External Defibrillation Course (AED)**
the course on the use of Automatic External Defibrillators – ERC AED provides healthcare professionals and persons – rescuers who have the right to use an automatic external defibrillator during resuscitation, appropriate knowledge enables mastering the necessary practical skills for its use in patients with cardiac arrest.
The course contains a short theoretical part but its foundation is practical training in the use of an automatic external defibrillator through mastering various scenarios. The course is conducted through work in a small group, each individual has the obligation and opportunity to acquire necessary knowledge and skills. Protocols are practiced using AED with one provider of cardiopulmonary resuscitation measures at the beginning of the course, and then team work of two, three rescuers is practiced.
The certificate is valid for one year, during which time it is necessary to undergo retraining, recertification in order to extend its validity. ERC provides a very simple and fast way to verify certificate validity, via personal ID code and internet service.

**Required Equipment:** TTT provides complete equipment

**Price: CONTACT US**

**Price Includes:**
engagement of certified instructor team, medical and non-medical equipment necessary for course implementation, issuance of international certificate

**Payment Method:** 100% in advance, upon course registration, minimum 15 days before course start, via bank transfer

**Course Schedule:** upon request of participants

**Information, Registration and Application:** [office@tacticalttt.com](mailto:office@tacticalttt.com)

**Phone:** 060/ 07 27 032`,
    },
]

export const coursesByLocale: Record<Locale, Course[]> = {
    sr: Courses,
    // TODO: Replace with translated English course content.
    en: CoursesEng,
};

export const getCourses = (lang: Locale): Course[] => {
    return coursesByLocale[lang] ?? coursesByLocale.sr;
};