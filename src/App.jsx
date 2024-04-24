import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar';
import All from './Component/All'
import Fsd from './Component/Fsd'
import Datascience from './Component/Datascience'
import Cyber from './Component/Cyber'
import Career from './Component/Career'



const App = () => {
const obj = [
  {
    id:1,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    course:'Full Stack Development',
    desc:'Frontend vs Backend Development: Top 7 Differences',
    desc1:'In today’s digital age, web development has become a crucial component of the IT industry.',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:2,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Comprehensive-List-of-Project-Ideas-for-Frontend-Development.webp',
    desc:'Comprehensive List of Project Ideas for Frontend Development [2024]',
    desc1:'During your college days, you must’ve been bombarded with lots of projects and at that',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:3,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Frontend-Development-Frameworks.webp',
    desc:'10 Best Frontend Development Frameworks',
    desc1:'Frontend development frameworks are the backbone of user interface development, enabling developers to build seamless,',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:4,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.webp',
    desc:'Top 6 Backend Frameworks That You Should Know in 2024',
    desc1:'If you are looking to ace the field of backend development, you must be able',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:5,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA.webp',
    desc:'Backend Developer Salary in India & USA [2024]',
    desc1:'If you’re into making websites and apps work smoothly behind the scenes, you’re probably curious',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:6,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp',
    desc:'What Does a Top Backend Developer Do? The Ultimate Guide',
    desc1:'Backend development plays a vital role in the functioning of websites and web applications. While',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:7,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer.webp',
    desc:'What is Frontend Development? Roles, Responsibilities, Skills & Salary',
    desc1:'Frontend development is all about making websites that look good and work well for people',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:8,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
    desc:'Top Full Stack Development Trends for 2024: What to Expect',
    desc1:'In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:9,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary.webp',
    desc:'Backend Developers: Roles, Responsibilities, Skills, and Salary',
    desc1:'Websites are not only about colorful outlooks, fancy transitions, or eye-catching illustrations. These are the',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:10,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp',
    desc:'Top 11 CSS Frameworks for Front-End Developers: A Comprehensive Guide',
    desc1:'In the world of web development, Cascading Style Sheets (CSS) play a crucial role in',
    course:'Full Stack Development',
    courseId:'FSD',
    date:'16-02-2024',
  },
  {
    id:11,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    desc:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
    desc1:'Are you someone who’s not interested in coding, but wants to get placed in tech',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:12,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    desc:'Impact of Certification Programs on Hiring Data Scientists',
    desc1:'Data scientists are the creators behind transforming the raw data into edible data insights. These',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:13,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Best-Frontend-Development-Frameworks.webp',
    desc:'Top Product-Based Companies for Data Science Freshers',
    desc1:'In today’s data-driven world, data science has emerged as a crucial field, with companies harnessing',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:14,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Backend-Frameworks-That-You-Should-Know.webp',
    desc:'What is the Difference between Data Science and Data Engineering?',
    desc1:'India has been making some serious waves in the world of data. Just like the',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:15,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Backend-Developer-Salary-in-India-USA.webp',
    desc:'Top 10 Data Science Tools in 2024',
    desc1:'Data Science is an in-demand profession and will continue growing in the coming years. From',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:16,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp',
    desc:'Best Data Science Books to Learn in 2024',
    desc1:'Today, we’re going to talk about something really cool: data science. It’s all about using',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:17,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
    desc:'Top Product-Based Companies for Data Scientists in 2024',
    desc1:'We all know about the kind of buzz surrounding data science right now, it is',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:18,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp',
    desc:'Useful Python Libraries & Tools for Data Science Beginners',
    desc1:'In a world filled with information, knowing how to understand and use data is super',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:19,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Complete-Guide-on-Backend-Development-Roles-Responsibilities-Skills-and-Salary.webp',
    desc:'Extraordinary Data Science Projects for Beginners As Well as Veterans',
    desc1:'As the demand for data and the people that can conquer it, i.e. Data Scientists',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
{
    id:20,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-A-Comprehensive-Guide-to-HTML-and-CSS-Roadmap.webp',
    desc:'Future of Data Science and How You Can Thrive With It',
    desc1:'‍ Data Science has emerged as a revolutionary field in the technology world, transforming the',
    course:'Data Science',
    courseId:'DS',
    date:'16-02-2024',
  },
  {
    id:21,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp',
    desc:'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
    desc1:'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:22,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp',
    desc:'What Is Hacking? Types of Hacking & More',
    desc1:'Have you ever wondered what hacking is all about? It’s a big deal in today’s',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:23,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-CSS-Frameworks-for-Front-End-Developers-A-Comprehensive-Guide.webp',
    desc:'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
    desc1:'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:24,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
    desc:'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
    desc1:'Look around today, you will witness that we are more reliant on technology and devices',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:25,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Frontend-vs-Backend-Development-Top-Differences.webp',
    desc:'8 Different Types of Cybersecurity and Threats Involved',
    desc1:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:26,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp',
    desc:'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
    desc1:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:27,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
    desc:'Top 7 Cyber Security Attacks in Real Life',
    desc1:'Cyber security attacks are the type of actions that are designed to destroy, steal, modify,',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:28,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3.webp',
    desc:'The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!',
    desc1:'There is something fascinating about a lone hacker in black hoodies using a single system',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:29,
    img:'https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners-768x366.webp',
    desc:'The Ultimate Cybersecurity Roadmap for Beginners',
    desc1:'Cybersecurity jobs are also one of the most handsomely paying jobs in recent times. Furthermore,',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
{
    id:30,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp',
    desc:'How Is Cyber Security Important To Our Lives?',
    desc1:'‍Cybersecurity is an exact solution that is sought either by a billionaire with a massive',
    course:'Cyber Security',
    courseId:'CS',
    date:'16-02-2024',
  },
  {
    id:31,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
    desc:'Master JavaScript Frontend Roadmap: From Novice to Expert [2024]',
    desc1:'Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:32,
    img:'https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp',
    desc:'Are you eager to learn JavaScript? Want to dive deep into the JavaScript frontend roadmap?',
    desc1:'If your New Year resolution consists of building a successful tech career in 2024, then',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:33,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
    desc:'UI/UX Designer Job Description and Roles & Responsibilities',
    desc1:'UI UX is the abbreviated word that’s been rocking the trend over the years, especially',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:34,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Economics-Students.webp',
    desc:'Top 5 IT Jobs for Economics Students',
    desc1:'In today’s digital age, the intersection of economics and technology offers exciting career opportunities for',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:35,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp',
    desc:'Top IT Jobs for Commerce Students: A Lucrative Career Path',
    desc1:'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:36,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Automation-Test-Engineer-Resume-Important-Things-To-Consider.webp',
    desc:'Automation Test Engineer Resume: 10 Important Things To Consider',
    desc1:'The world is moving towards automating the testing of products in order to increase work',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:37,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3.webp',
    desc:'Professional Civil Engineer Resume: A Guide To Attract Employers in 2024',
    desc1:'The world is moving towards modernization leading to an increase in the popularity of civil',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:38,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image.webp',
    desc:'9 Best Product-Based Companies for Project Management',
    desc1:'There is something fascinating about a lone hacker in black hoodies using a single system',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:39,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/top_product_based_companies_that_don_t_require_coding.webp',
    desc:'Top 5 Product-Based Companies That Don’t Require Coding',
    desc1:'Every one of us wants to work in top product-based companies, Right? But, Not everyone',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },
{
    id:40,
    img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Machine-Learning-Engineer-Resume-Guide.webp',
    desc:'Machine Learning Engineer Resume Guide: 11 Important Things To Include!',
    desc1:'The current technological era is full of competition and those who have profound skillset are',
    course:'Career',
    courseId:'C',
    date:'16-02-2024',
  },




  


]



  return (
    <>
    
    <BrowserRouter>
    
    <NavBar/>
    
    <Routes>
    <Route path='/' element={
    <All obj={obj}/>
    }/>
    <Route path='/Fsd' element={<Fsd obj={obj}/>}/>
    <Route path='/Datascience' element={<Datascience obj={obj}/>}/>
    <Route path='/Cyber' element={<Cyber obj={obj}/>}/>
    <Route path='/Career' element={<Career obj={obj}/>}/>
    
   </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;