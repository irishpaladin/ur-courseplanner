import React from 'react';



function Alerts() {
    const users = [
        { course: { code: 'CS 310', title: 'Digital System Architecture' }, semester: 'Winter 2025', section: 'Lecture 001', schedule: 'Tue, Thu:11pm to 7pm' },
        { course: { code: 'CS 311', title: 'Data Structures and Algorithms' }, semester: 'Winter 2025', section: 'Lecture 001', schedule: 'Tue, Thu:11pm to 7pm' },
        { course: { code: 'CS 312', title: 'Operating Systems' }, semester: 'Winter 2025', section: 'Lecture 001', schedule: 'Tue, Thu:11pm to 7pm' },
    ];

    return (
        <div className="pages">
      <div style={{ marginTop: '30px', borderRadius: '10px', overflow: 'hidden', margin: '30px 200px' }}>

            <button style={{ float: 'right', backgroundColor: 'black', color: 'white', border: '5px solid #f8f9fa', padding: '10px 20px', marginBottom: '10px' }}>
                Add Course
            </button>

            <table style={{ borderCollapse: 'collapse', width: '100%', textAlign: 'center' }}>
                <thead style={{ backgroundColor: '#c0c0c0', color: 'black' }}>
                    <tr>
                        <th style={{ padding: '10px' }}>COURSE</th>
                        <th style={{ padding: '10px' }}>SEMESTER</th>
                        <th style={{ padding: '10px' }}>SECTION</th>
                        <th style={{ padding: '10px' }}>SCHEDULE</th>
                        <th style={{ padding: '10px' }}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} style={{ backgroundColor: 'white', color: 'black', borderBottom: '5px solid #f8f9fa' }}>
                            <td style={{ padding: '10px' }}>
                                <div>
                                    <span style={{ marginRight: '10px', fontWeight: 'bold' }}>{user.course.code}</span>
                                    <span>{user.course.title}</span>
                                </div>
                            </td>
                            <td style={{ padding: '10px'}}>{user.semester}</td>
                            <td style={{ padding: '10px' }}>{user.section}</td>
                            <td style={{ padding: '10px' }}>{user.schedule}</td>
                            <td style={{ padding: '10px' }}>
                                <button style={{ backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px' }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Alerts;