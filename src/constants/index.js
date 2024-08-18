import project1 from "../assets/projects/blog.webp";
import project2 from "../assets/projects/Review-websites.jpg";
import project3 from "../assets/projects/hospital-management-system.jpg";
import project4 from "../assets/projects/criminal-detection.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React.js, as well as back-end technologies like Node.js, Python, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = "I am a passionate and versatile Full-Stack Developer with experience in developing scalable web applications and data-driven solutions. My expertise spans across technologies like React, Node.js, Python, Django, and MongoDB, gained through hands-on roles at organizations like Schneider Electric and Hoosier Community Network. I have a strong background in implementing secure authentication systems, optimizing deployment pipelines, and leveraging machine learning models to enhance application performance. Continuously driven by a curiosity for innovation, I thrive in collaborative environments where I can solve complex problems and deliver impactful solutions. When I’m not coding, I enjoy exploring emerging technologies and creating applications that will help me in my day to day life";

export const EXPERIENCES = [
  {
    year: "01/2024 - Present",
    role: "Full Stack Developer",
    company: "Hoosier Community Network",
    description: ['Led a team of 4 to create data library, an web app with business insights and data using MongoDb, ExpressJS, AngularJS, NodeJS, enhancing data accessibility for 1,000+ small business owners.', 'Implemented secure authentication with BcryptJS, Firebase, reducing unauthorized access by 50%.', 'Devised efficient bot detection system using TensorflowJS object detection model and CAPTCHA, reducing bot registration by 95%.', 'Orchestrated a pipeline to build and deploy app hosted on EC2 using Jenkins, Ansible, Docker and Kubernetes improving deployment efficiency by 30% and ensuring scalable, reliable application delivery'],
    technologies: ["Javascript", "Angular.js", "mongoDB", "Node.js", "Firebase", "Tensorflow.js", "EC2", "Jenkins", "Docker", "Kubernetes"],
  },
  {
    year: "08/2023 - 12/2023",
    role: "Software Development Co-op",
    company: "Schneider Electric",
    description: ['Co-created a Levelized Cost of Hydrogen Calculator app using Django to compare the economic feasibility of renewable fuel production systems.', 'Engineered a cost modeling algorithm in Python, improving cost estimation accuracy by 20%.', 'Established real-time data acquisition via RESTful APIs for cost adjustments based on fluctuating prices and operational changes.', 'Displayed interactive graphs, showing the distribution of various inputs in the LCOH calculation using JavaScript, D3.js, and Chart.js in the front-end, allowing users to visualize the impact of each variable on the overall cost.'],
    technologies: ["HTML", "CSS", "Django", "JavaScript", "D3.js", "Chart.js", "MySQL"],
  },
  {
    year: "06/2023 - 08/2023",
    role: "Machine Learning & Artificial Intelligence Intern",
    company: "Schneider Electric",
    description: ['Collaborated with cross-functional teams to analyze 20GB of ore processing system dataset using Agile/Scrum Methodologies , leading to improved ore yield.', 'Built an ETL pipeline to transfer Microsoft SQL Server data to cloud using Azure Data Factory, Azure Databricks & Azure Synapse Analytics, which cut manual effort by 70% & boosted data processing efficiency by 60%.', 'Applied Principal Component Analysis (PCA) to extract interrelations among variables & significant components improving the accuracy of the subsequent prediction model by 10%.', 'Created a predictive model to understand the machine behaviour at different inputs using XGBoost Regression Machine Learning Algorithm, achieving 93% accuracy.'],
    technologies: ["Python", "Microsoft SQL Server", "Microsoft SQL Server", "Azure Databricks", "Azure Synapse Analytics", "XGBoost Regression"],
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
    title: "Criminal Detection System",
    image: project4,
    description:
      "A system that detects the identification of a criminal using their BMI.",
    technologies: ["Matlab", "Flutter", "HTML", "CSS"],
    githubLink:"https://github.com/mihirvaidya221998/Criminal-Detection",
  },
];

export const CONTACT = {
  address: "6120 SW 27th St Topeka Kansas",
  phoneNo: "+18125532142",
  email: "mihirsv22@gmail.com",
};
