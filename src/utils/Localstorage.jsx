const employees = [
  {
    "id": 1,
    "first_name": "John",
    "email": "e1@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Develop Login Page",
        "task_description": "Implement the login page using React.js and integrate API.",
        "task_date": "2024-11-10",
        "task_category": "Frontend Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Debug User Dashboard",
        "task_description": "Fix bugs in the dashboard layout and functionality.",
        "task_date": "2024-11-12",
        "task_category": "Bug Fixing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Code Review",
        "task_description": "Review code for the new feature module.",
        "task_date": "2024-11-05",
        "task_category": "Code Review"
      }
    ],
    "taskCount": [
      { "active": 2 },
      { "newTask": 1 },
      { "completed": 1 },
      { "failed": 0 }
    ]
  },
  {
    "id": 2,
    "first_name": "Alice",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Design User Profile Page",
        "task_description": "Create a responsive user profile page layout.",
        "task_date": "2024-11-13",
        "task_category": "UI/UX Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Optimize Database Queries",
        "task_description": "Improve query performance for better page load times.",
        "task_date": "2024-11-02",
        "task_category": "Database Optimization"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Implement API Integration",
        "task_description": "Integrate API for the profile update feature.",
        "task_date": "2024-11-14",
        "task_category": "Backend Development"
      }
    ],
    "taskCount": [
      { "active": 2 },
      { "newTask": 1 },
      { "completed": 1 },
      { "failed": 0 }
    ]
  },
  {
    "id": 3,
    "first_name": "Mark",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Conduct Research",
        "task_description": "Research best practices for accessibility in web design.",
        "task_date": "2024-11-09",
        "task_category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Update Documentation",
        "task_description": "Add instructions for the new deployment process.",
        "task_date": "2024-11-07",
        "task_category": "Documentation"
      }
    ],
    "taskCount": [
      { "active": 1 },
      { "newTask": 1 },
      { "completed": 1 },
      { "failed": 0 }
    ]
  },
  {
    "id": 4,
    "first_name": "Linda",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Implement Chat Feature",
        "task_description": "Develop real-time chat using WebSockets.",
        "task_date": "2024-11-10",
        "task_category": "Feature Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Refactor Codebase",
        "task_description": "Improve code structure for maintainability.",
        "task_date": "2024-11-04",
        "task_category": "Refactoring"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Test Notification Service",
        "task_description": "Run tests to ensure notifications are sent accurately.",
        "task_date": "2024-11-12",
        "task_category": "Testing"
      }
    ],
    "taskCount": [
      { "active": 2 },
      { "newTask": 1 },
      { "completed": 1 },
      { "failed": 0 }
    ]
  },
  {
    "id": 5,
    "first_name": "Sophia",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "task_title": "Setup CI/CD Pipeline",
        "task_description": "Configure automated deployment for the app.",
        "task_date": "2024-11-11",
        "task_category": "DevOps"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "task_title": "Update Security Policies",
        "task_description": "Review and update security configurations.",
        "task_date": "2024-11-01",
        "task_category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "task_title": "Bug Fix on Settings Page",
        "task_description": "Resolve errors encountered on settings page.",
        "task_date": "2024-11-13",
        "task_category": "Bug Fixing"
      }
    ],
    "taskCount": [
      { "active": 2 },
      { "newTask": 1 },
      { "completed": 1 },
      { "failed": 0 }
    ]
  }
];


  

  const admin =[
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
      
  ]

  

  export const setLocalStorage = () => {
    
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    return { employees, admin };
  };