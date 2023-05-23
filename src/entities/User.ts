// Hacemos la importacion de Entity, esto con el fin de que me detecte que es un modelo ORM
import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm'

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstname: string

    @Column()
    lastname: string

    @CreateDateColumn()
    created: Date
}