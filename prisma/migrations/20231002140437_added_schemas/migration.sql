/*
  Warnings:

  - You are about to drop the `CourseToPrerequisite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `academic_departments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `academic_faculty` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `academic_semesters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `buildings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `course_faculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `faculties` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offered_course_class_schedules` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offered_course_sections` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `offered_courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `rooms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `semester_registrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_academic_infos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_enrolled_course_marks` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_enrolled_courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_semester_payments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_semester_registration_courses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `student_semester_registrations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'customer');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('pending', 'shipped', 'delivered');

-- DropForeignKey
ALTER TABLE "CourseToPrerequisite" DROP CONSTRAINT "CourseToPrerequisite_courseId_fkey";

-- DropForeignKey
ALTER TABLE "CourseToPrerequisite" DROP CONSTRAINT "CourseToPrerequisite_preRequisiteId_fkey";

-- DropForeignKey
ALTER TABLE "academic_departments" DROP CONSTRAINT "academic_departments_academicFacultyId_fkey";

-- DropForeignKey
ALTER TABLE "course_faculties" DROP CONSTRAINT "course_faculties_courseId_fkey";

-- DropForeignKey
ALTER TABLE "course_faculties" DROP CONSTRAINT "course_faculties_facultyId_fkey";

-- DropForeignKey
ALTER TABLE "faculties" DROP CONSTRAINT "faculties_academicDepartmentId_fkey";

-- DropForeignKey
ALTER TABLE "faculties" DROP CONSTRAINT "faculties_academicFacultyId_fkey";

-- DropForeignKey
ALTER TABLE "offered_course_class_schedules" DROP CONSTRAINT "offered_course_class_schedules_facultyId_fkey";

-- DropForeignKey
ALTER TABLE "offered_course_class_schedules" DROP CONSTRAINT "offered_course_class_schedules_offeredCourseSectionId_fkey";

-- DropForeignKey
ALTER TABLE "offered_course_class_schedules" DROP CONSTRAINT "offered_course_class_schedules_roomId_fkey";

-- DropForeignKey
ALTER TABLE "offered_course_class_schedules" DROP CONSTRAINT "offered_course_class_schedules_semesterRegistrationId_fkey";

-- DropForeignKey
ALTER TABLE "offered_course_sections" DROP CONSTRAINT "offered_course_sections_offeredCourseId_fkey";

-- DropForeignKey
ALTER TABLE "offered_course_sections" DROP CONSTRAINT "offered_course_sections_semesterRegistrationId_fkey";

-- DropForeignKey
ALTER TABLE "offered_courses" DROP CONSTRAINT "offered_courses_academicDepartmentId_fkey";

-- DropForeignKey
ALTER TABLE "offered_courses" DROP CONSTRAINT "offered_courses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "offered_courses" DROP CONSTRAINT "offered_courses_semesterRegistrationId_fkey";

-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "semester_registrations" DROP CONSTRAINT "semester_registrations_academicSemesterId_fkey";

-- DropForeignKey
ALTER TABLE "student_academic_infos" DROP CONSTRAINT "student_academic_infos_studentId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrolled_course_marks" DROP CONSTRAINT "student_enrolled_course_marks_academicSemesterId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrolled_course_marks" DROP CONSTRAINT "student_enrolled_course_marks_studentEnrolledCourseId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrolled_course_marks" DROP CONSTRAINT "student_enrolled_course_marks_studentId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrolled_courses" DROP CONSTRAINT "student_enrolled_courses_academicSemesterId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrolled_courses" DROP CONSTRAINT "student_enrolled_courses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "student_enrolled_courses" DROP CONSTRAINT "student_enrolled_courses_studentId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_payments" DROP CONSTRAINT "student_semester_payments_academicSemesterId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_payments" DROP CONSTRAINT "student_semester_payments_studentId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_registration_courses" DROP CONSTRAINT "student_semester_registration_courses_offeredCourseId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_registration_courses" DROP CONSTRAINT "student_semester_registration_courses_offeredCourseSection_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_registration_courses" DROP CONSTRAINT "student_semester_registration_courses_semesterRegistration_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_registration_courses" DROP CONSTRAINT "student_semester_registration_courses_studentId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_registrations" DROP CONSTRAINT "student_semester_registrations_semesterRegistrationId_fkey";

-- DropForeignKey
ALTER TABLE "student_semester_registrations" DROP CONSTRAINT "student_semester_registrations_studentId_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicDepartmentId_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicFacultyId_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_academicSemesterId_fkey";

-- DropTable
DROP TABLE "CourseToPrerequisite";

-- DropTable
DROP TABLE "academic_departments";

-- DropTable
DROP TABLE "academic_faculty";

-- DropTable
DROP TABLE "academic_semesters";

-- DropTable
DROP TABLE "buildings";

-- DropTable
DROP TABLE "course_faculties";

-- DropTable
DROP TABLE "courses";

-- DropTable
DROP TABLE "faculties";

-- DropTable
DROP TABLE "offered_course_class_schedules";

-- DropTable
DROP TABLE "offered_course_sections";

-- DropTable
DROP TABLE "offered_courses";

-- DropTable
DROP TABLE "rooms";

-- DropTable
DROP TABLE "semester_registrations";

-- DropTable
DROP TABLE "student_academic_infos";

-- DropTable
DROP TABLE "student_enrolled_course_marks";

-- DropTable
DROP TABLE "student_enrolled_courses";

-- DropTable
DROP TABLE "student_semester_payments";

-- DropTable
DROP TABLE "student_semester_registration_courses";

-- DropTable
DROP TABLE "student_semester_registrations";

-- DropTable
DROP TABLE "students";

-- DropEnum
DROP TYPE "ExamType";

-- DropEnum
DROP TYPE "PaymentStatus";

-- DropEnum
DROP TYPE "SemesterRegistrationStatus";

-- DropEnum
DROP TYPE "StudentEnrolledCourseStatus";

-- DropEnum
DROP TYPE "WeekDays";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'customer',
    "contactNo" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "profileImg" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "genre" TEXT NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewAndRating" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "bookdId" TEXT NOT NULL,

    CONSTRAINT "ReviewAndRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderedBooks" JSONB[],
    "status" "Status" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewAndRating" ADD CONSTRAINT "ReviewAndRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewAndRating" ADD CONSTRAINT "ReviewAndRating_bookdId_fkey" FOREIGN KEY ("bookdId") REFERENCES "books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
