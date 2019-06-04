import React, { Component } from "react";
import TeamMember from "./TeamMember/TeamMember"
import classes from "./team.module.css";
import Footer from "../../components/Footer/Footer";

class Team extends Component {
  
render() {
    let Team = [
        {
            practitioner: "Dr. Darrin",
            title: "Darrin Robertson, D.C., C.C.S.P, | San Juan Chiropractic, LLC, owner",
            bio: "Dr. Darrin graduated with a Doctor of Chiropractic degree from Parker College of Chiropractic in Dallas, TX in September 2001. He has additional certification as a Chiropractic Sports Physician and utilizes specialized equipment to ensure spine alignment, as well as address the muscular and connective tissue issues that affect the function of the entire body. He is also able to conduct pre and post sports physicals.  Specialties: Thompson, Upper-Cervical, Diversified, Endurance Sports, Postural Re-education, Wellness Coaching. It's Your Life... Live it in Health!",
    
        },
        {
            practitioner: "Dr. Tori",
            title: "Victoria Bourgeois Stegmann, D.C., CAc | High Desert Wellness, LLC, owner",
            bio: "Dr. Tori has a Doctor of Chiropractic degree and a Masters in Exercise Science and Sports Rehabilitation from Logan College of Chiropractic. She utilizes Diversified, Thompson, Activator, SOT, and Basic chiropractic techniques. While receiving her chiropractic degree, Tori interned with the Jefferson Barracks VA hospital outside of St. Louis, MO and specialized in diagnosing and naturally treating degenerative and post traumatic neurological illness. Dr. Tori is a licensed acupuncturist specializing in traditional Chinese medicine and cupping. She also offers sports physicals and wellness physicals for students and adults. ",
    
        },
        {
            practitioner: "Dr. Mandy",
            title: "Amanda Areman Prettyman, D. C. | WholeYou Chiropractic, LLC, owner",
            bio: "Dr. Mandy has a Doctor of Chiropractic degree from Life University in Marietta, GA - March of 2002.  She specialized in balancing and grounding the body using neurology and energy techniques to find the underlying root cause for what is happening in the body.  Reading the body all along the way allows for the change during treatment that is necessary to keep from having to have too many treatments, or too much done in one visit.  Your 30 minute visit could look like - history, analysis, stretching, analysis, grounding, adjusting, analysis, facilitating the energy flow from top to bottom, extremities if needed, analysis - then walking around utilizing specific stretches to note change from the treatment. Expect 2-4 visits when presenting as a new patient.  Typically you will leave after one treatment feeling great and holding the treatment for many weeks to months.",
    
        },
        {
            practitioner: "Ted",
            title: "Theodore Smith, NCTMB | High Desert Wellness, LLC, owner",
            bio: "My name is Ted Smith and I practice Visceral Manipulation, Manual Nerve, Artery, Vein and Blood Flow Therapy, Lymphatic Therapy, Scar Tissue Re-Modeling, Cranial-Sacral Therapy, Optimum Health/Nutrition Training, Zen Shiatsu and Structural Integration. My background is very diversified, receiving many formals of traditional schooling as well as many years of private instruction. I also taught everything I practice at various Schools, seminars and private tutoring. I have focused on Chronic Pain, Injury Rehab/Recovery and Digestive/Menstrual/Menopause/Diet and Nutrition issues with the human body for 24 years.",
    
        },
        {
            practitioner: "Michaela",
            title: "Michaela Rodarte, LMT| Revive Massage Therapy, Owner",
            bio: "Michaela graduated with her certification from the Denver School of Massage Therapy in Aurora, CO. She became a stay-at-home mom for 5 and half years to her two children. Wanting to go back to work, she furthered her studies with Essentials Therapeutic Massage School in Grand Junction and found her passion for medical massage therapy. Becoming a single parent brought on new challenges and with determination stepped into the right direction to pursue her career as a licensed massage therapist. She has just finished another round of CE credits with Intellitec College, M.T. Program. Experienced in Swedish, Deep Tissue, and Reflexology. She also specializes in Neuromuscular, Cranial Sacral, and Sports. Each therapeutic massage is tailored to meet her client’s needs and bringing the body back to balance.",
    
        },
        {
            practitioner: "Porsche",
            title: "Porsche Young | Learning Power, LLC, Owner",
            bio: "Porsche Young is a graduate of the University of Michigan and the University of Colorado-Boulder.  She specializes in using Biofeedback to assist people of all ages to reduce their levels of stress.  Lowering stress helps us to learn, to heal, and to live vibrantly. Chronic stress can dramatically interfere with your ability to learn.  Stress can also hinder your attempts to improve or maintain your level of health.  Biofeedback is a non-invasive therapy that can often reduce stress by using relaxation techniques, and by increasing your awareness of how your body responds to stress."
    
        }
    
    
    ]


    return (
        <div>
            <div className={classes.Team}>
                <div className={classes.Banner}>
                    <h1>Our Practitioners</h1>
                </div>
                {Team.map(teamMember => {
                    return (
                        <TeamMember bio={teamMember.bio} practitioner={teamMember.practitioner} />

                    )
                })}


            </div>
            <Footer />
        </div>
    )
}
}

export default Team;