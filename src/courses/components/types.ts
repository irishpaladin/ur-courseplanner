// types.ts
export interface RequirementType {
  requirement_id: number;
  requirement_name: string;
  requirement_status: number;
  requirement_occurence: number;
  audit_id: number;
  coursesubject: string;
  requirement_details: RequirementDetails[];
}

export interface RequirementDetails {
  coursesubject_id: number;
  coursesubject_name: string;
  coursesubject: string;
  coursecatalogs:CourseCatalogs[];
}

export interface CourseCatalogs {
  coursecatalog_id: number;
  coursecatalog_name: string;
  faculty_id: number;
  coursecatalog_number: number;
  courseattribute_id: number;
  sections: Sections[];
}

export interface Sections {
  coursesection_id: number;
  coursesection_year: number;
  coursesection_term: number;
  coursesection_number: number;
  coursesection_CRN: number;
  coursesection_maxseat: number;
  coursesection_maxwaitlist: number;
  sectionschedule_starttime: string;
  sectionschedule_endtime: string;
  schedule: Schedule[];
}

export interface Schedule {
  sectionschedule_id: number;
  sectionschedule_starttime: string;
  sectionschedule_endtime: string;
  sectionschedule_day: number;
}
