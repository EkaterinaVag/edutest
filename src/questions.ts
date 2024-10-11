interface Question {
    id: number;
    type: 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'LONG_ANSWER' | 'SHORT_ANSWER';
    question: string;
    options?: string[];
    answer: string | string[];
   }

const questions: Question[] = [
  {
    id: 1,
    type: 'SINGLE_CHOICE',
    question:
      'Какой язык программирования используется для разработки веб-приложений?',
    options: ['JavaScript', 'Python', 'C++'],
    answer: 'JavaScript',
  },
  {
    id: 2,
    type: 'SINGLE_CHOICE',
    question:
      'Какая из этих технологий является фреймворком для фронтенд-разработки?',
    options: ['React', 'Node.js', 'MongoDB'],
    answer: 'React',
  },
  {
    id: 3,
    type: 'SINGLE_CHOICE',
    question: 'Что такое HTML?',
    options: [
      'Язык программирования',
      'Язык разметки',
      'Протокол передачи данных',
    ],
    answer: 'Язык разметки',
  },
  {
    id: 4,
    type: 'SINGLE_CHOICE',
    question:
      'Какая из этих технологий является библиотекой для фронтенд-разработки?',
    options: ['jQuery', 'Angular', 'Vue.js', 'Bootstrap'],
    answer: 'jQuery',
  },
  {
    id: 7,
    type: 'SINGLE_CHOICE',
    question: 'Какая из этих баз данных является реляционной?',
    options: ['MongoDB', 'MySQL', 'Redis', 'Cassandra'],
    answer: 'MySQL',
  },
  {
    id: 8,
    type: 'MULTIPLE_CHOICE',
    question:
      'Какие из этих технологий используются для разработки мобильных приложений?',
    options: ['React Native', 'Swift', 'Java', 'Kotlin'],
    answer: ['React Native', 'Swift', 'Java', 'Kotlin'],
  },
  {
    id: 9,
    type: 'MULTIPLE_CHOICE',
    question: 'Какие из этих языков используются для создания веб-сайтов?',
    options: ['HTML', 'CSS', 'JavaScript', 'Python'],
    answer: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 10,
    type: 'MULTIPLE_CHOICE',
    question:
      'Какие из этих языков программирования являются объектно-ориентированными?',
    options: ['Java', 'Python', 'JavaScript', 'C#', 'C++'],
    answer: ['Java', 'Python', 'JavaScript', 'C#', 'C++'],
  },
  {
    id: 11,
    type: 'MULTIPLE_CHOICE',
    question:
      'Какие из этих технологий используются для создания микросервисов?',
    options: ['Docker', 'Kubernetes', 'Spring Boot', 'Node.js', 'Go'],
    answer: ['Docker', 'Kubernetes', 'Spring Boot', 'Node.js', 'Go'],
  },
  {
    id: 12,
    type: 'LONG_ANSWER',
    question: 'Что такое MVC-архитектура?',
    answer:
      'MVC - это архитектурный паттерн, который разделяет приложение на три компонента: модель, представление и контроллер.',
  },
  {
    id: 13,
    type: 'LONG_ANSWER',
    question: 'Что такое REST API?',
    answer:
      'REST API - это архитектурный стиль для создания веб-сервисов, основанный на использовании HTTP-методов для доступа к ресурсам.',
  },
  {
    id: 14,
    type: 'SHORT_ANSWER',
    question: 'Что такое DOM?',
    answer: 'Document Object Model',
  },
  {
    id: 15,
    type: 'SHORT_ANSWER',
    question: 'Что такое SQL?',
    answer: 'Structured Query Language',
  },
];

const totalQuestions: number = questions.length;

export { questions, totalQuestions };
