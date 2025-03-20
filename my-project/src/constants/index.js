import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Graduate Teaching Assistant",
    company: "Concordia University.",
    description: `Graduate Teaching Assistant for COMP 445: Data Communication and Computer Networks, assisting with grading, student queries on networking concepts, and managing course materials on Moodle. Supported topics like data communication, Internet Protocol, and network protocols. Improved expertise in computer networking and student engagement.`,
  },
  {
    year: "2025 - Present",
    role: "Graduate Teaching Assistant",
    company: "Concordia University",
    description: `Graduate Teaching Assistant for COMP 346: Operating Systems, evaluating assignments and helping students understand OS fundamentals like processes, concurrency, and memory management. Provided guidance on file systems and synchronization concepts. Strengthened my knowledge of operating systems while supporting student learning.`,
  }
];
export const EDUCATION = [
  {
    year: "2023 - 2025",
    University: "Concordia University",
    Degree: "Master of Applied Computer Science",
    description: "Relevant coursework: Applied Artificial Intelligence, Big Data Analytics, Algorithm Design Techniques.",
  },
  {
    year: "2019 - 2023",
    University: "Dr. Shakuntala Misra National Rehabilitation University",
    Degree: "Bachelor of Technology in Computer Science",
    description: "Relevant coursework: Machine Learning, Data Structures and Algorithms, Deep Learning.",
  }
];

export const PROJECTS = [
  {
    title: "Traffic Sign Recognition with Computer Vision",
    image: project1,
    description:
      "Developed and fine-tuned 9 CNN models, including ResNet18 and VGG16 Transfer Learning models, achieving over 98% accuracy. Analyzed over 20,000 images across 34 classes from datasets like GTSRB, RSD, and CTS, optimizing preprocessing and visualizing model predictions with t-SNE. Hyperparameter optimization techniques were implemented to enhance model performance.",
    technologies: [
      "Python", 
      "PyTorch", 
      "Convolutional Neural Networks (CNN)", 
      "Transfer Learning", 
      "Dimensionality Reduction", 
      "Hyperparameter Tuning", 
      "Data Preprocessing", 
      "Image Classification", 
      "Model Evaluation"
    ],
  },
  {
    title: "Book Recommendation System",
    image: project2,
    description:
      "Designed and deployed a scalable book recommendation web app using AWS ECS/EC2 and Docker, ensuring high availability through clustering on EC2 instances. Implemented recommendation algorithms like cosine similarity and content-based filtering for personalized suggestions. Optimized AWS resource usage by 5% and managed EC2, S3, and Docker for efficient development and deployment.",
    technologies: [
      "Python", 
      "Flask", 
      "AWS (EC2, S3, ECS)", 
      "Docker", 
      "Recommendation Algorithms (Cosine Similarity, Content-Based Filtering)", 
      "Data Engineering", 
      "Scalable System Design", 
      "Cloud Computing"
    ],
  },
  {
    title: "Warzone Game",
    image: project3,
    description:
      "Developed a modular Java-based Warzone game, applying MVC architecture and incorporating design patterns like State, Strategy, and Command for seamless gameplay and maintainability. Implemented time and space-efficient algorithms for optimal performance. Utilized Git for CI/CD, ensuring quality code and streamlined development in collaboration with the team.",
    technologies: [
      "Java", 
      "Object-Oriented Programming (OOP)", , 
      "Algorithm Optimization", 
      "Version Control (Git)", 
      "CI/CD"
    ],
  },
  {
    title: "MeBot - Emotion-Based Song Recommender Chatbot",
    image: project4,
    description:
      "Led the development of MeBot, an emotion-based song recommender chatbot, integrating emotion analysis with ANNs and natural language processing using NLTK. Employed AJAX for efficient data exchange and a RESTful API for smooth communication with external applications. Built and deployed the web application using HTML, CSS, JavaScript, Python, and Flask.",
    technologies: [
      "Python", 
      "Flask", 
      "Artificial Neural Networks (ANN)", 
      "Natural Language Processing (NLP)", 
      "NLTK", 
      "RESTful APIs", 
      "Data Integration", 
      "Web Development"
    ],
  },
  {
    title: "Portfolio",
    image: project4, 
    description:
      "Created a responsive, interactive portfolio website showcasing various projects and skills. Utilized modern web technologies including TailwindCSS for custom styling, React for dynamic content management, and Framer for smooth animations. Focused on user experience with mobile responsiveness and fast load times, providing a professional online presence.",
    technologies: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "React", 
      "TailwindCSS", 
      "Framer", 
      "Responsive Design", 
      "UI/UX Design", 
      "Web Development"
    ],
  },
];

export const CONTACT = {
  email: "khushidoval20@gmail.com",
};