import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('service_order')
class ServiceOrder {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  requester: string;

  @Column()
  department: string;

  @Column('timestamp with time zone')
  date_start: Date;

  @Column()
  phone: string;

  @Column()
  clerk: string;

  @Column()
  reason: string;

  @Column()
  service: string;

  @Column()
  technician: string;

  @Column('timestamp with time zone')
  date_end: Date;

  @Column('time with time zone')
  hour_end: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ServiceOrder;
