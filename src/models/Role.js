import { Schema, model, version } from 'mongoose';

export const ROLES = ['user', 'admin', 'moderator'];

const roleSchema = new Schema(
  {
    name: String,
  },
  { version: false }
);

export default model('Role', roleSchema);
