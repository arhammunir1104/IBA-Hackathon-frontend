import ExploreSkills from "../components/ExploreSkills";
import HeroSection from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/JoinNow";
import SkillStories from "../components/SkillStories";
import Footer from "../components/Footer";
import Navbar1 from "@/components/Navbar1";

export default function HomePage(){
    return(
        <>
        <Navbar1 />
        <HeroSection/>
        <SkillStories/>
        <ExploreSkills/>
        <HowItWorks/>
        <CallToAction/>
        <Footer/>
        
        </>
    )
}