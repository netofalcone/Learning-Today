import { Document } from 'mongoose';
// import {} from '../schemas/User';

export interface UserInterface extends Document {
    email?: string;
    firstName?: string;
    lastName?: string;
    fullName(): string;
}
