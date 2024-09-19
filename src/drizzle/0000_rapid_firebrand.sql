CREATE TABLE IF NOT EXISTS "courseChapters" (
	"id" serial PRIMARY KEY NOT NULL,
	"courseId" varchar NOT NULL,
	"chapterId" integer NOT NULL,
	"content" json NOT NULL,
	"videoId" varchar NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "courseList" (
	"id" serial PRIMARY KEY NOT NULL,
	"courseId" varchar NOT NULL,
	"name" varchar NOT NULL,
	"category" varchar NOT NULL,
	"level" varchar NOT NULL,
	"courseOutput" json NOT NULL,
	"isVideo" varchar DEFAULT 'Yes' NOT NULL,
	"username" varchar,
	"userprofileimage" varchar,
	"createdBy" varchar,
	"courseBanner" varchar,
	"isPublished" boolean DEFAULT false NOT NULL
);
