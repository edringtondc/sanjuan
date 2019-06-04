import React from "react";
import TreatmentItem from "./TreatmentItem/TreatmentItem";
import classes from './treatments.module.css';
import Footer from "../../components/Footer/Footer";
// import TreatmentToolbar from "./TreatmentToolbar/TreatmentToolbar";



const Treatments = () => {
 let treatments = [
     {
         title: "Chiropractic",
         description: "Chiropractic We offer many Chiropractic techniques and analysis' in our clinic.  We take a team approach to all patient care. All of our Chiropractic doctors offer full body balanced care using many modalities: Thompson Drop, Activator, Proadjustor, Hand Held Fascial Tools, Full Spine, SOT, Stretching, Taping, Nutritional Counseling and more..."
     },
     {
        title: "Acupuncture",
        description: "In traditional Chinese medicine, disease is caused by disruptions in the flow of Chi, or energy, in the body. Energy flows through channels called meridians. Each meridian has many acupuncture points along it. Disposable, painless acupuncture needles are used at specific acupuncture points to stimulate the correct flow of Chi through the meridians. Acupuncture can be used to treat a variety of complaints include (but not limited to): Allergies, Chronic Pain, Dysmenorrhea, Insomnia, Sciatica, Sprain, Morning Sickness, Headache/Migraine, Rheumatoid arthritis, Hypertension, Depression, Anxiety, Facial Pain, Tooth pain, Postoperative Pain, Stroke, Induction of labor, Malposition of an unborn child, Diarrhea/Constipation, Sinusitis, Nausea & Vomiting, Bladder dysfunction, Osteoarthritis, and many more!"
    },
    {
        title: "Myofascial Release",
        description: "Myofascia = Myo = muscle. Fascia is the tissue that covers muscles nerves, bones, ligaments, tendons, organs, bursae, etc. Myofascial release is a treatment intended to release tension in the fascia due to trauma (direct, repetitive motion, posture). If there has been trauma, the body tries to stabilize it by creating scar tissue or adhesions. Adhesions are sticky and do not let the muscles slide, glide and function as they are supposed to causing pain, discomfort, and improper function. For more information about fascia check out: https://deeprecovery.com/understanding-fascia/ or https://breakingmuscle.com/fitness/the-top-5-ways-fascia-matters-to-athletes"
    },
    {
        title: "Cupping",
        description: "Cupping therapy is an ancient form of alternative medicine in which a local suction is created on the skin.  Practitioners believe this mobilizes blood flow in order to promote healing. Suction is created using mechanical devices (hand or electrical pumps). Cupping is used to treat muscle tension as well as scar tissue from injuries and surgery. In Chinese medicine it is also used to treat asthma, lung problems, and open up all the meridians on the back."
    },
    {
        title: "Visceral Manipulation",
        description: "Visceral Manipulation is effective Therapy in treating a wide range of Digestive issues including Acid Reflux, Hiatal Hernia, Crohn’s Disease, Irritable Bowel Syndrome, Constipation, Diarrhea, Nutrient Deficiency Disorders, Gall Bladder problems and many other Digestive-Related issues. Visceral Manipulation is also very effective Therapy in relieving Menstruation and Menopause issues."
    },
    {
        title: "Manual Nerve and Vessel Therapy",
        description: "Manual Nerve Therapy provides assessment and treatment approaches to address restrictions of the neural components not commonly focused on with musculoskeletal symptoms. Neural Manipulation identifies and releases local nerve restrictions while at the same time examines the effect these local fixations have on the rest of the body, and by accessing this relationship, resolves the more comprehensive (global) dysfunctional patterns."
    },
    {
        title: "Manual Lymphatic Therapy",
        description: "Manual Lymphatic Therapy releases restrictions along the vascular structures using direct techniques on the arteries like compressions, decompression and elongation. Increased blood circulation to an organ improves function of the viscera, and improves the blood circulation to   organs, directly and/or indirectly. Excellent for use after trauma and post-surgery, when conventional musculoskeletal techniques give limited pain and functional relief."
    },
    {
        title: "Craniosacral Therapy",
        description: "Cranial-Sacral Therapy is a gentle, hands-on method of evaluating and enhancing the functioning of a physiological body system called the Cranial-Sacral System. By complementing the bodys' natural healing processes, Cranial-Sacral Therapy is increasingly used as a preventive health measure for its ability to bolster resistance to disease and is effective for a wide range of emotional and medical problems associated with pain and dysfunction."
    },
    {
        title: "Biofeedback",
        description: "Chronic stress can dramatically interfere with your ability to learn.  Stress can also hinder your attempts to improve or maintain your level of health.  Biofeedback is a non-invasive therapy that can often reduce stress by using relaxation techniques, and by increasing your awareness of how your body responds to stress.",
    },
    {
        title: "Optimal Health/Nutrition Training", 
        description: "Healing requires eliminating causes. After much research I sought to adopt the most “natural” diet and lifestyle choices possible. What has made the difference for me, is learning what the body requires to produce perfect health. And then providing it. Make no mistake about this: the diet and lifestyle changes I made did not heal me. Healing is an inherent ability of every living organism. I will teach you what to do (and what Not to do), and will give you as much explanation as is possible. The areas that we will cover include: diet, rest and sleep, air, water, exercise, sunshine, fasting/cleansing, and emotional poise. What’s exciting, is that each of these areas are things that we have complete control over. This is exciting because it means that your level of health and vitality is Not dependent on anyone else!"
    },
    {
        title: "Nutrition Response Therapy - NRT", 
        description: "This way of testing the body is very specific to YOUR neurology as well as energy field.  There are two options for checking this read... 1. Kinesiology Muscle Testing  2. Neurological Leg Check.  We use small vials in a large test kit with each supplement in each vial.  We start out testing each vial that correlates with your history and reasoning for the session.  Testing individually based on a SENSITIVITY and DIRECTION kit that leads us down certain roads with your body allow for a more direct approach.  We will accumulate a 'yes' pile as well as a 'no' pile of the individual vials that has been tested on your body. We then start adding the supplements as your body says YES! and the Neurological read gets stronger.  This method allows for specific findings and gets us to the root cause of what is happening with your body - in layers. This process could take 3 to 5 visits on a monthly schedule.  You will go home with 1 to 6 specifically tailored supplements just for you! You will have the ability to contact the practitioner in the time before the next visit with any questions or concerns. "
    },
    {
        title: "Traditional Chinese Medicine", 
        description: `A doctor of Traditional Chinese Medicine has completed over 2800 hours of post-graduate supervised training in Acupuncture, Herbal Medicine, Rehabilitation, Eastern and Western diagnosis and Examination. The patient is diagnosed with pulse diagnosis performed by the doctor using a light touch to the wrists that renders the health of 12 different organ systems in “real time”. The tongue is examined for its coating, color and shape. The forehead and feet are assessed for temperature. The color of the skin determines liver, kidney and spleen health. These methods are correlated with the patient’s health history and symptoms upon presentation to determine the best course of treatment. In general, herbal teas are used for internal medicine and acupuncture for orthopedic and neurological issues. Acupuncture can work immediately for pain management and the herbs in one weekend. During a successful Acupuncture session the patient should feel no discomfort and they should sense a tingling sensation to the area of complaint, this is called Chi or the mind body connection (sublimated water or internal steam) that cleanses and lubricates the tissues and this sensation should travel within the body. The next sensation is a mild heaviness that should occur about 20 minutes later, this is the blood flushing out toxins. End of treatment is determined by a light feeling in the area of complaint. If you’ve crossed your legs and your foot fell asleep you already know what I’m talking about. Why did I learn Chinese medicine and why should you try it? Dr. Jim Duke, PhD, roamed the Amazon and discovered the cancer drug tamoxifen. He was portrayed by Sean Connery in “Medicine Man” and was my professor at the University Colorado School Of Pharmacy. He told me Chinese medicine has been perfected by over 700 generations of physicians; Naturopathy maybe 40 generations, modern pharmaceutical medicine is at best 9 generations of trial and error. This is why my first choice if I were a patient would be the “time tested with a proven safety record” Traditional Chinese Medicine. The average acupuncture session generally takes about 30 minutes and an herbal consultation including blending of the herbs another 30 minutes. Traditional Chinese tea formulations give results faster than pills and capsules because the doses of each herb are higher and boiling them in water means they are absorbed faster. Fifty percent of the formulations pass in and out of the body in just 2 hours!  Maintenance doses are usually in pill or powder form. Come by and see what your body is telling you, improve your quality of life, extend your life by learning how your body really works. `
    },
    {
        title: "Sports Physicals", 
        description: "At the beginning of a new competitive season through the school district sports physicals are required before participation. Our office provides sport physicals to get your student athlete ready for a new year and a new season. Basic physicals for adults are also available through our office. However, we are not certified to do DOT physicals."
    },
    

 ]

    return (
        <div>
            <div className={classes.Treatments}>
                <div className={classes.Banner}>

                   
                </div>
                {/* <TreatmentToolbar treatments={treatments} /> */}
                

                {treatments.map(treatment => {
                    return (
                        <TreatmentItem title={treatment.title} description={treatment.description} />

                    )
                })}

            </div>

            <Footer></Footer>
        </div>
    )
}

export default Treatments;