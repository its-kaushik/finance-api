import { customError } from '../utils';
import { PERMISSION_DENIED } from '../constants/error';
import { NextFunction, Response } from 'express';
import { envs } from '../env';

//TODO: Replace with actual user roles
enum USER_ROLES {
  ADMIN = 0,
}

export const HasPerm =
  (requiredPermission: string) =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      if (envs.NODE_ENV == 'DEV') {
        return next();
      }
      const userRole = USER_ROLES[req.user?.role];
      if (userRole === undefined || requiredPermission < userRole) {
        throw customError(PERMISSION_DENIED);
      }
      next();
    } catch (err) {
      next(err);
    }
  };
