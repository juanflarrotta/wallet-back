import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PaymentMethod {
  CASH = 'Efectivo',
  CARD_DEBIT_BANK_BOGOTA = 'Tarjeta credito banco bogota',
  CARD_CREDIT_BANK_BOGOTA = 'Tarjeta debito banco bogota',
  CARD_CREDIT_FALABELLA = 'Tarjeta credito banco falabella',
  NEQUI = 'Nequi',
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}
