import visitorRepository, {VisitorRepository} from '../../../infrastructure/repositories/visitor.repository';
import CreateVisitorCommand from '../../commands/visitors/create.visitor.command';
import Visitor from '../../../domain/entities/visitor.entity';

export class CreateVisitorHandler {
  private visitorRepository: VisitorRepository;

  public constructor(visitorRepository: VisitorRepository) {
    this.visitorRepository = visitorRepository;
  }

  public async handle(command: CreateVisitorCommand): Promise<void> {
    const visitor = Visitor.create(
      command.getIp(),
      command.getNickname(),
      command.getPin()
    );

    await this.visitorRepository.save(visitor);
  }
}

export default new CreateVisitorHandler(
  visitorRepository
);
