import {Request, Response} from 'express';
import claimRepository, {ClaimRepository} from '../../../infrastructure/repositories/claim.repository';

class FindLastClaimAction {

  constructor(
    private claimRepository: ClaimRepository,
  ) {
  }

  public async run(_req: Request, res: Response) {
    try {

      const lastClaims = await this.claimRepository.findLast5Claims();

      res.status(200).json({
        claims: lastClaims.map(c => ({
          id: c.getId(),
          title: c.getTitle(),
          description: c.getDescription(),
        })),
      });
    } catch (error) {
      res.status(500).json({error: 'Error al obtener los reclamos más recientes.'});
    }
  }
}

export default new FindLastClaimAction(claimRepository);