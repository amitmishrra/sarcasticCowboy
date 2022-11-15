import Article from "../Components/Article/Article"
import { Blogdata } from "../pages/Blog"

Blogdata[0] = ThreeDData;

const ThreeDData = {
    Title: "/3_D's_of_my_life",
    Heading: "3 Ds of My Life That Changed My Life Forever",
    subtitle: "Life has its own way of teaching, you just need to be good at picking those subtle hints",
    img1: "assets/images/3d.jpeg",
    parag1: "After waiting for 40 minutes, outside the cyber cafe, finally came my turn, I entered my roll number on the computer screen and waited anxiously for the result to load, the marks sheet was out. I had managed to complete my engineering with the first grade, there was a deep sigh of relief.",
    parag2: "I stepped out to see some other friends outside the cafe, they all were cheerful and jumping with joy but to my surprise, I was not as happy and excited, the reason was I didn’t have any offer letter, few Tier-3 companies came in the last semester (as my college wasn’t the most reputed one in the city ) during campus placement but I was not fortunate or intelligent enough to crack those interviews.",
    parag3: "Now the only option left was to move to some metro city and try for off-campus selection, I moved city to city, spent months, attending off-campus interviews, in a few, I was lucky to get rejected in the first round, in others I was unfortunate to make till the last round but due to some unforeseen reasons, companies were shy to hand me the employment letter.",
    parag4: "From 3 months, it became 9 months since graduation (9 months is a good time a woman can deliver a baby in that)and still, I was not having any job in hand. Asking money from parents with each passing month felt more embarrassing.",
    parag5: "I was totally depressed, devastated, and defeated. Wearing the burden of these 3 Ds on my head, I found it heavy to lift myself up, and that too against notorious gravity which exists only to bring anything down. Reading motivational books like “You can win” — by Shiv Khera, watching videos of “Sandeep Maheshwari” on YouTube was not helping me either.",
    parag6: "Tried waking up early in the morning (as per brown parents it can solve many of your problems) but by afternoon I was again feeling sleepy and tired. In a nutshell, nothing seemed to be working for me.",
    img2: "assets/images/3d2.jpeg",
    parag7: "Gradually I lost hope and to make it worse I stopped attending the interviews thinking it was a sheer waste of time and felt that I would never be able to lift myself up from this nadir of despair.",
    parag8: "Having nowhere to go and nothing to do, I closed my eyes and started praying to God for some miracle to happen or to give me at least some hints to follow the right path.",
    parag9: "Carrying these emotions heavier than Thor’s hammer, while walking down the road to have my morning ginger tea, I saw one dead man across the road being lifted up on 4 shoulders and people around them were chanting “Ram Ram satya hai” which translates to “the name of Lord Rama is the truth” in English and the next moment I stood smiling there, as I felt God has just answered all my questions.",
    parag10: "I got the clue, that only dead men seek the help of others. No motivational book, video, or seminar can motivate unless you decide to uplift yourself, the power lies within you. You are your best friend and the next moment I came up with these lines that I keep humming in my mind to inspire myself whenever I feel down or low.",
    parag11: "If you want to rise then rise on your own, others pick up the corpse.  Keep your spirits and head high and never let your shoulders drop   Fuel your passion with an intense fire that others can feel the heat    Take a leap with all your heart and see, the sky coming under your feet",
}

const ThreeD = () => {
    return (
        <>
            <Article 
            Title={ThreeDData.Title}
            Heading={ThreeDData.Heading}
            subtitle={ThreeDData.subtitle} 
            img1={ThreeDData.img1} 
            img2={ThreeDData.img2} 
            parag1={ThreeDData.parag1}
            parag2={ThreeDData.parag2}
            parag3={ThreeDData.parag3}
            parag4={ThreeDData.parag4}
            parag5={ThreeDData.parag5}
            parag6={ThreeDData.parag6}
            parag7={ThreeDData.parag7}
            parag8={ThreeDData.parag8}
            parag9={ThreeDData.parag9}
            parag10={ThreeDData.parag10}
            parag11={ThreeDData.parag11}
            />
        </>
    )
}

export { ThreeDData }
export default ThreeD