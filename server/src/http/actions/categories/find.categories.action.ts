import { Request, Response } from 'express';
import categoryRepository from '../../../infrastructure/repositories/category.repository';

class GetCategoriesAction {
    public async run(_req: Request, res: Response) {
        try {

            const categories = await categoryRepository.findAll();

            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener las categorías.' });
        }
    }
}
export default new GetCategoriesAction();