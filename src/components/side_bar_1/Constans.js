import { iconsConstant } from "./Icons"

//
export const icons = [
  iconsConstant.twitter,
  iconsConstant.linkedIn,
  iconsConstant.github,
]
//
export const PROFILE = {
  shortName: "JS",
  name: "Jean Snyman",
  designation: "Software Engineer",
}
//
export const PROFILE_1 = {
  shortName: "VM",
  name: "Vijay Mathur",
  designation: "Software Developer",
}
//  sidebar navigation links
export const links = [
  { name: "About Me", url: "#about_me" },
  { name: "Experience", url: "#experience" },
  { name: "Skills & Education", url: "#skills_and_education" },
  { name: "Contact", url: "#contact" },
  { name: "Blog", url: "#blog" },
]
//  list of colors frequently used
export const color = {
  bg: "rgb(48,48,48)",
  imageBg: "rgb(24,24,24)",
  formBg: "rgb(81,81,81)",
  accordianBg: "rgb(66,66,66)",
  smallIconBg: "rgb(52,58,64)",
  rightSideBg: "rgb(73,73,73)",
  orangeColor: "rgb(230,126,34)",
  inputColor: "rgb(195, 195, 195)",
  formSubmitButtonColor: "rgb(230,126,34)",
}
//
export const info = [
  { key: "Location", value: "South Africa" },
  { key: "Email", value: "jean.snyman@gmail.com" },
  { key: "Phone", value: "(084) 903-3664" },
  { key: "Blog", value: "All Posts" },
]
//
export const accordians = [
  {
    title: "Full Stack Web Development",
    content:
      " Building of robust and secure backend services using Nodejs, Flash or .Net. For Front-end development I prefer Vuejs or vanilla JavaScript.",
  },
  {
    title: "Robotic Process Automation",
    content:
      "Automate business process with the use of UiPath Automation (RPA), Nodejs, Python or PowerShell. Turning hours of work into minutes or seconds.",
  },
  {
    title: "Machine Learning",
    content:
      "Building of highly accurate machine learning models that adds value to your automation processes.",
  },
]
//
export const experienceData = [
  {
    companyName: "TFG",
    year: "2019",
    title: "Solutions Architect - Intelligent Automation",
    content: `As a part of the Automation team, I'm responsible for translating
       the functional requirements into the architecture for the solution, 
       by selecting the mostappropriate technologies and options based on the  
       requirements. And also ensuring the solution architecture aligns with 
       enterprise architecture roadmaps and adheres to enterprise architecture   
       principles. Driving the adoption of best practices  around coding, design, quality and performance. Ensuring the product/solution architecture & existing ongoing Application Architecture is scalable and extensible.`,
  },
  {
    companyName: "TFG",
    year: "2013",
    title: "Senior IT Technical Engineer - Application Support",
    content: `SharePoint Administration and Development. Build various web applications.
       Automation of business processes. Providing technical assistance in projects.`,
  },
  {
    companyName: "TFG",
    year: "2010",
    title: "Senior IT Technical Engineer - Server Support",
    content: `Daily server system maintenance and monitoring.
    Supporting applications on Windows servers and providing 3rd level support.
     Problem resolution and fault finding. Ensuring that security standards are adhered to`,
  },
  {
    companyName: "Capitec Bank",
    year: "2009",
    title: "Senior System Administrator",
    content: `Supported various banking applications. 
    Build powershell script to automate business processes.`,
  },
  {
    companyName: "Vodacom",
    year: "2006",
    title: "System Administrator",
    content: `Deployed and maintained all Windows Server Operating Systems.`,
  },
]
//
export const educationData = [
  {
    title: "University of South Africa",
    qualification: "Bachelor of Computer Science",
    subInfo_1: "IT Computer Management",
    subInfo_2: "2007- 2013",
  },
  {
    title: "UiPath Advanced Developer",
    qualification: "Certificate of Robotic Process Automation",
    subInfo_1: "RPA",
    subInfo_2: "2013- 2019",
  },
  {
    title: "MCSD",
    qualification: "Certificate of Web Development",
    subInfo_1: "Web Development",
    subInfo_2: "2017- 2017",
  },
]
//
export const totalScore = 6
//
export const mySkillsData = [
  {
    section: "PROGRAMMING",
    list: [
      { title: "Javascript", total: totalScore, score: 6 },
      { title: "HTMLCSS", total: totalScore, score: 6 },
      { title: "Powershell", total: totalScore, score: 6 },
      { title: "C#", total: totalScore, score: 4 },
      { title: "Python", total: totalScore, score: 6 },
    ],
  },
  {
    section: "FRAMEWORKS",
    list: [
      { title: "Vuejs", total: totalScore, score: 6 },
      { title: "Express", total: totalScore, score: 6 },
      { title: ".Net Core", total: totalScore, score: 5 },
      { title: "Flask", total: totalScore, score: 6 },
    ],
  },
  {
    section: "MACHINE LEARNING",
    list: [
      { title: "Scikit-learn", total: totalScore, score: 6 },
      { title: "Tensorflow", total: totalScore, score: 4 },
    ],
  },
  {
    section: "OTHER",
    list: [
      { title: "UiPath RPA", total: totalScore, score: 6 },
      { title: "Azure", total: totalScore, score: 4 },
      { title: "CICD", total: totalScore, score: 6 },
    ],
  },
]
//
export const socialContactIconsCss = {
  fontSize: 70,
  color: color.orangeColor,
}
//
export const socialContactData = [
  {
    icon: iconsConstant.place,
    title: "Address",
    addressList: ["Protea Heights", "Brackenfell, 7560"],
  },
  {
    icon: iconsConstant.email,
    title: "Email",
    addressList: ["jean.snyman@gmail.com"],
  },
  { icon: iconsConstant.call, title: "Phone", addressList: ["(084) 903-3664"] },
]
