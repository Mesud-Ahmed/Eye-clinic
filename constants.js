import { FaEye, FaGlasses, FaRegEye, FaTint, FaUserMd, FaNotesMedical } from "react-icons/fa";
import { MdOutlineLocalPharmacy, MdOutlineRemoveRedEye, MdChildCare, MdEmergency } from "react-icons/md";
import { GiLaserWarning } from "react-icons/gi";

export const reviews = [
    {
        id: 1,
        name: "Mikyas Mengesha",
        rating: 5,
        text: "DR Asefa was an amazing honest guy which surprised me, if i had gone to other hospital they will prescript a glass for there profit but this clinic did the job only for the customer need and the service is very satisfying...",
        url: "https://g.co/kgs/EoC3Dxs",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXTgWvi3VFSKSEj8FcUkB5NpV_t5A7Q6Qu8vmSXd3YVGdgUham_=w66-h66-p-rp-mo-br100"
    },
    {
        id: 2,
        name: "Selam Ashenafi",
        rating: 4,
        text: "As an accountant reading tiny numbers all day, my eyes work hard. Dalia Eye Clinic’s exceptional customer service—from my doctor’s expert advice to the friendly laughs I share with the reception team—makes every visit ...",
        url: "https://g.co/kgs/QgawnqR",
        image: "https://lh3.googleusercontent.com/a/ACg8ocILqqrz-APTNWK0nre3F59w4A3zFJwRUlHoRD8U6se-i29rla0=w66-h66-p-rp-mo-br100"
    },
    {
        id: 3,
        name: "Michael Zewdie",
        rating: 5,
        text: "I recently visited Dalia eye clinic, and I couldn’t be happier with my experience! From the moment I walked in, the staff was welcoming and professional. The reception area was clean and comfortable, making me feel at ease. …",
        url: "https://g.co/kgs/mFR24Aq",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjW_wpraN-n4UVySDUvccjKCLI2j5Og8bVlBQq5GqGdjaalp656p=w66-h66-p-rp-mo-br100"
    },
    {
        id: 4,
        name: "miki maraki",
        rating: 5,
        text: "The equipment and facility deserve 5star not to mention the neatness. On a time of appointments need a little improvement but other that great job.",
        url: "https://g.co/kgs/ABAfGFd",
        image: "https://lh3.googleusercontent.com/a/ACg8ocKvANSwd3pPWXVHC2K7PElIMjgY-7z5YH1RzuoLiH35tzhkKw=w66-h66-p-rp-mo-br100"
    },
    {
        id: 5,
        name: "Amira Ahmed",
        rating: 5,
        text: "By far one of the best clinic and doctors in Addis that I have encountered.The Doctors are thorough, kind and incredibly patient, the nurses were so kind and helpful. Everyone there are very ...",
        url: "https://g.co/kgs/k1vzsYb",
        image: "https://lh3.googleusercontent.com/a-/ALV-UjXIzTpF1Kya4F5EVNF4t4tNhUVpzMb1xwcH6iSL2kdhv29Z56Ff=w66-h66-p-rp-mo-br100"
    }
];

export const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
            },
        },
    ],
};

export const eyeClinicServices = [
    { 
      name: "Comprehensive Eye Exams", 
      description: "Routine checkups to assess vision, eye health, and detect conditions like glaucoma or cataracts.",
      icon: FaEye 
    },
    { 
      name: "Prescription Glasses ", 
      description: "Vision correction services, including fitting and prescribing glasses or contact lenses.",
      icon: FaGlasses 
    },
    { 
      name: "Treatment of Eye Infections & Allergies", 
      description: "Diagnosis and treatment of conditions like conjunctivitis (pink eye) and dry eyes.",
      icon: MdOutlineLocalPharmacy 
    },
    { 
      name: "Cataract Evaluation & Surgery", 
      description: "Diagnosis of cataracts and surgical removal if necessary.",
      icon: FaRegEye 
    },
    { 
      name: "Glaucoma Screening & Management", 
      description: "Monitoring and treating high eye pressure to prevent vision loss.",
      icon: MdOutlineRemoveRedEye 
    },
    { 
      name: "Diabetic Eye Exams", 
      description: "Checking for diabetic retinopathy and other diabetes-related eye complications.",
      icon: FaTint 
    },
    { 
      name: "Retinal Disease Diagnosis & Treatment", 
      description: "Managing conditions like macular degeneration and retinal detachment.",
      icon: FaUserMd 
    },
    
    { 
      name: "Pediatric Eye Care", 
      description: "Eye exams and treatment for children’s vision issues, such as lazy eye or strabismus.",
      icon: MdChildCare 
    },
    { 
      name: "Emergency Eye Care", 
      description: "Immediate treatment for eye injuries, sudden vision loss, or foreign objects in the eye.",
      icon: MdEmergency 
    }
  ];