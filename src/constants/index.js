import project1 from "../assets/projects/blog.webp";
import project2 from "../assets/projects/Review-websites.jpg";
import project3 from "../assets/projects/hospital-management-system.jpg";
import project4 from "../assets/projects/criminal-detection.jpeg";

export const HERO_CONTENT = `Passionate aspiring software developer eager to leverage creativity and coding skills to innovate and create impactful solutions. Seeking a dynamic role where I can contribute to cutting-edge projects and grow within a collaborative and supportive team environment.`;

export const ABOUT_TEXT = "I am a passionate and versatile Full-Stack Developer with experience in developing scalable web applications and data-driven solutions. My expertise spans across technologies like React, Node.js, Python, Django, and MongoDB, gained through hands-on roles at organizations like Schneider Electric and Hoosier Community Network. I have a strong background in implementing secure authentication systems, optimizing deployment pipelines, and leveraging machine learning models to enhance application performance. Continuously driven by a curiosity for innovation, I thrive in collaborative environments where I can solve complex problems and deliver impactful solutions. When I’m not coding, I enjoy exploring emerging technologies and creating applications that will help me in my day to day life";

export const EXPERIENCES = [
  {
    year: "01/2024 - Present",
    role: "Software Development Engineer",
    company: "Hoosier Community Network",
    description: ['Maintained a serverless E-Commerce Plugin using Lambda, DynamoDB, TypeScript & NodeJs with 10000+ users', 'Implemented a secure & scalable payment gateway using Stripe ensuring 15,000+ secure transactions', 'Launched alert system which notifies when inventory goes below mentioned threshold using DynamoDB and Lambda, alerting the inventory manager when the stock fall below 200 Units', 'Enhanced User Experience by using Figma, SCSS, CloudFormation, React Redux, making the application responsive and quick to access'],
    technologies: ["AWS Lambda", "DynamoDB", "TypeScript", "NodeJs", "Firebase", "Stripe", "Figma", "SCSS", "AWS CloudFormation", "React Redux"],
  },
  {
    year: "08/2023 - 12/2023",
    role: "Software Development Co-op",
    company: "Schneider Electric R&D Lab",
    description: ['Designed a Levelized Cost application a way to visually and interactivally understand the lifetime cost of running 4 different fuel production plant using JavaScript & ReactJS', 'Spearheaded the cost modeling algorithm in NodeJS using MVC principles, which helped the team to identify the most economical plant to scale up out of the 4 small scale plants', 'Displayed interactive graphs using SQL Server & Chart.js to visualize module distribution in the Levelized Cost', 'Managed project progress using Jira, ensuring timely completion of deliverables and improving team productivity'],
    technologies: ["NodeJS", "ReactJS", "JavaScript", "ExpressJS", "Jira", "Chart.js", "SQL Server"],
  },
  {
    year: "06/2023 - 08/2023",
    role: "Software Development Intern",
    company: "Schneider Electric",
    description: ['Contributed to the maintaining SaaS based energy and sustainability solution using C# & Angular, delivering scrum requirements 3 weeks before the deadline', 'Created backend services for for a real-time water usage efficiency platform with .Net 5 and SignalR, aiding in tracking of water wastage', 'Migrated on-premise data to Azure infrastructure, using ETL tools Data Factory, Data Lake Gen2 & Synapse Analytics, aiding in automating the analytics of 20GB data', "Performed analytics and and architected ML Model on the big data using DataBricks and PowerBI, improving the client’s ore yield"],
    technologies: ["C#", "AngularJS", "ASP.net", "Python", "Microsoft SQL Server", "Azure Data Factory", "Azure Data Lake Gen 2", "Azure Databricks", "Azure Synapse Analytics", "PowerBI", "Industrial IoT"],
  },
  {
    year: "12/2021 - 08/2022",
    role: "Software Developer",
    company: "Sahacharya Digital Solutions PVT. LTD",
    description: ['Engineered REST APIs for a finances management and Community Management apps using NodeJS, EJS, JQuery, AJAX ReactJS, digitizing the lives of 2000+ users', 'Optimized download PDF for 10,000+ records functionality, using MySQL query and PuppeteerJS, improving download speed of large data', 'Automated the monthly maintenance fee invoice alert functionality using Node Cron, improving the efficiency of sending 2000+ community members monthly invoice', 'Established a community complains functionality, using AWS Simple Email Service, digitizing the community issue reporting and reducing the complain handling time to 2 weeks'],
    technologies: ["EJS", "MySQL", "BitBucket", "Jira", "AWS Simple Email Service", "NodeJS", "ExpressJS", "PuppeteerJS", "NodeCron"],
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
