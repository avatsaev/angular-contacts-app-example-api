import {Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import {Contact} from '../models/contact';

@Entity()
export class ContactEntity implements Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    @Column({
        nullable: false,
        length: 500,
        unique: true
    })
    name: string;

    @PrimaryColumn()
    @Column({
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        unique: true,
        nullable: false,
    })
    phone: string;

    @CreateDateColumn()
    createdAt;

    @UpdateDateColumn()
    updatedAt;

}
