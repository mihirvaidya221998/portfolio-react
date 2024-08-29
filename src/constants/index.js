import project1 from "../assets/projects/blog.webp";
import project2 from "../assets/projects/Review-websites.jpg";
import project3 from "../assets/projects/hospital-management-system.jpg";
import project4 from "../assets/projects/criminal-detection.jpeg";

export const HERO_CONTENT = `Passionate aspiring software developer eager to leverage creativity and coding skills to innovate and create impactful solutions. Seeking a dynamic role where I can contribute to cutting-edge projects and grow within a collaborative and supportive team environment.`;

export const ABOUT_TEXT = "I am a passionate and versatile Full-Stack Developer with experience in developing scalable web applications and data-driven solutions. My expertise spans across technologies like React, Node.js, Python, Django, and MongoDB, gained through hands-on roles at organizations like Schneider Electric and Hoosier Community Network. I have a strong background in implementing secure authentication systems, optimizing deployment pipelines, and leveraging machine learning models to enhance application performance. Continuously driven by a curiosity for innovation, I thrive in collaborative environments where I can solve complex problems and deliver impactful solutions. When I’m not coding, I enjoy exploring emerging technologies and creating applications that will help me in my day to day life";

export const EXPERIENCES = [
  {
    year: "01/2024 - Present",
    role: "Full Stack Developer",
    company: "Hoosier Community Network",
    description: ['Maintained a serverless E-Commerce Plugin using Lambda, DynamoDB, TypeScript & NodeJs with 10000+ users.', 'Implemented a secure & scalable payment gateway using Stripe ensuring 15,000+ secure transactions.', 'Launched alert system which notifies when inventory goes below mentioned threshold using DynamoDB, Lambda and SNS, alerting the inventory manager when the stock fall below 200 Units.', 'Improved the front-end performance and feel by using Figma, SCSS, CloudFormation, React Redux, improving accessibility and load times by 40%'],
    technologies: ["AWS Lambda", "DynamoDB", "TypeScript", "NodeJs", "Firebase", "Stripe", "Figma", "SCSS", "AWS CloudFormation", "React Redux"],
  },
  {
    year: "08/2023 - 12/2023",
    role: "Software Development Co-op",
    company: "Schneider Electric R&D Lab",
    description: ['Created a Levelized Cost of Hydrogen Calculator app using ASP.net & AngularJS to compare the economic feasibility of the new renewable fuel production systems', 'Spearheaded a cost modeling algorithm in C# using MVC principles, improving cost estimation accuracy by 20% and keeping the budget of multi million dollar research project in check', 'Displayed 4 interactive graphs with JavaScript and Chart.js, allowing users to visualize the impact of variables on overall costs', 'Managed project progress using Jira which resulted in a 15% improvement in team productivity and the on-time delivery of the final product'],
    technologies: ["ASP.net", "AngularJS", "C#", "Jira", "Chart.js", "SQL Server"],
  },
  {
    year: "06/2023 - 08/2023",
    role: "Machine Learning & Artificial Intelligence Intern",
    company: "Schneider Electric",
    description: ['Contributed to the development of a web-based SCADA system using .NET Core & Angular, working closely with senior developers to implement key features & delivering scrum requirements 3 weeks before the deadline', 'Created responsive UI and integrated RESTful APIs to process real-time data from various sources, improving the experience of 10 industrial operators', 'Supported Azure cloud ETL service integration tasks using data factory, databricks & PowerBi, leading to a 20% increase in data processing accuracy', 'Wrote unit tests and API Tests using xUnit & Postman contributing to a 25% reduction in bugs'],
    technologies: ["Python", "Microsoft SQL Server", "Microsoft SQL Server", "Azure Databricks", "Azure Synapse Analytics", "SCADA Systems"],
  },
  {
    year: "12/2021 - 08/2022",
    role: "Web Developer",
    company: "Sahacharya Digital Solutions PVT. LTD",
    description: ['Engineered 15 REST APIs for a finances management app using ExpressJS, NodeJS, ES6, ReactJS, aiding 1000+ users in tracking income and expenditure.', 'Optimized data storage and querying for 10,000+ records using MySQL and PostgreSQL, improving query speed by 20%.', 'Researched and transitioned application architecture for downloading PDFs of the records from PhantomJS to PuppeteerJS, increasing download speeds by 60%.', 'Established a CI/CD pipeline to automate the release of testing and production builds for Finacial apps using Bitbucket, & AWS CodeDeploy, reducing build times by 2 hours and ensuring consistent, reliable delivery'],
    technologies: ["ES6", "PostgreSQL", "BitBucket", "AWS CodeDeploy"],
  },
];

export const PROJECTS = [
  {
    title: "Blog Website",
    image: project1,
    description:
      "A fully functional technical blog website with features like writing technical blogs, commenting, liking comments, bot detection using ML and user authentication.",
    technologies: ['TailwindCSS', 'Tensorflow.js', "React", "Node.js", "MongoDB"],
    githubLink:"https://github.com/mihirvaidya221998/Blog-MERN",
  },
  {
    title: "Campsite Review App",
    image: project2,
    description:
      "An application for reviewing and creating camp sites, with features such as Rating Campsite, listing your campsite, and cookies sessions.",
    technologies: ["HTML", "BootStrap", "JavaScript", "MongoDB"],
    githubLink:"https://github.com/mihirvaidya221998/Camp-Review-Website",
  },
  {
    title: "Hospital Management System",
    image: project3,
    description:
      "An application for managing Hospital and Insuarance, with features such as different account priviledges, booking appointments, prescribing medications, viewing and purchasing insurance plans, mailing system for confirmation.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    githubLink:"https://github.com/mihirvaidya221998/HealYo",
  },
  {
    title: "Criminal Detection",
    image: project4,
    description:
      "An application for idemtifying the criminal from CCTV using Computer Vision, with features such as identifying the bmi from the image of the criminal and giving the name of the criminal from the records.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    githubLink:"https://github.com/mihirvaidya221998/HealYo",
  },
];

export const CONTACT = {
  address: "6120 SW 27th St Topeka Kansas",
  phoneNo: "+18125532142",
  email: "mihirsv22@gmail.com",
};
