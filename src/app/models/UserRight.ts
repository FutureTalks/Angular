import { Rights } from './enum/Rights';

export interface UserRight {
    email: string;
    rights: Rights;
}