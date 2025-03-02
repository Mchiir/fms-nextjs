import React from "react";
import TeacherHeader from "./components/StudentHeader";

function page(){
    return (
        <div className="border rounded-md border-[#B0D1F5] m-0 px-1 py-2">
            {/* Header */}
            <TeacherHeader />

            {/* Sub-header */}
            <div>
                <div>
                    <h3>Welcome Eric Ten Hag</h3>
                    <p>Pleased that you're back 😎</p>
                </div>
                <div>
                    <button>Upload Curriculum</button>
                </div>
                <div>
                    <button>Analyze Curriculum</button>
                </div>
            </div>

            {/* Curriculum progress */}
            <div>
                <div>Overall performance</div>
                <div>Declines</div>
                <div>
                    <div>Students</div>
                    <div>Lessons</div>
                </div>
                <div>
                    <div>AI Score</div>
                    <div>Books used</div>
                </div>
            </div>

            {/* Body */}
            <div>
                <div>Overal workrate</div>
                <div>Calendar</div>
            </div>

            {/* Footer */}
            <div>
                <section>
                    <h4>New students who want to join</h4>
                    <div>Student</div>
                    <div>Student</div>
                    <div>Student</div>
                </section>
                <section>
                    <h4>More info</h4>
                    <div>300 More students</div>
                    <div>6 Courses completed</div>
                    <div>25 Completions won</div>
                </section>
                <section>
                    <h4>Schedule</h4>
                    <div>Meeting</div>
                    <div>Assessment</div>
                    <div>Meeting</div>
                </section>
            </div>
        </div>
    )
}

export default page;