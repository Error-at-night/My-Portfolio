import eLearingApp from "../assets/e-learning-app.png"
import frontendQuiz from "../assets/frontend-quiz.jpg"
import easyBank from "../assets/easy-bank.png"
import multistepForm from "../assets/multi-step-form.png"
import ecommerce from "../assets/ecommerce.jpg"
import sushiFood from "../assets/sushi-food.png"
// import interactiveCommentSection from "../assets/interactive-comment-section.png"
import externalLink from "../assets/external-link.png"

export const projects = [
  {
    image: eLearingApp,
    icon: externalLink,
    link: "https://ksp-cps-department.vercel.app/home",
    about: "A web application built to help students access learning materials, take quizzes, and calculate their CGPA. Built with Supabase for authentication and CRUD operations, React Query for data fetching, React Hook Form for form validation, and styled using React-Bootstrap and Sass.",
    number: "01",
    title: "E-Learning App",
    techStack: "React, Supabase, React-Query, React-Hook-Form, React-Bootstrap, Sass"
  },
  {
    image: frontendQuiz,
    icon: externalLink,
    link: "https://github.com/Error-at-night/frontend-quiz-app",
    about: "Frontend Quiz is a web application built to test users' knowledge of HTML, CSS, JavaScript, and Accessibility. Users can select a subject, answer multiple choice questions with instant feedback, view their final score, and toggle between light and dark mode for better user experience.",
    number: "02",
    title: "Frontend Quiz",
    techStack: "React, TailwindCSS, ContextAPI"
  },
  {
    image: ecommerce,
    icon: externalLink,
    link: "https://frontendmentor-challenge-ecommerce-site.vercel.app/",
    about: "This ecommerce website showcases a curated selection of clothes and footwears through an interactive lightbox gallery and thumbnail navigation. Users can add or remove items from their cart, view their cart items, and receive instant toast notifications.",
    number: "03",
    title: "Ecommerce Website",
    techStack: "React, React-Bootstrap, Sass, ContextAPI"
  },
  {
    image: sushiFood,
    icon: externalLink,
    link: "https://error-at-night.github.io/Sushi-food/index/index.html",
    about: "Sushi Food is a web application built for a sushi restaurant. Users can explore a variety of sushi dishes, add them to their cart, and easily find their favorites using the search feature.",
    number: "04",
    title: "Sushi Food",
    techStack: "HTML, Bootstrap, Sass, Javascript"
  },
  {
    image: multistepForm,
    icon: externalLink,
    link: "https://multi-step-form-success.vercel.app/",
    about: "Multi-Step Form is a web application that guides users through a step by step process to input and review their information. Users can easily navigate between steps, update their selections, and view a final summary before confirming. The app also features real time form validation.",
    number: "05",
    title: "Multi-step Form",
    techStack: "React, TailwindCSS, Redux, React-Hook-Form"
  },
  {
    image: easyBank,
    icon: externalLink,
    link: "https://easy-bank-success.vercel.app/",
    about: "A modern landing page for Easybank that highlights its digital banking features, articles, and customer benefits.",
    number: "06",
    title: "Easy Bank",
    techStack: "React, React-Bootstrap, Sass"
  }
  // {
  //   image: interactiveCommentSection,
  //   icon: externalLink,
  //   link: "https://github.com/Error-at-night/interactive-comments-section",
  //   about: "A timed quiz application with instant feedback and a scoring system. Built to test both frontend logic and user experience design in a compact format.",
  //   number: "06",
  //   title: "Interactive Comment Section"
  // },
]