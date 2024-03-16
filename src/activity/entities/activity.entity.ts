import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Activity {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    activity: string;

    @Column()
    emission: string;

    @Column('decimal', { precision: 6, scale: 2 })
    value: number;

    @Column()
    unit: string;
}
