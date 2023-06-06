import { Module } from '@nestjs/common';
import { DatafilesService } from './datafiles.service';
import { DatafilesController } from './datafiles.controller';
import { FilenameService } from '@ntua-saas-10/nest-resources/filename';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [ConfigModule],
  controllers: [DatafilesController],
  providers: [DatafilesService, FilenameService, ConfigService],
})
export class DatafilesModule {}