import { Prisma } from "@prisma/client";
import httpStatus from "http-status";
import { IGenericErrorMessage } from "../interfaces/error.interface";

const handleClientError = (error: Prisma.PrismaClientKnownRequestError) => {
  let errors: IGenericErrorMessage[] = [];
  let message = "";
  let statusCode = 400;

  if (error.code === "P2025") {
    message = (error.meta?.cause as string) || "Record not found!";
    errors = [
      {
        path: "",
        message,
      },
    ];
  } else if (
    error instanceof Prisma.PrismaClientKnownRequestError &&
    error.code === "P2002"
  ) {
    statusCode = httpStatus.CONFLICT;
    message = `Duplicate field: ${
      error.meta ? (error.meta.target as any).join(",") : "Something went wrong"
    }`;
    errors = [
      {
        path: "",
        message,
      },
    ];
  } else if (error.code === "P2003") {
    if (error.message.includes("delete()` invocation:")) {
      message = "Delete failed";
      errors = [
        {
          path: "",
          message,
        },
      ];
    }
  }

  return {
    statusCode,
    message,
    errorMessages: errors,
  };
};

export default handleClientError;

//"//\nInvalid `prisma.semesterRegistration.delete()` invocation:\n\n\nAn operation failed because it depends on one or more records that were required but not found. Record to delete does not exist.",
