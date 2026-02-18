const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Login Page",
        taskDescription: "Create responsive login UI using React.",
        taskDate: "2026-02-18",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Resolve mobile responsiveness issue.",
        taskDate: "2026-02-15",
        taskCategory: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-02-16",
        taskCategory: "Backend"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dashboard UI",
        taskDescription: "Design admin dashboard layout.",
        taskDate: "2026-02-18",
        taskCategory: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Implement validation using hooks.",
        taskDate: "2026-02-14",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy App",
        taskDescription: "Deploy project to production server.",
        taskDate: "2026-02-10",
        taskCategory: "DevOps"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription: "Develop CRUD operations using Node.js.",
        taskDate: "2026-02-18",
        taskCategory: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Schema",
        taskDescription: "Design MongoDB schema for project.",
        taskDate: "2026-02-12",
        taskCategory: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Authentication System",
        taskDescription: "Implement JWT authentication.",
        taskDate: "2026-02-11",
        taskCategory: "Security"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Add unit tests using Jest.",
        taskDate: "2026-02-18",
        taskCategory: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for better performance.",
        taskDate: "2026-02-13",
        taskCategory: "Performance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix CORS Error",
        taskDescription: "Resolve cross-origin issue.",
        taskDate: "2026-02-09",
        taskCategory: "Backend"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Landing Page",
        taskDescription: "Design modern landing page layout.",
        taskDate: "2026-02-18",
        taskCategory: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO ranking.",
        taskDate: "2026-02-12",
        taskCategory: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Payment Integration",
        taskDescription: "Integrate Razorpay payment gateway.",
        taskDate: "2026-02-08",
        taskCategory: "Backend"
      }
    ]
  }
];

export const setLocalStorage = () => {

    localStorage.setItem("employees", JSON.stringify(employees))
    localStorage.setItem("admin", JSON.stringify(admin));
  }
  export const getLocalStorage = () => {

    const employees =JSON.parse( localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(employees,admin);
    

  }
