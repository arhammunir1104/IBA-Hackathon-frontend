import ExploreSkills from "../components/ExploreSkills";
import HeroSection from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/JoinNow";
import SkillStories from "../components/SkillStories";
import Footer from "../components/Footer";

export default function HomePage(){
    return(
        <>
        <HeroSection/>
        <SkillStories/>
        <ExploreSkills/>
        <HowItWorks/>
        <CallToAction/>
        <Footer/>
        
        </>
    )
}