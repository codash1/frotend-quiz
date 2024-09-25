import { Question } from "@/types/Question";


export const quizQuestions:Question[]  = [

       { question: "O que significa HTML?",
        options: [
          "HyperText Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "HighText Machine Language"
        ],
        answer: 0
      },
      
      {
        question: "Qual tag é usada para criar um link em HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: 0
      },
      {
        question: "Qual tag é usada para criar um parágrafo em HTML?",
        options: ["<div>", "<h1>", "<p>", "<span>"],
        answer: 2
      },
      {
        question: "O que significa CSS?",
        options: [
          "Cascading Style Sheets",
          "Colorful Style Sheets",
          "Creative Style Sheets",
          "Computer Style Sheets"
        ],
        answer: 0
      },
      {
        question: "Qual propriedade do CSS altera a cor de fundo de um elemento?",
        options: ["color", "background-color", "bg-color", "border-color"],
        answer: 1
      },
      {
        question: "Como você define a cor de um texto em CSS?",
        options: ["font-color", "text-color", "color", "text-style"],
        answer: 2
      },
      
      
      {
        question: "Como você cria uma função em JavaScript?",
        options: [
          "function myFunction()",
          "function:myFunction()",
          "create myFunction()",
          "function = myFunction()"
        ],
        answer: 0
      },
      {
        question: "Como você declara uma variável em JavaScript?",
        options: ["var", "let", "const", "Todas as anteriores"],
        answer: 3
      },
      {
        question: "Qual método converte uma string em um número inteiro?",
        options: ["parseInt()", "parseFloat()", "toFixed()", "toString()"],
        answer: 0
      },
     {
        question: "Qual atributo HTML é usado para fornecer uma descrição para leitores de tela?",
        options: ["alt", "title", "desc", "aria-label"],
        answer: 0
      },
      {
        question: "Qual é o propósito do atributo `tabindex`?",
        options: [
          "Controlar a ordem de tabulação",
          "Definir estilos de foco",
          "Adicionar legendas",
          "Modificar texto alternativo"
        ],
        answer: 0
      },
      {
        question: "O que significa WCAG?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Core Accessibility Group",
          "Wide Content Accessibility Guidelines",
          "Web Customization Accessibility Guidelines"
        ],
        answer: 0
      },
      
];
