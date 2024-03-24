import { EyesActionButton } from "./components/EyesActionButton";
import { SlashEyesActionButton } from "./components/SlashEyesActionButton";


export const fetchCourses = [
    {
        name: 'Computer Science',
        id: '1',
        action:(
            <EyesActionButton/>
        ),
        children: [
            {
                name: 'CS 405 - Computer Graphics',
                id: '11',
                action:(
                    <EyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '111' },
                    { name: 'Lecture 002', id: '112' }
                ]
            },
            {
                name: 'CS 458 - Virtual and Augmented Reality',
                id: '12',
                action:(
                    <EyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '121' },
                    { name: 'Lecture 002', id: '122' }
                ]
            }
        ],
        defaultExpanded: true
    },
    {
        name: 'Creative Technologies Processes',
        id: '2',
        action:(
            <EyesActionButton/>
        ),
        children: [
            {
                name: 'CTCH 110',
                id: '21',
                action:(
                    <EyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '211' }
                ]
            }
        ],
    },
    {
        name: 'ED Education',
        id: '3',
        action:(
            <EyesActionButton/>
        ),
        children: [
            {
                name: 'ED 405 - Computer Graphics',
                id: '31',
                action:(
                    <EyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '311' },
                    { name: 'Lecture 002', id: '312' }
                ]
            },
            {
                name: 'ED 458 - Virtual and Augmented Reality',
                id: '32',
                action:(
                    <EyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '321' },
                    { name: 'Lecture 002', id: '322' }
                ]
            }
        ]
    },
    {
        name: 'TESTING : Really really really really long course name that should not fit in just one line',
        id: '4',
        action:(
            <EyesActionButton/>
        ),
        children: [
            { 
                name: 'Subject 001',
                id: '41',
                action:(
                    <EyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '411' },
                    { name: 'Lecture 002', id: '412' }
                ] 
            }
            
        ]
    }
];

export const fetchFilteredCourses = [
    {
        name: 'Computer Science',
        id: '1',
        action:(
            <SlashEyesActionButton/>
        ),
        children: [
            {
                name: 'CS 800 - Computer Graphics',
                id: '11',
                action:(
                    <SlashEyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '111' },
                    { name: 'Lecture 002', id: '112' }
                ]
            },
            {
                name: 'CS 458 - Virtual and Augmented Reality',
                id: '12',
                action:(
                    <SlashEyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '121' },
                    { name: 'Lecture 002', id: '122' }
                ]
            }
        ],
        defaultExpanded: true
    },
    {
        name: 'Creative Technologies Processes',
        id: '2',
        action:(
            <SlashEyesActionButton/>
        ),
        children: [
            {
                name: 'CTCH 880',
                id: '21',
                action:(
                    <SlashEyesActionButton/>
                ),
                children: [
                    { name: 'Lecture 001', id: '211' }
                ]
            }
        ],
    },
];