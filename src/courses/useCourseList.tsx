

export const fetchCourses = [
    {
        name: 'Computer Science',
        id: '1',
        children: [
            {
                name: 'CS 405 - Computer Graphics',
                id: '11',
                children: [
                    { name: 'Lecture 001', id: '111' },
                    { name: 'Lecture 002', id: '112' }
                ]
            },
            {
                name: 'CS 458 - Virtual and Augmented Reality',
                id: '12',
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
        children: [
            {
                name: 'CTCH 110',
                id: '21',
                children: [
                    { name: 'Lecture 001', id: '211' }
                ]
            }
        ],
    },
    {
        name: 'ED Education',
        id: '3',
        children: [
            {
                name: 'ED 405 - Computer Graphics',
                id: '31',
                children: [
                    { name: 'Lecture 001', id: '311' },
                    { name: 'Lecture 002', id: '312' }
                ]
            },
            {
                name: 'ED 458 - Virtual and Augmented Reality',
                id: '32',
                children: [
                    { name: 'Lecture 001', id: '321' },
                    { name: 'Lecture 002', id: '322' }
                ]
            }
        ]
    },
    {
        name: 'tESTING : Really really really really long course name that should not fit in just one line',
        id: '4',
        children: [
            { 
                name: 'Subject 001',
                id: '41',
                children: [
                    { name: 'Lecture 001', id: '411' },
                    { name: 'Lecture 002', id: '412' }
                ] 
            }
            
        ]
    }
];