// import {FcGenericSortingAsc, } from 'react-icons/fc'

import sortDesc from '../images/sort.png'; 
import image from '../images/zombie.png'; 
import budget from '../images/budget.png'

export const portfolio_data=[
    {
        id: 1, 
        title: 'Sorting Visualizer',
        description: "This repository contains the code of my project: Sorting Visualizer. As the name suggests, the program would help us see the sorting algorithm working in real time with variable array sizes.",
        variant: 'primary', 
        icon: sortDesc,
        link: "https://github.com/rrtyagii/Sorting-Algorithm-Visualizer",
    }, 
    {
        id: 2, 
        title: 'Plant vs Zombies',
        description: "This is the implementation of the popular game Plants vs Zombies.",
        variant: 'dark', 
        icon: image,
        link: "https://github.com/rrtyagii/Plants-vs-Zombies",
    },     
    {
        id: 3, 
        title: 'Personal Expense App',
        description: "Personal Expense App built using Dart and Flutter.",
        variant: 'danger', 
        icon: budget, 
        link: "https://github.com/rrtyagii/Personal_Expense_App",
    }, 
]; 