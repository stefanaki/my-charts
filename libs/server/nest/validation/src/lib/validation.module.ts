import { Module } from '@nestjs/common';
import { ValidationService } from './validation.service';
import { ValidationController } from './validation.controller';
import { DatafilesService } from '@ntua-saas-10/server/nest/datafiles';
import { ChartConfigService } from '@ntua-saas-10/server/nest/chart-config';
import { TransactionService } from '@ntua-saas-10/server/nest/transaction';

@Module({
  controllers: [ValidationController],
  providers: [ValidationService, DatafilesService, ChartConfigService, TransactionService],
})
export class ValidationModule {}
