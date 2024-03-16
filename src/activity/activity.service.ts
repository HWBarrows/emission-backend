import { Injectable, Inject } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Repository } from 'typeorm';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @Inject('Activity_Repository')
    private activityRepository: Repository<Activity>
  ) {}

  create(createActivityDto: CreateActivityDto) {
    return 'This action adds a new activity';
  }

  async findAll() {
    return await this.activityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} activity`;
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return `This action updates a #${id} activity`;
  }

  remove(id: number) {
    return `This action removes a #${id} activity`;
  }
}
