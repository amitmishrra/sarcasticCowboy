import Article from "../Components/Article/Article"

const SaveMoneyData = {
    Title:"/How_to_save_money",
    Date: "13 Feb 2022",
    Heading: "Smart ways to save money by shaving your head during Covid Pandemic",
    img1:
        "assets/images/Save.jpeg",
    parag1:
        "“ The Covid-19 has spread with alarming speed, infecting millions across the globe and the economic damage it caused is already evident. Some lost jobs and some struggled to find tools and techniques to cut down their expenses to survive this pandemic.”",
    parag2:
        "With my monthly salary reduced to 60 percent, I was no exception. In my desperate attempt to save money, I started exploring my expense details and was quick to notice that a significant amount was being spent on maintaining my hair. On top of that with Shampoo, Conditioner, and Hair Gel prices going up, it became quite hard for me to bear the expenses of my hair and girlfriend both, to cut down my expenses, I decided to dump one of them, without wasting any second I decided that it cannot be my prey-shee-us girlfriend, as she is the one whom you desire, despite all the odds she brings to your life (like the ring in the lord of the rings).",
    parag3:
        "Half-heartedly, with my head and spirits down. I picked my trimmer slowly, stared into the mirror with gloomy eyes, and a few minutes later my hair started falling like dead leaves in autumn. My head was completely shaved and I realized how extremely tough it is to get suddenly detached from something, you cultivated all these years with so much love and affection (curse you covid).",
    parag4:
        "The Sahara desert on my head with all its greenery lost, I only could recite something “monsoon -monsoon please come soon” in my head. Days passed, and I felt that shaving my head was not at all a terrible idea. It has its advantages too. What are they? here is the list.",
    parag5:
        "You start feeling more lively and lighter like you shed a few pounds from the top of your head instead of your hair.\n  While driving two-wheelers, you feel very connected to mother nature, as the cold breeze passes by you, kissing your scalp. Believe me, it rejuvenates your soul.\n  If your wedding day is near, shaving your head now means preserving your hair so that you can grow it again in its full bloom, before a few months of your wedding. Any man would prefer to look stunning like Tom Cruise instead of Bruce Willis on the grand day of his life. (Do not dare attempt this stunt if you have poor hair growth )\n  Your unused Parachute coconut hair oil would find some better use with dishes cooked in it (Trust me it’s healthy, you can ask your south Indian friends). This would help to cut down your monthly grocery expenses.\n  Your girlfriend finds it more entertaining and cute to kiss on your naked head though you don’t seem to enjoy it at all (girls will be girls).\n  With no gels and shampoo to spend on. You can afford some more chicken leg pieces with a chilled beer after all a toned body is better than silky hair.\n  Friends start calling you Michael Scofield. Such an honor (if you don’t know who is Michael, just go to prison and try breaking it).",
    parag6:
        "But it would be unfair if I don’t count a few disadvantages that come free with shaving your head.",
    parag7:
        "Never get involved in a fight with Hockey sticks, Baseball bats, or cricket stumps, your naked shinning head could tempt these sticks more than any other part of your body and it would be a bad idea to get hammered on one’s naked head\n  You get confused deciding whether a gorgeous-looking girl is laughing looking at you or it’s a hint that she is more interested in you (According to science, men with a shaved head are more attractive because being hairless makes them look more masculine).\n  If you are short in height. Your height may seem to go down by an inch and this can annoy your girlfriend if she looks taller than you(all girlfriends are not as kind-hearted as Zendaya, you don’t know who she is then probably you should step out and go “ far from home” ). But not to panic you can always get high sole Woodland shoes. It’s flat 40% off these days (valentine's week).\n  You get annoyed if anyone approaches you mentioning Chaand (Moon) /Chandani in their poems or Shayari",
    parag8:
        "Dear covid, today I shaved my head to save but tomorrow, what if I have nothing to shave or save.",
    parag9:
        "If you liked this, you might enjoy",
    parag10:
        "https://sarcasticcowboy.medium.com/are-you-dating-a-parasite-or-she-is-indeed-your-girlfriend-58e46902ec34",
}

const SaveMoney = () => {
    return (
        <>
            <Article
                Title={SaveMoneyData.Title}
                Date={SaveMoneyData.Date}
                Heading={SaveMoneyData.Heading}
                img1={SaveMoneyData.img1}
                parag1={SaveMoneyData.parag1}
                parag2={SaveMoneyData.parag2}
                parag3={SaveMoneyData.parag3}
                parag4={SaveMoneyData.parag4}
                parag5={SaveMoneyData.parag5}
                parag6={SaveMoneyData.parag6}
                parag7={SaveMoneyData.parag7}
                parag8={SaveMoneyData.parag8}
                parag9={SaveMoneyData.parag9}
                parag10={SaveMoneyData.parag10}
            />
        </>
    )
}

export { SaveMoneyData }
export default SaveMoney