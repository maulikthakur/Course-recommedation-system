const predefinedSkills = [
    "python",
    "javascript",
    "js",
    "react",
    "react.js",
    "c++",
    "c",
    "web dev",
    "data science",
    "machine learning",
    "web development",
    "cybersecurity",
    "blockchain",
  ];
  
  const coursesData = {
    python: [
      { name: "Complete Python Bootcamp", image: "python1.png", link: "https://udemy.com/course/complete-python-bootcamp/" },
      { name: "Python for Data Science", image: "python2.png", link: "https://udemy.com/course/python-for-data-science/" },
    ],
    javascript: [
      { name: "JavaScript for Beginners", image: "js1.png", link: "https://www.udemy.com/course/javascript-basics-for-beginners/" },
      { name: "Advanced JavaScript", image: "js2.png", link: "https://udemy.com/course/advanced-javascript/" },
    ],
    js: [
      { name: "JavaScript for Beginners", image: "js1.png", link: "https://www.udemy.com/course/javascript-basics-for-beginners/" },
      { name: "Advanced JavaScript", image: "js2.png", link: "https://udemy.com/course/advanced-javascript/" },
    ],
    react: [
      { name: "React - The Complete Guide", image: "react1.png", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
      { name: "React Hooks and Redux", image: "react2.png", link: "https://www.udemy.com/course/the-ultimate-react-course/" },
    ],
    "react.js": [
      { name: "React - The Complete Guide", image: "react1.png", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" },
      { name: "React Hooks and Redux", image: "react2.png", link: "https://www.udemy.com/course/the-ultimate-react-course/" },
    ],
    "c++": [
      { name: "C++ for Beginners", image: "cpp1.png", link: "https://www.udemy.com/course/learn-c-and-c-beginner-to-advance/" },
      { name: "Advanced C++ Programming", image: "cpp2.png", link: "https://www.udemy.com/course/beginning-c-plus-plus-programming/" },
    ],
    c: [
      { name: "C Programming for Beginners", image: "c1.png", link: "https://udemy.com/course/c-programming-for-beginners/" },
      { name: "Master C Programming", image: "c2.png", link: "https://www.udemy.com/course/c-programming-for-beginners-programming-in-c/" },
    ],
    "web dev": [
      { name: "Web Development Bootcamp", image: "webdev1.png", link: "https://udemy.com/course/web-development-bootcamp/" },
      { name: "Modern Web Design", image: "webdev2.png", link: "https://udemy.com/course/modern-web-design/" },
    ],
    "data science": [
      { name: "Data Science for Beginners", image: "datasci1.png", link: "https://www.udemy.com/course/the-data-science-course-complete-data-science-bootcamp/" },
      { name: "Advanced Data Science", image: "datasci2.png", link: "https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/" },
    ],
    "machine learning": [
      { name: "Machine Learning A-Z", image: "ml1.png", link: "https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/" },
      { name: "Deep Learning with TensorFlow", image: "ml2.png", link: "https://www.udemy.com/course/machinelearning/" },
    ],
    "web development": [
      { name: "Web Development Bootcamp", image: "webdev1.png", link: "https://udemy.com/course/web-development-bootcamp/" },
      { name: "Modern Web Design", image: "webdev2.png", link: "https://udemy.com/course/modern-web-design/" },
    ],
    cybersecurity: [
      { name: "Introduction to Cybersecurity", image: "cyber1.png", link: "https://www.udemy.com/course/securityplus/" },
      { name: "Ethical Hacking", image: "cyber2.png", link: "https://www.udemy.com/course/certifiedincybersecurity/" },
    ],
    blockchain: [
      { name: "Blockchain Fundamentals", image: "blockchain1.png", link: "https://www.udemy.com/course/build-your-blockchain-az/" },
      { name: "Build a Blockchain App", image: "blockchain2.png", link: "https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/" },
    ],
  };
  
  const skillInput = document.getElementById("skillInput");
  const getCoursesBtn = document.getElementById("getCoursesBtn");
  const errorMessage = document.getElementById("errorMessage");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const courseContainer = document.getElementById("courseContainer");
  
  getCoursesBtn.addEventListener("click", () => {
    const skill = skillInput.value.trim().toLowerCase(); // Normalize input
    errorMessage.classList.add("hidden");
    courseContainer.classList.add("hidden");
  
    if (!predefinedSkills.includes(skill)) {
      errorMessage.textContent = `Sorry, "${skill}" is not available. Please try another skill.`;
      errorMessage.classList.remove("hidden");
      return;
    }
  
    loadingSpinner.classList.remove("hidden");
  
    setTimeout(() => {
      loadingSpinner.classList.add("hidden");
      courseContainer.classList.remove("hidden");
      displayCourses(skill);
    }, 1500); // Simulate loading
  });
  
  function displayCourses(skill) {
    const courses = coursesData[skill] || [];
    courseContainer.innerHTML = "";
  
    courses.forEach((course) => {
      const courseDiv = document.createElement("div");
      courseDiv.className = "course";
  
      const courseImage = document.createElement("img");
      courseImage.src = course.image;
      courseImage.alt = `${course.name} Image`;
  
      const courseLink = document.createElement("a");
      courseLink.href = course.link;
      courseLink.target = "_blank";
      courseLink.textContent = course.name;
  
      courseDiv.appendChild(courseImage);
      courseDiv.appendChild(courseLink);
  
      courseContainer.appendChild(courseDiv);
    });
  }
  