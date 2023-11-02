import { Request, Response } from "express";
import claimRepository, {ClaimRepository} from "../../../infrastructure/repositories/claim.repository";

class GetFiveOnFireAction {

  constructor(
    private claimRepository: ClaimRepository,
  ) {
  }
    public async run(_req: Request, res: Response) {
        try {
            const lastFiveClaimsOnFire = await this.claimRepository.lastFiveOnFireInLastHour();
            return res.status(200).json({
              claims: lastFiveClaimsOnFire.map(c => ({
                id: c.getId(),
                title: c.getTitle(),
                description: c.getDescription(),
              })),
            });
        } catch (error) {
            return res.status(500).json({ error: "Error al obtener los ultimos 5 reclamos 'on fire'" });
        }
    }
}

export default new GetFiveOnFireAction(claimRepository);