import { StatusCodes } from 'http-status-codes';

export const INVALID_SESSION = {
  message: 'Invalid session',
  code: StatusCodes.UNAUTHORIZED,
  customCode: 4011,
};

export const AUTH_HEADER_MISSING = {
  message: 'Authentication header missing',
  code: StatusCodes.UNAUTHORIZED,
  customCode: 4012,
};

export const OTP_EXPIRED = {
  message: 'OTP Expired',
  code: StatusCodes.UNAUTHORIZED,
  customCode: 4013,
};

export const INVALID_OTP = {
  message: 'Validation error',
  code: StatusCodes.UNAUTHORIZED,
  customCode: 4014,
};

export const PERMISSION_DENIED = {
  message: "You don't have permission to perform this action",
  code: StatusCodes.UNAUTHORIZED,
  customCode: 4015,
};

export const BAD_REQUEST = {
  message: 'Validation error',
  code: StatusCodes.BAD_REQUEST,
  customCode: 4016,
};

export const NOT_FOUND = {
  message: 'Not found error.',
  code: StatusCodes.NOT_FOUND,
  customCode: 4017,
};
