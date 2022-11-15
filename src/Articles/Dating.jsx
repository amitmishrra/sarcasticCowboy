import Article from "../Components/Article/Article"

const DatingData = {
    Title: "/Are_you_dating_a_parasite",
    Heading: "Are you dating a parasite or she is indeed your Girlfriend?",
    subtitle: "Life has its own way of teaching, you just need to be good at picking those subtle hints",
    img1: "assets/images/dating.jpeg",
    parag1:
        "Being single for the past 25 years, I was depressed, devastated, and felt defeated, wearing the burden of these 3 D’s along with a helmet on my head, I was driving my way down to the office on my beloved Yamaha R15 v2 with an empty cow tailback seat.",
    parag2:
        "Having reached the office, I heard someone saying why don’t you try Google, it can search you anything and if you want to buy or sell quicker then go for “QUIKR”, it was the month’s end and I was in no mood to sell or buy, but I was searching Girlfriends, and searching on Google was not at all a bad idea.",
    parag3:
        "A few moments later I entered “Girlfriend” and Mr. Google came up showing results for “Parasites” at the very next moment I was left Centershocked, I had typed “Girlfriend “ without any spelling mistake then how come on Internet, Mr. Google can come up with something completely irrelevant, that is weird, i have never seen Google behaving like this before.",
    parag4:
        "With a big question mark on my head, I closed the current tab displaying URL https://www.google.co.in/ and opened another tab to enter http://www.thefreedictionary.com/ only to find out what “Parasite” really meant? A few seconds later, I got three meanings with one central idea. Here are they:",
    parag5:
        "a) One who habitually takes advantage of the generosity of others without making any useful return. \n b) One who lives off and flatters the rich; a sycophant \n c) An organism that grows, feeds, and is sheltered on or in a different organism while contributing nothing to the survival of its host.",
    parag6:
        "Now after having a better picture of what Parasite looked like, I tried for “Girlfriend” to know the perfect definition. And see what all I got!",
    parag7:
        "1. One who gets her monthly mobile recharges done from the host but spends most of the time talking to other hosts.\n 2. One who never pays her bill when she goes on a date with the host.\n 3. One who always keeps looking for a rich host to dump her present host anytime.\n 4. One who sleeps tight but makes host suffer from sleepless nights.\n And at last.\n 5. Girl-friend is an organism expert in using her host & making sure that she herself never gets used.",
    parag8:
        "Really there was not much difference between “The Parasite” and “The Girl-Friend” and Mr. Google knew it already, Did he try to warn me? Yes, he did! I took his warning no less than a life threat and decided to be single ever after.\n Google can’t warn everybody so I came up with this blog to warn you all.",
    parag9:
        "!! Beware of Parasites and Girlfriends !!",
    parag10:
        "Hints & Solutions:\n  1) In the latter para Host has been referred to dumbest species ever existed on the Earth so-called as “Boyfriend”.\n 2) Cowtail seat is a specially designed seat, slightly tilted upwards so that the Girlfriend can sit closer and tighter to the Host.\n 3) QUIKR is the place where you buy and sell quicker than your Girlfriend can dump you ever.",
    parag11:
        "PS: Everything is intentionally written to hurt the sentiments of Girlfriends and their Hosts, it's far away from anything that can be treated as fictitious. (Just Kidding girlfriends are precious )",
}

const Dating = () => {
    return (
        <>
            <Article
                Title={DatingData.Title}
                Heading={DatingData.Heading}
                img1={DatingData.img1}   
                parag1={DatingData.parag1}
                parag2={DatingData.parag2}
                parag3={DatingData.parag3}
                parag4={DatingData.parag4}
                parag5={DatingData.parag5}
                parag6={DatingData.parag6}
                parag7={DatingData.parag7}
                parag8={DatingData.parag8}
                parag9={DatingData.parag9}
                parag10={DatingData.parag10}
                parag11={DatingData.parag11}
            />
        </>
    )
}

export { DatingData }
export default Dating