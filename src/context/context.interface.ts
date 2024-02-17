import { Context } from "telegraf";

export interface SessionData {
    currentRegistrationStatus: string | undefined;
    сurrentCourseID: number;
    enrolledCourse: boolean;
}

export interface IBotContext extends Context {
    session: SessionData;
}