import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentsRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = this.paymentsRepository.create(createPaymentDto);
    return await this.paymentsRepository.save(payment);
  }

  async findAll() {
    return await this.paymentsRepository.find();
  }

  async findOne(id: number) {
    return await this.paymentsRepository.findOneBy({ id });
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return await this.paymentsRepository.update(id, updatePaymentDto);
  }

  async remove(id: number) {
    return await this.paymentsRepository.delete(id);
  }
}
