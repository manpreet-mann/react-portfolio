import fooddelivery from '../../assests/projects/fooddelivery.png'
import catering from '../../assests/projects/catering.png'
import portfolio from '../../assests/projects/portfolio.png'
import doctorappointment from '../../assests/projects/doctorappointment.png'
import covidtesting from '../../assests/projects/covidtesting.png'


export const projectsData =[
    {
        id: 1,
        name: 'OrderMunch',
        description: "A professional food ordering and delivery website where users can add items to their cart, proceed to checkout, and make secure payments.",
        tools: ['HTML', 'CSS', 'Javascript', 'ReactJs', 'MongoDb', 'Node.js', 'Express.js', 'Authentication'],
        role: 'Full Stack Development',
        code: 'https://github.com/manpreet-mann/order-munch-Food-Delivery-Website-',
        demo: '',
        image: fooddelivery,
    },
    {
        id: 2,
        name: 'Catering-FrontEnd',
        description: "A food catering frontend application.The application was built using HTML, CSS, and React ensuring it's not just visually appealing but also responsive.",
        tools: ['HTML', 'CSS', 'ReactJs'],
        role: 'Front-End Development',
        code: 'https://github.com/manpreet-mann/myfood-app',
        demo: 'https://myfood-app-xi.vercel.app/',
        image: catering,
    },
    {
        id: 3,
        name: "Manpreet's Portfolio",
        description: "My previous portfolio website showcasing my diverse projects and skills in design, development, and problem-solving. Discover creative solutions and innovative work across various domains.",
        tools: ['HTML', 'CSS'],
        role: 'Front-End Development',
        code: 'https://github.com/manpreet-mann/Manpreet-Portfolio',
        demo: 'https://manpreet-mann.github.io/Manpreet-Portfolio/',
        image: portfolio,
    },
    {
        id: 4,
        name: 'Doctor Appointment Booking',
        description: "Your online healthcare hub. Book appointments with your preferred doctors and hospitals, and conveniently pay fees online.You can check the availability of ambulances in your city according to need.",
        tools: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'mySQL', 'PHP'],
        role: 'Full Stack Development',
        code: 'https://github.com/manpreet-mann/Doctor-Appointment-Booking-Website',
        demo: '',
        image: doctorappointment,
    },
    {
        id: 5,
        name: 'Covid Testing System',
        description: "Book Covid-19 test appointments from home, sample collection at your doorstep, and track appointment status online. Convenience, safety, and peace of mind in one platform.",
        tools: ['HTML', 'CSS', 'Javascript', 'Bootstrap', 'mySQL', 'PHP'],
        role: 'Full Stack Development',
        code: 'https://github.com/manpreet-mann/Covid-Testing-System',
        demo: '',
        image: covidtesting,
    },
]