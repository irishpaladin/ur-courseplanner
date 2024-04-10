import { EyesActionButton } from "./components/EyesActionButton";

interface ISection{
    coursesection_CRN:Int16Array,
    coursesection_id:Int16Array,
    coursesection_maxseat:Int16Array,
    coursesection_maxwaitlist:Int16Array,
    coursesection_number:Int16Array,
    coursesection_term:Int16Array,
    coursesection_year:Int16Array,
    labsection_id:Int16Array
  }
  
  interface ICourseCatalog {
    courseattribute_id:Int16Array,
    coursecatalog_id:Int16Array,
    coursecatalog_name: string,
    coursecatalog_number:Int16Array,
    faculty_id:Int16Array,
    sections:Array<ISection>
  }
  
  interface ICoursesSubject {
    coursecatalogs:Array<ICourseCatalog>
    coursesubject:string,
    coursesubject_id:Int16Array,
    coursesubject_name:string
  }

export function transformCourseDetails(props:Array<ICoursesSubject>){
    console.log("I am in transformCourseDetails");
    console.log(props);
    if(props==null) return;

    const transformedList = props.map((coursesubject) => {
        return {
            name: coursesubject.coursesubject_name,
            id:coursesubject.coursesubject_id?.toString(),
            action:(
                <EyesActionButton/>
            ),
            children: (
                coursesubject.coursecatalogs.map((cc) => {
                    return {
                        name: coursesubject.coursesubject+" "+cc.coursecatalog_number+" - "+cc.coursecatalog_name,
                        id:cc.coursecatalog_id?.toString(),
                        action:(
                            <EyesActionButton/>
                        ),
                        children: (
                            cc.sections.map((s,index) => {
                                var lecturenumber = index+1;
                                return {
                                    name: "Lecture " + lecturenumber,
                                    id: s.coursesection_id?.toString()
                                }
                            })
                        )
                    }
                })
            )
            
        }
    });
    return transformedList;
    //const transformedCourses = props.
}